"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4171],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return h}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"test-runners",title:"Pytest Plugin Reference"},d=void 0,g={unversionedId:"test-runners",id:"test-runners",title:"Pytest Plugin Reference",description:"Playwright provides a Pytest plugin to write end-to-end tests. To get started with it, refer to the getting started guide.",source:"@site/docs/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/python/docs/next/test-runners",tags:[],version:"current",frontMatter:{id:"test-runners",title:"Pytest Plugin Reference"},sidebar:"docs",previous:{title:"Trace Viewer",permalink:"/python/docs/next/trace-viewer"},next:{title:"Getting started - Library",permalink:"/python/docs/next/library"}},f={},h=[{value:"Usage",id:"usage",level:2},{value:"CLI arguments",id:"cli-arguments",level:2},{value:"Fixtures",id:"fixtures",level:2},{value:"Examples",id:"examples",level:2},{value:"Configure Mypy typings for auto-completion",id:"configure-mypy-typings-for-auto-completion",level:3},{value:"Configure slow mo",id:"configure-slow-mo",level:3},{value:"Skip test by browser",id:"skip-test-by-browser",level:3},{value:"Run on a specific browser",id:"run-on-a-specific-browser",level:3},{value:"Run with a custom browser channel like Google Chrome or Microsoft Edge",id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge",level:3},{value:"Configure base-url",id:"configure-base-url",level:3},{value:"Ignore HTTPS errors",id:"ignore-https-errors",level:3},{value:"Use custom viewport size",id:"use-custom-viewport-size",level:3},{value:"Device emulation",id:"device-emulation",level:3},{value:"Persistent context",id:"persistent-context",level:3},{value:"Using with <code>unittest.TestCase</code>",id:"using-with-unittesttestcase",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Use with pdb",id:"use-with-pdb",level:3},{value:"Deploy to CI",id:"deploy-to-ci",level:2}],y={toc:h};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.pytest.org/en/stable/"}),"Pytest")," plugin to write end-to-end tests. To get started with it, refer to the ",(0,r.kt)("a",c({parentName:"p"},{href:"/python/docs/next/intro"}),"getting started guide"),"."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"To run your tests, use ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.pytest.org/en/stable/"}),"Pytest")," CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pytest --browser webkit --headedd\n")),(0,r.kt)("p",null,"If you want to add the CLI arguments automatically without specifying them, you can use the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.pytest.org/en/stable/reference.html#ini-options-ref"}),"pytest.ini")," file:"),(0,r.kt)("h2",c({},{id:"cli-arguments"}),"CLI arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed mode (default: headless)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--browser"),": Run tests in a different browser ",(0,r.kt)("inlineCode",{parentName:"li"},"chromium"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"firefox"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"webkit"),". It can be specified multiple times (default: all browsers)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--browser-channel")," ",(0,r.kt)("a",c({parentName:"li"},{href:"/python/docs/next/browsers"}),"Browser channel")," to be used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--slowmo")," Run tests with slow mo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--device")," ",(0,r.kt)("a",c({parentName:"li"},{href:"/python/docs/next/emulation"}),"Device")," to be emulated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--output")," Directory for artifacts produced by tests (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"test-results"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tracing")," Whether to record a ",(0,r.kt)("a",c({parentName:"li"},{href:"/python/docs/next/trace-viewer"}),"trace")," for each test. ",(0,r.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"retain-on-failure")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--video")," Whether to record video for each test. ",(0,r.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"retain-on-failure")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--screenshot")," Whether to automatically capture a screenshot after each test. ",(0,r.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"only-on-failure")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"off"),").")),(0,r.kt)("h2",c({},{id:"fixtures"}),"Fixtures"),(0,r.kt)("p",null,"This plugin configures Playwright-specific ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.pytest.org/en/latest/fixture.html"}),"fixtures for pytest"),". To use these fixtures, use the fixture name as an argument to the test function."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),"def test_my_app_is_working(fixture_name):\n    # Test using fixture_name\n    # ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function scope"),": These fixtures are created when requested in a test function and destroyed when the test ends."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context"),": New ",(0,r.kt)("a",c({parentName:"li"},{href:"https://playwright.dev/python/docs/browser-contexts"}),"browser context")," for a test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": New ",(0,r.kt)("a",c({parentName:"li"},{href:"https://playwright.dev/python/docs/pages"}),"browser page")," for a test.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Session scope"),": These fixtures are created when requested in a test function and destroyed when all tests end."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright"),": ",(0,r.kt)("a",c({parentName:"li"},{href:"https://playwright.dev/python/docs/api/class-playwright"}),"Playwright")," instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser_type"),": ",(0,r.kt)("a",c({parentName:"li"},{href:"https://playwright.dev/python/docs/api/class-browsertype"}),"BrowserType")," instance of the current browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser"),": ",(0,r.kt)("a",c({parentName:"li"},{href:"https://playwright.dev/python/docs/api/class-browser"}),"Browser")," instance launched by Playwright."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser_name"),": Browser name as string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser_channel"),": Browser channel as string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_chromium"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"is_webkit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"is_firefox"),": Booleans for the respective browser types.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Customizing fixture options"),": For ",(0,r.kt)("inlineCode",{parentName:"p"},"browser")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," fixtures, use the following fixtures to define custom launch options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser_type_launch_args"),": Override launch arguments for ",(0,r.kt)("a",c({parentName:"li"},{href:"/python/docs/next/api/class-browsertype#browser-type-launch"}),"browser_type.launch(**kwargs)"),". It should return a Dict."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browser_context_args"),": Override the options for ",(0,r.kt)("a",c({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"),". It should return a Dict.")),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("h3",c({},{id:"configure-mypy-typings-for-auto-completion"}),"Configure Mypy typings for auto-completion"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# test_my_application.py\nfrom playwright.sync_api import Page\n\ndef test_visit_admin_dashboard(page: Page):\n    page.goto("/admin")\n    # ...\n')),(0,r.kt)("h3",c({},{id:"configure-slow-mo"}),"Configure slow mo"),(0,r.kt)("p",null,"Run tests with slow mo with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--slowmo")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pytest --slowmo 100\n")),(0,r.kt)("h3",c({},{id:"skip-test-by-browser"}),"Skip test by browser"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# test_my_application.py\nimport pytest\n\n@pytest.mark.skip_browser("firefox")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,r.kt)("h3",c({},{id:"run-on-a-specific-browser"}),"Run on a specific browser"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# conftest.py\nimport pytest\n\n@pytest.mark.only_browser("chromium")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,r.kt)("h3",c({},{id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge"}),"Run with a custom browser channel like Google Chrome or Microsoft Edge"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pytest --browser-channel chrome\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# test_my_application.py\ndef test_example(page):\n    page.goto("https://example.com")\n')),(0,r.kt)("h3",c({},{id:"configure-base-url"}),"Configure base-url"),(0,r.kt)("p",null,"Start Pytest with the ",(0,r.kt)("inlineCode",{parentName:"p"},"base-url")," argument. The ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/pytest-dev/pytest-base-url"}),(0,r.kt)("inlineCode",{parentName:"a"},"pytest-base-url"))," plugin is used for that which allows you to set the base url from the config, CLI arg or as a fixture."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pytest --base-url http://localhost:8080\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# test_my_application.py\ndef test_visit_example(page):\n    page.goto("/admin")\n    # -> Will result in http://localhost:8080/admin\n')),(0,r.kt)("h3",c({},{id:"ignore-https-errors"}),"Ignore HTTPS errors"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "ignore_https_errors": True\n    }\n')),(0,r.kt)("h3",c({},{id:"use-custom-viewport-size"}),"Use custom viewport size"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "viewport": {\n            "width": 1920,\n            "height": 1080,\n        }\n    }\n')),(0,r.kt)("h3",c({},{id:"device-emulation"}),"Device emulation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),"# conftest.py\nimport pytest\n\n@pytest.fixture(scope=\"session\")\ndef browser_context_args(browser_context_args, playwright):\n    iphone_11 = playwright.devices['iPhone 11 Pro']\n    return {\n        **browser_context_args,\n        **iphone_11,\n    }\n")),(0,r.kt)("p",null,"Or via the CLI ",(0,r.kt)("inlineCode",{parentName:"p"},'--device="iPhone 11 Pro"')),(0,r.kt)("h3",c({},{id:"persistent-context"}),"Persistent context"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# conftest.py\nimport pytest\nfrom playwright.sync_api import BrowserType\nfrom typing import Dict\n\n@pytest.fixture(scope="session")\ndef context(\n    browser_type: BrowserType,\n    browser_type_launch_args: Dict,\n    browser_context_args: Dict\n):\n    context = browser_type.launch_persistent_context("./foobar", **{\n        **browser_type_launch_args,\n        **browser_context_args,\n        "locale": "de-DE",\n    })\n    yield context\n    context.close()\n')),(0,r.kt)("p",null,"When using that all pages inside your test are created from the persistent context."),(0,r.kt)("h3",c({},{id:"using-with-unittesttestcase"}),"Using with ",(0,r.kt)("inlineCode",{parentName:"h3"},"unittest.TestCase")),(0,r.kt)("p",null,"See the following example for using it with ",(0,r.kt)("inlineCode",{parentName:"p"},"unittest.TestCase"),". This has a limitation, that only a single browser can be specified and no matrix of multiple browsers gets generated when specifying multiple."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'import pytest\nimport unittest\n\nfrom playwright.sync_api import Page\n\n\nclass MyTest(unittest.TestCase):\n    @pytest.fixture(autouse=True)\n    def setup(self, page: Page):\n        self.page = page\n\n    def test_foobar(self):\n        self.page.goto("https://microsoft.com")\n        self.page.locator("#foobar").click()\n        assert self.page.evaluate("1 + 1") == 2\n')),(0,r.kt)("h2",c({},{id:"debugging"}),"Debugging"),(0,r.kt)("h3",c({},{id:"use-with-pdb"}),"Use with pdb"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breakpoint()")," statement in your test code to pause execution and get a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.python.org/3/library/pdb.html"}),"pdb")," REPL."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-py"}),'def test_bing_is_working(page):\n    page.goto("https://bing.com")\n    breakpoint()\n    # ...\n')),(0,r.kt)("h2",c({},{id:"deploy-to-ci"}),"Deploy to CI"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",c({parentName:"p"},{href:"/python/docs/next/ci"}),"guides for CI providers")," to deploy your tests to CI/CD."))}k.isMDXComponent=!0}}]);