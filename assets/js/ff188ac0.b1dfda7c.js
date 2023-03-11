"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[8889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6739:(e,t,a)=>{a.d(t,{A:()=>o,E:()=>r});var n=a(7294);function r(e){let{name:t,pp:a}=e;const r=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:r},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),a?`, ${a.includes("-")?"pp":"p"}. ${a}`:"","]")}function o(e){let{name:t,file:a}=e;a=a.startsWith("sd.")?a.replace("sd.","softwaredesign."):a;const r=`/docs/Glossary/${a}`;return n.createElement("a",{href:r,className:"glosRef"},t)}},166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(6739);const s={title:"Separate Query From Modifier"},i="Separate Query From Modifier (Refactoring)",p={unversionedId:"Glossary/refactoring.separatequeryfrommodifier",id:"Glossary/refactoring.separatequeryfrommodifier",title:"Separate Query From Modifier",description:"Separate Query From Modifier is a refactoring that helps with creating side effect free functions.",source:"@site/docs/Glossary/refactoring.separatequeryfrommodifier.mdx",sourceDirName:"Glossary",slug:"/Glossary/refactoring.separatequeryfrommodifier",permalink:"/docs/Glossary/refactoring.separatequeryfrommodifier",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/Glossary/refactoring.separatequeryfrommodifier.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1678558049,formattedLastUpdatedAt:"Mar 11, 2023",frontMatter:{title:"Separate Query From Modifier"},sidebar:"toolbox",previous:{title:"Repository",permalink:"/docs/Glossary/softwaredesign.repository"},next:{title:"Separation of Concerns",permalink:"/docs/Glossary/softwaredesign.separationofconcerns"}},l={},m=[],c={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"separate-query-from-modifier-refactoring"},"Separate Query From Modifier (Refactoring)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Separate Query From Modifier")," is a refactoring that helps with creating side effect free functions."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Separate Query From Modifier"),"-refactoring is used to separate a modifier (i.e. some ",(0,r.kt)("em",{parentName:"p"},"setter"),")\nfrom a query (i.e. some ",(0,r.kt)("em",{parentName:"p"},"getter"),"). Any ",(0,r.kt)("em",{parentName:"p"},"getter")," that also calls a ",(0,r.kt)("em",{parentName:"p"},"setter")," is usually a good candidate for the violation of the ",(0,r.kt)("strong",{parentName:"p"},"SRP"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"A good rule to follow is to say that any method that returns a value should not have observable side effects"'),". ",(0,r.kt)(o.E,{name:"ref",pp:"279",mdxType:"BibRef"}))),(0,r.kt)("admonition",{title:"Be wary of the context",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you're using a coarse-grained ",(0,r.kt)(o.A,{name:"Facade",file:"sd.facade",mdxType:"GlosRef"})," that provides access to fine-grained operations,\nthis Facade is not necessarily side effect free. However, methods with the clear intent to\nreturn ",(0,r.kt)("strong",{parentName:"p"},"a value"),' ("intent" as in: documented in its method name ',(0,r.kt)(o.E,{name:"CC",pp:"39",mdxType:"BibRef"}),") should be side effect free.")),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("strong",{parentName:"p"},"Accounting")," queries an ",(0,r.kt)("strong",{parentName:"p"},"Employee"),"'s salary. It also checks for an outstanding bonus\nthe employee should receive and updates the salary with it. The salary is then returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n    class Accounting\n    {\n        public function salary(int $empId): Money\n        {\n            $bonus = $this->getOutstandingBonus($empdId)\n            if ($bonus !== null) {\n                $this->updateSalaray($empId, $bonus);\n            }\n\n            $salary = $this->querySalary($empId);\n\n            return $salary;\n        }\n    }\n")),(0,r.kt)("p",null,"The method modifies the value before it is returned (or does it?):\n",(0,r.kt)("inlineCode",{parentName:"p"},"updateSalary()")," is called if ",(0,r.kt)("inlineCode",{parentName:"p"},"getOutstandingBonus()")," indicates that if there is a need to adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"salary"),"."),(0,r.kt)("p",null,"The implications of ",(0,r.kt)("inlineCode",{parentName:"p"},"updateSalary()")," are unclear to ",(0,r.kt)("inlineCode",{parentName:"p"},"salary()"),", right so for the client who is not aware that a call to\n",(0,r.kt)("inlineCode",{parentName:"p"},"salary()")," also updates the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," with an outstanding bonus."),(0,r.kt)("p",null,'What if the client expects the method to be more "pure"?'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"More Pure" ',(0,r.kt)("span",{parentName:"mdxAdmonitionTitle",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,r.kt)("mo",{parentName:"mrow"},"=")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"!=")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))),' "Pure Function"'),(0,r.kt)("p",{parentName:"admonition"},'The client may expect the method to be "pure" in a colloquial sense: For as long as the ',(0,r.kt)("strong",{parentName:"p"},"Employee")," does not get a raise, this means for every ",(0,r.kt)("inlineCode",{parentName:"p"},"$empId"),"\nalways the same ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," is returned.\nOf course, the method will never conform to the definition of a ",(0,r.kt)(o.A,{name:"Pure Function",file:"computerscience.purefunction",mdxType:"GlosRef"}),"\ngiven its context.")),(0,r.kt)("p",null,"The method is a blackbox for the client, and given its intent documented with the method name (returning the salary)\none would not expect side effects."),(0,r.kt)("p",null,"It would be better to refactor this method so that ",(0,r.kt)("inlineCode",{parentName:"p"},"salary()")," simply does what any client would expect it to do: return\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"salary")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"$empId"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n    class Accounting\n    {\n        public function salary(int $empId): Money\n        {\n            $salary = $this->querySalary($empId);\n            return $salary;\n        }\n    }\n")),(0,r.kt)("p",null,"If the client needs to adjust outstanding bonuses, another method can be used for adding the bonus to the ",(0,r.kt)("inlineCode",{parentName:"p"},"salary"),". By\nimplementing a method with a clear intent, multiple fine-grained actions are processed from a coarse-grained interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    class Accounting\n    {\n        public function paySalaryAndUpdateBonus(int $empId): Money\n        {\n            $salary = $this->getSalary($empId);\n            $bonus = $this->getOutstandingBonus($empdId)\n            if ($bonus !== null) {\n                $this->removeBonus($empId, $bonus);\n                $salary = $salary->add($bonus);\n            }\n\n            $this->updatePayments($empdId, $salary);\n\n            return $salary;\n        }\n    }\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"see also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.A,{name:"Facade (Software Design)",file:"sd.facade",mdxType:"GlosRef"}))))}u.isMDXComponent=!0}}]);