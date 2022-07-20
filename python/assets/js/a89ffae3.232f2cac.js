"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7201],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),f=a,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return m}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const h={id:"writing-tests",title:"Writing Tests"},f=void 0,d={unversionedId:"writing-tests",id:"writing-tests",title:"Writing Tests",description:"Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with auto-wait built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides an expect function to write assertions.",source:"@site/docs/writing-tests.mdx",sourceDirName:".",slug:"/writing-tests",permalink:"/python/docs/next/writing-tests",tags:[],version:"current",frontMatter:{id:"writing-tests",title:"Writing Tests"},sidebar:"docs",previous:{title:"Installation",permalink:"/python/docs/next/intro"},next:{title:"Running Tests",permalink:"/python/docs/next/running-tests"}},g={},m=[{value:"Assertions",id:"assertions",level:3},{value:"Locators",id:"locators",level:3},{value:"Test Isolation",id:"test-isolation",level:3},{value:"Using Test Hooks",id:"using-test-hooks",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],y={toc:m};function w(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/actionability"}),"auto-wait")," built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides an ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/test-assertions"}),"expect")," function to write assertions."),(0,r.kt)("p",null,"Take a look at the example test below to see how to write a test using web first assertions, locators and selectors."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'import re\nfrom playwright.sync_api import Page, expect\n\n\ndef test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page(\n    page: Page, foo\n):\n    page.goto("https://playwright.dev/")\n\n    # Expect a title "to contain" a substring.\n    expect(page).to_have_title(re.compile("Playwright"))\n\n    # create a locator\n    get_started = page.locator("text=Get Started")\n\n    # Expect an attribute "to be strictly equal" to the value.\n    expect(get_started).to_have_attribute("href", "/docs/intro")\n\n    # Click the get started link.\n    get_started.click()\n\n    # Expects the URL to contain intro.\n    expect(page).to_have_url(re.compile(".*intro"))\n')),(0,r.kt)("h3",u({},{id:"assertions"}),"Assertions"),(0,r.kt)("p",null,"Playwright provides the ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/test-assertions"}),(0,r.kt)("inlineCode",{parentName:"a"},"expect"))," function which will wait until the expected condition is met."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'import re\nfrom playwright.sync_api import expect\n\nexpect(page).to_have_title(re.compile("Playwright"))\n')),(0,r.kt)("h3",u({},{id:"locators"}),"Locators"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/locators"}),"Locators")," are the central piece of Playwright's auto-waiting and retry-ability. Locators represent a way to find element(s) on the page at any moment and are used to perform actions on elements such as ",(0,r.kt)("inlineCode",{parentName:"p"},".click")," ",(0,r.kt)("inlineCode",{parentName:"p"},".fill")," etc. Custom locators can be created with the ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/api/class-page#page-locator"}),"page.locator(selector, **kwargs)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import expect\n\nget_started = page.locator("text=Get Started")\n\nexpect(get_started).to_have_attribute("href", "/docs/installation")\nget_started.click()\n')),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/selectors"}),"Selectors")," are strings that are used to create Locators. Playwright supports many different selectors like ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/selectors#text-selector"}),"Text"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/selectors#css-selector"}),"CSS"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/selectors#xpath-selectors"}),"XPath")," and many more."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import expect\n\nexpect(page.locator("text=Installation")).to_be_visible()\n')),(0,r.kt)("h3",u({},{id:"test-isolation"}),"Test Isolation"),(0,r.kt)("p",null,"The Playwright Pytest plugin is based on the concept of test fixtures such as the ",(0,r.kt)("a",u({parentName:"p"},{href:"/python/docs/next/test-runners"}),"built in page fixture"),", which is passed into your test. Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile, where every test gets a fresh environment, even when multiple tests run in a single Browser."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import Page\n\ndef test_basic_test(page: Page):\n  # ...\n")),(0,r.kt)("h3",u({},{id:"using-test-hooks"}),"Using Test Hooks"),(0,r.kt)("p",null,"You can use various ",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.pytest.org/en/6.2.x/fixture.html#autouse-fixtures-fixtures-you-don-t-have-to-request"}),"fixtures")," to execute code before or after your tests and to share objects between them. A ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," scoped fixture e.g. with autouse behaves like a beforeEach/afterEach. And a ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," scoped fixture with autouse behaves like a beforeAll/afterAll which runs before all and after all the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-py"}),'import pytest\nfrom playwright.sync_api import Page\n\n\n@pytest.fixture(scope="function", autouse=True)\ndef before_each_after_each(page: Page):\n    print("beforeEach")\n    # Go to the starting url before each test.\n    page.goto("https://playwright.dev/")\n    yield\n    print("afterEach")\n\ndef test_main_navigation(page: Page):\n    # Assertions use the expect API.\n    expect(page).to_have_url("https://playwright.dev/")\n')),(0,r.kt)("h2",u({},{id:"whats-next"}),"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/python/docs/next/running-tests"}),"Run single tests, multiple tests, headed mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/python/docs/next/debug"}),"Debug tests with the Playwright Debugger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/python/docs/next/codegen"}),"Generate tests with Codegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/python/docs/next/trace-viewer"}),"See a trace of your tests"))))}w.isMDXComponent=!0}}]);