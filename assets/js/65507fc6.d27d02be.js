(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[99254],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25663:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l={id:"README",title:"Documentation"},o={unversionedId:"README",id:"version-1.6.0/README",isDocsHomePage:!1,title:"Documentation",description:"Capabilities",source:"@site/versioned_docs/version-1.6.0/README.mdx",sourceDirName:".",slug:"/README",permalink:"/docs/1.6.0/README",version:"1.6.0",frontMatter:{id:"README",title:"Documentation"}},p=[{value:"Capabilities",id:"capabilities",children:[]},{value:"Table of contents",id:"table-of-contents",children:[]}],s={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"Playwright is a library to automate ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/Home"},"Chromium"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox")," and ",(0,i.kt)("a",{parentName:"p",href:"https://webkit.org/"},"WebKit")," with a single API. Playwright is built to enable cross-browser web automation that is ",(0,i.kt)("strong",{parentName:"p"},"ever-green"),", ",(0,i.kt)("strong",{parentName:"p"},"capable"),", ",(0,i.kt)("strong",{parentName:"p"},"reliable")," and ",(0,i.kt)("strong",{parentName:"p"},"fast"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ever-green browser engines"),(0,i.kt)("li",{parentName:"ul"},"Headless execution"),(0,i.kt)("li",{parentName:"ul"},"Scenarios that span multiple pages, domains and iframes"),(0,i.kt)("li",{parentName:"ul"},"Auto-wait for elements to be ready before executing actions (like click, fill)"),(0,i.kt)("li",{parentName:"ul"},"Reliable signals instead of timeouts (like network response, popup, navigation)"),(0,i.kt)("li",{parentName:"ul"},"Intercept network activity for stubbing and mocking network requests"),(0,i.kt)("li",{parentName:"ul"},"Emulate mobile devices, geolocation, permissions"),(0,i.kt)("li",{parentName:"ul"},"Support for web components via shadow-piercing selectors"),(0,i.kt)("li",{parentName:"ul"},"Native input events for mouse and keyboard"),(0,i.kt)("li",{parentName:"ul"},"Upload and download files")),(0,i.kt)("h3",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Introduction",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/why-playwright"},"Why Playwright?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/intro"},"Get started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/core-concepts"},"Core concepts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/debug"},"Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/languages"},"Supported languages")))),(0,i.kt)("li",{parentName:"ol"},"Guides",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/input"},"Input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/emulation"},"Emulation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/network"},"Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/assertions"},"Assertions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/verification"},"Verification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/navigations"},"Navigations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/multi-pages"},"Multi-page scenarios")))),(0,i.kt)("li",{parentName:"ol"},"Tutorials",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/auth"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/pom"},"Page object models")))),(0,i.kt)("li",{parentName:"ol"},"Integrations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/test-runners"},"Test runners")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/docker/README"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/ci"},"Continuous integration")))),(0,i.kt)("li",{parentName:"ol"},"Reference",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/actionability"},"Actionability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/installation"},"Advanced installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.6.0/extensibility"},"Extensibility")))),(0,i.kt)("li",{parentName:"ol"},"Get help",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://join.slack.com/t/playwright/shared_invite/enQtOTEyMTUxMzgxMjIwLThjMDUxZmIyNTRiMTJjNjIyMzdmZDA3MTQxZWUwZTFjZjQwNGYxZGM5MzRmNzZlMWI5ZWUyOTkzMjE5Njg1NDg"},"Slack community")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/tags/playwright"},"Stack Overflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/issues"},"GitHub"))))))}c.isMDXComponent=!0}}]);