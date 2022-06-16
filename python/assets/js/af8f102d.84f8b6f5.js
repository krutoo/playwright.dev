"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[609],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(4939),l=a(9670),o=a(6010),s="tabItem_LplD",i=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))h.call(t,a)&&m(e,a,t[a]);return e};function k(e){var t,a,n;const{lazy:i,block:c,defaultValue:d,values:h,groupId:m,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,l.lx)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(n=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.UB)(),[x,T]=(0,r.useState)(N),q=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=m){const e=v[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=q.indexOf(t),r=b[a].value;r!==x&&(O(t),T(r),null!=m&&w(m,r))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=q.indexOf(e.currentTarget)+1;t=q[a]||q[0];break}case"ArrowLeft":{const a=q.indexOf(e.currentTarget)-1;t=q[a]||q[q.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},b.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=f({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>q.push(e),onKeyDown:P,onFocus:C,onClick:C},a),l={className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":x===e})},u(n,p(l))),null!=t?t:e);var n,l}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function y(e){const t=(0,n.Z)();return r.createElement(k,f({key:String(t)},e))}},8197:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var r=a(3905),n=a(3824),l=a(3811),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const m={id:"class-route",title:"Route"},f=void 0,k={unversionedId:"api/class-route",id:"api/class-route",title:"Route",description:"Whenever a network route is set up with page.route(url, handler, kwargs) or browser_context.route(url, handler, kwargs), the Route object allows to handle the route.",source:"@site/docs/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/python/docs/next/api/class-route",tags:[],version:"current",frontMatter:{id:"class-route",title:"Route"},sidebar:"api",previous:{title:"Response",permalink:"/python/docs/next/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/next/api/class-selectors"}},y={},b=[{value:"route.abort(**kwargs)",id:"route-abort",level:2},{value:"route.continue_(**kwargs)",id:"route-continue",level:2},{value:"route.fallback(**kwargs)",id:"route-fallback",level:2},{value:"route.fulfill(**kwargs)",id:"route-fulfill",level:2},{value:"route.request",id:"route-request",level:2}],g={toc:b};function N(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=h(h({},g),d),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Whenever a network route is set up with ",(0,r.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")," or ",(0,r.kt)("a",h({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",h({parentName:"p"},{href:"/python/docs/next/network"}),"networking"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-route#route-abort"}),"route.abort(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-route#route-continue"}),"route.continue_(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-route#route-fallback"}),"route.fallback(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-route#route-fulfill"}),"route.fulfill(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-route#route-request"}),"route.request"))),(0,r.kt)("h2",h({},{id:"route-abort"}),"route.abort(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error_code"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Optional error code. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,r.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,r.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Aborts the route's request."),(0,r.kt)("h2",h({},{id:"route-continue"}),"route.continue_(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,r.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request method (e.g. GET or POST)",(0,r.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_data"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," If set changes the post data of request",(0,r.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,r.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,r.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Continues route's request with optional overrides."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "foo-value" # set "foo" header\n        "bar": None # remove "bar" header\n    }\n    route.continue_(headers=headers)\n}\npage.route("**/*", handle)\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "foo-value" # set "foo" header\n        "bar": None # remove "bar" header\n    }\n    await route.continue_(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),(0,r.kt)("h2",h({},{id:"route-fallback"}),"route.fallback(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fallback-option-headers"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,r.kt)("a",{href:"#route-fallback-option-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fallback-option-method"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request method (e.g. GET or POST)",(0,r.kt)("a",{href:"#route-fallback-option-method",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_data"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fallback-option-post-data"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," If set changes the post data of request",(0,r.kt)("a",{href:"#route-fallback-option-post-data",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fallback-option-url"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request URL. New URL must have same protocol as original one. Changing the URL won't affect the route matching, all the routes are matched using the original request URL.",(0,r.kt)("a",{href:"#route-fallback-option-url",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fallback-return"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,r.kt)("a",{href:"#route-fallback-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"When several routes match the given pattern, they run in the order opposite to their registration. That way the last registered route can always override all the previos ones. In the example below, request will be handled by the bottom-most handler first, then it'll fall back to the previous one and in the end will be aborted by the first registered route."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.route("**/*", lambda route: route.abort())  # Runs last.\npage.route("**/*", lambda route: route.fallback())  # Runs second.\npage.route("**/*", lambda route: route.fallback())  # Runs first.\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'await page.route("**/*", lambda route: route.abort())  # Runs last.\nawait page.route("**/*", lambda route: route.fallback())  # Runs second.\nawait page.route("**/*", lambda route: route.fallback())  # Runs first.\n')))),(0,r.kt)("p",null,"Registering multiple routes is useful when you want separate handlers to handle different kinds of requests, for example API calls vs page resources or GET requests vs POST requests as in the example below."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'# Handle GET requests.\ndef handle_post(route):\n    if route.request.method != "GET":\n        route.fallback()\n        return\n  # Handling GET only.\n  # ...\n\n# Handle POST requests.\ndef handle_post(route):\n    if route.request.method != "POST":\n        route.fallback()\n        return\n  # Handling POST only.\n  # ...\n\npage.route("**/*", handle_get)\npage.route("**/*", handle_post)\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'# Handle GET requests.\ndef handle_post(route):\n    if route.request.method != "GET":\n        route.fallback()\n        return\n  # Handling GET only.\n  # ...\n\n# Handle POST requests.\ndef handle_post(route):\n    if route.request.method != "POST":\n        route.fallback()\n        return\n  # Handling POST only.\n  # ...\n\nawait page.route("**/*", handle_get)\nawait page.route("**/*", handle_post)\n')))),(0,r.kt)("p",null,"One can also modify request while falling back to the subsequent handler, that way intermediate route handler can modify url, method, headers and postData of the request."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "foo-value" # set "foo" header\n        "bar": None # remove "bar" header\n    }\n    route.fallback(headers=headers)\n}\npage.route("**/*", handle)\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "foo-value" # set "foo" header\n        "bar": None # remove "bar" header\n    }\n    await route.fallback(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),(0,r.kt)("h2",h({},{id:"route-fulfill"}),"route.fulfill(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," Response body.",(0,r.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content_type"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set, equals to setting ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,r.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">"," Response headers. Header values will be converted to a string.",(0,r.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,r.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,r.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-response"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),"|","[HARResponse]",">"," ",(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," or ","[HARResponse]"," to fulfill route's request with. Individual fields of the response (such as headers) can be overridden using fulfill options.",(0,r.kt)("a",{href:"#route-fulfill-option-response",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Response status code, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),".",(0,r.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,r.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Fulfills route's request with given response."),(0,r.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'await page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n')))),(0,r.kt)("p",null,"An example of serving static file:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n'))),(0,r.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-py"}),'await page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n')))),(0,r.kt)("h2",h({},{id:"route-request"}),"route.request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,r.kt)("a",h({parentName:"li"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,r.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"A request to be routed."))}N.isMDXComponent=!0}}]);