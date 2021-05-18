(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[38228],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:i,o[1]=n;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19175:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return n},toc:function(){return s},default:function(){return c}});var a=r(22122),i=r(19756),l=(r(67294),r(3905)),o={id:"class-filechooser",title:"FileChooser"},n={unversionedId:"api/class-filechooser",id:"version-1.3.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the ['filechooser' event.",source:"@site/versioned_docs/version-1.3.0/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/docs/1.3.0/api/class-filechooser",version:"1.3.0",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.3.0/api",previous:{title:"Download",permalink:"/docs/1.3.0/api/class-download"},next:{title:"Keyboard",permalink:"/docs/1.3.0/api/class-keyboard"}},s=[{value:"fileChooser.element()",id:"filechooserelement",children:[]},{value:"fileChooser.isMultiple()",id:"filechooserismultiple",children:[]},{value:"fileChooser.page()",id:"filechooserpage",children:[]},{value:"fileChooser.setFiles(files, options)",id:"filechoosersetfilesfiles-options",children:[]}],p={toc:s};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/1.3.0/api/class-filechooser#class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.3.0/api/class-page#event-filechooser"},"'filechooser'")," event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"page.on('filechooser', async (fileChooser) => {\n  await fileChooser.setFiles('/tmp/myfile.pdf');\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-filechooser#filechooserelement"},"fileChooser.element()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-filechooser#filechooserismultiple"},"fileChooser.isMultiple()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-filechooser#filechooserpage"},"fileChooser.page()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-filechooser#filechoosersetfilesfiles-options"},"fileChooser.setFiles(files[, options])"))),(0,l.kt)("h2",{id:"filechooserelement"},"fileChooser.element()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-elementhandle#class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,l.kt)("p",null,"Returns input element associated with this file chooser."),(0,l.kt)("h2",{id:"filechooserismultiple"},"fileChooser.isMultiple()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),">")),(0,l.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,l.kt)("h2",{id:"filechooserpage"},"fileChooser.page()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-page#class-page",title:"Page"},"Page"),">")),(0,l.kt)("p",null,"Returns page this file chooser belongs to."),(0,l.kt)("h2",{id:"filechoosersetfilesfiles-options"},"fileChooser.setFiles(files","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"files")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),">|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">>",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File",title:"File"},"File")," name ",(0,l.kt)("strong",{parentName:"li"},"required")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mimeType")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"},"string"),"> ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File",title:"File"},"File")," type ",(0,l.kt)("strong",{parentName:"li"},"required")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buffer")," <",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.htmlapi.mdx#buffer_class_buffer",title:"Buffer"},"Buffer"),"> File content ",(0,l.kt)("strong",{parentName:"li"},"required")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"noWaitAfter")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"},"boolean"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"},"browserContext.setDefaultTimeout(timeout)")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.3.0/api/class-page#pagesetdefaulttimeouttimeout"},"page.setDefaultTimeout(timeout)")," methods."))),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,l.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,l.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),". For empty array, clears the selected files."))}c.isMDXComponent=!0}}]);