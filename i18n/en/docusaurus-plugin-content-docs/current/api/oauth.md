---
sidebar_label: Log in with Audius
sidebar_position: 3
---

# Log in with Audius

## Table of contents

- [Overview](#overview)
  - [Authentication, not authorization](#authentication-not-authorization)
- [Workflow](#workflow)
  - [Demo](#demo)
  - [Quick links](#quick-links)
- [How to implement Log in with Audius with the Javascript SDK](#how-to-implement-log-in-with-audius-with-the-javascript-sdk)
  - [1. Initialize the SDK `oauth` feature](#1-initialize-the-sdk-oauth-feature)
    - [<ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>](#insoauthinitloginsuccesscallback-errorcallbackins)
  - [2. Render the Log in with Audius button](#2-render-the-log-in-with-audius-button)
    - [<ins>**oauth.renderButton(element, customizations)**</ins>](#insoauthrenderbuttonelement-customizationsins)
    - [_💡 **Tip**: Detect when the button has rendered and show a loader until then_:](#-tip-detect-when-the-button-has-rendered-and-show-a-loader-until-then)
    - [<ins>**oauth.login()**</ins>](#insoauthloginins)
  - [3. Done!](#3-done)
  - [Addendum: A quick note on email](#addendum-a-quick-note-on-email)
  - [Full code example using React and npm package](#full-code-example-using-react-and-npm-package)
  - [Full code example using vanilla JS and SDK dist](#full-code-example-using-vanilla-js-and-sdk-dist)
- [How to implement Log in with Audius manually](#how-to-implement-log-in-with-audius-manually)
  - [1. Open the Log in with Audius prompt page](#1-open-the-log-in-with-audius-prompt-page)
  - [1.5 Remember to handle early exiting (i.e. failure) of the authentication flow](#15-remember-to-handle-early-exiting-ie-failure-of-the-authentication-flow)
  - [2. Process and verify the response](#2-process-and-verify-the-response)
    - [**If you used a redirect URI**:](#if-you-used-a-redirect-uri)
    - [**If you used `redirectURI=postmessage`**:](#if-you-used-redirecturipostmessage)
    - [**Handling the response**](#handling-the-response)
  - [3. Done!](#3-done-1)
  - [Addendum: A quick note on email](#addendum-a-quick-note-on-email-1)

## Overview

Log in with Audius allows your app to retrieve and verify a user's Audius profile information without requiring the user to give you their Audius password.

You can leverage this flow for a variety of use cases, for example:

- Provide a secure and convenient way for users to sign up and/or log in to your app without having to set a password or fill in a profile form
- Associate a user to their Audius account so that you can retrieve their Audius data (e.g. retrieve their tracks)
- Confirm if a user is a "Verified" Audius artist

However, note that this flow **CANNOT**:

- Manage the user's login session on your app
- Grant your app permission to perform actions on Audius on the user's behalf (see more below)  
  <br />

### Authentication, not authorization

Please note that Log in With Audius is able to provide authentication, but not authorization (yet!). That is, this flow does not yet provide the ability to obtain permissions to perform actions on the user's behalf (for example, upload a track).

<br />

<img src="../../static/img/oauthpopup.png" height="488" width="252" alt="Log in with Audius popup" />

_Log in with Audius dialog_

<br />

## Workflow

The "Log in with Audius" flow looks like this:

1. You provide a button on your app or website to begin the authentication flow
2. When the user clicks the button, it opens a popup containing an Audius login page that prompts the user to sign in with their Audius credentials (alternatively, your app/website can redirect to the Audius login page instead of using a popup)
3. Once the user successfully signs in, Audius provides your app/website with the user profile using a JSON Web Token (JWT)
4. Your app verifies and decodes the JWT

The JWT payload contains the following information about the user:

- Unique identifier (Audius user id)
- Email
- Display name
- Audius handle
- Whether the user is a verified artist (i.e. has a purple checkmark)
- Profile picture URL, if any

### Demo

Check out a quick demo of the Oauth flow [here](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)!

### Quick links

- Demo with React - [Demo app](https://j2jx6f.csb.app/) | [Code](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f?file=/src/App.js)
- Demo with vanilla JS - [Demo app](https://xkogl3.csb.app/) | [Code](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)
- [Button configurator](https://9ncjui.csb.app/)

<br />

## How to implement Log in with Audius with the Javascript SDK

The easiest way to add Log in with Audius to your app is to use the Javascript SDK. If you are not able to use the Javascript SDK (for example, if you are developing a mobile app), skip to
"How to implement Log in with Audius manually".

Prerequisites:

- [Set up and initialize the Audius SDK on your app](./sdk.md#installation)

### 1. Initialize the SDK `oauth` feature

First, you must call `oauth.init` and provide it with your app name, a login success callback, and an optional error callback:

#### <ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>

enables the Log in with Audius functionality.

**Params**

- loginSuccessCallback `(profile: UserProfile) => void` - function to be called when the user successfully authenticates with Audius. This function will be called with the user's profile information, which is an object with the following shape:

  ```typescript
  // type UserProfile =
  {
    userId: number; // unique Audius user identifier
    email: string;
    name: string; // user's display name
    handle: string;
    verified: boolean; // whether the user has the Audius "verified" checkmark

    /** URLs for the user's profile picture, if any.
     * In the vast majority of cases, three sizes will be available - 150x150, 480x480, and 1000x1000.
    * In rare cases, only an unknown size `misc` will be available.
    * If the user has no profile picture, this field will be empty.
    */
    profilePicture: {"150x150": string, "480x480": string, "1000x1000": string } | { misc: string } | undefined | null
    sub: number; // alias for userId
    iat: string; // timestamp for when auth was performed
  }
  ```

- errorSuccessCallback _optional_ `(errorMessage: string) => void` - function to be called when an error occurs during the authentication flow. This function will be called with a string describing the error.

**Returns**: Nothing

Example:

```javascript
audiusSdk.oauth.init(
  (res) => {
    console.log("Log in success!", res);
  },
  (err) => {
    console.log("Error :(", err);
  }
);
```

<br />

### 2. Render the Log in with Audius button

You can either use the `oauth.renderButton` method or implement a login button yourself and invoke the login popup with `oauth.login`.

**Using `oauth.renderButton` (recommended)**:

#### <ins>**oauth.renderButton(element, customizations)**</ins>

replaces the element passed in the first parameter with the Log in with Audius button

**Params**

- element `HTMLElement` - HTML element to replace with the Log in with Audius button
- customizations _optional_ `ButtonOptions` - optional object containing the customization settings for the button to be rendered. Here are the options available:

  ```typescript
  // type ButtonOptions =
  {
    // Size of the button:
    size?: 'small' | 'medium' | 'large'

    // Corner style of the button:
    corners?: 'default' | 'pill'

    // Your own text for the button; default is "Log in with Audius":
    customText?: string

    // Whether to disable the button's "grow" animation on hover:
    disableHoverGrow?: boolean

    // Whether the button should take up the full width of its parent element:
    fullWidth?: boolean
  }
  ```

  Use [this playground](https://9ncjui.csb.app/) to see how these customizations affect the button appearance and determine what config works best for your app.

**Returns**: Nothing

Example:

```javascript
<!-- Javascript -->
audiusSdk.oauth.renderButton(document.getElementById('audiusLogInButton'), {
  size: 'large',
  corners: 'pill',
  customText: 'Continue with Audius'
})

<!-- HTML -->
<div id="audiusLogInButton"></div>
```

<br />

#### _💡 **Tip**: Detect when the button has rendered and show a loader until then_:

The button may take up to a couple of seconds to load. You may want to show a loading indicator until the button has loaded for an optimal user experience.

The log in button will be rendered with an id of `audius-login-button`. You can detect when the element has been added using a MutationObserver:

Example:

```HTML
<!-- In your HTML -->
<!-- Surround your element that will be replaced with the Log in with Audius button with a parent, e.g.: -->
<div id="parent">
  <div id="audiusLogInButton"></div>
  <!-- You probably want a better loading indicator than this :P -->
  <div id="loading">Loading...</div>
</div>

```

```JS
// In your JS
const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			if (added_node.id == 'audius-login-button') {
        // Login button has rendered
        document.querySelector('#loading').remove()
        observer.disconnect();
			}
		});
	});
});

observer.observe(document.querySelector("#parent"), { subtree: false, childList: true });

```

<br />

**Using your own button and `oauth.login`**:

#### <ins>**oauth.login()**</ins>

opens the Log in with Audius popup, which begins the authentication flow

**Params**

None

**Returns**: Nothing

Example:

```javascript
<!-- Javascript -->
function logInWithAudius() {
  audiusSdk.oauth.login()
}

<!-- HTML -->
<button onclick="logInWithAudius()">Log in with Audius!</button>
```

<br />

### 3. Done!

That's it! See below for full code examples.

### Addendum: A quick note on email

Once you know your user's Audius user id, you can retrieve their Audius information at any time using our SDK or web APIs. However, the one piece of profile information that is not available outside of the Log in with Audius response is the user's email address. If you do not store the user's email address after you receive it in the Log in with Audius success response, you can only re-retrieve the email through having the user re-complete the Log in with Audius flow.

### Full code example using React and npm package

[View sandbox here](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)

### Full code example using vanilla JS and SDK dist

[View sandbox here](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)

<br />
<br />

## How to implement Log in with Audius manually

If you are not able to use the Audius Javascript SDK, you may implement Log in with Audius manually by following the steps below.

### 1. Open the Log in with Audius prompt page

Create a "Log in with Audius" button on your app. If using HTML (or HTML-like markup) and CSS, you may use [this playground](https://j2jx6f.csb.app/) to easily customize and generate code for an Audius-branded login button.

Clicking your log in button should begin the authentication flow by directing the user to the Log in with Audius prompt page.

On a native app, the log in button should open a secure web browser within the app (for instance ASWebAuthenticationSession or SFSafariViewController on iOS apps, and “Custom Tabs” on Android mobile apps) that loads the Audius login page. A web app, meanwhile, should open the Audius login page in a popup or simply redirect to it.

The Log in with Audius prompt page is located at the following URL:

`https://audius.co/oauth/auth?scope=read&app_name={YourAppName}&redirect_uri={YourRedirectURI}&origin={YourAppOrigin}&state={YourStateValue}&response_mode={query|fragment}`

You must open this page with the required URL parameters, described below.

**Params**

- scope `"read"` - the scope of the authentication request. Only `"read"` is available (i.e. don't change this).
- app_name `string` - the name of your app. This will be displayed to the user in the log in prompt page.
- redirect_uri `string` - the location that the Audius login page should redirect to once the user successfully authenticates. Custom URL schemes are allowed and supported. You can use the special value `postmessage` here if you would like the login page to send the response back to its opener using `window.postMessage` instead of using a redirect. Otherwise, the following validation rules apply:

  - Hosts cannot be raw IP addresses UNLESS they are localhost IP addresses
  - Cannot contain the fragment component (`#`)
  - Cannot contain the `userinfo` component
  - Cannot contain a path traversal (contain `/..` or `\..`)
  - Must contain valid characters and URI format

- origin _optional_ `string` only applicable and required if `redirect_uri` is set to `postmessage`. If so, this value should be set to the [origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) of the window that opened the Log in with Audius popup.
- state _optional but highly recommended_ - `string` any string. When the user is redirected back to your app, the exact `state` value you provide here will be included in the redirect (in the `state` URI fragment parameter). **This field should be leveraged as a CSRF protection mechanism** (read more [here](https://auth0.com/docs/secure/attack-protection/state-parameters) or [here](https://security.stackexchange.com/questions/20187/oauth2-cross-site-request-forgery-and-state-parameter)), and may also be used as a way to persist any useful data for your app between where the `state` value is generated and where the redirect goes.
- `response_mode` _optional, not recommended when possible_ - `"fragment" | "query"` specifies whether the auth flow response parameters will be encoded in the query string or the fragment component of the redirect_uri when redirecting back to your app. Default behavior is equivalent to "fragment". We recommend NOT changing this if possible.

**Example**

```HTML
<a href="https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9">Click me to log in with Audius!</a>
```

### 1.5 Remember to handle early exiting (i.e. failure) of the authentication flow

If the user exits the authentication flow before completing it--e.g. by closing the window--your app should detect this and have the UI respond accordingly.

<br />

### 2. Process and verify the response

#### **If you used a redirect URI**:

When the user has successfully authenticated, the Log in with Audius page will redirect to the redirect URI that you specified, **with 1) the JWT containing the user profile, and 2) the original state value you provided (if any) included in the URI fragment** (or query string, if `response_mode` was set to `query`). To illustrate, going off the example above where we opened the login page with the following URL:
`https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

...when the user successsfully authenticates, the login page would redirect to...:
`https://mydemoapp.com/oauth/receive-token#state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}`
where `{JWT}` is a [JSON web token](https://jwt.io/introduction) containing the user's encoded profile information and a signature.

> If you specified `response_mode=query` when opening the login page, the login page would instead redirect to...:
>
> `https://mydemoapp.com/oauth/receive-token?state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}`

See "**Handling the response**" below for what to do next.

<br />

#### **If you used `redirectURI=postmessage`**:

When the user has successfully authenticated, the Log in with Audius page will send a message via `window.postMessage` to the window that opened it. The message will contain a JWT containing the user profile as well as whatever `state` value you originally specified in the corresponding URL param, if any.
For instance, if your app opened the login page using the following URL: `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

... the message would look like this:

```
{
  token: <JWT>,
  state: 'a4e0761e-8c21-4e20-819d-5a4daeab4ea9'
}
```

where `<JWT>` is a [JSON web token](https://jwt.io/introduction) containing the user's encoded profile information and a signature.

Quick reminder - make sure that your `postMessage` event listener validates that the origin of the incoming event is `https://audius.co`!

<br />

#### **Handling the response**

Extract the JWT (`token`) from the URI fragment or query string (if you used a redirect) or the event message (if you used `postmessage`).

Once you have the token, you must send it to the following Audius API endpoint in order to verify that a) the signature was signed by the Audius user who completed the authentication, and b) the content of the token hasn't been tampered with. Upon verifying the validity of the JWT, the endpoint will return the authenticated user's decoded profile information.

<ins>GET `/v1/users/verify_token?token=[JWT]`</ins>

**Params**

- token `string` - the JWT from the authentication flow that you would like to verify

**Sending the request**

To use the API, you first select an API endpoint from the list of endpoints returned by:

`GET https://api.audius.co`

Once you've selected a host, all API requests can be sent directly to it. For instance, if you picked this host:
`https://audius-dp.singapore.creatorseed.com`, you would issue the verify token request to `https://audius-dp.singapore.creatorseed.com/v1/users/verify_token?token=<JWT>`, where `<JWT>` is replaced with the JWT you retrieved in the auth flow.

We recommend selecting a host each time your application starts up as availability may change over time.

**Success response**

- Code: 200 OK
- Content: The decoded JWT payload, which contains the user's profile information:

```typescript
{
  userId: number, // unique Audius user identifier
  email: string,
  name: string, // user's display name
  handle: string,
  verified: boolean, // whether the user has the Audius "verified" checkmark

  /** URLs for the user's profile picture, if any.
   * In the vast majority of cases, three sizes will be available - 150x150, 480x480, and 1000x1000.
  * In rare cases, only an unknown size `misc` will be available.
  * If the user has no profile picture, this field will be empty.
  */
  profilePicture: {"150x150": string, "480x480": string, "1000x1000": string } | { misc: string } | undefined | null
  sub: number, // alias for userId
  iat: string, // timestamp for when auth was performed
}
```

**Error responses**

<ins>Invalid signature</ins>:

- Code: `404` Not Found
- Content: Error message describing the issue that occurred, e.g. "The JWT signature is invalid - wallet could not be recovered."

<ins>Problem with `token` input</ins>:

- Code: `400` Bad Request
- Content: Error message, e.g. "the JWT signature could not be decoded."

<br />

### 3. Done!

Once you've verified the JWT, the authentication flow is complete and you now have your user's Audius profile information.

### Addendum: A quick note on email

Once you know your user's Audius user id, you can retrieve their Audius information at any time using our SDK or web APIs. However, the one piece of profile information that is not available outside of the Log in with Audius response is the user's email address. If you do not store the user's email address after you receive it in the Log in with Audius success response, you can only re-retrieve the email through having the user re-complete the Log in with Audius flow.
