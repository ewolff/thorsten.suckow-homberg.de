(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[5094],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,u=d["".concat(o,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[d]="string"==typeof e?e:a,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4461:(e,t,n)=>{"use strict";n.d(t,{x:()=>a});var r=n(7294);function a(){return r.createElement("div",{style:{width:"100%",textAlign:"right"}},r.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},2490:(e,t,n)=>{"use strict";n.d(t,{$o:()=>m,_b:()=>p,cx:()=>i,e2:()=>o,t2:()=>s});var r=n(7294),a=n(5075),l=n(9943);function i(e){let{width:t,children:n,title:l,figure:i,modeAware:m}=e;return r.createElement("div",{style:{width:t,textAlign:"center",margin:20}},r.createElement("div",{className:!1!==m?"umlImg":""},n),r.createElement("div",{style:{textAlign:"center"}},r.createElement("sup",null,r.createElement("b",null,a.Z.isString(i)?i:`Figure ${i??1}`)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function m(e){let{id:t,source:n,title:a}=e;return r.createElement(i,{modeAware:!1,title:a,figure:`Source ${n}`},r.createElement(l.Z,{id:t}))}function o(e){let{url:t,figure:n,title:a}=e;return r.createElement(i,{modeAware:!1,figure:n,title:a},r.createElement("img",{alt:"{title}",src:t}))}function p(e){let{children:t,figure:n,title:a}=e;return r.createElement(i,{modeAware:!0,figure:n,title:a,children:t})}function s(e){let{when:t,where:n}=e;const[a,l]=n;return r.createElement("div",null,"This article was originally published in ",t," at ",r.createElement("a",{target:"_blank",href:l},a),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",r.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},6739:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,E:()=>a});var r=n(7294);function a(e){let{name:t,pp:n}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:a},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function l(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,r]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${r}.`),!0}));const a=`/docs/toolbox/${n}`;return r.createElement("a",{href:a,className:"glosRef"},t)}},9887:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>b,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var r,a=n(7462),l=n(7294),i=n(3905),m=n(4461),o=n(2490),p=n(6739);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:600,height:166,"aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("g",{transform:"translate(0 -100)"},l.createElement("path",{d:"M20 126a6 6 0 0 1 6-6h148a6 6 0 0 1 6 6v114a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6z",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(71.698 187.444)"}),l.createElement("path",{d:"M420 126a6 6 0 0 1 6-6h148a6 6 0 0 1 6 6v114a6 6 0 0 1-6 6H426a6 6 0 0 1-6-6z",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(459.352 187.444)"}),l.createElement("path",{d:"M418.6 183h-9.9m-9.9 0H379m-9.9 0h-19.8m-9.9 0h-19.8m-9.9 0h-19.8m-9.9 0h-19.8m-9.9 0h-19.8m-9.9 0h-19.8m-9.9 0H181m220.3 10.18L418.52 183l-17.22-10.18",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M181 183.5h-.5v-1h.5z",stroke:"#000",strokeWidth:.05}),l.createElement("path",{d:"M180 146a6 6 0 0 1 6-6h228a6 6 0 0 1 6 6v48a6 6 0 0 1-6 6H186a6 6 0 0 1-6-6z",fill:"none"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(270.358 174.922)"}),l.createElement("defs",null,l.createElement("path",{fill:"#000",d:"M212-179c-10-28-35-45-73-45-59 0-87 40-87 99 0 60 29 101 89 101 43 0 62-24 78-52l27 14C228-24 195 4 139 4 59 4 22-46 18-125c-6-104 99-153 187-111 19 9 31 26 39 46",id:"d"}),l.createElement("path",{fill:"#000",d:"M24 0v-261h32V0H24",id:"e"}),l.createElement("path",{fill:"#000",d:"M24-231v-30h32v30H24zM24 0v-190h32V0H24",id:"f"}),l.createElement("path",{fill:"#000",d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"g"}),l.createElement("path",{fill:"#000",d:"M117-194c89-4 53 116 60 194h-32v-121c0-31-8-49-39-48C34-167 62-67 57 0H25l-1-190h30c1 10-1 24 2 32 11-22 29-35 61-36",id:"h"}),l.createElement("path",{fill:"#000",d:"M59-47c-2 24 18 29 38 22v24C64 9 27 4 27-40v-127H5v-23h24l9-43h21v43h35v23H59v120",id:"i"}),l.createElement("path",{fill:"#000",d:"M185-189c-5-48-123-54-124 2 14 75 158 14 163 119 3 78-121 87-175 55-17-10-28-26-33-46l33-7c5 56 141 63 141-1 0-78-155-14-162-118-5-82 145-84 179-34 5 7 8 16 11 25",id:"j"}),l.createElement("path",{fill:"#000",d:"M84 4C-5 8 30-112 23-190h32v120c0 31 7 50 39 49 72-2 45-101 50-169h31l1 190h-30c-1-10 1-25-2-33-11 22-28 36-60 37",id:"k"}),l.createElement("path",{fill:"#000",d:"M115-194c55 1 70 41 70 98S169 2 115 4C84 4 66-9 55-30l1 105H24l-1-265h31l2 30c10-21 28-34 59-34zm-8 174c40 0 45-34 45-75s-6-73-45-74c-42 0-51 32-51 76 0 43 10 73 51 73",id:"l"}),l.createElement("path",{fill:"#000",d:"M114-163C36-179 61-72 57 0H25l-1-190h30c1 12-1 29 2 39 6-27 23-49 58-41v29",id:"m"}),l.createElement("path",{d:"M156-25 96-89v-11l60-65h29v5l-59 66 60 64v5h-30zm-82 0L15-89v-11l59-65h29v5L44-94l59 64v5H74",id:"n"}),l.createElement("path",{d:"M84 4C-5 8 30-112 23-190h32v120c0 31 7 50 39 49 72-2 45-101 50-169h31l1 190h-30c-1-10 1-25-2-33-11 22-28 36-60 37",id:"o"}),l.createElement("path",{d:"M135-143c-3-34-86-38-87 0 15 53 115 12 119 90S17 21 10-45l28-5c4 36 97 45 98 0-10-56-113-15-118-90-4-57 82-63 122-42 12 7 21 19 24 35",id:"p"}),l.createElement("path",{d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"q"}),l.createElement("path",{d:"M126-25H97v-5l59-64-59-66v-5h29l60 65v11zm-82 0H15v-5l59-64-59-66v-5h29l59 65v11",id:"r"}),l.createElement("g",{id:"a"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#d"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 15.988 0)",xlinkHref:"#e"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 20.864 0)",xlinkHref:"#f"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 25.74 0)",xlinkHref:"#g"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 38.086 0)",xlinkHref:"#h"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 50.432 0)",xlinkHref:"#i"})),l.createElement("g",{id:"b"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#j"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 14.815 0)",xlinkHref:"#k"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 27.16 0)",xlinkHref:"#l"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 39.506 0)",xlinkHref:"#l"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 51.852 0)",xlinkHref:"#e"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 56.728 0)",xlinkHref:"#f"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 61.605 0)",xlinkHref:"#g"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 73.95 0)",xlinkHref:"#m"})),l.createElement("g",{id:"c"},l.createElement("use",{transform:"scale(.0605)",xlinkHref:"#n"}),l.createElement("use",{transform:"matrix(.0605 0 0 .0605 12.099 0)",xlinkHref:"#o"}),l.createElement("use",{transform:"matrix(.0605 0 0 .0605 24.198 0)",xlinkHref:"#p"}),l.createElement("use",{transform:"matrix(.0605 0 0 .0605 35.086 0)",xlinkHref:"#q"}),l.createElement("use",{transform:"matrix(.0605 0 0 .0605 47.185 0)",xlinkHref:"#r"}))))))},c="data:image/png;base64,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",f={title:"Dependency"},u="Dependency (UML)",h={unversionedId:"toolbox/uml.dependency",id:"toolbox/uml.dependency",title:"Dependency",description:"A Dependency between a client (dependent) and a supplier (dependee) can be illustrated with a dashed line with its tail starting at the client and an open arrowhead ending at the supplier.",source:"@site/docs/toolbox/uml.dependency.mdx",sourceDirName:"toolbox",slug:"/toolbox/uml.dependency",permalink:"/docs/toolbox/uml.dependency",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/uml.dependency.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1679153884,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"Dependency"},sidebar:"toolbox",previous:{title:"Core Domain",permalink:"/docs/toolbox/ddd.coredomain"},next:{title:"Dependency Injection",permalink:"/docs/toolbox/softwaredesign.dependencyinjection"}},k={},v=[{value:"Dependency Relationship Keywords",id:"dependency-relationship-keywords",level:3},{value:"Example",id:"example",level:2}],g={toc:v},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependency-uml"},"Dependency (UML)"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Dependency")," between a ",(0,i.kt)("strong",{parentName:"p"},"client")," (",(0,i.kt)("em",{parentName:"p"},"dependent"),") and a ",(0,i.kt)("strong",{parentName:"p"},"supplier")," (",(0,i.kt)("a",{parentName:"p",href:"https://en.wiktionary.org/wiki/dependee"},(0,i.kt)("em",{parentName:"a"},"dependee")),") can be illustrated with a ",(0,i.kt)("strong",{parentName:"p"},"dashed")," line with its tail starting at the ",(0,i.kt)("strong",{parentName:"p"},"client")," and an ",(0,i.kt)("strong",{parentName:"p"},"open arrowhead")," ending at the ",(0,i.kt)("strong",{parentName:"p"},"supplier"),"."),(0,i.kt)("p",null,"The notation is used to depict a ",(0,i.kt)("strong",{parentName:"p"},"Dependency")," between a ",(0,i.kt)("strong",{parentName:"p"},"client")," and a ",(0,i.kt)("strong",{parentName:"p"},"supplier"),": If the ",(0,i.kt)("strong",{parentName:"p"},"supplier")," changes, the ",(0,i.kt)("strong",{parentName:"p"},"client")," may have to change, too."),(0,i.kt)(o._b,{width:640,figure:1,title:"The UML-notation for a Dependency. The stereotype indicates that Client requires Supplier for its implementation.",mdxType:"UmlEmbed"},(0,i.kt)(d,{mdxType:"DependencyUmlSvg"})),(0,i.kt)("h3",{id:"dependency-relationship-keywords"},"Dependency Relationship Keywords"),(0,i.kt)("p",null,"While there are notations available with ",(0,i.kt)("strong",{parentName:"p"},"UML")," that can be used for other semantics and specifications, or that already imply a dependency\n(such as ",(0,i.kt)(p.A,{name:"Associations",file:"uml.association",mdxType:"GlosRef"}),", ",(0,i.kt)(p.A,{name:"Aggregation",file:"uml.aggregation",mdxType:"GlosRef"}),"\nor ",(0,i.kt)(p.A,{name:"Composition",file:"uml.composition",mdxType:"GlosRef"})," ), the context of a basic ",(0,i.kt)("strong",{parentName:"p"},"Dependency")," can further be specified with one of the\nfollowing ",(0,i.kt)(p.A,{name:"keywords",file:"uml.keyword",mdxType:"GlosRef"})," (",(0,i.kt)(p.E,{name:"UML",pp:"48",mdxType:"BibRef"})," and ",(0,i.kt)(p.E,{name:"ADU",pp:"288",mdxType:"BibRef"}),"):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Stereotype / Keyword"),(0,i.kt)("th",{parentName:"tr",align:null},"Relationship"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabcall\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," calls a method of the ",(0,i.kt)("strong",{parentName:"td"},"supplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabcreate\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," creates instances of the ",(0,i.kt)("strong",{parentName:"td"},"supplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabderive\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Abstraction"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," is derived from the ",(0,i.kt)("strong",{parentName:"td"},"suplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabinstantiate\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," gets instantiated from the ",(0,i.kt)("strong",{parentName:"td"},"supplier"),". If the ",(0,i.kt)("strong",{parentName:"td"},"client")," is a class, the ",(0,i.kt)("strong",{parentName:"td"},"supplier")," is a ",(0,i.kt)(p.A,{name:"metaclass",file:"cs.metaclass",mdxType:"GlosRef"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabpermit\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Permission"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," has the permission to access the private members of the ",(0,i.kt)("strong",{parentName:"td"},"supplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabrealize\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Realization"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," realizes the ",(0,i.kt)("strong",{parentName:"td"},"supplier"),", e.g. if the ",(0,i.kt)("strong",{parentName:"td"},"supplier")," is an ",(0,i.kt)("em",{parentName:"td"},"interface")," or an ",(0,i.kt)("em",{parentName:"td"},"abstract")," element.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabrefine\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Abstraction"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," refines the semantic level of the ",(0,i.kt)("strong",{parentName:"td"},"supplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabsubstitute\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Substitution"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," can be substituted with the ",(0,i.kt)("strong",{parentName:"td"},"supplier"),", e.g. if they share the same type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabtrace\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Abstraction"),(0,i.kt)("td",{parentName:"tr",align:null},"Semantical requirements are traceable from the ",(0,i.kt)("strong",{parentName:"td"},"client")," to the ",(0,i.kt)("strong",{parentName:"td"},"supplier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\xabuse\xbb")),(0,i.kt)("td",{parentName:"tr",align:null},"Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("strong",{parentName:"td"},"client")," requires the ",(0,i.kt)("strong",{parentName:"td"},"supplier")," for its implementation")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(o.cx,{modeAware:!0,width:640,figure:2,title:"A Usage-Dependency: Button (client) calls a method of Observer (supplier). If Observer changes, Button has to change, too.",mdxType:"Embed"},(0,i.kt)("img",{src:c})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'    class Button {\n\n        click () {\n            const me = this;\n\n            me.observers.map(observer => observer.notify("click", me));\n        }\n\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'"A dependency indicates that an element on one end of the relationship, in some manner, depends on the element on the other end of the relationship."')," ",(0,i.kt)(p.E,{name:"OOA",pp:"111",mdxType:"BibRef"}))),(0,i.kt)(m.x,{mdxType:"BackButton"}))}b.isMDXComponent=!0},2480:()=>{}}]);