---
sidebar_label: 오디우스로 로그인
sidebar_position: 삼
---

# 오디우스로 로그인

## 목차

- [개요](#overview)
  - [인증이 아닌 인증](#authentication-not-authorization)
- [워크플로](#workflow)
  - [데모](#demo)
  - [빠른 링크](#quick-links)
- [Javascript SDK로 Audius로 로그인을 구현하는 방법](#how-to-implement-log-in-with-audius-with-the-javascript-sdk)
  - [1. SDK `oauth` 기능 초기화](#1-initialize-the-sdk-oauth-feature)
    - [<ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>](#insoauthinitloginsuccesscallback-errorcallbackins)
  - [2. Audius로 로그인 버튼 렌더링](#2-render-the-log-in-with-audius-button)
    - [<ins>**oauth.renderButton(요소, 사용자 정의)**</ins>](#insoauthrenderbuttonelement-customizationsins)
    - [_💡 **팁**: 버튼이 렌더링될 때 감지하고 그때까지 로더를 표시합니다._:](#-tip-detect-when-the-button-has-rendered-and-show-a-loader-until-then)
    - [<ins>**oauth.login()**</ins>](#insoauthloginins)
  - [삼. 완료!](#3-done)
  - [부록: 이메일에 대한 간단한 메모](#addendum-a-quick-note-on-email)
  - [React 및 npm 패키지를 사용한 전체 코드 예제](#full-code-example-using-react-and-npm-package)
  - [바닐라 JS 및 SDK dist를 사용하는 전체 코드 예제](#full-code-example-using-vanilla-js-and-sdk-dist)
- [Audius로 수동으로 로그인을 구현하는 방법](#how-to-implement-log-in-with-audius-manually)
  - [1. Audius로 로그인 프롬프트 페이지를 엽니다.](#1-open-the-log-in-with-audius-prompt-page)
  - [1.5 인증 흐름의 조기 종료(즉, 실패)를 처리하는 것을 기억하십시오.](#15-remember-to-handle-early-exiting-ie-failure-of-the-authentication-flow)
  - [2. 응답 처리 및 확인](#2-process-and-verify-the-response)
    - [**리디렉션 URI**을 사용한 경우:](#if-you-used-a-redirect-uri)
    - [** `redirectURI=postmessage`**을 사용한 경우:](#if-you-used-redirecturipostmessage)
    - [**응답 처리**](#handling-the-response)
  - [삼. 완료!](#3-done-1)
  - [부록: 이메일에 대한 간단한 메모](#addendum-a-quick-note-on-email-1)

## 개요

Audius로 로그인하면 사용자에게 Audius 암호를 제공하지 않고도 앱에서 사용자의 Audius 프로필 정보를 검색하고 확인할 수 있습니다.

다음과 같은 다양한 사용 사례에 이 흐름을 활용할 수 있습니다.

- 사용자가 비밀번호를 설정하거나 프로필 양식을 작성하지 않고도 앱에 가입 및/또는 로그인할 수 있는 안전하고 편리한 방법을 제공합니다.
- Audius 데이터를 검색할 수 있도록 사용자를 Audius 계정에 연결합니다(예: 트랙 검색).
- 사용자가 "인증된" Audius 아티스트인지 확인

그러나 이 흐름 **은**이 될 수 없습니다.

- 앱에서 사용자의 로그인 세션 관리
- 사용자를 대신하여 Audius에서 작업을 수행할 수 있는 권한을 앱에 부여합니다(자세한 내용은 아래 참조).  
  <br />

### 인증이 아닌 인증

Audius로 로그인은 인증을 제공할 수 있지만 승인은 제공할 수 없습니다(아직!). 즉, 이 흐름은 아직 사용자를 대신하여 작업(예: 트랙 업로드)을 수행할 수 있는 권한을 얻는 기능을 제공하지 않습니다.

<br />

<img src="../../static/img/oauthpopup.png" height="488" width="252" alt="Audius 팝업으로 로그인" />

_Audius 대화 상자로 로그인_

<br />

## 워크플로

"Audius로 로그인" 흐름은 다음과 같습니다.

1. 인증 흐름을 시작하기 위해 앱 또는 웹사이트에 버튼을 제공합니다.
2. 사용자가 버튼을 클릭하면 Audius 자격 증명으로 로그인하라는 Audius 로그인 페이지가 포함된 팝업이 열립니다(또는 앱/웹사이트에서 팝업을 사용하는 대신 Audius 로그인 페이지로 리디렉션할 수 있음).
3. 사용자가 성공적으로 로그인하면 Audius는 JWT(JSON Web Token)를 사용하여 앱/웹사이트에 사용자 프로필을 제공합니다.
4. 앱이 JWT를 확인하고 디코딩합니다.

JWT 페이로드에는 사용자에 대한 다음 정보가 포함됩니다.

- 고유 식별자(Audius 사용자 ID)
- 이메일
- 이름 표시하기
- 오디우스 핸들
- 사용자가 인증된 아티스트인지 여부(예: 보라색 체크 표시 있음)
- 프로필 사진 URL(있는 경우)

### 데모

여기</a>에서 Oauth 흐름

의 빠른 데모를 확인하십시오!</p> 



### 빠른 링크

- React를 사용한 데모 - [데모 앱](https://j2jx6f.csb.app/) | [코드](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f?file=/src/App.js)
- 바닐라 JS가 포함된 데모 - [데모 앱](https://xkogl3.csb.app/) | [코드](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)
- [버튼 구성자](https://9ncjui.csb.app/)

<br />



## Javascript SDK로 Audius로 로그인을 구현하는 방법

Audius로 로그인을 앱에 추가하는 가장 쉬운 방법은 Javascript SDK를 사용하는 것입니다. Javascript SDK를 사용할 수 없는 경우(예: 모바일 앱을 개발 중인 경우) "수동으로 로 로그인을 구현하는 방법"으로 건너뛰십시오.

전제 조건:

- [앱에서 Audius SDK 설정 및 초기화](./sdk.md#installation)



### 1. SDK `oauth` 기능 초기화

먼저 `oauth.init` 을 호출하고 앱 이름, 로그인 성공 콜백 및 선택적 오류 콜백을 제공해야 합니다.



#### <ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>

Audius로 로그인 기능을 활성화합니다.

**매개변수**

- loginSuccessCallback `(프로필: UserProfile) => void` - 사용자가 Audius에 성공적으로 인증할 때 호출되는 함수입니다. 이 함수는 다음과 같은 형태의 객체인 사용자의 프로필 정보로 호출됩니다. 
  
  

  ```typescript
  // Type UserProfile =
  {
    userId: number; // 고유한 Audius 사용자 식별자
    이메일: 문자열;
    이름: 문자열; // 사용자의 표시 이름
    핸들: 문자열;
    확인됨: 부울; // 사용자에게 Audius "확인된" 체크 표시가 있는지 여부

    /** 사용자 프로필 사진의 URL(있는 경우).
     * 대부분의 경우 150x150, 480x480 및 1000x1000의 세 가지 크기를 사용할 수 있습니다.
    * 드문 경우지만 알 수 없는 크기의 '기타'만 사용할 수 있습니다.
    * 프로필 사진이 없는 사용자의 경우 이 필드는 비어 있습니다.
    */
    profilePicture: {"150x150": 문자열, "480x480": 문자열, "1000x1000": 문자열 } | { misc: string } | 정의되지 않은 | null
    하위: 숫자; // userId
    의 별칭 iat: string; // 인증이 수행된 시간에 대한 타임스탬프
}
  ```


- errorSuccessCallback _선택 사항_ `(errorMessage: string) => void` - 인증 흐름 중에 오류가 발생할 때 호출되는 함수입니다. 이 함수는 오류를 설명하는 문자열과 함께 호출됩니다.

**반환**: 없음

예시:



```javascript
audiusSdk.oauth.init(
  (res) => {
    console.log("로그인 성공!", res);
  },
  (err) => {
    console.log("오류:(", err )
  }
);
```


<br />



### 2. Audius로 로그인 버튼 렌더링

`oauth.renderButton` 메소드를 사용하거나 로그인 버튼을 직접 구현하고 `oauth.login`으로 로그인 팝업을 호출할 수 있습니다.

** `oauth.renderButton 사용` (권장)**:



#### <ins>**oauth.renderButton(요소, 사용자 정의)**</ins>

첫 번째 매개변수에 전달된 요소를 Audius로 로그인 버튼으로 바꿉니다.

**매개변수**

- 요소 `HTMLElement` - Audius로 로그인 버튼으로 대체할 HTML 요소
- 사용자 정의 _선택 사항_ `ButtonOptions` - 렌더링할 버튼에 대한 사용자 지정 설정을 포함하는 선택적 개체입니다. 사용 가능한 옵션은 다음과 같습니다. 
  
  

  ```typescript
  // type ButtonOptions =
  {
    // 버튼의 크기:
    size?: '작은' | '중간' | 'large'

    // 버튼의 모서리 스타일: 모서리
    개?: 'default' | 'pill'

    // 버튼에 대한 자신의 텍스트; 기본값은 "Log in with Audius"입니다.
    customText?: string

    // 마우스 오버 시 버튼의 "성장" 애니메이션을 비활성화할지 여부:
    disableHoverGrow?: boolean

    // 버튼이 상위 요소의 전체 너비를 차지해야 하는지 여부 :
    fullWidth?: 부울
}
  ```


[이 플레이그라운드](https://9ncjui.csb.app/) 을 사용하여 이러한 사용자 정의가 버튼 모양에 어떤 영향을 미치는지 확인하고 앱에 가장 적합한 구성을 결정하십시오.

**반환**: 없음

예시:



```javascript
<!-- 자바스크립트 -->
audiusSdk.oauth.renderButton(document.getElementById('audiusLogInButton'), {
  size: 'large',
  corners: 'pill',
  customText: 'Continue with Audius'
})

<!-- HTML -->
<div id="audiusLogInButton"></div>
```


<br />



#### _💡 **팁**: 버튼이 렌더링될 때 감지하고 그때까지 로더를 표시합니다._:

버튼을 로드하는 데 몇 초 정도 걸릴 수 있습니다. 최적의 사용자 경험을 위해 버튼이 로드될 때까지 로드 표시기를 표시할 수 있습니다.

로그인 버튼은 `audius-login-button`의 ID로 렌더링됩니다. MutationObserver를 사용하여 요소가 추가된 시점을 감지할 수 있습니다.

예시:



```HTML
<!-- HTML에서 -->
<!-- Audius로 로그인 버튼으로 대체될 요소를 부모로 묶습니다. 예: -->
<div id="parent">
  <div id="audiusLogInButton"></div>
  <!-- 아마도 이보다 더 나은 로딩 표시기를 원합니다 :P -->
  <div id="loading">로딩 중...</div>
</div>

```




```JS
// JS
const 관찰자 = new MutationObserver(function(mutations_list) {
    mutations_list.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(added_node) {
            if (added_node.id == 'audius- login-button') {
        // 로그인 버튼이 렌더링됨
        document.querySelector('#loading').remove()
        observer.disconnect();
            }
        });
    });
});

관찰자.관찰(document.querySelector("#부모"), { subtree: false, childList: true });

```


<br />

**자신의 버튼 사용 및 `oauth.login`**:



#### <ins>**oauth.login()**</ins>

인증 흐름을 시작하는 Audius로 로그인 팝업을 엽니다.

**매개변수**

없음

**반환**: 없음

예시:



```javascript
<!-- 자바스크립트 -->
function logInWithAudius() {
  audiusSdk.oauth.login()
}

<!-- HTML -->
<button onclick="logInWithAudius()">Audius로 로그인!</button>
```


<br />



### 삼. 완료!

그게 다야! 전체 코드 예제는 아래를 참조하세요.



### 부록: 이메일에 대한 간단한 메모

사용자의 Audius 사용자 ID를 알게 되면 SDK 또는 웹 API를 사용하여 언제든지 Audius 정보를 검색할 수 있습니다. 그러나 Audius로 로그인 응답 외부에서 사용할 수 없는 프로필 정보 중 하나는 사용자의 이메일 주소입니다. Audius로 로그인 성공 응답을 받은 후 사용자의 이메일 주소를 저장하지 않으면 사용자가 Audius로 로그인 흐름을 다시 완료하도록 해야만 이메일을 다시 검색할 수 있습니다.



### React 및 npm 패키지를 사용한 전체 코드 예제

[여기에서 샌드박스 보기](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)



### 바닐라 JS 및 SDK dist를 사용하는 전체 코드 예제

[여기에서 샌드박스 보기](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)

<br />

<br />



## Audius로 수동으로 로그인을 구현하는 방법

Audius Javascript SDK를 사용할 수 없는 경우 아래 단계에 따라 수동으로 Audius로 로그인을 구현할 수 있습니다.



### 1. Audius로 로그인 프롬프트 페이지 열기

앱에 "Audius로 로그인" 버튼을 만듭니다. HTML(또는 HTML과 유사한 마크업) 및 CSS를 사용하는 경우 [이 플레이그라운드](https://j2jx6f.csb.app/) 을 사용하여 Audius 브랜드 로그인 버튼에 대한 코드를 쉽게 사용자 정의하고 생성할 수 있습니다.

로그인 버튼을 클릭하면 사용자를 Audius로 로그인 프롬프트 페이지로 안내하여 인증 흐름을 시작해야 합니다.

기본 앱에서 로그인 버튼은 Audius 로그인 페이지를 로드하는 앱 내에서 보안 웹 브라우저를 열어야 합니다(예: iOS 앱의 경우 ASWebAuthenticationSession 또는 SFSafariViewController, Android 모바일 앱의 경우 "사용자 지정 탭"). 한편 웹 앱은 팝업으로 Audius 로그인 페이지를 열거나 단순히 리디렉션해야 합니다.

Audius로 로그인 프롬프트 페이지는 다음 URL에 있습니다.

`https://audius.co/oauth/auth?scope=read&app_name={YourAppName}&redirect_uri={YourRedirectURI}&origin={YourAppOrigin}&state={YourStateValue}&response_mode={query|fragment}`

아래에 설명된 필수 URL 매개변수를 사용하여 이 페이지를 열어야 합니다.

**매개변수**

- 범위 `"읽기"` - 인증 요청의 범위입니다. `"읽기"` 만 사용할 수 있습니다(즉, 변경하지 않음).
- app_name `문자열` - 앱의 이름입니다. 이것은 로그인 프롬프트 페이지에서 사용자에게 표시됩니다.
- redirect_uri `문자열` - 사용자가 성공적으로 인증되면 Audius 로그인 페이지가 리디렉션되어야 하는 위치입니다. 사용자 정의 URL 스키마가 허용되고 지원됩니다. 리디렉션을 사용하는 대신 `window.postMessage` 을 사용하여 로그인 페이지가 오프너에 응답을 다시 보내도록 하려면 여기에서 특수 값 `postmessage` 을 사용할 수 있습니다. 그렇지 않으면 다음 유효성 검사 규칙이 적용됩니다.
  
    - 호스트는 localhost IP 주소가 아니면 원시 IP 주소일 수 없습니다.
  - 조각 구성 요소를 포함할 수 없습니다(`#`).
  - `사용자 정보` 구성 요소를 포함할 수 없습니다.
  - 경로 순회를 포함할 수 없습니다( `/..` 또는 `\..`포함).
  - 유효한 문자와 URI 형식을 포함해야 합니다.
- origin _선택적_ `string` `redirect_uri` 가 `postmessage`로 설정된 경우에만 적용 가능하고 필수입니다. 그렇다면 이 값은 Audius로 로그인 팝업을 연 창의 [원본](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) 로 설정해야 합니다.

- 상태 _은 선택 사항이지만 적극 권장되는_ - `문자열` 모든 문자열. 사용자가 앱으로 다시 리디렉션되면 여기에 제공하는 정확한 `상태` 값이 리디렉션에 포함됩니다( `상태` URI 조각 매개변수에 있음). **이 필드는 CSRF 보호 메커니즘** (자세한 내용은 [여기](https://auth0.com/docs/secure/attack-protection/state-parameters) 또는 [여기](https://security.stackexchange.com/questions/20187/oauth2-cross-site-request-forgery-and-state-parameter)참조)로 활용해야 하며 `상태` 값이 생성된 위치와 리디렉션이 가는 곳.
- `response_mode` _선택 사항, 가능한 경우 권장하지 않음_ - `"fragment" | "query"` 는 앱으로 다시 리디렉션할 때 인증 흐름 응답 매개변수가 쿼리 문자열 또는 redirect_uri의 조각 구성 요소로 인코딩되는지 여부를 지정합니다. 기본 동작은 "조각"과 같습니다. 가능하면 변경하지 않는 것이 좋습니다.

**예시**



```HTML
<a href="https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9">Audius로 로그인하려면 저를 클릭하십시오!</a>
```




### 1.5 인증 흐름의 조기 종료(즉, 실패)를 처리하는 것을 기억하십시오.

사용자가 인증 흐름을 완료하기 전에(예: 창을 닫아서) 종료하면 앱이 이를 감지하고 UI가 그에 따라 응답해야 합니다.

<br />



### 2. 응답 처리 및 확인



#### **리디렉션 URI**을 사용한 경우:

사용자가 성공적으로 인증되면 Audius로 로그인 페이지는 지정한 리디렉션 URI로 리디렉션됩니다. **은 1) 사용자 프로필이 포함된 JWT, 2) 제공한 원래 상태 값(있는 경우)이 URI 조각** (또는 쿼리 문자열, `response_mode` 이 `쿼리`로 설정된 경우). 설명을 위해 다음 URL을 사용하여 로그인 페이지를 연 위의 예에서 벗어나십시오. `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https:/ /mydemoapp.com/oauth/receive-token&상태=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

...사용자가 성공적으로 인증되면 로그인 페이지가 다음으로 리디렉션됩니다. `https://mydemoapp.com/oauth/receive-token#state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}` 여기서 `{JWT}` 은 사용자의 인코딩된 프로필 정보와 서명을 포함하는 [JSON 웹 토큰](https://jwt.io/introduction) 입니다.



> 로그인 페이지를 열 때 `response_mode=query` 을 지정한 경우 로그인 페이지는 다음으로 리디렉션됩니다.
> 
> `https://mydemoapp.com/oauth/receive-token?state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&토큰={JWT}`

다음에 수행할 작업은 아래의 "**응답 처리**"을 참조하십시오.

<br />



#### ** `redirectURI=postmessage`**을 사용한 경우:

사용자가 성공적으로 인증되면 Audius로 로그인 페이지는 `window.postMessage` 을 통해 이를 연 창으로 메시지를 보냅니다. 메시지에는 사용자 프로필과 해당 URL 매개변수(있는 경우)에 원래 지정한 `상태` 값이 포함된 JWT가 포함됩니다. 예를 들어 앱이 다음 URL을 사용하여 로그인 페이지를 연 경우: `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/ oauth/receive-token&상태=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

... 메시지는 다음과 같습니다.



```
{
  토큰: <JWT>,
  상태: 'a4e0761e-8c21-4e20-819d-5a4daeab4ea9'
}
```


여기서 `<JWT>` 는 사용자의 인코딩된 프로필 정보와 서명을 포함하는 [JSON 웹 토큰](https://jwt.io/introduction) 입니다.

빠른 알림 - `postMessage` 이벤트 리스너가 들어오는 이벤트의 출처가 `https://audius.co`인지 확인하십시오!

<br />



#### **응답 처리**

URI 조각 또는 쿼리 문자열(리디렉션을 사용한 경우) 또는 이벤트 메시지( `postmessage`을 사용한 경우)에서 JWT(`토큰`)를 추출합니다.

토큰이 있으면 a) 인증을 완료한 Audius 사용자가 서명에 서명했는지, b) 토큰 내용이 변조되지 않았는지 확인하기 위해 다음 Audius API 엔드포인트로 토큰을 보내야 합니다. . JWT의 유효성을 확인하면 끝점은 인증된 사용자의 디코딩된 프로필 정보를 반환합니다.

<ins>GET `/v1/users/verify_token?token=[JWT]`</ins>

**매개변수**

- 토큰 `문자열` - 확인하려는 인증 흐름의 JWT

**요청 보내기**

API를 사용하려면 먼저 다음에서 반환된 엔드포인트 목록에서 API 엔드포인트를 선택합니다.

`GET https://api.audius.co`

호스트를 선택하면 모든 API 요청을 호스트로 직접 보낼 수 있습니다. 예를 들어 `https://audius-dp.singapore.creatorseed.com`호스트를 선택한 경우 `https://audius-dp.singapore.creatorseed.com/v1에 토큰 확인 요청을 발행합니다. /users/verify_token?token=<JWT>`, 여기서 `<JWT>` 은 인증 흐름에서 검색한 JWT로 대체됩니다.

시간이 지남에 따라 가용성이 변경될 수 있으므로 애플리케이션이 시작될 때마다 호스트를 선택하는 것이 좋습니다.

**성공 응답**

- 코드: 200 OK
- 콘텐츠: 사용자 프로필 정보가 포함된 디코딩된 JWT 페이로드:



```typescript
{
  userId: 숫자, // 고유한 Audius 사용자 식별자
  이메일: 문자열,
  이름: 문자열, // 사용자의 표시 이름
  핸들: 문자열,
  확인됨: 부울, // 사용자에게 Audius "확인됨" 체크 표시가 있는지 여부

  /** 사용자 프로필 사진의 URL(있는 경우).
   * 대부분의 경우 150x150, 480x480 및 1000x1000의 세 가지 크기를 사용할 수 있습니다.
  * 드문 경우지만 알 수 없는 크기의 '기타'만 사용할 수 있습니다.
  * 사용자에게 프로필 사진이 없는 경우 이 필드는 비어 있습니다.
  */
  profilePicture: {"150x150": 문자열, "480x480": 문자열, "1000x1000": 문자열 } | { misc: string } | 정의되지 않은 | null
  sub: number, // userId
  의 별칭 iat: string, // 인증이 수행된 시간의 타임스탬프
}
```


**오류 응답**

<ins>유효하지 않은 서명</ins>:

- 코드: `404` 찾을 수 없음
- 내용: 발생한 문제를 설명하는 오류 메시지(예: "JWT 서명이 잘못되었습니다. 지갑을 복구할 수 없습니다.")

<ins>`token` 입력</ins>문제:

- 코드: `400` 잘못된 요청
- 내용: 오류 메시지(예: "JWT 서명을 디코딩할 수 없습니다.")

<br />



### 삼. 완료!

JWT를 확인하면 인증 흐름이 완료되고 이제 사용자의 Audius 프로필 정보가 생깁니다.



### 부록: 이메일에 대한 간단한 메모

사용자의 Audius 사용자 ID를 알게 되면 SDK 또는 웹 API를 사용하여 언제든지 Audius 정보를 검색할 수 있습니다. 그러나 Audius로 로그인 응답 외부에서 사용할 수 없는 프로필 정보 중 하나는 사용자의 이메일 주소입니다. Audius로 로그인 성공 응답을 받은 후 사용자의 이메일 주소를 저장하지 않으면 사용자가 Audius로 로그인 흐름을 다시 완료하도록 해야만 이메일을 다시 검색할 수 있습니다.
