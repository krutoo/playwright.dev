(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[92187],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76353:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={id:"class-selectors",title:"Selectors"},s={unversionedId:"api/class-selectors",id:"version-1.5.0/api/class-selectors",isDocsHomePage:!1,title:"Selectors",description:"Selectors can be used to install custom selector engines. See Working with selectors) for more information.",source:"@site/versioned_docs/version-1.5.0/api/class-selectors.mdx",sourceDirName:"api",slug:"/api/class-selectors",permalink:"/docs/1.5.0/api/class-selectors",version:"1.5.0",frontMatter:{id:"class-selectors",title:"Selectors"},sidebar:"version-1.5.0/api",previous:{title:"Response",permalink:"/docs/1.5.0/api/class-response"},next:{title:"Route",permalink:"/docs/1.5.0/api/class-route"}},l=[{value:"selectors.register(name, script, options)",id:"selectorsregistername-script-options",children:[]}],c={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.5.0/api/working-with-selectors"},"Working with selectors"),") for more information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-selectors#selectorsregistername-script-options"},"selectors.register(name, script[, options])"))),(0,o.kt)("h2",{id:"selectorsregistername-script-options"},"selectors.register(name, script","[, options]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Name that is used in selectors as a prefix, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"{name: 'foo'}")," enables ",(0,o.kt)("inlineCode",{parentName:"li"},"foo=myselectorbody")," selectors. May only contain ",(0,o.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]")," characters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"script")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Script that evaluates to a selector engine instance.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Path to the JavaScript file. If ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Raw script content."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contentScript")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),"> Whether to run this selector engine in isolated JavaScript environment. This environment has access to the same DOM, but not any JavaScript objects from the frame's scripts. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". Note that running as a content script is not guaranteed when this engine is used together with other registered engines."))),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { selectors, firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  // Must be a function that evaluates to a selector engine instance.\n  const createTagNameEngine = () => ({\n    // Creates a selector that matches given target when queried at the root.\n    // Can return undefined if unable to create one.\n    create(root, target) {\n      return root.querySelector(target.tagName) === target ? target.tagName : undefined;\n    },\n\n    // Returns the first element matching given selector in the root's subtree.\n    query(root, selector) {\n      return root.querySelector(selector);\n    },\n\n    // Returns all elements matching given selector in the root's subtree.\n    queryAll(root, selector) {\n      return Array.from(root.querySelectorAll(selector));\n    }\n  });\n\n  // Register the engine. Selectors will be prefixed with \"tag=\".\n  await selectors.register('tag', createTagNameEngine);\n\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.setContent(`<div><button>Click me</button></div>`);\n\n  // Use the selector prefixed with its name.\n  const button = await page.$('tag=button');\n  // Combine it with other selector engines.\n  await page.click('tag=div >> text=\"Click me\"');\n  // Can use it in any methods supporting selectors.\n  const buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n\n  await browser.close();\n})();\n")))}p.isMDXComponent=!0}}]);