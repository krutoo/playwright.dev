(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(889)),i=(n(893),n(894),{id:"mobile",title:"Mobile (experimental)"}),c={unversionedId:"mobile",id:"version-1.8.0/mobile",isDocsHomePage:!1,title:"Mobile (experimental)",description:"- Requirements",source:"@site/versioned_docs/version-1.8.0/mobile.mdx",slug:"/mobile",permalink:"/docs/1.8.0/mobile",version:"1.8.0"},l=[{value:"Requirements",id:"requirements",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#requirements"}),"Requirements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#how-to-run"}),"How to run")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#known-limitations"}),"Known limitations"))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Mobile support is experimental and uses prefixed provisional API."))),Object(o.b)("p",null,"You can try Playwright against Chrome for Android today. This support is experimental. Support for devices is tracked in the issue ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"#1122"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/command-line/adb"}),"ADB daemon")," running and authenticated with your device.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.android.chrome"}),Object(o.b)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'"Enable command line on non-rooted devices" enabled in ',Object(o.b)("inlineCode",{parentName:"p"},"chrome://flags"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Playwright will be looking for ADB daemon on the default port ",Object(o.b)("inlineCode",{parentName:"p"},"5037"),". It will use the first device available. Typically running ",Object(o.b)("inlineCode",{parentName:"p"},"adb devices")," is all you need to do.")))),Object(o.b)("h2",{id:"how-to-run"},"How to run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { _clank } = require('playwright');\n\n(async () => {\n  const context = await _clank.launchPersistentContext('', {\n    viewport: null\n  });\n  const [page] = context.pages();\n  await page.goto('https://webkit.org/');\n  console.log(await page.evaluate(() => window.location.href));\n  await page.screenshot({ path: 'example.png' });\n  await context.close();\n})();\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/memory/android_dev_tips.md"}),"Clank")," is a code name for Chrome for Android.")),Object(o.b)("h2",{id:"known-limitations"},"Known limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),Object(o.b)("li",{parentName:"ul"},"Only ",Object(o.b)("inlineCode",{parentName:"li"},"launchPersistentContext")," works, launching ephemeral contexts is not supported."),Object(o.b)("li",{parentName:"ul"},"Passing ",Object(o.b)("inlineCode",{parentName:"li"},"viewport: null")," is necessary to make sure resolution is not emulated."),Object(o.b)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),Object(o.b)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")))}b.isMDXComponent=!0},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},890:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},891:function(e,t,n){"use strict";var r=n(0),a=n(892);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},893:function(e,t,n){"use strict";n(0),n(891),n(890),n(55)},894:function(e,t,n){"use strict";n(3),n(0)}}]);