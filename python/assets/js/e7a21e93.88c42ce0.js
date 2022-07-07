"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5835],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,v=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(v,l(l({ref:t},p),{},{components:r})):a.createElement(v,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return b}});var a=r(7294),n=r(4939),o=r(9670),l=r(6010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&v(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&v(e,r,t[r]);return e};function m(e){var t,r,n;const{lazy:s,block:u,defaultValue:d,values:h,groupId:v,className:m}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=h?h:b.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.lx)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:null!=(n=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.UB)(),[N,j]=(0,a.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=v){const e=w[v];null!=e&&e!==N&&y.some((t=>t.value===e))&&j(e)}const x=e=>{const t=e.currentTarget,r=P.indexOf(t),a=y[r].value;a!==N&&(T(t),j(a),null!=v&&O(v,a))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break}case"ArrowLeft":{const r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},m)},y.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=f({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>P.push(e),onKeyDown:E,onFocus:x,onClick:x},r),o={className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":N===e})},c(n,p(o))),null!=t?t:e);var n,o}))),s?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,n.Z)();return a.createElement(m,f({key:String(t)},e))}},6628:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return v},metadata:function(){return m},toc:function(){return y}});var a=r(3905),n=r(3824),o=r(3811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&d(e,r,t[r]);return e};const v={id:"class-video",title:"Video"},f=void 0,m={unversionedId:"api/class-video",id:"version-1.22/api/class-video",title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.22/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/python/docs/1.22/api/class-video",tags:[],version:"1.22",frontMatter:{id:"class-video",title:"Video"},sidebar:"api",previous:{title:"Tracing",permalink:"/python/docs/1.22/api/class-tracing"},next:{title:"WebSocket",permalink:"/python/docs/1.22/api/class-websocket"}},b={},y=[{value:"video.delete()",id:"video-delete",level:2},{value:"video.path()",id:"video-path",level:2},{value:"video.save_as(path)",id:"video-save-as",level:2}],k={toc:y};function g(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},k),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"When browser context is created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),"print(page.video.path())\n"))),(0,a.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-py"}),"print(await page.video.path())\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/1.22/api/class-video#video-delete"}),"video.delete()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/1.22/api/class-video#video-path"}),"video.path()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/python/docs/1.22/api/class-video#video-save-as"}),"video.save_as(path)"))),(0,a.kt)("h2",h({},{id:"video-delete"}),"video.delete()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,a.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,a.kt)("h2",h({},{id:"video-path"}),"video.path()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),">",(0,a.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,a.kt)("h2",h({},{id:"video-save-as"}),"video.save_as(path)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,a.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," Path where the video should be saved.",(0,a.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,a.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}g.isMDXComponent=!0}}]);