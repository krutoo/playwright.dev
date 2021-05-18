(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[65834],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},21583:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=(n(41395),n(58215),{id:"cli",title:"Command Line Interface"}),l={unversionedId:"cli",id:"version-1.9.0/cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Playwright comes with the command line tools that run via npx or as a part of the npm scripts.",source:"@site/versioned_docs/version-1.9.0/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/docs/1.9.0/cli",version:"1.9.0",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"version-1.9.0/docs",previous:{title:"Continuous Integration",permalink:"/docs/1.9.0/ci"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright comes with the command line tools that run via ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," or as a part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," scripts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#known-limitations"},"Known limitations"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx playwright --help\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# Running from `package.json` script\n{\n  "scripts": {\n    "help": "playwright --help"\n  }\n}\n')),(0,o.kt)("h2",{id:"generate-code"},"Generate code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx playwright codegen wikipedia.org\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,o.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx playwright --save-storage=auth.json codegen\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,o.kt)("p",null,"Run with ",(0,o.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx playwright --load-storage=auth.json open my.web.app\n$ npx playwright --load-storage=auth.json codegen my.web.app\n# Perform actions in authenticated state.\n")),(0,o.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,o.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/api/class-browsercontext#browsercontextrouteurl-handler"},"browserContext.route(url, handler)"),"), it is possible to call ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/api/class-page#pagepause"},"page.pause()")," that will open a separate window with codegen controls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  // Make sure to run headed.\n  const browser = await chromium.launch({ headless: false });\n\n  // Setup context however you like.\n  const context = await browser.newContext({ /* pass any options */ });\n  await context.route('**/*', route => route.continue());\n\n  // Pause the page, and start recording manually.\n  const page = await context.newPage();\n  await page.pause();\n})();\n")),(0,o.kt)("h2",{id:"open-pages"},"Open pages"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Open page in Chromium\n$ npx playwright open example.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Open page in WebKit\n$ npx playwright wk example.com\n")),(0,o.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Emulate iPhone 11.\n$ npx playwright --device="iPhone 11" open wikipedia.org\n')),(0,o.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Emulate screen size and color scheme.\n$ npx playwright --viewport-size=800,600 --color-scheme=dark open twitter.com\n")),(0,o.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\n$ npx playwright --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" open maps.google.com\n')),(0,o.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,o.kt)("p",null,"During ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,o.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,o.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n")),(0,o.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> playwright.$$('li >> text=John')\n\n> [<li>, <li>, <li>, <li>]\n")),(0,o.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,o.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> playwright.inspect('text=Log in')\n")),(0,o.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,o.kt)("p",null,"Generates selector for the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n')),(0,o.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# See command help\n$ npx playwright screenshot --help\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\n$ npx playwright \\\n  --device=\"iPhone 11\" \\\n  --color-scheme=dark \\\n  screenshot \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Capture a full page screenshot\n$ npx playwright screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,o.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,o.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# See command help\n$ npx playwright pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"Opening WebKit Web Inspector will disconnect Playwright from the browser. In such cases, code generation will stop."))}c.isMDXComponent=!0}}]);