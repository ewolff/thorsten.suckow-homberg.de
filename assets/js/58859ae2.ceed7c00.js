"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[3257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,g=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={slug:"Releasing-conjoon-V1.0",title:"Releasing conjoon V1.0",authors:["thorstensuckow"],tags:["release","conjoon","open source","email"]},l=void 0,i={permalink:"/blog/Releasing-conjoon-V1.0",editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/blog/2022-11-16-releasing-conjoon-v1.0/index.md",source:"@site/blog/2022-11-16-releasing-conjoon-v1.0/index.md",title:"Releasing conjoon V1.0",description:"Releasing conjoon V1.0",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"conjoon",permalink:"/blog/tags/conjoon"},{label:"open source",permalink:"/blog/tags/open-source"},{label:"email",permalink:"/blog/tags/email"}],readingTime:1.125,hasTruncateMarker:!1,authors:[{name:"Thorsten Suckow-Homberg",url:"https://thorsten.suckow-homberg.de",imageURL:"https://avatars.githubusercontent.com/u/823135",key:"thorstensuckow"}],frontMatter:{slug:"Releasing-conjoon-V1.0",title:"Releasing conjoon V1.0",authors:["thorstensuckow"],tags:["release","conjoon","open source","email"]},prevItem:{title:"Fix: Missing favicon.ico in Sencha ExtJS production builds",permalink:"/blog/2023/02/19/fix-missing-favicon-in-extjs"},nextItem:{title:"Easily create Siesta tests for your applications",permalink:"/blog/2022/07/15/easily-create-siesta-tests-for-your-application"}},s={authorsImageUrls:[void 0]},c=[{value:"Releasing conjoon V1.0",id:"releasing-conjoon-v10",level:2},{value:"Highlights\u200b",id:"highlights",level:2},{value:"Plugins\u200b",id:"plugins",level:3},{value:"Installer and CLI actions for lumen-app-email\u200b",id:"installer-and-cli-actions-for-lumen-app-email",level:3},{value:"Docker Container\u200b",id:"docker-container",level:3}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"releasing-conjoon-v10"},"Releasing conjoon V1.0"),(0,a.kt)("p",null,"I\u2019m happy to announce conjoon 1.0, the very first major release of the Open Source JavaScript Email client."),(0,a.kt)("p",null,"For updating to the latest version, simply use our ",(0,a.kt)("a",{parentName:"p",href:"https://www.conjoon.org/blog/2022/11/14/docs/api/misc/@conjoon/create-conjoon"},"installer"),". It will let you select the latest release when opting for the version to install."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/3126/0*0A2MPF6zRkH3ks2E.png",alt:null})),(0,a.kt)("h2",{id:"highlights"},"Highlights",(0,a.kt)("a",{parentName:"h2",href:"https://www.conjoon.org/blog/2022/11/14/1.0.0-release#highlights"},"\u200b")),(0,a.kt)("p",null,"v1.0.0 marks the first major release for our JavaScript Email frontend, over 100 tickets related to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/conjoon/projects/3"},"bugfixes, optimizations and minor features")," across all projects where closed."),(0,a.kt)("p",null,"This release focuses on providing a stable frontend in conjunction with ",(0,a.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email"},"lumen-app-email"),"."),(0,a.kt)("p",null,"Besides the features already introduced with the release candidates, the following features have been added:"),(0,a.kt)("h3",{id:"plugins"},"Plugins",(0,a.kt)("a",{parentName:"h3",href:"https://www.conjoon.org/blog/2022/11/14/1.0.0-release#plugins"},"\u200b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugin ",(0,a.kt)("a",{parentName:"li",href:"https://www.conjoon.org/docs/api/plugins/@conjoon/extjs-app-webmail/mail-internal-mailtohandler"},"mail-internal-mailtohandler"),": Plugin for registering conjoon as the protocol handler for mailto-links")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2004/0*iehzFekzIAWO5vfh.png",alt:null})),(0,a.kt)("h3",{id:"installer-and-cli-actions-for-lumen-app-email"},"Installer and CLI actions for lumen-app-email",(0,a.kt)("a",{parentName:"h3",href:"https://www.conjoon.org/blog/2022/11/14/1.0.0-release#installer-and-cli-actions-for-lumen-app-email"},"\u200b")),(0,a.kt)("p",null,"The installation for lumen-app-email has been simplified with the help of Artisan and CLI commands. To get an instance of lumen-app-email running, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ composer create-project conjoon/lumen-app-email {targetDir} {version}\n")),(0,a.kt)("p",null,"which will start the installation process. For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email#installation-1"},"official guide"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/3218/0*X1lMoQ8gvmbMwhAF.png",alt:null})),(0,a.kt)("h3",{id:"docker-container"},"Docker Container",(0,a.kt)("a",{parentName:"h3",href:"https://www.conjoon.org/blog/2022/11/14/1.0.0-release#docker-container"},"\u200b")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/ddev-ms-email"},"ddev-ms-email")," has been updated to utilize the installer of lumen-app-email and additionally provides integration options for conjoon so that the container can be used for serving both the backend and the frontend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ddev create-conjoon\n")),(0,a.kt)("p",null,"will start the installation of conjoon. For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conjoon.org/docs/api/backends/@conjoon/ddev-ms-email"},"official guide"),"."),(0,a.kt)("p",null,"Happy coding! \ud83c\udf88"))}u.isMDXComponent=!0}}]);