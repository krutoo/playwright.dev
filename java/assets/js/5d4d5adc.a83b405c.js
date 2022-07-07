"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1055],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(a),f=l,d=u["".concat(s,".").concat(f)]||u[f]||h[f]||r;return a?i.createElement(d,o(o({ref:t},p),{},{components:a})):i.createElement(d,o({ref:t},p))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:l,o[1]=n;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7807:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var i=a(3905),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(n)for(var a of n(t))c.call(t,a)&&p(e,a,t[a]);return e};const u={id:"class-filechooser",title:"FileChooser"},f=void 0,d={unversionedId:"api/class-filechooser",id:"version-1.22/api/class-filechooser",title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [Page.onFileChooser(handler) event.",source:"@site/versioned_docs/version-1.22/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/java/docs/1.22/api/class-filechooser",tags:[],version:"1.22",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/java/docs/1.22/api/class-elementhandle"},next:{title:"Frame",permalink:"/java/docs/1.22/api/class-frame"}},m={},k=[{value:"FileChooser.element()",id:"file-chooser-element",level:2},{value:"FileChooser.isMultiple()",id:"file-chooser-is-multiple",level:2},{value:"FileChooser.page()",id:"file-chooser-page",level:2},{value:"FileChooser.setFiles(files, options)",id:"file-chooser-set-files",level:2}],v={toc:k};function g(e){var t,a=e,{components:l}=a,p=((e,t)=>{var a={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&n)for(var i of n(e))t.indexOf(i)<0&&c.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=h(h({},v),p),r(t,o({components:l,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("a",h({parentName:"p"},{href:"/java/docs/1.22/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",(0,i.kt)("a",h({parentName:"p"},{href:"/java/docs/1.22/api/class-page#page-event-file-chooser"}),"Page.onFileChooser(handler)")," event."),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-java"}),'FileChooser fileChooser = page.waitForFileChooser(() -> page.click("upload"));\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-filechooser#file-chooser-element"}),"FileChooser.element()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-filechooser#file-chooser-is-multiple"}),"FileChooser.isMultiple()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-filechooser#file-chooser-page"}),"FileChooser.page()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-filechooser#file-chooser-set-files"}),"FileChooser.setFiles(files[, options])"))),(0,i.kt)("h2",h({},{id:"file-chooser-element"}),"FileChooser.element()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,i.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns input element associated with this file chooser."),(0,i.kt)("h2",h({},{id:"file-chooser-is-multiple"}),"FileChooser.isMultiple()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,i.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,i.kt)("h2",h({},{id:"file-chooser-page"}),"FileChooser.page()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-page",title:"Page"}),"Page"),">",(0,i.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns page this file chooser belongs to."),(0,i.kt)("h2",h({},{id:"file-chooser-set-files"}),"FileChooser.setFiles(files","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),"|",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),"[","]","|",(0,i.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,i.kt)("inlineCode",{parentName:"li"},"FilePayload"),"[","]",">",(0,i.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setName")," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," File name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setMimeType")," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," File type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setBuffer")," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">"," File content"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"FileChooser.SetFilesOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setNoWaitAfter"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-browsercontext#browser-context-set-default-timeout"}),"BrowserContext.setDefaultTimeout(timeout)")," or ",(0,i.kt)("a",h({parentName:"li"},{href:"/java/docs/1.22/api/class-page#page-set-default-timeout"}),"Page.setDefaultTimeout(timeout)")," methods.",(0,i.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,i.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,i.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,i.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the current working directory. For empty array, clears the selected files."))}g.isMDXComponent=!0}}]);