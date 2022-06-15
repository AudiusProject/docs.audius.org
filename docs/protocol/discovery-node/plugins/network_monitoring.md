---
sidebar_label: Network Monitoring
sidebar_position: 1
---

# Audius Network Monitoring

**Network Monitoring** refers to network-wide metrics we collect from a discovery node and aggregate to assess the health of the entire network.

Note - This is different from node-level metrics which are scraped by prometheus from the content and discovery nodes through a special `/prometheus_metrics` route.

Here are some metrics that we intend to:

- The number of CID on each CN that have been replicated at least once
- The number of CID on each CN that have ***NOT*** been replicated at least once
- [ex 1] **The number of users with a specific CN as their primary**
- The number of users with a specific CN in their replica set
- CID replication across the CNs
- CID replication factor
- The number of users with their data syncs across 0, 1, 2, or 3 CNs

Metrics are collected and calculated on a nightly basis.

---

## Installation

### Prereqs

- Docker installed
- Direct access to a Discovery Node postgres DB
- Secrets file, with the correct permission, formatted like so
    
    ```json
    {
    	"signatureSpID": 42,
    	"signatureSPDelegatePrivateKey": "0x123123123123123"
    }
    ```
    

### Running services

By default, this will run every service which includes

- network monitoring CRON
- postgres
- prometheus push-gateway
- prometheus
- grafana

```bash
docker-compose up
```

---

## Metrics

Currently, we compute three metrics

- All User Count
    - The number of users with a specific content node in their replica set
- Primary User Count
    - The number of users with a specific content node as their primary
- Fully Synced User Count
    - The number of users with a replica set that’s fully synced (all clock values are the same)

What we are planning to add

- The number of CID on each CN that have been replicated at least once
- The number of CID on each CN that have ***NOT*** been replicated at least once
- CID replication across the CNs
- CID replication factor

---

## How it works

Network Monitoring internally connects directly to the postgres instance running on a discovery node. With the information pulled from the discovery node, information is pulled from every content node to:

1. Verify that the info coming from the discovery node is correct
2. Make sure user data is getting replicated properly within a user's replica set

Data collected from both the discovery node and content nodes is aggregated and exposed using a [Prometheus Push Gateway](https://prometheus.io/docs/practices/pushing/).

![NetworkMonitoring.png](/img/NetworkMonitoring.png)

### Database

At its core, Network Monitoring is a postgres database designed for [OLAP](https://en.wikipedia.org/wiki/Online_analytical_processing) style queries. The database contains snapshots of discovery node indexes and content node indexes, delimited by specific runs.

:::info
        Since Network Monitoring runs jobs nightly, one run corresponds to one day
:::

![network_monitoring_er_diagram.png](/img/network_monitoring_er_diagram.png)

### Prometheus Monitoring

Metrics are pushed to a [push gateway](https://prometheus.io/docs/practices/pushing/) for consumption by Prometheus ([https://prometheus.io/docs](https://prometheus.io/docs)).

Metrics are exposed via the `GET /metrics` route on the `push-gateway`.

We use [JS client library `prom-client`](https://github.com/siimon/prom-client) to produce these metrics.

---

## Adding New Metrics

Metrics are simply SQL queries to the network monitoring database that are expose to prometheus using the push-gateway. To add new metrics, one must

- Create the SQL query
- Connect the SQL query to the typescript project using `sequelize`
- Create the prometheus metric
- Push the output of the SQL query to the newly created prometheus metric

To use the metric `fullySyncedUserCount` metric as an example, in `queries.ts` , the SQL query for getting that metric look like this

```tsx
export const getFullySyncedUsersCount = async (run_id: number): Promise<number> => {
    const usersResp: unknown[] = await sequelizeConn.query(`
        SELECT COUNT(*) as user_count
        FROM network_monitoring_users
        WHERE
            run_id = :run_id
        AND 
            primary_clock_value IS NOT NULL
        AND
            primary_clock_value = secondary1_clock_value
        AND
            secondary1_clock_value = secondary2_clock_value;
    `, {
        type: QueryTypes.SELECT,
        replacements: { run_id },
    })

    const usersCount = parseInt(((usersResp as { user_count: string }[])[0] || { user_count: '0' }).user_count)

    return usersCount
}
```

In `prometheus.ts` , the prometheus metric is a gauge that looks like this

```tsx
export const fullySyncedUsersCountGauge = new client.Gauge({
    name: 'full_synced_user_count',
    help: 'the number of users whose content nodes replicas are all in sync',
    labelNames: ['run_id']
})
```

Finally, in `metrics.ts` , the output of the metric is pushed to the prometheus gauge like so:

```tsx
const fullySyncedUsersCount = await getFullySyncedUsersCount(run_id)

fullySyncedUsersCountGauge.set({ run_id }, fullySyncedUsersCount)
```
