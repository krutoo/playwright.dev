(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{648:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var s=t(3),n=t(7),o=(t(0),t(889)),a={id:"class-browserserver",title:"BrowserServer"},c={unversionedId:"api/class-browserserver",id:"version-1.6.0/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- event: 'close'",source:"@site/versioned_docs/version-1.6.0/api/class-browserserver.mdx",slug:"/api/class-browserserver",permalink:"/docs/1.6.0/api/class-browserserver",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"Worker",permalink:"/docs/1.6.0/api/class-worker"},next:{title:"BrowserType",permalink:"/docs/1.6.0/api/class-browsertype"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],i={toc:l};function b(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"#event-close-4"}),"event: 'close'")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-browserserver#browserserverclose"}),"browserServer.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-browserserver#browserserverkill"}),"browserServer.kill()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-browserserver#browserserverprocess"}),"browserServer.process()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-browserserver#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(o.b)("h2",{id:"event-close"},"event: 'close'"),Object(o.b)("p",null,"Emitted when the browser server closes."),Object(o.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(o.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Kills the browser process and waits for the process to exit."),Object(o.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),"> Spawned browser application process.")),Object(o.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Browser websocket url.")),Object(o.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-browsertype#browsertypeconnectoptions"}),"browserType.connect(options)")," to establish connection to the browser."))}b.isMDXComponent=!0},889:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var s=t(0),n=t.n(s);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),b=function(e){var r=n.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return n.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},v=n.a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),v=s,d=p["".concat(a,".").concat(v)]||p[v]||u[v]||o;return t?n.a.createElement(d,c(c({ref:r},i),{},{components:t})):n.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var i=2;i<o;i++)a[i]=t[i];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);