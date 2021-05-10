(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(392)),c=(r(395),r(396),{id:"class-timeouterror",title:"TimeoutError"}),i={unversionedId:"api/class-timeouterror",id:"api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/docs/api/class-timeouterror.mdx",slug:"/api/class-timeouterror",permalink:"/python/docs/next/api/class-timeouterror",version:"current",sidebar:"api",previous:{title:"Selectors",permalink:"/python/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/next/api/class-touchscreen"}},u=[],s={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-error",title:"Error"}),"Error"))),Object(o.b)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)"),"."))}l.isMDXComponent=!0},391:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},392:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},393:function(e,t,r){"use strict";var n=r(0),a=r(394);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},395:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(393),c=r(391),i=r(53),u=r.n(i),s=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=Object(o.a)(),d=b.tabGroupChoices,y=b.setTabGroupChoices,v=Object(n.useState)(i),O=v[0],h=v[1],j=n.Children.toArray(e.children);if(null!=f){var g=d[f];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&h(g)}var w=function(e){h(e),null!=f&&y(f,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},396:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}}}]);