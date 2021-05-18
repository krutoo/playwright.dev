(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[75749],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?o.createElement(k,i(i({ref:t},m),{},{components:a})):o.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16811:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=a(22122),n=a(19756),r=(a(67294),a(3905)),i={id:"class-mouse",title:"Mouse"},l={unversionedId:"api/class-mouse",id:"version-1.7.0/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.7.0/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/docs/1.7.0/api/class-mouse",version:"1.7.0",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.7.0/api",previous:{title:"Logger",permalink:"/docs/1.7.0/api/class-logger"},next:{title:"Page",permalink:"/docs/1.7.0/api/class-page"}},p=[{value:"mouse.click(x, y, options)",id:"mouseclickx-y-options",children:[]},{value:"mouse.dblclick(x, y, options)",id:"mousedblclickx-y-options",children:[]},{value:"mouse.down(options)",id:"mousedownoptions",children:[]},{value:"mouse.move(x, y, options)",id:"mousemovex-y-options",children:[]},{value:"mouse.up(options)",id:"mouseupoptions",children:[]}],s={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.7.0/api/class-page#pagemouse"},"page.mouse"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.7.0/api/class-mouse#mouseclickx-y-options"},"mouse.click(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.7.0/api/class-mouse#mousedblclickx-y-options"},"mouse.dblclick(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.7.0/api/class-mouse#mousedownoptions"},"mouse.down([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.7.0/api/class-mouse#mousemovex-y-options"},"mouse.move(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.7.0/api/class-mouse#mouseupoptions"},"mouse.up([options])"))),(0,r.kt)("h2",{id:"mouseclickx-y-options"},"mouse.click(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"#mousemovex-y-options"},"mouse.move(x, y[, options])"),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},"mouse.down([options])"),", ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},"mouse.up([options])"),"."),(0,r.kt)("h2",{id:"mousedblclickx-y-options"},"mouse.dblclick(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"#mousemovex-y-options"},"mouse.move(x, y[, options])"),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},"mouse.down([options])"),", ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},"mouse.up([options])"),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},"mouse.down([options])")," and ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},"mouse.up([options])"),"."),(0,r.kt)("h2",{id:"mousedownoptions"},"mouse.down(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,r.kt)("h2",{id:"mousemovex-y-options"},"mouse.move(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"steps")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. Sends intermediate ",(0,r.kt)("inlineCode",{parentName:"li"},"mousemove")," events."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,r.kt)("h2",{id:"mouseupoptions"},"mouse.up(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}m.isMDXComponent=!0}}]);