(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[75311],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66410:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={id:"class-mouse",title:"Mouse"},l={unversionedId:"api/class-mouse",id:"version-1.6.0/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.6.0/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/docs/1.6.0/api/class-mouse",version:"1.6.0",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.6.0/api",previous:{title:"Keyboard",permalink:"/docs/1.6.0/api/class-keyboard"},next:{title:"Touchscreen",permalink:"/docs/1.6.0/api/class-touchscreen"}},p=[{value:"mouse.click(x, y, options)",id:"mouseclickx-y-options",children:[]},{value:"mouse.dblclick(x, y, options)",id:"mousedblclickx-y-options",children:[]},{value:"mouse.down(options)",id:"mousedownoptions",children:[]},{value:"mouse.move(x, y, options)",id:"mousemovex-y-options",children:[]},{value:"mouse.up(options)",id:"mouseupoptions",children:[]}],s={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-page#pagemouse"},(0,r.kt)("inlineCode",{parentName:"a"},"page.mouse")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-mouse#mouseclickx-y-options"},"mouse.click(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-mouse#mousedblclickx-y-options"},"mouse.dblclick(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-mouse#mousedownoptions"},"mouse.down([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-mouse#mousemovex-y-options"},"mouse.move(x, y[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-mouse#mouseupoptions"},"mouse.up([options])"))),(0,r.kt)("h2",{id:"mouseclickx-y-options"},"mouse.click(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"#mousemovex-y-options"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.move")),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.down"))," and ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.up")),"."),(0,r.kt)("h2",{id:"mousedblclickx-y-options"},"mouse.dblclick(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"#mousemovex-y-options"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.move")),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.down")),", ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.up")),", ",(0,r.kt)("a",{parentName:"p",href:"#mousedownoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.down"))," and ",(0,r.kt)("a",{parentName:"p",href:"#mouseupoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"mouse.up")),"."),(0,r.kt)("h2",{id:"mousedownoptions"},"mouse.down(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,r.kt)("h2",{id:"mousemovex-y-options"},"mouse.move(x, y","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"steps")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. Sends intermediate ",(0,r.kt)("inlineCode",{parentName:"li"},"mousemove")," events."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,r.kt)("h2",{id:"mouseupoptions"},"mouse.up(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clickCount")," <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"},"number"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,r.kt)("li",{parentName:"ul"},"returns: <",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),">")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}m.isMDXComponent=!0}}]);