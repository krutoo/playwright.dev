(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(392)),c=n(395),s=n(396),i={id:"class-cdpsession",title:"CDPSession"},l={unversionedId:"api/class-cdpsession",id:"version-1.8.0/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.8.0/api/class-cdpsession.mdx",slug:"/api/class-cdpsession",permalink:"/python/docs/1.8.0/api/class-cdpsession",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"BrowserType",permalink:"/python/docs/1.8.0/api/class-browsertype"},next:{title:"ChromiumBrowserContext",permalink:"/python/docs/1.8.0/api/class-chromiumbrowsercontext"}},p=[{value:"cdp_session.detach()",id:"cdp_sessiondetach",children:[]},{value:"cdp_session.send(method, **kwargs)",id:"cdp_sessionsendmethod-kwargs",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"}),"EventEmitter"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"protocol methods can be called with ",Object(o.b)("inlineCode",{parentName:"li"},"session.send")," method."),Object(o.b)("li",{parentName:"ul"},"protocol events can be subscribed to with ",Object(o.b)("inlineCode",{parentName:"li"},"session.on")," method.")),Object(o.b)("p",null,"Useful links:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol Viewer"),"."),Object(o.b)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"}),"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'client = page.context().new_cdp_session(page)\nclient.send("animation.enable")\nclient.on("animation.animation_created", lambda: print("animation created!"))\nresponse = client.send("animation.get_playback_rate")\nprint("playback rate is " + response["playback_rate"])\nclient.send("animation.set_playback_rate", {\n    playback_rate: response["playback_rate"] / 2\n})\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'client = await page.context().new_cdp_session(page)\nawait client.send("animation.enable")\nclient.on("animation.animation_created", lambda: print("animation created!"))\nresponse = await client.send("animation.get_playback_rate")\nprint("playback rate is " + response["playback_rate"])\nawait client.send("animation.set_playback_rate", {\n    playback_rate: response["playback_rate"] / 2\n})\n')))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-cdpsession#cdp_sessiondetach"}),"cdp_session.detach()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-cdpsession#cdp_sessionsendmethod-kwargs"}),"cdp_session.send(method, **kwargs)"))),Object(o.b)("h2",{id:"cdp_sessiondetach"},"cdp_session.detach()"),Object(o.b)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),Object(o.b)("h2",{id:"cdp_sessionsendmethod-kwargs"},"cdp_session.send(method, **kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> protocol method name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"> Optional method parameters"),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">")))}u.isMDXComponent=!0},391:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},393:function(e,t,n){"use strict";var a=n(0),r=n(394);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},395:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(393),c=n(391),s=n(53),i=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,y=Object(a.useState)(s),O=y[0],j=y[1],v=a.Children.toArray(e.children);if(null!=u){var g=f[u];null!=g&&g!==O&&b.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=u&&h(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},396:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);