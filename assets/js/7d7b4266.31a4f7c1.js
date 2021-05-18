(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[98411],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(n),m=i,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61827:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={id:"selectors",title:"Element selectors"},o={unversionedId:"selectors",id:"version-1.6.0/selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors query elements on the web page for interactions, like page.click, and to obtain ElementHandle through page.$. Built-in selectors auto-pierce shadow DOM.",source:"@site/versioned_docs/version-1.6.0/selectors.mdx",sourceDirName:".",slug:"/selectors",permalink:"/docs/1.6.0/selectors",version:"1.6.0",frontMatter:{id:"selectors",title:"Element selectors"},sidebar:"version-1.6.0/docs",previous:{title:"Supported languages",permalink:"/docs/1.6.0/languages"},next:{title:"Input",permalink:"/docs/1.6.0/input"}},s=[{value:"Syntax",id:"syntax",children:[{value:"Short-forms",id:"short-forms",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[]},{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Selector engines",id:"selector-engines",children:[{value:"css and css:light",id:"css-and-csslight",children:[]},{value:"xpath",id:"xpath",children:[]},{value:"text and text:light",id:"text-and-textlight",children:[]},{value:"id, data-testid, data-test-id, data-test and their :light counterparts",id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts",children:[]}]}],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Selectors query elements on the web page for interactions, like ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-page#pageclickselector-options"},"page.click"),", and to obtain ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementHandle")," through ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.6.0/api/class-page#pageselector"},"page.$"),". Built-in selectors auto-pierce ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"shadow DOM"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#syntax"},"Syntax")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#best-practices"},"Best practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selector-engines"},"Selector engines"))),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Selectors are defined by selector engine name and selector body, ",(0,r.kt)("inlineCode",{parentName:"p"},"engine=body"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"engine")," refers to one of the ",(0,r.kt)("a",{parentName:"li",href:"#selector-engines"},"supported engines"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Built-in selector engines: ",(0,r.kt)("a",{parentName:"li",href:"#css-and-csslight"},"css"),", ",(0,r.kt)("a",{parentName:"li",href:"#text-and-textlight"},"text"),", ",(0,r.kt)("a",{parentName:"li",href:"#xpath"},"xpath")," and ",(0,r.kt)("a",{parentName:"li",href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id selectors")),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.6.0/extensibility"},"custom selector engines")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body")," refers to the query string for the respective engine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),", body is the text content"),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"css"),", body is a ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"},"css selector"))))),(0,r.kt)("p",null,"Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability."),(0,r.kt)("h3",{id:"short-forms"},"Short-forms"),(0,r.kt)("p",null,"For convenience, common selectors have short-forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selector starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"//")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"..")," is assumed to be ",(0,r.kt)("inlineCode",{parentName:"li"},"xpath=selector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('//html')")," is converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('xpath=//html')"),"."))),(0,r.kt)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",(0,r.kt)("inlineCode",{parentName:"li"},'"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",(0,r.kt)("inlineCode",{parentName:"li"},"text=selector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('\"foo\"')")," is converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('text=\"foo\"')"),"."))),(0,r.kt)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",(0,r.kt)("inlineCode",{parentName:"li"},"css=selector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('div')")," is converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"page.click('css=div')"),".")))),(0,r.kt)("h3",{id:"chaining-selectors"},"Chaining selectors"),(0,r.kt)("p",null,"Selectors defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," token, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),(0,r.kt)("p",null,"is equivalent to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),(0,r.kt)("p",null,"If a selector needs to include ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),(0,r.kt)("h3",{id:"intermediate-matches"},"Intermediate matches"),(0,r.kt)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") captures the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello"),"."),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),(0,r.kt)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),(0,r.kt)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),(0,r.kt)("p",null,"The following examples use the built-in ",(0,r.kt)("a",{parentName:"p",href:"#text-and-textlight"},"text")," and ",(0,r.kt)("a",{parentName:"p",href:"#css-and-csslight"},"css")," selector engines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// queries "Login" text selector\nawait page.click(\'text="Login"\');\nawait page.click(\'"Login"\'); // short-form\n\n// queries "Search GitHub" placeholder attribute\nawait page.fill(\'css=[placeholder="Search GitHub"]\');\nawait page.fill(\'[placeholder="Search GitHub"]\'); // short-form\n\n// queries "Close" accessibility label\nawait page.click(\'css=[aria-label="Close"]\');\nawait page.click(\'[aria-label="Close"]\'); // short-form\n\n// combine role and text queries\nawait page.click(\'css=nav >> text=Login\');\n')),(0,r.kt)("h3",{id:"define-explicit-contract"},"Define explicit contract"),(0,r.kt)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",(0,r.kt)("inlineCode",{parentName:"p"},"data-test-id"),". These ",(0,r.kt)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",(0,r.kt)("a",{parentName:"p",href:"#css-and-csslight"},"css")," and ",(0,r.kt)("a",{parentName:"p",href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id selectors"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button data-test-id="directions">Itin\xe9raire</button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// queries data-test-id attribute with css\nawait page.click('css=[data-test-id=directions]');\nawait page.click('[data-test-id=directions]'); // short-form\n\n// queries data-test-id with id\nawait page.click('data-test-id=directions');\n")),(0,r.kt)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#xpath"},"xpath")," and ",(0,r.kt)("a",{parentName:"p",href:"#css-and-csslight"},"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// avoid long css or xpath chains\nawait page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');\nawait page.click('//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input');\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),(0,r.kt)("h2",{id:"selector-engines"},"Selector engines"),(0,r.kt)("h3",{id:"css-and-csslight"},"css and css:light"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",(0,r.kt)("inlineCode",{parentName:"p"},"page.$('span > button')")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.$('css=span > button')"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"},(0,r.kt)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"Shadow DOM and Web Components"),". For that reason, ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, every ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"},"Descendant combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",(0,r.kt)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both ",(0,r.kt)("inlineCode",{parentName:"li"},'"css=article div"')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),(0,r.kt)("li",{parentName:"ul"},"Both ",(0,r.kt)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",(0,r.kt)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",(0,r.kt)("inlineCode",{parentName:"li"},"article"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",(0,r.kt)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",(0,r.kt)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"span"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",(0,r.kt)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",(0,r.kt)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",(0,r.kt)("inlineCode",{parentName:"li"},"article")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",(0,r.kt)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),(0,r.kt)("h3",{id:"xpath"},"xpath"),(0,r.kt)("p",null,"XPath engine is equivalent to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"},(0,r.kt)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),(0,r.kt)("p",null,"Malformed selector starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",(0,r.kt)("inlineCode",{parentName:"p"},"page.$('//html/body')")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.$('xpath=//html/body')"),"."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),(0,r.kt)("h3",{id:"text-and-textlight"},"text and text:light"),(0,r.kt)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",(0,r.kt)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",(0,r.kt)("inlineCode",{parentName:"li"},"text= Login")," matches ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),(0,r.kt)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",(0,r.kt)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',(0,r.kt)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",(0,r.kt)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),(0,r.kt)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," symbols. This means ",(0,r.kt)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",(0,r.kt)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),(0,r.kt)("li",{parentName:"ul"},"Input elements of the type ",(0,r.kt)("inlineCode",{parentName:"li"},"button")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"text=Login")," matches ",(0,r.kt)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),(0,r.kt)("p",null,"Malformed selector starting and ending with a quote (either ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",(0,r.kt)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"css"),", while ",(0,r.kt)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),(0,r.kt)("h3",{id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id, data-testid, data-test-id, data-test and their :light counterparts"),(0,r.kt)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}c.isMDXComponent=!0}}]);