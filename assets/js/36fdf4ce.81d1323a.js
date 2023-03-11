"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),o=n(2802),i=n(9960),s=n(3919),l=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:i},i))}function d(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},6739:(e,t,n)=>{n.d(t,{A:()=>o,E:()=>a});var r=n(7294);function a(e){let{name:t,pp:n}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return r.createElement("a",{href:a},"[",r.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function o(e){let{name:t,file:n}=e;n=n.startsWith("sd.")?n.replace("sd.","softwaredesign."):n;const a=`/docs/Glossary/${n}`;return r.createElement("a",{href:a,className:"glosRef"},t)}},7896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(6739),i=n(2991);const s={sidebar_position:1,title:"Introduction",slug:"introduction",description:"Agile Software Development Workshop"},l=void 0,c={unversionedId:"articles/agp-the-payroll-system/index",id:"articles/agp-the-payroll-system/index",title:"Introduction",description:"Agile Software Development Workshop",source:"@site/docs/articles/agp-the-payroll-system/index.mdx",sourceDirName:"articles/agp-the-payroll-system",slug:"/articles/agp-the-payroll-system/introduction",permalink:"/docs/articles/agp-the-payroll-system/introduction",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/agp-the-payroll-system/index.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1678558049,formattedLastUpdatedAt:"Mar 11, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"introduction",description:"Agile Software Development Workshop"},sidebar:"docs",previous:{title:"Articles",permalink:"/docs/articles/"},next:{title:"Use Case 1 - Adding a new employee",permalink:"/docs/articles/agp-the-payroll-system/Use-Case-1-Adding-a-new-employee"}},m={},p=[{value:"A brief description of the Payroll System",id:"a-brief-description-of-the-payroll-system",level:2},{value:"Domain keywords",id:"domain-keywords",level:3},{value:"The rules",id:"the-rules",level:2},{value:"A note on testing",id:"a-note-on-testing",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Payroll System was introduced in Robert C. Martins Book ",(0,a.kt)("strong",{parentName:"p"},"Agile Software Development")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/bibliography#asd"},(0,a.kt)("strong",{parentName:"a"},"[ASD]")),"  and describes a batch Payroll System."),(0,a.kt)("p",null,"In preparation of Section 3 and its subsequent chapters of the book, I decided to implement the Use Cases following agile principles and compare then later on with the solution provided by Robert."),(0,a.kt)("h2",{id:"a-brief-description-of-the-payroll-system"},"A brief description of the Payroll System"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The system consists of a database of the ",(0,a.kt)("em",{parentName:"li"},"Employees")," and their associated data."),(0,a.kt)("li",{parentName:"ol"},"The system must pay each ",(0,a.kt)("em",{parentName:"li"},"Employee"),": ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The correct amount has to be paid."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("em",{parentName:"li"},"Employee")," must be paid on time."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("em",{parentName:"li"},"Employee")," must be paid by the method they specify. "),(0,a.kt)("li",{parentName:"ol"},"Various deductions must be taken from the ",(0,a.kt)("em",{parentName:"li"},"Employee"),"'s pay. ")))),(0,a.kt)("p",null,"The following technical- and (non)-functional-criteria can be observed from this introduction: The database tells us that data needs to be persisted by the application.\nA ",(0,a.kt)("strong",{parentName:"p"},"functional criteria")," would be correct payment considering various deductions, and a ",(0,a.kt)("strong",{parentName:"p"},"non-functional criteria")," would be the fact that ",(0,a.kt)("em",{parentName:"p"},"Employees"),' must be paid on time: It involves functional criteria in the form of "the system must compute the date ',(0,a.kt)("strong",{parentName:"p"},"when")," an ",(0,a.kt)("em",{parentName:"p"},"Employee"),' gets paid", but it also includes non-functional criteria: The system must be stable and highly available to make sure transactions (i.e. money transfer) are executed on time.'),(0,a.kt)("h3",{id:"domain-keywords"},"Domain keywords"),(0,a.kt)("p",null,"To get a better understanding of the domain we're dealing with, let's extract and guess a few domain keywords that we're probably using throughout the project and which should become terms of the ",(0,a.kt)(o.A,{name:"Ubiquitous Language",file:"ddd.ubiquitouslanguage",mdxType:"GlosRef"})," we're establishing for the project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payroll, Employee, Payment, Salary, Deduction, Accounting")),(0,a.kt)("p",null,"Since we're implementing a Payroll System, the system will be part of an ",(0,a.kt)("strong",{parentName:"p"},"Accounting Domain"),". Let's see if we can get a grasp of a more specific ",(0,a.kt)(o.A,{name:"Core Domain",file:"ddd.coredomain",mdxType:"GlosRef"})," during the course of the implementation."),(0,a.kt)("h2",{id:"the-rules"},"The rules"),(0,a.kt)("p",null,"I stick to the following rules while implementing my solution with the knowledge I have from the brief introduction of the system"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"One Use Case equals one sprint."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/home"},"Pragmatism over Dogmatism.")),(0,a.kt)("li",{parentName:"ol"},"Implement the Use case given only the information the Use Case provide. A Use Case represents a Story that has to be implemented in ",(0,a.kt)("em",{parentName:"li"},"this")," sprint. There is no knowledge of the requirements given ",(0,a.kt)("em",{parentName:"li"},"future")," Use Cases."),(0,a.kt)("li",{parentName:"ol"},"Establish a healthy code base with a test-first approach. "),(0,a.kt)("li",{parentName:"ol"},"Prevent Over-Engineering by strictly following Rules 2, 3 and 4.")),(0,a.kt)("h3",{id:"a-note-on-testing"},"A note on testing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"I did not write a scripting system for the acceptance tests: The acceptance tests described with the Use Cases are written with PHPUnit"),(0,a.kt)("li",{parentName:"ol"},"I consider the inputs defined with the acceptance tests as an important requirement of the customer, so I adhere to the inputs by mapping them to function arguments. The instantiation of concrete objects is leveraged to the lower level API. If you think this is rather unusual, the acceptance tests describe the interaction of the customer with the ",(0,a.kt)("em",{parentName:"li"},"application"),". The customer knows the input parameters, but has no idea about any abstract object specification. ")),(0,a.kt)("p",null,"This is an ongoing article series."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);