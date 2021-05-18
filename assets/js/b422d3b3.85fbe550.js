(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[12666],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return g}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return a?i.createElement(m,l(l({ref:t},c),{},{components:a})):i.createElement(m,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";a(67294)},41395:function(e,t,a){"use strict";a(67294),a(80944)},79443:function(e,t,a){"use strict";var i=(0,a(67294).createContext)(void 0);t.Z=i},80944:function(e,t,a){"use strict";var i=a(67294),n=a(79443);t.Z=function(){var e=(0,i.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},90857:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var i=a(22122),n=a(19756),r=(a(67294),a(3905)),l=(a(41395),a(58215),{id:"class-dialog",title:"Dialog"}),o={unversionedId:"api/class-dialog",id:"api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/docs/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/docs/next/api/class-dialog",version:"current",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"Coverage",permalink:"/docs/next/api/class-coverage"},next:{title:"Download",permalink:"/docs/next/api/class-download"}},s=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#pageondialog"},"page.on('dialog')")," event."),(0,r.kt)("p",null,"An example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n  });\n  await page.evaluate(() => alert('1'));\n  await browser.close();\n})();\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#pageondialog"},"page.on('dialog')")," listener. When listener is present, it ",(0,r.kt)("strong",{parentName:"p"},"must")," either ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-dialog#dialogacceptprompttext"},"dialog.accept([promptText])")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-dialog#dialogdismiss"},"dialog.dismiss()")," the dialog - otherwise the page will ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-dialog#dialogacceptprompttext"},"dialog.accept([promptText])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-dialog#dialogdefaultvalue"},"dialog.defaultValue()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-dialog#dialogdismiss"},"dialog.dismiss()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-dialog#dialogmessage"},"dialog.message()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-dialog#dialogtype"},"dialog.type()"))),(0,r.kt)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"promptText")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">>")),(0,r.kt)("p",null,"Returns when the dialog has been accepted."),(0,r.kt)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,r.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,r.kt)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">>")),(0,r.kt)("p",null,"Returns when the dialog has been dismissed."),(0,r.kt)("h2",{id:"dialogmessage"},"dialog.message()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,r.kt)("p",null,"A message displayed in the dialog."),(0,r.kt)("h2",{id:"dialogtype"},"dialog.type()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,r.kt)("p",null,"Returns dialog's type, can be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}c.isMDXComponent=!0}}]);