"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[1868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4461:(e,t,n)=>{n.d(t,{x:()=>r});var a=n(7294);function r(){return a.createElement("div",{style:{width:"100%",textAlign:"right"}},a.createElement("a",{style:{textDecoration:"underline"},onClick:()=>history.go(-1),href:"#"},"Back"))}},6739:(e,t,n)=>{n.d(t,{A:()=>o,E:()=>r});var a=n(7294);function r(e){let{name:t,pp:n}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return a.createElement("a",{href:r},"[",a.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),n?`, ${n.includes("-")?"pp":"p"}. ${n}`:"","]")}function o(e){let{name:t,file:n}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,a]=e;if(n.startsWith(`${t}.`))return n=n.replace(`${t}.`,`${a}.`),!0}));const r=`/docs/toolbox/${n}`;return a.createElement("a",{href:r,className:"glosRef"},t)}},1498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(6739),l=n(4461);const s={title:"Metaclass"},i="Metaclass (Computer Science)",c={unversionedId:"toolbox/computerscience.metaclass",id:"toolbox/computerscience.metaclass",title:"Metaclass",description:"A Metaclass in Object-oriented programming is a class whose instances contain class-definitions. Metaclasses can",source:"@site/docs/toolbox/computerscience.metaclass.mdx",sourceDirName:"toolbox",slug:"/toolbox/computerscience.metaclass",permalink:"/docs/toolbox/computerscience.metaclass",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/computerscience.metaclass.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1680442239,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"Metaclass"},sidebar:"toolbox",previous:{title:"Liskov Substitution Principle",permalink:"/docs/toolbox/softwaredesign.liskovsubstitutionprinciple"},next:{title:"Pure Function",permalink:"/docs/toolbox/computerscience.purefunction"}},p={},m=[{value:"Python Example",id:"python-example",level:2},{value:"Employee Example",id:"employee-example",level:4}],u={toc:m},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metaclass-computer-science"},"Metaclass (Computer Science)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Metaclass")," in Object-oriented programming is a class whose instances contain class-definitions. ",(0,r.kt)("strong",{parentName:"p"},"Metaclasses")," can\nbe used to define behavior and attributes of classes."),(0,r.kt)("h2",{id:"python-example"},"Python Example"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Python"),", classes are objects that can be used to construct instances."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Classes provide a means of bundling data and functionality together. Creating a new class creates a new ',(0,r.kt)("strong",{parentName:"em"},"type")," of object, allowing new ",(0,r.kt)("strong",{parentName:"em"},"instances"),' of that type to be made. Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by its class) for modifying its state."')," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/classes.html"},"https://docs.python.org/3/tutorial/classes.html"))),(0,r.kt)("h4",{id:"employee-example"},"Employee Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Employee: pass\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metaclass")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(type(Employee)); # <class 'type'>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Employee")," is now a ",(0,r.kt)(o.A,{name:"First Class Citizen",file:"cs.firstclasscitizen",mdxType:"GlosRef"}),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it can be assigned to other variables: ",(0,r.kt)("inlineCode",{parentName:"li"},"EmployeeFactory = Employee")),(0,r.kt)("li",{parentName:"ul"},"it be passed to other methods as an argument: ",(0,r.kt)("inlineCode",{parentName:"li"},"print(Employee)"))),(0,r.kt)("p",null,"Additionally, properties can be added during runtime: ",(0,r.kt)("inlineCode",{parentName:"p"},'Employee.prop = "value"'),";"),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee")," as a method will create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"emp = Employee();\nprint(type(emp)); # <class '__main__.Employee'>\n")),(0,r.kt)("admonition",{title:"In a nutshell",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," is the ",(0,r.kt)("strong",{parentName:"li"},"Metaclass")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"Employee"),"."),(0,r.kt)("li",{parentName:"ul"},"thus, ",(0,r.kt)("inlineCode",{parentName:"li"},"Employee")," is an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"type"),"."),(0,r.kt)("li",{parentName:"ul"},"calling ",(0,r.kt)("inlineCode",{parentName:"li"},"Employee()")," creates and returns an instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"Employee"),"."))),(0,r.kt)(l.x,{mdxType:"BackButton"}),(0,r.kt)("hr",null),(0,r.kt)("p",null," See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/pdf/10.1145/286936.286949"},"Bouraqadi-Saidani, Ledoux, Rivard: Safe Metaclass Programming")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.researchgate.net/publication/229023549_Programming_with_ObjVLisp_metaclasses_in_Smalltalk-80"},"Briot, Cointe: Programming with ObjVLisp metaclasses in Smalltalk-80"))))}f.isMDXComponent=!0}}]);