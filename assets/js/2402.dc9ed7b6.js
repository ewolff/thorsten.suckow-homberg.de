(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[2402],{8249:function(t,e,n){var r;t.exports=(r=r||function(t,e){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&void 0!==n.g&&n.g.crypto&&(r=n.g.crypto),!r)try{r=n(2480)}catch(m){}var i=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(m){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(m){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),s={},a=s.lib={},c=a.Base={extend:function(t){var e=o(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=a.WordArray=c.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=n[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var a=0;a<i;a+=4)e[r+a>>>2]=n[a>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],n=0;n<t;n+=4)e.push(i());return new u.init(e,t)}}),l=s.enc={},f=l.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new u.init(n,e/2)}},p=l.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new u.init(n,e)}},h=l.Utf8={stringify:function(t){try{return decodeURIComponent(escape(p.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return p.parse(unescape(encodeURIComponent(t)))}},d=a.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n,r=this._data,i=r.words,o=r.sigBytes,s=this.blockSize,a=o/(4*s),c=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,l=t.min(4*c,o);if(c){for(var f=0;f<c;f+=s)this._doProcessBlock(i,f);n=i.splice(0,c),r.sigBytes-=l}return new u.init(n,l)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),g=(a.Hasher=d.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new g.HMAC.init(t,n).finalize(e)}}}),s.algo={});return s}(Math),r)},8214:function(t,e,n){var r;t.exports=(r=n(8249),function(t){var e=r,n=e.lib,i=n.WordArray,o=n.Hasher,s=e.algo,a=[];!function(){for(var e=0;e<64;e++)a[e]=4294967296*t.abs(t.sin(e+1))|0}();var c=s.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var r=e+n,i=t[r];t[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,s=t[e+0],c=t[e+1],h=t[e+2],d=t[e+3],g=t[e+4],m=t[e+5],y=t[e+6],w=t[e+7],b=t[e+8],_=t[e+9],v=t[e+10],x=t[e+11],j=t[e+12],E=t[e+13],O=t[e+14],B=t[e+15],$=o[0],A=o[1],k=o[2],C=o[3];$=u($,A,k,C,s,7,a[0]),C=u(C,$,A,k,c,12,a[1]),k=u(k,C,$,A,h,17,a[2]),A=u(A,k,C,$,d,22,a[3]),$=u($,A,k,C,g,7,a[4]),C=u(C,$,A,k,m,12,a[5]),k=u(k,C,$,A,y,17,a[6]),A=u(A,k,C,$,w,22,a[7]),$=u($,A,k,C,b,7,a[8]),C=u(C,$,A,k,_,12,a[9]),k=u(k,C,$,A,v,17,a[10]),A=u(A,k,C,$,x,22,a[11]),$=u($,A,k,C,j,7,a[12]),C=u(C,$,A,k,E,12,a[13]),k=u(k,C,$,A,O,17,a[14]),$=l($,A=u(A,k,C,$,B,22,a[15]),k,C,c,5,a[16]),C=l(C,$,A,k,y,9,a[17]),k=l(k,C,$,A,x,14,a[18]),A=l(A,k,C,$,s,20,a[19]),$=l($,A,k,C,m,5,a[20]),C=l(C,$,A,k,v,9,a[21]),k=l(k,C,$,A,B,14,a[22]),A=l(A,k,C,$,g,20,a[23]),$=l($,A,k,C,_,5,a[24]),C=l(C,$,A,k,O,9,a[25]),k=l(k,C,$,A,d,14,a[26]),A=l(A,k,C,$,b,20,a[27]),$=l($,A,k,C,E,5,a[28]),C=l(C,$,A,k,h,9,a[29]),k=l(k,C,$,A,w,14,a[30]),$=f($,A=l(A,k,C,$,j,20,a[31]),k,C,m,4,a[32]),C=f(C,$,A,k,b,11,a[33]),k=f(k,C,$,A,x,16,a[34]),A=f(A,k,C,$,O,23,a[35]),$=f($,A,k,C,c,4,a[36]),C=f(C,$,A,k,g,11,a[37]),k=f(k,C,$,A,w,16,a[38]),A=f(A,k,C,$,v,23,a[39]),$=f($,A,k,C,E,4,a[40]),C=f(C,$,A,k,s,11,a[41]),k=f(k,C,$,A,d,16,a[42]),A=f(A,k,C,$,y,23,a[43]),$=f($,A,k,C,_,4,a[44]),C=f(C,$,A,k,j,11,a[45]),k=f(k,C,$,A,B,16,a[46]),$=p($,A=f(A,k,C,$,h,23,a[47]),k,C,s,6,a[48]),C=p(C,$,A,k,w,10,a[49]),k=p(k,C,$,A,O,15,a[50]),A=p(A,k,C,$,m,21,a[51]),$=p($,A,k,C,j,6,a[52]),C=p(C,$,A,k,d,10,a[53]),k=p(k,C,$,A,v,15,a[54]),A=p(A,k,C,$,c,21,a[55]),$=p($,A,k,C,b,6,a[56]),C=p(C,$,A,k,B,10,a[57]),k=p(k,C,$,A,y,15,a[58]),A=p(A,k,C,$,E,21,a[59]),$=p($,A,k,C,g,6,a[60]),C=p(C,$,A,k,x,10,a[61]),k=p(k,C,$,A,h,15,a[62]),A=p(A,k,C,$,_,21,a[63]),o[0]=o[0]+$|0,o[1]=o[1]+A|0,o[2]=o[2]+k|0,o[3]=o[3]+C|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;n[i>>>5]|=128<<24-i%32;var o=t.floor(r/4294967296),s=r;n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var l=c[u];c[u]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return a},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});function u(t,e,n,r,i,o,s){var a=t+(e&n|~e&r)+i+s;return(a<<o|a>>>32-o)+e}function l(t,e,n,r,i,o,s){var a=t+(e&r|n&~r)+i+s;return(a<<o|a>>>32-o)+e}function f(t,e,n,r,i,o,s){var a=t+(e^n^r)+i+s;return(a<<o|a>>>32-o)+e}function p(t,e,n,r,i,o,s){var a=t+(n^(e|~r))+i+s;return(a<<o|a>>>32-o)+e}e.MD5=o._createHelper(c),e.HmacMD5=o._createHmacHelper(c)}(Math),r.MD5)},9943:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(7294);function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}const o=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n);var s=o.prototype;return s.componentDidMount=function(){this._updateIframeContent()},s.componentDidUpdate=function(t,e){this._updateIframeContent()},s._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},s._updateIframeContent=function(){var t=this.props,e=t.id,n=t.file,r=this.iframeNode,i=r.document;r.contentDocument?i=r.contentDocument:r.contentWindow&&(i=r.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+e+"-"+n:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},s.render=function(){var t=this,e=this.props,n=e.id,i=e.file;return r.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},o}(r.PureComponent)},5075:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var r=n(8214);const i=t=>"string"==typeof t,o=t=>"object"==typeof t,s=t=>"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object,a=t=>"function"==typeof t,c=t=>"number"==typeof t,u=t=>Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t),l=t=>t instanceof RegExp,f={apply:(t,e,n)=>(t=t.__liquid__?t():t,a(t.then)?p(t.then((t=>Reflect.apply(t,e,n)))):p(t.apply(e,n))),get:(t,e,n)=>(t=t.__liquid__?t():t,"then"!==e&&a(t.then)?p(t.then((t=>t[e].bind(t)))):a(t[e])?p(t[e].bind(t)):t[e])},p=function(t){if(o(t)){const e=()=>t;return e.__liquid__=!0,new Proxy(e,f)}return a(t)?new Proxy(t,f):t},h=function(t,e,n,r="g"){if(!i(n))throw new Error('"str" must be a string');t=[].concat(t),e=i(e)?new Array(t.length).fill(e):[].concat(e);const o=`(${t.map(((t,e)=>`(?<i${e}>${m(t)})`)).join("|")})`,s=new RegExp(o,r);return n=n.replace(s,(function(){const t=arguments[arguments.length-1];let n="";return Object.keys(t).some((r=>{if(void 0!==t[r])return r=parseInt(r.substring(1)),n=void 0===e[r]?"":e[r],!0})),n})),n},d=function(t,e,n){if(!i(t)||!i(e)||!e)throw new Error('"str" must be a string');if(n&&!i(n)&&!u(n))throw new Error('"ignore" must be an array or a string');let r=new RegExp(`${m(e)}+`,"gi");if(void 0!==n){(n=(n=[].concat(n)).map((t=>m(t)))).map((e=>{let n=new RegExp(`(${m(e)})`,"gim");t=t.replace(n,e)})),n=new RegExp(`(${n.join("|")})`,"gim");let i="",o=0,s=[],a=(t,n,a,c)=>{let u=c.substring(o,a).replace(r,e);return s=s.concat([u,n]),o=a+t.length,i=c.substring(o),t};return t.match(n,a)?(t.replace(n,a),s.push(i.replace(r,e)),s.join("")):t.replace(r,e)}return t.replace(r,e)},g=function(t){const e="(?!("+Array.prototype.slice.call(arguments,1).join("|")+"))^",n=new RegExp(e,"g");return null!==t.match(n)},m=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};var y=Object.freeze({__proto__:null,replace:h,unify:d,isNot:g,escapeRegExp:m});async function w(t,e){if(!i(t))throw new Error('"url" must be a string representing the resource location');let n=await fetch(t,e);if(n.status>=400)throw new Error(`Fetching the resource ${t} failed with ${n.status} ${n.statusText}`);return n}var b=Object.freeze({__proto__:null,toBlockquote:function(t){let e=(t=>{let e=t.split("\n"),n=[],r=-1,i=null;return e.forEach((t=>{t=(t=>t.replace(/^( *)(>+)( >*)*(?!$)/m,(t=>t.replace(/(\s)*(?!$)/g,""))))(t),i!==t.indexOf(">")&&r++,i=t.indexOf(">"),n[r]||(n[r]=[]),n[r].push(t)})),n})(t),n=[];return e.forEach((t=>{n.push((t=>{if(0!==t[0].indexOf(">"))return t.join("\n");const e=t=>{"\n"===t[t.length-1]&&t.pop()};let n,r,i=0,o=[];for(t.forEach((t=>{for(r=(t+"").trim().match(/^((>)+) *?(.*?$)/ms),n=r[1].length;n>i;)e(o),i++,o.push("<blockquote>");for(;i>n;)e(o),i--,o.push("</blockquote>");o.push(r[3]),o.push("\n")}));i>0;)e(o),i--,o.push("</blockquote>");return o.join("")})(t))})),n.join("")},toEmailLink:t=>t.replace(/[a-zA-Z0-9+._%-]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+/gi,(t=>'<a href="mailto:'+t+'">'+t+"</a>")),toHyperlink:t=>t.replace(/(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi,(t=>'<a href="'+t+'">'+t+"</a>")),toLineBreak:t=>t.replace(/(\r\n|\n|\r)/gm,(t=>"<br />")),nameToOrdinal:function(t,e,n=" (\\d)"){const r=n;n=(n=m(n)).replace("\\\\d","(\\d)");const i=new RegExp(`^(${t})?${n}$`,"mi");let o,s=-1;e.forEach((e=>{e===t&&s++,null!==(o=i.exec(e))&&(s=Math.max(s,parseInt(o[2]??0)))}));let a=-1===s?s:++s,c=r.replace("\\d",a);return-1===a?t:`${t}${c}`}});class _{compile(t,e){}}class v{render(t){}}class x extends v{constructor(t){if(super(),!a(t))throw new Error('"fn" must be of type "function"');this.fn=t}render(t){const e=this;try{return e.fn.call({},t)}catch(t){throw new Error(`rendering "data" failed with message ${t.message}`)}}}class j extends _{compile(t,e){e.some((t=>{if(-1!==t.indexOf("-"))throw new Error(`Cannot compile template: Contains invalid key-name: ${t}`)}));const n=this,r=n.getKeys(t),i=n.buildArgumentList(r),o=n.getBlacklistedKeys(i,e||[]);if(o.length)throw new Error(`Cannot compile template: Contains invalid keys: ${o.join(", ")}`);const s=n.getFunctionConfig(i,t),a=n.getNativeFunction(s.args,s.fn);return new x(a)}buildArgumentList(t){let e=t.map((t=>t.split(/\.|\[/)[0]));return[...new Set(e)]}getKeys(t){const e=/\$\{([^}]+)\}/gm,n=[];let r;for(;null!==(r=e.exec(t));)r.index===e.lastIndex&&e.lastIndex++,r.forEach(((t,e)=>{1===e&&n.push(t)}));return n}getBlacklistedKeys(t,e){return e.length?t.filter((t=>-1===e.indexOf(t))):[]}getFunctionConfig(t,e){return{args:`{${t.join(", ")}}`,fn:`return \`${e}\``}}getNativeFunction(t,e){return new Function(t,e)}}class E{render(t){}}class O extends E{constructor(t){super(),this.compiler=new j,this.tpl=t}render(t){const e=this;let n=Object.keys(t),r=n.join(".");return e.compiledTpls=e.compiledTpls||{},e.compiledTpls[r]||(e.compiledTpls[r]=e.compiler.compile(e.tpl,n)),e.compiledTpls[r].render(t)}}var B=Object.freeze({__proto__:null,StringCompiler:j,StringTemplate:O,make:t=>new O(t),Tpl:x}),$=Object.freeze({__proto__:null,esix:B,CompiledTpl:v,Compiler:_,Template:E}),A=Object.freeze({__proto__:null,text:b,template:$,isString:i,isObject:o,isPlainObject:s,isFunction:a,isNumber:c,isArray:u,isRegExp:l,is:function(t){return{a:e=>typeof t===e,of:e=>!!a(e)&&t instanceof e}},listNeighbours:function(t,e){var n,r,i,o=[],s=[];for((o=(o=t.map((function(t){return parseInt(t,10)}))).filter((function(t,e,n){return n.indexOf(t,0)===e}))).sort((function(t,e){return t-e})),r=(n=o.indexOf(parseInt(e,10)))-1;r>=0&&o[r]===o[r+1]-1;r--)s.unshift(o[r]);for(s.push(o[n]),r=n+1,i=o.length;r<i&&o[r]===o[r-1]+1;r++)s.push(o[r]);return s},groupIndices:function(t){var e,n=[];if(!u(t))throw new Error("'list' must be an array");return(e=(e=t.map((function(t){return parseInt(t,10)}))).filter((function(t,e,n){return n.indexOf(t)===e}))).sort((function(t,e){return t-e})),e.reduce((function(t,e,r,i){return e>t+1&&n.push([]),n[n.length-1].push(e),e}),-1),n},createRange:function(t,e){if(!c(t))throw new Error("'start' must be a number");if(!c(e))throw new Error("'end' must be a number");if(t=parseInt(t,10),(e=parseInt(e,10))<t)throw new Error(`"end" (${e}) must be a number equal to or greater than "start" (${t})`);return new Array(e-t+1).fill(void 0).map((function(){return t++}))},findFirst:(t,e)=>{let n=null,r=o(e);return(u(e)?e:r?Object.entries(e):[]).some((e=>r&&e[0]===t?(n=e[1],!0):o(e)&&void 0!==e[t]?(n=e[t],!0):void 0)),n},extract:t=>t.filter(((t,e,n)=>n.indexOf(t)===n.lastIndexOf(t))),obj:function(t){const e=Object.create(null);return Object.assign(e,t),e},lock:function(t,e,n){if(!o(t)||Object.isFrozen(t)||Object.isSealed(t))throw new Error('"target" must be an extensible object.');const r=arguments.length;if(n=arguments[r-1],r<2)throw new Error('"property" must be a valid property name.');if(r>3&&!o(n))throw new Error('"value" must be an object.');if(3===r&&u(e)&&!o(n))throw new Error('"value" must be an object.');let s=u(e);return(s?e:Array.prototype.slice.apply(arguments,[1,r-1])).forEach((e=>{if(!i(e))throw new Error('"property" must be a valid property name.');Object.defineProperty(t,e,{writable:!1,configurable:!1,value:r>3||s?n[e]:n})})),t},visit:function(t,e){const n=(t,r)=>(Object.entries(t).map((([i,s])=>{const a=r.concat(i);t[i]=o(s)?n(s,a):e(s,a)})),t);return n(t,[]),t},chain:function(t,e={},n,r=!1){return(t=[].concat(t)).forEach((t=>{const i=t.split("."),o=(e,i)=>{let s;return s=i.shift(),e[s]&&(!0!==r||i.length)||(e[s]=i.length?{}:a(n)?n(t):n),i.length&&o(e[s],i),e};o(e,i)})),e},flip:function(t){return Object.assign({},...Object.entries(t).map((([t,e])=>({[e]:t}))))},purge:function(t,e){return Object.fromEntries(Object.entries(t).filter((([,t])=>t!==e)))},unchain:function(t,e,n,r="."){for(var i=t.split(r),o=e;void 0!==o&&i.length;)o=o[i.shift()];return a(n)?n(o):void 0===o?n:o},assign:function(t){let e=Array.prototype.slice.call(arguments,1);return e=e.map((t=>{if(s(t))return t;if(u(t)){const[e,...n]=t,r=n[0];return Object.fromEntries(Object.entries(e).filter((t=>{let e=t[0];return l(r)?null!==e.match(r):g.apply(y,[e].concat(n))})))}})),Object.assign(t,...e)},replace:h,unify:d,isNot:g,escapeRegExp:m,ping:async function(t){let e;try{e=await w(t,{method:"HEAD"}),await e.text()}catch(t){return!1}return 200===e.status},load:async function(t){const e=await w(t,{method:"GET"});return await e.text()},request:w,md5:t=>r(t).toString(),liquify:p})}}]);