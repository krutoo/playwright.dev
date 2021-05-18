(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[41565],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8109:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var i=t(22122),r=t(19756),a=(t(67294),t(3905)),o={id:"ci",title:"Continuous Integration"},l={unversionedId:"ci",id:"version-1.6.0/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample",source:"@site/versioned_docs/version-1.6.0/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/docs/1.6.0/ci",version:"1.6.0",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"version-1.6.0/docs",previous:{title:"Running Playwright in Docker",permalink:"/docs/1.6.0/docker/README"},next:{title:"Actionability",permalink:"/docs/1.6.0/actionability"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"CI configurations",id:"ci-configurations",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]},{value:"Travis CI",id:"travis-ci",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jenkins",id:"jenkins",children:[]},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]}]},{value:"Caching browsers",id:"caching-browsers",children:[]},{value:"Debugging browser launches",id:"debugging-browser-launches",children:[]},{value:"Running headful",id:"running-headful",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample\nconfigurations for common CI providers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ci-configurations"},"CI configurations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#github-actions"},"GitHub Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#docker"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#azure-pipelines"},"Azure Pipelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#travis-ci"},"Travis CI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#circleci"},"CircleCI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#jenkins"},"Jenkins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bitbucket-pipelines"},"Bitbucket Pipelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#gitlab-ci"},"GitLab CI")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#caching-browsers"},"Caching browsers"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#exception-node_modules-are-cached"},"Exception: ",(0,a.kt)("inlineCode",{parentName:"a"},"node_modules")," are cached")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#directories-to-cache"},"Directories to cache")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#debugging-browser-launches"},"Debugging browser launches")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-headful"},"Running headful"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"3 steps to get your tests running on CI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Ensure CI agent can run browsers"),": Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.6.0/docker/README"},"our Docker image"),"\nin Linux agents. Windows and macOS agents do not require any additional dependencies."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install Playwright"),": In most projects, this would be done with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci"),"\n(or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),"). Playwright would install the relevant browsers automatically."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Run your tests"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm test")," or equivalent to execute your tests.")),(0,a.kt)("h2",{id:"ci-configurations"},"CI configurations"),(0,a.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-github-action"},"Playwright GitHub Action")," can be used to run Playwright tests on GitHub Actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"steps:\n  - uses: microsoft/playwright-github-action@v1\n  - name: Run your tests\n    run: npm test\n")),(0,a.kt)("p",null,"We run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests.yml"},"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"We have a ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, Docker runs a container with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB.\nThis is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/c0b/chrome-in-docker/issues/1"},"typically too small")," for Chromium\nand will cause Chromium to crash when rendering large pages. To fix, run the container with\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no\nlonger necessary. Instead, launch the browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({\n  args: ['--disable-dev-shm-usage']\n});\n")),(0,a.kt)("p",{parentName:"li"},"This will write shared memory files into ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See\n",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug.com/736452")," for more details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory\nand crash. Learn more about this option in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yelp/dumb-init"},"dumb-init")," is worth checking out if you're\nexperiencing a lot of zombies Chromium processes sticking around. There's special\ntreatment for processes with PID=1, which makes it hard to terminate Chromium\nproperly in some cases (e.g. in Docker)."))),(0,a.kt)("h3",{id:"azure-pipelines"},"Azure Pipelines"),(0,a.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,a.kt)("p",null,"For Linux agents, you can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"our Docker container")," with Azure Pipelines support for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"},"running containerized jobs"),". Alternatively, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"pool:\n  vmImage: 'ubuntu-18.04'\n\ncontainer: mcr.microsoft.com/playwright:bionic\n\nsteps:\n- script: npm install\n- script: npm run test\n")),(0,a.kt)("h3",{id:"travis-ci"},"Travis CI"),(0,a.kt)("p",null,"We run our tests on Travis CI over a Linux agent (Ubuntu 18.04)."),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"User namespace cloning"),"\nshould be enabled to support proper sandboxing"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Xvfb"},"xvfb")," should be launched in order to run\nChromium in non-headless mode (e.g. to test Chrome Extensions)"),(0,a.kt)("li",{parentName:"ol"},"If your project does not have ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching\n",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci"),"), it is\npossible that the browser binaries are not downloaded. Fix this with ",(0,a.kt)("a",{parentName:"li",href:"#exception-node_modules-are-cached"},"these steps")," outlined below.")),(0,a.kt)("p",null,"To sum up, your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headful tests\n    - xvfb\n\n# allow headful tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,a.kt)("h3",{id:"circleci"},"CircleCI"),(0,a.kt)("p",null,"We run our tests on CircleCI, with our ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"pre-built Docker image"),". Running Playwright smoothly on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the pre-built ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"Docker image")," in your config like so:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"docker:\n  - image: mcr.microsoft.com/playwright:bionic\n    environment:\n      NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,a.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,a.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,a.kt)("h3",{id:"jenkins"},"Jenkins"),(0,a.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"Playwright Docker image"),"\nto run tests on Jenkins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:bionic' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,a.kt)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,a.kt)("p",null,"Bitbucket Pipelines can use public ",(0,a.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"},"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"image: mcr.microsoft.com/playwright:bionic\n")),(0,a.kt)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\nconst browser = await chromium.launch({ chromiumSandbox: false });\n")),(0,a.kt)("h3",{id:"gitlab-ci"},"GitLab CI"),(0,a.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:bionic\n  script:\n    - npm install # This should install playwright\n    - npm run test\n")),(0,a.kt)("h2",{id:"caching-browsers"},"Caching browsers"),(0,a.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package\nis installed. The NPM packages have a ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser\nbinaries. This behavior can be ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/installation"},"customized with environment variables"),"."),(0,a.kt)("p",null,"Caching browsers on CI is ",(0,a.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should\nexecute and download the browser binaries on every run."),(0,a.kt)("h4",{id:"exception-node_modules-are-cached"},"Exception: ",(0,a.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached"),(0,a.kt)("p",null,"Most CI providers cache the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli-commands/cache.html"},"npm-cache"),"\ndirectory (located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ndirectory and you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration\n",(0,a.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM\npackage on disk and not execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a\n",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,a.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Move to caching ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default\nbehavior in most CI providers.)"),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),"\ndirectory and cache them with the package code. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.6.0/installation"},"installation docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by\nremoving the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/ci.html"},"npm docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,a.kt)("h4",{id:"directories-to-cache"},"Directories to cache"),(0,a.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following\ndirectories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,a.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI\nconfiguration, against a hash of the Playwright version."),(0,a.kt)("h2",{id:"debugging-browser-launches"},"Debugging browser launches"),(0,a.kt)("p",null,"Playwright supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEBUG=pw:browser* npm run test\n")),(0,a.kt)("h2",{id:"running-headful"},"Running headful"),(0,a.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Works across chromium, firefox and webkit\nconst { chromium } = require('playwright');\nconst browser = await chromium.launch({ headless: false });\n")),(0,a.kt)("p",null,"On Linux agents, headful execution requires ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Xvfb"},"Xvfb")," to be installed. Our ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.6.0/docker/README"},"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headful mode with Xvfb, add ",(0,a.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"xvfb-run node index.js\n")))}p.isMDXComponent=!0}}]);