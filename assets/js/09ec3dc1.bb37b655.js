(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[91960],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},68872:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=(n(41395),n(58215),{id:"docker",title:"Docker"}),s={unversionedId:"docker",id:"version-1.8.0/docker",isDocsHomePage:!1,title:"Docker",description:"Dockerfile.bionic and Dockerfile.focal can be used to run Playwright scripts in Docker environments. These images includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-1.8.0/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/docs/1.8.0/docker",version:"1.8.0",frontMatter:{id:"docker",title:"Docker"},sidebar:"version-1.8.0/docs",previous:{title:"Test Runners",permalink:"/docs/1.8.0/test-runners"},next:{title:"Continuous Integration",permalink:"/docs/1.8.0/ci"}},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Ubuntu 20",id:"ubuntu-20",children:[]},{value:"Ubuntu 18",id:"ubuntu-18",children:[]},{value:"Alpine",id:"alpine",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"Dockerfile.bionic")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal"},"Dockerfile.focal")," can be used to run Playwright scripts in Docker environments. These images includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#image-tags"},"Image tags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#development"},"Development")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#base-images"},"Base images"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/microsoft-playwright"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"}))),(0,a.kt)("p",null,"This image is published on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/microsoft-playwright"},"Docker Hub"),"."),(0,a.kt)("h3",{id:"pull-the-image"},"Pull the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull mcr.microsoft.com/playwright:bionic\n")),(0,a.kt)("h3",{id:"run-the-image"},"Run the image"),(0,a.kt)("p",null,"By default, the Docker image will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),(0,a.kt)("h4",{id:"end-to-end-tests"},"End-to-end tests"),(0,a.kt)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --rm --ipc=host mcr.microsoft.com/playwright:bionic /bin/bash\n")),(0,a.kt)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),(0,a.kt)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",(0,a.kt)("inlineCode",{parentName:"p"},"adduser")," for it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"},(0,a.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"},"default Docker seccomp profile")," with extra user namespace cloning permissions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),"). Chrome can run out of memory without this flag."))),(0,a.kt)("h3",{id:"using-on-ci"},"Using on CI"),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.8.0/ci"},"Continuous Integration guides")," for sample configs."),(0,a.kt)("h2",{id:"image-tags"},"Image tags"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://mcr.microsoft.com/v2/playwright/tags/list"},"all available image tags"),"."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("h3",{id:"build-the-image"},"Build the image"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/build.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"//utils/docker/build.sh"))," to build the image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./utils/docker/build.sh bionic playwright:localbuild-bionic\n")),(0,a.kt)("p",null,"The image will be tagged as ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright:localbuild-bionic")," and could be run as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker run --rm -it playwright:localbuild /bin/bash\n")),(0,a.kt)("h3",{id:"push"},"Push"),(0,a.kt)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish the following images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:next")," - tip-of-tree image version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:bionic")," - last Playwright release docker image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"},"short sha")," (first 7 digits of the SHA commit).")),(0,a.kt)("p",null,"Status of push to MCR can be ",(0,a.kt)("a",{parentName:"p",href:"https://mcrflow-status-ui.azurewebsites.net/"},"verified here")," (internal link)."),(0,a.kt)("h2",{id:"base-images"},"Base images"),(0,a.kt)("h3",{id:"ubuntu-20"},"Ubuntu 20"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:focal")," is based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,a.kt)("h3",{id:"ubuntu-18"},"Ubuntu 18"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),(0,a.kt)("h3",{id:"alpine"},"Alpine"),(0,a.kt)("p",null,"Browser builds for Firefox and WebKit are built for the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GNU_C_Library"},"glibc")," library. Alpine Linux and other distributions that are based on the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Musl"},"musl")," standard library are not supported."))}u.isMDXComponent=!0}}]);