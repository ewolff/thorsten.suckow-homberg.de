(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[7383],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>o,kt:()=>E});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),f=c(r),x=a,E=f["".concat(m,".").concat(x)]||f[x]||u[x]||l;return r?n.createElement(E,i(i({ref:t},o),{},{components:r})):n.createElement(E,i({ref:t},o))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=x;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},2490:(e,t,r)=>{"use strict";r.d(t,{$o:()=>s,_b:()=>c,cx:()=>i,e2:()=>m,t2:()=>o});var n=r(7294),a=r(5075),l=r(9943);function i(e){let{width:t,children:r,title:l,figure:i,modeAware:s}=e;return n.createElement("div",{style:{width:t,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==s?"umlImg":""},r),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,a.Z.isString(i)?i:`Figure ${i??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:l}}))))}function s(e){let{id:t,source:r,title:a}=e;return n.createElement(i,{modeAware:!1,title:a,figure:`Source ${r}`},n.createElement(l.Z,{id:t}))}function m(e){let{url:t,figure:r,title:a}=e;return n.createElement(i,{modeAware:!1,figure:r,title:a},n.createElement("img",{alt:"{title}",src:t}))}function c(e){let{children:t,figure:r,title:a}=e;return n.createElement(i,{modeAware:!0,figure:r,title:a,children:t})}function o(e){let{when:t,where:r}=e;const[a,l]=r;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:l},a),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}},6739:(e,t,r)=>{"use strict";r.d(t,{A:()=>l,E:()=>a});var n=r(7294);function a(e){let{name:t,pp:r}=e;const a=`/docs/bibliography#${t.toLowerCase()}`;return n.createElement("a",{href:a},"[",n.createElement("span",{className:"bibRef"},"\ud83d\udcd6",t.toUpperCase()),r?`, ${r.includes("-")?"pp":"p"}. ${r}`:"","]")}function l(e){let{name:t,file:r}=e;Object.entries({sd:"softwaredesign",sa:"softwarearchitecture",cs:"computerscience"}).some((e=>{let[t,n]=e;if(r.startsWith(`${t}.`))return r=r.replace(`${t}.`,`${n}.`),!0}));const a=`/docs/toolbox/${r}`;return n.createElement("a",{href:a,className:"glosRef"},t)}},9953:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>x,default:()=>H,frontMatter:()=>u,metadata:()=>E,toc:()=>d});var n,a=r(7462),l=r(7294),i=r(3905),s=r(6739),m=r(2490);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}const o=e=>{let{title:t,titleId:r,...a}=e;return l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:600,height:232,"aria-labelledby":r},a),t?l.createElement("title",{id:r},t):null,n||(n=l.createElement("g",null,l.createElement("path",{d:"M20 26a6 6 0 0 1 6-6h548a6 6 0 0 1 6 6v180a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6zM20 57.6h560",stroke:"#000",fill:"none"}),l.createElement("use",{xlinkHref:"#a",transform:"translate(250.675 42.6)"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(32 114.6)"}),l.createElement("use",{xlinkHref:"#c",transform:"translate(49.222 114.6)"}),l.createElement("use",{xlinkHref:"#d",transform:"translate(135.667 114.6)"}),l.createElement("use",{xlinkHref:"#e",transform:"translate(220 114.6)"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(32 138.6)"}),l.createElement("use",{xlinkHref:"#f",transform:"translate(49.222 138.6)"}),l.createElement("use",{xlinkHref:"#g",transform:"translate(203.444 138.6)"}),l.createElement("use",{xlinkHref:"#h",transform:"translate(281.167 138.6)"}),l.createElement("use",{xlinkHref:"#i",transform:"translate(346.667 138.6)"}),l.createElement("use",{xlinkHref:"#e",transform:"translate(428.722 138.6)"}),l.createElement("use",{xlinkHref:"#b",transform:"translate(32 162.6)"}),l.createElement("use",{xlinkHref:"#j",transform:"translate(49.222 162.6)"}),l.createElement("use",{xlinkHref:"#k",transform:"translate(264.444 162.6)"}),l.createElement("use",{xlinkHref:"#l",transform:"translate(324.444 162.6)"}),l.createElement("use",{xlinkHref:"#m",transform:"translate(375.444 162.6)"}),l.createElement("use",{xlinkHref:"#n",transform:"translate(500.778 162.6)"}),l.createElement("defs",null,l.createElement("path",{d:"m199 0-22-63H83L61 0H9l90-248h61L250 0h-51zm-33-102-36-108c-10 38-24 72-36 108h72",id:"o"}),l.createElement("path",{d:"M190-63c-7 42-38 67-86 67-59 0-84-38-90-98-12-110 154-137 174-36l-49 2c-2-19-15-32-35-32-30 0-35 28-38 64-6 74 65 87 74 30",id:"p"}),l.createElement("path",{d:"M110-194c64 0 96 36 96 99 0 64-35 99-97 99-61 0-95-36-95-99 0-62 34-99 96-99zm-1 164c35 0 45-28 45-65 0-40-10-65-43-65-34 0-45 26-45 65 0 36 10 65 43 65",id:"q"}),l.createElement("path",{d:"M85 4C-2 5 27-109 22-190h50c7 57-23 150 33 157 60-5 35-97 40-157h50l1 190h-47c-2-12 1-28-3-38-12 25-28 42-61 42",id:"r"}),l.createElement("path",{d:"M135-194c87-1 58 113 63 194h-50c-7-57 23-157-34-157-59 0-34 97-39 157H25l-1-190h47c2 12-1 28 3 38 12-26 28-41 61-42",id:"s"}),l.createElement("path",{d:"M115-3C79 11 28 4 28-45v-112H4v-33h27l15-45h31v45h36v33H77v99c-1 23 16 31 38 25v30",id:"t"}),l.createElement("path",{d:"M25-224v-37h50v37H25zM25 0v-190h50V0H25",id:"u"}),l.createElement("path",{d:"M195-6C206 82 75 100 31 46c-4-6-6-13-8-21l49-6c3 16 16 24 34 25 40 0 42-37 40-79-11 22-30 35-61 35-53 0-70-43-70-97 0-56 18-96 73-97 30 0 46 14 59 34l2-30h47zm-90-29c32 0 41-27 41-63 0-35-9-62-40-62-32 0-39 29-40 63 0 36 9 62 39 62",id:"v"}),l.createElement("path",{d:"M118-107v75H92v-75H18v-26h74v-75h26v75h74v26h-74",id:"w"}),l.createElement("path",{d:"M135-143c-3-34-86-38-87 0 15 53 115 12 119 90S17 21 10-45l28-5c4 36 97 45 98 0-10-56-113-15-118-90-4-57 82-63 122-42 12 7 21 19 24 35",id:"x"}),l.createElement("path",{d:"M141-36C126-15 110 5 73 4 37 3 15-17 15-53c-1-64 63-63 125-63 3-35-9-54-41-54-24 1-41 7-42 31l-33-3c5-37 33-52 76-52 45 0 72 20 72 64v82c-1 20 7 32 28 27v20c-31 9-61-2-59-35zM48-53c0 20 12 33 32 33 41-3 63-29 60-74-43 2-92-5-92 41",id:"y"}),l.createElement("path",{d:"M24 0v-261h32V0H24",id:"z"}),l.createElement("path",{d:"M114-163C36-179 61-72 57 0H25l-1-190h30c1 12-1 29 2 39 6-27 23-49 58-41v29",id:"A"}),l.createElement("path",{d:"M179-190 93 31C79 59 56 82 12 73V49c39 6 53-20 64-50L1-190h34L92-34l54-156h33",id:"B"}),l.createElement("path",{d:"M87 75C49 33 22-17 22-94c0-76 28-126 65-167h31c-38 41-64 92-64 168S80 34 118 75H87",id:"C"}),l.createElement("path",{d:"M24-231v-30h32v30H24zM24 0v-190h32V0H24",id:"D"}),l.createElement("path",{d:"M117-194c89-4 53 116 60 194h-32v-121c0-31-8-49-39-48C34-167 62-67 57 0H25l-1-190h30c1 10-1 24 2 32 11-22 29-35 61-36",id:"E"}),l.createElement("path",{d:"M59-47c-2 24 18 29 38 22v24C64 9 27 4 27-40v-127H5v-23h24l9-43h21v43h35v23H59v120",id:"F"}),l.createElement("path",{d:"M194-70c0 46-34 64-81 66v29H91V-4C42-5 12-27 4-67l30-6c5 28 25 41 57 43v-87c-38-9-76-20-76-67 1-42 33-58 76-59v-23h22v23c45 0 67 20 76 56l-31 6c-5-23-18-35-45-37v78c41 10 81 20 81 70zm-81 41c51 7 71-66 19-77-6-2-12-4-19-6v83zM91-219c-47-6-63 57-18 69 6 2 12 3 18 5v-74",id:"G"}),l.createElement("path",{d:"M100-194c63 0 86 42 84 106H49c0 40 14 67 53 68 26 1 43-12 49-29l28 8c-11 28-37 45-77 45C44 4 14-33 15-96c1-61 26-98 85-98zm52 81c6-60-76-77-97-28-3 7-6 17-6 28h103",id:"H"}),l.createElement("path",{d:"M210-169c-67 3-38 105-44 169h-31v-121c0-29-5-50-35-48C34-165 62-65 56 0H25l-1-190h30c1 10-1 24 2 32 10-44 99-50 107 0 11-21 27-35 58-36 85-2 47 119 55 194h-31v-121c0-29-5-49-35-48",id:"I"}),l.createElement("path",{d:"M115-194c55 1 70 41 70 98S169 2 115 4C84 4 66-9 55-30l1 105H24l-1-265h31l2 30c10-21 28-34 59-34zm-8 174c40 0 45-34 45-75s-6-73-45-74c-42 0-51 32-51 76 0 43 10 73 51 73",id:"J"}),l.createElement("path",{d:"M33 0v-248h34V0H33",id:"K"}),l.createElement("path",{d:"M85-194c31 0 48 13 60 33l-1-100h32l1 261h-30c-2-10 0-23-3-31C134-8 116 4 85 4 32 4 16-35 15-94c0-66 23-100 70-100zm9 24c-40 0-46 34-46 75 0 40 6 74 45 74 42 0 51-32 51-76 0-42-9-74-50-73",id:"L"}),l.createElement("path",{d:"M33-261c38 41 65 92 65 168S71 34 33 75H2C39 34 66-17 66-93S39-220 2-261h31",id:"M"}),l.createElement("path",{d:"M33-154v-36h34v36H33zM33 0v-36h34V0H33",id:"N"}),l.createElement("path",{d:"m240 0 2-218c-23 76-54 145-80 218h-23L58-218 59 0H30v-248h44l77 211c21-75 51-140 76-211h43V0h-30",id:"O"}),l.createElement("path",{d:"M100-194c62-1 85 37 85 99 1 63-27 99-86 99S16-35 15-95c0-66 28-99 85-99zM99-20c44 1 53-31 53-75 0-43-8-75-51-75s-53 32-53 75 10 74 51 75",id:"P"}),l.createElement("path",{d:"M30 0v-248h187v28H63v79h144v27H63v87h162V0H30",id:"Q"}),l.createElement("path",{d:"M68-38c1 34 0 65-14 84H32c9-13 17-26 17-46H33v-38h35",id:"R"}),l.createElement("path",{d:"M177-190C167-65 218 103 67 71c-23-6-38-20-44-43l32-5c15 47 100 32 89-28v-30C133-14 115 1 83 1 29 1 15-40 15-95c0-56 16-97 71-98 29-1 48 16 59 35 1-10 0-23 2-32h30zM94-22c36 0 50-32 50-73 0-42-14-75-50-75-39 0-46 34-46 75s6 73 46 73",id:"S"}),l.createElement("path",{d:"M30-248c118-7 216 8 213 122C240-48 200 0 122 0H30v-248zM63-27c89 8 146-16 146-99s-60-101-146-95v194",id:"T"}),l.createElement("path",{d:"M115-194c53 0 69 39 70 98 0 66-23 100-70 100C84 3 66-7 56-30L54 0H23l1-261h32v101c10-23 28-34 59-34zm-8 174c40 0 45-34 45-75 0-40-5-75-45-74-42 0-51 32-51 76 0 43 10 73 51 73",id:"U"}),l.createElement("path",{d:"M212-179c-10-28-35-45-73-45-59 0-87 40-87 99 0 60 29 101 89 101 43 0 62-24 78-52l27 14C228-24 195 4 139 4 59 4 22-46 18-125c-6-104 99-153 187-111 19 9 31 26 39 46",id:"V"}),l.createElement("path",{d:"M96-169c-40 0-48 33-48 73s9 75 48 75c24 0 41-14 43-38l32 2c-6 37-31 61-74 61-59 0-76-41-82-99-10-93 101-131 147-64 4 7 5 14 7 22l-32 3c-4-21-16-35-41-35",id:"W"}),l.createElement("path",{d:"M106-169C34-169 62-67 57 0H25v-261h32l-1 103c12-21 28-36 61-36 89 0 53 116 60 194h-32v-121c2-32-8-49-39-48",id:"X"}),l.createElement("path",{d:"M30-248c87 1 191-15 191 75 0 78-77 80-158 76V0H30v-248zm33 125c57 0 124 11 124-50 0-59-68-47-124-48v98",id:"Y"}),l.createElement("path",{d:"M140-251c81 0 123 46 123 126C263-46 219 4 140 4 59 4 17-45 17-125s42-126 123-126zm0 227c63 0 89-41 89-101s-29-99-89-99c-61 0-89 39-89 99S79-25 140-24",id:"Z"}),l.createElement("g",{id:"a"},l.createElement("use",{transform:"scale(.05)",xlinkHref:"#o"}),l.createElement("use",{transform:"translate(12.95) scale(.05)",xlinkHref:"#p"}),l.createElement("use",{transform:"translate(22.95) scale(.05)",xlinkHref:"#p"}),l.createElement("use",{transform:"translate(32.95) scale(.05)",xlinkHref:"#q"}),l.createElement("use",{transform:"translate(43.9) scale(.05)",xlinkHref:"#r"}),l.createElement("use",{transform:"translate(54.85) scale(.05)",xlinkHref:"#s"}),l.createElement("use",{transform:"translate(65.8) scale(.05)",xlinkHref:"#t"}),l.createElement("use",{transform:"translate(71.75) scale(.05)",xlinkHref:"#u"}),l.createElement("use",{transform:"translate(76.75) scale(.05)",xlinkHref:"#s"}),l.createElement("use",{transform:"translate(87.7) scale(.05)",xlinkHref:"#v"})),l.createElement("g",{id:"c"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 10 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 21.111 0)",xlinkHref:"#z"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 25.5 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 36.611 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 43.222 0)",xlinkHref:"#B"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 53.222 0)",xlinkHref:"#C"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 59.833 0)",xlinkHref:"#D"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 64.222 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 75.333 0)",xlinkHref:"#F"})),l.createElement("g",{id:"d"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#G"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 22.222 0)",xlinkHref:"#I"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 38.833 0)",xlinkHref:"#J"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 49.944 0)",xlinkHref:"#K"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 55.5 0)",xlinkHref:"#L"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 66.611 0)",xlinkHref:"#M"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 73.222 0)",xlinkHref:"#N"})),l.createElement("g",{id:"e"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#O"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 16.611 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 27.722 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 38.833 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 49.944 0)",xlinkHref:"#B"})),l.createElement("g",{id:"f"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#J"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 22.222 0)",xlinkHref:"#B"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 32.222 0)",xlinkHref:"#Q"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 45.556 0)",xlinkHref:"#I"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 62.167 0)",xlinkHref:"#J"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 73.278 0)",xlinkHref:"#z"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 77.667 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 88.778 0)",xlinkHref:"#B"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 98.778 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 109.889 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 121 0)",xlinkHref:"#C"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 127.611 0)",xlinkHref:"#D"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 132 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 143.111 0)",xlinkHref:"#F"})),l.createElement("g",{id:"g"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#G"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 22.222 0)",xlinkHref:"#I"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 38.833 0)",xlinkHref:"#J"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 49.944 0)",xlinkHref:"#K"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 55.5 0)",xlinkHref:"#L"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 66.611 0)",xlinkHref:"#R"})),l.createElement("g",{id:"h"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#O"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 16.611 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 27.722 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 38.833 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 49.944 0)",xlinkHref:"#B"})),l.createElement("g",{id:"i"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#G"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 21.111 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 32.222 0)",xlinkHref:"#z"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 36.611 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 47.722 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 54.333 0)",xlinkHref:"#B"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 64.333 0)",xlinkHref:"#M"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 70.944 0)",xlinkHref:"#N"})),l.createElement("g",{id:"j"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#S"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 22.222 0)",xlinkHref:"#F"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 27.778 0)",xlinkHref:"#T"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 42.167 0)",xlinkHref:"#U"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 53.278 0)",xlinkHref:"#V"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 67.667 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 78.778 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 89.889 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 101 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 112.111 0)",xlinkHref:"#W"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 122.111 0)",xlinkHref:"#F"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 127.667 0)",xlinkHref:"#D"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 132.056 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 143.167 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 154.278 0)",xlinkHref:"#C"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 160.889 0)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 170.889 0)",xlinkHref:"#F"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 176.444 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 183.056 0)",xlinkHref:"#D"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 187.444 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 198.556 0)",xlinkHref:"#S"})),l.createElement("g",{id:"k"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#G"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#X"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 22.222 0)",xlinkHref:"#P"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 33.333 0)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 43.333 0)",xlinkHref:"#F"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 48.889 0)",xlinkHref:"#R"})),l.createElement("g",{id:"l"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 17.722 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 24.333 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 35.444 0)",xlinkHref:"#B"})),l.createElement("g",{id:"m"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#G"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 11.111 0)",xlinkHref:"#W"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 21.111 0)",xlinkHref:"#A"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 27.722 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 38.833 0)",xlinkHref:"#L"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 49.944 0)",xlinkHref:"#H"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 61.056 0)",xlinkHref:"#E"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 72.167 0)",xlinkHref:"#F"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 77.722 0)",xlinkHref:"#D"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 82.111 0)",xlinkHref:"#y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 93.222 0)",xlinkHref:"#z"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 97.611 0)",xlinkHref:"#x"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 107.611 0)",xlinkHref:"#M"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 114.222 0)",xlinkHref:"#N"})),l.createElement("g",{id:"n"},l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#Y"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 13.333 0)",xlinkHref:"#T"}),l.createElement("use",{transform:"matrix(.05556 0 0 .05556 27.722 0)",xlinkHref:"#Z"})),l.createElement("use",{transform:"scale(.05556)",xlinkHref:"#w",id:"b"})))))},f=r.p+"assets/images/srp-valid.svg-014e277d3dd15f587614352ec0ad8a0c.png",u={title:"Single Responsibility Principle"},x="Single Responsibility Principle (Software Design)",E={unversionedId:"toolbox/softwaredesign.singleresponsibilityprinciple",id:"toolbox/softwaredesign.singleresponsibilityprinciple",title:"Single Responsibility Principle",description:"The Single Responsibility Principle (SRP) is a Software Design Principle that states that there should never be",source:"@site/docs/toolbox/softwaredesign.singleresponsibilityprinciple.mdx",sourceDirName:"toolbox",slug:"/toolbox/softwaredesign.singleresponsibilityprinciple",permalink:"/docs/toolbox/softwaredesign.singleresponsibilityprinciple",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/toolbox/softwaredesign.singleresponsibilityprinciple.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1679153884,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"Single Responsibility Principle"},sidebar:"toolbox",previous:{title:"Separation of Concerns",permalink:"/docs/toolbox/softwaredesign.separationofconcerns"},next:{title:"SOLID",permalink:"/docs/toolbox/softwaredesign.solid"}},p={},d=[],h={toc:d},k="wrapper";function H(e){let{components:t,...r}=e;return(0,i.kt)(k,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-responsibility-principle-software-design"},"Single Responsibility Principle (Software Design)"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Single Responsibility Principle")," (",(0,i.kt)("strong",{parentName:"p"},"SRP"),") is a Software Design Principle that states that there should never be\nmore than one reasons to change a particular class."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},'"A class should only have one reason to change."')," ",(0,i.kt)(s.E,{name:"ASD",pp:"95",mdxType:"BibRef"}))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Single Responsibility Principle")," is one of the ",(0,i.kt)(s.A,{name:"SOLID",file:"sd.solid",mdxType:"GlosRef"}),"-Principles."),(0,i.kt)("p",null,"A design that violates this principle would be a class that contains business logic as well as logic for persisting\nthis logic, such as an ",(0,i.kt)("strong",{parentName:"p"},"Accounting"),"-class: The ",(0,i.kt)("strong",{parentName:"p"},"Accounting")," class is responsible for managing salaries and payments\nin a company. In the current design, the class also contains logic for establishing connections to the database:"),(0,i.kt)(m._b,{figure:1,title:"If the infrastructure changes, Accounting has to change.",mdxType:"UmlEmbed"},(0,i.kt)(o,{mdxType:"SRPViolation"})),(0,i.kt)("p",null,"The responsibility for",(0,i.kt)("strong",{parentName:"p"},"Accounting")," should be clearly to orchestrate payment and salary information, but with the\ninfrastructure hardwired into the class, ",(0,i.kt)("strong",{parentName:"p"},"Accounting")," now has to change whenever the infrastructure changes."),(0,i.kt)("p",null,"The following design resolves this violation: The concern of persisting the data is clearly decoupled from the concern\nto process the business logic given the context of ",(0,i.kt)("strong",{parentName:"p"},"Accounting"),"."),(0,i.kt)(m.cx,{figure:2,modeAware:!0,title:"If the infrastructure changes, Accounting has no need to change.",mdxType:"Embed"},(0,i.kt)("img",{src:f})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"see also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(s.A,{name:"Dependency Inversion Principle",file:"sd.dependencyinversionprinciple",mdxType:"GlosRef"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(s.A,{name:"Separating Query From Modifier",file:"refactoring.separatequeryfrommodifier",mdxType:"GlosRef"}))))}H.isMDXComponent=!0},2480:()=>{}}]);