(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{223:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(889)),i=(a(893),a(894),{id:"auth",title:"Authentication"}),s={unversionedId:"auth",id:"version-1.8.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.8.0/auth.mdx",slug:"/auth",permalink:"/docs/1.8.0/auth",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Assertions",permalink:"/docs/1.8.0/assertions"},next:{title:"Dialogs",permalink:"/docs/1.8.0/dialogs"}},c=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"API reference",id:"api-reference-2",children:[]}]}],l={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can be used to automate scenarios that require authentication."),Object(o.b)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/core-concepts#browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#session-storage"}),"Session storage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),Object(o.b)("h2",{id:"automate-logging-in"},"Automate logging in"),Object(o.b)("p",null,"The Playwright API can automate interaction with a login form. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/input"}),"Input guide")," for more details."),Object(o.b)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const page = await context.newPage();\nawait page.goto('https://github.com/login');\n\n// Interact with login form\nawait page.click('text=Login');\nawait page.fill('input[name=\"login\"]', USERNAME);\nawait page.fill('input[name=\"password\"]', PASSWORD);\nawait page.click('text=Submit');\n// Verify app is logged in\n")),Object(o.b)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),Object(o.b)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),Object(o.b)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". Playwright provides ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),Object(o.b)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),Object(o.b)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Save storage state and store as an env variable\nconst storage = await context.storageState();\nprocess.env.STORAGE = JSON.stringify(storage);\n\n// Create a new context with the saved storage state\nconst storageState = JSON.parse(process.env.STORAGE);\nconst context = await browser.newContext({ storageState });\n")),Object(o.b)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",Object(o.b)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run tests (for example, with ",Object(o.b)("inlineCode",{parentName:"li"},"npm run test"),")."),Object(o.b)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In Jest, this can be executed in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),Object(o.b)("inlineCode",{parentName:"a"},"globalSetup")),"."))),Object(o.b)("li",{parentName:"ol"},"In each test, load authentication state in ",Object(o.b)("inlineCode",{parentName:"li"},"beforeEach")," or ",Object(o.b)("inlineCode",{parentName:"li"},"beforeAll")," step.")),Object(o.b)("p",null,"This approach will also ",Object(o.b)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("h2",{id:"session-storage"},"Session storage"),Object(o.b)("p",null,"Rarely, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get session storage and store as env variable\nconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));\nprocess.env.SESSION_STORAGE = sessionStorage;\n\n// Set session storage in a new context\nconst sessionStorage = process.env.SESSION_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key]);\n    });\n  }\n}, sessionStorage);\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browsercontext#browsercontextstoragestateoptions"}),"browserContext.storageState([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browsercontext#browsercontextaddinitscriptscript-arg"}),"browserContext.addInitScript(script[, arg])"))),Object(o.b)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),Object(o.b)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),Object(o.b)("h3",{id:"persistent-authentication"},"Persistent authentication"),Object(o.b)("p",null,"Web browsers use a directory on disk to store user history, cookies, IndexedDB and other local state. This disk location is called the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"}),"User data directory"),"."),Object(o.b)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),Object(o.b)("p",null,"User data directories can be used with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir[, options])")," API."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\nconst userDataDir = '/path/to/directory';\nconst context = await chromium.launchPersistentContext(userDataDir, { headless: false });\n// Execute login steps manually in the browser window\n")),Object(o.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir[, options])"))))}b.isMDXComponent=!0},889:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},890:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},891:function(e,t,a){"use strict";var n=a(0),r=a(892);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},893:function(e,t,a){"use strict";a(0),a(891),a(890),a(55)},894:function(e,t,a){"use strict";a(3),a(0)}}]);