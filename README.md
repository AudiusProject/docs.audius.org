# docs.audius.org

## Dev

```
npm start
```


## Build

```
npm run build
```

## Publish

```
npm run build
wrangler publish
```


## Translate

```
npm run prepare:translations
```

This will write translations to the i18n folder.
If you modify markdown files while running the local dev server, you will need to prepare the translations as /i18n/en is the default entrypoint.

