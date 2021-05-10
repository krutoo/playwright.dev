(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{791:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return b}));var o=t(3),s=t(7),n=(t(0),t(889)),a=(t(893),t(894),{id:"class-browserserver",title:"BrowserServer"}),c={unversionedId:"api/class-browserserver",id:"version-1.11.0/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- browserServer.on('close')",source:"@site/versioned_docs/version-1.11.0/api/class-browserserver.mdx",slug:"/api/class-browserserver",permalink:"/docs/api/class-browserserver",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"BrowserContext",permalink:"/docs/api/class-browsercontext"},next:{title:"BrowserType",permalink:"/docs/api/class-browsertype"}},i=[{value:"browserServer.on(&#39;close&#39;)",id:"browserserveronclose",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],l={toc:i};function b(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserveronclose"}),"browserServer.on('close')")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverclose"}),"browserServer.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverkill"}),"browserServer.kill()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverprocess"}),"browserServer.process()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/class-browserserver#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(n.b)("h2",{id:"browserserveronclose"},"browserServer.on('close')"),Object(n.b)("p",null,"Emitted when the browser server closes."),Object(n.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(n.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(n.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(n.b)("p",null,"Kills the browser process and waits for the process to exit."),Object(n.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),">")),Object(n.b)("p",null,"Spawned browser application process."),Object(n.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(n.b)("p",null,"Browser websocket url."),Object(n.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/class-browsertype#browsertypeconnectparams"}),"browserType.connect(params)")," to establish connection to the browser."))}b.isMDXComponent=!0},889:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var o=t(0),s=t.n(o);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,s=function(e,r){if(null==e)return{};var t,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),b=function(e){var r=s.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return s.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},v=s.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(t),v=o,d=p["".concat(a,".").concat(v)]||p[v]||u[v]||n;return t?s.a.createElement(d,c(c({ref:r},l),{},{components:t})):s.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,a=new Array(n);a[0]=v;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<n;l++)a[l]=t[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},890:function(e,r,t){"use strict";function o(e){var r,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=o(e[r]))&&(s&&(s+=" "),s+=t);else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}r.a=function(){for(var e,r,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(r=o(e))&&(s&&(s+=" "),s+=r);return s}},891:function(e,r,t){"use strict";var o=t(0),s=t(892);r.a=function(){var e=Object(o.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,r,t){"use strict";var o=t(0),s=Object(o.createContext)(void 0);r.a=s},893:function(e,r,t){"use strict";t(0),t(891),t(890),t(55)},894:function(e,r,t){"use strict";t(3),t(0)}}]);