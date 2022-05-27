"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[85901],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||s;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),n=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&l(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(67294),n=a(54939),s=a(39670),o=a(86010),i="tabItem_LplD",l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(u)for(var a of u(t))f.call(t,a)&&h(e,a,t[a]);return e};function g(e){var t,a,n;const{lazy:l,block:u,defaultValue:m,values:f,groupId:h,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,s.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:y}=(0,s.UB)(),[x,w]=(0,r.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=h){const e=j[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=S.indexOf(t),r=b[a].value;r!==x&&(P(t),w(r),null!=h&&y(h,r))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]||S[S.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},b.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=d({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>S.push(e),onKeyDown:O,onFocus:T,onClick:T},a),s={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(n,c(s))),null!=t?t:e);var n,s}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,n.Z)();return r.createElement(g,d({key:String(t)},e))}},63886:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return b}});var r=a(3905),n=a(73824),s=a(73811),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const h={id:"class-testproject",title:"TestProject"},d=void 0,g={unversionedId:"api/class-testproject",id:"api/class-testproject",title:"TestProject",description:"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers.",source:"@site/docs/api/class-testproject.mdx",sourceDirName:"api",slug:"/api/class-testproject",permalink:"/docs/next/api/class-testproject",tags:[],version:"current",frontMatter:{id:"class-testproject",title:"TestProject"},sidebar:"api",previous:{title:"TestOptions",permalink:"/docs/next/api/class-testoptions"},next:{title:"TimeoutError",permalink:"/docs/next/api/class-timeouterror"}},k={},b=[{value:"testProject.expect",id:"test-project-expect",level:2},{value:"testProject.fullyParallel",id:"test-project-fully-parallel",level:2},{value:"testProject.grep",id:"test-project-grep",level:2},{value:"testProject.grepInvert",id:"test-project-grep-invert",level:2},{value:"testProject.metadata",id:"test-project-metadata",level:2},{value:"testProject.name",id:"test-project-name",level:2},{value:"testProject.outputDir",id:"test-project-output-dir",level:2},{value:"testProject.repeatEach",id:"test-project-repeat-each",level:2},{value:"testProject.retries",id:"test-project-retries",level:2},{value:"testProject.snapshotDir",id:"test-project-snapshot-dir",level:2},{value:"testProject.testDir",id:"test-project-test-dir",level:2},{value:"testProject.testIgnore",id:"test-project-test-ignore",level:2},{value:"testProject.testMatch",id:"test-project-test-match",level:2},{value:"testProject.timeout",id:"test-project-timeout",level:2},{value:"testProject.use",id:"test-project-use",level:2}],v={toc:b};function N(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=f(f({},v),m),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running tests in multiple configurations. For example, consider running tests against multiple browsers."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TestProject")," encapsulates configuration specific to a single project. Projects are configured in ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-projects"}),"testConfig.projects")," specified in the ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration file"),". Note that all properties of ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testproject",title:"TestProject"}),"TestProject")," are available in the top-level ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig",title:"TestConfig"}),"TestConfig"),", in which case they are shared between all projects."),(0,r.kt)("p",null,"Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Options shared for all projects.\n  timeout: 30000,\n  use: {\n    ignoreHTTPSErrors: true,\n  },\n\n  // Options specific to each project.\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        viewport: { width: 1280, height: 720 },\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 1280, height: 720 },\n      }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-expect"}),"testProject.expect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-fully-parallel"}),"testProject.fullyParallel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-grep"}),"testProject.grep")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-grep-invert"}),"testProject.grepInvert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-metadata"}),"testProject.metadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-name"}),"testProject.name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-output-dir"}),"testProject.outputDir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-repeat-each"}),"testProject.repeatEach")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-retries"}),"testProject.retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-snapshot-dir"}),"testProject.snapshotDir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-test-dir"}),"testProject.testDir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-test-ignore"}),"testProject.testIgnore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-test-match"}),"testProject.testMatch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-timeout"}),"testProject.timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-use"}),"testProject.use"))),(0,r.kt)("h2",f({},{id:"test-project-expect"}),"testProject.expect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Default timeout for async expect matchers in milliseconds, defaults to 5000ms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toHaveScreenshot?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Configuration for the ",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/test-assertions#page-assertions-to-have-screenshot-1"}),"expect(page).toHaveScreenshot(name[, options])")," method.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threshold?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable perceived color difference in the ",(0,r.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/YIQ"}),"YIQ color space")," between the same pixel in compared images, between zero (strict) and one (lax). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxDiffPixels?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable amount of pixels that could be different, unset by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxDiffPixelRatio?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable ratio of pixels that are different to the total amount of pixels, between ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," , unset by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"animations?")," ","<",'"allow"|"disabled"',">"," See ",(0,r.kt)("inlineCode",{parentName:"li"},"animations")," in ",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-page#page-screenshot"}),"page.screenshot([options])"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"disabled"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"caret?")," ","<",'"hide"|"initial"',">"," See ",(0,r.kt)("inlineCode",{parentName:"li"},"caret")," in ",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-page#page-screenshot"}),"page.screenshot([options])"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"hide"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale?")," ","<",'"css"|"device"',">"," See ",(0,r.kt)("inlineCode",{parentName:"li"},"scale")," in ",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-page#page-screenshot"}),"page.screenshot([options])"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},'"css"'),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toMatchSnapshot?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Configuration for the ",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/test-assertions#screenshot-assertions-to-match-snapshot-1"}),"expect(screenshot).toMatchSnapshot(name[, options])")," method.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threshold?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable perceived color difference in the ",(0,r.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/YIQ"}),"YIQ color space")," between the same pixel in compared images, between zero (strict) and one (lax). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0.2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxDiffPixels?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable amount of pixels that could be different, unset by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxDiffPixelRatio?")," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," an acceptable ratio of pixels that are different to the total amount of pixels, between ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," , unset by default.")))))),(0,r.kt)("p",null,"Configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," assertion library."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-expect"}),"testConfig.expect")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-fully-parallel"}),"testProject.fullyParallel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),(0,r.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, ",(0,r.kt)("strong",{parentName:"p"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,r.kt)("p",null,"You can configure entire test project to concurrently run all tests in all files using this option."),(0,r.kt)("h2",f({},{id:"test-project-grep"}),"testProject.grep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">")),(0,r.kt)("p",null,"Filter to only run tests with a title matching one of the patterns. For example, passing ",(0,r.kt)("inlineCode",{parentName:"p"},"grep: /cart/"),' should only run tests with "cart" in the title. Also available globally and in the ',(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-cli"}),"command line")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," option."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"grep")," option is also useful for ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-annotations#tag-tests"}),"tagging tests"),"."),(0,r.kt)("h2",f({},{id:"test-project-grep-invert"}),"testProject.grepInvert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">")),(0,r.kt)("p",null,"Filter to only run tests with a title ",(0,r.kt)("strong",{parentName:"p"},"not")," matching one of the patterns. This is the opposite of ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testproject#test-project-grep"}),"testProject.grep"),". Also available globally and in the ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-cli"}),"command line")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--grep-invert")," option."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"grepInvert")," option is also useful for ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-annotations#tag-tests"}),"tagging tests"),"."),(0,r.kt)("h2",f({},{id:"test-project-metadata"}),"testProject.metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<","[Metadata]",">")),(0,r.kt)("p",null,"Metadata that will be put directly to the test report serialized as JSON."),(0,r.kt)("h2",f({},{id:"test-project-name"}),"testProject.name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,r.kt)("p",null,"Project name is visible in the report and during test execution."),(0,r.kt)("h2",f({},{id:"test-project-output-dir"}),"testProject.outputDir"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,r.kt)("p",null,"The output directory for files created during test execution. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"<package.json-directory>/test-results"),"."),(0,r.kt)("p",null,"This directory is cleaned at the start. When running a test, a unique subdirectory inside the ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testproject#test-project-output-dir"}),"testProject.outputDir")," is created, guaranteeing that test running in parallel do not conflict. This directory can be accessed by ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-output-dir"}),"testInfo.outputDir")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-output-path"}),"testInfo.outputPath(...pathSegments)"),"."),(0,r.kt)("p",null,"Here is an example that uses ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-output-path"}),"testInfo.outputPath(...pathSegments)")," to create a temporary file."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\nimport fs from 'fs';\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\nconst fs = require('fs');\n\ntest('example test', async ({}, testInfo) => {\n  const file = testInfo.outputPath('temporary-file.txt');\n  await fs.promises.writeFile(file, 'Put some data to the file', 'utf8');\n});\n")))),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-output-dir"}),"testConfig.outputDir")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-repeat-each"}),"testProject.repeatEach"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,r.kt)("p",null,"The number of times to repeat each test, useful for debugging flaky tests."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-repeat-each"}),"testConfig.repeatEach")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-retries"}),"testProject.retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,r.kt)("p",null,"The maximum number of retry attempts given to failed tests. Learn more about ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-retries#retries"}),"test retries"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-retries"}),"testConfig.retries")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-snapshot-dir"}),"testProject.snapshotDir"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,r.kt)("p",null,"The base directory, relative to the config file, for snapshot files created with ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot"),". Defaults to ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testproject#test-project-test-dir"}),"testProject.testDir"),"."),(0,r.kt)("p",null,"The directory for each test can be accessed by ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-snapshot-dir"}),"testInfo.snapshotDir")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-snapshot-path"}),"testInfo.snapshotPath(...pathSegments)"),"."),(0,r.kt)("p",null,"This path will serve as the base directory for each test file snapshot directory. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshotDir")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"'snapshots'"),", the ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-snapshot-dir"}),"testInfo.snapshotDir")," would resolve to ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots/a.spec.js-snapshots"),"."),(0,r.kt)("h2",f({},{id:"test-project-test-dir"}),"testProject.testDir"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,r.kt)("p",null,"Directory that will be recursively scanned for test files. Defaults to the directory of the configuration file."),(0,r.kt)("p",null,"Each project can use a different directory. Here is an example that runs smoke tests in three browsers and all other tests in stable Chrome browser."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Smoke Chromium',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'chromium',\n      }\n    },\n    {\n      name: 'Smoke WebKit',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'webkit',\n      }\n    },\n    {\n      name: 'Smoke Firefox',\n      testDir: './smoke-tests',\n      use: {\n        browserName: 'firefox',\n      }\n    },\n    {\n      name: 'Chrome Stable',\n      testDir: './',\n      use: {\n        browserName: 'chromium',\n        channel: 'chrome',\n      }\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-test-dir"}),"testConfig.testDir")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-test-ignore"}),"testProject.testIgnore"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">")),(0,r.kt)("p",null,"Files matching one of these patterns are not executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"'**/test-assets/**'")," will ignore any files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test-assets")," directory."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-test-ignore"}),"testConfig.testIgnore")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-test-match"}),"testProject.testMatch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"}),"RegExp"),">",">")),(0,r.kt)("p",null,"Only the files matching one of these patterns are executed as test files. Matching is performed against the absolute file path. Strings are treated as glob patterns."),(0,r.kt)("p",null,"By default, Playwright Test looks for files matching ",(0,r.kt)("inlineCode",{parentName:"p"},".*(test|spec)\\.(js|ts|mjs)"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-test-match"}),"testConfig.testMatch")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-timeout"}),"testProject.timeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,r.kt)("p",null,"Timeout for each test in milliseconds. Defaults to 30 seconds."),(0,r.kt)("p",null,"This is a base timeout for all tests. In addition, each test can configure its own timeout with ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-set-timeout"}),"test.setTimeout(timeout)"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-timeout"}),"testConfig.timeout")," to change this option for all projects."),(0,r.kt)("h2",f({},{id:"test-project-use"}),"testProject.use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",f({parentName:"li"},{href:"/docs/next/api/class-fixtures",title:"Fixtures"}),"Fixtures"),">")),(0,r.kt)("p",null,"Options for all tests in this project, for example ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-browser-name"}),"testOptions.browserName"),". Learn more about ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration")," and see ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions",title:"TestOptions"}),"available options"),"."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        browserName: 'chromium',\n      },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-use"}),"testConfig.use")," to change this option for all projects."))}N.isMDXComponent=!0}}]);