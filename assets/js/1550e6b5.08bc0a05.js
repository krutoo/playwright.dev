"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return g}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"test-components",title:"Experimental: components"},m=void 0,h={unversionedId:"test-components",id:"version-1.23/test-components",title:"Experimental: components",description:"Playwright Test can now test your components.",source:"@site/versioned_docs/version-1.23/test-components.mdx",sourceDirName:".",slug:"/test-components",permalink:"/docs/test-components",tags:[],version:"1.23",frontMatter:{id:"test-components",title:"Experimental: components"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/docs/test-typescript"},next:{title:"Library",permalink:"/docs/library"}},f={},g=[{value:"Example",id:"example",level:2},{value:"How to get started",id:"how-to-get-started",level:2},{value:"Step 1: Install Playwright Test for components for your respective framework",id:"step-1-install-playwright-test-for-components-for-your-respective-framework",level:3},{value:"<code>playwright/index.html</code>",id:"playwrightindexhtml",level:4},{value:"<code>playwright/index.ts</code>",id:"playwrightindexts",level:4},{value:"Step 2. Create a test file <code>src/App.spec.tsx</code>",id:"step-2-create-a-test-file-srcappspectsx",level:3},{value:"Step 3. Run the tests",id:"step-3-run-the-tests",level:3},{value:"Further reading: configure reporting, browsers, tracing",id:"further-reading-configure-reporting-browsers-tracing",level:3},{value:"Under the hood",id:"under-the-hood",level:2},{value:"Known issues and limitations",id:"known-issues-and-limitations",level:2},{value:"Planned work",id:"planned-work",level:2}],w={toc:g};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},w),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright Test can now test your components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#example"}),"Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#how-to-get-started"}),"How to get started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#under-the-hood"}),"Under the hood")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#known-issues-and-limitations"}),"Known issues and limitations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#planned-work"}),"Planned work"))),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Here is what a typical component test looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"test('event should work', async ({ mount }) => {\n  let clicked = false;\n\n  // Mount a component. Returns locator pointing to the component.\n  const component = await mount(<Button title='Submit'\n    onClick={() => clicked = true}>\n  </Button>);\n\n  // As with any Playwright test, assert locator text.\n  await expect(component).toContainText('Submit');\n\n  // Perform locator click. This will trigger the event.\n  await component.click();\n\n  // Assert that respective events have been fired.\n  expect(clicked).toBeTruthy();\n});\n")),(0,r.kt)("h2",u({},{id:"how-to-get-started"}),"How to get started"),(0,r.kt)("p",null,"Adding Playwright Test to an existing React, Vue or Svelte project is easy. Below are the steps to enable Playwright Test for a sample create-react-app with TypeScript template."),(0,r.kt)("h3",u({},{id:"step-1-install-playwright-test-for-components-for-your-respective-framework"}),"Step 1: Install Playwright Test for components for your respective framework"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npm init playwright@latest -- --ct\n")),(0,r.kt)("p",null,"This step creates several files in your workspace:"),(0,r.kt)("h4",u({},{id:"playwrightindexhtml"}),(0,r.kt)("inlineCode",{parentName:"h4"},"playwright/index.html")),(0,r.kt)("p",null,"This file defines an html file that will be used to render components during testing. It must contain element with ",(0,r.kt)("inlineCode",{parentName:"p"},'id="root"'),", that's where components are mounted. It must also link the script called ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright/index.[tj]s"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<html lang="en">\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/playwright/index.ts"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("h4",u({},{id:"playwrightindexts"}),(0,r.kt)("inlineCode",{parentName:"h4"},"playwright/index.ts")),(0,r.kt)("p",null,"You can include stylesheets, apply theme and inject code into the page where component is mounted using this script. It can be either ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Apply theme here, add anything your component needs at runtime here.\n")),(0,r.kt)("h3",u({},{id:"step-2-create-a-test-file-srcappspectsx"}),"Step 2. Create a test file ",(0,r.kt)("inlineCode",{parentName:"h3"},"src/App.spec.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/experimental-ct-react';\nimport App from './App';\n\ntest.use({ viewport: { width: 500, height: 500 } });\n\ntest('should work', async ({ mount }) => {\n  const component = await mount(<App></App>);\n  await expect(component).toContainText('Learn React');\n});\n")),(0,r.kt)("h3",u({},{id:"step-3-run-the-tests"}),"Step 3. Run the tests"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npm run test-ct\n")),(0,r.kt)("h3",u({},{id:"further-reading-configure-reporting-browsers-tracing"}),"Further reading: configure reporting, browsers, tracing"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/test-configuration"}),"Playwright config")," for configuring your project."),(0,r.kt)("h2",u({},{id:"under-the-hood"}),"Under the hood"),(0,r.kt)("p",null,"When Playwright Test is used to test web components, tests run in Node.js, while components run in the real browser. This brings together the best of both worlds: components run in the real browser environment, real clicks are triggered, real layout is executed, visual regression is possible. At the same time, test can use all the powers of Node.js as well as all the Playwright Test features. As a result, the same parallel, parametrized tests with the same post-mortem Tracing story are available during component testing."),(0,r.kt)("p",null,"Here is how this is achieved:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once the tests are executed, Playwright creates a list of components that the tests need."),(0,r.kt)("li",{parentName:"ul"},"It then compiles a bundle that includes these components and serves it using a local static web server."),(0,r.kt)("li",{parentName:"ul"},"Upon the ",(0,r.kt)("inlineCode",{parentName:"li"},"mount")," call within the test, Playwright navigates to the facade page ",(0,r.kt)("inlineCode",{parentName:"li"},"/playwright/index.html")," of this bundle and tells it to render the component."),(0,r.kt)("li",{parentName:"ul"},"Events are marshalled back to the Node.js environment to allow verification.")),(0,r.kt)("p",null,"Playwright is using ",(0,r.kt)("a",u({parentName:"p"},{href:"https://vitejs.dev/"}),"Vite")," to create the components bundle and serve it."),(0,r.kt)("h2",u({},{id:"known-issues-and-limitations"}),"Known issues and limitations"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/14298"}),"this issue")," for the list of known issues and limitations."),(0,r.kt)("h2",u({},{id:"planned-work"}),"Planned work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Watch mode: watch mode is highly anticipated and should be relatively straightforward in implementation.")))}y.isMDXComponent=!0}}]);