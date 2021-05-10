(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var o=r(3),a=r(7),n=(r(0),r(270)),i=(r(273),r(274),{id:"browsers",title:"Browsers"}),s={unversionedId:"browsers",id:"version-1.11.0/browsers",isDocsHomePage:!1,title:"Browsers",description:"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment.",source:"@site/versioned_docs/version-1.11.0/browsers.mdx",slug:"/browsers",permalink:"/java/docs/browsers",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Authentication",permalink:"/java/docs/auth"},next:{title:"Dialogs",permalink:"/java/docs/dialogs"}},c=[{value:"Chromium",id:"chromium",children:[]},{value:"Firefox",id:"firefox",children:[{value:"Firefox-Stable",id:"firefox-stable",children:[]}]},{value:"WebKit",id:"webkit",children:[]},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",children:[{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:[]}]}],l={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browser versions that it supports. With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#chromium"}),"Chromium")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#firefox"}),"Firefox")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#webkit"}),"WebKit")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge"))),Object(n.b)("h2",{id:"chromium"},"Chromium"),Object(n.b)("p",null,"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. These builds match the current ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://support.google.com/chrome/a/answer/9027636?hl=en"}),"Chrome Dev Channel")," at the time of each Playwright release, i.e. it is new with every Playwright update. Since Chromium project is ahead of the branded browsers, when the world is on Google Chrome 89, Playwright already supports Chromium 91 that will hit Google Chrome and Microsoft Edge if a few weeks."),Object(n.b)("p",null,"There is also a way to opt into using Google Chrome's or Microsoft Edge's branded builds for testing. For details on when to opt into stable channels, refer to the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"#google-chrome--microsoft-edge"}),"Google Chrome & Microsoft Edge")," section below."),Object(n.b)("h2",{id:"firefox"},"Firefox"),Object(n.b)("p",null,"Playwright's Firefox version matches the recent ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.mozilla.org/en-US/firefox/channel/desktop/"}),"Firefox Beta")," build."),Object(n.b)("h3",{id:"firefox-stable"},"Firefox-Stable"),Object(n.b)("p",null,"Playwright team maintains a Playwright Firefox version that matches the latest Firefox Stable, a.k.a. ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable"),"."),Object(n.b)("p",null,"Using ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," is a 2-steps process:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Installing ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," with Playwright CLI."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install firefox-stable"\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Using ",Object(n.b)("inlineCode",{parentName:"p"},"firefox-stable")," channel when launching browser."))),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType firefox = playwright.firefox();\n      Browser browser = firefox.launch(new BrowserType.LaunchOptions().setChannel("firefox-stable"));\n    }\n  }\n}\n')),Object(n.b)("h2",{id:"webkit"},"WebKit"),Object(n.b)("p",null,"Playwright's WebKit version matches the recent WebKit trunk build, before it is used in Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. We are also working on a dedicated support for builds that would match Apple Safari Technology Preview."),Object(n.b)("h2",{id:"google-chrome--microsoft-edge"},"Google Chrome & Microsoft Edge"),Object(n.b)("p",null,"While Playwright will download and use the recent Chromium build by default, it can operate against the stock Google Chrome and Microsoft Edge browsers available on the machine. In particular, current Playwright version will support Stable and Beta channels of these browsers. Here is how you can opt into using the stock browser:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Can be "msedge", "chrome-beta", "msedge-beta", "msedge-dev", etc.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setChannel("chrome"));\n    }\n  }\n}\n')),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Playwright bundles a recent Chromium build, but not Google Chrome or Microsoft Edge browsers - these should be installed manually before use."))),Object(n.b)("h3",{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to"},"When to use Google Chrome & Microsoft Edge and when not to?"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Defaults")),Object(n.b)("p",null,"Using default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Regression testing")),Object(n.b)("p",null,"Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",Object(n.b)("inlineCode",{parentName:"p"},'"chrome"')," or ",Object(n.b)("inlineCode",{parentName:"p"},'"msedge"'),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Media codecs")),Object(n.b)("p",null,"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you also want to use official channel."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Enterprise policy")),Object(n.b)("p",null,"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are a part of the organization that uses such policies, it is the easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."))}b.isMDXComponent=!0},269:function(e,t,r){"use strict";function o(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),p=o,m=u["".concat(i,".").concat(p)]||u[p]||h[p]||n;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},271:function(e,t,r){"use strict";var o=r(0),a=r(272);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,r){"use strict";var o=r(0),a=Object(o.createContext)(void 0);t.a=a},273:function(e,t,r){"use strict";var o=r(0),a=r.n(o),n=r(271),i=r(269),s=r(53),c=r.n(s),l=37,b=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,h=e.groupId,p=e.className,m=Object(n.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(o.useState)(s),w=g[0],O=g[1],y=o.Children.toArray(e.children);if(null!=h){var j=d[h];null!=j&&j!==w&&u.some((function(e){return e.value===j}))&&O(j)}var v=function(e){O(e),null!=h&&f(h,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},p)},u.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case b:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},r)}))),t?Object(o.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},274:function(e,t,r){"use strict";var o=r(3),a=r(0),n=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return n.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:r,className:a}),t)}}}]);