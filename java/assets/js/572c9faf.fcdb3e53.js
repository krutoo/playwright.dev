"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6897],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,b=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(b,c(c({ref:t},p),{},{components:r})):a.createElement(b,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1553:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return d}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e};const m={id:"class-websocketframe",title:"WebSocketFrame"},f=void 0,b={unversionedId:"api/class-websocketframe",id:"version-1.21/api/class-websocketframe",title:"WebSocketFrame",description:"The WebSocketFrame] class represents frames sent over [WebSocket] connections in the page. Frame payload is returned by either [WebSocketFrame.text() or WebSocketFrame.binary() method depending on the its type.",source:"@site/versioned_docs/version-1.21/api/class-websocketframe.mdx",sourceDirName:"api",slug:"/api/class-websocketframe",permalink:"/java/docs/1.21/api/class-websocketframe",tags:[],version:"1.21",frontMatter:{id:"class-websocketframe",title:"WebSocketFrame"},sidebar:"api",previous:{title:"WebSocket",permalink:"/java/docs/1.21/api/class-websocket"},next:{title:"Worker",permalink:"/java/docs/1.21/api/class-worker"}},k={},d=[{value:"WebSocketFrame.binary()",id:"web-socket-frame-binary",level:2},{value:"WebSocketFrame.text()",id:"web-socket-frame-text",level:2}],y={toc:d};function v(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),p),o(t,c({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," class represents frames sent over ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/api/class-websocket",title:"WebSocket"}),"WebSocket")," connections in the page. Frame payload is returned by either ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/api/class-websocketframe#web-socket-frame-text"}),"WebSocketFrame.text()")," or ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/api/class-websocketframe#web-socket-frame-binary"}),"WebSocketFrame.binary()")," method depending on the its type."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/1.21/api/class-websocketframe#web-socket-frame-binary"}),"WebSocketFrame.binary()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/1.21/api/class-websocketframe#web-socket-frame-text"}),"WebSocketFrame.text()"))),(0,a.kt)("h2",u({},{id:"web-socket-frame-binary"}),"WebSocketFrame.binary()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-binary-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">",(0,a.kt)("a",{href:"#web-socket-frame-binary-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns binary payload."),(0,a.kt)("h2",u({},{id:"web-socket-frame-text"}),"WebSocketFrame.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-text-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,a.kt)("a",{href:"#web-socket-frame-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns text payload."))}v.isMDXComponent=!0}}]);