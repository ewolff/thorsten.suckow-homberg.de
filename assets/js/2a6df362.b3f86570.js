(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1898],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4461:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var r=n(7294);function o(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,n)=>{"use strict";n.d(t,{$o:()=>s,_b:()=>d,cx:()=>i,e2:()=>l,t2:()=>c});var r=n(7294),o=n(5075),a=n(9943);function i(e){let{width:t,children:n,title:a,figure:i,modeAware:s}=e;return r.createElement("div",{style:{width:t,textAlign:"center",margin:20}},r.createElement("div",{className:!1!==s?"umlImg":""},n),r.createElement("div",{style:{textAlign:"center"}},r.createElement("sup",null,r.createElement("b",null,o.Z.isString(i)?i:`Figure ${i??1}`)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))))}function s(e){let{id:t,source:n,title:o}=e;return r.createElement(i,{modeAware:!1,title:o,figure:`Source ${n}`},r.createElement(a.Z,{id:t}))}function l(e){let{url:t,figure:n,title:o}=e;return r.createElement(i,{modeAware:!1,figure:n,title:o},r.createElement("img",{alt:"{title}",src:t}))}function d(e){let{children:t,figure:n,title:o}=e;return r.createElement(i,{modeAware:!0,figure:n,title:o,children:t})}function c(e){let{when:t,where:n}=e;const[o,a]=n;return r.createElement("div",null,"This article was originally published in ",t," at ",r.createElement("a",{target:"_blank",href:a},o),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",r.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},6739:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,E:()=>o});var r=n(7294);function o(e){let{name:t,pp:n}=e;const o=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:o},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function a(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const o=`/docs/toolbox/${n}`;return r.createElement("a",{href:o,className:"glosRef"},t)}},287:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(4461),i=n(6739),s=n(2490);const l=n.p+"assets/images/layer.svg-10d4f597cb30fc462a9ef47418226e7d.png",d={title:"Domain Layer"},c="Domain Layer (DDD)",m={unversionedId:"toolbox/ddd.domainlayer",id:"toolbox/ddd.domainlayer",title:"Domain Layer",description:"The Domain Layer is a layer in  a  and holds all implementation related to the business of the software, such as rules and concepts, manifesting in , expressed through a  and bounded by .",source:"@site/docs/toolbox/ddd.domainlayer.mdx",sourceDirName:"toolbox",slug:"/toolbox/ddd.domainlayer",permalink:"/docs/toolbox/ddd.domainlayer",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/ddd.domainlayer.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1680960498,formattedLastUpdatedAt:"Apr 8, 2023",frontMatter:{title:"Domain Layer"},sidebar:"toolbox",previous:{title:"Domain Driven Design",permalink:"/docs/toolbox/ddd.domaindrivendesign"},next:{title:"Domain Model",permalink:"/docs/toolbox/ddd.domainmodel"}},u={},p=[],f={toc:p},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"domain-layer-ddd"},"Domain Layer (DDD)"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Domain Layer")," is a ",(0,o.kt)("em",{parentName:"p"},"layer")," in  a ",(0,o.kt)(i.A,{name:"Layered Architecture",file:"sa.layeredarchitecture",mdxType:"GlosRef"})," and holds all implementation related to the business of the software, such as rules and concepts, manifesting in ",(0,o.kt)(i.A,{name:"Domain Models",file:"ddd.domainmodel",mdxType:"GlosRef"}),", expressed through a ",(0,o.kt)(i.A,{name:"Ubiquitous Language",file:"ddd.ubiquitouslanguage",mdxType:"GlosRef"})," and bounded by ",(0,o.kt)(i.A,{name:"Contexts",file:"ddd.boundedcontext",mdxType:"GlosRef"}),"."),(0,o.kt)(s.cx,{figure:1,title:"A domain with multiple Bounded Contexts",mdxType:"Embed"},(0,o.kt)("img",{src:l})),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Figure 1"),", a ",(0,o.kt)("strong",{parentName:"p"},"Domain Layer")," is depicted with multiple ",(0,o.kt)("strong",{parentName:"p"},"Bounded Contexts"),". Each ",(0,o.kt)("strong",{parentName:"p"},"Bounded Context")," is semantically defined through its ",(0,o.kt)("strong",{parentName:"p"},"Ubiquitous Language"),". The vocabulary of an ",(0,o.kt)("strong",{parentName:"p"},"Ubiquitous Language")," does not exclusively belong to one ",(0,o.kt)("strong",{parentName:"p"},"Counded Context"),", words an meaning might be (re-)used across boundaries. Each ",(0,o.kt)("strong",{parentName:"p"},"Bounded Context")," has a ",(0,o.kt)("strong",{parentName:"p"},"Domain Model")," that in turn consist of ",(0,o.kt)("strong",{parentName:"p"},"Domain Objects"),", such as ",(0,o.kt)(i.A,{name:"Aggregates",file:"ddd.aggregate",mdxType:"GlosRef"})," (with ",(0,o.kt)(i.A,{name:"Value Objects",file:"sd.valueobject",mdxType:"GlosRef"})," and ",(0,o.kt)(i.A,{name:"Entities",file:"sd.Entity",mdxType:"GlosRef"}),") and ",(0,o.kt)(i.A,{name:"Repositories",file:"sd.repository",mdxType:"GlosRef"}),", amongst others."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"This layer is the heart of business software."')," ",(0,o.kt)(i.E,{name:"DDD",pp:"70",mdxType:"BibRef"}))),(0,o.kt)(a.x,{mdxType:"BackButton"}))}y.isMDXComponent=!0},2480:()=>{}}]);