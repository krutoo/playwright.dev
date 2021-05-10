(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{326:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),r=(a(0),a(889)),l={id:"class-download",title:"Download"},d={unversionedId:"api/class-download",id:"version-1.2.0/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-1.2.0/api/class-download.mdx",slug:"/api/class-download",permalink:"/docs/1.2.0/api/class-download",version:"1.2.0",sidebar:"version-1.2.0/api",previous:{title:"Dialog",permalink:"/docs/1.2.0/api/class-dialog"},next:{title:"FileChooser",permalink:"/docs/1.2.0/api/class-filechooser"}},c=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],i={toc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-download#class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-page#event-download"}),"'download'")," event."),Object(r.b)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(r.b)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(r.b)("strong",{parentName:"p"},"must")," be created with the ",Object(r.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(r.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloadcreatereadstream"}),"download.createReadStream()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloaddelete"}),"download.delete()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloadfailure"}),"download.failure()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloadpath"}),"download.path()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloadsuggestedfilename"}),"download.suggestedFilename()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-download#downloadurl"}),"download.url()"))),Object(r.b)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/stream.htmlapi.mdx#stream_class_stream_readable",title:"Readable"}),"Readable"),">>")),Object(r.b)("p",null,"Returns readable stream for current download or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(r.b)("h2",{id:"downloaddelete"},"download.delete()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(r.b)("p",null,"Deletes the downloaded file."),Object(r.b)("h2",{id:"downloadfailure"},"download.failure()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">>")),Object(r.b)("p",null,"Returns download error if any."),Object(r.b)("h2",{id:"downloadpath"},"download.path()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<null|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">>")),Object(r.b)("p",null,"Returns path to the downloaded file in case of successful download."),Object(r.b)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">")),Object(r.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(r.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(r.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(r.b)("h2",{id:"downloadurl"},"download.url()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">")),Object(r.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},889:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||r;return a?o.a.createElement(m,d(d({ref:t},i),{},{components:a})):o.a.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var i=2;i<r;i++)l[i]=a[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);