(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[23927],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(t),d=i,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},27480:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o={id:"troubleshooting",title:"Troubleshooting"},l={unversionedId:"troubleshooting",id:"version-1.0.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Chromium",source:"@site/versioned_docs/version-1.0.0/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/1.0.0/troubleshooting",version:"1.0.0",frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},s=[{value:"Chromium",id:"chromium",children:[{value:"Chrome headless doesn&#39;t launch on Windows",id:"chrome-headless-doesnt-launch-on-windows",children:[]},{value:"Chrome headless doesn&#39;t launch on Linux/WSL",id:"chrome-headless-doesnt-launch-on-linuxwsl",children:[]},{value:"Setting Up Chrome Linux Sandbox",id:"setting-up-chrome-linux-sandbox",children:[]}]},{value:"Firefox",id:"firefox",children:[{value:"Firefox headless doesn&#39;t launch on Linux/WSL",id:"firefox-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"WebKit",id:"webkit",children:[{value:"WebKit headless doesn&#39;t launch on Linux/WSL",id:"webkit-headless-doesnt-launch-on-linuxwsl",children:[]}]},{value:"Running Playwright on CI",id:"running-playwright-on-ci",children:[{value:"Running Playwright on Travis CI",id:"running-playwright-on-travis-ci",children:[]},{value:"Running Playwright on CircleCI",id:"running-playwright-on-circleci",children:[]},{value:"Running Playwright in Docker",id:"running-playwright-in-docker",children:[]}]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node requirements",id:"node-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],u={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#chromium"},"Chromium"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#chrome-headless-doesnt-launch-on-linuxwsl"},"Chrome headless doesn't launch on Linux/WSL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#recommended-enable-user-namespace-cloning"},"[recommended] Enable user namespace cloning")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternative-setup-setuid-sandbox"},"[alternative] Setup setuid sandbox")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#firefox"},"Firefox"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#firefox-headless-doesnt-launch-on-linuxwsl"},"Firefox headless doesn't launch on Linux/WSL")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#webkit"},"WebKit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#webkit-headless-doesnt-launch-on-linuxwsl"},"WebKit headless doesn't launch on Linux/WSL")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-playwright-on-ci"},"Running Playwright on CI"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-playwright-on-travis-ci"},"Running Playwright on Travis CI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-playwright-on-circleci"},"Running Playwright on CircleCI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-playwright-in-docker"},"Running Playwright in Docker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips"},"Tips")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-transpilation-issues"},"Code transpilation issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#node-requirements"},"Node requirements"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"))))),(0,a.kt)("h2",{id:"chromium"},"Chromium"),(0,a.kt)("h3",{id:"chrome-headless-doesnt-launch-on-windows"},"Chrome headless doesn't launch on Windows"),(0,a.kt)("p",null,"Some ",(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/chrome/a/answer/7532015?hl=en"},"chrome policies")," might enforce running Chrome/Chromium\nwith certain extensions."),(0,a.kt)("p",null,"Playwright passes ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-extensions")," flag by default and will fail to launch when such policies are active."),(0,a.kt)("p",null,"To work around this, try running without the flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({\n  ignoreDefaultArgs: ['--disable-extensions'],\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Context: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/3681#issuecomment-447865342"},"Puppetteer#3681"),".")),(0,a.kt)("h3",{id:"chrome-headless-doesnt-launch-on-linuxwsl"},"Chrome headless doesn't launch on Linux/WSL"),(0,a.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,a.kt)("p",null,"The common ones for Debian and CentOS are provided below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Debian (e.g. Ubuntu) Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gconf-service\nlibasound2\nlibatk1.0-0\nlibatk-bridge2.0-0\nlibc6\nlibcairo2\nlibcups2\nlibdbus-1-3\nlibexpat1\nlibfontconfig1\nlibgcc1\nlibgconf-2-4\nlibgdk-pixbuf2.0-0\nlibglib2.0-0\nlibgtk-3-0\nlibnspr4\nlibpango-1.0-0\nlibpangocairo-1.0-0\nlibstdc++6\nlibx11-6\nlibx11-xcb1\nlibxcb1\nlibxcomposite1\nlibxcursor1\nlibxdamage1\nlibxext6\nlibxfixes3\nlibxi6\nlibxrandr2\nlibxrender1\nlibxss1\nlibxtst6\nca-certificates\nfonts-liberation\nlibappindicator1\nlibnss3\nlsb-release\nxdg-utils\nwget\nlibgbm1\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CentOS Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pango.x86_64\nlibXcomposite.x86_64\nlibXcursor.x86_64\nlibXdamage.x86_64\nlibXext.x86_64\nlibXi.x86_64\nlibXtst.x86_64\ncups-libs.x86_64\nlibXScrnSaver.x86_64\nlibXrandr.x86_64\nGConf2.x86_64\nalsa-lib.x86_64\natk.x86_64\ngtk3.x86_64\nipa-gothic-fonts\nxorg-x11-fonts-100dpi\nxorg-x11-fonts-75dpi\nxorg-x11-utils\nxorg-x11-fonts-cyrillic\nxorg-x11-fonts-Type1\nxorg-x11-fonts-misc\n")),(0,a.kt)("p",null,"After installing dependencies you need to update nss library using this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum update nss -y\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Check out discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/290"},"Puppeteer#290")," - Debian troubleshooting ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/391"},"Puppeteer#391")," - CentOS troubleshooting ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/379"},"Puppeteer#379")," - Alpine troubleshooting ",(0,a.kt)("br",null)))),(0,a.kt)("p",null,"Please file new issues in this repo for things relating to Playwright."),(0,a.kt)("h3",{id:"setting-up-chrome-linux-sandbox"},"Setting Up Chrome Linux Sandbox"),(0,a.kt)("p",null,"In order to protect the host environment from untrusted web content, Chrome uses ",(0,a.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_sandboxing.mdx"},"multiple layers of sandboxing"),". For this to work properly,\nthe host should be configured first. If there's no good sandbox for Chrome to use, it will crash\nwith the error ",(0,a.kt)("inlineCode",{parentName:"p"},"No usable sandbox!"),"."),(0,a.kt)("p",null,"If you ",(0,a.kt)("strong",{parentName:"p"},"absolutely trust")," the content you open in Chrome, you can launch Chrome\nwith the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-sandbox")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Running without a sandbox is ",(0,a.kt)("strong",{parentName:"p"},"strongly discouraged"),". Consider configuring a sandbox instead.")),(0,a.kt)("p",null,"There are 2 ways to configure a sandbox in Chromium."),(0,a.kt)("h4",{id:"recommended-enable-user-namespace-cloning"},"[recommended]"," Enable ",(0,a.kt)("a",{parentName:"h4",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"user namespace cloning")),(0,a.kt)("p",null,"User namespace cloning is only supported by modern kernels. Unprivileged user namespaces are generally fine to enable,\nbut in some cases they open up more kernel attack surface for (unsandboxed) non-root processes to elevate to\nkernel privileges."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -w kernel.unprivileged_userns_clone=1\n")),(0,a.kt)("h4",{id:"alternative-setup-setuid-sandbox"},"[alternative]"," Setup ",(0,a.kt)("a",{parentName:"h4",href:"https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_suid_sandbox_development.mdx"},"setuid sandbox")),(0,a.kt)("p",null,"The setuid sandbox comes as a standalone executable and is located next to the Chromium that Playwright downloads. It is\nfine to re-use the same sandbox executable for different Chromium versions, so the following could be\ndone only once per host environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# cd to the downloaded instance\ncd <project-dir-path>/node_modules/playwright/.local-browsers/chromium-<revision>/\nsudo chown root:root chrome_sandbox\nsudo chmod 4755 chrome_sandbox\n# copy sandbox executable to a shared location\nsudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox\n# export CHROME_DEVEL_SANDBOX env variable\nexport CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,a.kt)("p",null,"You might want to export the ",(0,a.kt)("inlineCode",{parentName:"p"},"CHROME_DEVEL_SANDBOX")," env variable by default. In this case, add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},".zshenv"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox\n")),(0,a.kt)("h2",{id:"firefox"},"Firefox"),(0,a.kt)("h3",{id:"firefox-headless-doesnt-launch-on-linuxwsl"},"Firefox headless doesn't launch on Linux/WSL"),(0,a.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,a.kt)("h2",{id:"webkit"},"WebKit"),(0,a.kt)("h3",{id:"webkit-headless-doesnt-launch-on-linuxwsl"},"WebKit headless doesn't launch on Linux/WSL"),(0,a.kt)("p",null,"Make sure all the necessary dependencies are installed. You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"ldd chrome | grep not")," on a Linux\nmachine to check which dependencies are missing. For dependencies on Ubuntu, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile")," which is used to run our tests."),(0,a.kt)("h2",{id:"running-playwright-on-ci"},"Running Playwright on CI"),(0,a.kt)("h3",{id:"running-playwright-on-travis-ci"},"Running Playwright on Travis CI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We run our tests for Playwright on Travis CI - see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/.travis.yml"},(0,a.kt)("inlineCode",{parentName:"a"},".travis.yml"))," for reference.")),(0,a.kt)("p",null,"Tips-n-tricks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"libnss3")," package must be installed in order to run Chromium on Ubuntu Trusty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"user namespace cloning")," should be enabled to support\nproper sandboxing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Xvfb"},"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)")),(0,a.kt)("p",null,"To sum up, your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'language: node_js\ndist: trusty\naddons:\n  apt:\n    packages:\n      # This is required to run new chrome on old trusty\n      - libnss3\nnotifications:\n  email: false\ncache:\n  directories:\n    - node_modules\n# allow headful tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,a.kt)("h3",{id:"running-playwright-on-circleci"},"Running Playwright on CircleCI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We run our tests for Playwright on CircleCI - see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/.circleci/config.yml"},(0,a.kt)("inlineCode",{parentName:"a"},".circleci/config.yml"))," for reference.")),(0,a.kt)("p",null,"Running Playwright smoothly on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start with a ",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/circleci-images/#nodejs"},"NodeJS\nimage")," in your config\nlike so:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"docker:\n  - image: circleci/node:12 # Use your desired version\n    environment:\n      NODE_ENV: development # Only needed if playwright is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},"Dependencies like ",(0,a.kt)("inlineCode",{parentName:"li"},"libXtst6")," probably need to be installed via ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-get"),",\nso use the\n",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer"},"threetreeslight/puppeteer"),"\norb\n(",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#quick-start"},"instructions"),"),\nor paste parts of its\n",(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/orbs/registry/orb/threetreeslight/puppeteer#orb-source"},"source"),"\ninto your own config."),(0,a.kt)("li",{parentName:"ol"},"Lastly, if you\u2019re using Playwright through Jest, then you may encounter an\nerror spawning child processes:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),"This is likely caused by Jest autodetecting the number of processes on the\nentire machine (",(0,a.kt)("inlineCode",{parentName:"li"},"36"),") rather than the number allowed to your container\n(",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"li"},"jest --maxWorkers=2")," in your test command.")),(0,a.kt)("h3",{id:"running-playwright-in-docker"},"Running Playwright in Docker"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b We run our tests for Playwright in a Docker container - see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0.0/docker/README"},"Docker setup")," for reference.")),(0,a.kt)("h4",{id:"tips"},"Tips"),(0,a.kt)("p",null,"By default, Docker runs a container with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB.\nThis is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/c0b/chrome-in-docker/issues/1"},"typically too small")," for Chrome\nand will cause Chrome to crash when rendering large pages. To fix, run the container with\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chrome 65, this is no\nlonger necessary. Instead, launch the browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({\n  args: ['--disable-dev-shm-usage']\n});\n")),(0,a.kt)("p",null,"This will write shared memory files into ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug.com/736452")," for more details."),(0,a.kt)("p",null,"Seeing other weird errors when launching Chrome? Try running your container\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally. Since the Dockerfile\nadds a ",(0,a.kt)("inlineCode",{parentName:"p"},"pwuser")," user as a non-privileged user, it may not have all the necessary privileges."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yelp/dumb-init"},"dumb-init")," is worth checking out if you're\nexperiencing a lot of zombies Chrome processes sticking around. There's special\ntreatment for processes with PID=1, which makes it hard to terminate Chrome\nproperly in some cases (e.g. in Docker)."),(0,a.kt)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),(0,a.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,a.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright"),"."),(0,a.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",(0,a.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),(0,a.kt)("h2",{id:"node-requirements"},"Node requirements"),(0,a.kt)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),(0,a.kt)("p",null,"Playwright requires Node 10 or higher. Node 8 is not supported, and will cause you to receive this error."),(0,a.kt)("h1",{id:"please-file-an-issue"},"Please file an issue"),(0,a.kt)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}p.isMDXComponent=!0}}]);