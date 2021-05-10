(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{180:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return s}));var n=t(3),o=t(7),l=(t(0),t(270)),r=(t(273),t(274),{id:"class-download",title:"Download"}),c={unversionedId:"api/class-download",id:"api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [Page.onDownload(handler) event.",source:"@site/docs/api/class-download.mdx",slug:"/api/class-download",permalink:"/java/docs/next/api/class-download",version:"current",sidebar:"api",previous:{title:"Dialog",permalink:"/java/docs/next/api/class-dialog"},next:{title:"ElementHandle",permalink:"/java/docs/next/api/class-elementhandle"}},i=[{value:"Download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"Download.delete()",id:"downloaddelete",children:[]},{value:"Download.failure()",id:"downloadfailure",children:[]},{value:"Download.path()",id:"downloadpath",children:[]},{value:"Download.saveAs(path)",id:"downloadsaveaspath",children:[]},{value:"Download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"Download.url()",id:"downloadurl",children:[]}],d={toc:i};function s(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-page#pageondownloadhandler"}),"Page.onDownload(handler)")," event."),Object(l.b)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(l.b)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// wait for download to start\nDownload download  = page.waitForDownload(() -> page.click("a"));\n// wait for download to complete\nPath path = download.path();\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// wait for download to start\nDownload download = page.waitForDownload(() -> {\n  page.click("a");\n});\n// wait for download to complete\nPath path = download.path();\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Browser context ",Object(l.b)("strong",{parentName:"p"},"must")," be created with the ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadcreatereadstream"}),"Download.createReadStream()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloaddelete"}),"Download.delete()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadfailure"}),"Download.failure()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadpath"}),"Download.path()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadsaveaspath"}),"Download.saveAs(path)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadsuggestedfilename"}),"Download.suggestedFilename()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-download#downloadurl"}),"Download.url()"))),Object(l.b)("h2",{id:"downloadcreatereadstream"},"Download.createReadStream()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html",title:"InputStream"}),"InputStream"),">")),Object(l.b)("p",null,"Returns readable stream for current download or ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(l.b)("h2",{id:"downloaddelete"},"Download.delete()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">")),Object(l.b)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadfailure"},"Download.failure()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(l.b)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),Object(l.b)("h2",{id:"downloadpath"},"Download.path()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">")),Object(l.b)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),Object(l.b)("h2",{id:"downloadsaveaspath"},"Download.saveAs(path)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"path")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),"> Path where the download should be saved."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">")),Object(l.b)("p",null,"Saves the download to a user-specified path. It is safe to call this method while the download is still in progress."),Object(l.b)("h2",{id:"downloadsuggestedfilename"},"Download.suggestedFilename()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(l.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(l.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(l.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(l.b)("h2",{id:"downloadurl"},"Download.url()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(l.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},269:function(e,a,t){"use strict";function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.a=function(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}},270:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var a=o.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=s(e.components);return o.a.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=s(t),u=n,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||l;return t?o.a.createElement(m,c(c({ref:a},d),{},{components:t})):o.a.createElement(m,c({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var d=2;d<l;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},271:function(e,a,t){"use strict";var n=t(0),o=t(272);a.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,a,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);a.a=o},273:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(271),r=t(269),c=t(53),i=t.n(c),d=37,s=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,b=e.values,p=e.groupId,u=e.className,m=Object(l.a)(),j=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(n.useState)(c),w=f[0],O=f[1],v=n.Children.toArray(e.children);if(null!=p){var g=j[p];null!=g&&g!==w&&b.some((function(e){return e.value===g}))&&O(g)}var N=function(e){O(e),null!=p&&h(p,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var a=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===a,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":w===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case s:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case d:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(y,e.target,e)},onFocus:function(){return N(a)},onClick:function(){N(a)}},t)}))),a?Object(n.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}},274:function(e,a,t){"use strict";var n=t(3),o=t(0),l=t.n(o);a.a=function(e){var a=e.children,t=e.hidden,o=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:o}),a)}}}]);