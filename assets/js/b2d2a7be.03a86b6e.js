(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[82201],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59822:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={id:"troubleshooting",title:"Troubleshooting"},l={unversionedId:"troubleshooting",id:"version-1.3.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Chromium",source:"@site/versioned_docs/version-1.3.0/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.3.0/troubleshooting",version:"1.3.0",frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},s=[{value:"Chromium",id:"chromium",children:[{value:"Chrome headless doesn&#39;t launch on Windows",id:"chrome-headless-doesnt-launch-on-windows",children:[]},{value:"Chrome headless doesn&#39;t launch on Linux/WSL",id:"chrome-headless-doesnt-launch-on-linuxwsl",children:[]},{value:"Setting Up Chrome Linux Sandbox",id:"setting-up-chrome-linux-sandbox",children:[]}]},{value:"Firefox",id:"firefox",children:[{value:"Firefox headless doesn&#39;t launch on Linux/WSL",id:"firefox-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"WebKit",id:"webkit",children:[{value:"WebKit headless doesn&#39;t launch on Linux/WSL",id:"webkit-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],u={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#chromium"},"Chromium"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#chrome-headless-doesnt-launch-on-linuxwsl"},"Chrome headless doesn't launch on Linux/WSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#firefox"},"Firefox"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#firefox-headless-doesnt-launch-on-linuxwsl"},"Firefox headless doesn't launch on Linux/WSL")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#webkit"},"WebKit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#webkit-headless-doesnt-launch-on-linuxwsl"},"WebKit headless doesn't launch on Linux/WSL")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-transpilation-issues"},"Code transpilation issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nodejs-requirements"},"Node.js requirements"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"))))),(0,i.kt)("h2",{id:"chromium"},"Chromium"),(0,i.kt)("h3",{id:"chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows"),(0,i.kt)("p",null,"Some ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/chrome/a/answer/7532015?hl=en"},"chrome policies")," might enforce running Chrome/Chromium\nwith certain extensions."),(0,i.kt)("p",null,"Playwright passes ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-extensions")," flag by default and will fail to launch when such policies are active."),(0,i.kt)("p",null,"To work around this, try running without the flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({\n  ignoreDefaultArgs: ['--disable-extensions'],\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Context: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/3681#issuecomment-447865342"},"Puppeteer#3681"),".")),(0,i.kt)("h3",{id:"chrome-headless-doesnt-launch-on-linuxwsl"},"Chrome headless doesn't launch on Linux/WSL"),(0,i.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,i.kt)("p",null,"The common ones for Debian and CentOS are provided below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Debian (e.g. Ubuntu) Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gconf-service\nlibasound2\nlibatk1.0-0\nlibatk-bridge2.0-0\nlibc6\nlibcairo2\nlibcups2\nlibdbus-1-3\nlibexpat1\nlibfontconfig1\nlibgcc1\nlibgconf-2-4\nlibgdk-pixbuf2.0-0\nlibglib2.0-0\nlibgtk-3-0\nlibnspr4\nlibpango-1.0-0\nlibpangocairo-1.0-0\nlibstdc++6\nlibx11-6\nlibx11-xcb1\nlibxcb1\nlibxcomposite1\nlibxcursor1\nlibxdamage1\nlibxext6\nlibxfixes3\nlibxi6\nlibxrandr2\nlibxrender1\nlibxss1\nlibxtst6\nca-certificates\nfonts-liberation\nlibappindicator1\nlibnss3\nlsb-release\nxdg-utils\nwget\nlibgbm1\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"CentOS Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pango.x86_64\nlibXcomposite.x86_64\nlibXcursor.x86_64\nlibXdamage.x86_64\nlibXext.x86_64\nlibXi.x86_64\nlibXtst.x86_64\ncups-libs.x86_64\nlibXScrnSaver.x86_64\nlibXrandr.x86_64\nGConf2.x86_64\nalsa-lib.x86_64\natk.x86_64\ngtk3.x86_64\nipa-gothic-fonts\nxorg-x11-fonts-100dpi\nxorg-x11-fonts-75dpi\nxorg-x11-utils\nxorg-x11-fonts-cyrillic\nxorg-x11-fonts-Type1\nxorg-x11-fonts-misc\n")),(0,i.kt)("p",null,"After installing dependencies you need to update nss library using this command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum update nss -y\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Check out discussions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/290"},"Puppeteer#290")," - Debian troubleshooting ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/391"},"Puppeteer#391")," - CentOS troubleshooting ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/379"},"Puppeteer#379")," - Alpine troubleshooting ",(0,i.kt)("br",null)))),(0,i.kt)("p",null,"Please file new issues in this repo for things relating to Playwright."),(0,i.kt)("h3",{id:"setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox"),(0,i.kt)("p",null,"In order to protect the host environment from untrusted web content, Chrome uses ",(0,i.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_sandboxing.mdx"},"multiple layers of sandboxing"),". For this to work properly,\nthe host should be configured first. If there's no good sandbox for Chrome to use, it will crash\nwith the error ",(0,i.kt)("inlineCode",{parentName:"p"},"No usable sandbox!"),"."),(0,i.kt)("p",null,"If you ",(0,i.kt)("strong",{parentName:"p"},"absolutely trust")," the content you open in Chrome, you can launch Chrome\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({ chromiumSandbox: false });\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Running without a sandbox is ",(0,i.kt)("strong",{parentName:"p"},"strongly discouraged"),". Consider configuring a sandbox instead.")),(0,i.kt)("p",null,"To enable Chromium sandbox, you should enable ",(0,i.kt)("a",{parentName:"p",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"user namespace cloning"),"."),(0,i.kt)("p",null,"User namespace cloning is only supported by modern kernels. Unprivileged user\nnamespaces are generally fine to enable, but in some cases they open up more\nkernel attack surface for (unsandboxed) non-root processes to elevate to kernel\nprivileges."),(0,i.kt)("p",null,"In general, user namespace cloning can be enabled with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -w kernel.unprivileged_userns_clone=1\n")),(0,i.kt)("p",null,"In case of Docker, containers need to be run with a custom ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/seccomp/"},"security profile")," that enables\nuser namespace cloning. You can download this profile here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"},(0,i.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))),(0,i.kt)("p",null,"With the downloaded profile, docker container could be run like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm --security-opt seccomp=/path/to/seccomp/profile.json -it my-image-name\n")),(0,i.kt)("h2",{id:"firefox"},"Firefox"),(0,i.kt)("h3",{id:"firefox-headless-doesnt-launch-on-linuxwsl"},"Firefox headless doesn't launch on Linux/WSL"),(0,i.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,i.kt)("h2",{id:"webkit"},"WebKit"),(0,i.kt)("h3",{id:"webkit-headless-doesnt-launch-on-linuxwsl"},"WebKit headless doesn't launch on Linux/WSL"),(0,i.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,i.kt)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),(0,i.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright"),"."),(0,i.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",(0,i.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),(0,i.kt)("h2",{id:"nodejs-requirements"},"Node.js requirements"),(0,i.kt)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),(0,i.kt)("p",null,"Playwright requires Node.js 10 or higher. Node.js 8 is not supported, and will cause you to receive this error."),(0,i.kt)("h1",{id:"please-file-an-issue"},"Please file an issue"),(0,i.kt)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}c.isMDXComponent=!0}}]);