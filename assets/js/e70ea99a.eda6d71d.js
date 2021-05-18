(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[59336],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";a(67294)},41395:function(e,t,a){"use strict";a(67294),a(80944)},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},48766:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return p}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=(a(41395),a(58215),{id:"assertions",title:"Assertions"}),s={unversionedId:"assertions",id:"version-1.9.0/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.9.0/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/docs/1.9.0/assertions",version:"1.9.0",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.9.0/docs",previous:{title:"Auto-waiting",permalink:"/docs/1.9.0/actionability"},next:{title:"Authentication",permalink:"/docs/1.9.0/auth"}},o=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],c={toc:o};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,l.kt)("h2",{id:"text-content"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pagetextcontentselector-options"},"page.textContent(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandletextcontent"},"elementHandle.textContent()"))),(0,l.kt)("h2",{id:"inner-text"},"Inner text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageinnertextselector-options"},"page.innerText(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleinnertext"},"elementHandle.innerText()"))),(0,l.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),(0,l.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageischeckedselector-options"},"page.isChecked(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleischecked"},"elementHandle.isChecked()"))),(0,l.kt)("h2",{id:"js-expression"},"JS expression"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const content = await page.$eval('nav:first-child', e => e.textContent);\nexpect(content).toBe('home');\n")),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageevalselector-pagefunction-arg"},"page.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-jshandle#jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction[, arg])"))),(0,l.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageinnerhtmlselector-options"},"page.innerHTML(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleinnerhtml"},"elementHandle.innerHTML()"))),(0,l.kt)("h2",{id:"visibility"},"Visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageisvisibleselector-options"},"page.isVisible(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleisvisible"},"elementHandle.isVisible()"))),(0,l.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const enabled = await page.isEnabled('input');\nexpect(enabled).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-6"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageisenabledselector-options"},"page.isEnabled(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleisenabled"},"elementHandle.isEnabled()"))),(0,l.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,l.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nexpect(length === 3).toBeTruthy();\n")),(0,l.kt)("h3",{id:"api-reference-7"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageevaluatepagefunction-arg"},"page.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageevalselector-pagefunction-arg"},"page.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-page#pageevalselector-pagefunction-arg-1"},"page.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-frame#frameevaluatepagefunction-arg"},"frame.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-frame#frameevalselector-pagefunction-arg"},"frame.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-frame#frameevalselector-pagefunction-arg-1"},"frame.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg"},"elementHandle.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg-1"},"elementHandle.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},"[EvaluationArgument]")))}p.isMDXComponent=!0}}]);