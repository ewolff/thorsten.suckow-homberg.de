(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[8702],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,f=d["".concat(o,".").concat(u)]||d[u]||p[u]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2490:(e,t,a)=>{"use strict";a.d(t,{$o:()=>s,_b:()=>m,cx:()=>i,e2:()=>o,t2:()=>c});var n=a(7294),r=a(5075),l=a(9943);function i(e){let{width:t,children:a,title:l,figure:i,modeAware:s}=e;const o=n.createRef();return n.createElement("div",{style:{width:t,textAlign:"center",margin:20},ref:o},n.createElement("div",{className:!1!==s?"umlImg":""},a),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,r.Z.isString(i)?i:`Figure ${i??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function s(e){let{id:t,source:a,title:r}=e;return n.createElement(i,{modeAware:!1,title:r,figure:`Source ${a}`},n.createElement(l.Z,{id:t}))}function o(e){let{url:t,figure:a,title:r}=e;return n.createElement(i,{modeAware:!1,figure:a,title:r},n.createElement("img",{alt:"{title}",src:t}))}function m(e){let{children:t,figure:a,title:r}=e;return n.createElement(i,{modeAware:!0,figure:a,title:r,children:t})}function c(e){let{when:t,where:a}=e;const[r,l]=a;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:l},r),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},6739:(e,t,a)=>{"use strict";a.d(t,{A:()=>l,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function l(e){let{name:t,file:a}=e;a=a.startsWith("sd.")?a.replace("sd.","softwaredesign."):a;const r=`/docs/Glossary/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},5400:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n,r=a(7462),l=a(7294),i=a(3905),s=a(6739);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}const m=e=>{let{title:t,titleId:a,...r}=e;return l.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:417.56,height:240,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,n||(n=l.createElement("g",{transform:"translate(-622.444 -420)"},l.createElement("path",{d:"M719.75 479.75c0 10.9-8.84 19.75-19.75 19.75-10.9 0-19.75-8.84-19.75-19.75 0-10.9 8.84-19.75 19.75-19.75 10.9 0 19.75 8.84 19.75 19.75zM700 499.5v49.3a20.7 20.7 0 0 0 3.2 11.07L740 618m-40-63.2L660 618m0-98.75h80",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M660 466a6 6 0 0 1 6-6h68a6 6 0 0 1 6 6v168a6 6 0 0 1-6 6h-68a6 6 0 0 1-6-6z",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(644.444 635.778)"}),l.createElement("path",{d:"M1020 500c0 33.14-35.82 60-80 60s-80-26.86-80-60 35.82-60 80-60 80 26.86 80 60z",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(881.555 503.15)"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(918.555 503.15)"}),l.createElement("path",{d:"M701.04 550H804a6 6 0 0 0 6-6v-38a6 6 0 0 1 6-6h42.6m-157.55 50h-3.5",stroke:"#000",fill:"none"}),l.createElement("path",{d:"M841.3 510.18 858.52 500l-17.22-10.18",stroke:"#000",fill:"none"}),l.createElement("defs",null,l.createElement("path",{d:"m205 0-28-72H64L36 0H1l101-248h38L239 0h-34zm-38-99-47-123c-12 45-31 82-46 123h93",id:"d"}),l.createElement("path",{d:"M96-169c-40 0-48 33-48 73s9 75 48 75c24 0 41-14 43-38l32 2c-6 37-31 61-74 61-59 0-76-41-82-99-10-93 101-131 147-64 4 7 5 14 7 22l-32 3c-4-21-16-35-41-35",id:"e"}),l.createElement("path",{d:"M100-194c62-1 85 37 85 99 1 63-27 99-86 99S16-35 15-95c0-66 28-99 85-99zM99-20c44 1 53-31 53-75 0-43-8-75-51-75s-53 32-53 75 10 74 51 75",id:"f"}),l.createElement("path",{d:"M84 4C-5 8 30-112 23-190h32v120c0 31 7 50 39 49 72-2 45-101 50-169h31l1 190h-30c-1-10 1-25-2-33-11 22-28 36-60 37",id:"g"}),l.createElement("path",{d:"M117-194c89-4 53 116 60 194h-32v-121c0-31-8-49-39-48C34-167 62-67 57 0H25l-1-190h30c1 10-1 24 2 32 11-22 29-35 61-36",id:"h"}),l.createElement("path",{d:"M59-47c-2 24 18 29 38 22v24C64 9 27 4 27-40v-127H5v-23h24l9-43h21v43h35v23H59v120",id:"i"}),l.createElement("path",{d:"M141-36C126-15 110 5 73 4 37 3 15-17 15-53c-1-64 63-63 125-63 3-35-9-54-41-54-24 1-41 7-42 31l-33-3c5-37 33-52 76-52 45 0 72 20 72 64v82c-1 20 7 32 28 27v20c-31 9-61-2-59-35zM48-53c0 20 12 33 32 33 41-3 63-29 60-74-43 2-92-5-92 41",id:"j"}),l.createElement("path",{d:"M85-194c31 0 48 13 60 33l-1-100h32l1 261h-30c-2-10 0-23-3-31C134-8 116 4 85 4 32 4 16-35 15-94c0-66 23-100 70-100zm9 24c-40 0-46 34-46 75 0 40 6 74 45 74 42 0 51-32 51-76 0-42-9-74-50-73",id:"k"}),l.createElement("path",{d:"M30 0v-248h187v28H63v79h144v27H63v87h162V0H30",id:"l"}),l.createElement("path",{d:"M210-169c-67 3-38 105-44 169h-31v-121c0-29-5-50-35-48C34-165 62-65 56 0H25l-1-190h30c1 10-1 24 2 32 10-44 99-50 107 0 11-21 27-35 58-36 85-2 47 119 55 194h-31v-121c0-29-5-49-35-48",id:"m"}),l.createElement("path",{d:"M115-194c55 1 70 41 70 98S169 2 115 4C84 4 66-9 55-30l1 105H24l-1-265h31l2 30c10-21 28-34 59-34zm-8 174c40 0 45-34 45-75s-6-73-45-74c-42 0-51 32-51 76 0 43 10 73 51 73",id:"n"}),l.createElement("path",{d:"M24 0v-261h32V0H24",id:"o"}),l.createElement("path",{d:"M179-190 93 31C79 59 56 82 12 73V49c39 6 53-20 64-50L1-190h34L92-34l54-156h33",id:"p"}),l.createElement("path",{d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"q"}),l.createElement("g",{id:"a"},l.createElement("use",{transform:"rotate(.413) scale(.06173)",xlinkHref:"#d"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 14.815 0)",xlinkHref:"#e"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 25.926 0)",xlinkHref:"#e"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 37.037 0)",xlinkHref:"#f"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 49.383 0)",xlinkHref:"#g"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 61.728 0)",xlinkHref:"#h"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 74.074 0)",xlinkHref:"#i"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 80.247 0)",xlinkHref:"#j"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 92.593 0)",xlinkHref:"#h"}),l.createElement("use",{transform:"matrix(.06173 0 0 .06173 104.938 0)",xlinkHref:"#i"})),l.createElement("g",{id:"b"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#d"}),l.createElement("use",{transform:"translate(12) scale(.05)",xlinkHref:"#k"}),l.createElement("use",{transform:"translate(22) scale(.05)",xlinkHref:"#k"})),l.createElement("g",{id:"c"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#l"}),l.createElement("use",{transform:"translate(12) scale(.05)",xlinkHref:"#m"}),l.createElement("use",{transform:"translate(26.95) scale(.05)",xlinkHref:"#n"}),l.createElement("use",{transform:"translate(36.95) scale(.05)",xlinkHref:"#o"}),l.createElement("use",{transform:"translate(40.9) scale(.05)",xlinkHref:"#f"}),l.createElement("use",{transform:"translate(50.9) scale(.05)",xlinkHref:"#p"}),l.createElement("use",{transform:"translate(59.9) scale(.05)",xlinkHref:"#q"}),l.createElement("use",{transform:"translate(69.9) scale(.05)",xlinkHref:"#q"}))))))};var c=a(2490);const d={title:"Use Case 1 - Adding a new employee",slug:"Use-Case-1-Adding-a-new-employee"},p="Use Case 1 - Adding a new employee.",u={unversionedId:"articles/agp-the-payroll-system/use-case-1-adding-a-new-employee",id:"articles/agp-the-payroll-system/use-case-1-adding-a-new-employee",title:"Use Case 1 - Adding a new employee",description:"A new employee is added by the receipt of an AddEmp transaction. This transaction contains the employee's name, addess, and assigned employee number. The transaction has the following three forms:",source:"@site/docs/articles/agp-the-payroll-system/use-case-1-adding-a-new-employee.mdx",sourceDirName:"articles/agp-the-payroll-system",slug:"/articles/agp-the-payroll-system/Use-Case-1-Adding-a-new-employee",permalink:"/docs/articles/agp-the-payroll-system/Use-Case-1-Adding-a-new-employee",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/agp-the-payroll-system/use-case-1-adding-a-new-employee.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1678558049,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Use Case 1 - Adding a new employee",slug:"Use-Case-1-Adding-a-new-employee"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/articles/agp-the-payroll-system/introduction"},next:{title:"Dependency Injection in JavaScript",permalink:"/docs/articles/dependency-injection-in-javascript/"}},f={},h=[{value:"Requirement Analysis",id:"requirement-analysis",level:2},{value:"Takeaways",id:"takeaways",level:4},{value:"Actors",id:"actors",level:3},{value:"Design",id:"design",level:2}],y={toc:h},k="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-case-1---adding-a-new-employee"},"Use Case 1 - Adding a new employee."),(0,i.kt)("admonition",{title:"Use Case 1 - Adding a new employee",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"A new employee is added by the receipt of an ",(0,i.kt)("inlineCode",{parentName:"em"},"AddEmp")," transaction. This transaction contains the employee's name, addess, and assigned employee number. The transaction has the following three forms:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ AddEmp <EmpId> "<name>" "<address>" "<address>" H <hourly-rate>\n\n$ AddEmp <EmpId> "<name>" "<address>" "<address>" S <monthly-salary>\n\n$ AddEmp <EmpId> "<name>" "<address>" "<address>" C <hourly-rate> <commission-rate>\n')),(0,i.kt)("p",{parentName:"admonition"},"The employee's record is created with its field assigned appropriately."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Alternative:",(0,i.kt)("br",null),"\nAn error in the transaction structure"),(0,i.kt)("br",null),"\nIf the transaction structure is inappropriate, it is printed out in an error message, and no action is taken.")),(0,i.kt)("h2",{id:"requirement-analysis"},"Requirement Analysis"),(0,i.kt)("p",null,"The Use Case describes various ways how ",(0,i.kt)("em",{parentName:"p"},"Employee"),"-data can be added to the system.\n",(0,i.kt)("inlineCode",{parentName:"p"},"AddEmp")," could be implemented as a polyadic function that receives 6 to 7 arguments,\ndescribing an ",(0,i.kt)("em",{parentName:"p"},"Employee"),"'s personal information and the salary the ",(0,i.kt)("em",{parentName:"p"},"Employee_receives, and\nthe type of _salary")," (",(0,i.kt)("inlineCode",{parentName:"p"},"H"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"). If the salary type is ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", an ",(0,i.kt)("em",{parentName:"p"},"Employee")," requires an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-rate"),".\nObviously, errors happening during transactions must be treated with care, appropriate error messages should be displayed.\nThis is particularly important for the input provided by the client, e.g. salary types must be validated as well as the\nrates; also, check if ",(0,i.kt)("inlineCode",{parentName:"p"},"empId"),"s already exist and prevent multiple occurences of the same ",(0,i.kt)("inlineCode",{parentName:"p"},"empId"),"."),(0,i.kt)("h4",{id:"takeaways"},"Takeaways"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"validate user input:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"empId"),": existing? valid format?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salaryType"),": is it one of ",(0,i.kt)("inlineCode",{parentName:"li"},"H"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"S"),"?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salary")," should probably be greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"0")))),(0,i.kt)("li",{parentName:"ul"},"display error messages if a transaction failed")),(0,i.kt)("h3",{id:"actors"},"Actors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Accountant")," - adds a new ",(0,i.kt)("em",{parentName:"p"},"Employee")," to the system."),(0,i.kt)(c.cx,{title:'Actor "Accountant" carries out the "Add Employee"-Use Case.',mdxType:"Embed"},(0,i.kt)(m,{mdxType:"Actor"})),(0,i.kt)("p",null,"The ",(0,i.kt)(s.A,{name:"Actor",file:"uml.actor",mdxType:"GlosRef"})," carrying out the ",(0,i.kt)(s.A,{name:"Use Case",file:"uml.usecase",mdxType:"GlosRef"})," is an ",(0,i.kt)("strong",{parentName:"p"},"Accountant"),'. Of course,\nany other "role" would be eligible, but since the system exists in a ',(0,i.kt)(s.A,{name:"Domain",file:"sd.domain",mdxType:"GlosRef"})," dealing with\n",(0,i.kt)("em",{parentName:"p"},"Accounting"),", I assume ",(0,i.kt)("strong",{parentName:"p"},"Accountant")," describes (a part of the) target audience of the system quite well."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("p",null,"The initial design should consist of 3 parts: An ",(0,i.kt)("strong",{parentName:"p"},"Application Layer"),", a ",(0,i.kt)("strong",{parentName:"p"},"Repository")," for managing transaction-calls\nand an ",(0,i.kt)("inlineCode",{parentName:"p"},"Employee"),"-",(0,i.kt)(s.A,{name:"Entity",file:"sd.entity",mdxType:"GlosRef"}),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Payroll")," exists in the ",(0,i.kt)("strong",{parentName:"li"},"Application Layer")," and is the main entry point for interacting with the system, in the form\nof a traditional ",(0,i.kt)(s.A,{name:"Facade",file:"sd.facade",mdxType:"GlosRef"}),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)(s.A,{name:"Repository",file:"sd.repository",mdxType:"GlosRef"})," would be the ",(0,i.kt)("inlineCode",{parentName:"li"},"EmployeeRepository")," and encapsulates the\nrequired infrastructure for persisting ",(0,i.kt)("inlineCode",{parentName:"li"},"Employee"),"-",(0,i.kt)("strong",{parentName:"li"},"Entity"),"s."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Entity")," would be the ",(0,i.kt)("inlineCode",{parentName:"li"},"Employee")," itself.")))}g.isMDXComponent=!0},2480:()=>{}}]);