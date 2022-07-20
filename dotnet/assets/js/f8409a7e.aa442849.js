"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(4939),l=n(9670),i=n(6010),o="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e};function b(e){var t,n,r;const{lazy:s,block:p,defaultValue:d,values:m,groupId:g,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.lx)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(r=null!=d?d:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.UB)(),[x,N]=(0,a.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=g){const e=k[g];null!=e&&e!==x&&y.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==x&&(O(t),N(a),null!=g&&T(g,a))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;t=P[n]||P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;t=P[n]||P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>P.push(e),onKeyDown:j,onFocus:E,onClick:E},n),l={className:(0,i.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":x===e})},u(r,c(l))),null!=t?t:e);var r,l}))),s?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function f(e){const t=(0,r.Z)();return a.createElement(b,h({key:String(t)},e))}},6379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return y}});var a=n(3905),r=n(3824),l=n(3811),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const g={id:"intro",title:"Installation"},h=void 0,b={unversionedId:"intro",id:"intro",title:"Installation",description:"Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/next/intro",tags:[],version:"current",frontMatter:{id:"intro",title:"Installation"},sidebar:"docs",next:{title:"Writing Tests",permalink:"/dotnet/docs/next/writing-tests"}},f={},y=[{value:"Add Example Tests",id:"add-example-tests",level:2},{value:"Running the Example Tests",id:"running-the-example-tests",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],v={toc:y};function w(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),d),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation."),(0,a.kt)("p",null,"You can choose to use ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/test-runners#nunit"}),"NUnit base classes")," or ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/test-runners#nunit"}),"MSTest base classes")," that Playwright provides to write end-to-end tests. These classes support running tests on multiple browser engines, parallelizing tests, adjusting launch/context options and getting a ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/api/class-page",title:"Page"}),"Page"),"/",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," instance per test out of the box. Alternatively you can use the ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/library"}),"library")," to manually write the testing infrastructure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start by creating a new project with ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet new"),". This will create the ",(0,a.kt)("inlineCode",{parentName:"li"},"PlaywrightTests")," directory which includes a ",(0,a.kt)("inlineCode",{parentName:"li"},"UnitTest1.cs")," file:")),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet new mstest -n PlaywrightTests\ncd PlaywrightTests\n")))),(0,a.kt)("ol",m({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the necessary Playwright dependencies:")),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet add package Microsoft.Playwright.NUnit\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet add package Microsoft.Playwright.MSTest\n")))),(0,a.kt)("ol",m({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Build the project so the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.ps1")," is available inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"bin")," directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet build\n")),(0,a.kt)("ol",m({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"Install required browsers by replacing ",(0,a.kt)("inlineCode",{parentName:"li"},"netX")," with the actual output folder name, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"net6.0"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,a.kt)("h2",m({},{id:"add-example-tests"}),"Add Example Tests"),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnitTest1.cs")," file with the code below to create an example end-to-end test:"),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-csharp"}),'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\npublic class Tests : PageTest\n{\n    [Test]\n    async public Task HomepageHasPlaywrightInTitleAndGetStartedLinkLinkingtoTheIntroPage()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n\n        // create a locator\n        var getStarted = Page.Locator("text=Get Started");\n\n        // Expect an attribute "to be strictly equal" to the value.\n        await Expect(getStarted).ToHaveAttributeAsync("href", "/docs/intro");\n\n        // Click the get started link.\n        await getStarted.ClickAsync();\n\n        // Expects the URL to contain intro.\n        await Expect(Page).ToHaveURLAsync(new Regex(".*intro"));\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\npublic class UnitTest1 : PageTest\n{\n    [TestMethod]\n    async public Task HomepageHasPlaywrightInTitleAndGetStartedLinkLinkingtoTheIntroPage()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n\n        // create a locator\n        var getStarted = Page.Locator("text=Get Started");\n\n        // Expect an attribute "to be strictly equal" to the value.\n        await Expect(getStarted).ToHaveAttributeAsync("href", "/docs/intro");\n\n        // Click the get started link.\n        await getStarted.ClickAsync();\n\n        // Expects the URL to contain intro.\n        await Expect(Page).ToHaveURLAsync(new Regex(".*intro"));\n    }\n}\n')))),(0,a.kt)("h2",m({},{id:"running-the-example-tests"}),"Running the Example Tests"),(0,a.kt)("p",null,"By default tests will be run on Chromium. This can be configured via the ",(0,a.kt)("inlineCode",{parentName:"p"},"BROWSER")," environment variable, or by adjusting the ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/test-runners"}),"launch configuration options"),". Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal."),(0,a.kt)(r.Z,{defaultValue:"nunit",values:[{label:"NUnit",value:"nunit"},{label:"MSTest",value:"mstest"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nunit",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet test -- NUnit.NumberOfTestWorkers=5\n"))),(0,a.kt)(l.Z,{value:"mstest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"dotnet test -- MSTest.Parallelize.Workers=5\n")))),(0,a.kt)("p",null,"See our doc on ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/next/test-runners"}),"Test Runners")," to learn more about running tests in headed mode, running multiple tests, running specific configurations etc."),(0,a.kt)("h2",m({},{id:"whats-next"}),"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/writing-tests"}),"Write tests using web first assertions, page fixtures and locators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/running-tests"}),"Run single tests, multiple tests, headed mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/test-runners"}),"Learn more about the NUnit and MSTest base classes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/debug"}),"Debug tests with the Playwright Debugger")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/codegen"}),"Generate tests with Codegen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/trace-viewer"}),"See a trace of your tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/next/library"}),"Using Playwright as library"))))}w.isMDXComponent=!0}}]);