(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{269:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(d,c(c({ref:t},i),{},{components:a})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},271:function(e,t,a){"use strict";var n=a(0),r=a(272);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(271),s=a(269),c=a(53),l=a.n(c),i=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,j=d.setTabGroupChoices,g=Object(n.useState)(c),O=g[0],v=g[1],h=n.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&v(y)}var C=function(e){v(e),null!=u&&j(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},274:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(270)),s=(a(273),a(274),{id:"class-consolemessage",title:"ConsoleMessage"}),c={unversionedId:"api/class-consolemessage",id:"api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [Page.onConsoleMessage(handler) event.",source:"@site/docs/api/class-consolemessage.mdx",slug:"/api/class-consolemessage",permalink:"/java/docs/next/api/class-consolemessage",version:"current",sidebar:"api",previous:{title:"BrowserType",permalink:"/java/docs/next/api/class-browsertype"},next:{title:"Dialog",permalink:"/java/docs/next/api/class-dialog"}},l=[{value:"ConsoleMessage.args()",id:"consolemessageargs",children:[]},{value:"ConsoleMessage.location()",id:"consolemessagelocation",children:[]},{value:"ConsoleMessage.text()",id:"consolemessagetext",children:[]},{value:"ConsoleMessage.type()",id:"consolemessagetype",children:[]}],i={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-page#pageonconsolemessagehandler"}),"Page.onConsoleMessage(handler)")," event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-consolemessage#consolemessageargs"}),"ConsoleMessage.args()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-consolemessage#consolemessagelocation"}),"ConsoleMessage.location()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-consolemessage#consolemessagetext"}),"ConsoleMessage.text()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-consolemessage#consolemessagetype"}),"ConsoleMessage.type()"))),Object(o.b)("h2",{id:"consolemessageargs"},"ConsoleMessage.args()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"List of arguments passed to a ",Object(o.b)("inlineCode",{parentName:"p"},"console")," function call. See also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-page#pageonconsolemessagehandler"}),"Page.onConsoleMessage(handler)"),"."),Object(o.b)("h2",{id:"consolemessagelocation"},"ConsoleMessage.location()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(o.b)("p",null,"URL of the resource followed by 0-based line and column numbers in the resource formatted as ",Object(o.b)("inlineCode",{parentName:"p"},"URL:line:column"),"."),Object(o.b)("h2",{id:"consolemessagetext"},"ConsoleMessage.text()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(o.b)("p",null,"The text of the console message."),Object(o.b)("h2",{id:"consolemessagetype"},"ConsoleMessage.type()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(o.b)("p",null,"One of the following values: ",Object(o.b)("inlineCode",{parentName:"p"},"'log'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'debug'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'info'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'error'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'warning'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'dir'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'dirxml'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'table'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'trace'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'clear'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'startGroup'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'endGroup'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'assert'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'profile'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'count'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}p.isMDXComponent=!0}}]);