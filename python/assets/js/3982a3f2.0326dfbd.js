"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3699],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function i({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(4939),o=a(9670),l=a(6010),s="tabItem_LplD",p=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&y(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&y(e,a,t[a]);return e};function f(e){var t,a,n;const{lazy:p,block:c,defaultValue:d,values:m,groupId:y,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,o.lx)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(n=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,o.UB)(),[N,T]=(0,r.useState)(w),_=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=y){const e=v[y];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const q=e=>{const t=e.currentTarget,a=_.indexOf(t),r=b[a].value;r!==N&&(P(t),T(r),null!=y&&x(y,r))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=h({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>_.push(e),onKeyDown:I,onFocus:q,onClick:q},a),o={className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===e})},i(n,u(o))),null!=t?t:e);var n,o}))),p?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,n.Z)();return r.createElement(f,h({key:String(t)},e))}},9467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var r=a(3905),n=a(3824),o=a(3811),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e};const y={id:"network",title:"Network"},h=void 0,f={unversionedId:"network",id:"network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/python/docs/next/network",tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/python/docs/next/navigations"},next:{title:"Pages",permalink:"/python/docs/next/pages"}},k={},b=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Modify responses",id:"modify-responses",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Record and replay requests",id:"record-and-replay-requests",level:2},{value:"Recording HAR with CLI",id:"recording-har-with-cli",level:3},{value:"Recording HAR with a script",id:"recording-har-with-a-script",level:3},{value:"Replaying from HAR",id:"replaying-from-har",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-5",level:3}],g={toc:b};function w(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides APIs to ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#network-events"}),"Network events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#modify-responses"}),"Modify responses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#record-and-replay-requests"}),"Record and replay requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#websockets"}),"WebSockets"))),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"http-authentication"}),"HTTP Authentication"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = context.new_page()\npage.goto("https://example.com")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = await context.new_page()\nawait page.goto("https://example.com")\n')))),(0,r.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,r.kt)("h2",m({},{id:"http-proxy"}),"HTTP Proxy"),(0,r.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,r.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,r.kt)("p",null,"Here is an example of a global proxy:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "username": "usr",\n  "password": "pwd"\n})\n')))),(0,r.kt)("p",null,"When specifying proxy for each context individually, ",(0,r.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Browser proxy option is required for Chromium on Windows.\nbrowser = chromium.launch(proxy={"server": "per-context"})\ncontext = browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Browser proxy option is required for Chromium on Windows.\nbrowser = await chromium.launch(proxy={"server": "per-context"})\ncontext = await browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n')))),(0,r.kt)("h2",m({},{id:"network-events"}),"Network events"),(0,r.kt)("p",null,"You can monitor all the requests and responses:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    page.goto("https://example.com")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    await page.goto("https://example.com")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,r.kt)("p",null,"Or wait for a network response after the button click:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nwith page.expect_response("**/api/fetch_data") as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nasync with page.expect_response("**/api/fetch_data") as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,r.kt)("h4",m({},{id:"variations"}),"Variations"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nwith page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n\n# Use a predicate taking a response object\nwith page.expect_response(lambda response: token in response.url) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nasync with page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n\n# Use a predicate taking a response object\nasync with page.expect_response(lambda response: token in response.url) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),(0,r.kt)("h3",m({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-request",title:"Request"}),"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-response",title:"Response"}),"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-request"}),'page.on("request")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-response"}),'page.on("response")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-wait-for-request"}),"page.expect_request(url_or_predicate, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-wait-for-response"}),"page.expect_response(url_or_predicate, **kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"handle-requests"}),"Handle requests"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\npage.goto("https://example.com")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\nawait page.goto("https://example.com")\n')))),(0,r.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,r.kt)("h4",m({},{id:"variations-1"}),"Variations"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\ncontext.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\npage.goto("https://example.com")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\nawait context.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\nawait page.goto("https://example.com")\n')))),(0,r.kt)("h3",m({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-unroute"}),"browser_context.unroute(url, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-unroute"}),"page.unroute(url, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-route",title:"Route"}),"Route"))),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"modify-requests"}),"Modify requests"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Delete header\ndef handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\npage.route("**/*", handle_route)\n\n# Continue requests as POST.\npage.route("**/*", lambda route: route.continue_(method="POST"))\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Delete header\nasync def handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\nawait page.route("**/*", handle_route)\n\n# Continue requests as POST.\nawait page.route("**/*", lambda route: route.continue_(method="POST"))\n')))),(0,r.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,r.kt)("h2",m({},{id:"abort-requests"}),"Abort requests"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\npage.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'await page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\nawait page.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n')))),(0,r.kt)("h3",m({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-route#route-abort"}),"route.abort(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"modify-responses"}),"Modify responses"),(0,r.kt)("p",null,"To modify a response use ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to get original response and then pass the response to ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-route#route-fulfill"}),"route.fulfill(**kwargs)"),". You can override individual fields on the response via options:"),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'def handle_route(route: Route) -> None:\n    # Fetch original response.\n    response = page.request.fetch(route.request)\n    # Add a prefix to the title.\n    body = response.text()\n    body = body.replace("<title>", "<title>My prefix:")\n    route.fulfill(\n        # Pass all fields from the response.\n        response=response,\n        # Override response body.\n        body=body,\n        # Force content type to be html.\n        headers={**response.headers, "content-type": "text/html"},\n    )\n\npage.route("**/title.html", handle_route)\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'async def handle_route(route: Route) -> None:\n    # Fetch original response.\n    response = await page.request.fetch(route.request)\n    # Add a prefix to the title.\n    body = await response.text()\n    body = body.replace("<title>", "<title>My prefix:")\n    await route.fulfill(\n        # Pass all fields from the response.\n        response=response,\n        # Override response body.\n        body=body,\n        # Force content type to be html.\n        headers={**response.headers, "content-type": "text/html"},\n    )\n\nawait page.route("**/title.html", handle_route)\n')))),(0,r.kt)("h3",m({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-playwright#playwright-request"}),"playwright.request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-request"}),"browser_context.request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-request"}),"page.request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-route#route-fulfill"}),"route.fulfill(**kwargs)"))),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"record-and-replay-requests"}),"Record and replay requests"),(0,r.kt)("p",null,"You can record network activity as an HTTP Archive file (HAR). Later on, this archive can be used to mock responses to the network requests. You'll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Record a HAR file."),(0,r.kt)("li",{parentName:"ol"},"Commit the HAR file alongside the tests."),(0,r.kt)("li",{parentName:"ol"},"Route requests using the saved HAR files in the tests.")),(0,r.kt)("h3",m({},{id:"recording-har-with-cli"}),"Recording HAR with CLI"),(0,r.kt)("p",null,"Open the browser with ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/cli"}),"Playwright CLI")," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har")," option to produce a HAR file. Optionally, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-har-glob")," to only save requests you are interested in, for example API endpoints. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# Save API requests from example.com as "example.har" archive.\nplaywright open --save-har=example.har --save-har-glob="**/api/**" https://example.coms\n')),(0,r.kt)("h3",m({},{id:"recording-har-with-a-script"}),"Recording HAR with a script"),(0,r.kt)("p",null,"Alternatively, instead of using the CLI, you can record HAR programmatically. Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"har")," option when creating a ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")," to create an archive. If the har file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,r.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(record_har_path="example.har", record_har_url_filter="**/api/**")\n\n# ... Perform actions ...\n\n# Close context to ensure HAR is saved to disk.\ncontext.close()\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(record_har_path="example.har", record_har_url_filter="**/api/**")\n\n# ... Perform actions ...\n\n# Close context to ensure HAR is saved to disk.\nawait context.close()\n')))),(0,r.kt)("h3",m({},{id:"replaying-from-har"}),"Replaying from HAR"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-page#page-route-from-har"}),"page.route_from_har(har, **kwargs)")," or ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext#browser-context-route-from-har"}),"browser_context.route_from_har(har, **kwargs)")," to serve matching responses from the ",(0,r.kt)("a",m({parentName:"p"},{href:"http://www.softwareishard.com/blog/har-12-spec/"}),"HAR")," file."),(0,r.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Either use a matching response from the HAR,\n# or abort the request if nothing matches.\npage.routeFromHAR("example.har")\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Either use a matching response from the HAR,\n# or abort the request if nothing matches.\nawait page.routeFromHAR("example.har")\n')))),(0,r.kt)("p",null,"HAR replay matches URL and HTTP method strictly. For POST requests, it also matches POST payloads strictly. If multiple recordings match a request, the one with the most matching headers is picked. An entry resulting in a redirect will be followed automatically."),(0,r.kt)("p",null,"Similar to when recording, if given HAR file name ends with ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),", it is considered an archive containing the HAR file along with network payloads stored as separate entries. You can also extract this archive, edit payloads or HAR log manually and point to the extracted har file. All the payloads will be resolved relative to the extracted har file on the file system."),(0,r.kt)("br",null),(0,r.kt)("h2",m({},{id:"websockets"}),"WebSockets"),(0,r.kt)("p",null,"Playwright supports ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-page#page-event-web-socket"}),'page.on("websocket")')," event is fired. This event contains the ",(0,r.kt)("a",m({parentName:"p"},{href:"/python/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'def on_web_socket(ws):\n    print(f"WebSocket opened: {ws.url}")\n    ws.on("framesent", lambda payload: print(payload))\n    ws.on("framereceived", lambda payload: print(payload))\n    ws.on("close", lambda payload: print("WebSocket closed"))\n\npage.on("websocket", on_web_socket)\n')),(0,r.kt)("h3",m({},{id:"api-reference-5"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-page#page-event-web-socket"}),'page.on("websocket")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-frame-sent"}),'web_socket.on("framesent")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-frame-received"}),'web_socket.on("framereceived")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/python/docs/next/api/class-websocket#web-socket-event-close"}),'web_socket.on("close")'))),(0,r.kt)("br",null))}w.isMDXComponent=!0}}]);