(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[94391],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,k=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(k,i(i({ref:r},u),{},{components:t})):n.createElement(k,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,r,t){"use strict";var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},41395:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(67294),o=t(80944),a=t(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var r=e.lazy,t=e.block,u=e.defaultValue,f=e.values,p=e.groupId,d=e.className,k=(0,o.Z)(),m=k.tabGroupChoices,v=k.setTabGroupChoices,w=(0,n.useState)(u),b=w[0],h=w[1],g=n.Children.toArray(e.children),y=[];if(null!=p){var N=m[p];null!=N&&N!==b&&f.some((function(e){return e.value===N}))&&h(N)}var I=function(e){var r=e.currentTarget,t=y.indexOf(r),n=f[t].value;h(n),null!=p&&(v(p,n),setTimeout((function(){var e,t,n,o,a,i,s,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&a<=c&&o<=s&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},x=function(e){var r,t;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case s:var o=y.indexOf(e.target)-1;t=y[o]||y[y.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},d)},f.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:b===r?0:-1,"aria-selected":b===r,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":b===r}),key:r,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:I,onClick:I},t)}))),r?(0,n.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==b})}))))}},79443:function(e,r,t){"use strict";var n=(0,t(67294).createContext)(void 0);r.Z=n},80944:function(e,r,t){"use strict";var n=t(67294),o=t(79443);r.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},81290:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=t(41395),l=t(58215),s={id:"class-workerinfo",title:"WorkerInfo"},c={unversionedId:"api/class-workerinfo",id:"version-1.13.0/api/class-workerinfo",isDocsHomePage:!1,title:"WorkerInfo",description:"WorkerInfo contains information about the worker that is running tests. It is available to test.beforeAll(hookFunction) and test.afterAll(hookFunction) hooks and worker-scoped fixtures.",source:"@site/versioned_docs/version-1.13.0/api/class-workerinfo.mdx",sourceDirName:"api",slug:"/api/class-workerinfo",permalink:"/docs/api/class-workerinfo",version:"1.13.0",frontMatter:{id:"class-workerinfo",title:"WorkerInfo"},sidebar:"version-1.13.0/api",previous:{title:"Worker",permalink:"/docs/api/class-worker"},next:{title:"Location",permalink:"/docs/api/class-location"}},u=[{value:"workerInfo.config",id:"worker-info-config",children:[]},{value:"workerInfo.project",id:"worker-info-project",children:[]},{value:"workerInfo.workerIndex",id:"worker-info-worker-index",children:[]}],f={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WorkerInfo")," contains information about the worker that is running tests. It is available to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-after-all"},"test.afterAll(hookFunction)")," hooks and worker-scoped fixtures."),(0,a.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n"))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-config"},"workerInfo.config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-project"},"workerInfo.project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-workerinfo#worker-info-worker-index"},"workerInfo.workerIndex"))),(0,a.kt)("h2",{id:"worker-info-config"},"workerInfo.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-testconfig",title:"TestConfig"},"TestConfig"),">")),(0,a.kt)("p",null,"Processed configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-project"},"workerInfo.project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/api/class-testproject",title:"TestProject"},"TestProject"),">")),(0,a.kt)("p",null,"Processed project configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-worker-index"},"workerInfo.workerIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,a.kt)("p",null,"The unique index of the worker process that is running the test. Also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),". Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelism and sharding")," with Playwright Test."))}p.isMDXComponent=!0},86010:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);