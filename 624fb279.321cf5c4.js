(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(889)),a={id:"extensibility",title:"Extensibility"},c={unversionedId:"extensibility",id:"version-1.7.0/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.7.0/extensibility.mdx",slug:"/extensibility",permalink:"/docs/1.7.0/extensibility",version:"1.7.0",sidebar:"version-1.7.0/docs",previous:{title:"Advanced installation",permalink:"/docs/1.7.0/installation"}},l=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),Object(o.b)("h2",{id:"custom-selector-engines"},"Custom selector engines"),Object(o.b)("p",null,"Playwright supports custom selector engines, registered with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.7.0/api/class-selectors#selectorsregistername-script-options"}),"selectors.register(name, script[, options])"),"."),Object(o.b)("p",null,"Selector engine should have the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",Object(o.b)("inlineCode",{parentName:"li"},"root")," (root is either a ",Object(o.b)("inlineCode",{parentName:"li"},"Document"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Element"),") to a ",Object(o.b)("inlineCode",{parentName:"li"},"target")," element."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",Object(o.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(o.b)("inlineCode",{parentName:"li"},"root"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",Object(o.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(o.b)("inlineCode",{parentName:"li"},"root"),".")),Object(o.b)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",Object(o.b)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",Object(o.b)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),Object(o.b)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Must be a function that evaluates to a selector engine instance.\nconst createTagNameEngine = () => ({\n  // Creates a selector that matches given target when queried at the root.\n  // Can return undefined if unable to create one.\n  create(root, target) {\n    return root.querySelector(target.tagName) === target ? target.tagName : undefined;\n  },\n\n  // Returns the first element matching given selector in the root's subtree.\n  query(root, selector) {\n    return root.querySelector(selector);\n  },\n\n  // Returns all elements matching given selector in the root's subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n});\n\n// Register the engine. Selectors will be prefixed with \"tag=\".\nawait selectors.register('tag', createTagNameEngine);\n\n// Now we can use 'tag=' selectors.\nconst button = await page.$('tag=button');\n\n// We can combine it with other selector engines using `>>` combinator.\nawait page.click('tag=div >> span >> \"Click me\"');\n\n// We can use it in any methods supporting selectors.\nconst buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n")))}u.isMDXComponent=!0},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?i.a.createElement(g,c(c({ref:t},s),{},{components:n})):i.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);