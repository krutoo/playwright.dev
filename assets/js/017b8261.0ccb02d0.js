(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[90347],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,w=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return a?o.createElement(w,l(l({ref:t},p),{},{components:a})):o.createElement(w,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98401:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return i},default:function(){return p}});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),l={id:"class-download",title:"Download"},d={unversionedId:"api/class-download",id:"version-1.1.0/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-1.1.0/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/docs/1.1.0/api/class-download",version:"1.1.0",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.1.0/api",previous:{title:"Dialog",permalink:"/docs/1.1.0/api/class-dialog"},next:{title:"FileChooser",permalink:"/docs/1.1.0/api/class-filechooser"}},i=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],s={toc:i};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-download#class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-page#event-download"},"'download'")," event."),(0,r.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),(0,r.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")," Browser context ",(0,r.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloadcreatereadstream"},"download.createReadStream()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloaddelete"},"download.delete()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloadfailure"},"download.failure()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloadpath"},"download.path()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloadsuggestedfilename"},"download.suggestedFilename()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-download#downloadurl"},"download.url()"))),(0,r.kt)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<null|",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.htmlapi.mdx#stream_class_stream_readable",title:"Readable"},"Readable"),">>")),(0,r.kt)("p",null,"Returns readable stream for current download or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,r.kt)("h2",{id:"downloaddelete"},"download.delete()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Deletes the downloaded file."),(0,r.kt)("h2",{id:"downloadfailure"},"download.failure()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<null|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">>")),(0,r.kt)("p",null,"Returns download error if any."),(0,r.kt)("h2",{id:"downloadpath"},"download.path()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<null|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">>")),(0,r.kt)("p",null,"Returns path to the downloaded file in case of successful download."),(0,r.kt)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">")),(0,r.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,r.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,r.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,r.kt)("h2",{id:"downloadurl"},"download.url()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">")),(0,r.kt)("p",null,"Returns downloaded url."))}p.isMDXComponent=!0}}]);