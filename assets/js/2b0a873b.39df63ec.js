(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1594],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,d=u["".concat(i,".").concat(p)]||u[p]||f[p]||l;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4461:(e,t,r)=>{"use strict";r.d(t,{x:()=>a});var n=r(7294);function a(){return n.createElement("div",{style:{width:"100%",textAlign:"right"}},n.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,r)=>{"use strict";r.d(t,{$o:()=>c,_b:()=>s,cx:()=>o,e2:()=>i,t2:()=>m});var n=r(7294),a=r(5075),l=r(9943);function o(e){let{width:t,children:r,title:l,figure:o,modeAware:c}=e;const i=n.createRef();return n.createElement("div",{style:{width:t,textAlign:"center",margin:20},ref:i},n.createElement("div",{className:!1!==c?"umlImg":""},r),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,a.Z.isString(o)?o:`Figure ${o??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function c(e){let{id:t,source:r,title:a}=e;return n.createElement(o,{modeAware:!1,title:a,figure:`Source ${r}`},n.createElement(l.Z,{id:t}))}function i(e){let{url:t,figure:r,title:a}=e;return n.createElement(o,{modeAware:!1,figure:r,title:a},n.createElement("img",{alt:"{title}",src:t}))}function s(e){let{children:t,figure:r,title:a}=e;return n.createElement(o,{modeAware:!0,figure:r,title:a,children:t})}function m(e){let{when:t,where:r}=e;const[a,l]=r;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:l},a),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},6739:(e,t,r)=>{"use strict";r.d(t,{A:()=>l,E:()=>a});var n=r(7294);function a(e){let{name:t,pp:r}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:a},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),r?`, ${r.includes("-")?"pp":"p"}. ${r}`:"","]")}function l(e){let{name:t,file:r}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(r.startsWith(`${t}.`))return r=r.replace(`${t}.`,`${n}.`),!0}));const a=`/docs/toolbox/${r}`;return n.createElement("a",{href:a,className:"glosRef"},t)}},8764:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>f,metadata:()=>d,toc:()=>g});var n,a=r(7462),l=r(7294),o=r(3905),c=r(4461),i=r(6739);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const m=e=>{let{title:t,titleId:r,...a}=e;return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:400,height:240,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,n||(n=l.createElement("g",{transform:"translate(-640 -420)"},l.createElement("path",{d:"M719.75 479.75c0 10.9-8.84 19.75-19.75 19.75-10.9 0-19.75-8.84-19.75-19.75 0-10.9 8.84-19.75 19.75-19.75 10.9 0 19.75 8.84 19.75 19.75zM700 499.5v49.3a20.7 20.7 0 0 0 3.2 11.07L740 618m-40-63.2L660 618m0-98.75h80",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M660 466a6 6 0 0 1 6-6h68a6 6 0 0 1 6 6v168a6 6 0 0 1-6 6h-68a6 6 0 0 1-6-6z",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(674.105 635.778)"}),l.createElement("path",{d:"M1020 500c0 33.14-35.82 60-80 60s-80-26.86-80-60 35.82-60 80-60 80 26.86 80 60z",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(900.555 503.15)"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(937.505 503.15)"}),l.createElement("path",{d:"M701.04 550H804a6 6 0 0 0 6-6v-38a6 6 0 0 1 6-6h42.6m-157.55 50h-3.5",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M841.3 510.18 858.52 500l-17.22-10.18",stroke:"#000",fill:"none"}),l.createElement("defs",null,l.createElement("path",{d:"m205 0-28-72H64L36 0H1l101-248h38L239 0h-34zm-38-99-47-123c-12 45-31 82-46 123h93",id:"d"}),l.createElement("path",{d:"M96-169c-40 0-48 33-48 73s9 75 48 75c24 0 41-14 43-38l32 2c-6 37-31 61-74 61-59 0-76-41-82-99-10-93 101-131 147-64 4 7 5 14 7 22l-32 3c-4-21-16-35-41-35",id:"e"}),l.createElement("path",{d:"M59-47c-2 24 18 29 38 22v24C64 9 27 4 27-40v-127H5v-23h24l9-43h21v43h35v23H59v120",id:"f"}),l.createElement("path",{d:"M100-194c62-1 85 37 85 99 1 63-27 99-86 99S16-35 15-95c0-66 28-99 85-99zM99-20c44 1 53-31 53-75 0-43-8-75-51-75s-53 32-53 75 10 74 51 75",id:"g"}),l.createElement("path",{d:"M114-163C36-179 61-72 57 0H25l-1-190h30c1 12-1 29 2 39 6-27 23-49 58-41v29",id:"h"}),l.createElement("path",{d:"M232-93c-1 65-40 97-104 97C67 4 28-28 28-90v-158h33c8 89-33 224 67 224 102 0 64-133 71-224h33v155",id:"i"}),l.createElement("path",{d:"M135-143c-3-34-86-38-87 0 15 53 115 12 119 90S17 21 10-45l28-5c4 36 97 45 98 0-10-56-113-15-118-90-4-57 82-63 122-42 12 7 21 19 24 35",id:"j"}),l.createElement("path",{d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"k"}),l.createElement("path",{d:"M212-179c-10-28-35-45-73-45-59 0-87 40-87 99 0 60 29 101 89 101 43 0 62-24 78-52l27 14C228-24 195 4 139 4 59 4 22-46 18-125c-6-104 99-153 187-111 19 9 31 26 39 46",id:"l"}),l.createElement("path",{d:"M141-36C126-15 110 5 73 4 37 3 15-17 15-53c-1-64 63-63 125-63 3-35-9-54-41-54-24 1-41 7-42 31l-33-3c5-37 33-52 76-52 45 0 72 20 72 64v82c-1 20 7 32 28 27v20c-31 9-61-2-59-35zM48-53c0 20 12 33 32 33 41-3 63-29 60-74-43 2-92-5-92 41",id:"m"}),l.createElement("g",{id:"a"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#d"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 14.815 0)",xlinkHref:"#e"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 25.926 0)",xlinkHref:"#f"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 32.099 0)",xlinkHref:"#g"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 44.444 0)",xlinkHref:"#h"})),l.createElement("g",{id:"b"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#i"}),l.createElement("use",{transform:"translate(12.95) scale(.05)",xlinkHref:"#j"}),l.createElement("use",{transform:"translate(21.95) scale(.05)",xlinkHref:"#k"})),l.createElement("g",{id:"c"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#l"}),l.createElement("use",{transform:"translate(12.95) scale(.05)",xlinkHref:"#m"}),l.createElement("use",{transform:"translate(22.95) scale(.05)",xlinkHref:"#j"}),l.createElement("use",{transform:"translate(31.95) scale(.05)",xlinkHref:"#k"}))))))};var u=r(2490);const f={title:"Actor"},p="Actor (UML)",d={unversionedId:"toolbox/uml.actor",id:"toolbox/uml.actor",title:"Actor",description:"An Actor is an entity that interacts with a system.",source:"@site/docs/toolbox/uml.actor.mdx",sourceDirName:"toolbox",slug:"/toolbox/uml.actor",permalink:"/docs/toolbox/uml.actor",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/uml.actor.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1679082733,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Actor"},sidebar:"toolbox",previous:{title:"Catalogue",permalink:"/docs/toolbox"},next:{title:"Application Layer",permalink:"/docs/toolbox/softwarearchitecture.applicationlayer"}},h={},g=[],E={toc:g},b="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,a.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actor-uml"},"Actor (UML)"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"Actor")," is an entity that interacts with a system.\nAn ",(0,o.kt)("strong",{parentName:"p"},"Actor")," can be a person, or another system."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'"',(0,o.kt)("strong",{parentName:"em"},"Actors")," carry out ",(0,o.kt)("a",{parentName:"em",href:"uml.usecase"},"Use Cases"),'."')," ",(0,o.kt)(i.E,{name:"UML",pp:"99",mdxType:"BibRef"}))),(0,o.kt)(u.cx,{width:640,figure:1,title:"The UML-notation for an Actor.",mdxType:"Embed"},(0,o.kt)(m,{mdxType:"ActorsUml"})),(0,o.kt)(c.x,{mdxType:"BackButton"}))}y.isMDXComponent=!0},2480:()=>{}}]);