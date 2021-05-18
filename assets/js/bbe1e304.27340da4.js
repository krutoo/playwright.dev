(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[44090],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return a?r.createElement(m,n(n({ref:t},c),{},{components:a})):r.createElement(m,n({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,n=new Array(l);n[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72252:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return n},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=a(22122),i=a(19756),l=(a(67294),a(3905)),n={id:"class-dialog",title:"Dialog"},o={unversionedId:"api/class-dialog",id:"version-1.2.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the ['dialog' event.",source:"@site/versioned_docs/version-1.2.0/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/docs/1.2.0/api/class-dialog",version:"1.2.0",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.2.0/api",previous:{title:"ConsoleMessage",permalink:"/docs/1.2.0/api/class-consolemessage"},next:{title:"Download",permalink:"/docs/1.2.0/api/class-download"}},s=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/1.2.0/api/class-dialog#class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2.0/api/class-page#event-dialog"},"'dialog'")," event."),(0,l.kt)("p",null,"An example of using ",(0,l.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/api/class-dialog#dialogacceptprompttext"},"dialog.accept([promptText])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/api/class-dialog#dialogdefaultvalue"},"dialog.defaultValue()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/api/class-dialog#dialogdismiss"},"dialog.dismiss()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/api/class-dialog#dialogmessage"},"dialog.message()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.2.0/api/class-dialog#dialogtype"},"dialog.type()"))),(0,l.kt)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"promptText")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," is not prompt."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"> Promise which resolves when the dialog has been accepted.")),(0,l.kt)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> If dialog is prompt, returns default prompt value. Otherwise, returns empty string.")),(0,l.kt)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"> Promise which resolves when the dialog has been dismissed.")),(0,l.kt)("h2",{id:"dialogmessage"},"dialog.message()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> A message displayed in the dialog.")),(0,l.kt)("h2",{id:"dialogtype"},"dialog.type()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Dialog's type, can be one of ",(0,l.kt)("inlineCode",{parentName:"li"},"alert"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"beforeunload"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"confirm")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"prompt"),".")))}c.isMDXComponent=!0}}]);