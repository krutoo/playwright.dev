(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[13250],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,w=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(w,i(i({ref:t},u),{},{components:r})):n.createElement(w,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";r(67294)},41395:function(e,t,r){"use strict";r(67294),r(80944)},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},80944:function(e,t,r){"use strict";var n=r(67294),o=r(79443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},53882:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=(r(41395),r(58215),{id:"videos",title:"Videos"}),s={unversionedId:"videos",id:"version-1.8.0/videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browserContext.close().",source:"@site/versioned_docs/version-1.8.0/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/docs/1.8.0/videos",version:"1.8.0",frontMatter:{id:"videos",title:"Videos"},sidebar:"version-1.8.0/docs",previous:{title:"Verification",permalink:"/docs/1.8.0/verification"},next:{title:"Test Runners",permalink:"/docs/1.8.0/test-runners"}},c=[{value:"API reference",id:"api-reference",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright can record videos for all pages in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.8.0/core-concepts#browser-contexts"},"browser context"),". Videos are saved upon context closure, so make sure to await ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.8.0/api/class-browsercontext#browsercontextclose"},"browserContext.close()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// With browser.newContext()\nconst context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n\n// With browser.newPage()\nconst page = await browser.newPage({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait page.close();\n\n// [Optional] Specify video size; defaults to viewport size\nconst context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 800, height: 600 },\n  }\n});\n")),(0,a.kt)("h3",{id:"api-reference"},"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.8.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.8.0/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.8.0/api/class-browser#browsernewpageoptions"},"browser.newPage([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.8.0/api/class-browsercontext#browsercontextclose"},"browserContext.close()"))))}u.isMDXComponent=!0}}]);