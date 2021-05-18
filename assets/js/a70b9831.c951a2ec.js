(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[52587],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97104:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return p}});var a=r(22122),s=r(19756),n=(r(67294),r(3905)),i={id:"class-request",title:"Request"},l={unversionedId:"api/class-request",id:"version-1.3.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request, such as for a network resource, the following events are emitted by playwright's page:",source:"@site/versioned_docs/version-1.3.0/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/docs/1.3.0/api/class-request",version:"1.3.0",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.3.0/api",previous:{title:"Mouse",permalink:"/docs/1.3.0/api/class-mouse"},next:{title:"Response",permalink:"/docs/1.3.0/api/class-response"}},o=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.url()",id:"requesturl",children:[]}],u={toc:o};function p(e){var t=e.components,r=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Whenever the page sends a request, such as for a network resource, the following events are emitted by playwright's page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-page#event-request"},(0,n.kt)("inlineCode",{parentName:"a"},"'request'"))," emitted when the request is issued by the page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-page#event-response"},(0,n.kt)("inlineCode",{parentName:"a"},"'response'"))," emitted when/if the response is received for the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-page#event-requestfinished"},(0,n.kt)("inlineCode",{parentName:"a"},"'requestfinished'"))," emitted when the response body is downloaded and the request is complete.")),(0,n.kt)("p",null,"If request fails at some point, then instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.3.0/api/class-page#event-requestfailed"},(0,n.kt)("inlineCode",{parentName:"a"},"'requestfailed'"))," event is emitted."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")," HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event.")),(0,n.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestfailure"},"request.failure()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestframe"},"request.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestheaders"},"request.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestisnavigationrequest"},"request.isNavigationRequest()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestmethod"},"request.method()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestpostdata"},"request.postData()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestpostdatabuffer"},"request.postDataBuffer()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestpostdatajson"},"request.postDataJSON()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestredirectedfrom"},"request.redirectedFrom()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestredirectedto"},"request.redirectedTo()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestresourcetype"},"request.resourceType()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requestresponse"},"request.response()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#requesturl"},"request.url()"))),(0,n.kt)("h2",{id:"requestfailure"},"request.failure()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Object describing request failure, if any",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"errorText")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Human-readable error message, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),(0,n.kt)("p",null,"The method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by\n",(0,n.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,n.kt)("p",null,"Example of logging of all the failed requests:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,n.kt)("h2",{id:"requestframe"},"request.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-frame#class-frame",title:"Frame"},"Frame"),"> A ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-frame#class-frame",title:"Frame"},"Frame")," that initiated this request.")),(0,n.kt)("h2",{id:"requestheaders"},"request.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">> An object with HTTP headers associated with the request. All header names are lower-case.")),(0,n.kt)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether this request is driving frame's navigation."),(0,n.kt)("h2",{id:"requestmethod"},"request.method()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Request's method (GET, POST, etc.)")),(0,n.kt)("h2",{id:"requestpostdata"},"request.postData()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Request's post body, if any.")),(0,n.kt)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"},"Buffer"),"> Request's post body in a binary form, if any.")),(0,n.kt)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Parsed request's body for ",(0,n.kt)("inlineCode",{parentName:"li"},"form-urlencoded")," and JSON as a fallback if any.")),(0,n.kt)("p",null,"When the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,n.kt)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#class-request",title:"Request"},"Request"),"> Request that was redirected by the server to this one, if any.")),(0,n.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.3.0/api/class-request#class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,n.kt)("p",null,"For example, if the website ",(0,n.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),(0,n.kt)("p",null,"If the website ",(0,n.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),(0,n.kt)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <?",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-request#class-request",title:"Request"},"Request"),"> New request issued by the browser if the server responded with redirect.")),(0,n.kt)("p",null,"This method is the opposite of ",(0,n.kt)("a",{parentName:"p",href:"#requestredirectedfrom"},"request.redirectedFrom()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),(0,n.kt)("h2",{id:"requestresourcetype"},"request.resourceType()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">")),(0,n.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine.\nResourceType will be one of the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,n.kt)("h2",{id:"requestresponse"},"request.response()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<?",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-response#class-response",title:"Response"},"Response"),">> A matching ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-response#class-response",title:"Response"},"Response")," object, or ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," if the response was not received due to error.")),(0,n.kt)("h2",{id:"requesturl"},"request.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> URL of the request.")))}p.isMDXComponent=!0}}]);