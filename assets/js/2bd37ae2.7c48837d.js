(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[44162],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,w=u["".concat(c,".").concat(h)]||u[h]||m[h]||n;return t?a.createElement(w,i(i({ref:r},p),{},{components:t})):a.createElement(w,i({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76624:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(22122),o=t(19756),n=(t(67294),t(3905)),i={id:"class-chromiumbrowser",title:"ChromiumBrowser"},s={unversionedId:"api/class-chromiumbrowser",id:"version-1.4.0/api/class-chromiumbrowser",isDocsHomePage:!1,title:"ChromiumBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.4.0/api/class-chromiumbrowser.mdx",sourceDirName:"api",slug:"/api/class-chromiumbrowser",permalink:"/docs/1.4.0/api/class-chromiumbrowser",version:"1.4.0",frontMatter:{id:"class-chromiumbrowser",title:"ChromiumBrowser"},sidebar:"version-1.4.0/api",previous:{title:"Logger",permalink:"/docs/1.4.0/api/class-logger"},next:{title:"ChromiumBrowserContext",permalink:"/docs/1.4.0/api/class-chromiumbrowsercontext"}},c=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],l={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser",title:"Browser"},"Browser"))),(0,n.kt)("p",null,"Chromium-specific features including Tracing, service worker support, etc.\nYou can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"},(0,n.kt)("inlineCode",{parentName:"a"},"chromiumBrowser.startTracing"))," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"},(0,n.kt)("inlineCode",{parentName:"a"},"chromiumBrowser.stopTracing"))," to create a trace file which can be opened in Chrome DevTools or ",(0,n.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/timeline-viewer/"},"timeline viewer"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing([page, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#event-disconnected"},"event: 'disconnected'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browserclose"},"browser.close()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browsercontexts"},"browser.contexts()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browserisconnected"},"browser.isConnected()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browsernewpageoptions"},"browser.newPage([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browserversion"},"browser.version()"))),(0,n.kt)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-cdpsession#class-cdpsession",title:"CDPSession"},"CDPSession"),">> Promise that resolves to the newly created browser\nsession.")),(0,n.kt)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"page")," <",(0,n.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#class-page",title:"Page"},"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> A path to write the trace file to."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"screenshots")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),"> captures screenshots in the trace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"categories")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">> specify custom categories to use instead of default."))),(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,n.kt)("p",null,"Only one trace can be active at a time per browser."),(0,n.kt)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"},"Buffer"),">> Promise which resolves to buffer with trace data.")))}p.isMDXComponent=!0}}]);