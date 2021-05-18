(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[10090],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},45321:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=(n(41395),n(58215),{id:"extensibility",title:"Extensibility"}),l={unversionedId:"extensibility",id:"version-1.8.0/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.8.0/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/docs/1.8.0/extensibility",version:"1.8.0",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.8.0/docs",previous:{title:"Emulation",permalink:"/docs/1.8.0/emulation"},next:{title:"Handles",permalink:"/docs/1.8.0/handles"}},s=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,o.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,o.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.8.0/api/class-selectors#selectorsregistername-script-options"},"selectors.register(name, script[, options])"),"."),(0,o.kt)("p",null,"Selector engine should have the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,o.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,o.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,o.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Must be a function that evaluates to a selector engine instance.\nconst createTagNameEngine = () => ({\n  // Returns the first element matching given selector in the root's subtree.\n  query(root, selector) {\n    return root.querySelector(selector);\n  },\n\n  // Returns all elements matching given selector in the root's subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n});\n\n// Register the engine. Selectors will be prefixed with \"tag=\".\nawait selectors.register('tag', createTagNameEngine);\n\n// Now we can use 'tag=' selectors.\nconst button = await page.$('tag=button');\n\n// We can combine it with other selector engines using `>>` combinator.\nawait page.click('tag=div >> span >> \"Click me\"');\n\n// We can use it in any methods supporting selectors.\nconst buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n")))}u.isMDXComponent=!0}}]);