---
sidebar_label: Iniciar sesión con Audius
sidebar_position: 3
---

# Iniciar sesión con Audius

## Tabla de contenidos

- [Vista general](#overview)
  - [Autenticación, no autorización](#authentication-not-authorization)
- [Flujo trabajo](#workflow)
  - [Demo](#demo)
  - [Enlaces rápidos](#quick-links)
- [Cómo implementar Iniciar sesión con Audius con el SDK de Javascript](#how-to-implement-log-in-with-audius-with-the-javascript-sdk)
  - [1. Inicializar la función SDK `oauth`](#1-initialize-the-sdk-oauth-feature)
    - [<ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>](#insoauthinitloginsuccesscallback-errorcallbackins)
  - [2. Procesar el inicio de sesión con el botón Audius](#2-render-the-log-in-with-audius-button)
    - [<ins>**oauth.renderButton(element, customizations)**</ins>](#insoauthrenderbuttonelement-customizationsins)
    - [_💡 **Consejo**: Detectar cuando el botón se ha renderizado y mostrar un cargador hasta entonces_:](#-tip-detect-when-the-button-has-rendered-and-show-a-loader-until-then)
    - [<ins>**oauth.login()**</ins>](#insoauthloginins)
  - [3. ¡Listo!](#3-done)
  - [Agendo: Una nota rápida en el correo electrónico](#addendum-a-quick-note-on-email)
  - [Ejemplo de código completo usando el paquete React y npm](#full-code-example-using-react-and-npm-package)
  - [Ejemplo de código completo usando vainilla JS y dist SDK](#full-code-example-using-vanilla-js-and-sdk-dist)
- [Cómo implementar Inicio de sesión con audio manualmente](#how-to-implement-log-in-with-audius-manually)
  - [1. Abrir la página de inicio de sesión con Audius](#1-open-the-log-in-with-audius-prompt-page)
  - [1.5 Recuerde manejar la salida anticipada (por ejemplo, fallida) del flujo de autenticación](#15-remember-to-handle-early-exiting-ie-failure-of-the-authentication-flow)
  - [2. Procesar y verificar la respuesta](#2-process-and-verify-the-response)
    - [**Si usaste una URI de redirección**:](#if-you-used-a-redirect-uri)
    - [**Si has usado `redirectURI=postmessage`**:](#if-you-used-redirecturipostmessage)
    - [**Manejando la respuesta**](#handling-the-response)
  - [3. ¡Listo!](#3-done-1)
  - [Agendo: Una nota rápida en el correo electrónico](#addendum-a-quick-note-on-email-1)

## Vista general

Iniciar sesión con Audius permite que tu aplicación recupere y verifique la información de perfil de un usuario sin requerir que el usuario le proporcione su contraseña de Audius.

Puedes aprovechar este flujo para una variedad de casos de uso, por ejemplo:

- Proporciona una forma segura y conveniente para que los usuarios se registren y/o inicien sesión en tu aplicación sin tener que establecer una contraseña o rellenar un formulario de perfil
- Asocia un usuario a su cuenta de Audius para que puedas recuperar sus datos de Audius (por ejemplo, recuperar sus canciones)
- Confirmar si un usuario es un artista de Audius "Verificado"

Sin embargo, tenga en cuenta que este flujo **NO PUEDE**:

- Administrar la sesión de usuario en tu aplicación
- Otorga permiso a tu aplicación para realizar acciones en el Audius en nombre del usuario (ver más abajo)  
  <br />

### Autenticación, no autorización

Por favor, ten en cuenta que iniciar sesión con Audius es capaz de proporcionar autenticación, pero no autorización (¡aún!). Es decir, este flujo todavía no proporciona la capacidad de obtener permisos para realizar acciones en nombre del usuario (por ejemplo, subir una canción).

<br />

<img src="../../static/img/oauthpopup.png" height="488" width="252" alt="Iniciar sesión con la ventana emergente de Audius" />

_Iniciar sesión con el diálogo de Audius_

<br />

## Flujo trabajo

El flujo de "Iniciar sesión con audius" se ve así:

1. Usted proporciona un botón en su aplicación o sitio web para iniciar el flujo de autenticación
2. Cuando el usuario hace clic en el botón, abre una ventana emergente que contiene una página de inicio de sesión de Audius que solicita al usuario que inicie sesión con sus credenciales de Audius (alternativamente, tu aplicación/sitio web puede redirigir a la página de inicio de sesión de Audius en lugar de usar un popup)
3. Una vez que el usuario se registra correctamente, Audius proporciona a tu app/website el perfil de usuario usando un JSON Web Token (JWT)
4. Tu aplicación verifica y decodifica el JWT

El payload de JWT contiene la siguiente información sobre el usuario:

- Identificador único (id de usuario de Audius)
- Correo
- Nombre mostrado
- Usuario de Audius
- Si el usuario es un artista verificado (es decir, tiene una verificación morada)
- URL de la imagen de perfil, si hay alguna

### Demo

Echa un vistazo a una demostración rápida del flujo [aquí](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)!

### Enlaces rápidos

- Demostración con React - [Demo app](https://j2jx6f.csb.app/) | [Code](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f?file=/src/App.js)
- Demostración con vanilla JS - [Demo app](https://xkogl3.csb.app/) | [Código](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)
- [Configurador de botones](https://9ncjui.csb.app/)

<br />

## Cómo implementar Iniciar sesión con Audius con el SDK de Javascript

La forma más fácil de añadir Audius a tu aplicación es utilizar el SDK Javascript. Si no es capaz de utilizar el SDK Javascript (por ejemplo, si está desarrollando una aplicación móvil), saltar a "Cómo implementar Iniciar sesión con Audius manualmente".

Requisitos previos:

- [Configura e inicializa el SDK de Audius en tu aplicación](./sdk.md#installation)

### 1. Inicializar la función SDK `oauth`

Primero, debe llamar a `oauth.init` y proporcionarle el nombre de su aplicación, un callback de inicio de sesión con éxito y un callback de error opcional:

#### <ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>

permite iniciar sesión con la funcionalidad de Audius.

**Params**

- loginSuccessCallback `(perfil: UserProfile) => void` - función a ser llamada cuando el usuario se autentifica correctamente con Audius. Esta función se llamará con la información del perfil del usuario, que es un objeto con la siguiente forma:

  ```typescript
  // type UserProfile =
  {
    userId: number; // unique Audius user identifier
    email: string;
    name: string; // user's display name
    handle: string;
    verified: boolean; // whether the user has the Audius "verified" checkmark

    /** URLs for the user's profile picture, if any.
     * En la gran mayoría de los casos, habrá tres tamaños disponibles: 150x150, 480x480, y 1000x1000.
    * En raros casos, sólo un tamaño desconocido `misc` estará disponible.
    * Si el usuario no tiene una imagen de perfil, este campo estará vacío.
    */
    profilePicture: {"150x150": string, "480x480": string, "1000x1000": string } | { misc: string } | undefined | null
    sub: number; // alias for userId
    iat: string; // timestamp for when auth was performed
  }
  ```

- errorSuccessCallback _optional_ `(errorMessage: string) => void` - función a ser llamada cuando ocurre un error durante el flujo de autenticación. Esta función será llamada con una cadena que describe el error.

**Devuelve**: Nada

Ejemplo:

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

### 2. Procesar el inicio de sesión con el botón Audius

Puede usar el método `oauth.renderButton` o implementar un botón de inicio de sesión usted mismo e invocar el popup de inicio de sesión con `oauth.login`.

**Using `oauth.renderButton` (recommended)**:

#### <ins>**oauth.renderButton(element, customizations)**</ins>

reemplaza el elemento pasado en el primer parámetro con el botón Iniciar sesión con el botón Audius

**Params**

- element `HTMLElement` - elemento HTML para reemplazar con el botón Iniciar sesión con el botón Audius
- personalización _optional_ `ButtonOptions` - objeto opcional que contiene la configuración de personalización para que el botón sea representado. Estas son las opciones disponibles:

  ```typescript
  // type ButtonOptions =
  {
    // Tamaño del botón:
    size? 'small' | 'medium' | 'large'

    // ¿Estilo de esquina del botón:
    corners? 'default' | 'pill'

    // Tu propio texto para el botón; por defecto es "Iniciar sesión con audius":
    customText? string

    // ¿Deshabilitar la animación "crecer" del botón al pasar el ratón:
    disableHoverí? boolean

    // Si el botón debe ocupar el ancho completo de su elemento padre:
    fullWidth? boolean
}
  ```

  Usa [este playground](https://9ncjui.csb.app/) para ver cómo estas personalizaciones afectan la apariencia del botón y determinar qué configuración funciona mejor para tu aplicación.

**Devuelve**: Nada

Ejemplo:

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

#### _💡 **Consejo**: Detectar cuando el botón se ha renderizado y mostrar un cargador hasta entonces_:

El botón puede tardar hasta un par de segundos en cargar. Puede que desee mostrar un indicador de carga hasta que el botón se haya cargado para una experiencia óptima del usuario.

El botón de inicio de sesión se mostrará con un id de `audius-login-button`. Puedes detectar cuando el elemento ha sido añadido usando un MutationObserver:

Ejemplo:

```HTML
<!-- En tu HTML -->
<! - Envoltura de su elemento que será reemplazado por el botón Iniciar sesión con el botón Audius con un padre, p.ej. -->
<div id="parent">
  <div id="audiusLogInButton"></div>
  <! - Probablemente desee un mejor indicador de carga que este :P -->
  <div id="loading">cargando. .</div>
</div>

```

```JS
// En tu JS
const observer = new MutationObserver(function(mutations_list) {
    mutations_list. orEach(function(mutation) {
        mutation.addedNodes. orEach(function(added_node) {
            if (added_node. d == 'audio login-button') {
        // El botón de inicio de sesión ha renderizado
         document.querySelector('#loading').remove()
        observer.disconnect();
            }
        });
    });
});

observer.observe(document.querySelector("#parent"), { subtree: false, childList: true });

```

<br />

**Usando tu propio botón y `oauth.login`**:

#### <ins>**oauth.login()**</ins>

abre el inicio de sesión con la ventana emergente de Audius, que inicia el flujo de autenticación

**Params**

Ninguna

**Devuelve**: Nada

Ejemplo:

```javascript
<!-- Javascript -->
function logInWithAudius() {
  audiusSdk.oauth. ogin()
}

<!-- HTML -->
<button onclick="logInWithAudius()">¡Inicia sesión con audius!</button>
```

<br />

### 3. ¡Listo!

¡Eso es todo! Vea a continuación los ejemplos de código completo.

### Agendo: Una nota rápida en el correo electrónico

Una vez que conozcas el id de usuario de Audius de tu usuario, podrás recuperar su información de Audius en cualquier momento usando nuestras API SDK o web. Sin embargo, la única información de perfil que no está disponible fuera de la respuesta de Audius es la dirección de correo electrónico del usuario. Si no almacena la dirección de correo electrónico del usuario después de recibirla en el inicio de sesión con la respuesta de éxito de Audius, sólo puede recuperar el correo electrónico si el usuario vuelve a completar el registro con el flujo de Audius.

### Ejemplo de código completo usando el paquete React y npm

[Ver el sandbox aquí](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)

### Ejemplo de código completo usando vainilla JS y dist SDK

[Ver el sandbox aquí](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)

<br />
<br />

## Cómo implementar Inicio de sesión con audio manualmente

Si no es capaz de utilizar el SDK de Javascript de Audius, puede implementar Iniciar sesión con Audius manualmente siguiendo los siguientes pasos.

### 1. Abrir la página de inicio de sesión con Audius

Crea un botón "Iniciar sesión con Audius" en tu aplicación. Si se utiliza HTML (o HTML similar a una etiqueta) y CSS, puedes usar [este playground](https://j2jx6f.csb.app/) para personalizar y generar fácilmente un código para un botón de inicio de sesión con Audius.

Al hacer clic en el botón de inicio de sesión se iniciará el flujo de autenticación dirigiendo al usuario a la página de inicio de sesión con el símbolo de Audius.

On a native app, the log in button should open a secure web browser within the app (for instance ASWebAuthenticationSession or SFSafariViewController on iOS apps, and “Custom Tabs” on Android mobile apps) that loads the Audius login page. A web app, meanwhile, should open the Audius login page in a popup or simply redirect to it.

The Log in with Audius prompt page is located at the following URL:

`https://audius.co/oauth/auth?scope=read&app_name={YourAppName}&redirect_uri={YourRedirectURI}&origin={YourAppOrigin}&state={YourStateValue}&response_mode={query|fragment}`

You must open this page with the required URL parameters, described below.

**Params**

- scope `"read"` - the scope of the authentication request. Only `"read"` is available (i.e. don't change this).
- app_name `string` - the name of your app. This will be displayed to the user in the log in prompt page.
- redirect_uri `string` - the location that the Audius login page should redirect to once the user successfully authenticates. Custom URL schemes are allowed and supported. You can use the special value `postmessage` here if you would like the login page to send the response back to its opener using `window.postMessage` instead of using a redirect. De lo contrario, se aplican las siguientes reglas de validación:

  - Los hosts no pueden ser direcciones IP brutas a MENOS que sean direcciones IP locales
  - No se puede contener el componente del fragmento (`#`)
  - No se puede contener el componente `userinfo`
  - No se puede contener una ruta de recorrido (contiene `/..` o `\..`)
  - Debe contener caracteres y formato URI válido

- origin _optional_ `string` solo aplicable y requerido si `redirect_uri` está establecido en `postmessage`. Si es así, este valor debe establecerse en el [origen](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) de la ventana que abrió la ventana Iniciar sesión con ventana de Audius.
- estado _opcional pero altamente recomendado_ - `string` cualquier cadena. Cuando el usuario es redirigido a tu aplicación, el valor `state` exacto que proporcione aquí se incluirá en la redirección (en el `state` parámetro de fragmento URI). **Este campo debe ser apalancado como un mecanismo de protección CSRF** (leer más [aquí](https://auth0.com/docs/secure/attack-protection/state-parameters) o [aquí](https://security.stackexchange.com/questions/20187/oauth2-cross-site-request-forgery-and-state-parameter)), y también puede utilizarse como una forma de persistir cualquier dato útil para su aplicación entre dónde se genera el valor de `state` y dónde va la redirección.
- `response_mode` _opcional, no se recomienda cuando sea posible_ - `"fragment" | "query"` especifica si los parámetros de respuesta de flujo de autenticación serán codificados en la cadena de consulta o en el componente de fragmento del redirect_uri cuando se redirecciona a su aplicación. El comportamiento predeterminado es equivalente a "fragmento". Recomendamos NO cambiar esto si es posible.

**Ejemplo**

```HTML
<a href="https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9">¡Haz clic en mí para iniciar sesión con Audius!</a>
```

### 1.5 Recuerde manejar la salida anticipada (por ejemplo, fallida) del flujo de autenticación

Si el usuario sale del flujo de autenticación antes de completarlo, por ejemplo, cerrando la ventana, su aplicación debería detectarlo y tener la interfaz de usuario en consecuencia.

<br />

### 2. Procesar y verificar la respuesta

#### **Si usaste una URI de redirección**:

Cuando el usuario se ha autenticado con éxito, la página Iniciar sesión con Audius redirigirá a la URI de redirección que usted especificó, **con 1) el JWT que contiene el perfil de usuario, y 2) el valor de estado original que proporcionaste (si lo hay) incluido en el fragmento URI** (o la cadena de consulta, si `response_mode` se estableció en `query`). Para ilustrar, saliendo del ejemplo anterior donde abrimos la página de inicio de sesión con la siguiente URL: `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

...cuando el usuario se autentifica correctamente, la página de inicio de sesión redirigiría a...: `https://mydemoapp. om/oauth/receive-token#state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}` donde `{JWT}` es un token web [JSON](https://jwt.io/introduction) que contiene la información del perfil codificado por el usuario y una firma.

> Si especificaste `response_mode=query` al abrir la página de inicio de sesión, la página de inicio de sesión en su lugar redireccionaría a...:
> 
> `https://mydemoapp.com/oauth/receive-token?state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}`

Vea "**Manejando la respuesta**" abajo para qué hacer a continuación.

<br />

#### **Si has usado `redirectURI=postmessage`**:

Cuando el usuario se ha autenticado correctamente, la página de inicio de sesión con Audius enviará un mensaje a través de `window.postMessage` a la ventana que lo abrió. El mensaje contendrá un JWT que contiene el perfil de usuario, así como cualquier valor `state` que originalmente especificó en el parámetro de URL correspondiente, si lo hay. Por ejemplo, si tu aplicación abrió la página de inicio de sesión utilizando la siguiente URL: `https://audius. o/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

... el mensaje se vería así:

```
{
  token: <JWT>,
  state: 'a4e0761e-8c21-4e20-819d-5a4daeab4ea9'
}
```

donde `<JWT>` es un [token web JSON](https://jwt.io/introduction) que contiene la información del perfil codificado del usuario y una firma.

Rápido recordatorio - asegúrate de que tu oyente de eventos `postMessage` valida que el origen del evento entrante es `https://audius.co`!

<br />

#### **Manejando la respuesta**

Extraiga el JWT (`token`) del fragmento URI o de la cadena de consulta (si utilizó una redirección) o el mensaje del evento (si utilizó `postmessage`).

Una vez que tienes el token, debes enviarlo al siguiente endpoint de la API de Audius para verificar que a) la firma fue firmada por el usuario de Audius que completó la autenticación, y b) el contenido del token no ha sido manipulado. Tras verificar la validez de la JWT, el punto final devolverá la información del perfil decodificado del usuario autenticado.

<ins>Obtener `/v1/users/verify_token?token=[JWT]`</ins>

**Params**

- token `string` - el JWT del flujo de autenticación que desea verificar

**Enviando la solicitud**

Para utilizar la API, primero selecciona un endpoint API de la lista de endpoints devueltos por:

`Obtener https://api.audius.co`

Una vez que hayas seleccionado un host, todas las solicitudes de API pueden ser enviadas directamente a él. Por ejemplo, si elegiste este host: `https://audius-dp.singapore.creatorseed.com`, emitirías la solicitud de token de verificación a `https://audio dp. ingapore.creatorseed.com/v1/users/verify_token?token=<JWT>`, donde `<JWT>` es reemplazado por el JWT que recuperaste en el flujo de autenticación.

Recomendamos seleccionar un host cada vez que su aplicación se inicie, ya que la disponibilidad puede cambiar con el tiempo.

**Respuesta exitosa**

- Código: 200 OK
- Contenido: La carga de JWT decodificada, que contiene la información del perfil del usuario:

```typescript
{
  userId: number, // identificador único de usuario de Audius
  email: string,
  name: string, // nombre de usuario
  handle: string,
  verified: boolean, // si el usuario tiene la marca de verificación de Audius

  /** URLs para la imagen de perfil del usuario, si existe.
   * En la gran mayoría de los casos, habrá tres tamaños disponibles: 150x150, 480x480, y 1000x1000.
  * En raros casos, sólo un tamaño desconocido `misc` estará disponible.
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
