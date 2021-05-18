(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[70856],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99446:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return u}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),s={id:"class-request",title:"Request"},l={unversionedId:"api/class-request",id:"version-1.6.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.6.0/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/docs/1.6.0/api/class-request",version:"1.6.0",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.6.0/api",previous:{title:"Touchscreen",permalink:"/docs/1.6.0/api/class-touchscreen"},next:{title:"Response",permalink:"/docs/1.6.0/api/class-response"}},o=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing()",id:"requesttiming",children:[]},{value:"request.url()",id:"requesturl",children:[]}],p={toc:o};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-page#class-page",title:"Page"},"Page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-page#event-request"},(0,n.kt)("inlineCode",{parentName:"a"},"'request'"))," emitted when the request is issued by the page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-page#event-response"},(0,n.kt)("inlineCode",{parentName:"a"},"'response'"))," emitted when/if the response status and headers are received for the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-page#event-requestfinished"},(0,n.kt)("inlineCode",{parentName:"a"},"'requestfinished'"))," emitted when the response body is downloaded and the request is complete.")),(0,n.kt)("p",null,"If request fails at some point, then instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-page#event-requestfailed"},(0,n.kt)("inlineCode",{parentName:"a"},"'requestfailed'"))," event is emitted."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")," HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,n.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event.")),(0,n.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestfailure"},"request.failure()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestframe"},"request.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestheaders"},"request.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestisnavigationrequest"},"request.isNavigationRequest()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestmethod"},"request.method()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestpostdata"},"request.postData()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestpostdatabuffer"},"request.postDataBuffer()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestpostdatajson"},"request.postDataJSON()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestredirectedfrom"},"request.redirectedFrom()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestredirectedto"},"request.redirectedTo()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestresourcetype"},"request.resourceType()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requestresponse"},"request.response()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requesttiming"},"request.timing()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#requesturl"},"request.url()"))),(0,n.kt)("h2",{id:"requestfailure"},"request.failure()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Object describing request failure, if any",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"errorText")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Human-readable error message, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),(0,n.kt)("p",null,"The method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by\n",(0,n.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,n.kt)("p",null,"Example of logging of all the failed requests:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,n.kt)("h2",{id:"requestframe"},"request.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-frame#class-frame",title:"Frame"},"Frame"),"> A ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-frame#class-frame",title:"Frame"},"Frame")," that initiated this request.")),(0,n.kt)("h2",{id:"requestheaders"},"request.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">> An object with HTTP headers associated with the request. All header names are lower-case.")),(0,n.kt)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),">")),(0,n.kt)("p",null,"Whether this request is driving frame's navigation."),(0,n.kt)("h2",{id:"requestmethod"},"request.method()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Request's method (GET, POST, etc.)")),(0,n.kt)("h2",{id:"requestpostdata"},"request.postData()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> Request's post body, if any.")),(0,n.kt)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"},"Buffer"),"> Request's post body in a binary form, if any.")),(0,n.kt)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Parsed request's body for ",(0,n.kt)("inlineCode",{parentName:"li"},"form-urlencoded")," and JSON as a fallback if any.")),(0,n.kt)("p",null,"When the response is ",(0,n.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,n.kt)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#class-request",title:"Request"},"Request"),"> Request that was redirected by the server to this one, if any.")),(0,n.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-request#class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,n.kt)("p",null,"For example, if the website ",(0,n.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),(0,n.kt)("p",null,"If the website ",(0,n.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),(0,n.kt)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-request#class-request",title:"Request"},"Request"),"> New request issued by the browser if the server responded with redirect.")),(0,n.kt)("p",null,"This method is the opposite of ",(0,n.kt)("a",{parentName:"p",href:"#requestredirectedfrom"},"request.redirectedFrom()"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),(0,n.kt)("h2",{id:"requestresourcetype"},"request.resourceType()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">")),(0,n.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine.\nResourceType will be one of the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,n.kt)("h2",{id:"requestresponse"},"request.response()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-response#class-response",title:"Response"},"Response"),">> A matching ",(0,n.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-response#class-response",title:"Response"},"Response")," object, or ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," if the response was not received due to error.")),(0,n.kt)("h2",{id:"requesttiming"},"request.timing()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"startTime")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connectStart")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"connectEnd")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"requestStart")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseStart")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"responseEnd")," <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.\n};")))),(0,n.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,n.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto(httpsServer.EMPTY_PAGE)\n]);\nconsole.log(request.timing());\n")),(0,n.kt)("h2",{id:"requesturl"},"request.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> URL of the request.")))}u.isMDXComponent=!0}}]);