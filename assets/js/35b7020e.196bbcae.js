(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[10131],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return w}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),w=a,f=m["".concat(l,".").concat(w)]||m[w]||u[w]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69670:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"test-runners",title:"Test Runners"},s={unversionedId:"test-runners",id:"version-1.0.0/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite JavaScript test runner.",source:"@site/versioned_docs/version-1.0.0/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/docs/1.0.0/test-runners",version:"1.0.0",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.0.0/docs",previous:{title:"Continuous Integration",permalink:"/docs/1.0.0/ci"},next:{title:"Selector engines",permalink:"/docs/1.0.0/selectors"}},l=[{value:"Jest / Jasmine",id:"jest--jasmine",children:[]},{value:"AVA",id:"ava",children:[]},{value:"Mocha",id:"mocha",children:[]},{value:"IDE support",id:"ide-support",children:[]},{value:"Multiple Browsers",id:"multiple-browsers",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite JavaScript test runner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#jest--jasmine"},"Jest / Jasmine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ava"},"AVA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mocha"},"Mocha")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ide-support"},"IDE support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-browsers"},"Multiple Browsers"))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"jest--jasmine"},"Jest / Jasmine"),(0,o.kt)("p",null,"For Jest, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/playwright-community/jest-playwright"},"jest-playwright")," can be used. However for a light-weight solution, requiring playwright directly works fine. Jest shares it's syntax with Jasmine, so this applies to Jasmine as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst expect = require('expect');\nlet browser;\nlet page;\nbeforeAll(async () => {\n  browser = await chromium.launch();\n});\nafterAll(async () => {\n  await browser.close();\n});\nbeforeEach(async () => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  expect(await page.title()).toBe('Example Domain');\n});\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"ava"},"AVA"),(0,o.kt)("p",null,"Tests run concurrently in AVA, so a single page variable cannot be shared between tests. Instead, create new pages with a macro function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst test = require('ava').default;\nconst browserPromise = chromium.launch();\n\nasync function pageMacro(t, callback) {\n  const browser = await browserPromise;\n  const page = await browser.newPage();\n  try {\n    await callback(t, page);\n  } finally {\n    await page.close();\n  }\n}\n\ntest('should work', pageMacro, async (t, page) => {\n  await page.goto('https://www.example.com/');\n  t.is(await page.title(), 'Example Domain');\n});\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"mocha"},"Mocha"),(0,o.kt)("p",null,"Mocha looks very similar to the Jest/Jasmine setup, and functions in the same way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium} = require('playwright');\nconst assert = require('assert');\nlet browser;\nbefore(async() => {\n  browser = await chromium.launch();\n});\nafter(async () => {\n  await browser.close();\n});\nlet page;\nbeforeEach(async() => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  assert.equal(await page.title(), 'Example Domain');\n});\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"ide-support"},"IDE support"),(0,o.kt)("p",null,"If using TypeScript, add types to your variables like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let page: import('playwright').Page;\n")),(0,o.kt)("p",null,"If using JavaScript, you can still get nice autocompletions in VSCode by using JSDOC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('playwright').Page} **/\nlet page;\n")),(0,o.kt)("h2",{id:"multiple-browsers"},"Multiple Browsers"),(0,o.kt)("p",null,"These simple examples can be extended to support multiple browsers using an environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {chromium, webkit, firefox} = require('playwright');\nconst browserName = process.env.BROWSER || 'webkit';\nlet browser;\nbeforeAll(async() => {\n  browser = await {chromium, webkit, firefox}[browserName].launch();\n});\n")),(0,o.kt)("p",null,"Then set ",(0,o.kt)("inlineCode",{parentName:"p"},"BROWSER=firefox")," to run your tests with firefox, or any other browser."))}p.isMDXComponent=!0}}]);