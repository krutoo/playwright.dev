(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{261:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(889)),s=(r(893),r(894),{id:"class-request",title:"Request"}),l={unversionedId:"api/class-request",id:"version-1.10.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.10.0/api/class-request.mdx",slug:"/api/class-request",permalink:"/docs/1.10.0/api/class-request",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"Page",permalink:"/docs/1.10.0/api/class-page"},next:{title:"Response",permalink:"/docs/1.10.0/api/class-response"}},c=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing()",id:"requesttiming",children:[]},{value:"request.url()",id:"requesturl",children:[]}],o={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page",title:"Page"}),"Page"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageonrequest"}),"page.on('request')")," emitted when the request is issued by the page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageonresponse"}),"page.on('response')")," emitted when/if the response status and headers are received for the request."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pageonrequestfinished"}),"page.on('requestfinished')")," emitted when the response body is downloaded and the request is complete.")),Object(i.b)("p",null,"If request fails at some point, then instead of ",Object(i.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-page#pageonrequestfailed"}),"page.on('requestfailed')")," event is emitted."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(i.b)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),Object(i.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestfailure"}),"request.failure()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestframe"}),"request.frame()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestheaders"}),"request.headers()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestisnavigationrequest"}),"request.isNavigationRequest()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestmethod"}),"request.method()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestpostdata"}),"request.postData()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestpostdatabuffer"}),"request.postDataBuffer()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestpostdatajson"}),"request.postDataJSON()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestredirectedfrom"}),"request.redirectedFrom()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestredirectedto"}),"request.redirectedTo()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestresourcetype"}),"request.resourceType()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requestresponse"}),"request.response()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requesttiming"}),"request.timing()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request#requesturl"}),"request.url()"))),Object(i.b)("h2",{id:"requestfailure"},"request.failure()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errorText")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Human-readable error message, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),Object(i.b)("p",null,"The method returns ",Object(i.b)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",Object(i.b)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(i.b)("p",null,"Example of logging of all the failed requests:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(i.b)("h2",{id:"requestframe"},"request.frame()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-frame",title:"Frame"}),"Frame"),">")),Object(i.b)("p",null,"Returns the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),Object(i.b)("h2",{id:"requestheaders"},"request.headers()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">>")),Object(i.b)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),Object(i.b)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(i.b)("p",null,"Whether this request is driving frame's navigation."),Object(i.b)("h2",{id:"requestmethod"},"request.method()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"Request's method (GET, POST, etc.)"),Object(i.b)("h2",{id:"requestpostdata"},"request.postData()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"Request's post body, if any."),Object(i.b)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">")),Object(i.b)("p",null,"Request's post body in a binary form, if any."),Object(i.b)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),Object(i.b)("p",null,"Returns parsed request's body for ",Object(i.b)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),Object(i.b)("p",null,"When the response is ",Object(i.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),Object(i.b)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request",title:"Request"}),"Request"),">")),Object(i.b)("p",null,"Request that was redirected by the server to this one, if any."),Object(i.b)("p",null,"When the server responds with a redirect, Playwright creates a new ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",Object(i.b)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",Object(i.b)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(i.b)("p",null,"For example, if the website ",Object(i.b)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(i.b)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),Object(i.b)("p",null,"If the website ",Object(i.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),Object(i.b)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-request",title:"Request"}),"Request"),">")),Object(i.b)("p",null,"New request issued by the browser if the server responded with redirect."),Object(i.b)("p",null,"This method is the opposite of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-request#requestredirectedfrom"}),"request.redirectedFrom()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),Object(i.b)("h2",{id:"requestresourcetype"},"request.resourceType()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",Object(i.b)("inlineCode",{parentName:"p"},"document"),", ",Object(i.b)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(i.b)("inlineCode",{parentName:"p"},"image"),", ",Object(i.b)("inlineCode",{parentName:"p"},"media"),", ",Object(i.b)("inlineCode",{parentName:"p"},"font"),", ",Object(i.b)("inlineCode",{parentName:"p"},"script"),", ",Object(i.b)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(i.b)("inlineCode",{parentName:"p"},"xhr"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"eventsource"),", ",Object(i.b)("inlineCode",{parentName:"p"},"websocket"),", ",Object(i.b)("inlineCode",{parentName:"p"},"manifest"),", ",Object(i.b)("inlineCode",{parentName:"p"},"other"),"."),Object(i.b)("h2",{id:"requestresponse"},"request.response()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-response",title:"Response"}),"Response"),">>")),Object(i.b)("p",null,"Returns the matching ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.10.0/api/class-response",title:"Response"}),"Response")," object, or ",Object(i.b)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),Object(i.b)("h2",{id:"requesttiming"},"request.timing()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startTime")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domainLookupStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connectStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"connectEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseStart")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseEnd")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),Object(i.b)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",Object(i.b)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto('http://example.com')\n]);\nconsole.log(request.timing());\n")),Object(i.b)("h2",{id:"requesturl"},"request.url()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"URL of the request."))}b.isMDXComponent=!0},889:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.a.createElement(d,l(l({ref:t},o),{},{components:r})):n.a.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},890:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},891:function(e,t,r){"use strict";var a=r(0),n=r(892);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},893:function(e,t,r){"use strict";r(0),r(891),r(890),r(55)},894:function(e,t,r){"use strict";r(3),r(0)}}]);