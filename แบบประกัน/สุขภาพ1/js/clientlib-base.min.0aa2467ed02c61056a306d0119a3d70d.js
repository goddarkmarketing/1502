/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 JÃ¶rn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*!
 * Clamp.js 0.11.5
 *
 * Now Maintained by Josh English http://joshengish.com
 * Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = { clamp: factory() };
    } else {
        // Browser globals
        root.$clamp = factory();
    }
}(this, function () {
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    function clamp(element, options) {
        options = options || {};

        var self = this,
          win = window,
          opt = {
              clamp: options.clamp || 2,
              useNativeClamp: typeof (options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
              splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
              animate: options.animate || false,
              truncationChar: options.truncationChar || '…',
              truncationHTML: options.truncationHTML
          },

          sty = element.style,
          originalText = element.innerHTML,

          supportsNativeClamp = typeof (element.style.webkitLineClamp) != 'undefined',
          clampValue = opt.clamp,
          isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
          truncationHTMLContainer;

        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


        // UTILITY FUNCTIONS __________________________________________________________

        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function (el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function (prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function () {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    };
                    return this;
                };
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight,
              lineHeight = getLineHeight(element);

            return Math.max(Math.floor(availHeight / lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            // console.log(lineHeight * clmp);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.187;
            }
            return Math.ceil(parseFloat(lh));
        }


        // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
        var splitOnChars = opt.splitOnChars.slice(0),
          splitChar = splitOnChars[0],
          chunks,
          lastChunk;

        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        function getLastChild(elem) {
            if (!elem.lastChild) {
                return;
            }
            //Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.childNodes && elem.lastChild.childNodes.length > 0) {
                return getLastChild(Array.prototype.slice.call(elem.childNodes).pop());
            }
                //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue === '' || elem.lastChild.nodeValue == opt.truncationChar) {
                elem.lastChild.parentNode.removeChild(elem.lastChild);
                return getLastChild(element);
            }
                //This is the last child we want, return it
            else {
                return elem.lastChild;
            }
        }

        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        function truncate(target, maxHeight) {
            if (!target || !maxHeight) {
                return;
            }

            /**
             * Resets global variables.
             */
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }
            // console.log(splitOnChars);

            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

            //Grab the next chunks
            if (!chunks) {
                //If there are more characters to try, grab the next one
                if (splitOnChars.length > 0) {
                    splitChar = splitOnChars.shift();
                }
                    //No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }

                chunks = nodeValue.split(splitChar);
            }

            //If there are chunks left to remove, remove the last one and see if
            // the nodeValue fits.
            if (chunks.length > 1) {
                // console.log('chunks', chunks);
                lastChunk = chunks.pop();
                // console.log('lastChunk', lastChunk);
                applyEllipsis(target, chunks.join(splitChar));
            }
                //No more chunks can be removed using this character
            else {
                chunks = null;
            }

            //Insert the custom HTML before the truncation character
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
            }

            //Search produced valid chunks
            if (chunks) {
                //It fits
                if (element.clientHeight <= maxHeight) {
                    // console.log(element.clientHeight, maxHeight);
                    //There's still more characters to try splitting on, not quite done yet
                    if (splitOnChars.length >= 0 && splitChar !== '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                        //Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
                //No valid chunks produced
            else {
                //No valid chunks even when splitting by letter, time to move
                //on to the next node
                if (splitChar === '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);

                    reset();
                }
            }

            //If you get here it means still too big, let's keep truncating
            if (opt.animate) {
                setTimeout(function () {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            } else {
                return truncate(target, maxHeight);
            }
        }

        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }


        // CONSTRUCTOR ________________________________________________________________

        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        } else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }

        var clampedText;
        if (supportsNativeClamp && opt.useNativeClamp) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        } else {
            var height = getMaxHeight(clampValue);
            if (height < element.clientHeight) {
                clampedText = truncate(getLastChild(element), height);
            }
        }

        return {
            'original': originalText,
            'clamped': clampedText
        };
    }

    return clamp;
}));

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
/*******************************************************************************
 * Copyright 2018 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

/**
 * Element.matches()
 * https://developer.mozilla.org/enUS/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Element.closest()
 * https://developer.mozilla.org/enUS/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        "use strict";
        var el = this;
        if (!document.documentElement.contains(el)) {
            return null;
        }
        do {
            if (el.matches(s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

/*******************************************************************************
 * Copyright 2018 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
/* global
    CQ
 */
(function() {
    "use strict";

    var containerUtils = window.CQ && window.CQ.CoreComponents && window.CQ.CoreComponents.container && window.CQ.CoreComponents.container.utils ? window.CQ.CoreComponents.container.utils : undefined;
    if (!containerUtils) {
        // eslint-disable-next-line no-console
        console.warn("Tabs: container utilities at window.CQ.CoreComponents.container.utils are not available. This can lead to missing features. Ensure the core.wcm.components.commons.site.container client library is included on the page.");
    }
    var dataLayerEnabled;
    var dataLayer;
    var dataLayerName;

    var NS = "cmp";
    var IS = "tabs";

    var keyCodes = {
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40
    };

    var selectors = {
        self: "[data-" + NS + '-is="' + IS + '"]',
        active: {
            tab: "cmp-tabs__tab--active",
            tabpanel: "cmp-tabs__tabpanel--active"
        }
    };

    /**
     * Tabs Configuration
     *
     * @typedef {Object} TabsConfig Represents a Tabs configuration
     * @property {HTMLElement} element The HTMLElement representing the Tabs
     * @property {Object} options The Tabs options
     */

    /**
     * Tabs
     *
     * @class Tabs
     * @classdesc An interactive Tabs component for navigating a list of tabs
     * @param {TabsConfig} config The Tabs configuration
     */
    function Tabs(config) {
        var that = this;

        if (config && config.element) {
            init(config);
        }

        /**
         * Initializes the Tabs
         *
         * @private
         * @param {TabsConfig} config The Tabs configuration
         */
        function init(config) {
            that._config = config;

            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");

            cacheElements(config.element);
            that._active = getActiveIndex(that._elements["tab"]);

            if (that._elements.tabpanel) {
                refreshActive();
                bindEvents();
                scrollToDeepLinkIdInTabs();
            }

            if (window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
                /*
                 * Editor message handling:
                 * - subscribe to "cmp.panelcontainer" message requests sent by the editor frame
                 * - check that the message data panel container type is correct and that the id (path) matches this specific Tabs component
                 * - if so, route the "navigate" operation to enact a navigation of the Tabs based on index data
                 */
                CQ.CoreComponents.MESSAGE_CHANNEL = CQ.CoreComponents.MESSAGE_CHANNEL || new window.Granite.author.MessageChannel("cqauthor", window);
                CQ.CoreComponents.MESSAGE_CHANNEL.subscribeRequestMessage("cmp.panelcontainer", function(message) {
                    if (message.data && message.data.type === "cmp-tabs" && message.data.id === that._elements.self.dataset["cmpPanelcontainerId"]) {
                        if (message.data.operation === "navigate") {
                            navigate(message.data.index);
                        }
                    }
                });
            }
        }

        /**
         * Displays the panel containing the element that corresponds to the deep link in the URI fragment
         * and scrolls the browser to this element.
         */
        function scrollToDeepLinkIdInTabs() {
            if (containerUtils) {
                var deepLinkItemIdx = containerUtils.getDeepLinkItemIdx(that, "tab", "tabpanel");
                if (deepLinkItemIdx > -1) {
                    var deepLinkItem = that._elements["tab"][deepLinkItemIdx];
                    if (deepLinkItem && that._elements["tab"][that._active].id !== deepLinkItem.id) {
                        navigateAndFocusTab(deepLinkItemIdx, true);
                    }
                    var hashId = window.location.hash.substring(1);
                    if (hashId) {
                        var hashItem = document.querySelector("[id='" + hashId + "']");
                        if (hashItem) {
                            hashItem.scrollIntoView();
                        }
                    }
                }
            }
        }

        /**
         * Returns the index of the active tab, if no tab is active returns 0
         *
         * @param {Array} tabs Tab elements
         * @returns {Number} Index of the active tab, 0 if none is active
         */
        function getActiveIndex(tabs) {
            if (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].classList.contains(selectors.active.tab)) {
                        return i;
                    }
                }
            }
            return 0;
        }

        /**
         * Caches the Tabs elements as defined via the {@code data-tabs-hook="ELEMENT_NAME"} markup API
         *
         * @private
         * @param {HTMLElement} wrapper The Tabs wrapper element
         */
        function cacheElements(wrapper) {
            that._elements = {};
            that._elements.self = wrapper;
            var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");

            for (var i = 0; i < hooks.length; i++) {
                var hook = hooks[i];
                if (hook.closest("." + NS + "-" + IS) === that._elements.self) { // only process own tab elements
                    var capitalized = IS;
                    capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
                    var key = hook.dataset[NS + "Hook" + capitalized];
                    if (that._elements[key]) {
                        if (!Array.isArray(that._elements[key])) {
                            var tmp = that._elements[key];
                            that._elements[key] = [tmp];
                        }
                        that._elements[key].push(hook);
                    } else {
                        that._elements[key] = hook;
                    }
                }
            }
        }

        /**
         * Binds Tabs event handling
         *
         * @private
         */
        function bindEvents() {
            window.addEventListener("hashchange", scrollToDeepLinkIdInTabs, false);
            var tabs = that._elements["tab"];
            if (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    (function(index) {
                        tabs[i].addEventListener("click", function(event) {
                            navigateAndFocusTab(index);
                        });
                        tabs[i].addEventListener("keydown", function(event) {
                            onKeyDown(event);
                        });
                    })(i);
                }
            }
        }

        /**
         * Handles tab keydown events
         *
         * @private
         * @param {Object} event The keydown event
         */
        function onKeyDown(event) {
            var index = that._active;
            var lastIndex = that._elements["tab"].length - 1;

            switch (event.keyCode) {
                case keyCodes.ARROW_LEFT:
                case keyCodes.ARROW_UP:
                    event.preventDefault();
                    if (index > 0) {
                        navigateAndFocusTab(index - 1);
                    }
                    break;
                case keyCodes.ARROW_RIGHT:
                case keyCodes.ARROW_DOWN:
                    event.preventDefault();
                    if (index < lastIndex) {
                        navigateAndFocusTab(index + 1);
                    }
                    break;
                case keyCodes.HOME:
                    event.preventDefault();
                    navigateAndFocusTab(0);
                    break;
                case keyCodes.END:
                    event.preventDefault();
                    navigateAndFocusTab(lastIndex);
                    break;
                default:
                    return;
            }
        }

        /**
         * Refreshes the tab markup based on the current {@code Tabs#_active} index
         *
         * @private
         */
        function refreshActive() {
            var tabpanels = that._elements["tabpanel"];
            var tabs = that._elements["tab"];

            if (tabpanels) {
                if (Array.isArray(tabpanels)) {
                    for (var i = 0; i < tabpanels.length; i++) {
                        if (i === parseInt(that._active)) {
                            tabpanels[i].classList.add(selectors.active.tabpanel);
                            tabpanels[i].removeAttribute("aria-hidden");
                            tabs[i].classList.add(selectors.active.tab);
                            tabs[i].setAttribute("aria-selected", true);
                            tabs[i].setAttribute("tabindex", "0");
                        } else {
                            tabpanels[i].classList.remove(selectors.active.tabpanel);
                            tabpanels[i].setAttribute("aria-hidden", true);
                            tabs[i].classList.remove(selectors.active.tab);
                            tabs[i].setAttribute("aria-selected", false);
                            tabs[i].setAttribute("tabindex", "-1");
                        }
                    }
                } else {
                    // only one tab
                    tabpanels.classList.add(selectors.active.tabpanel);
                    tabs.classList.add(selectors.active.tab);
                }
            }
        }

        /**
         * Focuses the element and prevents scrolling the element into view
         *
         * @param {HTMLElement} element Element to focus
         */
        function focusWithoutScroll(element) {
            var x = window.scrollX || window.pageXOffset;
            var y = window.scrollY || window.pageYOffset;
            element.focus();
            window.scrollTo(x, y);
        }

        /**
         * Navigates to the tab at the provided index
         *
         * @private
         * @param {Number} index The index of the tab to navigate to
         */
        function navigate(index) {
            that._active = index;
            refreshActive();
        }

        /**
         * Navigates to the item at the provided index and ensures the active tab gains focus
         *
         * @private
         * @param {Number} index The index of the item to navigate to
         * @param {Boolean} keepHash true to keep the hash in the URL, false to update it
         */
        function navigateAndFocusTab(index, keepHash) {
            var exActive = that._active;
            if (!keepHash && containerUtils) {
                containerUtils.updateUrlHash(that, "tab", index);
            }
            navigate(index);
            focusWithoutScroll(that._elements["tab"][index]);

            if (dataLayerEnabled) {

                var activeItem = getDataLayerId(that._elements.tabpanel[index]);
                var exActiveItem = getDataLayerId(that._elements.tabpanel[exActive]);

                dataLayer.push({
                    event: "cmp:show",
                    eventInfo: {
                        path: "component." + activeItem
                    }
                });

                dataLayer.push({
                    event: "cmp:hide",
                    eventInfo: {
                        path: "component." + exActiveItem
                    }
                });

                var tabsId = that._elements.self.id;
                var uploadPayload = { component: {} };
                uploadPayload.component[tabsId] = { shownItems: [activeItem] };

                var removePayload = { component: {} };
                removePayload.component[tabsId] = { shownItems: undefined };

                dataLayer.push(removePayload);
                dataLayer.push(uploadPayload);
            }
        }
    }

    /**
     * Reads options data from the Tabs wrapper element, defined via {@code data-cmp-*} data attributes
     *
     * @private
     * @param {HTMLElement} element The Tabs element to read options data from
     * @returns {Object} The options read from the component data attributes
     */
    function readData(element) {
        var data = element.dataset;
        var options = [];
        var capitalized = IS;
        capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
        var reserved = ["is", "hook" + capitalized];

        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                var value = data[key];

                if (key.indexOf(NS) === 0) {
                    key = key.slice(NS.length);
                    key = key.charAt(0).toLowerCase() + key.substring(1);

                    if (reserved.indexOf(key) === -1) {
                        options[key] = value;
                    }
                }
            }
        }

        return options;
    }

    /**
     * Parses the dataLayer string and returns the ID
     *
     * @private
     * @param {HTMLElement} item the accordion item
     * @returns {String} dataLayerId or undefined
     */
    function getDataLayerId(item) {
        if (item) {
            if (item.dataset.cmpDataLayer) {
                return Object.keys(JSON.parse(item.dataset.cmpDataLayer))[0];
            } else {
                return item.id;
            }
        }
        return null;
    }

    /**
     * Document ready handler and DOM mutation observers. Initializes Tabs components as necessary.
     *
     * @private
     */
    function onDocumentReady() {
        dataLayerEnabled = document.body.hasAttribute("data-cmp-data-layer-enabled");
        if (dataLayerEnabled) {
            dataLayerName = document.body.getAttribute("data-cmp-data-layer-name") || "adobeDataLayer";
            dataLayer = window[dataLayerName] = window[dataLayerName] || [];
        }

        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Tabs({ element: elements[i], options: readData(elements[i]) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body = document.querySelector("body");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new Tabs({ element: element, options: readData(element) });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

    if (containerUtils) {
        window.addEventListener("load", containerUtils.scrollToAnchor, false);
    }

}());

/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function(document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.utils = (function() {
        var NS = "cmp";

        /**
         * Reads options data from the Component wrapper element, defined via {@code data-cmp-*} data attributes
         *
         * @param {HTMLElement} element The component element to read options data from
         * @param {String} is The component identifier
         * @returns {String[]} The options read from the component data attributes
         */
        var readData = function(element, is) {
            var data = element.dataset;
            var options = [];
            var capitalized = is;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var reserved = ["is", "hook" + capitalized];

            for (var key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    var value = data[key];

                    if (key.indexOf(NS) === 0) {
                        key = key.slice(NS.length);
                        key = key.charAt(0).toLowerCase() + key.substring(1);

                        if (reserved.indexOf(key) === -1) {
                            options[key] = value;
                        }
                    }
                }
            }
            return options;
        };

        /**
         * Set up the final properties of a component by evaluating the transform function or fall back to the default value on demand
         * @param {String[]} options the options to transform
         * @param {Object} properties object of properties of property functions
         * @returns {Object} transformed properties
         */
        var setupProperties = function(options, properties) {
            var transformedProperties = {};

            for (var key in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, key)) {
                    var property = properties[key];
                    if (options && options[key] != null) {
                        if (property && typeof property.transform === "function") {
                            transformedProperties[key] = property.transform(options[key]);
                        } else {
                            transformedProperties[key] = options[key];
                        }
                    } else {
                        transformedProperties[key] = properties[key]["default"];
                    }
                }
            }
            return transformedProperties;
        };


        return {
            readData: readData,
            setupProperties: setupProperties
        };
    }());
}(window.document));

/*******************************************************************************
 * Copyright 2018 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function() {
    "use strict";

    var containerUtils = window.CQ && window.CQ.CoreComponents && window.CQ.CoreComponents.container && window.CQ.CoreComponents.container.utils ? window.CQ.CoreComponents.container.utils : undefined;
    if (!containerUtils) {
        // eslint-disable-next-line no-console
        console.warn("Tabs: container utilities at window.CQ.CoreComponents.container.utils are not available. This can lead to missing features. Ensure the core.wcm.components.commons.site.container client library is included on the page.");
    }
    var dataLayerEnabled;
    var dataLayer;
    var dataLayerName;

    var NS = "cmp";
    var IS = "carousel";

    var keyCodes = {
        SPACE: 32,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40
    };

    var selectors = {
        self: "[data-" + NS + '-is="' + IS + '"]'
    };

    var properties = {
        /**
         * Determines whether the Carousel will automatically transition between slides
         *
         * @memberof Carousel
         * @type {Boolean}
         * @default false
         */
        "autoplay": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        },
        /**
         * Duration (in milliseconds) before automatically transitioning to the next slide
         *
         * @memberof Carousel
         * @type {Number}
         * @default 5000
         */
        "delay": {
            "default": 5000,
            "transform": function(value) {
                value = parseFloat(value);
                return !isNaN(value) ? value : null;
            }
        },
        /**
         * Determines whether automatic pause on hovering the carousel is disabled
         *
         * @memberof Carousel
         * @type {Boolean}
         * @default false
         */
        "autopauseDisabled": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        }
    };

    /**
     * Carousel Configuration
     *
     * @typedef {Object} CarouselConfig Represents a Carousel configuration
     * @property {HTMLElement} element The HTMLElement representing the Carousel
     * @property {*[]} options The Carousel options
     */

    /**
     * Carousel
     *
     * @class Carousel
     * @classdesc An interactive Carousel component for navigating a list of generic items
     * @param {CarouselConfig} config The Carousel configuration
     */
    function Carousel(config) {
        var that = this;

        if (config && config.element) {
            init(config);
        }

        /**
         * Initializes the Carousel
         *
         * @private
         * @param {CarouselConfig} config The Carousel configuration
         */
        function init(config) {
            that._config = config;

            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");

            setupProperties(config.options);
            cacheElements(config.element);

            that._active = 0;
            that._paused = false;

            if (that._elements.item) {
                initializeActive();
                bindEvents();
                resetAutoplayInterval();
                refreshPlayPauseActions();
                scrollToDeepLinkIdInCarousel();
            }

            // TODO: This section is only relevant in edit mode and should move to the editor clientLib
            if (window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
                /*
                 * Editor message handling:
                 * - subscribe to "cmp.panelcontainer" message requests sent by the editor frame
                 * - check that the message data panel container type is correct and that the id (path) matches this specific Carousel component
                 * - if so, route the "navigate" operation to enact a navigation of the Carousel based on index data
                 */
                window.CQ = window.CQ || {};
                window.CQ.CoreComponents = window.CQ.CoreComponents || {};
                window.CQ.CoreComponents.MESSAGE_CHANNEL = window.CQ.CoreComponents.MESSAGE_CHANNEL || new window.Granite.author.MessageChannel("cqauthor", window);
                window.CQ.CoreComponents.MESSAGE_CHANNEL.subscribeRequestMessage("cmp.panelcontainer", function(message) {
                    if (message.data && message.data.type === "cmp-carousel" && message.data.id === that._elements.self.dataset["cmpPanelcontainerId"]) {
                        if (message.data.operation === "navigate") {
                            navigate(message.data.index);
                        }
                    }
                });
            }
        }

        /**
         * Displays the slide containing the element that corresponds to the deep link in the URI fragment
         * and scrolls the browser to this element.
         */
        function scrollToDeepLinkIdInCarousel() {
            if (containerUtils) {
                var deepLinkItemIdx = containerUtils.getDeepLinkItemIdx(that, "item", "item");
                if (deepLinkItemIdx > -1) {
                    var deepLinkItem = that._elements["item"][deepLinkItemIdx];
                    if (deepLinkItem && that._elements["item"][that._active].id !== deepLinkItem.id) {
                        navigateAndFocusIndicator(deepLinkItemIdx, true);
                        // pause the carousel auto-rotation
                        pause();
                    }
                    var hashId = window.location.hash.substring(1);
                    if (hashId) {
                        var hashItem = document.querySelector("[id='" + hashId + "']");
                        if (hashItem) {
                            hashItem.scrollIntoView();
                        }
                    }
                }
            }
        }

        /**
         * Caches the Carousel elements as defined via the {@code data-carousel-hook="ELEMENT_NAME"} markup API
         *
         * @private
         * @param {HTMLElement} wrapper The Carousel wrapper element
         */
        function cacheElements(wrapper) {
            that._elements = {};
            that._elements.self = wrapper;
            var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");

            for (var i = 0; i < hooks.length; i++) {
                var hook = hooks[i];
                var capitalized = IS;
                capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
                var key = hook.dataset[NS + "Hook" + capitalized];
                if (that._elements[key]) {
                    if (!Array.isArray(that._elements[key])) {
                        var tmp = that._elements[key];
                        that._elements[key] = [tmp];
                    }
                    that._elements[key].push(hook);
                } else {
                    that._elements[key] = hook;
                }
            }
        }

        /**
         * Sets up properties for the Carousel based on the passed options.
         *
         * @private
         * @param {Object} options The Carousel options
         */
        function setupProperties(options) {
            that._properties = {};

            for (var key in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, key)) {
                    var property = properties[key];
                    var value = null;

                    if (options && options[key] != null) {
                        value = options[key];

                        // transform the provided option
                        if (property && typeof property.transform === "function") {
                            value = property.transform(value);
                        }
                    }

                    if (value === null) {
                        // value still null, take the property default
                        value = properties[key]["default"];
                    }

                    that._properties[key] = value;
                }
            }
        }

        /**
         * Binds Carousel event handling
         *
         * @private
         */
        function bindEvents() {
            window.addEventListener("hashchange", scrollToDeepLinkIdInCarousel, false);
            if (that._elements["previous"]) {
                that._elements["previous"].addEventListener("click", function() {
                    var index = getPreviousIndex();
                    navigate(index);
                    if (dataLayerEnabled) {
                        dataLayer.push({
                            event: "cmp:show",
                            eventInfo: {
                                path: "component." + getDataLayerId(that._elements.item[index])
                            }
                        });
                    }
                });
            }

            if (that._elements["next"]) {
                that._elements["next"].addEventListener("click", function() {
                    var index = getNextIndex();
                    navigate(index);
                    if (dataLayerEnabled) {
                        dataLayer.push({
                            event: "cmp:show",
                            eventInfo: {
                                path: "component." + getDataLayerId(that._elements.item[index])
                            }
                        });
                    }
                });
            }

            var indicators = that._elements["indicator"];
            if (indicators) {
                for (var i = 0; i < indicators.length; i++) {
                    (function(index) {
                        indicators[i].addEventListener("click", function(event) {
                            navigateAndFocusIndicator(index);
                            // pause the carousel auto-rotation
                            pause();
                        });
                    })(i);
                }
            }

            if (that._elements["pause"]) {
                if (that._properties.autoplay) {
                    that._elements["pause"].addEventListener("click", onPauseClick);
                }
            }

            if (that._elements["play"]) {
                if (that._properties.autoplay) {
                    that._elements["play"].addEventListener("click", onPlayClick);
                }
            }

            that._elements.self.addEventListener("keydown", onKeyDown);

            if (!that._properties.autopauseDisabled) {
                that._elements.self.addEventListener("mouseenter", onMouseEnter);
                that._elements.self.addEventListener("mouseleave", onMouseLeave);
            }

            // for accessibility we pause animation when a element get focused
            var items = that._elements["item"];
            if (items) {
                for (var j = 0; j < items.length; j++) {
                    items[j].addEventListener("focusin", onMouseEnter);
                    items[j].addEventListener("focusout", onMouseLeave);
                }
            }
        }

        /**
         * Handles carousel keydown events
         *
         * @private
         * @param {Object} event The keydown event
         */
        function onKeyDown(event) {
            var index = that._active;
            var lastIndex = that._elements["indicator"].length - 1;

            switch (event.keyCode) {
                case keyCodes.ARROW_LEFT:
                case keyCodes.ARROW_UP:
                    event.preventDefault();
                    if (index > 0) {
                        navigateAndFocusIndicator(index - 1);
                    }
                    break;
                case keyCodes.ARROW_RIGHT:
                case keyCodes.ARROW_DOWN:
                    event.preventDefault();
                    if (index < lastIndex) {
                        navigateAndFocusIndicator(index + 1);
                    }
                    break;
                case keyCodes.HOME:
                    event.preventDefault();
                    navigateAndFocusIndicator(0);
                    break;
                case keyCodes.END:
                    event.preventDefault();
                    navigateAndFocusIndicator(lastIndex);
                    break;
                case keyCodes.SPACE:
                    if (that._properties.autoplay && (event.target !== that._elements["previous"] && event.target !== that._elements["next"])) {
                        event.preventDefault();
                        if (!that._paused) {
                            pause();
                        } else {
                            play();
                        }
                    }
                    if (event.target === that._elements["pause"]) {
                        that._elements["play"].focus();
                    }
                    if (event.target === that._elements["play"]) {
                        that._elements["pause"].focus();
                    }
                    break;
                default:
                    return;
            }
        }

        /**
         * Handles carousel mouseenter events
         *
         * @private
         * @param {Object} event The mouseenter event
         */
        function onMouseEnter(event) {
            clearAutoplayInterval();
        }

        /**
         * Handles carousel mouseleave events
         *
         * @private
         * @param {Object} event The mouseleave event
         */
        function onMouseLeave(event) {
            resetAutoplayInterval();
        }

        /**
         * Handles pause element click events
         *
         * @private
         * @param {Object} event The click event
         */
        function onPauseClick(event) {
            pause();
            that._elements["play"].focus();
        }

        /**
         * Handles play element click events
         *
         * @private
         * @param {Object} event The click event
         */
        function onPlayClick() {
            play();
            that._elements["pause"].focus();
        }

        /**
         * Pauses the playing of the Carousel. Sets {@code Carousel#_paused} marker.
         * Only relevant when autoplay is enabled
         *
         * @private
         */
        function pause() {
            that._paused = true;
            clearAutoplayInterval();
            refreshPlayPauseActions();
        }

        /**
         * Enables the playing of the Carousel. Sets {@code Carousel#_paused} marker.
         * Only relevant when autoplay is enabled
         *
         * @private
         */
        function play() {
            that._paused = false;

            // If the Carousel is hovered, don't begin auto transitioning until the next mouse leave event
            var hovered = false;
            if (that._elements.self.parentElement) {
                hovered = that._elements.self.parentElement.querySelector(":hover") === that._elements.self;
            }
            if (that._properties.autopauseDisabled || !hovered) {
                resetAutoplayInterval();
            }

            refreshPlayPauseActions();
        }

        /**
         * Refreshes the play/pause action markup based on the {@code Carousel#_paused} state
         *
         * @private
         */
        function refreshPlayPauseActions() {
            setActionDisabled(that._elements["pause"], that._paused);
            setActionDisabled(that._elements["play"], !that._paused);
        }

        /**
         * Initialize {@code Carousel#_active} based on the active item of the carousel.
         */
        function initializeActive() {
            var items = that._elements["item"];
            if (items && Array.isArray(items)) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].classList.contains("cmp-carousel__item--active")) {
                        that._active = i;
                        break;
                    }
                }
            }
        }

        /**
         * Refreshes the item markup based on the current {@code Carousel#_active} index
         *
         * @private
         */
        function refreshActive() {
            var items = that._elements["item"];
            var indicators = that._elements["indicator"];

            if (items) {
                if (Array.isArray(items)) {
                    for (var i = 0; i < items.length; i++) {
                        if (i === parseInt(that._active)) {
                            items[i].classList.add("cmp-carousel__item--active");
                            items[i].removeAttribute("aria-hidden");
                            indicators[i].classList.add("cmp-carousel__indicator--active");
                            indicators[i].setAttribute("aria-selected", true);
                            indicators[i].setAttribute("tabindex", "0");
                        } else {
                            items[i].classList.remove("cmp-carousel__item--active");
                            items[i].setAttribute("aria-hidden", true);
                            indicators[i].classList.remove("cmp-carousel__indicator--active");
                            indicators[i].setAttribute("aria-selected", false);
                            indicators[i].setAttribute("tabindex", "-1");
                        }
                    }
                } else {
                    // only one item
                    items.classList.add("cmp-carousel__item--active");
                    indicators.classList.add("cmp-carousel__indicator--active");
                }
            }
        }

        /**
         * Focuses the element and prevents scrolling the element into view
         *
         * @param {HTMLElement} element Element to focus
         */
        function focusWithoutScroll(element) {
            var x = window.scrollX || window.pageXOffset;
            var y = window.scrollY || window.pageYOffset;
            element.focus();
            window.scrollTo(x, y);
        }

        /**
         * Retrieves the next active index, with looping
         *
         * @private
         * @returns {Number} Index of the next carousel item
         */
        function getNextIndex() {
            return that._active === (that._elements["item"].length - 1) ? 0 : that._active + 1;
        }

        /**
         * Retrieves the previous active index, with looping
         *
         * @private
         * @returns {Number} Index of the previous carousel item
         */
        function getPreviousIndex() {
            return that._active === 0 ? (that._elements["item"].length - 1) : that._active - 1;
        }

        /**
         * Navigates to the item at the provided index
         *
         * @private
         * @param {Number} index The index of the item to navigate to
         * @param {Boolean} keepHash true to keep the hash in the URL, false to update it
         */
        function navigate(index, keepHash) {
            if (index < 0 || index > (that._elements["item"].length - 1)) {
                return;
            }

            that._active = index;
            refreshActive();

            if (!keepHash && containerUtils) {
                containerUtils.updateUrlHash(that, "item", index);
            }

            if (dataLayerEnabled) {
                var carouselId = that._elements.self.id;
                var activeItem = getDataLayerId(that._elements.item[index]);
                var updatePayload = { component: {} };
                updatePayload.component[carouselId] = { shownItems: [activeItem] };

                var removePayload = { component: {} };
                removePayload.component[carouselId] = { shownItems: undefined };

                dataLayer.push(removePayload);
                dataLayer.push(updatePayload);
            }

            // reset the autoplay transition interval following navigation, if not already hovering the carousel
            if (that._elements.self.parentElement) {
                if (that._elements.self.parentElement.querySelector(":hover") !== that._elements.self) {
                    resetAutoplayInterval();
                }
            }
        }

        /**
         * Navigates to the item at the provided index and ensures the active indicator gains focus
         *
         * @private
         * @param {Number} index The index of the item to navigate to
         * @param {Boolean} keepHash true to keep the hash in the URL, false to update it
         */
        function navigateAndFocusIndicator(index, keepHash) {
            navigate(index, keepHash);
            focusWithoutScroll(that._elements["indicator"][index]);

            if (dataLayerEnabled) {
                dataLayer.push({
                    event: "cmp:show",
                    eventInfo: {
                        path: "component." + getDataLayerId(that._elements.item[index])
                    }
                });
            }
        }

        /**
         * Starts/resets automatic slide transition interval
         *
         * @private
         */
        function resetAutoplayInterval() {
            if (that._paused || !that._properties.autoplay) {
                return;
            }
            clearAutoplayInterval();
            that._autoplayIntervalId = window.setInterval(function() {
                if (document.visibilityState && document.hidden) {
                    return;
                }
                var indicators = that._elements["indicators"];
                if (indicators !== document.activeElement && indicators.contains(document.activeElement)) {
                    // if an indicator has focus, ensure we switch focus following navigation
                    navigateAndFocusIndicator(getNextIndex(), true);
                } else {
                    navigate(getNextIndex(), true);
                }
            }, that._properties.delay);
        }

        /**
         * Clears/pauses automatic slide transition interval
         *
         * @private
         */
        function clearAutoplayInterval() {
            window.clearInterval(that._autoplayIntervalId);
            that._autoplayIntervalId = null;
        }

        /**
         * Sets the disabled state for an action and toggles the appropriate CSS classes
         *
         * @private
         * @param {HTMLElement} action Action to disable
         * @param {Boolean} [disable] {@code true} to disable, {@code false} to enable
         */
        function setActionDisabled(action, disable) {
            if (!action) {
                return;
            }
            if (disable !== false) {
                action.disabled = true;
                action.classList.add("cmp-carousel__action--disabled");
            } else {
                action.disabled = false;
                action.classList.remove("cmp-carousel__action--disabled");
            }
        }
    }

    /**
     * Parses the dataLayer string and returns the ID
     *
     * @private
     * @param {HTMLElement} item the accordion item
     * @returns {String} dataLayerId or undefined
     */
    function getDataLayerId(item) {
        if (item) {
            if (item.dataset.cmpDataLayer) {
                return Object.keys(JSON.parse(item.dataset.cmpDataLayer))[0];
            } else {
                return item.id;
            }
        }
        return null;
    }

    /**
     * Document ready handler and DOM mutation observers. Initializes Carousel components as necessary.
     *
     * @private
     */
    function onDocumentReady() {
        dataLayerEnabled = document.body.hasAttribute("data-cmp-data-layer-enabled");
        if (dataLayerEnabled) {
            dataLayerName = document.body.getAttribute("data-cmp-data-layer-name") || "adobeDataLayer";
            dataLayer = window[dataLayerName] = window[dataLayerName] || [];
        }

        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Carousel({ element: elements[i], options: CMP.utils.readData(elements[i], IS) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body = document.querySelector("body");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new Carousel({ element: element, options: CMP.utils.readData(element, IS) });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    var documentReady = document.readyState !== "loading" ? Promise.resolve() : new Promise(function(resolve) {
        document.addEventListener("DOMContentLoaded", resolve);
    });
    Promise.all([documentReady]).then(onDocumentReady);

    if (containerUtils) {
        window.addEventListener("load", containerUtils.scrollToAnchor, false);
    }

}());

/*******************************************************************************
 * Copyright 2017 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
if (window.Element && !Element.prototype.closest) {
    // eslint valid-jsdoc: "off"
    Element.prototype.closest =
        function(s) {
            "use strict";
            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
            var el      = this;
            var i;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {
                    // continue
                }
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };
}

if (window.Element && !Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            "use strict";
            var matches = (this.document || this.ownerDocument).querySelectorAll(s);
            var i       = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {
                // continue
            }
            return i > -1;
        };
}

if (!Object.assign) {
    Object.assign = function(target, varArgs) { // .length of function is 2
        "use strict";
        if (target === null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource !== null) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}

(function(arr) {
    "use strict";
    arr.forEach(function(item) {
        if (Object.prototype.hasOwnProperty.call(item, "remove")) {
            return;
        }
        Object.defineProperty(item, "remove", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function(document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.utils = (function() {
        var NS = "cmp";

        /**
         * Reads options data from the Component wrapper element, defined via {@code data-cmp-*} data attributes
         *
         * @param {HTMLElement} element The component element to read options data from
         * @param {String} is The component identifier
         * @returns {String[]} The options read from the component data attributes
         */
        var readData = function(element, is) {
            var data = element.dataset;
            var options = [];
            var capitalized = is;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var reserved = ["is", "hook" + capitalized];

            for (var key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    var value = data[key];

                    if (key.indexOf(NS) === 0) {
                        key = key.slice(NS.length);
                        key = key.charAt(0).toLowerCase() + key.substring(1);

                        if (reserved.indexOf(key) === -1) {
                            options[key] = value;
                        }
                    }
                }
            }
            return options;
        };

        /**
         * Set up the final properties of a component by evaluating the transform function or fall back to the default value on demand
         * @param {String[]} options the options to transform
         * @param {Object} properties object of properties of property functions
         * @returns {Object} transformed properties
         */
        var setupProperties = function(options, properties) {
            var transformedProperties = {};

            for (var key in properties) {
                if (Object.prototype.hasOwnProperty.call(properties, key)) {
                    var property = properties[key];
                    if (options && options[key] != null) {
                        if (property && typeof property.transform === "function") {
                            transformedProperties[key] = property.transform(options[key]);
                        } else {
                            transformedProperties[key] = options[key];
                        }
                    } else {
                        transformedProperties[key] = properties[key]["default"];
                    }
                }
            }
            return transformedProperties;
        };


        return {
            readData: readData,
            setupProperties: setupProperties
        };
    }());
}(window.document));

/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function(document) {
    "use strict";

    window.CMP = window.CMP || {};
    window.CMP.image = window.CMP.image || {};
    window.CMP.image.dynamicMedia = (function() {
        var autoSmartCrops = {};
        var SRC_URI_TEMPLATE_WIDTH_VAR = "{.width}";
        var SRC_URI_TEMPLATE_DPR_VAR = "{dpr}";
        var SRC_URI_DPR_OFF = "dpr=off";
        var SRC_URI_DPR_ON = "dpr=on,{dpr}";
        var dpr = window.devicePixelRatio || 1;
        var config = {
            minWidth: 20
        };

        /**
         * get auto smart crops from dm
         * @param {String} src the src uri
         * @returns {{}} the smart crop json object
         */
        var getAutoSmartCrops = function(src) {
            var request = new XMLHttpRequest();
            var url = src.split(SRC_URI_TEMPLATE_WIDTH_VAR)[0] + "?req=set,json";
            request.open("GET", url, false);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // success status
                    var responseText = request.responseText;
                    var rePayload = new RegExp(/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gmi);
                    var rePayloadJSON = new RegExp(/^{[\s\S]*}$/gmi);
                    var resPayload = rePayload.exec(responseText);
                    var payload;
                    if (resPayload) {
                        var payloadStr = resPayload[2];
                        if (rePayloadJSON.test(payloadStr)) {
                            payload = JSON.parse(payloadStr);
                        }

                    }
                    // check "relation" - only in case of smartcrop preset
                    if (payload && payload.set.relation && payload.set.relation.length > 0) {
                        for (var i = 0; i < payload.set.relation.length; i++) {
                            autoSmartCrops[parseInt(payload.set.relation[i].userdata.SmartCropWidth)] =
                                ":" + payload.set.relation[i].userdata.SmartCropDef;
                        }
                    }
                } else {
                    // error status
                }
            };
            request.send();
            return autoSmartCrops;
        };

        /**
         * Build and return the srcset value based on the available auto smart crops
         * @param {String} src the src uri
         * @param {Object} smartCrops the smart crops object
         * @returns {String} the srcset
         */
        var getSrcSet = function(src, smartCrops) {
            var srcset;
            var keys = Object.keys(smartCrops);
            if (keys.length > 0) {
                srcset = [];
                for (var key in autoSmartCrops) {
                    srcset.push(src.replace(SRC_URI_TEMPLATE_WIDTH_VAR, smartCrops[key]) + " " + key + "w");
                }
            }
            return  srcset.join(",");
        };

        /**
         * Get the optimal width based on the available sizes
         * @param {[Number]} sizes the available sizes
         * @param {Number} width the element width
         * @returns {String} the optimal width
         */
        function getOptimalWidth(sizes, width) {
            var len = sizes.length;
            var key = 0;

            while ((key < len - 1) && (sizes[key] < width)) {
                key++;
            }

            return sizes[key] !== undefined ? sizes[key].toString() : width;
        }

        /**
         * Get the width of an element or parent element if the width is smaller than the minimum width
         * @param {HTMLElement} component the image component
         * @param {HTMLElement | Node} parent the parent element
         * @returns {Number} the width of the element
         */
        var getWidth = function(component, parent) {
            var width = component.offsetWidth;
            while (width < config.minWidth && parent && !component._autoWidth) {
                width =  parent.offsetWidth;
                parent = parent.parentNode;
            }
            return width;
        };

        /**
         * Set the src and srcset attribute for a Dynamic Media Image which auto smart crops enabled.
         * @param {HTMLElement} component the image component
         * @param {{}} properties the component properties
         */
        var setDMAttributes = function(component, properties) {
            // for v3 we first have to turn the dpr on
            var src = properties.src.replace(SRC_URI_DPR_OFF, SRC_URI_DPR_ON);
            src = src.replace(SRC_URI_TEMPLATE_DPR_VAR, dpr);
            var smartCrops = {};
            var width;
            if (properties["smartcroprendition"] === "SmartCrop:Auto") {
                smartCrops = getAutoSmartCrops(src);
            }
            var hasWidths = (properties.widths && properties.widths.length > 0) || Object.keys(smartCrops).length > 0;
            if (hasWidths) {
                var image = component.querySelector("img");
                var elemWidth = getWidth(component, component.parentNode);
                if (properties["smartcroprendition"] === "SmartCrop:Auto") {
                    image.setAttribute("srcset", CMP.image.dynamicMedia.getSrcSet(src, smartCrops));
                    width = getOptimalWidth(Object.keys(smartCrops, elemWidth));
                    image.setAttribute("src", CMP.image.dynamicMedia.getSrc(src, smartCrops[width]));
                } else {
                    width = getOptimalWidth(properties.widths, elemWidth);
                    image.setAttribute("src", CMP.image.dynamicMedia.getSrc(src, width));
                }
            }
        };

        /**
         * Get the src attribute based on the optimal width
         * @param {String} src the src uri
         * @param {String} width the element width
         * @returns {String} the final src attribute
         */
        var getSrc = function(src, width) {
            if (src.indexOf(SRC_URI_TEMPLATE_WIDTH_VAR) > -1) {
                src = src.replace(SRC_URI_TEMPLATE_WIDTH_VAR, width);
            }
            return src;
        };


        return {
            getAutoSmartCrops: getAutoSmartCrops,
            getSrcSet: getSrcSet,
            getSrc: getSrc,
            setDMAttributes: setDMAttributes,
            getWidth: getWidth
        };
    }());
    document.dispatchEvent(new CustomEvent("core.wcm.components.commons.site.image.dynamic-media.loaded"));
}(window.document));

/*******************************************************************************
 * Copyright 2016 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function() {
    "use strict";

    var NS = "cmp";
    var IS = "image";

    var EMPTY_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    var LAZY_THRESHOLD_DEFAULT = 0;
    var SRC_URI_TEMPLATE_WIDTH_VAR = "{.width}";
    var SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY = "width={width}";
    var SRC_URI_TEMPLATE_DPR_VAR = "{dpr}";

    var selectors = {
        self: "[data-" + NS + '-is="' + IS + '"]',
        image: '[data-cmp-hook-image="image"]',
        map: '[data-cmp-hook-image="map"]',
        area: '[data-cmp-hook-image="area"]'
    };

    var lazyLoader = {
        "cssClass": "cmp-image__image--is-loading",
        "style": {
            "height": 0,
            "padding-bottom": "" // will be replaced with % ratio
        }
    };

    var properties = {
        /**
         * An array of alternative image widths (in pixels).
         * Used to replace a {.width} variable in the src property with an optimal width if a URI template is provided.
         *
         * @memberof Image
         * @type {Number[]}
         * @default []
         */
        "widths": {
            "default": [],
            "transform": function(value) {
                var widths = [];
                value.split(",").forEach(function(item) {
                    item = parseFloat(item);
                    if (!isNaN(item)) {
                        widths.push(item);
                    }
                });
                return widths;
            }
        },
        /**
         * Indicates whether the image should be rendered lazily.
         *
         * @memberof Image
         * @type {Boolean}
         * @default false
         */
        "lazy": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        },
        /**
         * Indicates image is DynamicMedia image.
         *
         * @memberof Image
         * @type {Boolean}
         * @default false
         */
        "dmimage": {
            "default": false,
            "transform": function(value) {
                return !(value === null || typeof value === "undefined");
            }
        },
        /**
         * The lazy threshold.
         * This is the number of pixels, in advance of becoming visible, when an lazy-loading image should begin
         * to load.
         *
         * @memberof Image
         * @type {Number}
         * @default 0
         */
        "lazythreshold": {
            "default": 0,
            "transform": function(value) {
                var val =  parseInt(value);
                if (isNaN(val)) {
                    return LAZY_THRESHOLD_DEFAULT;
                }
                return val;
            }
        },
        /**
         * The image source.
         *
         * Can be a simple image source, or a URI template representation that
         * can be variable expanded - useful for building an image configuration with an alternative width.
         * e.g. '/path/image.coreimg{.width}.jpeg/1506620954214.jpeg'
         *
         * @memberof Image
         * @type {String}
         */
        "src": {
            "transform": function(value) {
                return decodeURIComponent(value);
            }
        }
    };

    var devicePixelRatio = window.devicePixelRatio || 1;

    function Image(config) {
        var that = this;

        var smartCrops = {};

        var useAssetDelivery = false;
        var srcUriTemplateWidthVar = SRC_URI_TEMPLATE_WIDTH_VAR;

        function init(config) {
            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");

            // check if asset delivery is used
            if (config.options.src && config.options.src.indexOf(SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY) >= 0) {
                useAssetDelivery = true;
                srcUriTemplateWidthVar = SRC_URI_TEMPLATE_WIDTH_VAR_ASSET_DELIVERY;
            }

            that._properties = CMP.utils.setupProperties(config.options, properties);
            cacheElements(config.element);
            // check image is DM asset; if true try to make req=set
            if (config.options.src && Object.prototype.hasOwnProperty.call(config.options, "dmimage") && (config.options["smartcroprendition"] === "SmartCrop:Auto")) {
                smartCrops = CMP.image.dynamicMedia.getAutoSmartCrops(config.options.src);
            }

            if (!that._elements.noscript) {
                return;
            }

            that._elements.container = that._elements.link ? that._elements.link : that._elements.self;

            unwrapNoScript();

            if (that._properties.lazy) {
                addLazyLoader();
            }

            if (that._elements.map) {
                that._elements.image.addEventListener("load", onLoad);
            }

            window.addEventListener("resize", onWindowResize);
            ["focus", "click", "load", "transitionend", "animationend", "scroll"].forEach(function(name) {
                document.addEventListener(name, that.update);
            });

            that._elements.image.addEventListener("cmp-image-redraw", that.update);

            that._interSectionObserver = new IntersectionObserver(function(entries, interSectionObserver) {
                entries.forEach(function(entry) {
                    if (entry.intersectionRatio > 0) {
                        that.update();
                    }
                });
            });
            that._interSectionObserver.observe(that._elements.self);

            that.update();
        }

        function loadImage() {
            var hasWidths = (that._properties.widths && that._properties.widths.length > 0) || Object.keys(smartCrops).length > 0;
            var replacement;
            if (Object.keys(smartCrops).length > 0) {
                var optimalWidth = getOptimalWidth(Object.keys(smartCrops), false);
                replacement = smartCrops[optimalWidth];
            } else {
                replacement = hasWidths ? (that._properties.dmimage ? "" : ".") + getOptimalWidth(that._properties.widths, true) : "";
            }
            if (useAssetDelivery) {
                replacement = replacement !== "" ? ("width=" + replacement.substring(1)) : "";
            }
            var url = that._properties.src.replace(srcUriTemplateWidthVar, replacement);
            url = url.replace(SRC_URI_TEMPLATE_DPR_VAR, devicePixelRatio);

            var imgSrcAttribute = that._elements.image.getAttribute("src");

            if (url !== imgSrcAttribute) {
                if (imgSrcAttribute === null || imgSrcAttribute === EMPTY_PIXEL) {
                    that._elements.image.setAttribute("src", url);
                } else {
                    var urlTemplateParts = that._properties.src.split(srcUriTemplateWidthVar);
                    // check if image src was dynamically swapped meanwhile (e.g. by Target)
                    var isImageRefSame = imgSrcAttribute.startsWith(urlTemplateParts[0]);
                    if (isImageRefSame && urlTemplateParts.length > 1) {
                        isImageRefSame = imgSrcAttribute.endsWith(urlTemplateParts[urlTemplateParts.length - 1]);
                    }
                    if (isImageRefSame) {
                        that._elements.image.setAttribute("src", url);
                        if (!hasWidths) {
                            window.removeEventListener("scroll", that.update);
                        }
                    }
                }
            }
            if (that._lazyLoaderShowing) {
                that._elements.image.addEventListener("load", removeLazyLoader);
            }
            that._interSectionObserver.unobserve(that._elements.self);
        }

        function getOptimalWidth(widths, useDevicePixelRatio) {
            var container = that._elements.self;
            var containerWidth = container.clientWidth;
            while (containerWidth === 0 && container.parentNode) {
                container = container.parentNode;
                containerWidth = container.clientWidth;
            }

            var dpr = useDevicePixelRatio ? devicePixelRatio : 1;
            var optimalWidth = containerWidth * dpr;
            var len = widths.length;
            var key = 0;

            while ((key < len - 1) && (widths[key] < optimalWidth)) {
                key++;
            }

            return widths[key].toString();
        }

        function addLazyLoader() {
            var width = that._elements.image.getAttribute("width");
            var height = that._elements.image.getAttribute("height");

            if (width && height) {
                var ratio = (height / width) * 100;
                var styles = lazyLoader.style;

                styles["padding-bottom"] = ratio + "%";

                for (var s in styles) {
                    if (Object.prototype.hasOwnProperty.call(styles, s)) {
                        that._elements.image.style[s] = styles[s];
                    }
                }
            }
            that._elements.image.setAttribute("src", EMPTY_PIXEL);
            that._elements.image.classList.add(lazyLoader.cssClass);
            that._lazyLoaderShowing = true;
        }

        function unwrapNoScript() {
            var markup = decodeNoscript(that._elements.noscript.textContent.trim());
            var parser = new DOMParser();

            // temporary document avoids requesting the image before removing its src
            var temporaryDocument = parser.parseFromString(markup, "text/html");
            var imageElement = temporaryDocument.querySelector(selectors.image);
            imageElement.removeAttribute("src");
            that._elements.container.insertBefore(imageElement, that._elements.noscript);

            var mapElement = temporaryDocument.querySelector(selectors.map);
            if (mapElement) {
                that._elements.container.insertBefore(mapElement, that._elements.noscript);
            }

            that._elements.noscript.parentNode.removeChild(that._elements.noscript);
            if (that._elements.container.matches(selectors.image)) {
                that._elements.image = that._elements.container;
            } else {
                that._elements.image = that._elements.container.querySelector(selectors.image);
            }

            that._elements.map = that._elements.container.querySelector(selectors.map);
            that._elements.areas = that._elements.container.querySelectorAll(selectors.area);
        }

        function removeLazyLoader() {
            that._elements.image.classList.remove(lazyLoader.cssClass);
            for (var property in lazyLoader.style) {
                if (Object.prototype.hasOwnProperty.call(lazyLoader.style, property)) {
                    that._elements.image.style[property] = "";
                }
            }
            that._elements.image.removeEventListener("load", removeLazyLoader);
            that._lazyLoaderShowing = false;
        }

        function isLazyVisible() {
            if (that._elements.container.offsetParent === null) {
                return false;
            }

            var wt = window.pageYOffset;
            var wb = wt + document.documentElement.clientHeight;
            var et = that._elements.container.getBoundingClientRect().top + wt;
            var eb = et + that._elements.container.clientHeight;

            return eb >= wt - that._properties.lazythreshold && et <= wb + that._properties.lazythreshold;
        }

        function resizeAreas() {
            if (that._elements.areas && that._elements.areas.length > 0) {
                for (var i = 0; i < that._elements.areas.length; i++) {
                    var width = that._elements.image.width;
                    var height = that._elements.image.height;

                    if (width && height) {
                        var relcoords = that._elements.areas[i].dataset.cmpRelcoords;
                        if (relcoords) {
                            var relativeCoordinates = relcoords.split(",");
                            var coordinates = new Array(relativeCoordinates.length);

                            for (var j = 0; j < coordinates.length; j++) {
                                if (j % 2 === 0) {
                                    coordinates[j] = parseInt(relativeCoordinates[j] * width);
                                } else {
                                    coordinates[j] = parseInt(relativeCoordinates[j] * height);
                                }
                            }

                            that._elements.areas[i].coords = coordinates;
                        }
                    }
                }
            }
        }

        function cacheElements(wrapper) {
            that._elements = {};
            that._elements.self = wrapper;
            var hooks = that._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");

            for (var i = 0; i < hooks.length; i++) {
                var hook = hooks[i];
                var capitalized = IS;
                capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
                var key = hook.dataset[NS + "Hook" + capitalized];
                that._elements[key] = hook;
            }
        }

        function onWindowResize() {
            that.update();
            resizeAreas();
        }

        function onLoad() {
            resizeAreas();
        }

        that.update = function() {
            if (that._properties.lazy) {
                if (isLazyVisible()) {
                    loadImage();
                }
            } else {
                loadImage();
            }
        };

        if (config && config.element) {
            init(config);
        }
    }

    function onDocumentReady() {
        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Image({ element: elements[i], options: CMP.utils.readData(elements[i], IS) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body             = document.querySelector("body");
        var observer         = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new Image({ element: element, options: CMP.utils.readData(element, IS) });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    var documentReady = document.readyState !== "loading" ? Promise.resolve() : new Promise(function(resolve) {
        document.addEventListener("DOMContentLoaded", resolve);
    });

    Promise.all([documentReady]).then(onDocumentReady);
    /*
        on drag & drop of the component into a parsys, noscript's content will be escaped multiple times by the editor which creates
        the DOM for editing; the HTML parser cannot be used here due to the multiple escaping
     */
    function decodeNoscript(text) {
        text = text.replace(/&(amp;)*lt;/g, "<");
        text = text.replace(/&(amp;)*gt;/g, ">");
        return text;
    }

})();

/*******************************************************************************
 * Copyright 2017 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function() {
    "use strict";

    var NS = "cmp";
    var IS = "search";

    var DELAY = 300; // time before fetching new results when the user is typing a search string
    var LOADING_DISPLAY_DELAY = 300; // minimum time during which the loading indicator is displayed
    var PARAM_RESULTS_OFFSET = "resultsOffset";

    var keyCodes = {
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        ARROW_UP: 38,
        ARROW_DOWN: 40
    };

    var selectors = {
        self: "[data-" + NS + '-is="' + IS + '"]',
        item: {
            self: "[data-" + NS + "-hook-" + IS + '="item"]',
            title: "[data-" + NS + "-hook-" + IS + '="itemTitle"]',
            focused: "." + NS + "-search__item--is-focused"
        }
    };

    var properties = {
        /**
         * The minimum required length of the search term before results are fetched.
         *
         * @memberof Search
         * @type {Number}
         * @default 3
         */
        minLength: {
            "default": 3,
            transform: function(value) {
                value = parseFloat(value);
                return isNaN(value) ? null : value;
            }
        },
        /**
         * The maximal number of results fetched by a search request.
         *
         * @memberof Search
         * @type {Number}
         * @default 10
         */
        resultsSize: {
            "default": 10,
            transform: function(value) {
                value = parseFloat(value);
                return isNaN(value) ? null : value;
            }
        }
    };

    var idCount = 0;

    function readData(element) {
        var data = element.dataset;
        var options = [];
        var capitalized = IS;
        capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
        var reserved = ["is", "hook" + capitalized];

        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                var value = data[key];

                if (key.indexOf(NS) === 0) {
                    key = key.slice(NS.length);
                    key = key.charAt(0).toLowerCase() + key.substring(1);

                    if (reserved.indexOf(key) === -1) {
                        options[key] = value;
                    }
                }
            }
        }

        return options;
    }

    function toggleShow(element, show) {
        if (element) {
            if (show !== false) {
                element.style.display = "block";
                element.setAttribute("aria-hidden", false);
            } else {
                element.style.display = "none";
                element.setAttribute("aria-hidden", true);
            }
        }
    }

    function serialize(form) {
        var query = [];
        if (form && form.elements) {
            for (var i = 0; i < form.elements.length; i++) {
                var node = form.elements[i];
                if (!node.disabled && node.name) {
                    var param = [node.name, encodeURIComponent(node.value)];
                    query.push(param.join("="));
                }
            }
        }
        return query.join("&");
    }

    function mark(node, regex) {
        if (!node || !regex) {
            return;
        }

        // text nodes
        if (node.nodeType === 3) {
            var nodeValue = node.nodeValue;
            var match = regex.exec(nodeValue);

            if (nodeValue && match) {
                var element = document.createElement("mark");
                element.className = NS + "-search__item-mark";
                element.appendChild(document.createTextNode(match[0]));

                var after = node.splitText(match.index);
                after.nodeValue = after.nodeValue.substring(match[0].length);
                node.parentNode.insertBefore(element, after);
            }
        } else if (node.hasChildNodes()) {
            for (var i = 0; i < node.childNodes.length; i++) {
                // recurse
                mark(node.childNodes[i], regex);
            }
        }
    }

    function Search(config) {
        if (config.element) {
            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");
        }

        this._cacheElements(config.element);
        this._setupProperties(config.options);

        this._action = this._elements.form.getAttribute("action");
        this._resultsOffset = 0;
        this._hasMoreResults = true;

        this._elements.input.addEventListener("input", this._onInput.bind(this));
        this._elements.input.addEventListener("focus", this._onInput.bind(this));
        this._elements.input.addEventListener("keydown", this._onKeydown.bind(this));
        this._elements.clear.addEventListener("click", this._onClearClick.bind(this));
        document.addEventListener("click", this._onDocumentClick.bind(this));
        this._elements.results.addEventListener("scroll", this._onScroll.bind(this));

        this._makeAccessible();
    }

    Search.prototype._displayResults = function() {
        if (this._elements.input.value.length === 0) {
            toggleShow(this._elements.clear, false);
            this._cancelResults();
        } else if (this._elements.input.value.length < this._properties.minLength) {
            toggleShow(this._elements.clear, true);
        } else {
            this._updateResults();
            toggleShow(this._elements.clear, true);
        }
    };

    Search.prototype._onScroll = function(event) {
        // fetch new results when the results to be scrolled down are less than the visible results
        if (this._elements.results.scrollTop + 2 * this._elements.results.clientHeight >= this._elements.results.scrollHeight) {
            this._resultsOffset += this._properties.resultsSize;
            this._displayResults();
        }
    };

    Search.prototype._onInput = function(event) {
        var self = this;
        self._cancelResults();
        // start searching when the search term reaches the minimum length
        this._timeout = setTimeout(function() {
            self._displayResults();
        }, DELAY);
    };

    Search.prototype._onKeydown = function(event) {
        var self = this;

        switch (event.keyCode) {
            case keyCodes.TAB:
                if (self._resultsOpen()) {
                    toggleShow(self._elements.results, false);
                    self._elements.input.setAttribute("aria-expanded", "false");
                }
                break;
            case keyCodes.ENTER:
                event.preventDefault();
                if (self._resultsOpen()) {
                    var focused = self._elements.results.querySelector(selectors.item.focused);
                    if (focused) {
                        focused.click();
                    }
                }
                break;
            case keyCodes.ESCAPE:
                self._cancelResults();
                break;
            case keyCodes.ARROW_UP:
                if (self._resultsOpen()) {
                    event.preventDefault();
                    self._stepResultFocus(true);
                }
                break;
            case keyCodes.ARROW_DOWN:
                if (self._resultsOpen()) {
                    event.preventDefault();
                    self._stepResultFocus();
                } else {
                    // test the input and if necessary fetch and display the results
                    self._onInput();
                }
                break;
            default:
                return;
        }
    };

    Search.prototype._onClearClick = function(event) {
        event.preventDefault();
        this._elements.input.value = "";
        toggleShow(this._elements.clear, false);
        toggleShow(this._elements.results, false);
        this._elements.input.setAttribute("aria-expanded", "false");
    };

    Search.prototype._onDocumentClick = function(event) {
        var inputContainsTarget =  this._elements.input.contains(event.target);
        var resultsContainTarget = this._elements.results.contains(event.target);

        if (!(inputContainsTarget || resultsContainTarget)) {
            toggleShow(this._elements.results, false);
            this._elements.input.setAttribute("aria-expanded", "false");
        }
    };

    Search.prototype._resultsOpen = function() {
        return this._elements.results.style.display !== "none";
    };

    Search.prototype._makeAccessible = function() {
        var id = NS + "-search-results-" + idCount;
        this._elements.input.setAttribute("aria-owns", id);
        this._elements.results.id = id;
        idCount++;
    };

    Search.prototype._generateItems = function(data, results) {
        var self = this;

        data.forEach(function(item) {
            var el = document.createElement("span");
            el.innerHTML = self._elements.itemTemplate.innerHTML;
            el.querySelectorAll(selectors.item.title)[0].appendChild(document.createTextNode(item.title));
            el.querySelectorAll(selectors.item.self)[0].setAttribute("href", self._safeHref(item.url));
            results.innerHTML += el.innerHTML;
        });
    };

    Search.prototype._safeHref = function(href) {
        var a = document.createElement("a");
        a.href = href;
        return a.pathname;
    };

    Search.prototype._markResults = function() {
        var nodeList = this._elements.results.querySelectorAll(selectors.item.self);
        var escapedTerm = this._elements.input.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        var regex = new RegExp("(" + escapedTerm + ")", "gi");

        for (var i = this._resultsOffset - 1; i < nodeList.length; ++i) {
            var result = nodeList[i];
            mark(result, regex);
        }
    };

    Search.prototype._stepResultFocus = function(reverse) {
        var results = this._elements.results.querySelectorAll(selectors.item.self);
        var focused = this._elements.results.querySelector(selectors.item.focused);
        var newFocused;
        var index = Array.prototype.indexOf.call(results, focused);
        var focusedCssClass = NS + "-search__item--is-focused";

        if (results.length > 0) {

            if (!reverse) {
                // highlight the next result
                if (index < 0) {
                    results[0].classList.add(focusedCssClass);
                    results[0].setAttribute("aria-selected", "true");
                } else if (index + 1 < results.length) {
                    results[index].classList.remove(focusedCssClass);
                    results[index].setAttribute("aria-selected", "false");
                    results[index + 1].classList.add(focusedCssClass);
                    results[index + 1].setAttribute("aria-selected", "true");
                }

                // if the last visible result is partially hidden, scroll up until it's completely visible
                newFocused = this._elements.results.querySelector(selectors.item.focused);
                if (newFocused) {
                    var bottomHiddenHeight = newFocused.offsetTop + newFocused.offsetHeight - this._elements.results.scrollTop - this._elements.results.clientHeight;
                    if (bottomHiddenHeight > 0) {
                        this._elements.results.scrollTop += bottomHiddenHeight;
                    } else {
                        this._onScroll();
                    }
                }

            } else {
                // highlight the previous result
                if (index >= 1) {
                    results[index].classList.remove(focusedCssClass);
                    results[index].setAttribute("aria-selected", "false");
                    results[index - 1].classList.add(focusedCssClass);
                    results[index - 1].setAttribute("aria-selected", "true");
                }

                // if the first visible result is partially hidden, scroll down until it's completely visible
                newFocused = this._elements.results.querySelector(selectors.item.focused);
                if (newFocused) {
                    var topHiddenHeight = this._elements.results.scrollTop - newFocused.offsetTop;
                    if (topHiddenHeight > 0) {
                        this._elements.results.scrollTop -= topHiddenHeight;
                    }
                }
            }
        }
    };

    Search.prototype._updateResults = function() {
        var self = this;
        if (self._hasMoreResults) {
            var request = new XMLHttpRequest();
            var url = self._action + "?" + serialize(self._elements.form) + "&" + PARAM_RESULTS_OFFSET + "=" + self._resultsOffset;

            request.open("GET", url, true);
            request.onload = function() {
                // when the results are loaded: hide the loading indicator and display the search icon after a minimum period
                setTimeout(function() {
                    toggleShow(self._elements.loadingIndicator, false);
                    toggleShow(self._elements.icon, true);
                }, LOADING_DISPLAY_DELAY);
                if (request.status >= 200 && request.status < 400) {
                    // success status
                    var data = JSON.parse(request.responseText);
                    if (data.length > 0) {
                        self._generateItems(data, self._elements.results);
                        self._markResults();
                        toggleShow(self._elements.results, true);
                        self._elements.input.setAttribute("aria-expanded", "true");
                    } else {
                        self._hasMoreResults = false;
                    }
                    // the total number of results is not a multiple of the fetched results:
                    // -> we reached the end of the query
                    if (self._elements.results.querySelectorAll(selectors.item.self).length % self._properties.resultsSize > 0) {
                        self._hasMoreResults = false;
                    }
                } else {
                    // error status
                }
            };
            // when the results are loading: display the loading indicator and hide the search icon
            toggleShow(self._elements.loadingIndicator, true);
            toggleShow(self._elements.icon, false);
            request.send();
        }
    };

    Search.prototype._cancelResults = function() {
        clearTimeout(this._timeout);
        this._elements.results.scrollTop = 0;
        this._resultsOffset = 0;
        this._hasMoreResults = true;
        this._elements.results.innerHTML = "";
        this._elements.input.setAttribute("aria-expanded", "false");
    };

    Search.prototype._cacheElements = function(wrapper) {
        this._elements = {};
        this._elements.self = wrapper;
        var hooks = this._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS + "]");

        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            var capitalized = IS;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var key = hook.dataset[NS + "Hook" + capitalized];
            this._elements[key] = hook;
        }
    };

    Search.prototype._setupProperties = function(options) {
        this._properties = {};

        for (var key in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, key)) {
                var property = properties[key];
                if (options && options[key] != null) {
                    if (property && typeof property.transform === "function") {
                        this._properties[key] = property.transform(options[key]);
                    } else {
                        this._properties[key] = options[key];
                    }
                } else {
                    this._properties[key] = properties[key]["default"];
                }
            }
        }
    };

    function onDocumentReady() {
        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Search({ element: elements[i], options: readData(elements[i]) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body = document.querySelector("body");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new Search({ element: element, options: readData(element) });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

})();

/*******************************************************************************
 * Copyright 2016 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function() {
    "use strict";

    var NS = "cmp";
    var IS = "formText";
    var IS_DASH = "form-text";
    var SELF_SELECTOR = "[data-" + NS + '-is="' + IS + '"]';

    var selectors = {
        self: SELF_SELECTOR,
        validationMessage: SELF_SELECTOR + " .cmp-form-text__validation-message"
    };

    var displayValidationMessage = false;

    var properties = {
        /**
         * A validation message to display if there is a type mismatch between the user input and expected input.
         *
         * @type {String}
         */
        constraintMessage: "",
        /**
         * A validation message to display if no input is supplied, but input is expected for the field.
         *
         * @type {String}
         */
        requiredMessage: ""
    };

    function readData(element) {
        var data = element.dataset;
        var options = [];
        var capitalized = IS;
        capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
        var reserved = ["is", "hook" + capitalized];

        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                var value = data[key];

                if (key.indexOf(NS) === 0) {
                    key = key.slice(NS.length);
                    key = key.charAt(0).toLowerCase() + key.substring(1);

                    if (reserved.indexOf(key) === -1) {
                        options[key] = value;
                    }
                }
            }
        }

        return options;
    }

    function FormText(config) {
        if (config.element) {
            // prevents multiple initialization
            config.element.removeAttribute("data-" + NS + "-is");
        }

        this._cacheElements(config.element);
        this._setupProperties(config.options);

        this._elements.input.addEventListener("invalid", this._onInvalid.bind(this));
        this._elements.input.addEventListener("input", this._onInput.bind(this));
        if (displayValidationMessage) {
            this._elements.input.checkValidity();
        }
    }

    FormText.prototype._onInvalid = function(event) {
        event.target.setCustomValidity("");
        if (event.target.validity.typeMismatch) {
            if (this._properties.constraintMessage) {
                event.target.setCustomValidity(this._properties.constraintMessage);
            }
        } else if (event.target.validity.valueMissing) {
            if (this._properties.requiredMessage) {
                event.target.setCustomValidity(this._properties.requiredMessage);
            }
        }
        if (displayValidationMessage) {
            var validationMessage = event.target.parentElement.querySelector(".cmp-form-text__validation-message");
            if (validationMessage) {
                validationMessage.innerText = event.target.validationMessage;
            }
        }
    };

    FormText.prototype._onInput = function(event) {
        event.target.setCustomValidity("");
        if (displayValidationMessage) {
            event.target.checkValidity();
        }
    };

    FormText.prototype._cacheElements = function(wrapper) {
        this._elements = {};
        this._elements.self = wrapper;
        var hooks = this._elements.self.querySelectorAll("[data-" + NS + "-hook-" + IS_DASH + "]");
        for (var i = 0; i < hooks.length; i++) {
            var hook = hooks[i];
            var capitalized = IS;
            capitalized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
            var key = hook.dataset[NS + "Hook" + capitalized];
            this._elements[key] = hook;
        }
    };

    FormText.prototype._setupProperties = function(options) {
        this._properties = {};

        for (var key in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, key)) {
                var property = properties[key];
                if (options && options[key] != null) {
                    if (property && typeof property.transform === "function") {
                        this._properties[key] = property.transform(options[key]);
                    } else {
                        this._properties[key] = options[key];
                    }
                } else {
                    this._properties[key] = properties[key]["default"];
                }
            }
        }
    };

    function onDocumentReady() {
        var validationMessages = document.querySelectorAll(selectors.validationMessage);
        if (validationMessages && validationMessages.length > 0) {
            displayValidationMessage = true;
        }

        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new FormText({ element: elements[i], options: readData(elements[i]) });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body = document.querySelector("body");
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new FormText({ element: element, options: readData(element) });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

})();

/*!
 Lo-Dash 0.10.0 lodash.com/license
 Underscore.js 1.4.2 underscorejs.org/LICENSE
*/
;(function(e,t){function s(e){if(e&&e.__wrapped__)return e;if(!(this instanceof s))return new s(e);this.__wrapped__=e}function o(e,t,n){t||(t=0);var r=e.length,i=r-t>=(n||Z);if(i)for(var s={},n=t-1;++n<r;){var o=e[n]+"";(bt.call(s,o)?s[o]:s[o]=[]).push(e[n])}return function(n){if(i){var r=n+"";return bt.call(s,r)&&-1<q(s[r],n)}return-1<q(e,n,t)}}function u(e){return e.charCodeAt(0)}function a(e,n){var r=e.b,i=n.b,e=e.a,n=n.a;if(e!==n){if(e>n||e===t)return 1;if(e<n||n===t)return-1}return r<i?-1:1}function f
(e,t,n){function r(){var u=arguments,a=s?this:t;return i||(e=t[o]),n.length&&(u=u.length?n.concat(St.call(u)):n),this instanceof r?(d.prototype=e.prototype,a=new d,u=e.apply(a,u),T(u)?u:a):e.apply(a,u)}var i=x(e),s=!n,o=t;return s&&(n=t),i||(t=e),r}function l(e,n){return e?"function"!=typeof e?function(t){return t[e]}:n!==t?function(t,r,i){return e.call(n,t,r,i)}:e:X}function c(){for(var e={b:"",c:"",e:qt,f:Qt,g:"",h:zt,i:Vt,j:dt,k:"",l:n},t,r=0;t=arguments[r];r++)for(var i in t)e[i]=t[i];t=e.a,e
.d=/^[^,]+/.exec(t)[0],r="var i,x,l="+e.d+",t="+e.d+";if(!"+e.d+")return t;"+e.k+";",e.b?(r+="var m=l.length;i=-1;if(typeof m=='number'){",e.i&&(r+="if(k(l)){l=l.split('')}"),r+="while(++i<m){x=l[i];"+e.b+"}}else {"):e.h&&(r+="var m=l.length;i=-1;if(m&&j(l)){while(++i<m){x=l[i+=''];"+e.g+"}}else {"),e.e||(r+="var u=typeof l=='function'&&s.call(l,'prototype');");if(e.f&&e.l)r+="var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];",e.e||(r+="if(!(u&&i=='prototype')){"),r+="x=l[i];"+e.g+""
,e.e||(r+="}");else{r+="for(i in l){";if(!e.e||e.l)r+="if(",e.e||(r+="!(u&&i=='prototype')"),!e.e&&e.l&&(r+="&&"),e.l&&(r+="h.call(l,i)"),r+="){";r+="x=l[i];"+e.g+";";if(!e.e||e.l)r+="}"}r+="}";if(e.e){r+="var f=l.constructor;";for(i=0;7>i;i++)r+="i='"+e.j[i]+"';if(","constructor"==e.j[i]&&(r+="!(f&&f.prototype===l)&&"),r+="h.call(l,i)){x=l[i];"+e.g+"}"}if(e.b||e.h)r+="}";return r+=e.c+";return t",Function("e,h,j,k,p,n,s","return function("+t+"){"+r+"}")(l,bt,m,N,Yt,Lt,Et)}function h(e){return"\\"+
Zt[e]}function p(e){return un[e]}function d(){}function v(e){return an[e]}function m(e){return xt.call(e)==_t}function g(e){var t=i;if(!e||"object"!=typeof e||m(e))return t;var n=e.constructor;return(!$t||"function"==typeof e.toString||"string"!=typeof (e+""))&&(!x(n)||n instanceof n)?Rt?(sn(e,function(e,n,r){return t=!bt.call(r,n),i}),t===i):(sn(e,function(e,n){t=n}),t===i||bt.call(e,t)):t}function y(e){var t=[];return on(e,function(e,n){t.push(n)}),t}function b(e,t,n,s,o){if(e==r)return e;n&&(t=
i);if(n=T(e)){var u=xt.call(e);if(!Gt[u]||Wt&&m(e))return e;var a=u==Dt,n=a||(u==jt?cn(e):n)}if(!n||!t)return n?a?St.call(e):rn({},e):e;n=e.constructor;switch(u){case Pt:case Ht:return new n(+e);case Bt:case It:return new n(e);case Ft:return n(e.source,ot.exec(e))}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u];var f=a?n(e.length):{};return s.push(e),o.push(f),(a?pn:on)(e,function(e,n){f[n]=b(e,t,r,s,o)}),f}function w(e){var t=[];return sn(e,function(e,n){x(e)&&t.push(n)}),t.sort()
}function E(e){var t={};return on(e,function(e,n){t[e]=n}),t}function S(e,t,s,o){if(e===t)return 0!==e||1/e==1/t;if(e==r||t==r)return e===t;var u=xt.call(e);if(u!=xt.call(t))return i;switch(u){case Pt:case Ht:return+e==+t;case Bt:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case Ft:case It:return e==t+""}var a=u==Dt||u==_t;if(Wt&&!a&&(a=m(e))&&!m(t))return i;if(!a){if(e.__wrapped__||t.__wrapped__)return S(e.__wrapped__||e,t.__wrapped__||t);if(u!=jt||$t&&("function"!=typeof e.toString&&"string"==typeof 
(e+"")||"function"!=typeof t.toString&&"string"==typeof (t+"")))return i;var u=e.constructor,f=t.constructor;if(u!=f&&(!x(u)||!(u instanceof u&&x(f)&&f instanceof f)))return i}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u]==t;var u=-1,f=n,l=0;s.push(e),o.push(t);if(a){l=e.length;if(f=l==t.length)for(;l--&&(f=S(e[l],t[l],s,o)););return f}for(var c in e)if(bt.call(e,c)&&(l++,!bt.call(t,c)||!S(e[c],t[c],s,o)))return i;for(c in t)if(bt.call(t,c)&&!(l--))return i;if(qt)for(;7>++u;)if(c=
dt[u],bt.call(e,c)&&(!bt.call(t,c)||!S(e[c],t[c],s,o)))return i;return n}function x(e){return"function"==typeof e}function T(e){return e?Yt[typeof e]:i}function N(e){return xt.call(e)==It}function C(e,t,n){var i=arguments,s=0,o=2,u=i[3],a=i[4];n!==Y&&(u=[],a=[],"number"!=typeof n&&(o=i.length));for(;++s<o;)on(i[s],function(t,n){var i,s,o;if(t&&((s=ln(t))||cn(t))){for(var f=u.length;f--;)if(i=u[f]==t)break;i?e[n]=a[f]:(u.push(t),a.push(o=(o=e[n],s)?ln(o)?o:[]:cn(o)?o:{}),e[n]=C(o,t,Y,u,a))}else t!=
r&&(e[n]=t)});return e}function k(e){var t=[];return on(e,function(e){t.push(e)}),t}function L(e,t,n){var r=-1,s=e?e.length:0,o=i,n=(0>n?At(0,s+n):n)||0;return"number"==typeof s?o=-1<(N(e)?e.indexOf(t,n):q(e,t,n)):pn(e,function(e){if(++r>=n)return!(o=e===t)}),o}function A(e,t,r){var i=n,t=l(t,r);if(ln(e))for(var r=-1,s=e.length;++r<s&&(i=!!t(e[r],r,e)););else pn(e,function(e,n,r){return i=!!t(e,n,r)});return i}function O(e,t,n){var r=[],t=l(t,n);if(ln(e))for(var n=-1,i=e.length;++n<i;){var s=e[n]
;t(s,n,e)&&r.push(s)}else pn(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function M(e,t,n){var r,t=l(t,n);return pn(e,function(e,n,s){if(t(e,n,s))return r=e,i}),r}function _(e,t,n){var r=-1,i=e?e.length:0,s=Array("number"==typeof i?i:0),t=l(t,n);if(ln(e))for(;++r<i;)s[r]=t(e[r],r,e);else pn(e,function(e,n,i){s[++r]=t(e,n,i)});return s}function D(e,t,n){var r=-Infinity,i=-1,s=e?e.length:0,o=r;if(t||!ln(e))t=!t&&N(e)?u:l(t,n),pn(e,function(e,n,i){n=t(e,n,i),n>r&&(r=n,o=e)});else for(;++i<s;)e[
i]>o&&(o=e[i]);return o}function P(e,t){var n=[];return pn(e,function(e){n.push(e[t])}),n}function H(e,t,n,r){var s=3>arguments.length,t=l(t,r);return pn(e,function(e,r,o){n=s?(s=i,e):t(n,e,r,o)}),n}function B(e,t,n,r){var s=e,o=e?e.length:0,u=3>arguments.length;if("number"!=typeof o)var a=hn(e),o=a.length;else Vt&&N(e)&&(s=e.split(""));return pn(e,function(e,f,l){f=a?a[--o]:--o,n=u?(u=i,s[f]):t.call(r,n,s[f],f,l)}),n}function j(e,t,n){var r,t=l(t,n);if(ln(e))for(var n=-1,i=e.length;++n<i&&!(r=t(
e[n],n,e)););else pn(e,function(e,n,i){return!(r=t(e,n,i))});return!!r}function F(e,t,n){if(e)return t==r||n?e[0]:St.call(e,0,t)}function I(e,t){for(var n=-1,r=e?e.length:0,i=[];++n<r;){var s=e[n];ln(s)?wt.apply(i,t?s:I(s)):i.push(s)}return i}function q(e,t,n){var r=-1,i=e?e.length:0;if("number"==typeof n)r=(0>n?At(0,i+n):n||0)-1;else if(n)return r=U(e,t),e[r]===t?r:-1;for(;++r<i;)if(e[r]===t)return r;return-1}function R(e,t,n){return e?St.call(e,t==r||n?1:t):[]}function U(e,t,n,r){for(var i=0,s=
e?e.length:i,n=n?l(n,r):X,t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r;return i}function z(e,t,n,r){var s=-1,o=e?e.length:0,u=[],a=u;"function"==typeof t&&(r=n,n=t,t=i);var f=!t&&74<o;if(f)var c={};n&&(a=[],n=l(n,r));for(;++s<o;){var r=e[s],h=n?n(r,s,e):r;f&&(a=bt.call(c,h+"")?c[h]:c[h]=[]);if(t?!s||a[a.length-1]!==h:0>q(a,h))(n||f)&&a.push(h),u.push(r)}return u}function W(e,t){return Kt||Tt&&2<arguments.length?Tt.call.apply(Tt,arguments):f(e,t,St.call(arguments,2))}function X(e){return e}function V
(e){pn(w(e),function(t){var r=s[t]=e[t];s.prototype[t]=function(){var e=[this.__wrapped__];return wt.apply(e,arguments),e=r.apply(s,e),this.__chain__&&(e=new s(e),e.__chain__=n),e}})}var n=!0,r=null,i=!1,$="object"==typeof exports&&exports,J="object"==typeof global&&global;J.global===J&&(e=J);var K=[],Q=new function(){},G=0,Y=Q,Z=30,et=e._,tt=/[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,nt=/&(?:amp|lt|gt|quot|#x27);/g,rt=/\b__p\+='';/g,it=/\b(__p\+=)''\+/g,st=/(__e\(.*?\)|\b__t\))\+'';/g
,ot=/\w*$/,ut=/(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,at=RegExp("^"+(Q.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),ft=/\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,lt=/<%=([\s\S]+?)%>/g,ct=/($^)/,ht=/[&<>"']/g,pt=/['\n\r\t\u2028\u2029\\]/g,dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),vt=Math.ceil,mt=K.concat,gt=Math.floor,yt=at.test(yt=Object.getPrototypeOf)&&yt,bt=Q.hasOwnProperty,wt=K.push,Et=
Q.propertyIsEnumerable,St=K.slice,xt=Q.toString,Tt=at.test(Tt=St.bind)&&Tt,Nt=at.test(Nt=Array.isArray)&&Nt,Ct=e.isFinite,kt=e.isNaN,Lt=at.test(Lt=Object.keys)&&Lt,At=Math.max,Ot=Math.min,Mt=Math.random,_t="[object Arguments]",Dt="[object Array]",Pt="[object Boolean]",Ht="[object Date]",Bt="[object Number]",jt="[object Object]",Ft="[object RegExp]",It="[object String]",qt,Rt,Ut=(Ut={0:1,length:1},K.splice.call(Ut,0,1),Ut[0]),zt=n;(function(){function e(){this.x=1}var t=[];e.prototype={valueOf:1,y
:1};for(var n in new e)t.push(n);for(n in arguments)zt=!n;qt=!/valueOf/.test(t),Rt="x"!=t[0]})(1);var Wt=!m(arguments),Xt="x"!=St.call("x")[0],Vt="xx"!="x"[0]+Object("x")[0];try{var $t=("[object Object]",xt.call(e.document||0)==jt)}catch(Jt){}var Kt=Tt&&/\n|Opera/.test(Tt+xt.call(e.opera)),Qt=Lt&&/^.+$|true/.test(Lt+!!e.attachEvent),Gt={};Gt[_t]=Gt["[object Function]"]=i,Gt[Dt]=Gt[Pt]=Gt[Ht]=Gt[Bt]=Gt[jt]=Gt[Ft]=Gt[It]=n;var Yt={"boolean":i,"function":n,object:n,number:i,string:i,"undefined":i},Zt=
{"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};s.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:lt,variable:""};var en={a:"o,v,g",k:"for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",g:"t[i]=x",c:"}}"},tn={a:"d,c,w",k:"c=e(c,w)",b:"if(c(x,i,d)===false)return t",g:"if(c(x,i,d)===false)return t"},nn={b:r},rn=c(en);Wt&&(m=function(e){return e?bt.call(e,"callee"):i});var sn=c(tn,nn,{l:i}),on=c(tn,nn
),un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},an=E(un),fn=c(en,{g:"if(t[i]==null)"+en.g}),ln=Nt||function(e){return xt.call(e)==Dt};x(/x/)&&(x=function(e){return"[object Function]"==xt.call(e)});var cn=yt?function(e){if(!e||"object"!=typeof e)return i;var t=e.valueOf,n="function"==typeof t&&(n=yt(t))&&yt(n);return n?e==n||yt(e)==n&&!m(e):g(e)}:g,hn=Lt?function(e){return"function"==typeof e&&Et.call(e,"prototype")?y(e):T(e)?Lt(e):[]}:y,pn=c(tn);s.VERSION="0.10.0",s.assign=rn,s
.after=function(e,t){return 1>e?t():function(){if(1>--e)return t.apply(this,arguments)}},s.bind=W,s.bindAll=function(e){for(var t=arguments,n=1<t.length?0:(t=w(e),-1),r=t.length;++n<r;){var i=t[n];e[i]=W(e[i],e)}return e},s.bindKey=function(e,t){return f(e,t,St.call(arguments,2))},s.chain=function(e){return e=new s(e),e.__chain__=n,e},s.clone=b,s.compact=function(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r},s.compose=function(){var e=arguments;return function(){for(
var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},s.contains=L,s.countBy=function(e,t,n){var r={},t=l(t,n);return pn(e,function(e,n,i){n=t(e,n,i),bt.call(r,n)?r[n]++:r[n]=1}),r},s.debounce=function(e,t,n){function i(){a=r,n||(o=e.apply(u,s))}var s,o,u,a;return function(){var r=n&&!a;return s=arguments,u=this,clearTimeout(a),a=setTimeout(i,t),r&&(o=e.apply(u,s)),o}},s.defaults=fn,s.defer=function(e){var n=St.call(arguments,1);return setTimeout(function(){e.apply(t,n)},1)},s.delay=
function(e,n){var r=St.call(arguments,2);return setTimeout(function(){e.apply(t,r)},n)},s.difference=function(e){for(var t=-1,n=e?e.length:0,r=mt.apply(K,arguments),r=o(r,n),i=[];++t<n;){var s=e[t];r(s)||i.push(s)}return i},s.escape=function(e){return e==r?"":(e+"").replace(ht,p)},s.every=A,s.filter=O,s.find=M,s.first=F,s.flatten=I,s.forEach=pn,s.forIn=sn,s.forOwn=on,s.functions=w,s.groupBy=function(e,t,n){var r={},t=l(t,n);return pn(e,function(e,n,i){n=t(e,n,i),(bt.call(r,n)?r[n]:r[n]=[]).push(e
)}),r},s.has=function(e,t){return e?bt.call(e,t):i},s.identity=X,s.indexOf=q,s.initial=function(e,t,n){return e?St.call(e,0,-(t==r||n?1:t)):[]},s.intersection=function(e){var t=arguments,n=t.length,r={},i=[];return pn(e,function(e){if(0>q(i,e)){for(var s=n;--s;)if(!(r[s]||(r[s]=o(t[s])))(e))return;i.push(e)}}),i},s.invert=E,s.invoke=function(e,t){var n=St.call(arguments,2),r="function"==typeof t,i=[];return pn(e,function(e){i.push((r?t:e[t]).apply(e,n))}),i},s.isArguments=m,s.isArray=ln,s.isBoolean=
function(e){return e===n||e===i||xt.call(e)==Pt},s.isDate=function(e){return xt.call(e)==Ht},s.isElement=function(e){return e?1===e.nodeType:i},s.isEmpty=function(e){var t=n;if(!e)return t;var r=xt.call(e),s=e.length;return r==Dt||r==It||r==_t||Wt&&m(e)||r==jt&&"number"==typeof s&&x(e.splice)?!s:(on(e,function(){return t=i}),t)},s.isEqual=S,s.isFinite=function(e){return Ct(e)&&!kt(parseFloat(e))},s.isFunction=x,s.isNaN=function(e){return xt.call(e)==Bt&&e!=+e},s.isNull=function(e){return e===r},s
.isNumber=function(e){return xt.call(e)==Bt},s.isObject=T,s.isPlainObject=cn,s.isRegExp=function(e){return xt.call(e)==Ft},s.isString=N,s.isUndefined=function(e){return e===t},s.keys=hn,s.last=function(e,t,n){if(e){var i=e.length;return t==r||n?e[i-1]:St.call(e,-t||i)}},s.lastIndexOf=function(e,t,n){var r=e?e.length:0;for("number"==typeof n&&(r=(0>n?At(0,r+n):Ot(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},s.map=_,s.max=D,s.memoize=function(e,t){var n={};return function(){var r=t?t.apply(this,arguments
):arguments[0];return bt.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},s.merge=C,s.min=function(e,t,n){var r=Infinity,i=-1,s=e?e.length:0,o=r;if(t||!ln(e))t=!t&&N(e)?u:l(t,n),pn(e,function(e,n,i){n=t(e,n,i),n<r&&(r=n,o=e)});else for(;++i<s;)e[i]<o&&(o=e[i]);return o},s.mixin=V,s.noConflict=function(){return e._=et,this},s.object=function(e,t){for(var n=-1,r=e?e.length:0,i={};++n<r;){var s=e[n];t?i[s]=t[n]:i[s[0]]=s[1]}return i},s.omit=function(e,t,n){var r="function"==typeof t,i={};if(r)t=l(t,n);
else var s=mt.apply(K,arguments);return sn(e,function(e,n,o){if(r?!t(e,n,o):0>q(s,n,1))i[n]=e}),i},s.once=function(e){var t,s=i;return function(){return s?t:(s=n,t=e.apply(this,arguments),e=r,t)}},s.pairs=function(e){var t=[];return on(e,function(e,n){t.push([n,e])}),t},s.partial=function(e){return f(e,St.call(arguments,1))},s.pick=function(e,t,n){var r={};if("function"!=typeof t)for(var i=0,s=mt.apply(K,arguments),o=s.length;++i<o;){var u=s[i];u in e&&(r[u]=e[u])}else t=l(t,n),sn(e,function(e,n,
i){t(e,n,i)&&(r[n]=e)});return r},s.pluck=P,s.random=function(e,t){return e==r&&t==r&&(t=1),e=+e||0,t==r&&(t=e,e=0),e+gt(Mt()*((+t||0)-e+1))},s.range=function(e,t,n){e=+e||0,n=+n||1,t==r&&(t=e,e=0);for(var i=-1,t=At(0,vt((t-e)/n)),s=Array(t);++i<t;)s[i]=e,e+=n;return s},s.reduce=H,s.reduceRight=B,s.reject=function(e,t,n){return t=l(t,n),O(e,function(e,n,r){return!t(e,n,r)})},s.rest=R,s.result=function(e,t){var n=e?e[t]:r;return x(n)?e[t]():n},s.shuffle=function(e){var t=-1,n=Array(e?e.length:0);return pn
(e,function(e){var r=gt(Mt()*(++t+1));n[t]=n[r],n[r]=e}),n},s.size=function(e){var t=e?e.length:0;return"number"==typeof t?t:hn(e).length},s.some=j,s.sortBy=function(e,t,n){var r=[],t=l(t,n);pn(e,function(e,n,i){r.push({a:t(e,n,i),b:n,c:e})}),e=r.length;for(r.sort(a);e--;)r[e]=r[e].c;return r},s.sortedIndex=U,s.tap=function(e,t){return t(e),e},s.template=function(e,t,n){e||(e=""),n||(n={});var r,i,o=s.templateSettings,u=0,a=n.interpolate||o.interpolate||ct,f="__p += '",l=n.variable||o.variable,c=
l;e.replace(RegExp((n.escape||o.escape||ct).source+"|"+a.source+"|"+(a===lt?ft:ct).source+"|"+(n.evaluate||o.evaluate||ct).source+"|$","g"),function(t,n,i,s,o,a){i||(i=s),f+=e.slice(u,a).replace(pt,h),f+=n?"'+__e("+n+")+'":o?"';"+o+";__p+='":i?"'+((__t=("+i+"))==null?'':__t)+'":"",r||(r=o||tt.test(n||i)),u=a+t.length}),f+="';",c||(l="obj",r?f="with("+l+"){"+f+"}":(n=RegExp("(\\(\\s*)"+l+"\\."+l+"\\b","g"),f=f.replace(ut,"$&"+l+".").replace(n,"$1__d"))),f=(r?f.replace(rt,""):f).replace(it,"$1").replace
(st,"$1;"),f="function("+l+"){"+(c?"":l+"||("+l+"={});")+"var __t,__p='',__e=_.escape"+(r?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":(c?"":",__d="+l+"."+l+"||"+l)+";")+f+"return __p}";try{i=Function("_","return "+f)(s)}catch(p){throw p.source=f,p}return t?i(t):(i.source=f,i)},s.throttle=function(e,t){function n(){a=new Date,u=r,s=e.apply(o,i)}var i,s,o,u,a=0;return function(){var r=new Date,f=t-(r-a);return i=arguments,o=this,0>=f?(clearTimeout(u),a=r,s=e.apply(o,i)
):u||(u=setTimeout(n,f)),s}},s.times=function(e,t,n){for(var e=+e||0,r=-1,i=Array(e);++r<e;)i[r]=t.call(n,r);return i},s.toArray=function(e){return e&&"number"==typeof e.length?(Xt?N(e):"string"==typeof e)?e.split(""):St.call(e):k(e)},s.unescape=function(e){return e==r?"":(e+"").replace(nt,v)},s.union=function(){return z(mt.apply(K,arguments))},s.uniq=z,s.uniqueId=function(e){var t=G++;return e?e+t:t},s.values=k,s.where=function(e,t){var n=hn(t);return O(e,function(e){for(var r=n.length;r--;){var i=
e[n[r]]===t[n[r]];if(!i)break}return!!i})},s.without=function(e){for(var t=-1,n=e?e.length:0,r=o(arguments,1,20),i=[];++t<n;){var s=e[t];r(s)||i.push(s)}return i},s.wrap=function(e,t){return function(){var n=[e];return wt.apply(n,arguments),t.apply(this,n)}},s.zip=function(e){for(var t=-1,n=e?D(P(arguments,"length")):0,r=Array(n);++t<n;)r[t]=P(arguments,t);return r},s.all=A,s.any=j,s.collect=_,s.detect=M,s.drop=R,s.each=pn,s.extend=rn,s.foldl=H,s.foldr=B,s.head=F,s.include=L,s.inject=H,s.methods=
w,s.select=O,s.tail=R,s.take=F,s.unique=z,V(s),s.prototype.chain=function(){return this.__chain__=n,this},s.prototype.value=function(){return this.__wrapped__},pn("pop push reverse shift sort splice unshift".split(" "),function(e){var t=K[e];s.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),Ut&&e.length===0&&delete e[0],this.__chain__&&(e=new s(e),e.__chain__=n),e}}),pn(["concat","join","slice"],function(e){var t=K[e];s.prototype[e]=function(){var e=t.apply(this.__wrapped__
,arguments);return this.__chain__&&(e=new s(e),e.__chain__=n),e}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=s,define(function(){return s})):$?"object"==typeof module&&module&&module.exports==$?(module.exports=s)._=s:$._=s:e._=s})(this);
$(document).ready(function() {
    let chubbForm = $('#chubb-form')
    //function from ui.apps\src\main\content\jcr_root\apps\aem-chubb-global\clientlibs\clientlib-site\js\gtm.js
    handleForms(
        chubbForm,
        chubbForm.find('.form-control'),
        $('#formName').val(),
        $('#formType').val(),
        chubbForm.find(".btn.btn-go")
    );
    $('#chubb-form form').submit(function() {
      event.preventDefault();
      $(".form-component .btn.btn-go").click();

});
  /*$('.form-component .form-control').each(function(){
    if (typeof $(this).attr('maxlength') !== 'undefined' && $(this).attr('maxlength') !== false) {
        $(this).on('input keypress', function() {
            if ($(this).val().length >= $(this).attr('maxlength')) {
                alert('you have reached a maximum limit of '+$(this).attr('maxlength'));       
            }
        });
    }
});*/


 // autocomplete dropdown
 $(".autocomplete-dropdown").click(function () {
    $(this).closest('.autocomplete-container').find('.dropdown').css("display", "block");
    $(this).closest('.autocomplete-container').find('.option-values').css("display", "block");
    $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').hide();
    if ($(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').find('p').length > 0) {
        $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').find('p').hide();
    }
    else {
        $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').find('p').show();
    }
});

$(".option-values").click(function (event) {
    event.preventDefault();
    var text = $(this).text();
    var details = text.trim();

    var program = $(this).closest('.autocomplete-container').find('.autocomplete-dropdown');

    program.val(details);
    $(this).closest('.autocomplete-container').find('.error_show').removeClass("error_show").addClass("error");
    $(this).closest('.autocomplete-container').find('.autocomplete-dropdown').removeClass("invalid").addClass("valid");
    $(this).parent().css("display", "none");

});
$('.autocomplete-container').click(function (e) {
    e.stopPropagation();
});
$(document).click(function () {

    $('.form-component .autocomplete-container .dropdown').hide();
});
$('.autocomplete-dropdown').blur(function (e) {
    var autocompleteDropdown = $(this).val().toLowerCase();
    var textNotFound = false;
    var hasOptions = false;
    $(this).closest('.autocomplete-container').find('.dropdown').find('.option-values').each(function () {
        hasOptions = true;
        var trueVal = $(this).text().toLowerCase();
        if (!(trueVal).includes(autocompleteDropdown)) {
            textNotFound = true;
        }
    });
    if (textNotFound || !hasOptions) {
        $(this).val('');
        $(this).closest('.autocomplete-container').find('.error').removeClass("error").addClass("error_show");
        $(this).removeClass("invalid").addClass("valid");
    }
    else {
        $(this).closest('.autocomplete-container').find('.error_show').removeClass("error_show").addClass("error");
        $(this).removeClass("valid").addClass("invalid");
    }
});
var optionIndex = 0;
var index = -1;
var appendTextToDrop;
function appendVal(val, obj) {
    obj.show();


    appendTextToDrop = obj.find('.option-values')[optionIndex];


    if (val == 40 && optionIndex < obj.find('.option-values').length) {

        $(appendTextToDrop).removeClass('keytrack').next().addClass('keytrack');
        optionIndex++;

        change_selection(appendTextToDrop);
    } else if (val == 38 && optionIndex >= 0) {

        $(appendTextToDrop).removeClass('keytrack').prev().addClass('keytrack');
        optionIndex--;
        change_selection(appendTextToDrop);
    }
    else if(val == 13) {
       obj.closest('.autocomplete-container').find('.autocomplete-dropdown').val($(appendTextToDrop).text());
    }

}

$('.autocomplete-dropdown').keydown(function (e) {

    var s = $(this).closest('.autocomplete-container').find('.dropdown');
      var curr=-1, node;
    var keyCode = e.keyCode || e.which;

    var arrow = { left: 37, up: 38, right: 39, down: 40, enter: 13 };
    switch (keyCode) {
        case arrow.left:
            console.log(arrow.left);
            break;
        case arrow.up:
            appendVal(arrow.up, s);
            break;
        case arrow.right:
            console.log(arrow.right);
            break;
        case arrow.down:
            appendVal(arrow.down, s);

            break;
        case arrow.enter:
            appendVal(arrow.enter, s);
            break;

    }
});
function change_selection(currVal)
{
    if($(currVal).next().length) {
        if( $(currVal).next().length && $(currVal).next().position().top + $(currVal).next().height() >= $('.dropdown').scrollTop()+$('.dropdown').height()-$(currVal).next().height()){
        $('.dropdown').scrollTop($(currVal).next().position().top - $('.dropdown').height() + $('.dropdown').scrollTop())
        }else if($(currVal).next().position().top <= $('.dropdown').scrollTop()){
            $('.dropdown').scrollTop($(currVal).next().position().top)
        }
    }
}
$(".autocomplete-dropdown").keyup(function (e) {
    var textFound = false;
    var myValue = $(this).val().toLowerCase();
    var autocompletedropdown = $(this).closest('.autocomplete-container').find('.dropdown').find('.option-values');
    // myValue.removeClass('.error_show');
    if (myValue !== "") {       
        $(this).closest('.autocomplete-container').find('.dropdown').find("p:contains('" + $(this).text() + "')").hide();
        autocompletedropdown.each(function () {
            var trueVal = $(this).text().toLowerCase();
            if ((trueVal).includes(myValue)) {
                $(this).closest('.autocomplete-container').find('.dropdown').find("p:contains('" + $(this).text() + "')").show();
                textFound = true;
            }
        });
        $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').html('<p>No Data Found </p>');
        if (textFound) {
             $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').hide();
            $(this).removeClass("invalid").addClass("valid");
        }

        else {
             $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').show();

            $(this).removeClass("valid").addClass("invalid");
        }
    }
    else {         
        $(this).closest('.autocomplete-container').find('.dropdown').find('.no-value').hide();
        $("p:contains('" + $(this).text() + "')").show();
        $(this).removeClass("valid").addClass("invalid");
    }
});

  $("input[id=referrerUrl]").attr('value', document.referrer);
  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();
  var dateTime = n+' '+time;
  $("input[id=TimeStamp]").attr('value', dateTime);
  $("input[id=WebpageURL]").attr('value', window.location.href);
  $("input[id=quoteURL]").attr('value', document.referrer);
  
  
  var thankyouVal = $(".form-component input[name='thank-you-url']").val();
  if(thankyouVal){
      if (!thankyouVal.includes(".html"))
      {
          var updatedtq = $("input[name='thank-you-url']").val() + ".html";
          $("input[name='thank-you-url']").attr('value',updatedtq);
      }
  }
  var errrorVal = $(".form-component input[name='error-url']").val();
  if (errrorVal){
      if (!errrorVal.includes(".html"))
      {
          var updatederror = $("input[name='error-url']").val() + ".html";
          $("input[name='error-url']").attr('value',updatederror); 
      }
  }
  
$('a[href="/#backlink"]').click(function(e){
  e.preventDefault(); 
  window.history.go(-1);
  });

  $(function(){
    var requiredradio = $('.rad-section.required :radio[required]');
    requiredradio.each(function(_, radioBtn) {
        let $radio = $(radioBtn);
        let $radioGroup = $(radioBtn).closest('form').find(`input:radio[name='${$(radioBtn).attr("name")}']`)
        $radio.on('change', () => {
            if ($radio.is(':checked')) 
                $radioGroup.each((__, radio) => $(radio).removeAttr('required'))
            else 
                $radioGroup.each((__, radio) => $(radio).attr('required', 'required'))
        })
  });
});
$('.form-component option[value="/#droprequired"]').attr('disabled','disabled'); 
$('.form-component option[value="/#droprequired"]').parent().attr('required','required');
$('.form-component option[value="/#droprequired"]').val('');
$('.form-component').find('.form-group select').each(function(){
    if(!$(this).is('[multiple]') && $(this).find('option:disabled:selected').length > 0){
                  $(this).addClass('has-placeholder placeholder-selected');
    }
   
})
$('.form-component').find('.form-group select').on('change',function(){
    $(this).removeClass('placeholder-selected')
})
$("input[type='checkbox'][name='confirm']").attr("required","required");
$("input[type='checkbox'][name='confirm']").closest('div.form-group').find('legend.required').addClass('confirm-legend');
var confirmBox = "";
var openModal = "";
$(".form-component .btn.btn-go").click(function (event) {
    var isValid = true;
	$('[class^="col-md-12 check-box-req"]').each(function(i){
        var reqClass = $(this).attr('class').replace('col-md-12 ','');
        if($('.'+reqClass).length > 0){

			var checkboxLegends = $('.'+reqClass+' legend.checkboxLegend.required');
          var lengthitem = 0;
          checkboxLegends.each(function(legendItem){

                  let $checkbbox = $(this).closest('div.form-group').find("input[type='checkbox']");
                  if($checkbbox.is(':checked'))
                  {
                      lengthitem ++;
                       $('.'+reqClass+" input[type='checkbox']").removeAttr('required', true);
                  }
          });
    	 if (lengthitem == 0)
          {
              $('.'+reqClass+" input[type='checkbox']").attr('required', true)
			isValid = false;
              return isValid;
          }
	     }
    });

      $(".form-component form .form-group").find('input, select, textarea').each(function () {
         if($(this).prop('required')) {		
             if ($(this).val() == '' || $(this).val() == null || ($(this).attr('type') === 'radio' && !$(`input:radio[name='${$(this).attr("name")}']`).is(":checked"))) {
                 isValid = false;
                 return isValid;
             }
          }
          else{
              isValid = true;
          }
          if($('.checkbox-section.required :checkbox[required]').length > 0){

              isValid = false;
              return isValid;
          }
          else{
              isValid = true;
          }

          if($(this).attr('type')=="email"){
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              isValid = regex.test($(this).val());
          }
          if(!isValid){
              $(this).parent('.form-group').addClass('has-error');

              if($(this).parent('.form-group').attr('data-desc') != ''){
                  $(this).parent().find('.help-block').text($(this).parent('.form-group').attr('data-desc'));
              }
              else{
                  $(this).parent().find('.help-block').text('Please enter valid input');
              }
          }
          else{
              $(this).parent('.form-group').removeClass('has-error');
              $(this).parent().find('.help-block').text('');
          }
          if($("input[type='checkbox'][name='confirm']").length ==1){
          if($("input[type='checkbox'][name='confirm']").prop("checked") == false){
                  $("input[type='checkbox'][name='confirm']").closest('div.form-group').find('label').addClass('error');
                  $("input[type='checkbox'][name='confirm']").closest('div.form-group').find('legend.required').addClass('error');
                  isValid = false;
              }else{
                  $("input[type='checkbox'][name='confirm']").closest('div.form-group').find('label').removeClass('error');
                  $("input[type='checkbox'][name='confirm']").closest('div.form-group').find('legend.required').removeClass('error');
              }
          }
          return isValid;
      });
        if($('.subscription.form-component .form-group').length > 0){
                if (!isValid) {
                    $('#subscription-status').show();
                    $('#subscription-status').removeClass("success","error");
                    $('#subscription-status').addClass("error");
                    $('#subscription-status').html("Please enter a valid Email address");
                }
            else{
                $('#subscription-status').removeClass("success","error");
                $('#subscription-status').html("");
                $(".subscription-btn .btn.btn-go").prop('disabled', true);
                $(".subscription-btn .btn.btn-go").addClass('disabled');
            }
        }
        var form = $(this).closest('form');
        if (isValid) {
            event.preventDefault();
            grecaptcha.ready(function () {
                if(form.parent().find('.confirmBox').length > 0)
                {
                    /* confirm box for pre form submit */
                    confirmBox = form.parent().find('.confirmBox');
                    form.addClass("confirmReCaptcha")
                    var confirmBoxcontent = ""
                    var form_data = form.find(":input:not([type=hidden])").serializeArray();
                    var checkboxlist = [];
                    for (var input in form_data) {
                        
                        if(form_data[input]['name'] != "g-recaptcha-response" && form_data[input]['value'] != undefined && form_data[input]['value'] != ""){
                            if($("input[name='"+form_data[input]['name']+"']").is(':checkbox') || $("input[name='"+form_data[input]['name']+"']").is(':radio')){
                                if(checkboxlist.indexOf(form_data[input]['name']) < 0){
                                checkboxlist.push(form_data[input]['name'])
                                var programming = $("input[name='"+form_data[input]['name']+"']:checked").map(function() {
                                    return this.value;
                                }).get().join(', ');
                                confirmBoxcontent += '<p class="h6-heading"><strong>'+$("[name='"+form_data[input]['name']+"']").closest('.form-group').find('legend').html()+'</strong>: '+ programming +'<p>';                       
                                }
                            }else{
                            confirmBoxcontent += '<p class="h6-heading"><strong>'+$("[name='"+form_data[input]['name']+"']").closest('.form-group').find('label').html()+'</strong>: '+ form_data[input]['value'] +'<p>';                       
                            }
                        }
                    }
                    $(confirmBox).find('.confirmBox__description').html(confirmBoxcontent);
                    $(confirmBox).closest('.confirmBox__modal').modal("show");
                    $(confirmBox).show();
                     /* confirm box for pre form submit */

               }else{
                 form.addClass("validateReCaptcha");
                grecaptcha.execute();
                }
            });
        } else {
            formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit error");
        }
}); 

/* confirm box for pre form submit */
$('.confirmBox__modal .close-icon').on('click',function(e){
    $(confirmBox).closest('.confirmBox__modal').modal("hide");
    e.stopPropagation();
    confirmBox.hide();
    $(confirmBox).find('.confirmBox__description').html('');
    return false;
})
$('.confirmBox__modal').find('input[type=checkbox]').on('click', (event) => {
    if ($('.confirmBox__modal').find('input[type=checkbox]').is(':checked') == true) {
        $('.confirmBox__modal').find('.confirmBox__message').css('color','#000')
        $('.confirmBox__modal').find('.confirmBtn').prop('disabled',false);
   }else{
        $('.confirmBox__modal').find('.confirmBox__message').css('color','#f00')
        $('.confirmBox__modal').find('.confirmBtn').prop('disabled',true);
   }

})
$('.confirmBox__modal .confirmBtn').on('click',function(e){
    var form = $(".confirmReCaptcha");
    $(confirmBox).closest('.confirmBox__modal').modal("hide");
    e.stopPropagation();
    $(confirmBox).hide();
    $(confirmBox).find('.confirmBox__description').html('');
    form.removeClass("confirmReCaptcha"); 
    form.addClass("validateReCaptcha"); 
    grecaptcha.execute();
});
$('.confirmBox__modal .cancelBtn').on('click',function(e){
    $(confirmBox).closest('.confirmBox__modal').modal("hide");
    e.stopPropagation();
    confirmBox.hide();
    $(confirmBox).find('.confirmBox__description').html('');
    return false;
});
/* confirm box for pre form submit */
}); 
function onFormSubmit(token){  
  console.log('token'+token);
   var isValid = true;

      if (isValid) {

          var funcParams = [];
          $(".form-component form .form-group").find('input, select, textarea').each(function () {
              var funcParams1="";
              if($(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox'){
              var name = $(this).attr('data-et-attribute');
              if (typeof $(this).attr('data-et-attribute') == 'undefined') {
                  name = "";
              }
              var placeholder = $(this).attr('placeholder');
              if (typeof $(this).attr('placeholder') == 'undefined') {
                  placeholder = "";
              }
              var value = $(this).val();
              
              if (typeof $(this).val() == 'undefined') {
                  value = "";
              }

              var isemail = false;
              if (typeof $(this).attr('data-email') !== 'undefined') {
                  isemail = true;
                             
              }
              }else{
                  if($(this).is(':checked')){
                  var name = $(this).attr('data-et-attribute');
                    if (typeof $(this).attr('data-et-attribute') == 'undefined') {
                        name = "";
                    }
                    var placeholder = $(this).attr('placeholder');
                    if (typeof $(this).attr('placeholder') == 'undefined') {
                        placeholder = "";
                    }
                    var value = $(this).val();
                    if (typeof $(this).val() == 'undefined') {
                        value = "";
                    }

                    var isemail = false;
                    if (typeof $(this).attr('data-email') !== 'undefined') {
                        isemail = true;
                    }

                  }

              }

              console.log('isemail = ' + isemail);
              if(name){
              funcParams1 = { "Name": name, "Value": value, "Placeholder": placeholder, "IsEmail": isemail };
              funcParams.push(funcParams1);
              }
          });
          if($('input[id=formAltemailchk]').val() == "true")
          {
              var subscriberdetails ="";
                 subscriberdetails = { "Name": "SubmitterEmail", "Value": $('input[data-email]').val(), "Placeholder": "", "IsEmail": false };
                funcParams.push(subscriberdetails);
              
          }
          if($('input[id=formMultipleEmail]').val() == "true")
          {
              var subscriberdetails ="";
                 subscriberdetails = { "Name": "SubmitterEmail", "Value": $('input[data-email]').val(), "Placeholder": "", "IsEmail": false };
                funcParams.push(subscriberdetails);
              
          }
         
          var apiData = {};
          apiData['jsonData'] = funcParams;
         // apiData['ExternalKey'] =  $("input[name='hdnETExternalKey']").val(); 
         // apiData['ETAccId'] = $("input[name='hdnETAccId']").val();  
          apiData['resourcePage']= $("input[name='formResource']").val();
          apiData['grecaptcharesponse'] = token; 
          

          $.ajax({
              type: "POST",
             // contentType: "application/json; charset=utf-8",
              url: "/bin/aem-chubb-global/contactus",
              data: {apiData:JSON.stringify(apiData)},

              success: function (data) {
                  console.log('data.result'+data);
                  if (data) {

                      if($('.contact-form.success').length == 1){
                          $('.contact-form.success').show(function(){
                              var $container = $("html,body");
                               var $scrollTo = $('.contact-form.success');
                               $container.animate({scrollTop: $scrollTo.offset().top, scrollLeft: 0},300);
                              $('#contact-us').hide();
                          });
                          formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit success");

                      }
                      else if($('.subscription.form-component .form-group').length > 0){
                        $(".subscription-btn .btn.btn-go").removeClass('disabled');
                        $(".subscription-btn .btn.btn-go").prop('disabled', false);
                        $('#subscription-success-status').show();
                        $('#subscription-success-status').html($("input[name='success-message']").val());
                        setTimeout( function ( ) { $('#subscription-success-status').hide(); }, 10000 ); 
                        
                        formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit success");
                    }
                      else {
                        let thankYouURL = $("input[name='thank-you-url']").val() || "";
                        if (thankYouURL.startsWith('#'))
                          formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit success");
                          
                        window.location = encodeURI(
							`${thankYouURL}?formName=${$(
								"input[name='formName']"
							).val()}&formType=${$(
								"input[name='formType']"
							).val()}&formSubmitted=1`
						);
                      }
                  }


              },
              error: function (e) {
                  console.log(e);
                  console.log("Error occured" + e);
                  if($('.contact-form.failure').length == 1){
                      $('.contact-form.failure').show(function(){
                           var $container = $("html,body");
                             var $scrollTo = $('.contact-form.failure');
                             $container.animate({scrollTop: $scrollTo.offset().top, scrollLeft: 0},300);
                          $('#contact-us').hide();
                      });
                      formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit error");

                      }
                      else if($('.subscription.form-component .form-group').length > 0){
                        $(".subscription-btn .btn.btn-go").prop('disabled', false);
                        $(".subscription-btn .btn.btn-go").removeClass('disabled');
                        $('#subscription-success-status').show();
                        $('#subscription-success-status').html($("input[name='warn-message']").val());
                        setTimeout( function ( ) { $('#subscription-success-status').hide(); }, 10000 ); 
                        formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit error");
                    }
                    else  {
                        let errorURL = $("input[name='error-url']").val() || "";
                        if (errorURL.startsWith('#'))
                        formPostSubmitEvent($('#formName').val(), $('#formType').val(), "submit error");
                        
                        window.location = encodeURI(
                            `${errorURL}?formName=${$(
                                "input[name='formName']"
                            ).val()}&formType=${$(
                                "input[name='formType']"
                            ).val()}&formSubmitted=2`
                        );
                    }
              }
          });
        
          grecaptcha.reset();
      }


}
var hostName = window.location.hostname;
var isTwZhPage =	window.location.pathname.startsWith("/content/chubb-sites/life-chubb-com/apac/tw/zh/accessibility") 
    || ((window.location.hostname === "life.chubb.com" 
        || window.location.hostname === "chubb-life-stage.adobecqms.net" 
        || window.location.hostname === "chubb-life-qa.adobecqms.net") 
        && window.location.pathname.startsWith("/tw-zh/accessibility"));
function floatingCTA() {
    if($(document).scrollTop() < 10){
        $(".download-btn").attr("style", ""); 
        // Adding margin to banner to move the floating cta's down       
        if($(window).width()<768){
            var floatingBtnsHeight = $(".download-btn").height();
            if(floatingBtnsHeight > 50) {
                floatingBtnsHeight = floatingBtnsHeight -50;
                $(".download-btn").closest(".banner-section").css({"margin-bottom" : floatingBtnsHeight + "px"});
                $(".download-btn").css({"bottom": "-" + floatingBtnsHeight + "px"});
            }
        }
    }
    else{
        //$(".download-btn").css({"top": "auto", "bottom": "0", "position": "fixed", "right": $('header').offset().left});
		if($(window).width()<768){
            $(".download-btn").closest(".banner-section").css({"margin-bottom" : "0"});
            $(".download-btn").css({"top": "auto", "bottom": "48px", "position": "fixed", "right": $('header').offset().left});
        }
        else{
            $(".download-btn").css({"top": "auto", "bottom": "0", "position": "fixed", "right": $('header').offset().left});	
        }
        if(parseInt($("footer").offset().top) < (parseInt($(window).height()) + parseInt($(document).scrollTop())))
        {
            $(".download-btn").css("display", "none");
        }
        else{
            $(".download-btn").css("display", "block");
        }
    }
}
$(window).scroll(function() {
    floatingCTA();
});
var topicsLength = 0;
var pageCount = 10;
var openBrowserText = ' - Opens in a new window';
$(document).ready(function () {
    if (isTwZhPage) {
        openBrowserText = " - 另開新視窗";
        $("#skipNavContent").text("跳至主內容");
        $("#chubb-form label").each(function(index, element) {
            let $element = $(element);
            if($element.hasClass("required")) 
                $element.removeClass("required").addClass("required-text");
        });
    } 
    if (
		window.location.pathname === "/mx-es/personas-y-familias/auto.html" ||
		window.location.pathname === "/content/chubb-sites/chubb-com/latam/mx/es/personas-y-familias/auto.html" ||
        window.location.pathname === "/th-th/campaign/home-insurance.html" ||
        window.location.pathname === "/content/chubb-sites/chubb-com/apac/th/th/campaign/home-insurance.html"
    ) {
		$("a").each((_, anchor) => {
			let $anchor = $(anchor);
            if ($anchor.attr("href")!=undefined && $anchor.attr("href").startsWith("tel")) {
				let heroComponent = $anchor.closest(".c-hero");
				if (heroComponent.length > 0) {
					let heroTitle = heroComponent.find(".hero-title").text().trim().toLowerCase();
					$anchor.attr("data-cta", `${$anchor.text().trim().toLowerCase()}: ${heroTitle}`);
					return;
				}

				let ctaComponent = $anchor.closest(".c-cta");
				if (ctaComponent.length > 0) {
					let ctaTitle = ctaComponent.find(".h3-title").text().trim().toLowerCase();
					$anchor.attr("data-cta", `${$anchor.text().trim().toLowerCase()}: ${ctaTitle}`);
					return;
				}
			}
		});
    }
    $('.header__skip-link').closest('.experiencefragment').next().attr('id', 'h1-heading');
    floatingCTA();
    $('[id^="mailto_"]').each(function () {
        var id = $(this).attr('id');
        var mailsubject = id.replace("mailto", "mailsubject");
        var sublist = $('#' + mailsubject + ' ul li'); 
        var subject = sublist.eq(parseInt(Math.random()*sublist.length)).text().trim();
        var maillink = id.replace("mailto", "maillink");
        var mailmessagelist = id.replace("mailto", "mailmessagelist"); 
        var link = $('#' + maillink).text().trim();     
        var list = $('#' + mailmessagelist + ' ul li'); 
        var body = list.eq(parseInt(Math.random()*list.length)).text().trim();
        var subjectstring = "";
        if(subject != ""){
          subjectstring = "&subject=" + encodeURIComponent(subject.trim());
        }
        var bodystring = "";
        if(body != ""){
          bodystring = encodeURIComponent(body) + "%0D%0A%0D%0A";
        }
        var url = "mailto:?Content-type=text/html" + subjectstring + "&body=" + bodystring + encodeURIComponent(link.trim());
        $(this).attr('data-linkurl', url.trim().toLowerCase());
        $(this).attr('href', url);
    });

    $(".perspective-tab-section #tabs li a").on('click', function(e){
        $('#topicselect').val($(this).attr('data-topic'));
        topicChange(e, $(this).attr('data-topic'));

    });
    $('#topicselect').on('change', function() {
        topicChange(this, $(this).val())
    });

    topicsLength = $('.widget-section-listing').length;
    paginationResults();
	if($('.body-copy.if-client-story-bc').length) {
		$('.c-hero .banner-section').addClass('if-client-story-banner');
    }
    if($('.body-copy.if-agent-bc').length) {
		$('.c-hero .banner-section').addClass('if-agent-banner');
    }
    if($('.body-copy.if-intro-bc').length) {
		$('.c-hero .banner-section').addClass('if-intro-banner');
	}
});

function topicChange(topicName, topicValue)
{
    $('.perspective-topic-list-wrapper').each(function() {
        if (topicValue == "allitems")
        { $(this).find(".widget-section-listing").show();
         $(".perspective-filter .item-count").text($(this).find(".widget-section-listing").length + " Items");
         $(".perspective-tab-section #tabs li a").removeClass("active");
         $(".perspective-tab-section #tabs li a[data-topic='"+topicValue +"']").addClass("active");
         topicsLength = $(".widget-section-listing").length;
         pageCount = 10;
         if (topicsLength < pageCount)
         {
             $('.perspective-topic-list .loadmore').hide();
         }
         else
             $('.perspective-topic-list .loadmore').show();

         paginationResults();
        }
        else{
            $(this).find(".widget-section-listing").hide();
            $(this).find(".widget-section-listing[data-topic='"+topicValue +"']").show();
            $(".perspective-filter .item-count").text($(this).find(".widget-section-listing[data-topic='"+topicValue +"']").length + " Items");
            $(".perspective-tab-section #tabs li a").removeClass("active");
            $(".perspective-tab-section #tabs li a[data-topic='"+topicValue +"']").addClass("active");
            topicsLength = $(".widget-section-listing[data-topic='"+topicValue +"']").length;
            pageCount = 10;
            if (topicsLength < pageCount)
            {
                $('.perspective-topic-list .loadmore').hide();
            }
            else
                $('.perspective-topic-list .loadmore').show();
            $('.widget-section-listing').hide();
            for(var i=0; i< topicsLength; i++)
            {
                if (i < pageCount)
                {
                    var listID= $(".widget-section-listing[data-topic='"+topicValue +"']")[i].id;	
                    $('#'+listID).show();
                }	
            }
            if (topicsLength < pageCount)
            {
                $('.perspective-topic-list .loadmore').hide();
            }

        }
    });
    //topicsLength = $(".widget-section-listing[data-topic='"+topicValue +"']").length;
    //paginationResults();
}
//topicsLength = $('.widget-section-listing.active').length;
function paginationResults(){
    $('.widget-section-listing').hide();
    for(var i=0; i<topicsLength; i++)
    {
        if (i <= pageCount)
        {
            var listID= $('.widget-section-listing')[i].id;	
            $('#'+listID).show();
        }	
    }
    if (topicsLength < pageCount)
    {
        $('.perspective-topic-list .loadmore').hide();
    }
}
$('.perspective-topic-list .loadmore').on('click', function () {
    if (topicsLength > pageCount + 10)
        pageCount = pageCount + 10;
    else
        pageCount = topicsLength + 1;
    var dataTopic = $(".perspective-tab-section #tabs li a.active").attr("data-topic");
    if (dataTopic == "allitems")
    {
        paginationResults();
    }
    else {
        topicsLength = $(".widget-section-listing[data-topic='"+dataTopic +"']").length;
        $('.widget-section-listing').hide();
        for(var i=0; i< topicsLength; i++)
        {
            if (i < pageCount)
            {
                var listID= $(".widget-section-listing[data-topic='"+dataTopic +"']")[i].id;	
                $('#'+listID).show();
            }	
        }
        if (topicsLength < pageCount)
        {
            $('.perspective-topic-list .loadmore').hide();
        }
    }
    
});

$(document).ready(function() { 
  $('.share_mailto').click(function (e) {
    e.preventDefault();
    var subject = $(this).parent().find('.share_mailsubject ul li').text().trim(); 
    var link = $(this).parent().find('.share_maillink').text().trim(); 
    var body = $(this).parent().find('.share_mailmessagelist ul li').text().trim();
    var subjectstring = "";
    if(subject != ""){
      subjectstring = "&subject=" + encodeURIComponent(subject);
    }
    var bodystring = "";
    if(body != ""){
      bodystring = encodeURIComponent(body) + "%0D%0A%0D%0A";
    }
    var url = "mailto:?Content-type=text/html" + subjectstring + "&body=" + bodystring + encodeURIComponent(link);    
    $(this).attr('data-linkurl', url.trim().toLowerCase());
    window.location.href = url;
  });
  });

/*AQA issues common fix*/

$(document).ready(function(){
    setTimeout(function(){  $('.owl-nav button,.owl-dots button').attr("title","owl-nav-buttons"); }, 3000);
});

/*Responsive background images script*/

$(document).ready(function(){

function updateBgImageForComponents(){   
$('.responsive-bg-image').each(function()
{   
        var bgImg = $(this).data('dbg');
        if ($(window).width() <= 767 && $(this).data('mbg')) {
            bgImg = $(this).data('mbg');
        } else if ($(window).width() >= 768 && $(window).width() < 1200 && $(this).data('tbg')) {
            bgImg = $(this).data('tbg');
        }
        if(bgImg!== null && bgImg!== undefined){
        	$(this).css({ 'background-image': 'url(' + bgImg + ')' });
        }
});
}
updateBgImageForComponents();
$(window).on('resize', function (e) {
        updateBgImageForComponents();
    });
})

function changeTargetAndTitle(waitForElement, anchorTag, formsList = []) { 
    let text = ""; 
    let textFound = false;

    function checkIfURLIsForm(href) {
        for (let formurl of formsList) {
            if (formurl.pathname === href.pathname) 
                return true;
        }
        return false;
    }

    function findText(ele) {
        if(!textFound) {
            ele.contents().each(function(){
                if(this.nodeType === 3 && !this.nodeValue.match(/^[\s\n\t]*$/g)) {
                    text = this.nodeValue;
                    textFound = true;
                    return false;
                }
                else findText($(this));
            });
        }
        return text;
    }

    waitForElement.ready(function() {
        anchorTag.each(function () {
            let href;
            if (isNaN(this.href) && this.href != undefined && this.href !== '' && this.href !== 'javascript:void(0)') href = new URL(this.href);
            else return;
            function addBlank(element) {
                element.attr('title', (findText(element).trim()||element.data('socialBookmark')||element.attr('title')||element.attr('href')) + openBrowserText).attr('target', '_blank');
            }
            if (href) {
                if (href.hostname !== hostName) addBlank($(this));                  
                else {
                    if (href.origin + href.pathname === window.location.origin+window.location.pathname)
                        $(this).attr('target', '_self')
                            .attr('title', 
                                findText($(this)).trim() 
                                || $(this).data('socialBookmark') 
                                || $(this).attr('title')
                                || $(this).attr('href')
                            ); 
                    else if (href.href.match(/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|epub|odp|ods|txt|rtf|jpe?g|a?png|webp|gif|avif|jfif|pjp(eg)?)$/ig))
                        addBlank($(this));                      
                    else if (checkIfURLIsForm(href)) 
                        addBlank($(this));
                     else 
                        $(this).attr('target','_self').attr('title', findText($(this)).trim()||$(this).data('socialBookmark')||$(this).attr('title')||$(this).attr('href'));
                }
                
            }
            text = "";
            textFound = false;
        });
    });
}


async function fetchFormsList(clearCache) {
    try {
        let response = await fetch(
            `//${
                window.location.host
            }/content/dam/aem-chubb-global/form-url/forms/jcr:content/data/master/formurls.json${
                clearCache ? '?clearCache=true' : ''
            }`
        )
        let data = await response.json()
        changeTargetAndTitle($(document), $('a'), data.formurls.map(item => new URL(item)))
    } catch (error) {
        console.error('network error while fetching forms json', error)
        changeTargetAndTitle($(document), $('a'))
    }
}

fetchFormsList()
var videoPlayers = {};
var brtCoveVideoPlayers = {};
var videoListBcPlayers = {};
function initBcVideos(){
    $('.bc-video-modal').each(function() {
        var $modal = $(this);
        var $video = $modal.find('video');
        var scriptURL = '//players.brightcove.net/' + $video.data('account') + '/default_default/index.min.js';
        var isLoaded = false;
        var videoId = $video.data('id');

        $.getScript(scriptURL, function() {
          var videoPlayer = window.videojs(videoId);

          videoPlayer.on('loadedmetadata', function() {
            if(isLoaded) return;
            isLoaded = true;
            var $button = $('.btn[data-video=' + videoId + ']');
            $button.on('click', function() {
              videoPlayer.play();
            });/*start sroll video 1924*/
            var $button1=$('.modalBoxA[data-video='+videoId+']');$button1.on('click',function(){videoPlayer.play()})
            /*end sroll video*/
              var $button2 = $('.bc-video-button[data-video=' + videoId + ']');
              $button2.on('click', function () {
                  videoPlayer.play();
              });
          });

          $modal.on('click', function(event) {
            if($(event.target).parents('.video-player').length <= 0) {
                console.log('modal clicked');
              videoPlayer.pause();
            }
          });
        });

      });

    if (!$('.video-img-wrapper .vid-carousel__brtcove-video').length && !$(".prs-primary-video-wrapper .vid-carousel__brtcove-video").length) return;
    var videoAccount = '818971943001';
    var scriptURLLink = '//players.brightcove.net/' + videoAccount + '/default_default/index.min.js';

    $.getScript(scriptURLLink, function () {
        //Video Carousel
        if ($('.video-img-wrapper .vid-carousel__brtcove-video').length > 0) {
            $('.video-list-carousel .item').each(function () {
                var carouselItem = $(this);
                var brtCoveVideo = carouselItem.find('.vid-carousel__brtcove-video');
                var brtCoveEleId = brtCoveVideo.attr('id');
                if (brtCoveEleId) {
                    brtCoveVideoPlayers[brtCoveEleId] = window.videojs(brtCoveEleId);
                }
            });
        }

        //video list
        if ($('.prs-video-section').length > 0) {
            $('.prs-primary-video-wrapper').each(function () {
                var carouselItem = $(this);
                var brtCoveVideo = carouselItem.find('.vid-carousel__brtcove-video');
                var brtCoveEleId = brtCoveVideo.attr('id');
                if (brtCoveEleId) {
                    videoListBcPlayers[brtCoveEleId] = window.videojs(brtCoveEleId);
                }
            });
        }

    });
}

function initVideoModals() {
    // find the modals with their content, replay buttons, and backdrops
    var $videoModal = $('.video-modal:not(.bc-video-modal)');
    var $modalContent = $videoModal.find('.modal-body');
    var $replayButton = $('.js-video-replay');
    var $videoCover = $('.js-video-cover');
    var currentVideoPlayer = null;
    var closeModalTimeout;
    var isInfoShowing = false;
    var vidCarouselIframe = $('.vid-carousel__iframe');
    if (!$videoModal.length && !vidCarouselIframe.length) return; // do nothing if none found

    const youtubeReady = setInterval(function () {
        if ("YT" in window && YT.loaded === 1) {
            console.log("Loading YT Players")
            var videos = $('.modal-video'); // set video modals
            videos.each(function (i, val) { // initiate a YT object and set event listeners
                videoPlayers[val.id] = YT.get(val.id) || new YT.Player(val.id);
            });
    
            // initiate a YT object and set event listeners for Video Carousel
            if (vidCarouselIframe.length > 0) {
                vidCarouselIframe.each(function (i, val) { 
                    videoPlayers[val.id] = YT.get(val.id) || new YT.Player(val.id);
                });
            }
            clearInterval(youtubeReady)
        }
    }, 500)

    //YoutubeVideoPlayed

    $videoCover.on('click', function () { // click to start or pause
        var playerState = currentVideoPlayer.getPlayerState();
        if (playerState === YT.PlayerState.PLAYING) {
            currentVideoPlayer.pauseVideo();
        } else {
            currentVideoPlayer.playVideo();
        }
    });

    $replayButton.click(function (event) { // replay
        event.preventDefault();
        currentVideoPlayer.playVideo();
    });


    //attach new video src if data-video-url was provided 
    $('body').on('click', '[data-video-url]', function () {
        var url = $(this).data('video-url');
        var modal_to_invoke = $(this).data('target');

        $(modal_to_invoke).find('iframe').attr('src', url);
        var myPlayer;
        $('#storyvideo-brightcove-player').hide();

        //for brightcove
        if(modal_to_invoke.indexOf('brightcove')>=0) {
            window.videojs.getPlayer('storyvideo-brightcove-player').ready(function () {
                myPlayer = this;
                myPlayer.catalog.getVideo(url, function (error, video) {
                    myPlayer.catalog.load(video);
                    myPlayer.play();
                    $('#storyvideo-brightcove-player').show();
                });
            });
        }

        $(modal_to_invoke).on('hide.bs.modal', function () {
            if(modal_to_invoke.indexOf('brightcove')>=0) {
                if (myPlayer !== undefined)
                    myPlayer.pause();
                $('#storyvideo-brightcove-player').hide();
            }
        });
    });

    let videoProgressListener;
    let videoVisible = false; 
    let lastVideoStatusChange = Date.now()

    function customVideoTrigger(event) {
        console.log('Trying to add progress listener to video. status: ', videoProgressListener)
        if (!videoVisible) {
            console.warn('Stopped triggers getting added to a stopped video')
            return
        }
        if (videoProgressListener !== undefined) {
            console.warn('Video already closed (or) progress listener already attached')
            return
        }
        
        console.log('Custom video trigger added', event.target)
        let iframe = event.target.getIframe()
        let videoData = event.target.getVideoData 
            ? event.target.getVideoData() 
            : { title: event.target.videoTitle }
        let videoUrl = event.target.getVideoUrl 
            ? event.target.getVideoUrl() 
            : event.target.playerInfo.videoUrl

        let objectToPush = {
            "event": "lazyloadvideo",
            "gtm.element": iframe,
            "gtm.elementClasses": iframe.classList.toString(),
            "gtm.elementId": iframe.id,
            "gtm.elementTarget": "",
            "gtm.elementUrl": iframe.src,
            "gtm.videoProvider": "youtube",
            "gtm.videoUrl": videoUrl,
            "gtm.videoTitle": videoData.title,
            "gtm.videoVisible": true
        } 

        let eventsTriggered = []
        let lastTime = 0
        let progressPoints = [25, 50, 75, 100]
        let videoDuration = event.target.getDuration 
            ? event.target.getDuration() 
            : event.target.playerInfo.duration
        let maxSkipTime = Math.min(4, Math.floor(videoDuration / 4))
        let videoEnded = false
        let lastPauseTime = 0
        let videoCompleted = () => {
            objectToPush["gtm.videoStatus"] = "complete"
            objectToPush["gtm.videoCurrentTime"] = Math.ceil(videoDuration)
            objectToPush["gtm.videoPercent"] = 100
            objectToPush["gtm.videoElapsedTime"] = Math.floor(videoDuration - lastPauseTime)
    
            window.dataLayer.push(JSON.parse(JSON.stringify(objectToPush)))
    
            videoEnded = true
            lastVideoStatusChange = Date.now()
            
            clearInterval(videoProgressListener);
            videoProgressListener = undefined;
        }

        objectToPush["gtm.videoDuration"] = videoDuration
        videoProgressListener = setInterval(() => {
            let currentTime = event.target.getCurrentTime
                ? event.target.getCurrentTime()
                : event.target.playerInfo.currentTime
            videoDuration = event.target.getDuration 
                ? event.target.getDuration() 
                : event.target.playerInfo.duration

            if (event.target.playerInfo.playerState === 0 && eventsTriggered.length > 0) {
                videoCompleted()
                return;
            }

            if (lastTime === currentTime && currentTime < videoDuration) {
                lastPauseTime = currentTime
                return
            }

            if (videoEnded && currentTime >= videoDuration)
                return

            if (currentTime > 0 && eventsTriggered.length === 0) {
                if (Date.now() - lastVideoStatusChange < 1000 || event.target.playerInfo.playerState === 0)
                    return

                videoEnded = false
                objectToPush["gtm.videoStatus"] = "start"
                objectToPush["gtm.videoCurrentTime"] = Math.floor(currentTime)
                objectToPush["gtm.videoPercent"] = 0
                objectToPush["gtm.videoElapsedTime"] = Math.floor(currentTime)

                window.dataLayer.push(JSON.parse(JSON.stringify(objectToPush))) 
                eventsTriggered.push('played')
            } 

            for (let i = 0; i < 3; i++) {
                let currentPercentage = currentTime / videoDuration
                if (currentPercentage > (progressPoints[i] / 100) && eventsTriggered.length === (i+1)) {
                    let timeGap = currentTime - lastTime
                    if (timeGap >= 0 && timeGap < maxSkipTime && currentPercentage < (progressPoints[i+1] / 100)) {
                        objectToPush["gtm.videoStatus"] = "progress"
                        objectToPush["gtm.videoCurrentTime"] = Math.floor(currentTime)
                        objectToPush["gtm.videoPercent"] = progressPoints[i]
                        objectToPush["gtm.videoElapsedTime"] = Math.floor(currentTime - lastPauseTime)

                        window.dataLayer.push(JSON.parse(JSON.stringify(objectToPush)))
                    }
                    eventsTriggered.push(progressPoints[i])
                }
            }
            
            if (Math.ceil(currentTime) >= videoDuration) 
                videoCompleted()

            lastTime = currentTime
        })
    }

    $videoModal.on('shown.bs.modal', function () {
        let videoId = $(this).find('.modal-video').attr('id')
        videoVisible = true;
        currentVideoPlayer = videoPlayers[videoId];

        let modalContent = $(this).find('.modal-content');
        setTimeout(function () {
            if (currentVideoPlayer.getIframe().dataset.customvideotriggers != undefined) {
                setTimeout(() => {
                    currentVideoPlayer = new YT.Player(videoId, {
                        events: {
                            'onReady': customVideoTrigger,
                            'onStateChange': customVideoTrigger
                        }
                    })
                }, 500)
            }
            modalContent.addClass('revealed');
            (window.dataLayer || []).push({ 'event': 'youtubeVideoPlayed' });
            if (currentVideoPlayer && typeof currentVideoPlayer.playVideo === "function")
                currentVideoPlayer.playVideo();
        }, 500);
    });

    $videoModal.on('hide.bs.modal', function () {
        console.log('Removing progress listener from video', videoProgressListener)
        videoVisible = false;
        if (videoProgressListener) {
            clearInterval(videoProgressListener);
            videoProgressListener = undefined;
        }
        if (currentVideoPlayer && typeof currentVideoPlayer.stopVideo === "function") {
            if (typeof currentVideoPlayer.pauseVideo === "function")
                currentVideoPlayer.pauseVideo()
            currentVideoPlayer.stopVideo();
            currentVideoPlayer = null;
        } else {
            var playerIframe = $(this).find(".modal-video");
            playerIframe.attr("src", playerIframe.attr("src"));
        }
    });

    $.getScript('https://www.youtube.com/iframe_api');
}


$(document).ready(function(){
        
    function brightCoveGtmTrigger() {
        const divisor = 25
    
        const _labeltag = (element) => $(element).attr('aria-labelledby')
        const _name = (element) => $(`#${_labeltag(element)}`).text()
                
        let $videos = $('video')
    
        function initialize(currentVideo) {
        // Video Status Object declaration
            currentVideo.greatestProgress = 0
            currentVideo.currentProgress = {}
            // On page DOM, all players currentTime is 0
            currentVideo.c_currentTime = 0
    
            for (var j = 0; j < 100; j+= divisor) {
                var point = divisor * Math.floor(j / divisor)
                currentVideo.currentProgress[point] = false
            }
        }
    
        function eventHandler(event) {
            let targetVideo = event.target,
                id = targetVideo.id
    
            switch (event.type) {
                // This event type is sent everytime the player updated it's current time,
                // We're using for the % of the video played.
                case 'timeupdate':
                    // Let's set the save the current player's video time in our status object
                    targetVideo.c_currentTime = Math.round(targetVideo.currentTime)
                    // We just want to send the percent events once
                    let percentage = Math.floor(
                        (100 * targetVideo.c_currentTime) / targetVideo.duration
                    )
    
                    for (var j  in targetVideo.currentProgress) {
                        if (percentage >= j && j > targetVideo.greatestProgress) {
                            targetVideo.greatestProgress = j
                        }
                    }
    
                    if (
                        targetVideo.greatestProgress &&
                        !targetVideo.currentProgress[targetVideo.greatestProgress]
                    ) {
                        targetVideo.currentProgress[targetVideo.greatestProgress] = true
                        if (targetVideo.seeking)
                            return
                        dataLayer.push({
                            event: 'bcvideo_engagement',
                            eventCategory: 'Video',
                            eventAction: 'bcVideoEngagement',
                            eventLabel: _name(targetVideo),
                            customDimensions: {
                                bcVideoID: id,
                                bcVideoName: _name(targetVideo),
                                bcVideoPercent: percentage,
                                bcVideoMilestone: targetVideo.greatestProgress,
                                bcVideoSeconds: targetVideo.c_currentTime,
                            },
                        })
                    }
                    break
                // This event is fired when user clicks on the play button
                case 'play':
                    if (targetVideo.started) return
                    targetVideo.started = true
    
                    console.log('Video Started: ', event.currentTarget.dataset.id)
                    dataLayer.push({
                        event: 'bcplay_request',
                        eventCategory: 'Video',
                        eventAction: 'bcPlayRequest',
                        eventLabel: _name(targetVideo),
                        customDimensions: {
                            bcVideoID: id,
                            bcVideoName: _name(targetVideo),
                        },
                    })
                    break
                // If the user ends playing the video, an Finish video will be pushed ( This equals to % played = 100 )
                case 'ended':
                    targetVideo.started = false
                    initialize(targetVideo)                
                    console.log('Video Ended: ', event.currentTarget.dataset.id)
                    dataLayer.push({
                        event: 'bcvideo_complete',
                        eventCategory: 'Video',
                        eventAction: 'bcVideoComplete',
                        eventLabel: _name(targetVideo),
                        customDimensions: {
                            bcVideoID: id,
                            bcVideoName: _name(targetVideo),
                        },
                    })
                    break
                default:
                    break
            }
        }
    
        for (var video of $videos) {
            let $video = $(video)
            if ($video.attr('bc-data-tracked')) continue
    
            $video.attr('bc-data-tracked', true)
            initialize(video)
            $video.on('play ended timeupdate', eventHandler)
        }
    }
    

    initVideoModals();
	initBcVideos();
    brightCoveGtmTrigger();
});
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( typeof define === "function" && define.amd ) {
		// AMD support
		define( "picturefill", function() { return picturefill; } );
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );
$(() => window.dataLayer = window.dataLayer || [])

String.prototype.gtmString = function() {
     return this.trim().toLowerCase()
}

$.prototype.getText = function(getFullText) {
     let text = ''
     let textFound = false

     const findText = ($element) => {
          if (!textFound) {
               $element.contents().each(function () {
                    if (this.nodeType == 3 && !this.nodeValue.match(/^[\s\n\t]*$/g)) {
                         text = this.nodeValue
                         textFound = true
                         return false
                    } else 
                         findText($(this))
               })
          }
          return text.gtmString()
     }

     return getFullText ? this.text().gtmString() : findText(this)
}

var INTERNAL_PAGE = 'internal site page'
var EXTERNAL_PAGE = 'external link'
var REL = 'noopener noreferrer'

function getJQueryElement(element) {
     let jQueryElement
     if (element !== null && element !== undefined) 
          jQueryElement = element.constructor === $ ? element : $(element)
     return jQueryElement
}

function getFirstJQueryElement(element) {
     let jQueryElement = getJQueryElement(element)
     return jQueryElement && jQueryElement.length > 1 ? jQueryElement.first() : jQueryElement
}

function maskContactNumber(contact) {
     if (contact != null) 
          contact = contact.toString().replace(/[-\s]*/gm, '')
     else 
          return ''
     return '######' + contact.slice(-4)
}

function maskEmailAddress(email) {
     if (email == null) 
          return ''

     let splitter = '@'
     email = new RegExp(/([^\?]*)/).exec(email)[1]
     let splitEmail = email.split(splitter)

     if (!splitEmail[1]) {
          splitEmail = email.split('.')
          splitter = '.'
     }

     if (!splitEmail[1]) splitEmail[1] = ''

     var paddedString = splitEmail[0][0]
     var recipientLength = splitEmail[0].length

     for (var i = 1; i < recipientLength - 1; i++) 
          paddedString += 'x'

     paddedString += recipientLength > 2 ? splitEmail[0][recipientLength - 1] : 'x'

     return paddedString + (splitEmail[1] !== '' ? splitter + splitEmail[1] : '')
}

function getSocialShareAttrs(href, bookmark) {

     function buildAttrs(link, type) {
          if (!link) link = ''

          let shareAttributes = {
               'data-ec': 'social',
               'data-ea': `share: ${type.gtmString()}`,
               'href': link,
               'data-linkurl': link.gtmString()
          }

          if (type !== 'email' && type !== 'print') {
               shareAttributes['rel'] = REL
          }

          return shareAttributes
     }

     function encodeUrlComponents(url) {
          let urlasURL

          try {
               urlasURL = new URL(url)
          } catch (exception) {
               return url
          }

          let searchParams = '?'

          urlasURL.searchParams.forEach((value, key) => {
               let encodedValue = encodeURIComponent(value)
               searchParams += `${key}=${
                    decodeURIComponent(encodedValue) == value ? value : encodedValue
               }&`
          })

          searchParams = searchParams.slice(0, searchParams.length - 1)

          return url.split('?')[0] + searchParams
     }

     let encodedHref = encodeUrlComponents(href)

     return buildAttrs(encodedHref, bookmark)
}

function getUrlLinkType(url) {
     const extensions = {
          '.png': 'image',
          '.svg': 'image',
          '.gif': 'image',
          '.jpg': 'image',
          '.jpeg': 'image',
          '.pdf': 'document download',
          '.zip': 'document download',
          '.txt': 'document download',
          '.doc': 'document download',
          '.docx': 'document download',
          '.ppt': 'document download',
          '.pptx': 'document download',
          '.xls': 'document download',
          '.xlsx': 'document download'
     }

     let extension = new RegExp(/[^/]\/[^/^?/#]*\.(\w*)(\?|#|$|\/)/).exec(url)
     return extension && extension[1] && extensions['.' + extension[1]]
          ? extensions['.' + extension[1]]
          : window.getExternalizedType
               ? window.getExternalizedType(url)
               : window.location.hostname == new URL(url, window.location.href).hostname
                    ? INTERNAL_PAGE
                    : EXTERNAL_PAGE
}


function getGtmAttrs(url, label = '', componentTitle = '', socialBookmark) {
     if (url == null) 
          return {}

     let split, linkType 
     label = label.gtmString()

     if (socialBookmark !== undefined) 
          return getSocialShareAttrs(url, socialBookmark)

     else if ((split = url.split('mailto:')[1]) && split !== undefined)
          return {
               'data-linkurl': maskEmailAddress(split.gtmString()),
               'data-ea': 'contact email',
               'data-ec': 'contact click'
          }

     else if ((split = url.split('tel:+')[1] || url.split('tel:')[1]) && split !== undefined)
          return {
               'data-linkurl': maskContactNumber(split.gtmString()),
               'data-ea': 'contact call',
               'data-ec': 'contact click'
          }

     else if (url.startsWith('http') || url.startsWith('https://')) {
          if (url.startsWith('https://www.bing.com/maps') || url.startsWith('https://www.google.com/maps')
               || url.startsWith('https://goo.gl/maps') || url.startsWith('https://maps.google.com'))
               return {
                    'data-linkurl': url.gtmString(),
                    'data-ea': 'contact map',
                    'data-ec': 'contact click',
                    'rel': REL
               }
          else {
               linkType = getUrlLinkType(url)
               let siteAttrs = {
                    'data-linkurl': url.gtmString(),
                    'data-ea': 'content link',
                    'data-ec':  'cta click',
                    'data-cta': label + (componentTitle ? `: ${componentTitle.gtmString()}` : ''),
                    'data-linktype': linkType
               }

               if (linkType[0] == 'e') 
                    siteAttrs['rel'] = REL

               return siteAttrs
          }
     } else if (url == '#' && label === 'show on map') {
          //only for map holder component
          return {
               'data-linkurl': url.gtmString(),
               'data-ea': 'contact map',
               'data-ec': 'contact click'
          }
     } else if (url.startsWith('?') || url.startsWith('#') || url.startsWith('/')) {
          return {
               'data-linkurl': url.gtmString(),
               'data-ea': 'content link',
               'data-ec': 'cta click',
               'data-linktype': getUrlLinkType(url),
               'data-cta': label + (componentTitle ? `: ${componentTitle.gtmString()}` : '')
          }
     }

     return {}
}


/*
 * Adds GTM Attributes to an anchor tag based on its href value
 * @param {HTMLAnchorElement} element - Anchor tag for which gtm attributes are to be added
 * @param {String} componentTitle - title of the component (to be added in data-cta value)
 * @return {undefined}
 */
function runGtmScript(element, componentTitle, getFullText = false) {

     let $element = getFirstJQueryElement(element)

     let link = $element.attr('href'), 
          socialBookmark = $element.data('socialBookmark')

     if ($element.attr('data-linktype') !== 'portal')
          $element.attr(getGtmAttrs(link, $element.getText(getFullText), componentTitle, socialBookmark))
}

/*
 * Listens to changes in component or an anchor tag
 * and on modification, finds or gets the anchor tag
 * and adds or modifies gtm data attributes based on href value
 * @param {HTMLElement | HTMLAnchorElement} componentSelector - Component | Anchor tag selector
 * @param {String} componentTitle - title of the component (to be added in data-cta value)
 * @param {Boolean} listenToHrefChanges - set true to only listen to changes in the href attribute
 * @return {undefined} 
 */

function addGtmAttributes(componentSelector, componentTitle, getFullText = false, listenToHrefChanges = false, tagToListen = 'a') {
     let $componentSelector = getJQueryElement(componentSelector)

     $componentSelector.find(tagToListen).each((_, anchor) => runGtmScript(anchor, componentTitle, getFullText))

     $componentSelector.each((_, component) => {
          let mutationObserver = new MutationObserver((mutationRecord) => {
               for (let mutation of mutationRecord) {
                    if (listenToHrefChanges) 
                         runGtmScript(mutation.target, componentTitle, getFullText)
                    else {
                         for (let node of mutation.addedNodes) {
                              let anchorTag = $(node).find(tagToListen)
                              if (anchorTag.length > 0) {
                                   anchorTag.each((__, element) => runGtmScript(element, componentTitle, getFullText))
                              }
                         }
                    }
               }
          })
          mutationObserver.observe(
               component,
               listenToHrefChanges
                    ? { attributeFilter: ['href'] }
                    : { childList: true, subtree: true }
          )
     })
}

function triggerFilterEvent(filterType, filterName) {
     filterType = (filterType || '').gtmString()
     filterName = (filterName || '').gtmString()
     
     dataLayer.push({
          event: 'filterevent',
          'data-ec': 'filter',
          'data-ea': filterType,
          'data-linkurl': filterName,
          'data-cta': `filter: ${filterType}: ${filterName}`,
     })
}

function triggerLiveChat(linkurl) {
     if (typeof linkurl !== 'string')
          linkurl = ''

     dataLayer.push({     
          event: 'chatevent',
          'data-ec': 'contact click',
          'data-ea': 'contact chat',
          'data-linktype': 'livechat link',
          'data-linkurl': linkurl !== undefined ? linkurl.gtmString() : ''
     })
}

function getLinkType(href, $anchor) {
     let hrefDomain

     try {
          hrefDomain = new URL(href).hostname
     } catch (e) {
          return INTERNAL_PAGE
     }
     
     if ($anchor.data('portal'))
          return 'portal'
     else if (window.location.hostname !== hrefDomain) 
          return EXTERNAL_PAGE
     else
          return INTERNAL_PAGE
}

function searchEventTrigger($searchForm, $anchor = null) {
     let $textInput = $searchForm.find('input').first()
     
     let triggerSearchEvent = () => {
          if($textInput.val().trim().length > 0) {
               let action = $searchForm.attr('action')
               action = action ? action : window.location.href
               
               dataLayer.push({
                    event: 'searchevent',
                    'data-ec': 'site search',
                    'data-ea': 'typed keyword click',
                    'data-linkdesc': $textInput.val().gtmString(),
                    'data-linkurl': action.gtmString()
               })
          }
     }
     if ($anchor && $anchor.constructor === $)
          $anchor.on('click', triggerSearchEvent)
     $searchForm.on('submit', triggerSearchEvent)
     
     return triggerSearchEvent
}

function addNavigationEvents (navigation) {
     let $navigation = getJQueryElement(navigation)
     let navType = $navigation.is('.primary, .c-primary-navigation') ? 'primary' : 'global'

     function getInvokeType($anchor) {
          if ($anchor.attr('href') === '#collapseExample' && $anchor.hasClass('collapsed'))
               return 'search'
          
          if ($anchor.is('#hamburgermenu'))
               if ($anchor.hasClass('collapsed'))
                    return 'menu'
               else 
                    return 'close'
          return null
     }

     function getNavLinkDesc($anchor) {
          let anchorSelector = navType === 'global' ? '.nav-secondary-links-level-1' : '.nav-primary-links-level-1'
     
          if ($anchor.is(anchorSelector))
               return $anchor.text().gtmString()

          if ($anchor.is('.mainLogo')) 
               return 'chubb-logo'
     
          let category
          
          if (navType === 'primary')
               category = $anchor.closest('.nav-group').children('.h6-title').text().gtmString()
     
          let dropdownParent = $anchor.closest('.dropdown').children(anchorSelector)
     
          if (dropdownParent.length > 0) 
               return dropdownParent.text().gtmString() + ': ' + (category ? (category + ': ') : '') + $anchor.text().gtmString()
     
          return $anchor.text().gtmString()
     }

     function getActionType($anchor) {
          if (navType === 'global')
               return 'utility nav'
     
          if ($anchor.is('.navbar a, .navbar button') && $anchor.is(':not(.dropdown-menu a)'))
               return 'primary nav'
          
          return 'secondary nav'
     }

     const isInvokeClick = ($anchor) => $anchor.children('span.icon').length > 0 || $anchor.attr('href') === '#collapseExample' || $anchor.is('#hamburgermenu')

     $navigation.find('a, #hamburgermenu').each((_, anchor) => {
          let $anchor = $(anchor)
          let linkType, linkDesc, isInvoke

          let clickType = getActionType($anchor)
          let dataEa = `click: ${clickType}` 

          isInvoke = clickType[0] === 'p' && isInvokeClick($anchor)
          linkType = isInvoke ? 'nav invoke' : getLinkType(anchor.href, $anchor)
          
          $anchor.on('click', () => {
               linkDesc = isInvoke ? getInvokeType($anchor) : getNavLinkDesc($anchor)
               if (linkDesc === null)
                    return

               dataLayer.push({
                    event: 'navevent',
                    'data-ec': 'navigation',
                    'data-ea': dataEa,
                    'data-linktype': linkType,
                    'data-linkdesc': linkDesc,
                    'data-linkurl': isInvoke ? linkDesc : anchor.href.gtmString()
               })
          })
     })
}
function addSearchEvents(element, pageOffset = 10, searchTerm = $('#searchTermResultsPage').val(), $submitSearch = $('#submitSearch')) {
     let $element = $(element)
     let $paginationContainer = $element.find('.search-result-pagination')
     let currentPage = $paginationContainer.find('.pagenationLink.current').attr('value')

     function addSearchAttributes(anchorList) {
          let startIndex = (currentPage - 1) * pageOffset 
          anchorList.each((index, list) => {
               let $list = $(list)

               $list.find('a').each((_, anchor) => {
                    let $anchor = $(anchor)

                    $anchor.attr('data-ec', 'site search')
                         .attr('data-ea', 'site search result click')
                         .attr('data-linkurl', $anchor.attr('href').gtmString())
                         .attr('data-linkdesc', `${searchTerm}| ${(index+1) + startIndex}`.gtmString())
               })
          })
     }

     addSearchAttributes($element.find('.search-result-list li'))

     $paginationContainer.find('.pagenationLink').each((_, pageLink) => {
          let $pageLink = $(pageLink)

          $pageLink.on('click', ()=> {
               currentPage = $pageLink.attr('value')
               setTimeout(() => addSearchAttributes($element.find('.search-result-list li')))
          })
     })

     $submitSearch.on('click', () => addSearchEvents(element))
}
function gtmCarouselEventHandler(
	element,
	title = null,
	dataEa = "content carousel navigation",
	dataEc = "interaction"
) {
	getJQueryElement(element).on('changed.owl.carousel', event => {
		let dataLayerObject = {
			"event": "carouselnavigation",
			"data-ec": dataEc,
			"data-ea": dataEa,
			"data-carouselposition": event.page.index + 1
		}

		if (title !== null)
			dataLayerObject["data-carouseltitle"] = title.gtmString();

		dataLayer.push(dataLayerObject);
	});
}
var formNotStarted = true

function trackEvent(eventData) {
     window.dataLayer.push(eventData)
     console.log(eventData)
}

function formPostSubmitEvent(formName, formType, formEventName) { 
    formType = decodeURIComponent(formType);
    formName = decodeURIComponent(formName);
     trackEvent({
          event: 'formevent',
          formname: (formName || '').gtmString(),
          formtype: (formType || '').gtmString(),
          formeventname: formEventName
     })
}

$(
     (checkIfFormRedirectedPage = () => {
          if (
               window.location.search.indexOf('formSubmitted') != -1 &&
               window.location.search.indexOf('formName') != -1 &&
               window.location.search.indexOf('formType') != -1
          ) {
               let URLData = Object.fromEntries(new URLSearchParams(window.location.search))
               formPostSubmitEvent(URLData.formName, URLData.formType, URLData.formSubmitted == 1 ? 'submit success' : 'submit error')               
          }
     })
)

function handleForms(formElement, formInputIdentifier, formName, formType, submitButton) {
     let $formElement = getFirstJQueryElement(formElement)
     let $formInput = getJQueryElement(formInputIdentifier)
     let $submitButton = getFirstJQueryElement(submitButton)
     if (formName === null || formName === undefined || formName === void 0) formName = ''
     else formName = formName.gtmString()
     if (formType === null || formType === undefined || formType === void 0) formType = ''
     else formType = formType.gtmString()

     const formSubmitAttempt = () => {
          trackEvent({
               event: 'formevent',
               formname: formName,
               formtype: formType,
               formeventname: 'submit attempt'
          })
     }

     const formInputUpdate = (element) => {
          let $element = getFirstJQueryElement(element)
          const fieldName =
               $element.attr('data-fieldname') ||
               $element.attr('data-et-attribute') ||
               $element.attr('data-ddlname') ||
               $element.attr('name') ||
               $element.siblings('label').text().trim() ||
               $element.closest('label').text().trim() ||
               $element.attr('id') ||
               ''

          let value = []
          if ($element.attr('type') === 'checkbox') {
               $('.form-component')
                    .find(`input[name=${$element.attr('name')}]:checked`)
                    .each((i, e) => {
                         value.push(e.value)
                    })
          } else {
               let el = $element.get(0)
               if ($element.attr('type') == 'radio' || (el && el.tagName == 'SELECT')) {
                    value.push($element.val())
               } else if (el && el.tagName == 'A') {
                    value.push($element.text())
               }
          }
          value = value.join(', ')
          dataLayer.push({
               event: 'formevent',
               formname: formName,
               formtype: formType,
               formeventname: fieldName.gtmString(),
               formeventvalue: value.gtmString()
          })
     }

     const formStartHandler = () => {
          trackEvent({
               event: 'formevent',
               formname: formName,
               formtype: formType,
               formeventname: 'form start'
          })
          window.formNotStarted = false
          $formElement.off('click', formStartHandler)
          $formInput.off('focus', formStartHandler)
     }
     if ($formElement) $formElement.on('click', formStartHandler)

     if ($formInput) {
          $formInput.on('focus', formStartHandler)
          $formInput.on('change', (event) => {
               if (window.formNotStarted) {
                    setTimeout(() => formInputUpdate(event.currentTarget), 0)
               } else formInputUpdate(event.currentTarget)
          })
     }

     if ($submitButton) {
          $submitButton.on('click', (_) => {
               if (window.formNotStarted) {
                    setTimeout(formSubmitAttempt, 0)
               } else formSubmitAttempt()
          })
     }
}

var faaExpandTrigger;
function addFAAevents(faa) {
     let $faa = getJQueryElement(faa)
     let dataEc = `find an agent ${dataLayer[0].business}`.gtmString()
     const getLinkDesc = () => `${faaresources.region || 'No Geo'}| ${faaresources.state || 'No Geo'}`.gtmString()

     function trackAnchorClicks($agentCard, linkDesc) {

          $agentCard.find('a.icontext').each((_, anchor) => {
               let $anchor = $(anchor)
               $anchor.attr('data-ec', dataEc)
                    .attr('data-linkdesc', linkDesc.gtmString())

               if ($anchor.hasClass('email'))
                    $anchor.attr('data-ea', 'faa search email')
               else if ($anchor.hasClass('call'))
                    $anchor.attr('data-ea', 'faa search call')
               else if ($anchor.hasClass('map'))
                    $anchor.attr('data-ea', 'faa search map')
               else
                    $anchor.attr('data-ea', 'faa search offsite')
          })
     }

     function trackAgentClicks($parent, level = 1, linkDesc = '') {
          let agents = $parent.find('.producerdiv')

          agents.each((_, agent) => {
               let $agent = $(agent)
               let $agentCard = $agent.closest('.producerdiv-card')
               let agentLinkDesc = `${linkDesc}${linkDesc !== '' ? '| ' : ''}${$agent.find('.mb-0').getText()}`
               let city =  $agent.data('city')
               let state = $agent.data('state')
               let zip = $agent.data('zip').toString()

               trackExpands($agentCard, level, agentLinkDesc, {
                    'data-city': city.gtmString(),
                    'data-state': state.gtmString(),
                    'data-zip': zip.gtmString()
               })

               trackAnchorClicks($agentCard, agentLinkDesc)
          })
     }

     faaExpandTrigger = function (linkDesc, level, agentDetails) {
          let expandObject = {
               event: 'faaexpand',
               'data-ec': dataEc,
               'data-linkdesc': linkDesc.gtmString(),
               'data-ea': `faa search expand level ${level}`
          }

          for (var key in agentDetails)
               expandObject[key] = agentDetails[key]

          dataLayer.push(expandObject)
     }

     function trackExpands($accordion, level = 1, linkDesc = '', agentDetails = null) {
          let $cardHeader = $accordion.find('.card-header>div[data-toggle="collapse"]')

          $cardHeader.on('click', () => {
               if ($accordion.children('.collapse.show').length > 0)
                    return
               faaExpandTrigger(linkDesc, level, agentDetails)
          })
     }

     function main() {
          let regions = $faa.find('.regiondiv-card')
          let type = $faa.children('.faa-location-container').length > 0 ? 'v2' : 'v1'
          
          if (regions.length > 0) {
               regions.each((_, region) => {
                    let $region = $(region)
                    let linkDesc = $region.find('.regiondiv-card-header .mb-0').getText() //[region name]
                    let states = $region.find('.statediv-card')

                    if (states.length > 0) {                         
                         states.each((__, state) => {
                              let $state = $(state)
                              let stateLinkDesc = linkDesc + '| ' + $state.find('.statediv-card-header .mb-0').getText() //[region name]| [state name]
                              trackExpands($state, 2, stateLinkDesc)                   
                              trackAgentClicks($state, 3, stateLinkDesc)
                         })
                         trackExpands($region, 1, linkDesc)  
                    } else {
                         trackAgentClicks($region, 3, linkDesc)
                         trackExpands($region, 2, linkDesc)  
                    }

               }) 
          } else {
               if (type == 'v2')
                    trackAgentClicks($faa, 3, getLinkDesc())
               else 
                    trackAgentClicks($faa, 3)
          }

          if (type == 'v2' && $('.faa-load-more-wrapper').length > 0) {
               let mutationObserver = new MutationObserver((mutationRecord) => {
                    for (let mutation of mutationRecord) {
                         for (let node of mutation.addedNodes) {
                              if ($(node).is('.producerdiv-card')) {
                                   trackAgentClicks($(node), 3, getLinkDesc())
                              }
                         }
                    }
               })
               mutationObserver.observe($faa.find('#accordion').get(0), { childList: true })
               $('#locationModalcta').on('click', () => setTimeout(mutationObserver.disconnect()))
               $('#faa-load-more')
                    .attr('data-ea', 'content link')
                    .attr('data-ec', 'cta click')
                    .attr('data-linktype', INTERNAL_PAGE )
                    .attr('data-linkurl', '#')
                    .attr('data-linkdesc', getLinkDesc())
                    .attr('data-cta', getLinkDesc())
          }
     }
     main()

     let locationModalcta = $('#locationModalcta')
     locationModalcta.on('click', ()=> setTimeout(() => {
          main()          
          faaExpandTrigger(getLinkDesc(), 2)
     }))
}

$(function(){
    if($('.nav.secondary-nav.seconday-nav__links-wrapper').has('li>a').length > 0) {
		$('#hamburgermenu').removeClass('hidden');
    }

    $('#searchTerm').keypress(function (e) {
      if (e.which == 13) {
          if(e.target.value.trim().length > 0) {
              $("#mainSearch").submit();
          }
          return false;
      }
  });

   $('#searchTermMobile').keypress(function (e) {
      if (e.which == 13) {
          if(e.target.value.trim().length > 0) {
              $("#mainSearchMobile").submit();
          }
          return false;
      }
  });
})
$(document).ready(function(e){ 

    let isTwZhPage = window.isTwZhPage || window.location.pathname.startsWith("/content/chubb-sites/life-chubb-com/apac/tw/zh/accessibility") 
    || ((window.location.hostname === "life.chubb.com" 
        || window.location.hostname === "chubb-life-stage.adobecqms.net" 
        || window.location.hostname === "chubb-life-qa.adobecqms.net") 
        && window.location.pathname.startsWith("/tw-zh/accessibility"));
    //clone
    $('.secondary-nav').clone().appendTo('.secondary-menu');
    $('.menu-block .secondary-nav').attr('id', 'secondary-link');
    $('#secondary-link li.dropdown').each(function() {
        var navItem= $(this);
        navItem.find('.navi-secondary__toggler-plus').each(function(){
            $(this).attr('aria-controls', $(this).attr('aria-controls') + '_m');
            $(this).data('target', $(this).data('target') + '_m');
        });
        navItem.find('.dropdown-menu').each(function(){
            $(this).attr('id', $(this).attr('id') + '_m');
        });
    });
    if(isTwZhPage) {
        $($("ul.nav.secondary-nav.seconday-nav__links-wrapper")[0]).prepend(
            `<li><a id="3colonaltu" title="上方選單" href="javascript:void(0)" class="nav-secondary-links-level-1" style="color:white">:::</a></li>`
        );
        $(document).keydown(function (event) {
            if (event.altKey && event.keyCode == "85")
                window.location.href = "#3colonaltu";
        });
        let colonAltC = $(`<a id="3colonaltc" title="主要內容區" href="javascript:void(0)" style="position: absolute; color: black; text-decoration: none; top: 35px; left: 30px; font-weight: bold; font-size: 20px;">:::</a>`);
        $('.body-copy>div').first().prepend(colonAltC);
        $(document).keydown(function (event) {
            if (event.altKey && event.keyCode == "67")
                window.location.href = "#3colonaltc";
        });
    }

    $('.modal-local-selector').find('.regions-link, .region-link').on('click', function(event) {
        event.preventDefault();
        var localGroupId = $(this).attr('href');
        $('.locale-group').removeClass('active');
        $(localGroupId).addClass('active');
    });
    
    $('.navbar-toggler').click(function(f){
        $('body').toggleClass('overflowlay');
    }); 
    $('.menu-block ul li a span.icon').click(function(g){
    	g.preventDefault();
        $(this).toggleClass('in');
        $(this).parents().siblings().find('.in').removeClass('in'); 
        $(this).parent().siblings().toggleClass('show');
        $(this).parents().siblings().find('.show').toggleClass('show');
    });
    $('.category .h6-title span.icon').click(function(h){
    	h.preventDefault();
        $(this).toggleClass('in');
        $(this).parent().parent().siblings().find('.in').removeClass('in'); 
        $(this).parent().siblings().toggleClass('show');
        $(this).parents().siblings().find('.show').toggleClass('show');
    });

	$(".navbar .primary-menu .nav-item a").each(function (){
        var URL = window.location.pathname.toLowerCase();
        var Href = $(this).attr("href");
        if (Href == URL){
            $(this).addClass("activeLink");
        }
    });
	 $(".top-header .secondary-nav li a").each(function (){
        var URL = window.location.pathname.toLowerCase();
        var Href = $(this).attr("href");
        if (Href == URL){
            $(this).addClass("activeLink");
        }
    });

    if($(".m-header__access-info").length > 0) {
        $(".main-header .navbar-collapse").addClass("pt-85");
    }

    addNavigationEvents($('.primary, .c-primary-navigation'))
    addNavigationEvents($('.global, .c-global-navigation'))
    searchEventTrigger($('#mainSearch'))
    searchEventTrigger($('#mainSearchMobile'))
});


function initNavigation() {


    //change text in button
    $('.primary-nav__links-wrapper .dropdown-menu, .seconday-nav__links-wrapper .dropdown-menu').on('show.bs.collapse', function (event) {
        var id = $(this).attr('id');
        $('button[aria-controls="' + id + '"]').find('.fa').removeClass('fa-plus').addClass('fa-minus');
        event.stopPropagation();
    });
    $('.primary-nav__links-wrapper .dropdown-menu, .seconday-nav__links-wrapper .dropdown-menu').on('hide.bs.collapse', function (event) {
        var id = $(this).attr('id');
        $('button[aria-controls="' + id + '"]').find('.fa').removeClass('fa-minus').addClass('fa-plus'); //.text('+');
        event.stopPropagation();
    });


      // ***** TAB NAVIGATION ******
    document.onkeyup = PresTab;
    function PresTab(e) {
        var keycode = (window.event) ? event.keyCode : e.keyCode;
        if (keycode == 9) {

            if (event.target.className.indexOf('navi-primary__link-level-2') >= 0) {
                //skip tab for 
            }

            if (event.target.className.indexOf('nav-primary-links-level-1') >= 0  || event.target.className.indexOf('nav-secondary-links-level-1') >= 0 || event.target.className.indexOf('navi-secondary__toggler-plus') >= 0) {
                console.log(" testing ", $('.seconday-nav__links-wrapper').find('.show').length);
                $('.seconday-nav__links-wrapper').find('.show').collapse('hide');      
                $('.primary-nav__links-wrapper').find('.show').collapse('hide');      
            }
        }
    }
      // ***** TAB NAVIGATION END ******
        

}

$(function () {
    initNavigation();
});

$(document).ready(function(e){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
           $('.enable-sticky').addClass('sticky');
           $('.enable-sticky .global').hide();
           $('.navi-primary__get-in-touch').addClass('active');
        }
        else {
           $('.enable-sticky').removeClass('sticky');
           $('.enable-sticky .global').show();
           $('.navi-primary__get-in-touch').removeClass('active');
        }
    });
})
/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});


$(document).ready(function(){
function updateImgs(){   
$('.widget-image .img-fluid , .modal-lightbox-content .img-fluid'  ).each(function()
{   

        if(this.src!=undefined){
            var src =  this.src;
            if ( $(window).width() <= 767 && $(this).data('mbg')) {
                this.src = $(this).data('mbg');
            } else if ($(window).width() >= 768 && $(window).width() < 1200 && $(this).data('tbg')) {
                this.src = $(this).data('tbg');
            }   
        }
}   
);

}
updateImgs();
$(window).on('resize', function (e) {
    updateImgs();
    });
  });

(function() {
  $(function() {
      // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

      // get test settings
      var byRow = $('body');

      // apply matchHeight to each item container's items
      $('.row').each(function() {
          $(this).find('.widget-section-rows .widget-content, .listColumn .widget-content').matchHeight({
              byRow: byRow
          });
      });

      $(window).on('resize', function() {
          updateWidgetSectionImageSize();
      }); 
  });
})();
(function() {
  $(function() {
      // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

      // get test settings
      var byRow = $('body');

      // apply matchHeight to each item container's items
      $('.row').each(function() {
          $(this).find('.widget-section.downloadable-docs .widget-content .text-description').matchHeight({
              
              byRow: byRow
          });
      });

      $(window).on('resize', function() {
          updateWidgetSectionImageSize();
      }); 
  });
})();
(function() {
  $(function() {
      // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

      // get test settings
      var byRow = $('body');

      // apply matchHeight to each item container's items
      $('.row').each(function() {
          $(this).find('.widget-section-rows .widget-content .h4-title').matchHeight({
              byRow: byRow
          });
      });

      $(window).on('resize', function() {
          updateWidgetSectionImageSize();
      });
  });
})();

function updateWidgetSectionImageSize() {
    if(window.innerWidth > 767) {
        $('.widget-section:not(.widget-section-rows):not(.listColumn):not(.widget-show-original-image)').each(function() {
            $(this).css('display', 'block');
            $(this).find('.widget-image').css('height', 'auto');
            var contentHeight = $(this).find('.widget-content').outerHeight();
            if($(this).find('.widget-image').height() > contentHeight) {
                //If the content is less, minimum height is set to 300px for image
                contentHeight = contentHeight < 300 ? 300 : contentHeight;
                $(this).find('.widget-image').height(contentHeight);
            }
            $(this).css('display', 'flex');
        });
    } else {
		$('.widget-section:not(.widget-section-rows):not(.listColumn)').each(function() {
            $(this).find('.widget-image').css('height', 'auto');
            $(this).css('display', 'flex');
        });
    }
	$('.widget-image-group').closest('.row').addClass('equal-height-group-image');
}

$(window).on('load', function() {
    updateWidgetSectionImageSize();
});


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=755069641341129";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function openShareInNewWindow(el){
	window.open(el.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
}

$(window).on('load',function(){
  setTimeout(function(){ 
    $('.addthis_button_email svg.at-icon-email').removeAttr('alt');
    $('.addthis_button_email svg.at-icon-email').attr('aria-label','email');
  }, 500);
});
$(window).on('load', function () {
    setTimeout(function () {
        $('.email-icon svg.at-icon-email').removeAttr('alt');
        $('.email-icon svg.at-icon-email').attr('aria-label', 'email');
    }, 500);
    loadMessenger()
});

function loadMessenger() {
     let href,
          isMobile = false,
          facebookAppId = '2805213253067005',
          currentUrl = encodeURIComponent(DOMPurify.sanitize(window.location.href)),
          messengerAnchor = $('[data-messenger]')
     let fallbackURL = `https://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${currentUrl}&redirect_uri=${currentUrl}`

     if (navigator) {
          if (/android/i.test(window.userAgent)) {
               isMobile = true
               fallbackURL =
                    'https://play.google.com/store/apps/details?id=com.facebook.orca'
          } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
               isMobile = true
               fallbackURL = 'https://apps.apple.com/us/app/messenger/id454638411'
          }
     }

     if (isMobile) {
          href = `fb-messenger://share/?link=${currentUrl}&app_id=${facebookAppId}`
          messengerAnchor.attr('href', href)

          messengerAnchor.one('click', (event) => {
               var noMessengerRedirect = setTimeout(() => {   
                    window.open(fallbackURL)
               }, 500)
               $(window).on('blur', () => clearTimeout(noMessengerRedirect))
          })
     } else {
          href = fallbackURL
          messengerAnchor.attr('href', href)
     }
     messengerAnchor.attr('data-ea', 'share: messenger')
          .attr('data-ec', 'social')
          .attr('data-linkurl', href)
}
/*   OnlineOpinion v5.7.3 Released: 6/4/2013. Compiled 06/04/2013 08:37:25 AM -0500 Branch: master 122a760d8e979af7090004b5d3cb086d5b0896be Components: Full The following code is Copyright 1998-2013 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab    */var OOo={__detectBrowser:function(a){var b=Object.prototype.toString.call(window.opera)==='[object Opera]',c={IE:!!window.attachEvent&&!b,Opera:b,WebKit:a.indexOf('AppleWebKit/')>-1,Chrome:a.indexOf('Chrome')>-1,Gecko:a.indexOf('Gecko')>-1&&a.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(a),PalmPre:a.indexOf('Pre/')>-1,BlackBerry:a.indexOf('BlackBerry')>-1,Fennec:a.indexOf('Fennec')>-1,IEMobile:a.indexOf('IEMobile')>-1,OperaMobile:a.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:a.search(/[ ](Kindle|Silk)/)>-1,ua:a},d=false;c.isMobile=(c.MobileSafari||c.PalmPre||c.BlackBerry||c.Fennec||c.IEMobile||c.OperaMobile||c.Kindle);c.isMobileNonIOS=(c.isMobile&&(!c.MobileSafari||a.search('Android')!==-1));return c}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};var OnlineOpinion=OnlineOpinion||OOo;(function(){function k(a){return document.getElementById(a)}function l(a,b){var c;for(c in b){if(b.hasOwnProperty(c)){a[c]=b[c]}}return a}function m(a,b,c,d){if(a.addEventListener){a.addEventListener(b,c,d)}else if(a.attachEvent){a.attachEvent('on'+b,c)}}function r(a,b,c,d){if(a.removeEventListener){a.removeEventListener(b,c,d)}else if(a.detachEvent){a.detachEvent('on'+b,c)}}function o(a){var b=[],c;for(c in a){if(a.hasOwnProperty(c)){b.push(c+'='+(encodeURIComponent(a[c])||''))}}return b.join('&')}function t(a){var b=o(a.metrics),c=a.tealeafId+'|'+a.clickTalePID+'/'+a.clickTaleUID+'/'+a.ClickTaleGetSID;b+='&custom_var='+OOo.createLegacyVars(a.legacyVariables,c);if(a.metrics.type==='OnPage'){b+='|iframe'}if(a.asm){b+='&asm=2'}b+="&_"+'rev=2';if(a.customVariables){b+='&customVars='+encodeURIComponent(OOo.serialize(a.customVariables))}return b}function n(a,b){var c=document,d=c.createElement('form'),e=c.createElement('input'),f=a.referrerRewrite;a.metrics.referer=location.href;if(f){a.metrics.referer=OOo.referrerRewrite(f)}d.style.display='none';d.method='post';d.target=b||'OnlineOpinion';d.action=a.onPageCard?'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r='+location.href:'https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(a.commentCardUrl){d.action=a.commentCardUrl;if(a.onPageCard){d.action+='?r='+location.href}}e.name='params';e.value=t(a);d.appendChild(e);c.body.appendChild(d);return d}function s(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.7.3'}}function u(a){var b='';if(a&&a.search('://')>-1){var c=a.split('/');for(i=3;i<c.length;i++){b+="/";b+=c[i]}}return b}function p(a,b){a=a||{};if(typeof a==='string'){return b+'|'+a}return a.override?a.vars:b+(a.vars?'|'+a.vars:'')}function q(a,b){if(!b){b=location}if(typeof a==="string")return a;return a.searchPattern?b.href.replace(a.searchPattern,a.replacePattern):a.replacePattern}var w=(function(){var a=document.body,b,c,d,e,f;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('div');if(!b.getBoundingClientRect){return null}b.innerHTML='x';b.style.cssText='position:fixed;top:100px;';a.appendChild(b);c=a.style.height;d=a.scrollTop;a.style.height='3000px';a.scrollTop=500;e=b.getBoundingClientRect().top;a.style.height=c;f=(e===100);a.removeChild(b);a.scrollTop=d;return f}return null}()),x=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}var a=document.body,b,c;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('iframe');c=false;b.setAttribute('name','oo_test');b.style.display='none';a.appendChild(b);c=!!!document.getElementsByName('oo_test')[0];a.removeChild(b);return c}else{return null}}());function v(){OOo.$('oo_container').style.display='none'}function A(){var a=OOo.$('oo_invitation_prompt');if(a){var b=OOo.$('oo_container');this.showPrompt(b);return}var c=window.XMLHttpRequest?new XMLHttpRequest():new window.ActiveXObject("Microsoft.XMLHTTP"),d=this,e=document.createElement('link'),f;c.onreadystatechange=function(){if(c.readyState!==4){return}d.showPrompt(c.responseText)};c.open("GET",this.options.pathToAssets+this.options.promptMarkup,true);c.send(null)}function y(a,b){var c=document,d=typeof a==='string'?c.createElement('div'):a,e=c.createElement('div'),f,g,h=this.options,j;e.id='oo_invitation_overlay';d.id='oo_container';d.style.visibility='hidden';if(typeof a==='string'){d.innerHTML=a;c.body.appendChild(d)}d.appendChild(e);j=OOo.$('oo_launch_prompt');if(h.companyLogo){f=new Image();f.src=h.companyLogo;OOo.$('oo_company_logo').appendChild(f)}OOo.addEventListener(j,'click',b.bind(this),false);if(h.clickCallbacks){if(typeof h.clickCallbacks.yes==='function'){OOo.addEventListener(j,'click',function(){h.clickCallbacks.yes()},false)}if(typeof h.clickCallbacks.no==='function'){OOo.addEventListener(OOo.$('oo_no_thanks'),'click',function(){h.clickCallbacks.no()},false)}}if(h.neverShowAgainButton){g=OOo.$('oo_never_show');g.style.visibility='visible';OOo.addEventListener(g,'click',this.killPrompt.bind(this),false)}if(OOo.Browser.IE&&!window.XMLHttpRequest){e.style.position='absolute';e.style.width=Math.max(document.documentElement.clientWidth,document.body.offsetWidth)+'px';e.style.height=Math.max(document.documentElement.clientHeight,document.body.offsetHeight)+'px';d.style.position='absolute'}d.style.visibility='visible';d.style.display='block';e.className='no_loading'}l(OOo,{extend:l,toQueryString:o,addEventListener:m,$:k,appendOOForm:n,removeEventListener:r,createMetrics:s,truncateMetric:u,createLegacyVars:p,POSITION_FIXED_SUPPORTED:w,DYNAMIC_FRAME_NAME_IS_BUGGY:x,getFormParams:t,referrerRewrite:q,hidePrompt:v,getPrompt:A,showPrompt:y})}());(function(){function f(a){if(!a){return null}switch(typeof a){case'number':case'boolean':case'function':return a;case'string':return'\''+a+'\'';case'object':var b,c,d,e;if(a.constructor===Array||typeof a.callee!=='undefined'){b='[';d=a.length;for(c=0;c<d-1;c+=1){b+=f(a[c])+','}b+=f(a[c])+']'}else{b='{';for(e in a){if(a.hasOwnProperty(e)){b+=e+':'+f(a[e])+','}}b=b.replace(/\,$/,'')+'}'}return b;default:return null}}OOo.extend(OOo,{serialize:f})}());(function(){function e(a,b,c){var d;if(a.search(b[0])!==-1){OOo.createCookie(c,0);return false}else if(OOo.readCookie(c)){d=parseInt(OOo.readCookie(c),10);if((a.search(b[d+1])!==-1)&&(d+1!==b.length-1)){OOo.createCookie(c,d+1);return false}else if(a.search(b[d])!==-1){return false}else if(d+1===b.length-1&&a.search(b.pop())!==-1){OOo.eraseCookie(c);return true}else{OOo.eraseCookie(c);return false}}else{return false}}OOo.extend(OOo,{checkTunnel:e})}());(function(){function s(a){var b="",c;for(c=7;c>=0;c-=1){b+='0123456789abcdef'.charAt((a>>(c*4))&0x0F)}return b}function u(a){var b=((a.length+8)>>6)+1,c=new Array(b*16),d;for(d=0;d<b*16;d+=1){c[d]=0}for(d=0;d<a.length;d+=1){c[d>>2]|=a.charCodeAt(d)<<(24-(d%4)*8)}c[d>>2]|=0x80<<(24-(d%4)*8);c[b*16-1]=a.length*8;return c}function p(a,b){var c=(a&0xFFFF)+(b&0xFFFF),d=(a>>16)+(b>>16)+(c>>16);return(d<<16)|(c&0xFFFF)}function q(a,b){return(a<<b)|(a>>>(32-b))}function w(a,b,c,d){if(a<20){return(b&c)|((~b)&d)}if(a<40){return b^c^d}if(a<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function x(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514}function v(a){var b=u(a),c=new Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,j,k,l,m,r,o,t,n;for(t=0;t<b.length;t+=16){j=d;k=e;l=f;m=g;r=h;for(n=0;n<80;n+=1){if(n<16){c[n]=b[t+n]}else{c[n]=q(c[n-3]^c[n-8]^c[n-14]^c[n-16],1)}o=p(p(q(d,5),w(n,e,f,g)),p(p(h,c[n]),x(n)));h=g;g=f;f=q(e,30);e=d;d=o}d=p(d,j);e=p(e,k);f=p(f,l);g=p(g,m);h=p(h,r)}return s(d)+s(e)+s(f)+s(g)+s(h)}OOo.extend(OOo,{sha1:v})}());(function(){function h(a,b){if(!b){b=location}var c=a.cookieName||'oo_abandon',d=OOo.readCookie(c),e=a.startPage,f=a.endPage,g=a.middle;if(!d){if(b.pathname.indexOf(e)!==-1){OOo.createCookie(c)}return false}else if(b.pathname.indexOf(f)!==-1){OOo.eraseCookie(c);return false}else if(b.pathname.search(g)!==-1){return false}else{OOo.eraseCookie(c);return true}}OOo.extend(OOo,{checkAbandonment:h})}());(function(){function d(a){var b,c;for(b=a.length-1;b>=0;b-=1){if(a[b].read){c=OOo.readCookie(a[b].name);if(!!c&&c===a[b].value){return true}else if(typeof a[b].value==='undefined'&&!!OOo.readCookie(a[b].name)){return true}}}return false}function e(a){var b;for(b=a.length-1;b>=0;b-=1){if(a[b].set){OOo.createCookie(a[b].name,a[b].value,a[b].expiration)}}}OOo.extend(OOo,{checkThirdPartyCookies:d,setThirdPartyCookies:e})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}var e=Array.prototype.slice;function f(a,b){var c=a.length,d=b.length;while(d){d-=1;a[c+d]=b[d]}return a}function g(a,b){a=e.call(a,0);return f(a,b)}function h(b){if(arguments.length<2&&typeof b==="undefined"){return this}var c=this,d=e.call(arguments,1);return function(){var a=g(d,arguments);return c.apply(b,a)}}return{bind:h}}()));(function(){function f(a){if(!a){a=location}var b;if(a.host.search(/\.[a-z]+/)!==-1){b=a.host.split('.').reverse();if(b.length>3){return a.host}b='.'+b[1]+'.'+b[0]}else{b=a.host}return b}function g(a,b,c){var d='',e='';if(c){d=new Date();d.setTime(d.getTime()+(c*1000));e="; expires="+d.toGMTString()}if(location.host!==f()){document.cookie=a+"="+b+e+"; path=/; domain="+f()+";"}else{document.cookie=a+"="+b+e+"; path=/;"}}function h(a){var b=a+"=",c=document.cookie.split(';'),d,e;for(e=0;e<c.length;e+=1){d=c[e];while(d.charAt(0)===' '){d=d.substring(1,d.length)}if(d.indexOf(b)===0){return d.substring(b.length,d.length)}}return null}function j(a){g(a,"",-1)}OOo.extend(OOo,{getCookieDomain:f,createCookie:g,readCookie:h,eraseCookie:j})}());OOo.Ocode=function(a){var b=OOo.Browser,c,d;if(a.disableMobile&&b.isMobile){return}if(a.disableNoniOS&&b.isMobileNonIOS){return}OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,a);c=this.options;c.metrics=OOo.createMetrics();this.frameName=c.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion';if(c.cookie&&OOo.Ocode.matchUrl(c.cookie,location)){return}if(c.thirdPartyCookies&&OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}if(c.abandonment&&!OOo.checkAbandonment(c.abandonment)){return}if(c.tunnel&&!OOo.checkTunnel(location.pathname,c.tunnel.path,c.tunnel.cookieName)){return}if(c.events&&c.events.onSingleClick){this.singProbability=Math.random()<1-c.events.onSingleClick/100}c.tealeafId=OOo.readCookie(c.tealeafCookieName)||OOo.readCookie(c.sessionCookieName);if(c.events){this.setupEvents();if(c.events.disableLinks||c.events.disableFormElements){this.setupDisableElements()}}if(c.floating){this.floating()}else if(c.bar){this.bar()}else if(c.tab){this.tab()}};OOo.Ocode.prototype={show:function(a,b){if(a==='Tab'&&b&&b.preventDefault){b.preventDefault()}if(this.onPageCardVisible){return}var c=this.options,d;if(c.events&&c.events.prompt){if(c.cookie)OOo.eraseCookie(c.cookie.name||'oo_r');OOo.hidePrompt()}if(this.interruptShow){return}if(!this.floatingLogo&&c.cookie&&OOo.Ocode.matchUrl(c.cookie)){return}if(!c.floating&&c.events&&this.singProbability){return}if(c.events&&c.events.onSingleClick){this.singProbability=true}if(c.cookie){OOo.Ocode.tagUrl(c.cookie)}if(c.thirdPartyCookies){if(OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}OOo.setThirdPartyCookies(c.thirdPartyCookies)}if(this.floatingLogo){this.floatingLogo.children[0].blur()}if(this.floatingLogo&&c.disappearOnClick){this.floatingLogo.style.display='none'}if(a){c.metrics.trigger=a}if(c.clickTalePID&&typeof window.ClickTale==='function'){c.clickTaleUID=window.ClickTaleGetUID();c.clickTaleSID=window.ClickTaleGetSID()}if(c.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}d=c.floating||c.tab||c.bar;if(d&&typeof d.onClickCallback==='function'){d.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(a,b){if(!b){b=location}var c=a.name||'oo_r',d=a.type==='page'?b.href:b.hostname,e=OOo.readCookie(c)||'';if(OOo.Ocode.matchUrl(a,b)){return}OOo.createCookie(c,e+OOo.sha1(d),a.expiration)},matchUrl:function(a,b){if(!b){b=location}var c=OOo.readCookie(a.name||'oo_r'),d;if(!c){return false}d=a.type==='page'?b.href:b.hostname;return c.search(OOo.sha1(d))!==-1}});(function(){var g=0;function h(){var a=this.options,b=a.newWindowSize||[545,325],c=[parseInt((a.metrics.height-b[1])/2,10),parseInt((a.metrics.width-b[0])/2,10)],d,e,f='location=no,status=no,scrollbars=1,width='+b[0]+',height='+b[1]+',top='+c[0]+',left='+c[1];ie7=OOo.Browser.IE&&navigator.userAgent.search('MSIE 7')!==-1,windowName='OnlineOpinion';if(a.newWindow)windowName=windowName+(g++);a.metrics.time2=(new Date()).getTime();a.metrics.type='Popup';d=OOo.appendOOForm(a,windowName);if(OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1){d.submit()}else{e=window.open(ie7?a.commentCardUrl||'https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+d.children[0].value:'',windowName,f);if(e&&!ie7){d.submit()}}}OOo.extend(OOo.Ocode.prototype,{launchOOPopup:h})}());(function(){function k(){var a=this.options.events,b=[false,false],c=['onExit','onEntry'],d=OOo.Browser.Opera?'unload':'beforeunload',e,f,g,h,j;if(a.prompt){OOo.extend(this.options,{promptMarkup:a.prompt.promptMarkup||'oo_event_prompt.html',neverShowAgainButton:false,pathToAssets:a.prompt.pathToAssets})}for(g=c.length-1;g>=0;g-=1){e=c[g];if(a[e]instanceof Array){h=a[e];j=h.length;while(j&&!b[g]){j-=1;if(window.location.href.search(h[j].url)!==-1&&Math.random()>=1-h[j].p/100){b[g]=true}}}else if(a[e]&&Math.random()>=1-a[e]/100){b[g]=true}}if(b[0]){OOo.addEventListener(window,d,this.show.bind(this,'onExit'),false)}if(b[1]){if(a.delayEntry){window.setTimeout(function(){if(a.prompt)this.getPrompt();else this.show()}.bind(this,'onEntry'),a.delayEntry*1000)}else{if(a.prompt)this.getPrompt();else this.show('onEntry')}}}function l(a){var b=a||window.event,c=a.target||a.srcElement,d=this.options.events,e=c.parentNode,f=5,g=0;while(e&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&g!==f){if(e.nodeName==='A'){c=e}e=e.parentNode;g+=1}if(d.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}if(d.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(d.disableLinks)!==-1){this.interruptShow=true}}function m(a){this.interruptShow=true}function r(){OOo.addEventListener(document.body,'mousedown',l.bind(this));if(!this.options.events.disableFormElements){return}var a=document.getElementsByTagName('form'),b;for(b=a.length-1;b>=0;b-=1){OOo.addEventListener(a[b],'submit',m.bind(this))}}OOo.extend(OOo.Ocode.prototype,{setupEvents:k,setupDisableElements:r,getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){if(this.options.cookie){OOo.Ocode.tagUrl(this.options.cookie)}OOo.showPrompt.call(this,a,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var d=document,e=this.floatingLogo=document.createElement('div'),f=d.createElement('div'),g=d.createElement('div'),h=d.createElement('div'),j=d.createElement('span'),k=this.options.floating,l=OOo.$(k.contentId),m='10px',r=k.id,o=d.createElement('span'),t,n,s,u,p,q,w,x;function v(a){return a.offsetLeft+a.offsetWidth}function A(a){u.style.left=v(l)+'px'}o.innerHTML="Screen reader users: Please switch to forms mode for this link.";o.className="screen_reader";if(r){e.id=r}e.className='oo_feedback_float';g.className='oo_transparent';f.className='olUp';h.className='olOver';f.tabIndex=0;f.onkeyup=function(a){t=a||window.event;if(t.keyCode!==13){return}this.show()}.bind(this);f.innerHTML=k.caption||'Feedback';e.appendChild(o);e.appendChild(f);j.innerHTML=k.hoverCaption||'Click here to<br>rate this page';h.appendChild(j);e.appendChild(h);e.appendChild(g);function y(a){var b=d.documentElement.scrollTop||d.body.scrollTop,c=d.documentElement.clientHeight||document.body.clientHeight;e.style.top=(b+c-(w||0)-10)+'px'}if(OOo.Browser.MobileSafari){if(OOo.Browser.ua.search('OS 4')!==-1){n=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-60)+'px';x=function(a){s=window.pageYOffset-(n-window.innerHeight);e.style.webkitTransform='translateY('+s+'px)'};OOo.addEventListener(window,'scroll',x,false);setTimeout(x,100)}}else if(!OOo.POSITION_FIXED_SUPPORTED){e.style.position='absolute';e.style.bottom='';OOo.addEventListener(window,'scroll',y,false);OOo.addEventListener(window,'resize',y,false);if(d.compatMode==="BackCompat"){e.style.background="white"}}if(k.position&&k.position.search(/Content/)&&l){u=this.spacer=d.createElement('div');p=OOo.Browser.WebKit?d.body:d.documentElement;u.id='oo_feedback_fl_spacer';u.style.left=v(l)+'px';d.body.appendChild(u);switch(k.position){case'rightOfContent':q=function(a){e.style.left=(v(l)-p.scrollLeft)+'px';if(!OOo.POSITION_FIXED_SUPPORTED){q=null}};break;case'fixedPreserveContent':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth,c=OOo.POSITION_FIXED_SUPPORTED?p.scrollLeft:0;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left=(v(l)-c)+'px'}else{e.style.left='';e.style.right=m}};break;case'fixedContentMax':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left='';e.style.right=m;if(!OOo.POSITION_FIXED_SUPPORTED&&a&&a.type==='scroll'){e.style.left=(d.body.clientWidth+d.body.scrollLeft-105)+'px'}}else{e.style.left=(v(l)-p.scrollLeft)+'px';e.style.right=''}};break}window.setTimeout(q,0);OOo.addEventListener(window,'scroll',q,false);OOo.addEventListener(window,'resize',q,false);OOo.addEventListener(window,'resize',A,false)}else{e.style.right=m}OOo.addEventListener(e,'click',this.show.bind(this,'Floating'),false);OOo.addEventListener(e,'touchend',this.show.bind(this,'Floating'),false);d.body.appendChild(e);if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){g.style.height=e.clientHeight+'px';w=e.clientHeight;setTimeout(y,100)}},removeFloatingLogo:function(){document.body.removeChild(this.floatingLogo);if(this.spacer){document.body.removeChild(this.spacer)}}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var d=document,e=this.floatingLogo=d.createElement('div'),f=d.createElement('span'),g,h,j,k=d.documentElement.scrollTop||d.body.scrollTop,l=d.createElement('div');function m(a){var b=curtop=0;if(a.offsetParent){do{b+=a.offsetLeft;curtop+=a.offsetTop}while(a=a.offsetParent);return[b,curtop]}}function r(a){var b=document.activeElement,c;if(!b)return;c=m(b);if(!c)return;if(c[1]+b.clientHeight>(window.innerHeight||document.body.clientHeight)+(window.pageYOffset||document.body.scrollTop)-e.clientHeight)window.scrollBy(0,b.clientHeight+20)}l.innerHTML='Link opens comment card';l.className='screen_reader';e.appendChild(l);this.reflowBar=OOo.K;e.id='oo_bar';f.innerHTML=this.options.bar.caption||'Feedback';e.appendChild(f);e.tabIndex=0;e.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);OOo.addEventListener(e,'click',this.show.bind(this,'Bar'));document.body.className+=document.body.className<1?'oo_bar':' oo_bar';document.body.appendChild(e);var o=/MSIE ([\d\.]+);/.exec(window.navigator.userAgent);if(OOo.Browser.IE&&o&&+o[1]<8){if(d.compatMode==='CSS1Compat'){g=function(a){if(a&&a.type==='resize'){setTimeout(g,50)}e.style.top=(d.documentElement.scrollTop+document.documentElement.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth))+'px'}}else{g=function(a){e.style.top=(d.body.scrollTop+document.body.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth)-22)+'px'}}e.style.position='absolute';OOo.addEventListener(window,'scroll',g,false);OOo.addEventListener(window,'resize',g,false);this.reflowBar=function(){e.style.display='none';g();e.style.display='block'};g()}else if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){h=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-22)+'px';g=function(a){j=window.pageYOffset-(h-window.innerHeight);e.style.webkitTransform='translateY('+j+'px)'};OOo.addEventListener(window,'scroll',g,false);setTimeout(g,100)}OOo.addEventListener(document.body,'keyup',r,false)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var e=document,f=this.floatingLogo=e.createElement('div'),g=e.createElement('div'),h=e.createElement('div'),j=e.createElement('span'),k=this.options.tab;if(k.wcagBasePath){h=e.createElement('a');h.setAttribute('href','#');j=e.createElement('img');j.className='logo';j.setAttribute('alt',"Feedback");j.setAttribute('src',k.wcagBasePath+((OOo.Browser.ua.search('IE 6')!==-1)?"oo_tabie6.png":"oo_tab.png"))}function l(a){var b=e.documentElement.scrollTop||e.body.scrollTop,c=e.documentElement.scrollLeft||e.body.scrollLeft,d=e.documentElement.clientHeight||document.body.clientHeight;f.style.top=(b+(d/2-f.clientHeight/2))+'px';if((!k.position||k.position==='right'))f.style.right=(-1*c+2)+'px'}function m(a){f.style.top=pageYOffset+(innerHeight/2-f.clientHeight/2)+'px';f.style.right=document.documentElement.clientWidth-window.innerWidth-window.pageXOffset-15+'px'}f.id='oo_tab';f.className='oo_tab_'+(k.position||'right');if(k.wcagBasePath){f.className+=' wcag'}if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){f.style.position='absolute';if((!k.position||k.position==='right')&&OOo.Browser.IE){f.className+=' oo_tab_ie_right';if(OOo.Browser.ua.search('IE 6')!==-1||OOo.Browser.ua.search('IE 7')!==-1){f.className+='  oo_tab_ie67_right'}if(OOo.Browser.ua.search('IE 6')===-1){OOo.addEventListener(window,'scroll',l,false);OOo.addEventListener(window,'resize',l,false)}}}if(typeof k.tabIndex==='number'){f.tabIndex=k.tabIndex}else if(typeof k.tabIndex==='undefined'){f.tabIndex=0}f.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);h.appendChild(j);f.appendChild(h);if(g){g.className='screen_reader';g.innerHTML='Activate to launch comment card';f.appendChild(g)}OOo.addEventListener(f,'click',this.show.bind(this,'Tab'),false);e.body.appendChild(f);if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){f.style.position='absolute';OOo.addEventListener(window,'scroll',m,false);setTimeout(m,100)}}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var e=document,f=OOo.Cache.overlay||e.createElement('div'),g=this.wrapper=e.createElement('div'),h=e.createElement('div'),j=e.createElement('div'),k=e.createElement('span'),l=this.frameName,m=e.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+l+'">':'iframe'),r=e.createDocumentFragment(),o=this.options,t=o.onPageCard,n='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',s,u,p,q=false,w=this,x,v,A,y,B,E,C,D=e.createElement('span');function z(a){if(a&&a.preventDefault){a.preventDefault()}document.body.focus();m.tabIndex=-1;m.title="empty";m['aria-hidden']='true';f.style.display='none';f.className='';e.body.removeChild(g);if(window.postMessage){OOo.removeEventListener(window,'message',B)}else{window.clearInterval(u)}q=false;w.onPageCardVisible=false;return false}B=OOo.Ocode.postMessageHandler(function(a){var b=parseInt(a,10),c,d;if(b>0){if(q){return}q=true;c=window.innerHeight||e.documentElement.clientHeight||e.body.clientHeight;d=b;C=g.offsetTop;if(d+C>c){d=c-40-C}m.style.width='555px';j.style.width='555px';m.style.height=d+'px';g.style.visibility='visible';if(k.clientHeight<20){k.style.height=g.offsetHeight+'px'}f.className="no_loading";w.onPageCardVisible=true;s&&e.body.removeChild(s)}else if(a==='submitted'){z()}if(OOo.Browser.IE&&e.compatMode==="BackCompat"){window.scrollTo(0,0)}},w.options.commentCardUrl);o.metrics.type='OnPage';OOo.Cache.overlay=f;f.id='oo_overlay';f.style.display='block';f.className='';j.className='iwrapper';g.className='oo_cc_wrapper';g.setAttribute('role','alert');g.setAttribute('aria-describedby','comment_card_description');D.className='screen_reader';D.id='comment_card_description';D.innerHTML='Please leave your feedback in the comment card you just activated';g.appendChild(D);h.className='oo_cc_close';h.innerHTML='<span class="screen_reader">Link closes comment card</span>X';h.title='Click to close comment card';g.style.visibility='hidden';h.tabIndex=0;h.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}z()};if(OOo.Browser.IE){m.frameBorder='0';if(!window.XMLHttpRequest||e.compatMode==="BackCompat"){E=Math.max(e.documentElement.clientWidth,e.body.offsetWidth);f.style.position='absolute';f.style.width=e.compatMode==="BackCompat"?(E-21)+'px':E+'px';f.style.height=Math.max(e.documentElement.clientHeight,e.body.offsetHeight)+'px';g.style.position='absolute';OOo.addEventListener(window,'scroll',function(){f.style.top=(e.body.scrollTop+document.body.clientHeight-f.clientHeight)+'px';g.style.top=(e.body.scrollTop+C+25)+'px'})}}OOo.addEventListener(h,'click',z);if(t.closeWithOverlay&&!OOo.Browser.isMobile){g.appendChild(k);k.onclick=z;f.onclick=z}m.src=' ';m.name=l;m.title='Comment Card';j.appendChild(h);j.appendChild(m);g.appendChild(j);r.appendChild(g);r.appendChild(f);e.body.appendChild(r);if(window.postMessage){OOo.addEventListener(window,"message",B)}else{u=setInterval(B,500)}o.metrics.time2=(new Date()).getTime();s=OOo.appendOOForm(o,l);s.submit()}});OOo.extend(OOo.Ocode,{postMessageHandler:function(d,e,f){return function(a){var b='https://secure.opinionlab.com',c;if(!f){f=location}if((a&&!(a.origin===b||a.origin.indexOf(e)!==0))||(!a&&f.hash.search('OL=')===-1)){return false}c=a?a.data:f.hash.split('=').pop();if(!a&&location.hash){location.hash=''}d(c);return c}}});OOo.Invitation=function(a){if(OOo.Browser.isMobile){return}this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitorWindow:'oo_inv_monitor.html',beforePrompt:OOo.K};this.popupShown=false;OOo.extend(this.options,a);var b=this.options,c=parseInt(OOo.readCookie(b.pagesHitCookie),10)||0;OOo.Invitation.friendlyDomains=b.friendlyDomains||null;var d={weight:Number(OOo.readCookie('oo_OODynamicRewrite_weight')),searchPattern:OOo.readCookie('oo_OODynamicRewrite_searchPattern'),replacePattern:OOo.readCookie('oo_OODynamicRewrite_replacePattern')};OOo.eraseCookie('oo_OODynamicRewrite_weight');OOo.eraseCookie('oo_OODynamicRewrite_searchPattern');OOo.eraseCookie('oo_OODynamicRewrite_replacePattern');if(!window.OOoDynamicRewrite||window.OOoDynamicRewrite.weight<d.weight){window.OOoDynamicRewrite=d}if(window.OOoDynamicRewrite&&('number'===typeof window.OOoDynamicRewrite.weight)&&!isNaN(window.OOoDynamicRewrite.weight)){OOo.createCookie('oo_OODynamicRewrite_weight',window.OOoDynamicRewrite.weight);if(window.OOoDynamicRewrite.searchPattern){OOo.createCookie('oo_OODynamicRewrite_searchPattern',window.OOoDynamicRewrite.searchPattern)}if(window.OOoDynamicRewrite.replacePattern){OOo.createCookie('oo_OODynamicRewrite_replacePattern',window.OOoDynamicRewrite.replacePattern)}}if(location.search.search('evs')!==-1||OOo.readCookie('oo_evs_friendly')==='yes'){OOo.eraseCookie('oo_evs_friendly');b.loadPopupInBackground=true;this.launchPopup();OOo.createCookie(b.repromptCookie,1,b.repromptTime===-1?0:b.repromptTime)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(b.area&&location.href.search(b.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(b.goal&&location.href.search(b.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(OOo.readCookie(b.repromptCookie)){return}if(b.thirdPartyCookies&&OOo.checkThirdPartyCookies(b.thirdPartyCookies)){return}if(!OOo.readCookie(b.percentageCookie)){OOo.createCookie(b.percentageCookie,(Math.random()>1-(b.responseRate/100))?"1":"0")}if(typeof b.promptTrigger!=='undefined'){if(b.promptTrigger instanceof RegExp){if(!window.location.href.match(b.promptTrigger)){return}}else if(b.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,b.promptTrigger,b.tunnelCookie)){return}}}c+=1;OOo.createCookie(b.pagesHitCookie,c);if(b.pagesHit&&c<b.pagesHit){return}OOo.eraseCookie(b.tunnelCookie);if(OOo.readCookie(b.percentageCookie)==='1'){window.setTimeout(function(){OOo.createCookie(b.repromptCookie,1,b.repromptTime);this.options.beforePrompt();this.getPrompt()}.bind(this),b.promptDelay*1000)}};OOo.Invitation.notifyFriendlyLocationChange=function(a){if(window.oo_inv_monitor){OOo.createCookie('oo_evs_friendly','yes')}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){OOo.showPrompt.call(this,a,this.launchPopup)},launchPopup:function(){if(this.popupShown){return}this.popupShown=true;var b=this.options,c=window.location.href,d=b.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':b.pathToAssets+b.monitorWindow+'?'+(new Date()).getTime()+'&',e,f=[],g=b.asm?[555,500]:[400,335],h,j=OOo.createMetrics(),k=OOo.readCookie(b.tealeafCookieName),l;if(b.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){k+='|'+[b.clickTalePID,window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}g=b.newWindowSize||g;l='location=no,status=no,width='+g[0]+',height='+g[1];if(b.referrerRewrite){j.referer=OOo.referrerRewrite(b.referrerRewrite)}if(b.truncatePrevCurrentMetrics){j.prev=OOo.truncateMetric(j.prev);j.currentURL=OOo.truncateMetric(j.currentURL)}if(b.disablePrevCurrentMetrics){j.prev='';j.currentURL=''}if(b.thirdPartyCookies){OOo.setThirdPartyCookies(b.thirdPartyCookies)}e=OOo.toQueryString(j)+'&type=Invitation';if(b.customVariables){e+='&customVars='+encodeURIComponent(OOo.serialize(b.customVariables))}e+='&custom_var='+OOo.createLegacyVars(b.legacyVariables,k);if(b.asm){e+='&asm=2';l+=',scrollbars=1'}d+=e;if(d.match(/\?/g).length===2)d=d.replace(/\?([^?]*)$/,'&$1');this.popup=h=window.open(d,'OnlineOpinionInvitation',l);if(!b.loadPopupInBackground&&OOo.$('oo_container')){OOo.hidePrompt()}if(b.popupType==='popunder'){if(!OOo.Browser.Chrome){h.blur();window.focus()}else{if(!b.loadPopupInBackground){window.alert(b.chromeMainWinPrompt||'Please fill out the form behind this window when you are finished.')}if(b.chromeSurveyPrompt){setTimeout(function(a){h.postMessage(b.chromeSurveyPrompt,"*")},500)}}}else if(window.oo_inv_monitor){if(!OOo.Browser.Chrome){window.blur();h.focus()}else{h.alert(b.chromeSurveyPrompt||'Please fill out the form');h.focused=true}}},killPrompt:function(){if(this.options.clickCallbacks&&typeof this.options.clickCallbacks.no==='function'){this.options.clickCallbacks.no()}OOo.createCookie(this.options.repromptCookie,1,157680000);OOo.hidePrompt()}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(a){location.href=a}});
/* OnlineOpinion v5.4.12 */
/* Released: 1/20/2012 */
/* Components: Full */
/* The following code is Copyright 1998-2012 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com */

/* Inline configuration */
  var oo_inline = new OOo.Ocode({
//	, onPageCard: {
//		closeWithOverlay: {}
//	  }
//	, customVariables: {
//		  Name1: 'value1'
//		, Name2: 'value2'
//		, Name3: 'value3'
//	  }
  });

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=755069641341129";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function openShareInNewWindow(el){
	window.open(el.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
}

$(window).on('load',function(){
  setTimeout(function(){ 
    $('.addthis_button_email svg.at-icon-email').removeAttr('alt');
    $('.addthis_button_email svg.at-icon-email').attr('aria-label','email');
  }, 500);
});
$(window).on('load', function () {
    setTimeout(function () {
        $('.email-icon svg.at-icon-email').removeAttr('alt');
        $('.email-icon svg.at-icon-email').attr('aria-label', 'email');
    }, 500);
    loadMessenger()
});

function loadMessenger() {
     let href,
          isMobile = false,
          facebookAppId = '2805213253067005',
          currentUrl = encodeURIComponent(window.location.href),
          messengerAnchor = $('[data-messenger]')
     let fallbackURL = `https://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${currentUrl}&redirect_uri=${currentUrl}`

     if (navigator) {
          if (/android/i.test(window.userAgent)) {
               isMobile = true
               fallbackURL =
                    'https://play.google.com/store/apps/details?id=com.facebook.orca'
          } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
               isMobile = true
               fallbackURL = 'https://apps.apple.com/us/app/messenger/id454638411'
          }
     }

     if (isMobile) {
          href = `fb-messenger://share/?link=${currentUrl}&app_id=${facebookAppId}`
          messengerAnchor.attr('href', href)

          messengerAnchor.one('click', () => {
               var noMessengerRedirect = setTimeout(() => {   
                    window.open(fallbackURL)
               }, 500)
               $(window).on('blur', () => clearTimeout(noMessengerRedirect))
          })
     } else {
          href = fallbackURL
          messengerAnchor.attr('href', href)
     }
     messengerAnchor.attr('data-ea', 'share: messenger')
          .attr('data-ec', 'social')
          .attr('data-linkurl', href.gtmString())
}
/*   OnlineOpinion v5.7.3 Released: 6/4/2013. Compiled 06/04/2013 08:37:25 AM -0500 Branch: master 122a760d8e979af7090004b5d3cb086d5b0896be Components: Full The following code is Copyright 1998-2013 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab    */var OOo={__detectBrowser:function(a){var b=Object.prototype.toString.call(window.opera)==='[object Opera]',c={IE:!!window.attachEvent&&!b,Opera:b,WebKit:a.indexOf('AppleWebKit/')>-1,Chrome:a.indexOf('Chrome')>-1,Gecko:a.indexOf('Gecko')>-1&&a.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(a),PalmPre:a.indexOf('Pre/')>-1,BlackBerry:a.indexOf('BlackBerry')>-1,Fennec:a.indexOf('Fennec')>-1,IEMobile:a.indexOf('IEMobile')>-1,OperaMobile:a.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:a.search(/[ ](Kindle|Silk)/)>-1,ua:a},d=false;c.isMobile=(c.MobileSafari||c.PalmPre||c.BlackBerry||c.Fennec||c.IEMobile||c.OperaMobile||c.Kindle);c.isMobileNonIOS=(c.isMobile&&(!c.MobileSafari||a.search('Android')!==-1));return c}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};var OnlineOpinion=OnlineOpinion||OOo;(function(){function k(a){return document.getElementById(a)}function l(a,b){var c;for(c in b){if(b.hasOwnProperty(c)){a[c]=b[c]}}return a}function m(a,b,c,d){if(a.addEventListener){a.addEventListener(b,c,d)}else if(a.attachEvent){a.attachEvent('on'+b,c)}}function r(a,b,c,d){if(a.removeEventListener){a.removeEventListener(b,c,d)}else if(a.detachEvent){a.detachEvent('on'+b,c)}}function o(a){var b=[],c;for(c in a){if(a.hasOwnProperty(c)){b.push(c+'='+(encodeURIComponent(a[c])||''))}}return b.join('&')}function t(a){var b=o(a.metrics),c=a.tealeafId+'|'+a.clickTalePID+'/'+a.clickTaleUID+'/'+a.ClickTaleGetSID;b+='&custom_var='+OOo.createLegacyVars(a.legacyVariables,c);if(a.metrics.type==='OnPage'){b+='|iframe'}if(a.asm){b+='&asm=2'}b+="&_"+'rev=2';if(a.customVariables){b+='&customVars='+encodeURIComponent(OOo.serialize(a.customVariables))}return b}function n(a,b){var c=document,d=c.createElement('form'),e=c.createElement('input'),f=a.referrerRewrite;a.metrics.referer=location.href;if(f){a.metrics.referer=OOo.referrerRewrite(f)}d.style.display='none';d.method='post';d.target=b||'OnlineOpinion';d.action=a.onPageCard?'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r='+location.href:'https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(a.commentCardUrl){d.action=a.commentCardUrl;if(a.onPageCard){d.action+='?r='+location.href}}e.name='params';e.value=t(a);d.appendChild(e);c.body.appendChild(d);return d}function s(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.7.3'}}function u(a){var b='';if(a&&a.search('://')>-1){var c=a.split('/');for(i=3;i<c.length;i++){b+="/";b+=c[i]}}return b}function p(a,b){a=a||{};if(typeof a==='string'){return b+'|'+a}return a.override?a.vars:b+(a.vars?'|'+a.vars:'')}function q(a,b){if(!b){b=location}if(typeof a==="string")return a;return a.searchPattern?b.href.replace(a.searchPattern,a.replacePattern):a.replacePattern}var w=(function(){var a=document.body,b,c,d,e,f;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('div');if(!b.getBoundingClientRect){return null}b.innerHTML='x';b.style.cssText='position:fixed;top:100px;';a.appendChild(b);c=a.style.height;d=a.scrollTop;a.style.height='3000px';a.scrollTop=500;e=b.getBoundingClientRect().top;a.style.height=c;f=(e===100);a.removeChild(b);a.scrollTop=d;return f}return null}()),x=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}var a=document.body,b,c;if(document.createElement&&a&&a.appendChild&&a.removeChild){b=document.createElement('iframe');c=false;b.setAttribute('name','oo_test');b.style.display='none';a.appendChild(b);c=!!!document.getElementsByName('oo_test')[0];a.removeChild(b);return c}else{return null}}());function v(){OOo.$('oo_container').style.display='none'}function A(){var a=OOo.$('oo_invitation_prompt');if(a){var b=OOo.$('oo_container');this.showPrompt(b);return}var c=window.XMLHttpRequest?new XMLHttpRequest():new window.ActiveXObject("Microsoft.XMLHTTP"),d=this,e=document.createElement('link'),f;c.onreadystatechange=function(){if(c.readyState!==4){return}d.showPrompt(c.responseText)};c.open("GET",this.options.pathToAssets+this.options.promptMarkup,true);c.send(null)}function y(a,b){var c=document,d=typeof a==='string'?c.createElement('div'):a,e=c.createElement('div'),f,g,h=this.options,j;e.id='oo_invitation_overlay';d.id='oo_container';d.style.visibility='hidden';if(typeof a==='string'){d.innerHTML=a;c.body.appendChild(d)}d.appendChild(e);j=OOo.$('oo_launch_prompt');if(h.companyLogo){f=new Image();f.src=h.companyLogo;OOo.$('oo_company_logo').appendChild(f)}OOo.addEventListener(j,'click',b.bind(this),false);if(h.clickCallbacks){if(typeof h.clickCallbacks.yes==='function'){OOo.addEventListener(j,'click',function(){h.clickCallbacks.yes()},false)}if(typeof h.clickCallbacks.no==='function'){OOo.addEventListener(OOo.$('oo_no_thanks'),'click',function(){h.clickCallbacks.no()},false)}}if(h.neverShowAgainButton){g=OOo.$('oo_never_show');g.style.visibility='visible';OOo.addEventListener(g,'click',this.killPrompt.bind(this),false)}if(OOo.Browser.IE&&!window.XMLHttpRequest){e.style.position='absolute';e.style.width=Math.max(document.documentElement.clientWidth,document.body.offsetWidth)+'px';e.style.height=Math.max(document.documentElement.clientHeight,document.body.offsetHeight)+'px';d.style.position='absolute'}d.style.visibility='visible';d.style.display='block';e.className='no_loading'}l(OOo,{extend:l,toQueryString:o,addEventListener:m,$:k,appendOOForm:n,removeEventListener:r,createMetrics:s,truncateMetric:u,createLegacyVars:p,POSITION_FIXED_SUPPORTED:w,DYNAMIC_FRAME_NAME_IS_BUGGY:x,getFormParams:t,referrerRewrite:q,hidePrompt:v,getPrompt:A,showPrompt:y})}());(function(){function f(a){if(!a){return null}switch(typeof a){case'number':case'boolean':case'function':return a;case'string':return'\''+a+'\'';case'object':var b,c,d,e;if(a.constructor===Array||typeof a.callee!=='undefined'){b='[';d=a.length;for(c=0;c<d-1;c+=1){b+=f(a[c])+','}b+=f(a[c])+']'}else{b='{';for(e in a){if(a.hasOwnProperty(e)){b+=e+':'+f(a[e])+','}}b=b.replace(/\,$/,'')+'}'}return b;default:return null}}OOo.extend(OOo,{serialize:f})}());(function(){function e(a,b,c){var d;if(a.search(b[0])!==-1){OOo.createCookie(c,0);return false}else if(OOo.readCookie(c)){d=parseInt(OOo.readCookie(c),10);if((a.search(b[d+1])!==-1)&&(d+1!==b.length-1)){OOo.createCookie(c,d+1);return false}else if(a.search(b[d])!==-1){return false}else if(d+1===b.length-1&&a.search(b.pop())!==-1){OOo.eraseCookie(c);return true}else{OOo.eraseCookie(c);return false}}else{return false}}OOo.extend(OOo,{checkTunnel:e})}());(function(){function s(a){var b="",c;for(c=7;c>=0;c-=1){b+='0123456789abcdef'.charAt((a>>(c*4))&0x0F)}return b}function u(a){var b=((a.length+8)>>6)+1,c=new Array(b*16),d;for(d=0;d<b*16;d+=1){c[d]=0}for(d=0;d<a.length;d+=1){c[d>>2]|=a.charCodeAt(d)<<(24-(d%4)*8)}c[d>>2]|=0x80<<(24-(d%4)*8);c[b*16-1]=a.length*8;return c}function p(a,b){var c=(a&0xFFFF)+(b&0xFFFF),d=(a>>16)+(b>>16)+(c>>16);return(d<<16)|(c&0xFFFF)}function q(a,b){return(a<<b)|(a>>>(32-b))}function w(a,b,c,d){if(a<20){return(b&c)|((~b)&d)}if(a<40){return b^c^d}if(a<60){return(b&c)|(b&d)|(c&d)}return b^c^d}function x(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514}function v(a){var b=u(a),c=new Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,j,k,l,m,r,o,t,n;for(t=0;t<b.length;t+=16){j=d;k=e;l=f;m=g;r=h;for(n=0;n<80;n+=1){if(n<16){c[n]=b[t+n]}else{c[n]=q(c[n-3]^c[n-8]^c[n-14]^c[n-16],1)}o=p(p(q(d,5),w(n,e,f,g)),p(p(h,c[n]),x(n)));h=g;g=f;f=q(e,30);e=d;d=o}d=p(d,j);e=p(e,k);f=p(f,l);g=p(g,m);h=p(h,r)}return s(d)+s(e)+s(f)+s(g)+s(h)}OOo.extend(OOo,{sha1:v})}());(function(){function h(a,b){if(!b){b=location}var c=a.cookieName||'oo_abandon',d=OOo.readCookie(c),e=a.startPage,f=a.endPage,g=a.middle;if(!d){if(b.pathname.indexOf(e)!==-1){OOo.createCookie(c)}return false}else if(b.pathname.indexOf(f)!==-1){OOo.eraseCookie(c);return false}else if(b.pathname.search(g)!==-1){return false}else{OOo.eraseCookie(c);return true}}OOo.extend(OOo,{checkAbandonment:h})}());(function(){function d(a){var b,c;for(b=a.length-1;b>=0;b-=1){if(a[b].read){c=OOo.readCookie(a[b].name);if(!!c&&c===a[b].value){return true}else if(typeof a[b].value==='undefined'&&!!OOo.readCookie(a[b].name)){return true}}}return false}function e(a){var b;for(b=a.length-1;b>=0;b-=1){if(a[b].set){OOo.createCookie(a[b].name,a[b].value,a[b].expiration)}}}OOo.extend(OOo,{checkThirdPartyCookies:d,setThirdPartyCookies:e})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}var e=Array.prototype.slice;function f(a,b){var c=a.length,d=b.length;while(d){d-=1;a[c+d]=b[d]}return a}function g(a,b){a=e.call(a,0);return f(a,b)}function h(b){if(arguments.length<2&&typeof b==="undefined"){return this}var c=this,d=e.call(arguments,1);return function(){var a=g(d,arguments);return c.apply(b,a)}}return{bind:h}}()));(function(){function f(a){if(!a){a=location}var b;if(a.host.search(/\.[a-z]+/)!==-1){b=a.host.split('.').reverse();if(b.length>3){return a.host}b='.'+b[1]+'.'+b[0]}else{b=a.host}return b}function g(a,b,c){var d='',e='';if(c){d=new Date();d.setTime(d.getTime()+(c*1000));e="; expires="+d.toGMTString()}if(location.host!==f()){document.cookie=a+"="+b+e+"; path=/; domain="+f()+";"}else{document.cookie=a+"="+b+e+"; path=/;"}}function h(a){var b=a+"=",c=document.cookie.split(';'),d,e;for(e=0;e<c.length;e+=1){d=c[e];while(d.charAt(0)===' '){d=d.substring(1,d.length)}if(d.indexOf(b)===0){return d.substring(b.length,d.length)}}return null}function j(a){g(a,"",-1)}OOo.extend(OOo,{getCookieDomain:f,createCookie:g,readCookie:h,eraseCookie:j})}());OOo.Ocode=function(a){var b=OOo.Browser,c,d;if(a.disableMobile&&b.isMobile){return}if(a.disableNoniOS&&b.isMobileNonIOS){return}OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,a);c=this.options;c.metrics=OOo.createMetrics();this.frameName=c.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion';if(c.cookie&&OOo.Ocode.matchUrl(c.cookie,location)){return}if(c.thirdPartyCookies&&OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}if(c.abandonment&&!OOo.checkAbandonment(c.abandonment)){return}if(c.tunnel&&!OOo.checkTunnel(location.pathname,c.tunnel.path,c.tunnel.cookieName)){return}if(c.events&&c.events.onSingleClick){this.singProbability=Math.random()<1-c.events.onSingleClick/100}c.tealeafId=OOo.readCookie(c.tealeafCookieName)||OOo.readCookie(c.sessionCookieName);if(c.events){this.setupEvents();if(c.events.disableLinks||c.events.disableFormElements){this.setupDisableElements()}}if(c.floating){this.floating()}else if(c.bar){this.bar()}else if(c.tab){this.tab()}};OOo.Ocode.prototype={show:function(a,b){if(a==='Tab'&&b&&b.preventDefault){b.preventDefault()}if(this.onPageCardVisible){return}var c=this.options,d;if(c.events&&c.events.prompt){if(c.cookie)OOo.eraseCookie(c.cookie.name||'oo_r');OOo.hidePrompt()}if(this.interruptShow){return}if(!this.floatingLogo&&c.cookie&&OOo.Ocode.matchUrl(c.cookie)){return}if(!c.floating&&c.events&&this.singProbability){return}if(c.events&&c.events.onSingleClick){this.singProbability=true}if(c.cookie){OOo.Ocode.tagUrl(c.cookie)}if(c.thirdPartyCookies){if(OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}OOo.setThirdPartyCookies(c.thirdPartyCookies)}if(this.floatingLogo){this.floatingLogo.children[0].blur()}if(this.floatingLogo&&c.disappearOnClick){this.floatingLogo.style.display='none'}if(a){c.metrics.trigger=a}if(c.clickTalePID&&typeof window.ClickTale==='function'){c.clickTaleUID=window.ClickTaleGetUID();c.clickTaleSID=window.ClickTaleGetSID()}if(c.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}d=c.floating||c.tab||c.bar;if(d&&typeof d.onClickCallback==='function'){d.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(a,b){if(!b){b=location}var c=a.name||'oo_r',d=a.type==='page'?b.href:b.hostname,e=OOo.readCookie(c)||'';if(OOo.Ocode.matchUrl(a,b)){return}OOo.createCookie(c,e+OOo.sha1(d),a.expiration)},matchUrl:function(a,b){if(!b){b=location}var c=OOo.readCookie(a.name||'oo_r'),d;if(!c){return false}d=a.type==='page'?b.href:b.hostname;return c.search(OOo.sha1(d))!==-1}});(function(){var g=0;function h(){var a=this.options,b=a.newWindowSize||[545,325],c=[parseInt((a.metrics.height-b[1])/2,10),parseInt((a.metrics.width-b[0])/2,10)],d,e,f='location=no,status=no,scrollbars=1,width='+b[0]+',height='+b[1]+',top='+c[0]+',left='+c[1];ie7=OOo.Browser.IE&&navigator.userAgent.search('MSIE 7')!==-1,windowName='OnlineOpinion';if(a.newWindow)windowName=windowName+(g++);a.metrics.time2=(new Date()).getTime();a.metrics.type='Popup';d=OOo.appendOOForm(a,windowName);if(OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1){d.submit()}else{e=window.open(ie7?a.commentCardUrl||'https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+d.children[0].value:'',windowName,f);if(e&&!ie7){d.submit()}}}OOo.extend(OOo.Ocode.prototype,{launchOOPopup:h})}());(function(){function k(){var a=this.options.events,b=[false,false],c=['onExit','onEntry'],d=OOo.Browser.Opera?'unload':'beforeunload',e,f,g,h,j;if(a.prompt){OOo.extend(this.options,{promptMarkup:a.prompt.promptMarkup||'oo_event_prompt.html',neverShowAgainButton:false,pathToAssets:a.prompt.pathToAssets})}for(g=c.length-1;g>=0;g-=1){e=c[g];if(a[e]instanceof Array){h=a[e];j=h.length;while(j&&!b[g]){j-=1;if(window.location.href.search(h[j].url)!==-1&&Math.random()>=1-h[j].p/100){b[g]=true}}}else if(a[e]&&Math.random()>=1-a[e]/100){b[g]=true}}if(b[0]){OOo.addEventListener(window,d,this.show.bind(this,'onExit'),false)}if(b[1]){if(a.delayEntry){window.setTimeout(function(){if(a.prompt)this.getPrompt();else this.show()}.bind(this,'onEntry'),a.delayEntry*1000)}else{if(a.prompt)this.getPrompt();else this.show('onEntry')}}}function l(a){var b=a||window.event,c=a.target||a.srcElement,d=this.options.events,e=c.parentNode,f=5,g=0;while(e&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&g!==f){if(e.nodeName==='A'){c=e}e=e.parentNode;g+=1}if(d.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}if(d.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(d.disableLinks)!==-1){this.interruptShow=true}}function m(a){this.interruptShow=true}function r(){OOo.addEventListener(document.body,'mousedown',l.bind(this));if(!this.options.events.disableFormElements){return}var a=document.getElementsByTagName('form'),b;for(b=a.length-1;b>=0;b-=1){OOo.addEventListener(a[b],'submit',m.bind(this))}}OOo.extend(OOo.Ocode.prototype,{setupEvents:k,setupDisableElements:r,getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){if(this.options.cookie){OOo.Ocode.tagUrl(this.options.cookie)}OOo.showPrompt.call(this,a,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var d=document,e=this.floatingLogo=document.createElement('div'),f=d.createElement('div'),g=d.createElement('div'),h=d.createElement('div'),j=d.createElement('span'),k=this.options.floating,l=OOo.$(k.contentId),m='10px',r=k.id,o=d.createElement('span'),t,n,s,u,p,q,w,x;function v(a){return a.offsetLeft+a.offsetWidth}function A(a){u.style.left=v(l)+'px'}o.innerHTML="Screen reader users: Please switch to forms mode for this link.";o.className="screen_reader";if(r){e.id=r}e.className='oo_feedback_float';g.className='oo_transparent';f.className='olUp';h.className='olOver';f.tabIndex=0;f.onkeyup=function(a){t=a||window.event;if(t.keyCode!==13){return}this.show()}.bind(this);f.innerHTML=k.caption||'Feedback';e.appendChild(o);e.appendChild(f);j.innerHTML=k.hoverCaption||'Click here to<br>rate this page';h.appendChild(j);e.appendChild(h);e.appendChild(g);function y(a){var b=d.documentElement.scrollTop||d.body.scrollTop,c=d.documentElement.clientHeight||document.body.clientHeight;e.style.top=(b+c-(w||0)-10)+'px'}if(OOo.Browser.MobileSafari){if(OOo.Browser.ua.search('OS 4')!==-1){n=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-60)+'px';x=function(a){s=window.pageYOffset-(n-window.innerHeight);e.style.webkitTransform='translateY('+s+'px)'};OOo.addEventListener(window,'scroll',x,false);setTimeout(x,100)}}else if(!OOo.POSITION_FIXED_SUPPORTED){e.style.position='absolute';e.style.bottom='';OOo.addEventListener(window,'scroll',y,false);OOo.addEventListener(window,'resize',y,false);if(d.compatMode==="BackCompat"){e.style.background="white"}}if(k.position&&k.position.search(/Content/)&&l){u=this.spacer=d.createElement('div');p=OOo.Browser.WebKit?d.body:d.documentElement;u.id='oo_feedback_fl_spacer';u.style.left=v(l)+'px';d.body.appendChild(u);switch(k.position){case'rightOfContent':q=function(a){e.style.left=(v(l)-p.scrollLeft)+'px';if(!OOo.POSITION_FIXED_SUPPORTED){q=null}};break;case'fixedPreserveContent':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth,c=OOo.POSITION_FIXED_SUPPORTED?p.scrollLeft:0;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left=(v(l)-c)+'px'}else{e.style.left='';e.style.right=m}};break;case'fixedContentMax':q=function(a){var b=OOo.Browser.IE?d.body.clientWidth:window.innerWidth;if(b<=v(l)+e.offsetWidth+parseInt(m,10)){e.style.left='';e.style.right=m;if(!OOo.POSITION_FIXED_SUPPORTED&&a&&a.type==='scroll'){e.style.left=(d.body.clientWidth+d.body.scrollLeft-105)+'px'}}else{e.style.left=(v(l)-p.scrollLeft)+'px';e.style.right=''}};break}window.setTimeout(q,0);OOo.addEventListener(window,'scroll',q,false);OOo.addEventListener(window,'resize',q,false);OOo.addEventListener(window,'resize',A,false)}else{e.style.right=m}OOo.addEventListener(e,'click',this.show.bind(this,'Floating'),false);OOo.addEventListener(e,'touchend',this.show.bind(this,'Floating'),false);d.body.appendChild(e);if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){g.style.height=e.clientHeight+'px';w=e.clientHeight;setTimeout(y,100)}},removeFloatingLogo:function(){document.body.removeChild(this.floatingLogo);if(this.spacer){document.body.removeChild(this.spacer)}}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var d=document,e=this.floatingLogo=d.createElement('div'),f=d.createElement('span'),g,h,j,k=d.documentElement.scrollTop||d.body.scrollTop,l=d.createElement('div');function m(a){var b=curtop=0;if(a.offsetParent){do{b+=a.offsetLeft;curtop+=a.offsetTop}while(a=a.offsetParent);return[b,curtop]}}function r(a){var b=document.activeElement,c;if(!b)return;c=m(b);if(!c)return;if(c[1]+b.clientHeight>(window.innerHeight||document.body.clientHeight)+(window.pageYOffset||document.body.scrollTop)-e.clientHeight)window.scrollBy(0,b.clientHeight+20)}l.innerHTML='Link opens comment card';l.className='screen_reader';e.appendChild(l);this.reflowBar=OOo.K;e.id='oo_bar';f.innerHTML=this.options.bar.caption||'Feedback';e.appendChild(f);e.tabIndex=0;e.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);OOo.addEventListener(e,'click',this.show.bind(this,'Bar'));document.body.className+=document.body.className<1?'oo_bar':' oo_bar';document.body.appendChild(e);var o=/MSIE ([\d\.]+);/.exec(window.navigator.userAgent);if(OOo.Browser.IE&&o&&+o[1]<8){if(d.compatMode==='CSS1Compat'){g=function(a){if(a&&a.type==='resize'){setTimeout(g,50)}e.style.top=(d.documentElement.scrollTop+document.documentElement.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth))+'px'}}else{g=function(a){e.style.top=(d.body.scrollTop+document.body.clientHeight-e.clientHeight-1)+'px';e.style.width=(Math.max(d.documentElement.clientWidth,d.body.offsetWidth)-22)+'px'}}e.style.position='absolute';OOo.addEventListener(window,'scroll',g,false);OOo.addEventListener(window,'resize',g,false);this.reflowBar=function(){e.style.display='none';g();e.style.display='block'};g()}else if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){h=window.innerHeight;e.style.bottom=null;e.style.top=(window.pageYOffset+window.innerHeight-22)+'px';g=function(a){j=window.pageYOffset-(h-window.innerHeight);e.style.webkitTransform='translateY('+j+'px)'};OOo.addEventListener(window,'scroll',g,false);setTimeout(g,100)}OOo.addEventListener(document.body,'keyup',r,false)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var e=document,f=this.floatingLogo=e.createElement('div'),g=e.createElement('div'),h=e.createElement('div'),j=e.createElement('span'),k=this.options.tab;if(k.wcagBasePath){h=e.createElement('a');h.setAttribute('href','#');j=e.createElement('img');j.className='logo';j.setAttribute('alt',"Feedback");j.setAttribute('src',k.wcagBasePath+((OOo.Browser.ua.search('IE 6')!==-1)?"oo_tabie6.png":"oo_tab.png"))}function l(a){var b=e.documentElement.scrollTop||e.body.scrollTop,c=e.documentElement.scrollLeft||e.body.scrollLeft,d=e.documentElement.clientHeight||document.body.clientHeight;f.style.top=(b+(d/2-f.clientHeight/2))+'px';if((!k.position||k.position==='right'))f.style.right=(-1*c+2)+'px'}function m(a){f.style.top=pageYOffset+(innerHeight/2-f.clientHeight/2)+'px';f.style.right=document.documentElement.clientWidth-window.innerWidth-window.pageXOffset-15+'px'}f.id='oo_tab';f.className='oo_tab_'+(k.position||'right');if(k.wcagBasePath){f.className+=' wcag'}if(!OOo.POSITION_FIXED_SUPPORTED&&!OOo.Browser.MobileSafari){f.style.position='absolute';if((!k.position||k.position==='right')&&OOo.Browser.IE){f.className+=' oo_tab_ie_right';if(OOo.Browser.ua.search('IE 6')!==-1||OOo.Browser.ua.search('IE 7')!==-1){f.className+='  oo_tab_ie67_right'}if(OOo.Browser.ua.search('IE 6')===-1){OOo.addEventListener(window,'scroll',l,false);OOo.addEventListener(window,'resize',l,false)}}}if(typeof k.tabIndex==='number'){f.tabIndex=k.tabIndex}else if(typeof k.tabIndex==='undefined'){f.tabIndex=0}f.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}this.show()}.bind(this);h.appendChild(j);f.appendChild(h);if(g){g.className='screen_reader';g.innerHTML='Activate to launch comment card';f.appendChild(g)}OOo.addEventListener(f,'click',this.show.bind(this,'Tab'),false);e.body.appendChild(f);if(OOo.Browser.MobileSafari&&OOo.Browser.ua.search('OS 4')!==-1){f.style.position='absolute';OOo.addEventListener(window,'scroll',m,false);setTimeout(m,100)}}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var e=document,f=OOo.Cache.overlay||e.createElement('div'),g=this.wrapper=e.createElement('div'),h=e.createElement('div'),j=e.createElement('div'),k=e.createElement('span'),l=this.frameName,m=e.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+l+'">':'iframe'),r=e.createDocumentFragment(),o=this.options,t=o.onPageCard,n='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',s,u,p,q=false,w=this,x,v,A,y,B,E,C,D=e.createElement('span');function z(a){if(a&&a.preventDefault){a.preventDefault()}document.body.focus();m.tabIndex=-1;m.title="empty";m['aria-hidden']='true';f.style.display='none';f.className='';e.body.removeChild(g);if(window.postMessage){OOo.removeEventListener(window,'message',B)}else{window.clearInterval(u)}q=false;w.onPageCardVisible=false;return false}B=OOo.Ocode.postMessageHandler(function(a){var b=parseInt(a,10),c,d;if(b>0){if(q){return}q=true;c=window.innerHeight||e.documentElement.clientHeight||e.body.clientHeight;d=b;C=g.offsetTop;if(d+C>c){d=c-40-C}m.style.width='555px';j.style.width='555px';m.style.height=d+'px';g.style.visibility='visible';if(k.clientHeight<20){k.style.height=g.offsetHeight+'px'}f.className="no_loading";w.onPageCardVisible=true;s&&e.body.removeChild(s)}else if(a==='submitted'){z()}if(OOo.Browser.IE&&e.compatMode==="BackCompat"){window.scrollTo(0,0)}},w.options.commentCardUrl);o.metrics.type='OnPage';OOo.Cache.overlay=f;f.id='oo_overlay';f.style.display='block';f.className='';j.className='iwrapper';g.className='oo_cc_wrapper';g.setAttribute('role','alert');g.setAttribute('aria-describedby','comment_card_description');D.className='screen_reader';D.id='comment_card_description';D.innerHTML='Please leave your feedback in the comment card you just activated';g.appendChild(D);h.className='oo_cc_close';h.innerHTML='<span class="screen_reader">Link closes comment card</span>X';h.title='Click to close comment card';g.style.visibility='hidden';h.tabIndex=0;h.onkeyup=function(a){var b=a||window.event;if(b.keyCode!==13){return}z()};if(OOo.Browser.IE){m.frameBorder='0';if(!window.XMLHttpRequest||e.compatMode==="BackCompat"){E=Math.max(e.documentElement.clientWidth,e.body.offsetWidth);f.style.position='absolute';f.style.width=e.compatMode==="BackCompat"?(E-21)+'px':E+'px';f.style.height=Math.max(e.documentElement.clientHeight,e.body.offsetHeight)+'px';g.style.position='absolute';OOo.addEventListener(window,'scroll',function(){f.style.top=(e.body.scrollTop+document.body.clientHeight-f.clientHeight)+'px';g.style.top=(e.body.scrollTop+C+25)+'px'})}}OOo.addEventListener(h,'click',z);if(t.closeWithOverlay&&!OOo.Browser.isMobile){g.appendChild(k);k.onclick=z;f.onclick=z}m.src=' ';m.name=l;m.title='Comment Card';j.appendChild(h);j.appendChild(m);g.appendChild(j);r.appendChild(g);r.appendChild(f);e.body.appendChild(r);if(window.postMessage){OOo.addEventListener(window,"message",B)}else{u=setInterval(B,500)}o.metrics.time2=(new Date()).getTime();s=OOo.appendOOForm(o,l);s.submit()}});OOo.extend(OOo.Ocode,{postMessageHandler:function(d,e,f){return function(a){var b='https://secure.opinionlab.com',c;if(!f){f=location}if((a&&!(a.origin===b||a.origin.indexOf(e)!==0))||(!a&&f.hash.search('OL=')===-1)){return false}c=a?a.data:f.hash.split('=').pop();if(!a&&location.hash){location.hash=''}d(c);return c}}});OOo.Invitation=function(a){if(OOo.Browser.isMobile){return}this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitorWindow:'oo_inv_monitor.html',beforePrompt:OOo.K};this.popupShown=false;OOo.extend(this.options,a);var b=this.options,c=parseInt(OOo.readCookie(b.pagesHitCookie),10)||0;OOo.Invitation.friendlyDomains=b.friendlyDomains||null;var d={weight:Number(OOo.readCookie('oo_OODynamicRewrite_weight')),searchPattern:OOo.readCookie('oo_OODynamicRewrite_searchPattern'),replacePattern:OOo.readCookie('oo_OODynamicRewrite_replacePattern')};OOo.eraseCookie('oo_OODynamicRewrite_weight');OOo.eraseCookie('oo_OODynamicRewrite_searchPattern');OOo.eraseCookie('oo_OODynamicRewrite_replacePattern');if(!window.OOoDynamicRewrite||window.OOoDynamicRewrite.weight<d.weight){window.OOoDynamicRewrite=d}if(window.OOoDynamicRewrite&&('number'===typeof window.OOoDynamicRewrite.weight)&&!isNaN(window.OOoDynamicRewrite.weight)){OOo.createCookie('oo_OODynamicRewrite_weight',window.OOoDynamicRewrite.weight);if(window.OOoDynamicRewrite.searchPattern){OOo.createCookie('oo_OODynamicRewrite_searchPattern',window.OOoDynamicRewrite.searchPattern)}if(window.OOoDynamicRewrite.replacePattern){OOo.createCookie('oo_OODynamicRewrite_replacePattern',window.OOoDynamicRewrite.replacePattern)}}if(location.search.search('evs')!==-1||OOo.readCookie('oo_evs_friendly')==='yes'){OOo.eraseCookie('oo_evs_friendly');b.loadPopupInBackground=true;this.launchPopup();OOo.createCookie(b.repromptCookie,1,b.repromptTime===-1?0:b.repromptTime)}setTimeout(function(){if(!window.oo_inv_monitor){return}if(b.area&&location.href.search(b.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(b.goal&&location.href.search(b.goal)!==-1){window.oo_inv_monitor.close()}}.bind(this),1600);if(OOo.readCookie(b.repromptCookie)){return}if(b.thirdPartyCookies&&OOo.checkThirdPartyCookies(b.thirdPartyCookies)){return}if(!OOo.readCookie(b.percentageCookie)){OOo.createCookie(b.percentageCookie,(Math.random()>1-(b.responseRate/100))?"1":"0")}if(typeof b.promptTrigger!=='undefined'){if(b.promptTrigger instanceof RegExp){if(!window.location.href.match(b.promptTrigger)){return}}else if(b.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,b.promptTrigger,b.tunnelCookie)){return}}}c+=1;OOo.createCookie(b.pagesHitCookie,c);if(b.pagesHit&&c<b.pagesHit){return}OOo.eraseCookie(b.tunnelCookie);if(OOo.readCookie(b.percentageCookie)==='1'){window.setTimeout(function(){OOo.createCookie(b.repromptCookie,1,b.repromptTime);this.options.beforePrompt();this.getPrompt()}.bind(this),b.promptDelay*1000)}};OOo.Invitation.notifyFriendlyLocationChange=function(a){if(window.oo_inv_monitor){OOo.createCookie('oo_evs_friendly','yes')}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(a){OOo.showPrompt.call(this,a,this.launchPopup)},launchPopup:function(){if(this.popupShown){return}this.popupShown=true;var b=this.options,c=window.location.href,d=b.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':b.pathToAssets+b.monitorWindow+'?'+(new Date()).getTime()+'&',e,f=[],g=b.asm?[555,500]:[400,335],h,j=OOo.createMetrics(),k=OOo.readCookie(b.tealeafCookieName),l;if(b.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){k+='|'+[b.clickTalePID,window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}g=b.newWindowSize||g;l='location=no,status=no,width='+g[0]+',height='+g[1];if(b.referrerRewrite){j.referer=OOo.referrerRewrite(b.referrerRewrite)}if(b.truncatePrevCurrentMetrics){j.prev=OOo.truncateMetric(j.prev);j.currentURL=OOo.truncateMetric(j.currentURL)}if(b.disablePrevCurrentMetrics){j.prev='';j.currentURL=''}if(b.thirdPartyCookies){OOo.setThirdPartyCookies(b.thirdPartyCookies)}e=OOo.toQueryString(j)+'&type=Invitation';if(b.customVariables){e+='&customVars='+encodeURIComponent(OOo.serialize(b.customVariables))}e+='&custom_var='+OOo.createLegacyVars(b.legacyVariables,k);if(b.asm){e+='&asm=2';l+=',scrollbars=1'}d+=e;if(d.match(/\?/g).length===2)d=d.replace(/\?([^?]*)$/,'&$1');this.popup=h=window.open(d,'OnlineOpinionInvitation',l);if(!b.loadPopupInBackground&&OOo.$('oo_container')){OOo.hidePrompt()}if(b.popupType==='popunder'){if(!OOo.Browser.Chrome){h.blur();window.focus()}else{if(!b.loadPopupInBackground){window.alert(b.chromeMainWinPrompt||'Please fill out the form behind this window when you are finished.')}if(b.chromeSurveyPrompt){setTimeout(function(a){h.postMessage(b.chromeSurveyPrompt,"*")},500)}}}else if(window.oo_inv_monitor){if(!OOo.Browser.Chrome){window.blur();h.focus()}else{h.alert(b.chromeSurveyPrompt||'Please fill out the form');h.focused=true}}},killPrompt:function(){if(this.options.clickCallbacks&&typeof this.options.clickCallbacks.no==='function'){this.options.clickCallbacks.no()}OOo.createCookie(this.options.repromptCookie,1,157680000);OOo.hidePrompt()}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(a){location.href=a}});
/* OnlineOpinion v5.4.12 */
/* Released: 1/20/2012 */
/* Components: Full */
/* The following code is Copyright 1998-2012 Opinionlab, Inc.  All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com */

/* Inline configuration */
  var oo_inline = new OOo.Ocode({
//	, onPageCard: {
//		closeWithOverlay: {}
//	  }
//	, customVariables: {
//		  Name1: 'value1'
//		, Name2: 'value2'
//		, Name3: 'value3'
//	  }
  });

$(document).ready(function(){
   if (!$.trim($('.footertop .footer-soc-icons .social-icons').html()).length){
      $('.footerLinks').addClass('footer-links-top');
    }
    if ($(window).width() < 768) {
		var footerlinksHeight = $('.footer-links-top').height();
		$('.footertop').css('margin-top',footerlinksHeight-20);
    }
})

function CountrySelector(){
	var URL = window.location.pathname.toLowerCase();
	var result1 = URL.split('/');
	var result;
	var count = 0;
	if(result1[1] === "content"){
		result = "/"+result1[5]+"-"+result1[6]+"/";
    }
    else{
        var splitRes = result1[1].split('-');
        result = "/"+splitRes[0]+"-"+splitRes[1]+"/";
    }
	$(".modal-local-selector .country-link").each(function () {		
		var Href = $(this).attr("href").toLowerCase();
		if (Href.indexOf(result) > -1 && Href.indexOf('life.chubb.com') === -1 && Href.indexOf('www.chubblifefund.com.vn') === -1) {
			var CurHost=window.location.hostname;
			var selctdhost=$(this)[0].hostname;
			$(".countryName").text($(this).find(".primary").text());
			$(".locale-group").removeClass("active");
			$(this).closest(".locale-group").addClass("active");
			$(this).addClass("active");
			count ++;
	   }
	   	$(this).on('click', () => {
	   	    window.dataLayer.push({
                event: "navevent",
                "data-ec": "navigation",
                "data-ea": "click: country selector",
                "data-linktype": "internal site page",
                "data-linkurl": $(this).attr('href'),
                "data-linkdesc": `${dataLayer[0].country}-${dataLayer[0].language}`
            })
	   	})
	});
	if (count == 0){
		$(".countryName").text("Select a Country");
	}
}



$(document).ready(function(){
	CountrySelector();
	let $regionsLink = $('.modal-local-selector').find('.regions-link, .region-link');
	//$regionsLink.each((_, element) => runGtmScript(element));
	$regionsLink.on('click', function(e) {
        e.preventDefault();
        var localGroupId = $(this).attr('href');
        $('.locale-group').removeClass('active');
        $(localGroupId).addClass('active');
    });
    let $countrySelector = $('.countryName')
    var countrytext = $countrySelector.text();
    $countrySelector.attr("aria-label", "Country Selector:" + countrytext + " - Open in New Modal Window")
	    
})

var divCHero;
function changePaddingSmallScreens() {
    if($(window).width() < 767) {
        divCHero.css({
            'padding-top': divCHero.siblings('header').height()
        });

    } else {
        divCHero.css({
            'padding-top': ''
        });
    }
}
$(document).ready(function(){
    var scrolled = $('#nextSection').val();
    divCHero = $('div.c-hero').find('.banner-section.oasis-banner');
    if ($('.hero__scroll-down-btn').length) {
        $('.hero__scroll-down-btn').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: parseInt($('.'+scrolled).offset().top - 100)
            }, 500);
        });
    }
    function updateherobg(){   
        $('.c-hero .banner-section').each(function(){   
            var bgImg = $(this).data('dbg');
            if ($(window).width() <= 767 && $(this).data('mbg')) {
                bgImg = $(this).data('mbg');
            } else if ($(window).width() >= 768 && $(window).width() < 1200 && $(this).data('tbg')) {
                bgImg = $(this).data('tbg');
            }
           if(bgImg!== null && bgImg!== undefined){
            	$(this).css({ 'background-image': 'url(' + bgImg + ')' });
            }
        });

    }
    updateherobg();
    changePaddingSmallScreens();
    $(window).on('resize', function (e) {
        updateherobg();
        changePaddingSmallScreens();
            
    });
});





var i;
var a = $(".sticky-holder");
var t = $(".jumper-link");
setTimeout(function () {
    if(t.length) {
        i =  t.offset().top;
    }
}, 1500);
t.on("click", function (t) {
    t.preventDefault();
    var SectionHref = $(".jumper-link").attr("href");
    const connect = $(SectionHref).offset().top;
    $("html, body").animate({ scrollTop: connect }, 1000);
});
$(window).scroll(function (t) {
    var e = $(this).scrollTop();
    (i && (i <= e)) ? a.addClass("fixed") : a.removeClass("fixed");
});
function inPageNav(){
  var $ipn = $('.in-page-nav');

  if(!$ipn.length) return;

  var $nav = $ipn.find('nav'),
      $items = $ipn.find('.items'),
      $chapterHeadings = $('.product-promo-section-heading'),
      pinPoint = $nav.offset().top,
      topPad = 40,
      map = [];

  $chapterHeadings.each(function() {
    var $elem = $(this);
    var $li = $('<li>').addClass('item');
    var href = '#';
    var label = $elem.text().trim();
    var $a = $('<a>').attr('href', href).html(label);
    $a.attr('data-cta', label.toLowerCase())
        .attr('data-ec', 'navigation')
        .attr('data-ea', 'click: content')
        .attr('data-linktype', 'internal site page')
        .attr('data-linkurl', href)
        .attr('data-linkdesc', label.toLowerCase());

    $a.on('click', function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $elem.offset().top - topPad,
      }, 'fast');
      // $('body, html').scrollTop($elem.offset().top - topPad);
    });
    $li.append($a);
    $ipn.find('.items').append($li);

    map.push({
      $li: $li,
      $chapterHeading: $elem,
    });
  });

  var setSticky = function(pgScroll) {
    if(pgScroll > pinPoint) {
      $nav.addClass('fixed');
    }
    else {
      $nav.removeClass('fixed');
    }
  };

  var setActive = _.debounce(function(pgScroll) {
    var activeIndex = -1;
    map.forEach(function(mapItem, i) {
      if(pgScroll > mapItem.$chapterHeading.offset().top - topPad - 40) {
        activeIndex = i;
      }
    });

    $items.children().removeClass('active');
    if(activeIndex >= 0) $items.children().eq(activeIndex).addClass('active');
  }, 10);

  var updateNav = function() {
    var pgScroll = $(window).scrollTop();
    setSticky(pgScroll);
    setActive(pgScroll);
  };

  $(window).on('scroll', updateNav);
  updateNav();
}

function inPageNavScrollFix() {
     if ($('.in-page-nav').length) {
         var sidebar = $('.in-page-nav').children('nav'),
             sidebarHeight = sidebar.outerHeight(true),
             footer = $('footer'),
             bottom = footer.offset().top - sidebarHeight,
             footerHeight = footer.outerHeight(true);
    
         //sidebar.css('height', '100%').parent().css('position', 'relative');
         //footer.css({'z-index':'10', 'position':'relative'});
    
         $(window).scroll(function (event) {
             var y = $(this).scrollTop();
             if (y >= bottom) {
                 sidebar.find('ul').css({
                     'top': '',
                     'position': 'absolute',
                     'bottom': footerHeight
                 });
             } else {
                 sidebar.find('ul').css({
                     'position': '',
                     'bottom': ''
                 });
             }
         });
     }
}

function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime = 0,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;
    
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    
    function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
                resultN = wait - timeSinceLastCall;
        
        return maxing ? nativeMin(resultN, maxWait - timeSinceLastInvoke) : resultN;
    }
    
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;
        
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (!lastCallTime || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }
    
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    
    function trailingEdge(time) {
        clearTimeout(timerId);
        timerId = undefined;
        
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastCallTime = lastInvokeTime = 0;
        lastArgs = lastThis = timerId = undefined;
    }
    
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    
    function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);
        
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}

$(document).ready(function(){
	inPageNav();
})

$(document).scroll(function(){
	inPageNavScrollFix();
})
$(document).ready(function(){
    $(".coverage-block").each(function(){
        $(this).find('table').wrap('<div class="table-responsive"></div>');
    })
});


if(document.location.href.match(/[^\/]+$/) && document.location.href.match(/[^\/]+$/)[0].split('.')[0] == 'charity-challenge' ){
$('.c-hero .cta-btns').hide();

$('.c-hero #risk-video .cta-btns').show();

var btnTxt = $('.c-hero a.btn.btn-border.arrow').html();

$('.c-hero #risk-video .cta-btns a span').html(btnTxt );
$('.c-hero #risk-video .cta-btns').css('margin-top','60px');

$('.widget-content .ctn-btn .btn').on('click',function(e){

var divId = $(this).attr('href');
if($(divId).length == 1){
	e.preventDefault();
	hidediv();
    $(divId).show();
	var byRow = $('body');
      $('.row').each(function() {
          $(this).find('.widget-section.left').matchHeight({
              byRow: byRow
          });
      });						 
    $(window).scrollTop(500);
    $('.charity-challenge-carousel').hide();
}
});
$('.charity-challenge-toggle .c-text-and-image .widget-content a.btn').on('click',function(e){
        e.preventDefault();
        var divId = $(this).attr('href');
       if($(divId).length == 1){
                             hidediv();
                             $(divId).show();
		var byRow = $('body');
		  $('.row').each(function() {
			  $(this).find('.widget-section.left').matchHeight({
				  byRow: byRow
			  });
		  });
		  $(window).scrollTop(500);
		  $('.charity-challenge-carousel').hide();
        }



    });
 $('.charity-challenge-toggle .c-button .cta-btns a.btn').on('click',function(e){
     e.preventDefault();
      hidediv();
     $(window).scrollTop(500);
$('.charity-challenge-carousel').show();
 });

function hidediv(){
$('.c-video-image-carousel .widget-content .ctn-btn a').each(function(){
if($(this).attr('href').length > 1){
var divId = $(this).attr('href');
$(divId).hide();
}
});

}
hidediv();    
}


$(document).ready(function() {
  $('.c-quote-section span.h1-heading,.c-quote-section  span.h2-heading,.c-quote-section  span.h3-heading').parent().css({'display' : 'block'})
});
$(document).ready(function(){
    var attr = $('.ribbon-component a').attr('href');
    if (attr !== undefined || attr){
        $('.ribbon-component a').append(" <em class='fa fa-angle-right'></em>");
    }
})

$(".intro-copy").each(function(){
    var fontColor = $(this).find("[name='fontColor']").val();
        var letterColor = $(this).find("[name='letterColor']").val();
       $(this).find('p').css('color',fontColor);
        if($(this).find("[name='fontVariation']").val() == 'intro'  && (para=$($(this).find('p:not(:has(span.h1-heading,span.h2-heading,span.h3-heading,.intro-first-letter))')[0])).length>0){
        var x= para.text().split(' ');
        var text='<span class="intro-first-letter" style="color:'+(letterColor||'')+'">'+x[0].charAt(0)+'</span>';
        var newhtml = para.html().replace(x[0],text+x[0].slice(1,x[0].length));
        para.html(newhtml);
        }
    });
    

function tabscroll(){
  //alert('intabscroll');
var tempwidth = 0;    

var tablistItem=document.getElementsByClassName('cmp-tabs__tab--active');
  //  for(var i=0; i <tablistItem.length; i++){
   //     tempwidth=tempwidth+tablistItem[i].offsetwidth;

//}
     //var tabListWrapper= document.getElementsByClassName("cmp-tabs__tablist");
    tablistItem.width = tempwidth +10+ 'px';
}



//var activeListItem = document.getElementsByClassName(

function hideWhenSingleTab() {
   $('.nav-tabs .cmp-tabs__tablist.nav').each(function() {
    if ($(this).children('li').length === 1) {
      $(this).addClass('hidden');
    }
  })
};
$(document).ready(function(){
	hideWhenSingleTab();
});

/**  carousel for mobile view start **/
var windowWidth = 0;
$(function () {
  $(window).on('load', function () {
        $(this).resize();
        windowWidth = window.innerWidth;
    });
    $(window).on('resize',function () {
        if (windowWidth != window.innerWidth){
            windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                $('.cyber-client-center-tab-content.mobile-carousel').addClass('owl-carousel owl-theme');
                $('.cyber-client-center-tab-content .cmp-tabs__tabpanel').addClass('cmp-tabs__tabpanel--active');
                $('.cyber-client-center-tab-content').owlCarousel({
                    items: 1
                });
            } else {
                var activeIndex = 0;
                $('.client-center-tabs .cmp-tabs__tablist li').each(function (index) {
                  if($(this).find('a').hasClass('cmp-tabs__tab--active')) {
                    activeIndex = index;
                  }
                });
                $('.cyber-client-center-tab-content .cmp-tabs__tabpanel').removeClass('cmp-tabs__tabpanel--active');
                $('.cyber-client-center-tab-content').find('.cmp-tabs__tabpanel:eq('+ activeIndex +')').addClass('cmp-tabs__tabpanel--active');
                $('.cyber-client-center-tab-content.mobile-carousel').trigger('destroy.owl.carousel');
                $('.cyber-client-center-tab-content.mobile-carousel').removeClass('owl-carousel owl-theme');
            }
        }
    });
});
/**  carousel for mobile view end **/

/** deeplinks - enable respective tab on page load **/

function deepLinks(){
    if($('.cmp-tabs.tab-section').hasClass('idEnabled')){
        var pageUrl = window.location.href;
        var str = pageUrl.split('#')[1];
        if(str == undefined){
            $('.nav-tabs .cmp-tabs__tablist li:first-child a').addClass('cmp-tabs__tab--active');
            $('.tab-content .cmp-tabs__tabpanel:first-child').addClass('cmp-tabs__tabpanel--active');
        }
        else{
            $('.nav-tabs .cmp-tabs__tablist li a').removeClass('cmp-tabs__tab--active');
            $('.tab-content .cmp-tabs__tabpanel').removeClass('cmp-tabs__tabpanel--active');

            $('#'+str).closest('.tab-content .cmp-tabs__tabpanel').addClass('cmp-tabs__tabpanel--active');
            var tabids = $('#'+str).closest('.tab-content .cmp-tabs__tabpanel').attr('id');
            $('.nav-tabs .cmp-tabs__tablist li a').each(function () {
                var tabHref = $(this).attr('href').split('#')[1];
                if(tabids == tabHref){
                    $(this).addClass('cmp-tabs__tab--active');
                }
            })
            setTimeout(function() { 
                var aid = $(id).parent();
                var scroll = aid.offset().top-10;
                console.log("scroll: " + scroll);
                $('html, body').animate({ 
                    scrollTop: scroll 
                }, 1000); 
            }, 300);
        }
    }
}
$(document).ready(function(){
	deepLinks();
})
/** deeplinks - enable respective tab on page load end**/
/** aemm-4059 - deeplink fix for tabs **/
$('.cmp-tabs.tab-section .tab-content  a').click( function(){   
    var id = $(this).attr('href');
     if(id!= undefined && id.indexOf('#')>=0){
    var str = id.split('#')[1];
    }
    if(str){
        $('.nav-tabs .cmp-tabs__tablist li a').removeClass('cmp-tabs__tab--active');
        $('.tab-content .cmp-tabs__tabpanel').removeClass('cmp-tabs__tabpanel--active');
        $('#'+str).closest('.tab-content .cmp-tabs__tabpanel').addClass('cmp-tabs__tabpanel--active');
        var tabids = $('#'+str).closest('.tab-content .cmp-tabs__tabpanel').attr('id');
        $('.nav-tabs .cmp-tabs__tablist li a').each(function () {
            var tabHref = $(this).attr('href').split('#')[1];
            if(tabids == tabHref){
                $(this).addClass('cmp-tabs__tab--active');
            }
        })
        setTimeout(function() { 
            var aid = $(id).parent();
            var scroll = aid.offset().top-10;
            console.log("scroll: " + scroll);
            $('html, body').animate({ 
                scrollTop: scroll 
            }, 1000); 
        }, 300);        
    }    
});
$(function() {
    // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

    // get test settings
    var byRow = $('body');

    // apply matchHeight to each item container's items
    $('.row').each(function() {
        $(this).find('.faceImgCaption.if-client-story').matchHeight({
            byRow: byRow
        });
    });  
});

$(document).ready(function(){

	function updateBioListingBg(){   
        $('.c-bio-listing .widget-image').each(function() { 
            if(!($(this).hasClass('hidden'))) {
                    var bgImg = $(this).data('dbg');
                    if ($(window).width() <= 767 && $(this).data('mbg')) {
                        bgImg = $(this).data('mbg');
                    } else if ($(window).width() >= 768 && $(window).width() < 1024 && $(this).data('tbg')) {
                        bgImg = $(this).data('tbg');
                    }
                   if(bgImg!== null && bgImg!== undefined){
                    	$(this).css({ 'background-image': 'url(' + bgImg + ')' });
                    }
        	}
        });

    }
	updateBioListingBg();
	$(window).on('resize', function (e) {
        updateBioListingBg();
    });
});
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);


// owl carousel
$(document).ready(function(){  
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
          items:1
      }
  }
  });
})
$(document).ready(function(){
    var isAccordianItemOpen = $('.card-header .cmp-accordion__button').attr('aria-expanded');
    $('.card-header .cmp-accordion__button').on('click',function(){
        if(isAccordianItemOpen == true){
            $('.card-header .cmp-accordion__button').find("fa").removeClass('icon-plus');
        }
        else {

            $('.card-header .cmp-accordion__button').find("fa").addClass('icon-plus');
        }
    });
    $('.accordion-section .cmp-accordion__item .card-body a').on('click',function(e){
        var islink = $(this).attr('href').split('#')[0] == "";
        if(islink){
            e.preventDefault();
            var targetID = $(this).attr('href').replace('#','');
            if($('#'+targetID).length >0){
                if($('#'+targetID).closest('.cmp-accordion__item').find('.cmp-accordion__button--expanded').length < 1){
					$('#'+targetID).closest('.cmp-accordion__item').find('.cmp-accordion__button').click();
                }
                $('html, body').animate({
                    scrollTop: $("#"+targetID).offset().top
                }, 2000);
            }
        }
    });
});

var FilteredSearch = function () {
    'use strict';

    //https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
    var KeyCode = {
        BACKSPACE: 8,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ESC: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        RETURN: 13,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    var mode = $('#filtered-search').data('mode');
    var btnTopcsVal = {};
    var btnRegionsVal = {};

    function initFilteredSearch() {

        $('.filtered-search__selector-btn').on('keydown', function (e) {

            var id = $(this).attr('data-target');

            //close dropdown if focus moves away
            switch (e.which) {
                case KeyCode.ESC:
                case KeyCode.TAB:
                    $(id).collapse('hide');
                    break;
            }

            //on return press dropdown opens and focus is set to the first item
            if (e.which == KeyCode.RETURN || e.which == KeyCode.DOWN) {
                $(id).collapse('show');
                setInitialFocus(id, $(this), true);

                //check if li all have handling event. if no check - multiple fire
                if (!$(id).data('keydown-bound')) {
                    $(id).find('li').on('keydown', navigateList);
                    $(id).data('keydown-bound', true);
                }

                e.preventDefault();
            }

            //console.log(e.which);

            if (e.which == KeyCode.DOWN || e.which == KeyCode.UP)
                e.preventDefault();
        });

        $('[role="option"]').on('click', function (e) {
            e.stopPropagation();
            selectItem($(this), true);
            var id = $(this).parents('.filtered-search__selector-body').attr('id');
            var btn = $('button[data-target="#' + id + '"]');
            btn.trigger('click');
            btn.focus();
        });

        $('#filtered-search__clear-filters').on('click', function () {
            var btn = $("#filtered-search__btn-topcs");
            btn.data('topic', 'all');
            //btn.text('All topics');
            btn.text(btnTopcsVal.text);
            setInitialFocus(btn.data('target'), btn, false);

            btn = $("#filtered-search__btn-regions");
            btn.data('region', 'all');
            btn.text(btnRegionsVal.text);
            //btn.text('All regions');
            setInitialFocus(btn.data('target'), btn, false);

            resetArticlesList();
            reloadArticlesList();
        });

        $('#filtered-search__btn-read-more').on('click', function () {
            reloadArticlesList(true);
        });

        $('body').on('click touchstart', function (event) {
            if ($(event.target).closest('.filtered-search__selector-inner-container').length == 0) {
                $('.filtered-search__selector-body.collapse').collapse('hide');
            }
        });

        //console.log('filtered search initiated');
        reloadArticlesList(); //initial load

        //Filter search 
        var btn = $("#filtered-search__btn-topcs");
        btnTopcsVal = { data: btn.data('topic'), text: btn.text() };

        btn = $("#filtered-search__btn-regions");
        btnRegionsVal = { data: btn.data('region'), text: btn.text() };


    }

    //handles action done on li elements in lists
    function navigateList(e) {

        e.preventDefault();

        //console.log(e);
        //console.log(e.target);
        var li = $(e.target);
        var next_li;
        var escape_focus = false;

        switch (e.which) {
            case KeyCode.DOWN:
                next_li = li.next();
                if (next_li.length == 0)
                    next_li = li.parent().find('li:first-of-type');
                break;
            case KeyCode.UP:
                next_li = li.prev();
                if (next_li.length == 0)
                    next_li = li.parent().find('li:last-of-type');
                break;
            case KeyCode.HOME:
                next_li = li.parent().find('li:first-of-type');
                break;
            case KeyCode.END:
                next_li = li.parent().find('li:last-of-type');
                break;
            case KeyCode.RETURN:
            case KeyCode.ESC:
                next_li = li;

                if (e.which == KeyCode.RETURN) {
                    selectItem(next_li, true);
                }

                var id = li.parents('.filtered-search__selector-body').attr('id');
                var btn = $('button[data-target="#' + id + '"]');
                btn.trigger('click');
                btn.focus();
                escape_focus = true;

                break;

        }

        if (!escape_focus && next_li != undefined) {
            selectItem(next_li);
            next_li.focus();
        }

    }

    function setInitialFocus(id, btn, setFocus) {

        var el;
        if (id.indexOf('topic') > -1)
            el = $(id).find("li[data-topic='" + btn.data('topic') + "']");
        else
            el = $(id).find("li[data-region='" + btn.data('region') + "']");

        $(id).find('li').removeAttr('aria-selected');
        $(id).find('li').removeAttr('tabindex');

        $(el).attr('aria-selected', 'true');
        $(el).attr('tabindex', '-1');

        if (setFocus)
            el.focus();
    }

    function selectItem(li, reload_articles) {

        li.parent().find('li').removeAttr('aria-selected');
        li.parent().find('li').removeAttr('tabindex');
        li.attr('aria-selected', 'true');
        li.attr('tabindex', '-1');

        if (reload_articles) {
            var id = li.parents('.filtered-search__selector-body').attr('id');
            var btn = $('button[data-target="#' + id + '"]');

            btn.text(li.text());

            if (typeof li.data('topic') !== 'undefined')
                btn.data('topic', li.data('topic'));
            else
                btn.data('region', li.data('region'));

            resetArticlesList();

            reloadArticlesList();

        }

    }

    function resetArticlesList() {
        $('#filtered-search__articles').html('');
        $('#filtered-search__btn-read-more').data('treshold', 0);
    }

    function reloadArticlesList(setFocus) {

        $('#filtered-search__clear-filters').hide();
        $('#filtered-search__btn-read-more').hide();

        var topic = $("#filtered-search__btn-topcs").data('topic');
        var region = $("#filtered-search__btn-regions").data('region');
        var treshold = $('#filtered-search__btn-read-more').data('treshold');
        if (treshold == undefined)
            treshold = 0;

        $('#filtered-search_sr-alert').text('Set of articles updated. Now showing ' + topic + ' in ' + region); //annouce for screen readers
        //console.log('to display > ' + topic + " in " + region + " | " + treshold);

        var articles = JSON.parse(sessionStorage.getItem('articles'));
        //console.log(articles);

        if (topic != 'all') {
            articles = articles.filter(function (a) { return a.topic.indexOf(topic) > -1 || a.topic.toLowerCase() === 'all' });
            $('#filtered-search__clear-filters').show();
        }   
        if (region != 'all') {
			region = region.replace("/"," ");
            articles = articles.filter(function (t) { return t.region.indexOf(region) > -1 || t.region.toLowerCase() === 'all' });
            $('#filtered-search__clear-filters').show();
        }

        if (articles.length == 0) {
            $("#filtered-search__articles").html('<p class="filtered-search__error-message">No articles found.</p>');
        }

        var list = articles.slice(treshold, treshold + 10);
        if (list.length + treshold < articles.length) {
            $('#filtered-search__btn-read-more').show();
            $('#filtered-search__btn-read-more').data('treshold', treshold + 10);
        }

        renderArticles(list, setFocus);

        var mode = $('#filtered-search').data('mode');
        if (mode != 'clientstories')
            $('.filtered-search__article-big-contents-copy').each(function () {
                // textEllipsis(this, 2);
            });
        $('.filtered-search__article-contents-copy').each(function () {
            // textEllipsis(this, 2);
        });


        //console.log(list, articles);

    }

    function renderArticles(list, setFocus) {
        var img_prefix = ""; //"https://www.chubb.com/_global-assets/";
        var lnk_prefix = "";//"https://www.chubb.com";
        var video_url = "https://www.youtube.com/embed/~~~?rel=0&amp;origin="+ location.protocol + "//" + location.host +"&amp;showinfo=0&amp;enablejsapi=1";
        var items = [];
        var lastIsBig = false;

        if (setFocus)
            $('articles').removeAttr("tabindex");

        $.each(list, function (i, a) {
            //console.log(i);
            //console.log(val);
            //items.push("<li>" + (i % 5 == 0 ? " large | " : "") + val.title + "</li>");

            if (i % 5 == 0) {
                //large article
                lastIsBig = true;
                items.push('<article class="filtered-search__article-big" ' + (i == 0 && setFocus ? "tabindex='-1' " : "") + ' >');
                items.push('<div class="container container-wide">');
                items.push('<picture>');
                items.push('<!--[if IE 9]><video style="display: none;"><![endif]-->');
                items.push('<source srcset="' + img_prefix + (a.bigImg ? a.bigImg : a.dimgSrc) + '" media="(min-width: 1200px)">');
                if (a.timgSrc != undefined && a.timgSrc != "") { items.push('<source srcset="' + img_prefix + (a.bigImg ? a.bigImg : a.timgSrc) + '" media="(min-width:768px) and (max-width: 1199px)">'); }
                if (a.mimgSrc != undefined && a.mimgSrc != "") { items.push('<source srcset="' + img_prefix + a.mimgSrc + '" media="(max-width:767px)">'); }
                items.push('<!--[if IE 9]></video><![endif]-->');
                items.push('<img src="' + img_prefix + (a.bigImg ? a.bigImg : a.dimgSrc) + '" alt="' + a.imgAlt + '">');
                items.push('</picture>');
                items.push('</div>');

                if (a.videoType == 'youtube' && a.videoId != undefined && a.videoId != "") {
                    items.push('<div class="filtered-search__play-video">');
                    var youtube_src = video_url.replace("~~~", a.videoId);
                    items.push('<a href="" class="button" aria-label="' + a.title + '" data-toggle="modal" data-target="#storyvideo-youtube" data-video-title="' + a.title + '" data-video-url="' + youtube_src + '"');
                    items.push('data-url="' + youtube_src.replace("~~~", a.videoId) + '">');
                    items.push('<em class="fa fa-play"></em>');
                    items.push('</a>');
                    items.push('</div>');
                }

                if (a.videoType == 'brightcove' && a.videoId != undefined && a.videoId != "") {
                    items.push('<div class="filtered-search__play-video">');
                    var brightcove_src = video_url.replace("~~~", a.videoId);
                    items.push('<a href="" class="button" aria-label="' + a.title + '" data-toggle="modal" data-target="#storyvideo-brightcove" data-video-title="' + a.title + '" data-video="video-' + brightcove_src + '"');
                    items.push('data-video-url="' + a.videoId + '">');
                    items.push('<em class="fa fa-play"></em>');
                    items.push('</a>');
                    items.push('</div>');
                }


                items.push('<div class="filtered-search__article-big-contents container container-wide">');
                items.push('<div class="filtered-search__article-big-contents-inner">');
                items.push('<span class="filtered-search__article-big-contents-subtitle">' + (mode == 'clientstories' ? a.subTitle : a.topic) + '</span>');
                items.push('<span class="filtered-search__article-big-contents-title">' + a.title + '</span>');
                items.push('<p class="filtered-search__article-big-contents-copy">' + (mode == 'clientstories' ? a.quote : a.description) + '</p>');
                items.push('<p class="filtered-search__article-big-contents-stories"><span class="filtered-search__article-big-name">' + a.title + '</span><span class="filtered-search__article-big-location">' + a.subTitle + '</span></p>');
                items.push('<a class="filtered-search__article-big-contents-link" href="' + lnk_prefix + a.linkUrl + '" target="_self" title="' + a.title + '" aria-label="Read more : ' + a.title + '" data-cta="Read more : ' + a.title + '">' + a.linkText + '</a>');
                items.push('</div>');
                items.push('</div>');

                items.push('</article>');

            }
            else {
                //small article
                lastIsBig = false;
                items.push('<article class="filtered-search__article">');
                items.push('<picture>');
                items.push('<!--[if IE 9]><video style="display: none;"><![endif]-->');
                if (a.timgSrc != undefined && a.timgSrc != "") { items.push('<source srcset="' + img_prefix + a.timgSrc + '" media="(min-width:768px) and (max-width: 1199px)">'); }
                if (a.mimgSrc != undefined && a.mimgSrc != "") { items.push('<source srcset="' + img_prefix + a.mimgSrc + '" media="(max-width:767px)">'); }
                items.push('<!--[if IE 9]></video><![endif]-->');
                items.push('<img src="' + img_prefix + a.dimgSrc + '" alt="' + a.imgAlt + '">');
                items.push('</picture>');

                items.push('<div class="filtered-search__article-contents">');
                items.push('<span class="filtered-search__article-contents-subtitle">' + (mode == 'clientstories' ? '' : a.topic) + '</span>');

                items.push('<strong class="filtered-search__article-contents-title">' + a.title +'</strong>');
                items.push('<span class="filtered-search__article-contents-location">' + a.subTitle + '</span>');
                items.push('<p class="filtered-search__article-contents-copy">' + a.description + '</p>');
                items.push('<a class="filtered-search__article-contents-link" href="' + lnk_prefix + a.linkUrl + '" target="_self" title="' + a.title + '" aria-label="Read more : ' + a.title + '"  data-cta="Read more : ' + a.title + '">' + a.linkText + '</a>');
                items.push('</div>');

                items.push('</article>');
            }

        });

        $("#filtered-search__articles").append(items.join(""));

        //remove final line before "read more" if the last article is a big one and no button is displayed
        if (lastIsBig && !$('#filtered-search__btn-read-more').is(':visible'))
            $('.filtered-search__separator').hide();

        //add a bit spacing to the last big article to oberlapping with read more
        if (lastIsBig)
            $('.filtered-search__separator').addClass('extended');
        else
            $('.filtered-search__separator').removeClass('extended');


        if (setFocus) {
            var articles = $('article[tabindex]');
            if (articles.length > 0) articles[articles.length - 1].focus();
        }


    }

    return {
        initFilteredSearch: initFilteredSearch
    };

}();

$(function () {


    //load json with articles list
    var url = $('#filtered-search').data('url');
    $.getJSON(url, function (data) {

        sessionStorage.setItem('articles', JSON.stringify(data));
        FilteredSearch.initFilteredSearch();
        let $loadMore = $('#filtered-search__btn-read-more')

        addGtmAttributes('#filtered-search__articles')
        //trigger KPI 58 on filter list item click
        $('.filtered-search__selector-items-list>li').each((_, list) => {
            let $list = $(list)
            let topicOrRegion = $list.data('topic') === undefined ? 'region' : 'topic'
            let value = $list.data(topicOrRegion)
            $list.on('click', triggerFilterEvent.bind(this, topicOrRegion, value))
        })
        //trigger KPI 7 load more button click
        $loadMore.attr({
            'data-ea': 'content link',
            'data-ec': 'cta click',
            'data-linktype': 'internal site page',
            'data-linkdesc': $loadMore.text().gtmString(),
            'data-cta': $loadMore.text().gtmString(),
            'data-linkurl': '#'
        })

    }).fail(function () {
        $('#filtered-search__articles').html('<p class="filtered-search__error-message">Error loading articles.</p>');
        $('#filtered-search__btn-read-more').hide();
    });

    if ($(window).width() >= 1200) {
        $(".filtered-search__selector-items-list").each(function () {
            var listItems = $(this).children().length % 4;
            if (listItems > 0) {
                var itemsRequiredToAppend = 4 - listItems;
                while (itemsRequiredToAppend > 0) {
                    $("<li></li>").appendTo(this).addClass('inactive');
                    itemsRequiredToAppend -= 1;
                }
            }


        });
    }

});
$(document).ready(function(e){
  $('#subnavCollapse a').click(function(event){
    event.preventDefault();
    $(this).parents('#subnavCollapse').find('li a').removeClass('active');
    $(this).addClass('active'); 
    var id = $(this).attr('href'); 	

    id=id.replace('#','');
    if($('.faq-accordion').length > 0)	{
      $('.faq-accordion .panel').removeClass('active');
      $(`.faq-accordion .panel[data-id='${id}']`).addClass('active');
    }
  });
  $('.faq-claims #subnavCollapse ul li:first-child a').addClass('active');   
});
$(function() {
    /*
        Author: Kallu sankshipth
        Made as part of the aerospace component's INITIAL COMMIT
    */
    $(".sectionAerospace .owl-carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 20,
            },
            1024: {
                items: 1,
                margin: 20,
                nav: true,
                navText: [
                    "<svg width='12px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#919191' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='45.63,100 0.375,38.087 30,0.375'/></svg>",
                    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='12px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#919191' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='0.35,0.35 28,38 0.375,75.8' /></svg>",
                ],
            },
        },
    });
    
    //AEMM-4509 GA GTM KPI 
    let aeroSpace = document.getElementById("aerospace");
    if(aeroSpace) gtmCarouselEventHandler(aeroSpace, $(aerospace).find(".titleContent .h2-title").text());
})
$(document).ready(function() {
     $('.c-agency-details').find('span.h1-heading, span.h2-heading, span.h3-heading, span.h4-heading, span.h5-heading, span.h6-heading').parent().css({'text-decoration': 'none'});
});

$(document).ready(function(e){
   
var figure = $(".video");
var vid = figure.find("video");

if(vid.length> 0) {
    vid.forEach.call(figure, function (item,index) {
        item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
        item.addEventListener('mouseout', hideVideo.bind(item,index), false);
    });
}

function hoverVideo(index, e) {
    console.log('hovered');
    vid[index].play(); 
}

function hideVideo(index, e) {
    vid[index].pause(); 
}
})

 $(".sectionAerospace .owl-carousel").owlCarousel({    
    loop:false,
    margin:0,
    nav:true,
    mouseDrag:true,
    responsive:{
                0:{
                    items:1,
                    nav:false,
                    margin:20
                },
                1024:{
                    items:1,
                    margin:20,
                    nav: true,
                    navText : ["<svg width='12px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#919191' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='45.63,100 0.375,38.087 30,0.375'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='12px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#919191' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='0.35,0.35 28,38 0.375,75.8' /></svg>"]         
                }              
            }
  });
$(function () {

	$('.accordian-button').on("click",function() {
		 var $accordianContent = $(this).parent().find('.collapse');
		   if($accordianContent.hasClass('show')){
				$accordianContent.removeClass('show');
				$(this).find('.toggler').removeClass('fa-angle-up').addClass('fa-angle-down');
		   }else{
			   $accordianContent.addClass('show');
			   $(this).find('.toggler').removeClass('fa-angle-down').addClass('fa-angle-up');
			}
	})
	
	$('.accordian').first().find('.collapse').addClass('show');
	$('.accordian').first().find('.toggler').removeClass('fa-angle-down').addClass('fa-angle-up');

});
$(document).ready(function() {
    if(window.location.href.includes('fire-protection-system-impairment-form.html?')){
        fireProtectionFormScript();
    }
    
    let fireImpairmentForm = $("form.simple-wco");
    
    handleForms(fireImpairmentForm, fireImpairmentForm.find('.form-control,.form-check-input'), $("input[name='formName']").val(), $("input[name='formType']").val(), fireImpairmentForm.find("button[type='submit']"));

    $("form.simple-wco button[type='submit']").click(function(event) {
        event.preventDefault();
        var isValid = true;

        $("form.simple-wco").find('input, select, textarea').each(function() {
            if ($(this).attr('required') && $(this).val().trim() == '') {
                isValid = false;
            } else {
                isValid = true;
            }
            if ($(this).attr('type')=='email') {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                isValid = regex.test($(this).val());
                if(!isValid){
                    alert('Provide valid email address for : '+$(this).attr('name'));
                    return isValid;
                }
            }
            if (!isValid) {
                $(this).parent('.form-group').addClass('has-error');
                alert('Missing required field : '+$(this).attr('name'));

                if ($(this).parent('.form-group').attr('data-desc') != '') {
                    $(this).parent().find('.help-block').text($(this).parent('.form-group').attr('data-desc'));
                } else {
                    $(this).parent().find('.help-block').text('Please enter valid input');
                }
            } else {
                $(this).parent('.form-group').removeClass('has-error');
                $(this).parent().find('.help-block').text('');
            }
            return isValid;
        });

        if (isValid) {
            event.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha.execute();
            });
        }
    });
});
$(function () {
    $(".simple-wco textarea").each(function () {
        var $this = $(this);
        $this.html($this.html().replace(/&nbsp;/g, ''));
    });
});

function onWCOFormSubmit(token) {
    var isValid = true;
    //var selectedTimeZone;
    //var isSprinkler = $('#isSprinklerPage').val() === "Sprinkler" ? true : false;
    var isSprinkler = $("input[name='isSprinklerPage']").val() === "Sprinkler" ? true : false;
    if (isValid) {
		var funcParams = [];
		if(isSprinkler){	
			if(window.location.hash !== "#restoration" ) {
				let primaryKey = "FireImpairment" + new Date().getTime();
				$("input[name='PrimaryKey']").val(primaryKey);
			}
			
			let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			let cityInTimeZone = timezone;
			
			moment.tz.setDefault(cityInTimeZone);
			
			
			let formatedDateSystem = moment($("input[name='Date System Impaired']").val()).tz("America/Chicago").format('YYYY-MM-DD HH:mm');
			let formatedExpectedEndDate = moment($("input[name='Expected End Date of Impairment']").val()).tz("America/Chicago").format('YYYY-MM-DD HH:mm');
			
			if(cityInTimeZone == "America/Chicago"){
				$("input[name='DateImpaired']").val($("input[name='Date System Impaired']").val());
				$("input[name='ExpectedEndDate']").val($("input[name='Expected End Date of Impairment']").val());
			} else {
				$("input[name='DateImpaired']").val(formatedDateSystem);
				$("input[name='ExpectedEndDate']").val(formatedExpectedEndDate);
			}
							
			$("input[name='TimeStamp']").val(moment(new Date()).tz('America/Chicago').format('YYYY-MM-DD HH:mm'));
			
			let percentImpaired = $("input[name='PercentImpaired']").val();
			let lengthofimpairment = $("select[name='ExpectedLength']").val();
			
			if($("input[name='DateRestored1']").val() != ''){
				let cstDateRestored = moment($("input[name='DateRestored1']").val()).tz('America/Chicago').format('YYYY-MM-DD HH:mm');
				$("input[name='DateRestored']").val(cstDateRestored);
			}
						
			if(percentImpaired > 10 && (lengthofimpairment > 8 || lengthofimpairment == ">1 Day" || lengthofimpairment == ">1 Week")) {
				$("input[name='criticalemail']").val(true);
			}
	
		}       
        $("form.simple-wco").find('input, select, textarea').each(function() {
            var funcParams1 = "";
            if ($(this).attr('type') != 'radio' && $(this).attr('type') != 'checkbox') {
                var name = $(this).attr('name');
                if (typeof $(this).attr('name') == 'undefined') {
                    name = "";
                }
                var placeholder = $(this).attr('placeholder');
                if (typeof $(this).attr('placeholder') == 'undefined') {
                    placeholder = "";
                }
                var value = $(this).val();
                if (typeof $(this).val() == 'undefined') {
                    value = "";
                }
                var isemail = false;
                if ($(this).attr('data-email') == 'true') {
                    isemail = true;
                }
            } else {
                if ($(this).is(':checked')) {
                    var name = $(this).attr('name');
                    if (typeof $(this).attr('name') == 'undefined') {
                        name = "";
                    }
                    var placeholder = $(this).attr('placeholder');
                    if (typeof $(this).attr('placeholder') == 'undefined') {
                        placeholder = "";
                    }
                    var value = $(this).val();
                    if (typeof $(this).val() == 'undefined') {
                        value = "";
                    }
                    var isemail = false;
                    if ($(this).attr('data-email') == 'true') {
                        isemail = true;
                    }
                }
            }
            if (name && name!='file') {
                funcParams1 = {
                    "Name": name,
                    "Value": value,
                    "Placeholder": placeholder,
                    "IsEmail": isemail
                };
                funcParams.push(funcParams1);
            }

        });

        var apiData = {};
        apiData['jsonData'] = funcParams;
        apiData['grecaptcharesponse'] = token; 

        $.ajax({
            type: "POST",
            url: isSprinkler ? "/bin/aem-chubb-global/contactus" : "/bin/aem-chubb-global/static/email-api",
            data: {
                apiData: JSON.stringify(apiData)
            },
            success: function(data) {
                window.location = encodeURI(
							`${$(
								"input[id='ThankYouPage']"
							).val()}.html?formName=${$(
								"input[name='formName']"
							).val()}&formType=${$(
								"input[name='formType']"
							).val()}&formSubmitted=1`
						);

            },
            error: function(e) {
                window.location= encodeURI(
                        `${$("input[id='ErrorPage']").val()}.html?formName=${$(
                            "input[name='formName']"
                        ).val()}&formType=${$(
                            "input[name='formType']"
                        ).val()}&formSubmitted=2`
                    );
            }
        });
        grecaptcha.reset();
    }
}

function fireProtectionFormScript() {
     //grab the entire query string
     var query = document.location.search.replace('?', '');
     query = window.atob(query);
     query = unescape(query);
     //extract each field/value pair
     query = query.split('&');
     if(query.length>1){
         window.location = "#restoration";
         $("input[name='Date System Restored']").prop('required', true);
         $("input[name='Time System Restored']").prop('required', true);
         $("input[name='Email']").attr('data-email', false);
         $("input[id='ThankYouPage']").val('/us-en/online-forms/thank-you-fire-protection');
         $("input[id='Fire Restoration']").val('No');
         $(".restoration").css("display","block");
     }
     
     const checkedValues = ["Sprinklers", "Standpipe", "Fire Hoses", "Underground Fire Service Main(s)", "Fire Pump(s)", "Water Storage Tank(s)", "Hydrant(s)", "Water Spray Fixed System(s)",
     					 "Foam Water Sprinkler", "Water Mist System(s)", "Fire Service Control Valve(s)", "Water Supply", "Smoke Detectors", "Heat / Thermal Detectors", "Fire Alarm Panel",
     					 "Fire Alarm Connection", "Public Fire Department Notified", "Ongoing Patrol of Area", "Hazardous Operations Stopped", "Monitored by Heat/Smoke Detection",
     					 "Standpipe System Available", "Fire Extinguishers Available", "Hydrant Connected to Sprinkler Riser","Hot Work Prohibited", "Smoking Restricted", 
     					 "Tag Impairment System Implemented", "Alarm Companies Notified", "Supervisors in the Areas Affected Notified", "Others","Preplanned", "Emergency"];

     //run through each pair
     for (var i = 0; i < query.length; i++) {

         //split up the field/value pair into an array
         var field = query[i].split("=");

         //target the field and assign its value
         $("input[name='" + field[0] + "'], select[name='" + field[0] + "']").val(field[1]);
         if(checkedValues.includes(field[1]))
             $("input[name='" + field[0] + "']").attr("checked","checked")
     }

     if($("input[name='Other']").is(":checked"))
         $("input[name='Others']").css("display","block");

    $("#wco input:not(:hidden), select").each((_, input) => {
    	let $input = $(input)
    	let isRestorationInput = $input.closest('#restoration').length > 0

    	if (isRestorationInput) return;

      if ($input.attr('type') === 'checkbox' || $input.is('select'))
    	$input.attr('disabled', '')
      else
    	$input.attr('readonly', '')
    })

 };
$(document).ready(function() {
    $("form.simple-cica button[type='submit']").click(function(event) {
        event.preventDefault();
        var isValid = true;

        $("form.simple-cica").find('input, select, textarea').each(function() {
            if ($(this).attr('required') && $(this).val() == '') {
                isValid = false;
            } else {
                isValid = true;
            }
            if ($(this).attr('type')=='email') {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                isValid = regex.test($(this).val());
                if(!isValid){
                    alert('Provide valid email address for : '+$(this).attr('name'));
                    return isValid;
                }
            }
            if (!isValid) {
                $(this).parent('.form-group').addClass('has-error');
                alert('Missing required field : '+$(this).attr('name'));

                if ($(this).parent('.form-group').attr('data-desc') != '') {
                    $(this).parent().find('.help-block').text($(this).parent('.form-group').attr('data-desc'));
                } else {
                    $(this).parent().find('.help-block').text('Please enter valid input');
                }
            } else {
                $(this).parent('.form-group').removeClass('has-error');
                $(this).parent().find('.help-block').text('');
            }
            return isValid;
        });

        if (isValid) {
            event.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha.execute();
            });
        }
    });
});

$(document).ready(function() {
    $("#cache-clear").click(function(event) {
        event.preventDefault();
        if ($('#clear-url').val().trim() != "") {
            $.ajax({
                type: "POST",
                url: "/bin/akamai-cache-purge",
                data: {purgeUrl:$('#clear-url').val()},
                success: function(data) {
                    console.log('data.result' + data);
                    $('.messageholder').removeClass('success fail');
                    $('.messageholder').html('Cache cleared successfully!');
                    $('.messageholder').addClass('success');
                },
                error: function(e) {
                    console.log(e);
                    $('.messageholder').removeClass('success fail');
                    $('.messageholder').html('Cache clear failed!');
                    $('.messageholder').addClass('fail');
                }
            });
        } else {
            $('.messageholder').removeClass('success fail');
            $('.messageholder').html('Please enter URL to clear cache');
            $('.messageholder').addClass('fail');
            return false;
        }
    });
});
$(() => addGtmAttributes('.static-content'))
$(document).ready(function() {
    let runOnce = false;
   var urlParams = window.location.search.substring(1).split('&').reduce(function (q, query) {
        var chunks = query.split('=');
        var key = chunks[0];
        var value = decodeURIComponent(chunks[1]);
        value = isNaN(Number(value))? value : Number(value);
        return (q[key] = value, q);
    }, {});    
    var searchTerm =  urlParams.searchTerm;
    var resultSet = (urlParams.resultSet == null) ? 0 : urlParams.resultSet; 
$('.search-result-header').hide();
                    $('.search-result-pagination').hide();
    if (searchTerm){
        document.getElementById("searchTermResultsPage").value=searchTerm;
        resultFormSubmit();
    }
    var totalResults = 0;
    $("#searchTermResultsPageForm #submitSearch").on("click", function(){
        var searchText = document.getElementById("searchTermResultsPage").value
        if(searchText.trim().length > 0) {
            resultFormSubmit();
            updateUrlSearchTerm();
        }
    });

    searchGTMEvent = searchEventTrigger($('#searchTermResultsPageForm'), $('#submitSearch'))
    $("#searchTermResultsPageForm #searchTermResultsPage").keypress(function (se) {
        if (se.which == 13) {
            se.preventDefault();
            if(se.target.value.trim().length > 0) {
                resultFormSubmit();
                updateUrlSearchTerm();
                searchGTMEvent();
            }
        }
    });

    $(document).on('click', '.search-result-pagination .pagenation a.pagenationLink', function(e){
        e.preventDefault();
        $('.search-result-list .list-unstyled').empty();
        var startingResultsFrom = (($(this).attr('value') -1) * 10);
        var urlPararms = window.location.href.split("/");
		  var  searchAPI = document. getElementById("searchAPI").value;

			var searchUrl =    document.getElementById("searchUrl").value;
        if($('.search-result-pagination .pagenation a').hasClass('current')){
            $('.search-result-pagination .pagenation a').removeClass('current');
            $(this).addClass('current');
        }

        $.ajax({
            url : searchUrl,
            type : 'GET',
            data:{
                "searchTerm":searchTerm,
                "resultSet":startingResultsFrom,
                "hostName":urlPararms[2],
                "pageLocale":urlPararms[3],
				"searchAPI":searchAPI
            },

            success : function(responseData){
                var data = responseData;
                $('.search-result-list').show();
                startNumber = startingResultsFrom + 1;
                endNumber = startingResultsFrom + data.solrResultDocumentList.length;
                var resultDiv = $('.search-result-list .list-unstyled');
                 $('.search-result-pagination').show();

                $('.search_results_number_title').html("");

               var pageNationMessage  = $('#pagenation-message').val();

                    pageNationMessage  = pageNationMessage.replace('{totalNumber}',totalResults);
                    pageNationMessage  = pageNationMessage.replace('{starting}',startNumber);
                   pageNationMessage  =  pageNationMessage.replace('{last}',endNumber);

                    $('.search_results_number_title').append('<p>'+pageNationMessage+'</p>');


                $.each(data.solrResultDocumentList, function(key, item) {
                    var liString = '<li><h4><a href="'+item.url+'">'+item.title+'</a></h4>'+ '<p>'+item.content+'</p>'+ '<a href="'+item.url+'">'+item.displayUrl+'</a>' + '</li>';
                    resultDiv.append(liString);
                });

                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            },
            error : function(obj) {
                var resultDiv = $('.search-result-list .list-unstyled');
                resultDiv.html("");
                var liString = '<p>'+$('#no-results-found').val()+'</p>';
                resultDiv.append(liString);
                 $('.search-result-list').hide();
            }
        });
    });

    function updateUrlSearchTerm() {
        var newurl = window.location.href.split('?')[0] + '?searchTerm=' + searchTerm;
        window.history.pushState({path: newurl}, '', newurl);
    }

    function resultFormSubmit (){
        searchTerm =   document.getElementById("searchTermResultsPage").value;
	    searchAPI =    document. getElementById("searchAPI").value;
	    var searchUrl =    document. getElementById("searchUrl").value;
        if(searchTerm.trim().length){
            searchTerm = searchTerm.replace(/</g, "&lt;").replace(/>/g, "&gt;");
             $('.search-result-header').show();
            document.getElementById("search-result-header").innerHTML="";

            $('.search-result-header').append('<p>' +$('#resultFound-message').val() +' : <span>'+searchTerm+'</span></p>');
            var urlPararms = window.location.href.split("/");
            $.ajax({
                url : searchUrl,
                type : 'GET',
                data:{
                    "searchTerm":searchTerm,
                    "resultSet":resultSet,
                    "hostName":urlPararms[2] ,
                    "pageLocale":urlPararms[3],
				     "searchAPI":searchAPI
                },
                success : function(responseData){
                    var data = responseData;
                    $('.search-result-list').show();

                    totalResults = data.totalCount;
                    startNumber = resultSet + 1;
                    endNumber = resultSet+data.solrResultDocumentList.length;

                    var resultDiv = $('.search-result-list .list-unstyled');
                    resultDiv.html("");

                    var pagenationDiv =$('.search-result-pagination .pagenation');
                    pagenationDiv.html("");
                    $('.search-result-pagination').show();
                     $('.search-result-pagination').show();
                    $('.search_results_number_title').html("");



                    var pageNationMessage  = $('#pagenation-message').val();

                   pageNationMessage  = pageNationMessage.replace('{totalNumber}',totalResults);
                   pageNationMessage  = pageNationMessage.replace('{starting}',startNumber);
                    pageNationMessage  = pageNationMessage.replace('{last}',endNumber);

                    $('.search_results_number_title').append('<p>'+pageNationMessage+'</p>');


                    $.each(data.solrResultDocumentList, function(key, item) {
                        var liString = '<li><h4><a href="'+item.url+'">'+item.title+'</a></h4>'+ '<p>'+item.content+'</p>'+ '<a href="'+item.url+'">'+item.displayUrl+'</a>' +'</li>';
                        resultDiv.append(liString);
                    });

                    var pagenationCount = Math.floor(totalResults / 10) + (totalResults % 10 > 0 ? 1 : 0);
                    var pagenationHtml = '<li><a href="#" class="pagenationLink current" value="1">1</a></li>';

                    for (let i = 1; i <= pagenationCount; i++){
                        if (i != 1){
                            pagenationHtml = pagenationHtml+ '<li><a href="#" class="pagenationLink" value="'+i+'">'+i+'</a></li>';
                        }

                    }

                    $('.pagenation').append(pagenationHtml);

                    if (totalResults==0){

                        $('.search-result-header').html('<p>'+$('#no-results-found').val()+' "<span><strong>'+searchTerm+'</strong> </span>"</p>');
                        $('.search-result-pagination').hide();
                        	resultDiv.html("");
                        $('.search-result-list').hide();


                    }

                    if (!runOnce) {
                        addSearchEvents($('.c-searchresults'))
                        runOnce = true
                     }
                },
                error : function(obj) {


                    var liString = '<p>'+$('#no-results-found').val()+'</p>';
                    $('.search-result-list .list-unstyled').append(liString);
                     $('.search-result-header').hide();
                    $('.search-result-pagination').hide();
                     $('.search-result-list').hide();
                }
            });
        }else{
				  $('.search-result-list .list-unstyled').html( $('#error-message').val());
             $('.search-result-header').hide();
                    $('.search-result-pagination').hide();
             $('.search-result-list').hide();
			}
}
});


$(document).ready(function(){
     let readMoreBtn = $('a#read_more');
     readMoreBtn.on('click', function() {
         setTimeout(function(){
             changeTargetAndTitle($(this).closest('#cards-parent').find('#articles'), $('a'))
         },1500)
         
     });

    runGtmScript(readMoreBtn);
    addGtmAttributes($(".c-related-resource-articles"));
 });

$('#category-drop .category-redirect select').on('change',function(e){
if($(this).val()!="" || $(this).val()!='#')
window.location.href=$(this).val();
});

!(function(root, $, undefined) {
    $(function() {
        // Grab data sync
        $.ajaxSetup({async:false});
      //var strpath_articles = "/"+window.path.split("/")[3]+"-"+window.path.split("/")[4]+"/"+window.path.split("/")[5]+"/_articles.json";
      var strpath_articles = document.getElementById('hdnArticlePath') ? document.getElementById('hdnArticlePath').value: '';
      
        // Fetch JSON
      // $.getJSON("/us-en/about-chubb/_articles.json", parseFilters)
      if(strpath_articles) {
        $.getJSON(strpath_articles, parseResources)
        //$.getJSON("/us/en/about-chubb/insights/articles.json", parseResources)
            .fail(function (jqxhr, status, error) {
                console.error(status, error)
            }
        );
        }
   //var strpath_filters = "/"+window.path.split("/")[3]+"-"+window.path.split("/")[4]+"/"+window.path.split("/")[5]+"/_filters.json";
      var strpath_filters = document.getElementById('hdnFilterPath') ? document.getElementById('hdnFilterPath').value : '';
      // $.getJSON("/us/en/about-chubb/insights/filters.json", parseFilters)
      if(strpath_filters) {
        $.getJSON(strpath_filters, parseFilters)
            .fail(function (jqxhr, status, error) {
                console.error(status, error)
            }
        );
        }
        // Parsing functions
        function parseResources(data) {
            const resources = data;
            window.resources = resources;
        }
        function parseFilters(data) {
            const filters = data;
            window.filters = filters;
        }
        // Set it to global
        const resources = window.resources,
              filters = window.filters;
        // Helpers
        function slugify(text) {
            return  text ? text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "-and-")
                .replace(/\//g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, "") : text; 
        }
        function updateToLowercase(text) {
            return  text ? text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace(/&/g, "")
                .replace(/\//g, "")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "")
                .replace(/^-+/, "")
                .replace(/-+$/, "") : text; 
        }
        const initialLoad = resources && resources.filter(function(resource) {
            if(resource.showonload) {
                return resource;
            }
        }).slice(0,12);
        // Build our center blocks
        function showResources(data) {
            $('.frontdoor__blocks').empty();
            if(data && data.length > 0) {
                    data.map(function(elem) {
		    let ctatext = elem.ctatext !== null ? elem.ctatext : "Read More";
                    let center = '<article class="clearfix frontdoor__block" data-title="'+elem.title+'">' +
                        '<figure class="block__img" alt="'+elem.alttext +'" style="background-image: url(\''+elem.thumbnail+'\');"></figure>' +
                        '<figure class="block__img block__img--mob" alt="'+ elem.alttext+ '"' +
                            'style="background-image: url(\'' + (elem.mobthumbnail ? elem.mobthumbnail : elem.thumbnail) + '\');"></figure>' +
                        '<section class="block__content">' +
                            '<h3 class="block__title">'+elem.title + '</h3>' +
                            '<p class="block__copy">'+elem.description + '</p>' +
                            '<a target="_self"href="'+elem.link+'" data-cta="Explore: '+ elem.title +'"' +
                            'class="frontdoor-btn block__btn">'+ ctatext +'<svg class="btn-rsa"' +
                            'xmlns="http://www.w3.org/2000/svg" viewBox="3590.646 9513.646 6.061 10.707">'+ 
                            '<path id="Path_2083" data-name="Path 2083" class="carat" d="M412.5,194.5l5,5-5,5"' +
                            'transform="translate(3178.5 9319.5)"/> </svg></a>'
                        '</section>' +
                    '</article>';
                    // Stick it to our app
                    let hook = document.querySelector('.frontdoor__blocks');
                    hook.insertAdjacentHTML('beforeend', center);
                });
            }
        }
        showResources(initialLoad);
        // filters sorting function
        filters && filters.forEach(function(item, i){
            const filterItem = item.values;
            filterItem.sort(function(a, b) {
                let initial = a.name.toLowerCase(),
                    next = b.name.toLowerCase();
                if (initial < next)
                    return -1;
                if (initial > next)
                    return 1;
                return 0;
                }
            );
            filters[i].values = filterItem;
        });
        // display filters
        filters && filters.forEach(function(item) {
            const filterItem = item.values;
            if(filterItem && filterItem.length) {
                let filterCat ='<div class="filter-title">'+ item.categoryfiltername +':</div> <ul class="checks-list">';
                filterCat = filterCat + '<li class="frontdoor-check check--' + slugify("All") + '">' +
                       '<input data-filterType="' + updateToLowercase(item.categoryname) +'"' +
                            'data-check="'+slugify('All')+'"' +
                            'data-displayName="'+slugify('All')+'"' +
                            'id="check-' +slugify(item.categoryname)+'-'+ slugify("All") + '"' +
                           'name="check-' +slugify("All")+'"' +
                            'type="checkbox" class="topic__check" value="All">'+
                        '<label for="check-'+ slugify(item.categoryname)+'-' + slugify("All")+ '" class="topic__label">'+ item.alltext +'</label>' +
                    '</li>';
                filterItem.forEach(function(elem) { 
                    let cat = '<li class="frontdoor-check check--' +slugify(elem.name)+ '' + (elem.active ? '' : ' is-disabled') +'">' +
                        '<input data-filterType="' + updateToLowercase(item.categoryname) +'"' +
                            (elem.active ? '' : ' is-disabled') +
                            'data-check="'+slugify(elem.name)+ '"' +
                            'data-displayName="'+elem.name+'"' +
                            'id="check-' +slugify(item.categoryname)+'-'+ slugify(elem.altName) +'"' +
                            'name="check-' +slugify(elem.name) + '"' +
                            'type="checkbox" class="topic__check" value=' + elem.name + '">'+
                            '<label for="check-'+ slugify(item.categoryname)+'-' + slugify(elem.altName)+ '"'+
                            'class="topic__label">' + elem.name + '</label>' +
                            '</li>';
                    filterCat = filterCat + cat;
                });
                filterCat = filterCat + '</ul>';
                // Stick it to our app
                let hook = document.querySelector('.topic__fieldset');
                hook.insertAdjacentHTML('beforeend', filterCat);
            }
            
        });
        function handleChecks(event) {
            // Grab checks
            const checks = $('.topic__check'),
                  checksArr = [],
                  filtersChecked= {};
                // add active/inactive
            if($('.topic__check:checked') && $('.topic__check:checked').length > 0) {
                checks.each(function() {
                    const active = $(this).attr('data-check'),
                        filterType= $(this).attr('data-filterType'),
                        block = $('.block--'+active);
                    const filterVal = $(this).attr('data-displayname');
                    if (this.checked) {
                        // $('.block--'+filterVal).removeClass('is-inactive');
                        // $('.block--'+filterVal).addClass('is-active');
                        checksArr.push(this.value);
                        if(!filtersChecked[filterType]) {
                            filtersChecked[filterType] = [];
                        }
                        filtersChecked[filterType].push(filterVal);
                    } else {
                        // $('.block--'+filterVal).addClass('is-inactive');
                    }
                });
                console.log("new filters " , filtersChecked );
                updateDataByFilters(filtersChecked);
            } else {
                showResources(initialLoad);
            }
            if (event) {
                if (checks.is(':checked') === false) {
                    $('.frontdoor__block').removeClass('is-active is-inactive');
                } else {
                    window.dataLayer.push({
                         event: 'filter',
                         by: checksArr
                    });
                }
            }
        }
        function isIdentical(a, b){
            return JSON.stringify(a) === JSON.stringify(b);
        }
        
        function contains(array, obj){
            let exists = false;
            array.map(function(cur) {
                  if(isIdentical(cur, obj)) {
                        exists = true;
                       return;
                  }
            });
            return exists;
        }
        function updateDataByFilters(filtersChecked) {
            result = [];
            const resources = window.resources.slice();
            resources.forEach(function(resource) {
                /* filtersChecked.forEach(item => {
                    const filterTag = item.value;
                    if((filterTag === "All" &&  resource[item.type] != null) || 
                    (resource[item.type] && resource[item.type].toLowerCase() === filterTag.toLowerCase())) {
                        if(!contains(result, resource)) {
                            result.push(resource);
                        }
                        return;
                    }
                }); */
                resourceContains = false;
                const filtersCheckedKeys = Object.keys(filtersChecked);
                for(var i = 0; i < filtersCheckedKeys.length; i++){
                    var filterKey = updateToLowercase(filtersCheckedKeys[i]);
                    if(resource[filterKey] && (filtersChecked[filterKey].indexOf("all") > -1 ||
                    filtersChecked[filterKey].indexOf(resource[filterKey]) > -1)) {
                        resourceContains = true;
                    } else {
                        resourceContains = false;
                        break;
                    }
                }
                if(resourceContains && !contains(result, resource)) {
                    result.push(resource);
                }
            });
            console.log("result length   ", result.length);
            showResources(result);
        }
        // Filter handler
        $('.topic__check').on('change', function(event) {
            handleChecks(event);
        });
        // Mob filter rest
        function handleReset() {
            $('.frontdoor-cats')[0].reset();
            handleChecks();
            $('.frontdoor__block').removeClass('is-active is-inactive');
        }
        // Mob Filter handler
        $('.filter__topic').on('click', '.main-filter-title, .checks-btn--close, .checks-btn--submit', function(e) {
            e.preventDefault();
            const topic = '.filter__topic',
                  title = '.filter__topic .filter-title',
                  fieldset = '.topic__fieldset',
                  form = '.frontdoor-cats';
            // Reset jumpers
            /* $(`${jumper}`).hasClass('is-active') ? $(`${jumperTitle}`).trigger('click') : false; */
            // Handle active
            $(title + ',' + fieldset + ',' + topic  + ',' + form ).toggleClass('is-active');
            // If reset, reset it all & handle checks
            this.classList.contains('checks-btn--close') ? handleReset() : false;
        });
    });
    // Handle reset of mob actives
    $(window).resize(function () {
        if (window.innerWidth > 767) {
            const topic = '.filter__topic',
                  title = '.filter-title',
                  fieldset = '.topic__fieldset',
                  form = '.frontdoor-cats';
            $(title + ',' + fieldset + ',' + topic  + ',' + form ).removeClass('is-active');
        }
    });
}(this, jQuery));
$(() => addGtmAttributes('.static-content-insights'))
$(function () {
    $('.video-list-carousel').each(function() {
        var currentCarousel = $(this);
        currentCarousel.addClass('owl-carousel owl-theme')
        var vCarousel = currentCarousel.owlCarousel({
            loop: false,
            nav: true,
            items: 1
        });
        var carouselLength = currentCarousel.find('.owl-item').length - 1;
        gtmCarouselEventHandler(this, currentCarousel.closest('.video-list').find(".h3-title").text());

        // Listen to owl events:
        vCarousel.on('change.owl.carousel', function(event) {
            var ele = event.target;
            var activeSlide = $(ele).find('.owl-item.active');
            var video = activeSlide.children().find('.vid-carousel__video');
            var videoPlayer = $(video).get(0);
            var iframe = activeSlide.children().find('.vid-carousel__iframe');
            var currentIframeVideoPlayer = videoPlayers[$(iframe).attr('id')];
            var brightcove = activeSlide.children().find('.vid-carousel__brtcove-video');
            var brightCovePlayer = brtCoveVideoPlayers[$(brightcove).attr('id')];
            if (event.property.value == 0) {
                if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                    videoPlayer.pause();
                }
                if (iframe.length > 0) {
    
                    /** reload the iframe to update the blur image **/
                    /* var iframeWrapper = $(activeSlide).prev().find('.vid-carousel__img-wrapper');
                    var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                    iframeWrapper.empty().append(vidoePlayerIframe.clone()); */
    
    
                    if (currentIframeVideoPlayer && typeof currentIframeVideoPlayer.pauseVideo === "function" 
                        && typeof currentIframeVideoPlayer.stopVideo === "function") {
                        if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                            currentIframeVideoPlayer.pauseVideo();
                            currentIframeVideoPlayer.stopVideo();
                        }
                    }
                    else {
                        var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                        playerIframe.attr("src", playerIframe.attr("src"));
                    }
                }  
    
                if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                    brightCovePlayer.pause();
                }
            }
            else if (event.property.value == carouselLength) {
                if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                    videoPlayer.pause();
                }
                if (iframe.length > 0) {
    
                    /** reload the iframe to update the blur image **/
                    /* var iframeWrapper = $(activeSlide).next().find('.vid-carousel__img-wrapper');
                    var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                    iframeWrapper.empty().append(vidoePlayerIframe.clone()); */
    
                    if (currentIframeVideoPlayer && typeof currentIframeVideoPlayer.pauseVideo === "function" 
                        && typeof currentIframeVideoPlayer.stopVideo === "function") {
                        if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                            currentIframeVideoPlayer.pauseVideo();
                            currentIframeVideoPlayer.stopVideo();
                        }
                    }
                    else {
                        var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                        playerIframe.attr("src", playerIframe.attr("src"));
                    }
                } 
                if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                    brightCovePlayer.pause();
                }
            }
            else {
                if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                    videoPlayer.pause();
                }
                if (iframe.length > 0) { 
    
                    /** reload the iframe to update the blur image **/
                    /* var iframeWrapper = event.item.index < event.property.value ? $(activeSlide).next().find('.vid-carousel__img-wrapper') : $(activeSlide).prev().find('.vid-carousel__img-wrapper');
                    var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                    iframeWrapper.empty().append(vidoePlayerIframe.clone()); */
    
                    if (currentIframeVideoPlayer && typeof currentIframeVideoPlayer.pauseVideo === "function" 
                        && typeof currentIframeVideoPlayer.stopVideo === "function") {
                        if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                            currentIframeVideoPlayer.pauseVideo();
                            currentIframeVideoPlayer.stopVideo();
                        }
                    }
                    else {
                        var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                        playerIframe.attr("src", playerIframe.attr("src"));
                    }
                } 
                if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                    brightCovePlayer.pause();
                }
            }
        });

    });

    /* var carouselLength = $('.vid-carousel .carousel-item').length - 1;
    if (carouselLength) {
        $('.carousel_control.prev').addClass('disable-carousel-control');
    }  */

    var vidCarousel = $('.video-carousel').carousel({ wrap: false });
    vidCarousel.on('slide.bs.carousel', function (e) {
        var ele = e.target;
        var activeSlide = $(ele).find('.owl-item.active');
        var video = activeSlide.children().find('.vid-carousel__video');
        var videoPlayer = $(video).get(0);
        var iframe = activeSlide.children().find('.vid-carousel__iframe');
        var currentIframeVideoPlayer = videoPlayers[$(iframe).attr('id')];
        var brightcove = activeSlide.children().find('.vid-carousel__brtcove-video');
        var brightCovePlayer = brtCoveVideoPlayers[$(brightcove).attr('id')];
        if (e.to == 0) {
            $('.carousel_control.prev').addClass('disable-carousel-control');
            $('.carousel_control.next').removeClass('disable-carousel-control');
            if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                videoPlayer.pause();
            }
            if (iframe.length > 0) {

                /** reload the iframe to update the blur image **/
                var iframeWrapper = $(activeSlide).prev().find('.vid-carousel__img-wrapper');
                var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                iframeWrapper.empty().append(vidoePlayerIframe.clone()); 


                if (currentIframeVideoPlayer && currentIframeVideoPlayer.stopVideo === "function") {
                    if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                        currentIframeVideoPlayer.pauseVideo();
                    }
                }
                else {
                    var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                    playerIframe.attr("src", playerIframe.attr("src"));
                }
            }  

            if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                brightCovePlayer.pause();
            }
        }
        else if (e.to == carouselLength) {
            $('.carousel_control.prev').removeClass('disable-carousel-control');
            $('.carousel_control.next').addClass('disable-carousel-control');
            if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                videoPlayer.pause();
            }
            if (iframe.length > 0) {

                /** reload the iframe to update the blur image **/
                var iframeWrapper = $(activeSlide).next().find('.vid-carousel__img-wrapper');
                var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                iframeWrapper.empty().append(vidoePlayerIframe.clone());

                if (currentIframeVideoPlayer && currentIframeVideoPlayer.stopVideo === "function") {
                    if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                        currentIframeVideoPlayer.pauseVideo();
                    }
                }
                else {
                    var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                    playerIframe.attr("src", playerIframe.attr("src"));
                }
            } 
            if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                brightCovePlayer.pause();
            }
        }
        else {
            $('.carousel_control.prev').removeClass('disable-carousel-control');
            $('.carousel_control.next').removeClass('disable-carousel-control');
           
            if (video.length > 0 && (videoPlayer.played.length > 0) && !videoPlayer.paused) {
                videoPlayer.pause();
            }
            if (iframe.length > 0) { 

                /** reload the iframe to update the blur image **/
                var iframeWrapper = e.from < e.to ? $(activeSlide).next().find('.vid-carousel__img-wrapper') : $(activeSlide).prev().find('.vid-carousel__img-wrapper');
                var vidoePlayerIframe = iframeWrapper.find(".vid-carousel__iframe");
                iframeWrapper.empty().append(vidoePlayerIframe.clone());

                if (currentIframeVideoPlayer && currentIframeVideoPlayer.stopVideo === "function") {
                    if (currentIframeVideoPlayer.getPlayerState() == 3 || currentIframeVideoPlayer.getPlayerState() == 1) {
                        currentIframeVideoPlayer.pauseVideo();
                    }
                }
                else {
                    var playerIframe = $(activeSlide).find(".vid-carousel__iframe");
                    playerIframe.attr("src", playerIframe.attr("src"));
                }
            } 
            if (brightcove.length && (!brightCovePlayer.paused() || brightCovePlayer.ended())) {
                brightCovePlayer.pause();
            }
        }
    });

});
$(document).ready(function (e) {
    $('.intro-container-carousel').each(function () {
        var currentCarousel = $(this);

        var modals = currentCarousel.find('.modal');
        $(modals).each(function () {
            // Move the modal from carousel item to parent
            $(this).appendTo(currentCarousel.parent());
        });

        var carouselItemsCount = 1;
        var enableNav = false;
        var totalItemsCount = $(this).find('.item').length;
        if (window.innerWidth > 767) {
            carouselItemsCount = $(this).hasClass('three-item') ? 3 : 1;
            enableNav = ((carouselItemsCount == 3 && totalItemsCount < 4) || (carouselItemsCount == 1 && totalItemsCount < 2)) ? false : true;
        }

        currentCarousel.addClass('owl-carousel owl-theme');
        var vCarousel = currentCarousel.owlCarousel({
            loop: (carouselItemsCount == 3) ? false : true,
            margin: (carouselItemsCount == 3) ? 20 : 5,
            nav: enableNav,
            items: carouselItemsCount
        });
        
        gtmCarouselEventHandler(this, currentCarousel.closest('.c-video-image-carousel').find('.h2-title').text());
    });
});

$(function () {
     let webinars = $('.cyber-webinar')

     if (webinars.length === 0) return

     webinars.each((_, webinar) => {
          let $webinar = $(webinar)
     
          let registerBtn = $webinar.find('.cyber-webinar__register .btn')
          let webinarTitle = $webinar.find('.h3-title').text()
          let webinarSelect = $webinar.find('.cyber-webinar__register select')

          function addBtnAttrs(value) {
               if (value != 'default') {
                    registerBtn.attr('href', value)                    
                    registerBtn.removeClass('disableBtn')
                    runGtmScript(registerBtn, webinarTitle)
                    changeTargetAndTitle(registerBtn, registerBtn)
               } else {
                    registerBtn.removeAttr('href').removeAttr('data-cta')
                         .removeAttr('data-ea').removeAttr('data-ec')
                         .removeAttr('data-linktype').removeAttr('data-portal')
                         .removeAttr('data-persona').removeAttr('data-portalea')
                         .removeAttr('data-linkdesc').removeAttr('rel')
                         .removeAttr('data-linkurl')
     
                    registerBtn.addClass('disableBtn')
               }
          }

          if (webinarSelect.length !== 0)
               addBtnAttrs(webinarSelect.val())
     
          webinarSelect.on('change', function() {
               addBtnAttrs($(this).val())
          })
     })
})

$(document).ready(function(e){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            }
        }
    });
/**  carousel for mobile view start **/
var windowWidth = 0;
$(function () {
  $(window).on('load', function () {
        $(this).resize();
        windowWidth = window.innerWidth;
    });
    $(window).on('resize',function () {
        if (windowWidth != window.innerWidth){
            windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                $('.mobile-carousel').addClass('owl-carousel owl-theme');
                $('.mobile-carousel').owlCarousel({
                    items: 1
                });
            } else {
                $('.mobile-carousel').trigger('destroy.owl.carousel');
                $('.mobile-carousel').removeClass('owl-carousel owl-theme');
            }
        }
    });
});
/**  carousel for mobile view end **/

    // owl carousel
    $('.review-carousel').owlCarousel({
      loop:true,
      nav:true,
      margin:40,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          650:{
              items:2,
              nav:true
          },
          1080:{
              items:3,
              nav:true
          }
      }
    });
    $(".info-card-content.owl-carousel").owlCarousel({
        margin: 20,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                loop: true,
                nav:true
            },
            768:{
                items: 3,
                loop: true,
                nav:true
            },
            1200:{
                items:3,
                nav: true,
                loop: true
            }
        },
        navText: ["<em class='fa fa-angle-left' aria-hidden='true'></em>", "<em class='fa fa-angle-right' aria-hidden='true'></em>"],
    }); 
    $('.main-carousel-main').owlCarousel({
      center: true,
      items:2,
      loop:true,
      margin:0,
      responsive:{
          600:{
              items:2
          }
      }
    });
	$(".hero-carousel .owl-carousel").owlCarousel({    
      loop:true,
      margin:0,
      nav:true,
      mouseDrag:false,
      

      responsive:{
        0:{
            items:1,
            mouseDrag:false,
        }
      }
    });
    if($('.hero-carousel').length){
    updateHeroCarousel('.hero-carousel', 0);
	$( window ).resize(function() {
	updateHeroCarousel('.hero-carousel', 0);
    });
    }
    $(".proof-points-campaign .owl-carousel").owlCarousel({
      autoHeight:true
    });
    /*lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });*/

    function updateHeroCarousel(ele, index) {
    if (ele && $(ele)) {
        $(".banner-image").each(function( index ) {
				var bgImg = $(this).data('desk');
        //$(".hero__title").html(currentSlide.data('htitle')).hide().fadeIn(600);
        if ($(window).width() <= 768 && $(this).data('mob')) {
            bgImg = $(this).data('mob');
        } else if ($(window).width() > 768 && $(window).width() < 1200 && $(this).data('tab')) {
            bgImg = $(this).data('tab');
        }
        if(bgImg && bgImg!="")
        $(this).css('background-image', 'url("' + bgImg + '")');
        });

    }
    }
    //AEMM-4509 GA GTM KPI 
    $(".c-hero-carousel").each((_, carousel) => gtmCarouselEventHandler(carousel, null, 'hero carousel navigation'));
});
if($('.subscription.form-component .form-group').length > 0){
$(document).on('keyup','#subscription', function() { 
    var isValid = true;
		if($(this).attr('type')=="email"){
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				isValid = regex.test($(this).val());
            }
   		 if (!isValid) {
                   $('#subscription-status').show();
					$('#subscription-status').removeClass("success","error");
                    $('#subscription-status').addClass("error");
                    $('#subscription-status').html("Please enter a valid Email address");
                }
    else{
        $('#subscription-status').hide();
        $('#subscription-status').removeClass("success","error");
		$('#subscription-status').html("");
    }
});
}
  $(".flip-block .flip-card").click(function() {
    var target = $( event.target );
    if ( target.is("a") ) {
      return true;
    } else {
      $(this).toggleClass("flip");
    }
    return false;
  });

(function($) {

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

$.fn.optanonCookiePopup = (function() {

	var _self = this;
    var expiryDate = document.getElementById("expiryDate").innerHTML;

	_self.params = {

		buttonLearnmoreOpenInNewWindow : true,
		agreementExpiresInDays : expiryDate,
		autoAcceptCookiePolicy : false,
		htmlMarkup : null
	};

	_self.vars = {
		INITIALISED : false,
		HTML_MARKUP : null,
		COOKIE_NAME : 'OptanonAlertBoxClosed'
	};

	var parseParameters = function(object, markup, settings) {

		if (object) {
			var className = $(object).attr('class') ? $(object).attr('class') : '';
			if (className.indexOf('optanonpopup-top') > -1) {
				_self.params.popupPosition = 'top';
			}
			else if (className.indexOf('optanonpopup-fixedtop') > -1) {
				_self.params.popupPosition = 'fixedtop';
			}
			else if (className.indexOf('optanonpopup-bottomright') > -1) {
				_self.params.popupPosition = 'bottomright';
			}
			else if (className.indexOf('optanonpopup-bottomleft') > -1) {
				_self.params.popupPosition = 'bottomleft';
			}
			else if (className.indexOf('optanonpopup-bottom') > -1) {
				_self.params.popupPosition = 'bottom';
			}
			else if (className.indexOf('optanonpopup-block') > -1) {
				_self.params.popupPosition = 'block';
			}
			if (className.indexOf('optanonpopup-color-default') > -1) {
				_self.params.colorStyle = 'default';
			}
			else if (className.indexOf('optanonpopup-color-inverse') > -1) {
				_self.params.colorStyle = 'inverse';
			}
			if (className.indexOf('optanonpopup-style-compact') > -1) {
				_self.params.compactStyle = true;
			}
		}

		if (markup) {
			_self.params.htmlMarkup = markup;
		}

		if (settings) {
			if (typeof settings.cookiePolicyUrl !== 'undefined') {
				_self.params.cookiePolicyUrl = settings.cookiePolicyUrl;
			}
			if (typeof settings.popupPosition !== 'undefined') {
				_self.params.popupPosition = settings.popupPosition;
			}
			if (typeof settings.colorStyle !== 'undefined') {
				_self.params.colorStyle = settings.colorStyle;
			}
			if (typeof settings.popupTitle !== 'undefined') {
				_self.params.popupTitle = settings.popupTitle;
			}
			if (typeof settings.popupText !== 'undefined') {
				_self.params.popupText = settings.popupText;
			}
			if (typeof settings.buttonContinueTitle !== 'undefined') {
				_self.params.buttonContinueTitle = settings.buttonContinueTitle;
			}
			if (typeof settings.buttonLearnmoreTitle !== 'undefined') {
				_self.params.buttonLearnmoreTitle = settings.buttonLearnmoreTitle;
			}
			if (typeof settings.buttonLearnmoreOpenInNewWindow !== 'undefined') {
				_self.params.buttonLearnmoreOpenInNewWindow = settings.buttonLearnmoreOpenInNewWindow;
			}
			if (typeof settings.agreementExpiresInDays !== 'undefined') {
				_self.params.agreementExpiresInDays = settings.agreementExpiresInDays;
			}
			if (typeof settings.autoAcceptCookiePolicy !== 'undefined') {
				_self.params.autoAcceptCookiePolicy = settings.autoAcceptCookiePolicy;
			}
			if (typeof settings.htmlMarkup !== 'undefined') {
				_self.params.htmlMarkup = settings.htmlMarkup;
			}
		}

	};

	var createHtmlMarkup = function() {

		if (_self.params.htmlMarkup) {
			return _self.params.htmlMarkup;
		}

		var html = document.getElementById("cookieContent").innerHTML;

		return html;
	};

	var setUserAcceptsCookies = function(consent) {
		var d = new Date();
		var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
		d.setTime( d.getTime() + expiresInDays );
		var expires = "expires=" + d.toGMTString();
		document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";

		$(document).trigger("user_cookie_consent_changed", {'consent' : consent});
	};

	var userAlreadyAcceptedCookies = function() {
		var userAcceptedCookies = false;
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var c = cookies[i].trim();
			if (c.indexOf(_self.vars.COOKIE_NAME) !== -1) {
				userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
			}
		}

		return userAcceptedCookies;
	};

	var hideContainer = function() {
		// $('.optanonpopup-container').slideUp(200);
		$('.optanonpopup-container').animate({
			opacity: 0,
			height: 0
		}, 1000, function() {
			$('.optanonpopup-container').hide(1000);
		});
	};

	var publicfunc = {

		init : function(settings) {

			parseParameters(
				$(".optanonpopup").first(),
				$(".optanonpopup-markup").html(),
				settings);

			if (userAlreadyAcceptedCookies()) {
        $(document).trigger("user_cookie_already_accepted", {'consent': true});
				return;
			}

			if (_self.vars.INITIALISED) {
				return;
			}
			_self.vars.INITIALISED = true;

			_self.vars.HTML_MARKUP = createHtmlMarkup();

			if ($('.optanonpopup-block').length > 0) {
				$('.optanonpopup-block').append(_self.vars.HTML_MARKUP);
			} else {
				$('BODY').append(_self.vars.HTML_MARKUP);
			}

			$('.optanonpopup-button_1').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});
			$('.optanonpopup-closebutton').click(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
			});

            var defaultTimeOut = document.getElementById("setTime").innerHTML;
			
			setTimeout(function() {
				setUserAcceptsCookies(true);
				hideContainer();
				return false;
				}, defaultTimeOut);

			$('.optanonpopup-container').show();

			if (_self.params.autoAcceptCookiePolicy) {
				setUserAcceptsCookies(true);
			}

		}

	};

	return publicfunc;
});

$(document).ready( function() {
	if ($(".optanonpopup").length > 0) {
		$(document).optanonCookiePopup().init({
			'info' : 'YOU_CAN_ADD_MORE_SETTINGS_HERE',
			'popupTitle' : '',
			'popupText' : document.getElementById("cookieContent").innerHTML
		});
	}
});

$(document).bind("user_cookie_consent_changed", function(event, object) {
	console.log("User cookie consent changed: " + $(object).attr('consent') );
});

}(jQuery));


$(document).ready(function () {

    $(".latestJobs-setion .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            }
        }
    });



    $(".jobTitle").each(function (index) {
        let myString = $(this).text();
        let split = splitThroughPixel(myString.toUpperCase(), this.getBoundingClientRect().width);
        
        if(split.length>0){
            $(this).text(split[0]);

            if(split.length==2){
                var span=    $("<span></span>");
                span.text(split[1]);
                $(this).append(span);
            }
           

        }
    });


    //let myString = "Ipsum has been the industry's standard dummy text ever since the 1500s";
    function splitThroughPixel(string, px) {

        var splitted =  false;
        let words = string.split(' ');
        let split = [];

        let div = document.createElement('div');
        div.style.cssText = 'white-space:nowrap; display:inline;font-size: 18px;';
        document.body.appendChild(div);

        for (let i = 0; i < words.length; i++) {
            div.innerText = (div.innerText + ' ' + words[i]).trim();
            let width = Math.ceil(div.getBoundingClientRect().width);
            if (width > px && div.innerText.split(' ').length > 1 && !splitted) {
                let currentWords = div.innerText.split(' ');
                let lastWord = currentWords.pop();
                split.push(currentWords.join(' '));
                div.innerText = lastWord;
                splitted=true;
            }
        }

        if (div.innerText !== '') {
            split.push(div.innerText);
        }

        document.body.removeChild(div);

        return split;
    }
    
    //GTM Attrs AEMM-4473
    $(".c-job-carousel").each(function () {
        gtmCarouselEventHandler(this, $(this).find(".h3-title").text());
    });
});









$(document).ready(function () {
 	var params = getJsonFromUrl();
    var reqCode = params["reqCode"];
	var region = $("#region").text().trim();
 	//fetchJobs(reqCode, region);

   function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    if(!(query == '' || query == undefined)){
        query.split("&").forEach(function (part) {
          var item = part.split("=");
          item[1] = item[1].split('+').join(' ');
          result[item[0]] = decodeURIComponent(item[1]);
        });
    }
    return result;
  }

  /*function fetchJobs(reqCode, region) {
    var initial_index = 0;
    var target_url = '/bin/aem-chubb-global/job/results?reqCode=' + encodeURIComponent(reqCode) +  '&region=' + encodeURIComponent(region);
    totalresults = 0;
    $.ajax({
      url: target_url,
      type: 'GET',
      success: function (responseData) {
        console.log(responseData);
      }
    });
  }*/
    
});


$(document).ready(function () {
  var initial_index = 0;
  function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
      var item = part.split("=");

      if(undefined!=item[1]){
        item[1] = item[1].split('+').join(' '); 
        result[item[0]] = decodeURIComponent(item[1]);
      }
    });
    return result;
  }

  $("#loadmore-btn").click(function () {
    console.log("start index:" + initial_index);
    loadMore(initial_index)
    return false;
  });

  var totalresults = 0;
  function loadMore(startindex) {
    var displayAmt = startindex + 10 - 1;

    $('#job-results li').slice(0, displayAmt).show();
    $('#job-results li').slice(displayAmt + 1).hide();
    if (totalresults <= displayAmt) {
      $("#loadmore-btn").hide();
    }
    else {
      $("#loadmore-btn").show();
    }
    initial_index = startindex + 10;
  }

  function fetchJobs(searchTerm, country, region, jobfunction) {
    $(".product-promo-section-heading").hide();
    $(".text-description").hide();
    $("#job-loader").show();
    var initial_index = 0;
    var target_url = '/bin/aem-chubb-global/job/results?country=' + encodeURIComponent(country) + '&searchTerm=' + encodeURIComponent(searchTerm) + '&jobfunction=' + encodeURIComponent(jobfunction) + '&region=' + encodeURIComponent(region);
    totalresults = 0;
    $.ajax({
      url: target_url,
      type: 'GET',
      success: function (responseData) {
        console.log(responseData);
        var result_ul = $("#job-results");
        totalresults = responseData.length;
        console.log(responseData.length);

        if (responseData != undefined && responseData.length > 0) {
          $("#result-found").text(responseData.length + " Job results Found. Please scroll down to see a list of openings.");

          $("#result-found").show();
          $("#result-notfound").hide();
        }
        else {
          $("#result-found").hide();
          $("#result-notfound").show();
        }
        result_ul.empty();
        var colorlist=["colorize-blue","colorize-skyblue","colorize-pink","colorize-violet","colorize-orange","colorize-yellow","colorize-green"];

        var colorcount = 0;
        $.each(responseData, function (key, item) {


    
    		var target_url = $("#target_url").attr("href").trim();
             console.log("target_url:"+target_url);
          var liString = '<li><div class="h3-title colorize-bottom '+colorlist[colorcount%7]+'"><span>'
            + item.primaryCountry + ' - ' + item.primaryWorkLocation +
            '</span>'
            + item.requisitionTitle +
            '</div><div class="row"><div class="col-md-8"><div class="jobfun"><p><strong>Job Function:</strong>'
            + item.jobField +  ( (item.employeeStatus!=undefined && item.employeeStatus!='' ) ?  '</p><p><strong>Employment Type:</strong>'
            + item.employeeStatus : '' ) + 
                '</p></div></div><div class="col-md-4"><div class="cta-btn"><a href="'+target_url+'?reqCode='+item.requisitionID+'" class="btn btn-default arrow" style="border-color:black;" >View</a></div></div></div></li>';
          result_ul.append(liString);

          colorcount=colorcount+1;
        });
      },
      complete: function () {
        loadMore(initial_index);
        $("#job-loader").hide();
      }
    });
  }
  $("#job-submit-btn").click(function () {
    var country = $("#country")[0].value == '-1' ? '' : $("#country")[0].value;
    var jobfunction = $("#jobfunction")[0].value == '-1' ? '' : $("#jobfunction")[0].value;
    var region = $("#region")[0].value;
    fetchJobs($("#keyword")[0].value, country, region, jobfunction);
    return false;
  });




  //if query params are passed on load

  var params = getJsonFromUrl();

  var query_country = params["country"];
  var query_jobfunction = params["jobfunction"];
  var query_keyword = params["keyword"];

  console.log(query_country);
  console.log(query_jobfunction);
  console.log(query_keyword);

  if (query_country != undefined || query_jobfunction != undefined || query_keyword != undefined) {
    if (query_country != undefined && query_country != "") {
      $("#country")[0].value = query_country;
    }
    if (query_jobfunction != undefined && query_jobfunction != "") {
      $("#jobfunction")[0].value = query_jobfunction;
    }
    if (query_keyword != undefined && query_keyword != "") {
      $("#keyword")[0].value = query_keyword;
    }
    var country = query_country == undefined || query_country == "-1" ? '' : query_country;
    var jobfunction = query_jobfunction == undefined || query_jobfunction == "-1" ? '' : query_jobfunction;
    var keyword = query_keyword == undefined || query_keyword == "-1" ? '' : query_keyword;
    var region = $("#region")[0].value;
    fetchJobs(keyword, country, region, jobfunction);
  }
});






$(document).ready(function () {

});
var $black_white = $('.black_white'),
		img_width = $('.black_white img').width(),
		init_split = Math.round(img_width/2);
  
  $black_white.width(init_split);  

		$('.before_after_slider').mousemove(function(e){
		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);
			$black_white.width(offX);
		});

		$('.before_after_slider').mouseleave(function(e){
		$black_white.stop().animate({
		width: init_split
		},1000)
		});
$(document).ready(function(e){
  $('.region-connect__dropdown a').click(function(e){
      $('nav').toggleClass('is-active');
  });
     $('.region-connect__dropdown nav a').click(function(e){
      var id = $(this).attr('class');
         $('.region-connect__content .options').hide();
         $('.region-connect__content .options.'+id).show();
         return false;
  });

  let expansionText = $('.select-styled').text().gtmString()
  $('.c-local-chubb-contact .nav a').each((_, anchor) => {
    let $anchor = $(anchor)
    let name = $anchor.text().gtmString()
    $anchor.on('click', triggerFilterEvent.bind(this, expansionText, name))
  })
});
$( document ).ready(function() {
    let flag = false

    $('.IconBlockreview').on('change',function(e){
        if($(this).val() != '')
            $(this).parent().parent().parent().find('.additional-resource-error').remove();
        
            let downloadCta = $(this).parent().parent().parent().find('.download')

            downloadCta.attr('href',$(this).val())
                .attr('data-linkurl', $(this).val().gtmString())

            if (!flag) {
                downloadCta.attr('data-ec', 'cta click')
                    .attr('data-ea', 'content link')
                    .attr('data-linktype', 'document download')
                flag = true
            }
    });
    $('.additional-resource .download.btn').on('click',function(e){
        if($(this).attr('href')==""){
            $(this).before('<p class="additional-resource-error">Please select an option above.</p>');
            e.preventDefault();
        }
    });
});


/**  carousel for mobile view start **/

$(document).ready(function(e){

    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });


var windowWidth = 0;
$(function () {
  $(window).on('load', function () {
        $(this).resize();
        windowWidth = window.innerWidth;
    });
    $(window).on('resize',function () {
        if (windowWidth != window.innerWidth){
            windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                $('.mobile-carousel').addClass('owl-carousel owl-theme');
                $('.mobile-carousel').owlCarousel({
                    items: 1
                });
            } else {
                $('.mobile-carousel').trigger('destroy.owl.carousel');
                $('.mobile-carousel').removeClass('owl-carousel owl-theme');
            }
        }
    });
});

});

/**  carousel for mobile view end **/
$(function () {

    $(window).bind('scroll', function () {
        updateSecondaryNavSticky();
    });
    $( document ).ready(function() {
    if($('.ctaStyleinput').length > 0){
		$('.ctaStyleinput').each(function () {
        if($(this).attr('name')=='ctaborder'){
            $(this).parent().css('border-color' , $(this).val());

        }else{
             $(this).parent().css('border-color' , $(this).val());
$(this).parent().css('background-color' , $(this).val());
        }
        });

    }

    $('.dl-ref-btn').hover(function(){
        if($(this).find('input').attr('name')=='ctaborder'){
		$(this).css('background-color',$(this).find('input').val());
        }
        },function(){
        if($(this).find('input').attr('name')=='ctaborder'){
		$(this).css('background-color','');
        }
        
    });
    });
     

    $('.secondary-nav-cyber__wrapper .secondary-nav-cyber__item').removeClass('active');
    var currentPagePath = window.location.pathname;

    $('.secondary-nav-cyber__wrapper .secondary-nav-cyber__item').each(function () {
        if (currentPagePath !== '/') {
            var navItem = $(this);
            if (navItem.find('> .dropdown').length > 0) {
                navItem.find('> .dropdown ul.dropdown-menu li a').each(function () {
                    if ($(this).attr('href') === currentPagePath) {
                        $(this).addClass('industryInsightsActive');
                        $(this).parents().find(navItem).addClass('active');
                        $(this).parents().find(navItem).find('.secondary-nav-cyber__opts').addClass('active');
                        copySecondaryOptElements();
                    }
                });
            } else if (navItem.find('>a').length > 0) {
                if ($(navItem.find('a')[0]).attr('href') === currentPagePath) {
                    $(this).parents().find(navItem).addClass('active');
                    $(this).parents().find(navItem).find('.secondary-nav-cyber__opts').addClass('active');
                    var navClass = $(this).parents().find(navItem).find('.secondary-nav-cyber__opts').attr('class');
                    var themeClass = navClass.match(/secondary-nav-cyber-.*-theme/, '');
                    var mobileOptionsDiv =  $('.secondary-nav-cyber__mobile-opts-dl-btn-container')
                    var mobileOptsClass = mobileOptionsDiv.attr('class').replace(/secondary-nav-cyber-.*-theme/, themeClass);
                    mobileOptionsDiv.attr('class', mobileOptsClass);
                    copySecondaryOptElements();
                }
            }
        }
    });

    $('.dl-ref-btn.menu-link.mobile-menu-btn').click(function () {
        openStickyNav();
    });

    $('.secondary-nav-cyber__close-menu-btn-xs').click(function () {
        closeStickyNav();
    });

    $('.secondary-nav-cyber__opts-dl .dl-ref').click(function () {
        closeStickyNav();
    });

    $('.secondary-nav-cyber__opts-dl-btns-xs .dl-ref-btn').click(function () {
        closeStickyNav();
    });

    $(document).ready(function () {
        alignSecondarydlbtns();
    });

    $(window).resize(function () {
        updateSecondaryNavSticky();
        alignSecondarydlbtns();
    })

    $('.secondary-nav-cyber__item > a').click(function (event) {
        if ($(this).parent().hasClass('active')) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        }
    });

    $('.dl-ref, .internal-link').click(function (e) {
        if($(this).attr('href').indexOf('http') == 0){
		var url = $(this).attr('href');
		window.open(url, $(this).attr('target'));
            return false;
        }
        if (window.location.hash !== $(this).attr('href')) {
            e.preventDefault();
            window.location.hash = $(this).attr('href');
        }

        jumpToSection();
    });
});

/** Deep link functionality start **/
$(window).on('load',function () {
    jumpToSection();
    updateShareTooltip();
});
/* $(window).on('hashchange', function () {
    jumpToSection();
}); */
function jumpToSection() {
    var locationHash = window.location.hash;
    if (locationHash && locationHash.length) {
        var deepLinkSection = decodeURIComponent(locationHash.substr(1));
        if ($("#" + deepLinkSection).length) {
            if ($("#" + deepLinkSection).hasClass('modal')) {
                var eleOffset = $("#" + deepLinkSection).parent().offset().top -150;
                $('html, body').animate({
                    scrollTop: eleOffset
                }, 500);
                
                $("#" + deepLinkSection).modal('show');
            } else {
                var eleOffset = $("#" + deepLinkSection).offset().top;
                console.log("text1", eleOffset);
                if (window.innerWidth < 768) {
                    eleOffset = eleOffset - 20;
                } else {
                    eleOffset = eleOffset - 150;
                    if (!$(".secondary-nav").hasClass("stickySecondaryNav")) {
                        eleOffset = eleOffset - 140;
                    }
                }
                $('html, body').animate({
                    scrollTop: eleOffset
                }, 500);
            }
        }
    }
}
/**  Deep link functionality end **/
/** update share tooltip position **/
function updateShareTooltip() {
    $('.share-btn').each(function() {
        if ((($(this).offset().left + $(this).width()) - $(this).parent().offset().left) < $(this).find('.share-tooltip').width()) {
            $(this).addClass('share-align-right');
        }
    });
    
}

function updateSecondaryNavSticky() {
    var secondaryNavRef = $('.secondary-nav-cyber');
    if ($(window).width() > 767) {
        var scrollPosition = $(window).scrollTop();
        var headerHeight = $('header').outerHeight();
        var secondaryNavHeight = secondaryNavRef.outerHeight() + secondaryNavRef.find('.secondary-nav-cyber__opts.active').outerHeight();

        if (scrollPosition > (headerHeight + secondaryNavHeight)) {
            secondaryNavRef.addClass('container stickySecondaryNav');
        } else {
            secondaryNavRef.removeClass('container stickySecondaryNav');
        }
    } else {
        secondaryNavRef.removeClass('container stickySecondaryNav');
    }
}

function copySecondaryOptElements() {
    var scndNavOptsInnerHTML, supportBTN = '';
    if ($('.secondary-nav-cyber__wrapper .secondary-nav-cyber__item.active .secondary-nav-cyber__opts-dl-btns').length > 0) {
        scndNavOptsInnerHTML = $('.secondary-nav-cyber__wrapper .secondary-nav-cyber__item.active .secondary-nav-cyber__opts-dl-btns').html();
        $('.secondary-nav-cyber__opts-dl-btns-xs').empty().append(scndNavOptsInnerHTML);
        $('.secondary-nav-cyber__wrapper .secondary-nav-cyber__item.active .secondary-nav-cyber__opts-dl-btns').find('.support-btn').each(function (index, elem) {
            supportBTN = elem.outerHTML;
        });
        $('.secondary-nav-cyber__menu-button-xs .secondary-nav-cyber__menu-button-wrapper').prepend(supportBTN);
    }
}

function openStickyNav() {
    $('.secondary-nav-cyber__wrapper').addClass('sticky-open');
    $('.secondary-nav-cyber__menu-button-wrapper').addClass('sticky-open-menu-buttons');
    $('.secondary-nav-cyber__opts-dl-btns-xs').addClass('sticky-open-add-margin');
    $('body.cyber-microsite').addClass('sticky-menu-open');
    if ($('.secondary-nav-cyber__wrapper').hasClass('sticky-open')) {
        addHeights();
    }
}

function closeStickyNav() {
    $('.secondary-nav-cyber__wrapper').removeClass('sticky-open'); 
    $('.secondary-nav-cyber__menu-button-wrapper').removeClass('sticky-open-menu-buttons');
    $('.secondary-nav-cyber__opts-dl-btns-xs').removeClass('sticky-open-add-margin');
    $('body.cyber-microsite').removeClass('sticky-menu-open');
    $('.secondary-nav-cyber__menu-button-xs').removeClass('mbh');
    $('.secondary-nav-cyber__mobile-opts-dl-btn-container').removeClass('mbh');
    addHeights();
}

function alignSecondarydlbtns() {
    if ($(window).width() < 768) {
        addHeights();
        $('.secondary-nav-cyber__menu-button-wrapper').addClass('show-nav');
    } else {
        $('footer').each(function () {
            $(this).css('padding-bottom', '40px');
        })
    }
}

function addHeights() {
    var menuOptsDlBtnsHeight = $('.secondary-nav-cyber__opts-dl-btns-xs').outerHeight();
    var menuBtnHeight = $('.secondary-nav-cyber__menu-button-wrapper').outerHeight();
    var calcHeight = menuOptsDlBtnsHeight + menuBtnHeight;

    $('.secondary-nav-cyber__menu-button-wrapper').each(function () {
        $(this).css('bottom', menuOptsDlBtnsHeight);
    });

    $('footer').each(function () {
        $(this).css('padding-bottom', calcHeight);
    });

    $('.secondary-nav-cyber__wrapper.sticky-open').css('height', 'calc(100% - ' + calcHeight + 'px)');
}
$(document).ready(function(e){
    $('.industryInsights__dropdown a').click(function(e){
        $('.industryInsights__dropdown-menu').toggleClass('show');
    });
}); 
$(document).ready(function(){
    $("select.select-data").change(function(){
        var isConditional = $(this).attr('conditional');
		if(isConditional == "true"){
            var conditionalField = document.getElementById($(this).attr('name')+'-conditionalField').innerHTML
            var isRequiredField = $("input[name='"+conditionalField+"']").attr('required');
            var selectedValue = $(this).val();
            var compareValue = document.getElementById($(this).attr('name')+'-conditionalValue').innerHTML

			if(selectedValue != compareValue){
                if(isRequiredField && isRequiredField == 'required')
                    $("input[name='"+conditionalField+"']").removeAttr('required');
                $("input[name='"+conditionalField+"']").parent().hide();
			}else{
                 if(isRequiredField && isRequiredField == 'required')
                     $("input[name='"+conditionalField+"']").attr('required');
                 $("input[name='"+conditionalField+"']").parent().show();
			}
		}
    });
});

$(document).ready(function () {
    const searching = $(document.createElement('div'))
        .addClass('no-value')
        .text('Searching...')
    const dataNotFound = $(document.createElement('div'))
        .addClass('no-value')
        .text('Data not found')

    $('[data-dynamicdropdown="autosuggest"]').each((_, autosuggest) => {
        let $autosuggest = $(autosuggest)
        let debounce
        let lastSearchKey = null

        let keyword = $autosuggest.data('keyword')
        let dataPath = $autosuggest.data('path')
        let $autosuggestContainer = $autosuggest.closest('.autosuggest-container')

        let $dropdownMenu = $autosuggestContainer.find('.suggestions.menu')
        let $errorMessage = $autosuggest.attr('required') 
                                ? $autosuggestContainer.find('.error') 
                                : $('')
        let hideSuggestion = false
        let focusIn = false

        const hideError = (value) =>
            $errorMessage.length !== 0 &&
            hideSuggestion &&
            value !== ''

        const blurHander = event => {
            let $target = $(event.target)
            if(($target.is($autosuggest) && event.type !== 'blur') || $(event.relatedTarget).is('button.option-value'))
                return
            
            focusIn = false
            if (hideError($autosuggest.val()))
                $errorMessage.hide()
            else if (hideSuggestion)
                $errorMessage.show()

            $dropdownMenu.hide()
        }

        let firstOption, lastOption

        $autosuggest.on('focus', () => {
            $dropdownMenu.show()
            focusIn = true

            $autosuggest.one('blur', blurHander)
            $(document).one('click', blurHander)
        })

        $autosuggest.closest('form').find('[type="submit"]').on('click', () => {
            if ($autosuggest.val() !== '') return
            if ($errorMessage.length === 0) return

            $errorMessage.show()
        })


        $autosuggest.on('keydown', (event) => {            
            if ((event.which > 36 && event.which < 41) || event.which === 13) {
                let $keytrack = $dropdownMenu.find('button.keytrack')
                if ($keytrack.length == 0) return

                if (event.which === 40) {
                    $keytrack.removeClass('keytrack')
                    event.preventDefault()
                    let nextOption = $keytrack.next()
                    if (nextOption.length == 0) nextOption = firstOption
                    nextOption.addClass('keytrack')
                    $dropdownMenu.scrollTop(nextOption.get(0).offsetTop)
                } else if (event.which === 38) {
                    $keytrack.removeClass('keytrack')
                    event.preventDefault()
                    let prevOption = $keytrack.prev()
                    if (prevOption.length == 0) prevOption = lastOption
                    prevOption.addClass('keytrack')
                    $dropdownMenu.scrollTop(prevOption.get(0).offsetTop)
                } else if (event.which === 13) {
                    event.preventDefault()
                    $autosuggest.val($keytrack.text())
                    $dropdownMenu.hide()
                }
            }
        })

        $autosuggest.on('keyup', (event) => {
            if (event.which === 13) return;
            let value = $autosuggest.val()
            clearTimeout(debounce)
            debounce = setTimeout(getOptions.bind(this, value), 300)
        })

        setTimeout(getOptions.bind(this, ''), 300)

        let fetchController

        async function getOptions(value) {
            value = encodeURIComponent(value.trim().replaceAll(/\s/g, '+'))
            if (lastSearchKey === value) {                
                lastSearchKey = value
                return
            } 

            if (!hideSuggestion && value !== '')
                hideSuggestion = true

            lastSearchKey = value
                
            if (hideSuggestion && $dropdownMenu.is(':hidden') && focusIn)
                $dropdownMenu.show()
            $dropdownMenu.html(searching)

            if (fetchController) fetchController.abort()

            try {
                fetchController = new AbortController()

                let response = await fetch(
                    `${dataPath}.options.json?${keyword}=${value}`,
                    { signal: fetchController.signal }
                )
                fetchController = null
                let options = await response.json()
                changeSelect(
                    typeof options === "string" 
                        ? [options]
                        : options
                  )
            } catch (e) {
                if (e.name === 'AbortError') return
                console.log('Error while hitting API', e)
                $dropdownMenu.html(dataNotFound)
            }
        }

        function changeSelect(options) {
            let fragment = document.createDocumentFragment()
            let firstBatch = true
            let optionsSize = options.length

            $dropdownMenu.html('')
            if (optionsSize === 0) {
                $dropdownMenu.html(dataNotFound)
                return
            }

            const addOptions = () => {
                if (firstBatch) {
                    $dropdownMenu.append(fragment)
                    firstBatch = false
                } else {
                    setTimeout(() => $dropdownMenu.append(fragment))
                }
            }

            options.forEach((optionValue, index) => {
                let $button = $(document.createElement('button'))
                                .addClass('option-value')
                                .attr('type', 'button')
                                .attr('tabindex', '-1')
                $button.on('click', () => {
                    if (!hideSuggestion) hideSuggestion = true
                    $autosuggest.val($button.text())
                    $dropdownMenu.hide()
                    $errorMessage.hide()
                })
                let $p = $(document.createElement('p'))
                            .addClass('option-text')
                            .text(optionValue)

                $button.append($p)

                if (index === 0) {
                    $button.addClass('keytrack')
                    firstOption = $button
                } 
                if (index === optionsSize - 1) 
                    lastOption = $button

                fragment.appendChild($button.get(0))

                if ((index + 1) % 100 == 0) addOptions()
            })
            addOptions()
        }
    })
})

$(document).ready(function(e){
    /**  carousel for mobile view start **/
    $('.hero-banner-carousel').each(function() {
        var currentCarousel = $(this);

        var modals = currentCarousel.find('.modal');
        $(modals).each(function () {
            // Move the modal from carousel item to parent
            $(this).appendTo(currentCarousel.parent());
        });

        currentCarousel.addClass('owl-carousel owl-theme');
        var vCarousel = currentCarousel.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            responsive:{
                0:{
                    items:1
                }
            }
        });
        /**  carousel for mobile view end **/

    });
});

$(function() {
    if ($(".c-faa .find-an-agent-section").length > 0) {
        var api = $(this).find("#faaapi").val();
        $.ajaxSetup({
            async: false
        });

        var pattern = /^((http|https|ftp):\/\/)/;
        var carousleHtml = "";
        var resources = "";
        var regionIndexstr = "";
        var stateIndexstr = "";
        var level1title = '';
        var level2title = '';
		var levelnewlabel='';
        var linkDescription = '';
		var pageload = false;
        var dataEc = `find an agent ${dataLayer[0].business}`.gtmString()

        var locationDetails = {};
        locationDetails["country"] = $('#countryCode').val();
        locationDetails["rootPath"] = $('#faaRootPath').val();
        locationDetails["defaultContent"] = $('#faaDefaultContent').val();

        if(navigator.geolocation){
            if(navigator.geolocation.getCurrentPosition.length != 0){
                setTimeout(function() {
                    navigator.geolocation.getCurrentPosition(function(position) {
                    locationDetails["autoDetect"] = "true";
                    locationDetails["latitude"] = position.coords.latitude;
                    locationDetails["longitude"] = position.coords.longitude;
                    pageload = true;
                    loadAgentData();
                    addFAAevents($('.c-faa'));              
                    faaExpandTrigger(linkDescription, 2);
                }, function() {
                    showUnsupportedContent($('#faaLocationBlockedBrowserMessage').val());
                }, { enableHighAccuracy: false, timeout: 20000, maximumAge: 0 });
                }, 1000);
            }else{
                showUnsupportedContent($('#faaLocationUnsupportedBrowserMessage').val());
            }
        }else{
            showUnsupportedContent($('#faaLocationUnsupportedBrowserMessage').val());
        }

		function showUnsupportedContent(message){
			$('.loadingtext').html(message);
			$('.accordianHeader').show();
			$('.accordionTitle').hide();
			$('.locationButton').addClass('inlinebutton');
			setDefaultData();
            addFAAevents($('.c-faa'));
            faaExpandTrigger(linkDescription, 2);
		}

		function setDefaultData(){
            locationDetails["autoDetect"] = "false";
            locationDetails["latitude"] = 0.0;
            locationDetails["longitude"] = 0.0;
            locationDetails["state"] = "";
            locationDetails["city"] = "";
            pageload = true;
            loadAgentData();
        }
        function loadAgentData() {
            $.getJSON(api+"?location=" + JSON.stringify(locationDetails), parsefaaResources)
                .fail(function(jqxhr, status, error) {
					window.faaresources="";
					$('#accordionTitle').html(DOMPurify.sanitize($('#faaErrorMessage').val())+":'"+locationDetails["stateName"]+"'");
                    $('#accordionTitle').show();
                    $('.loadingtext').hide();
					$('#accordionTitle').addClass('fullWidth');
					$('.locationButton').addClass('inlinebutton');
					carousleHtml = "";
					$('#accordion').html('');
                });

            window.scroll(0, 0);
            function parsefaaResources(data) {
                var resources = data;
                window.faaresources = resources;
                $('#accordionTitle').html(resources.state);
                if(resources.state == ""){
					$('.loadingtext').show();
					$('#accordionTitle').hide();
					$('#accordionTitle').addClass('fullWidth');
					$('.locationButton').addClass('inlinebutton');
					levelnewlabel = 'No Geo:No Geo';
                    linkDescription = 'no geo| no geo';
					if(pageload = true){
					window.dataLayer = window.dataLayer || [];
						window.dataLayer.push({
                            event: 'irEvent',
                            eventCategory:'Find an Agent',
                            eventAction: 'CTA Click: Search Expand: Level 2',
                            'data-agent' : levelnewlabel,
                            'data-toggle' : 'Expand',
                            'data-cta': 'Search Expand: Level 2',
                            eventCallback: function() {
                                console.log("Callback FAA: Datalayer Push Complete");
                            }
						});
					}
				}else{
					$('.loadingtext').hide();
					$('#accordionTitle').show();
					$('.locationButton').removeClass('inlinebutton');
					$('#accordionTitle').removeClass('fullWidth');
					levelnewlabel = resources.region+':'+resources.state;
                    linkDescription = resources.region + '| ' + resources.state;
					if(pageload = true){
					window.dataLayer = window.dataLayer || [];
						window.dataLayer.push({
                            event: 'irEvent',
                            eventCategory:'Find an Agent',
                            eventAction: 'CTA Click: Search Expand: Level 2',
                            'data-agent' : levelnewlabel,
                            'data-toggle': 'Expand',
                            'data-cta': 'Search Expand: Level 2',
                            eventCallback: function() {
                                console.log("Callback FAA: Datalayer Push Complete");
                            }
						});
					}
				}

				$('#locationcta').attr('data-agent', levelnewlabel)
                    .attr('data-ec', dataEc)
                    .attr('data-ea', 'faa location change requested')
                    .attr('data-linkdesc', linkDescription.gtmString());

				pageload = false;
                $('.accordianHeader').show();
                carousleHtml = "";
                $('#accordion').html('');
            }

            resources = window.faaresources.results;
            resources && resources.forEach(function(regionitem, regionindex) {

                if (regionitem.level1) {
                    carousleHtml += level1html(regionitem, regionindex, 'mainheading');
                } else if (regionitem.productdata) {
                    carousleHtml += level3html(regionitem.productdata, regionindex, '', '', levelnewlabel+":");
                }
            });
            $('#accordion').html(carousleHtml);
        }
        $(document).ready(function() {
            $('#locationModalState-m').html(
                $('#locationModalState-m option').sort((a, b) =>
                    a.value.localeCompare(b.value)
                )
            )
            $('#locationModalState-m').val('') 
            $('#states').html(
                $('#states option').sort((a, b) => a.value.localeCompare(b.value))
            )
            $('#locationModalState').val('')
            $(document).on('click','.modal-backdrop.show',function(){
                $("#locationModal").modal("hide");
                $('#locationModalState').val('');
                $('.locationModalCity-m').hide();
            });
            $('.card-header').on('click', function() {
                setTimeout(function() {
                    $('.card-header > div').each(function(i, obj) {
                        if ($(obj).attr('aria-expanded') == "true") {
                            $(obj).parent().addClass('activeFAA');
                        } else {
                            $(obj).parent().removeClass('activeFAA');
                        }
                    });
                }, 100);
            });
            $(document).on('click', "#locationcta", function() {
                $(".locationModal").addClass('active');
            });
			 function resetlocationmodal(){
				 $('#locationModalcta').removeAttr('data-cta')
                    .removeAttr('data-ea')
                    .removeAttr('data-ec')
                    .removeAttr('data-agent')
                    .removeAttr('data-linkdesc');
                $(".locationModal").removeClass('active');
				$('.locationModalinput').val('');
				 $('.locationModalCity-m').hide();
				 $('#locationModalCity').hide();
                 $('#locationModalcta').removeClass('active');
                    $('#locationModalcta').attr("disabled", "diabled");
					$("#locationModalState-m").val($("#locationModalState-m option:first").val());
					$(".locationModalCity-m").val($(".locationModalCity-m option:first").val());
                $('.locationModalCity-m').hide();
                $("#locationModal").modal("hide");
            }
            $('#closeButton').on('click', function() {
               resetlocationmodal();
            });
			function disablebutton(){
				$('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
			}
			function enablebutton(){
				$('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
			}
            $('#locationModalState').on('click', function() {
                $('.locationModalCity-m').hide();
            });
            $('#locationModalState').on('input change', function() {
				if($(this).val().trim() != ""){
				 $('.locationModalCity-m').hide();
                locationDetails["stateName"] = $(this).val();
                locationDetails["city"] = "";
				if ($('datalist#states>option[value="' + $('#locationModalState').val() + '"]').length == 1) {
					$(this).css('border', '');
                if ($(this).val() != "" && $("select[id='" + $(this).val() + "']").length == 1) {
					 $("select[id='" + $(this).val() + "']").val('')
                    $("select[id='" + $(this).val() + "']").show();
                    $('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
                } else {
                    $('.locationModalCity-m').hide();
                    if($(this).val() != ""){
                        let region = $(`datalist#states>option[value="${$('#locationModalState').val()}"]`).data('region')
						$('#locationModalcta').attr('data-cta','location change selected:'+$(this).val())
                            .attr('data-ec', dataEc)
                            .attr('data-ea', 'faa location change selected')
                            .attr('data-agent', $(this).val())
                            .attr('data-linkdesc', `${region.gtmString()}| ${$(this).val().gtmString()}`);
                    $('#locationModalcta').removeAttr("disabled");
                    $('#locationModalcta').addClass('active');
                    }
                }
				 }else{
					 $(this).css('border', '2px solid red');
					 $('.locationModalCity-m').hide();
						 $('#locationModalcta').removeClass('active');
                    $('#locationModalcta').attr("disabled", "diabled");
                    }
				}else{
					$(this).css('border', '2px solid red');
                    $('#locationModalcta').removeClass('active');
					$('#locationModalcta').attr("disabled", "diabled");
				}
            });
            $('#locationModalCity').on('input change', function() {
				if($(this).val().trim() != ""){
				locationDetails["city"] = $(this).val();
                if ($(this).val() != ""  ) {
                    if( $("datalist[id='"+$('#locationModalState').val()+"']>option[value='"+$('#locationModalCity').val()+"']").length){
                        $(this).css('border', '');
                        var selectValue = $('#locationModalState').val()+':'+$(this).val();
                        let region = $(`datalist#states>option[value="${$('#locationModalState').val()}"]`).data('region')
                        $('#locationModalcta').attr('data-cta','location change selected:'+selectValue)
                            .attr('data-ec', dataEc)
                            .attr('data-ea', 'faa location change selected')
                            .attr('data-agent', selectValue)
                            .attr('data-linkdesc', `${region.gtmString()}| ${selectValue.replace(':', ': ').gtmString()}`);
                         $('#locationModalcta').removeAttr("disabled");
                        $('#locationModalcta').addClass('active');
                    } else {
                        $(this).css('border', '2px solid red');
                    }
                } else {
                    $('#locationModalCity').attr('list', '');
                    if($(this).val() != ""){
                    $('#locationModalcta').removeClass('active');
					$('#locationModalcta').attr("disabled", "diabled");
                    }else{
						 $('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
                    }
                }
				}else{
					$('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
				}

            });
			 $('#locationModalState-m').on('change', function() {
				 if($(this).val().trim() != ""){
				 $('.locationModalCity-m').hide();
                locationDetails["stateName"] = $(this).val();
                locationDetails["city"] = "";

                if ($(this).val() != "" && $("select[id='" + $(this).val() + "']").length == 1) {

                    $("select[id='" + $(this).val() + "']").show();
                    $('#locationModalcta').removeClass('active');
                $('#locationModalcta').attr("disabled", "diabled");
                } else {
                    $('.locationModalCity-m').hide();
                    if($(this).val() != ""){
                        let region = $(`#locationModalState-m option[value="${$('#locationModalState-m').val()}"]`).data('region')
						$('#locationModalcta').attr('data-cta','location change selected:'+$(this).val())
                            .attr('data-ec', dataEc)
                            .attr('data-ea', 'faa location change selected')
                            .attr('data-agent', $(this).val())
                            .attr('data-linkdesc', `${region.gtmString()}| ${$(this).val().gtmString()}`);
                    $('#locationModalcta').removeAttr("disabled");
                    $('#locationModalcta').addClass('active');
                    }
                }
				 }else{
					 $('.locationModalCity-m').hide();
						 $('#locationModalcta').removeClass('active');
                    $('#locationModalcta').attr("disabled", "diabled");
                    }

            });
            $('.locationModalCity-m').on('change', function() {
				if($(this).val().trim() != ""){
                locationDetails["city"] = $(this).val();
                if ($(this).val() != "") {
                    var selectValue = ($('#locationModalState').val() || $('#locationModalState-m').val())+':'+$(this).val();
                    let region = $(`#locationModalState-m option[value="${$('#locationModalState-m').val()}"]`).data('region') 
                                    || $(`datalist#states>option[value="${$('#locationModalState').val()}"]`).data('region')
					$('#locationModalcta').attr('data-cta','location change selected:'+selectValue)
                        .attr('data-ec', dataEc)
                        .attr('data-ea', 'faa location change selected')
                        .attr('data-agent', selectValue)
                        .attr('data-linkdesc', `${region.gtmString()}| ${selectValue.replace(':', ': ').gtmString()}`);
                    $('#locationModalcta').addClass('active');
                    $('#locationModalcta').removeAttr("disabled");
                }
				}else {
                    $('#locationModalcta').removeClass('active');
                    $('#locationModalcta').attr("disabled", "diabled")
                }
            });
            $('#locationModalcta').on('click', function() {

                var val = $('#locationModalState').val();
				if(val == ""){
					var val = $('#locationModalState-m').val();
				}
                var val2 = $('#states option').filter(function() {
                    return this.value == val;
                }).data('id');
                locationDetails["state"] = val2;

                locationDetails["autoDetect"] = "changeLocation";
                locationDetails["latitude"] = 0.0;
                locationDetails["longitude"] = 0.0;
                $(".locationModal").removeClass('active');
                $('.locationModalinput').val('');
                resetlocationmodal();
                loadAgentData();
            });
            $('#locationModalState').focus(function() {
                $(this).attr('placeholder', 'Enter State name');
				$(this).val('');
				$('.locationModalCity-m').hide();
			$('#locationModalcta').removeClass('active');
            $('#locationModalcta').attr("disabled", "diabled");

            }).blur(function() {
                $(this).attr('placeholder', 'State')
            });
            $('#locationModalCity').focus(function() {
                $(this).attr('placeholder', 'Select Region');
				$(this).val('');
			$('#locationModalcta').removeClass('active');
            $('#locationModalcta').attr("disabled", "diabled");
            }).blur(function() {
                $(this).attr('placeholder', 'Region')
            });

		});
        function level1html(regionitem, regionindex, heading) {
            var outputHtml = ""
            if (regionitem.level1 != "") {
                level1title = regionitem.level1;
                regionIndexstr = "-" + regionindex;
                var levelNumber = "1";
                if (!regionitem.data) {
                    var levelNumber = "2";
                }
                outputHtml += '<div class="regiondiv-card card"><div class="regiondiv-card-header card-header" id="heading' + regionIndexstr + '">';
                outputHtml += '<div class="regiondiv ' + heading + '" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + '" data-agent="' + level1title + '" data-cta="Search Expand: Level ' + levelNumber + '"><div class="mb-0">' + regionitem.level1 + '</div></div>';
                outputHtml += '</div>';
                outputHtml += '<div id="collapse' + regionIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + '"><div class="card-body"><div id="accordion' + regionIndexstr + '" >';
            } else {
                regionIndexstr = "";
            }

            if (regionitem.data) {
                outputHtml += level2html(regionitem.data, regionIndexstr);
            } else if (regionitem.productdata) {
                outputHtml += level3html(regionitem.productdata, regionIndexstr, '', '', level1title + ':');
            }

            if (regionitem.level1 != "") {
                outputHtml += '</div></div></div></div>';
            }
            return outputHtml;
        }

        function level2html(regionitem, regionIndexstr) {
            var outputHtml = '';
            regionitem.forEach(function(stateitem, stateindex) {
                if (stateitem.level2 != "") {
                    level2title = stateitem.level2;
                    stateIndexstr = "-" + stateindex;
                    outputHtml += '<div class="statediv-card card">';
                    outputHtml += '<div class="statediv-card-header card-header" id="heading' + regionIndexstr + stateIndexstr + '"><div class="statediv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '" data-agent="' + level1title + ':' + level2title + '" data-cta="Search Expand: Level 2"><div class="mb-0">';
                    outputHtml += stateitem.level2 + '</div></div></div>';
                    outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '"><div class="card-body">       <div id="accordion' + regionIndexstr + stateIndexstr + '">';
                } else {
                    stateIndexstr = "";
                }
                if (stateitem.productdata) {
                    outputHtml += level3html(stateitem.productdata, regionIndexstr, stateIndexstr, '', level1title + ':' + level2title + ':');
                }
                if (stateitem.level2 != "") {
                    outputHtml += '</div></div></div></div>';
                }
            });
            return outputHtml;
        }

        function level3html(stateitem, regionIndexstr, stateIndexstr, heading, levelTitle) {
            var outputHtml = "";
            var stateItemArray = stateitem;

           stateItemArray = stateitem.filter(
					function (element) {
                        return element.superagent && element.superagent == "true";
					}
				);

            outputHtml = generateLevel3Html(stateItemArray, regionIndexstr, stateIndexstr, heading, levelTitle, 0);

            if ((stateitem && stateItemArray && (stateitem.length - stateItemArray.length > 0))) {
                var regionIndex = -1;
                if (regionIndexstr) {
                    regionIndex = regionIndexstr.replace("-", "");
                }
                var stateIndex = -1;
                if (stateIndexstr) {
                    stateIndex = stateIndexstr.replace("-", "");
                }
                var dataAgent = levelTitle.trim().replace(/:$/, '');
                outputHtml = outputHtml + '<div class="faa-load-more-wrapper">' +
                    '<a title="Load More" href="javascript:void(0)" data-rindex="' + regionIndex + '" data-stindex="' + stateIndex + '" data-startindex="' + stateItemArray.length +
                    '" data-leveltitle="' + levelTitle + '" id="faa-load-more" class="btn btn-border arrow faa-load-more"' +
                    'data-agent="' + dataAgent + '" data-cta="Load More: Level 3">Load More </a>' +
                    '</div>';
            }
            return outputHtml;
        }

        function generateLevel3Html(stateitem, regionIndexstr, stateIndexstr, heading, levelTitle, updatedProducerIndex) {
            var outputHtml = "";
            if (!updatedProducerIndex) {
                updatedProducerIndex = 0;
            }
            stateitem.forEach(function(produceritem, producerindex) {
                outputHtml += '<div class="producerdiv-card card">';
                outputHtml += '<div class="producerdiv-header card-header ' + heading + '" id="heading' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '"><div class="producerdiv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" data-agent="' + levelTitle + produceritem.prdName + '" data-cta="Search Expand: Level 3" data-city="' + produceritem.locality + '" data-state="' + produceritem.state + '" data-zip="' + produceritem.postalCode + '"><div class="row agency-name">';
                outputHtml += '<div class="mb-0 col-md-9 col-sm-12">';
                outputHtml += produceritem.prdName;
                if (produceritem.PrdDesctiption) {
                    outputHtml += '<div class="agent-description"><p>' + produceritem.PrdDesctiption + '</p></div>';
                }
                outputHtml += '</div><div class="col-md-3 col-sm-12 agency-image">';
                if (produceritem.cornerstone == "true") {
                    outputHtml += '<img src="' + produceritem.imagePath + '" alt="Chubb Cornerstone Agency" width="125"/>';
                }

                outputHtml += '</div><span class="faa-agentToggle"> <a href="javascript:void(0)" aria-label="Expand" class="faa-expand">' + $('#faaExpandLabel').val() + '</a><a href="javascript:void(0)" aria-label="Collapse" class="faa-collapse">' + $('#faaCollapseLabel').val() + '</a></span></div></div></div>';
                outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '"><div class="card-body bbgrey">';
                /* main row start */
                outputHtml += '<div class="row">';
                /* colunm start */
                outputHtml += '';
                if (produceritem.url != "") {
                    if (!pattern.test(produceritem.url)) {
                        var agenturl = 'http://' + produceritem.url
                    } else {
                        var agenturl = produceritem.url
                    }
                    outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/website.svg" alt="website icon" /></span><a target="_blank" class="icontext offsite" href="' + agenturl + '" data-cta="Search Offsite" data-agent="' + levelTitle + produceritem.prdName + '">';
                    if ($('#faaWebsiteLabel').val() != '') {
                        outputHtml += $('#faaWebsiteLabel').val();
                    } else {
                        outputHtml += produceritem.url
                    }
                    outputHtml += '</a></p></div>';
                }
                if (produceritem.prdPhone != "") {
                    outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/tel.svg" alt="telephone icon" /></span><a class="icontext call" href="tel:' + produceritem.prdPhone + '" data-cta="Search Call" data-agent="' + levelTitle + produceritem.prdName + '">';
                    if ($('#faaPhoneLabel').val() != '') {
                        outputHtml += '<span class="mobileonly">' + $('#faaPhoneLabel').val() + '</span><span class="deskonly">' + produceritem.prdPhone + '</span>';
                    } else {
                        outputHtml += produceritem.prdPhone;
                    }
                    outputHtml += '</a></p></div>';
                }
                if (produceritem.emailAddress != "") {
                    outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/email.svg" alt="email icon" /></span><a class="icontext email" target="_blank"';
                    outputHtml += 'href="mailto:' + produceritem.emailAddress + '?';
                    if ($('#faaEmailSubject').val() != "")
                        outputHtml += 'subject=' + encodeURIComponent($('#faaEmailSubject').val()) + '&amp;';
                    if ($('#faaEmailBody').val() != "")
                        outputHtml += 'body=' + encodeURIComponent($('#faaEmailBody').val());
                    outputHtml += '" data-cta="Search Email" data-agent="' + levelTitle + produceritem.prdName + '">';
                    if ($('#faaEmailLabel').val() != '') {
                        outputHtml += $('#faaEmailLabel').val();
                    } else {
                        outputHtml += produceritem.emailAddress;
                    }
                    outputHtml += '</a></p></div>';
                }

                if (produceritem.addressLine != "") {
                    var addressLine2 = "";
                    if (produceritem.addressLine && produceritem.addressLine2 != "") {
                        addressLine2 = ", " + produceritem.addressLine2;
                    }
                    if(produceritem.agentState !="")
                        produceritem.state = produceritem.agentState;
                    outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/pin.svg" alt="map pin icon" /></span><a class="icontext map" target="_blank" href="https://www.google.com/maps/?q=' + produceritem.addressLine + addressLine2 + ' ' + produceritem.locality + ' ' + produceritem.state + ' ' + produceritem.postalCode + '" data-cta="Search Map" data-agent="' + levelTitle + produceritem.prdName + '">';
                    if ($('#faaAddressLabel').val() != '') {
                        outputHtml += $('#faaAddressLabel').val();
                    } else {
                        outputHtml += produceritem.addressLine + addressLine2 + '<br/>' + produceritem.locality + ' ' + produceritem.state + ' ' + produceritem.postalCode;
                    }
                    outputHtml += '</a></p></div>';
                }

                /* colunm end */
                outputHtml += '</div>';
                /* main row start */
                /* additional row start*/
                if (produceritem.field1 != "") {
                    outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field1 + '</p></div></div>';
                }
                if (produceritem.field2 != "") {
                    outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field2 + '</p></div></div>';
                }
                if (produceritem.field3 != "") {
                    outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field3 + '</p></div></div>';
                }
                if (produceritem.field4 != "") {
                    outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field4 + '</p></div></div>';
                }
                if (produceritem.field5 != "") {
                    outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field5 + '</p></div></div>';
                }
                /* additional row ends */
                outputHtml += '</div></div></div>';
            });

            return outputHtml;
        }
        $(document).on('click', "#faa-load-more", function(e) {
            e.preventDefault();
            var outputHtml = "";
            var regionindex = parseInt($(this).attr('data-rindex'));
            var stateindex = parseInt($(this).attr('data-stindex'));
            var leveltitle = $(this).attr('data-leveltitle');
            var startindex = parseInt($(this).attr('data-startindex'));
            var counter = 10;
            var hideLoadmore = false;
            if (stateindex == -1) {
                var regionData = resources[0].productdata;
                if (regionData.length <= (startindex + counter)) {
                    hideLoadmore = true;
                }
                outputHtml = generateLevel3Html(regionData.slice(startindex, startindex + counter), '-' + regionindex, '', '', leveltitle, startindex);
            } else {
                var regionData = resources[regionindex].data;
                leveltitle = resources[regionindex].level1 + ":";
                var stateData = regionData[stateindex].productdata;
                leveltitle = leveltitle + regionData[stateindex].level2 + ":";
                if (stateData.length <= (startindex + counter)) {
                    hideLoadmore = true;
                }
                outputHtml = generateLevel3Html(stateData.slice(startindex, startindex + counter), '-' + regionindex, '-' + stateindex, '', leveltitle, startindex);
            }

            $(this).attr('data-startindex', startindex + counter);
            $(this).parent().before(outputHtml);
            if (hideLoadmore) {
                $(this).parent().css('display', 'none');
            }
        });

		$(window).on('unload', function() {
			$(window).scrollTop(0);
		});
	}
});
$(function () {
	if ($(".c-faa .faa-section-wrapper").length > 0) {
		var api = $(this).find("#faaapi").val();
		$.ajaxSetup({
			async: false
		});
		var countryCode = $('#countryCode').val();
		var countryLang = $('#countryLang').val();
		var countryregion = $('#countryregion').val();
		var mailSubject = $('#faamailSubject').val();
		var mailBody = $('#faamailBody').val();
		var pattern = /^((http|https|ftp):\/\/)/;
		if (countryCode == "") {
			countryCode = 'us';
			countryLang = 'en';
		}
		$.getJSON(api+"?country=" + countryCode + "&lang=" + countryLang + "&type=" + $('#faatype').val() + "&region=" + countryregion, parsefaaResources)
			.fail(function (jqxhr, status, error) {
				console.error(status, error);
			});

		function parsefaaResources(data) {
			var resources = data;
			window.faaresources = resources;
		}


		var resources = window.faaresources.results;
		var carousleHtml = "";
		var regionIndexstr = "";
		var stateIndexstr = "";
		var level1title = '';
		var level2title = '';
		resources && resources.forEach(function (regionitem, regionindex) {

			if (regionitem.level1) {
				carousleHtml += level1html(regionitem, regionindex, 'mainheading');
			} else if (regionitem.productdata) {
				carousleHtml += level3html(regionitem.productdata, regionindex, '', '', '');
			}


		});
		$(document).ready(function () {
			$('.card-header').on('click', function () {
				setTimeout(function () {
					$('.card-header > div').each(function (i, obj) {
						if ($(obj).attr('aria-expanded') == "true") {
							$(obj).parent().addClass('activeFAA');
						} else {
							$(obj).parent().removeClass('activeFAA');
						}

						console.log(obj);
					});
				}, 100);


			});
		});

		function level1html(regionitem, regionindex, heading) {
			var outputHtml = ""
			if (regionitem.level1 != "") {
				level1title = regionitem.level1;
				regionIndexstr = "-" + regionindex;
				var levelNumber = "1";
				if (!regionitem.data) {
					var levelNumber = "2";
				}
				outputHtml += '<div class="regiondiv-card card"><div class="regiondiv-card-header card-header" id="heading' + regionIndexstr + '">';
				outputHtml += '<div class="regiondiv ' + heading + '" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + '" data-agent="' + level1title + '" data-cta="Search Expand: Level ' + levelNumber + '"><div class="mb-0">' + regionitem.level1 + '</div></div>';
				outputHtml += '</div>';
				outputHtml += '<div id="collapse' + regionIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + '"><div class="card-body"><div id="accordion' + regionIndexstr + '" >';
			} else {
				regionIndexstr = "";
			}

			if (regionitem.data) {
				outputHtml += level2html(regionitem.data, regionIndexstr);
			} else if (regionitem.productdata) {
				outputHtml += level3html(regionitem.productdata, regionIndexstr, '', '', level1title + ':');
			}

			if (regionitem.level1 != "") {
				outputHtml += '</div></div></div></div>';
			}
			return outputHtml;
		}

		function level2html(regionitem, regionIndexstr) {
			var outputHtml = '';
			regionitem.forEach(function (stateitem, stateindex) {
				if (stateitem.level2 != "") {
					level2title = stateitem.level2;
					stateIndexstr = "-" + stateindex;
					outputHtml += '<div class="statediv-card card">';
					outputHtml += '<div class="statediv-card-header card-header" id="heading' + regionIndexstr + stateIndexstr + '"><div class="statediv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '" data-agent="' + level1title + ':' + level2title + '" data-cta="Search Expand: Level 2"><div class="mb-0">';
					outputHtml += stateitem.level2 + '</div></div></div>';
					outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '"><div class="card-body">       <div id="accordion' + regionIndexstr + stateIndexstr + '">';
				} else {
					stateIndexstr = "";
				}
				if (stateitem.productdata) {
					outputHtml += level3html(stateitem.productdata, regionIndexstr, stateIndexstr, '', level1title + ':' + level2title + ':');
				}
				if (stateitem.level2 != "") {
					outputHtml += '</div></div></div></div>';
				}
			});
			return outputHtml;
		}

		function level3html(stateitem, regionIndexstr, stateIndexstr, heading, levelTitle) {
			var outputHtml = "";
			stateitem.forEach(function (produceritem, producerindex) {
				outputHtml += '<div class="producerdiv-card card">';
				outputHtml += '<div class="producerdiv-header card-header ' + heading + '" id="heading' + regionIndexstr + stateIndexstr + '-' + producerindex + '"><div class="producerdiv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '-' + producerindex + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '-' + producerindex + '" data-agent="' + levelTitle + produceritem.prdName + '" data-cta="Search Expand: Level 3" data-city="' + produceritem.locality + '" data-state="' + produceritem.state + '" data-zip="' + produceritem.postalCode + '"><div class="row agency-name">';
				outputHtml += '<div class="mb-0 col-md-9 col-sm-12">';
				outputHtml += produceritem.prdName;
				if (produceritem.PrdDesctiption) {
					outputHtml += '<div class="agent-description"><p>' + produceritem.PrdDesctiption + '</p></div>';
				}
				outputHtml += '</div><div class="col-md-3 col-sm-12 agency-image">';
				if (produceritem.cornerstone == "true") {
					outputHtml += '<img src="' + produceritem.imagePath + '" alt="Chubb Cornerstore Agency" ' + 'width="125"/>';
				}

				outputHtml += '</div><span class="faa-agentToggle"> <span class="faa-expand">' + $('#faaexpand').val() + '</span><span class="faa-collapse">' + $('#faacollapse').val() + '</span></span></div></div></div>';
				outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '-' + producerindex + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '-' + producerindex + '"><div class="card-body bbgrey">';
				/* main row start */
				outputHtml += '<div class="row">';
				/* colunm start */
				outputHtml += '';
				if (produceritem.url != "") {
					if (!pattern.test(produceritem.url)) {
						var agenturl = 'http://' + produceritem.url
					} else {
						var agenturl = produceritem.url
					}
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/website.svg" alt="website icon" /></span><a target="_blank" class="icontext offsite" href="' + agenturl + '" data-cta="Search Offsite" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faawebsite').val() != '') {
						outputHtml += $('#faawebsite').val();
					} else {
						outputHtml += produceritem.url
					}
					outputHtml += '</a></p></div>';
				}
				if (produceritem.prdPhone != "") {
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/tel.svg" alt="telephone icon" /></span><a class="icontext call" href="tel:' + produceritem.prdPhone + '" data-cta="Search Call" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaphone').val() != '') {
						outputHtml += '<span class="mobileonly">' + $('#faaphone').val() + '</span><span class="deskonly">' + produceritem.prdPhone + '</span>';
					} else {
						outputHtml += produceritem.prdPhone;
					}
					outputHtml += '</a></p></div>';
				}
				if (produceritem.emailAddress != "") {
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/email.svg" alt="email icon" /></span><a class="icontext email" target="_blank"';
					outputHtml += 'href="mailto:' + produceritem.emailAddress + '?';
					if (mailSubject != "")
						outputHtml += 'subject=' + encodeURIComponent(mailSubject) + '&amp;';
					if (mailBody != "")
						outputHtml += 'body=' + encodeURIComponent(mailBody);
					outputHtml += '" data-cta="Search Email" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaemail').val() != '') {
						outputHtml += $('#faaemail').val();
					} else {
						outputHtml += produceritem.emailAddress;
					}
					outputHtml += '</a></p></div>';
				}
				if (produceritem.addressLine != "") {
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/pin.svg" alt="map pin icon" /></span><a class="icontext map" target="_blank" href="https://www.bing.com/maps/?q=' + produceritem.addressLine + ' ' + produceritem.locality + ' ' + produceritem.state + ' ' + produceritem.postalCode + '" data-cta="Search Map" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaaddress').val() != '') {
						outputHtml += $('#faaaddress').val();
					} else {
						outputHtml += produceritem.addressLine + '<br/>' + produceritem.locality + ' ' + produceritem.state + ' ' + produceritem.postalCode;
					}
					outputHtml += '</a></p></div>';
				}

				/* colunm end */
				outputHtml += '</div>';
				/* main row start */
				/* additional row start*/
				if (produceritem.field1 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field1 + '</p></div></div>';
				}
				if (produceritem.field2 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field2 + '</p></div></div>';
				}
				if (produceritem.field3 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field3 + '</p></div></div>';
				}
				if (produceritem.field4 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field4 + '</p></div></div>';
				}
				if (produceritem.field5 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field5 + '</p></div></div>';
				}
				/* additional row ends */
				outputHtml += '</div></div></div>';
			});

			return outputHtml;
		}
		$('#accordion').html(carousleHtml);
		addFAAevents($('.c-faa'))
	}
});
$(function () {
	if ($(".c-faa-prs .faa-prs-section-wrapper").length > 0) {
		$.ajaxSetup({
			async: false
		});
		var countryCode = $('#countryCode').val();
		var countryLang = $('#countryLang').val();
		var countryregion = $('#countryregion').val();
		var mailSubject = $('#faamailSubject').val();
		var mailBody = $('#faamailBody').val();
		var pattern = /^((http|https|ftp):\/\/)/;
		if (countryCode == "") {
			countryCode = 'us';
			countryLang = 'en';
		}
		/* var usPRS = false;
		if (countryCode == "us" && $('#faatype').val() == "prs") {
			usPRS = true;
		} */
		$.getJSON("/bin/faa-prs", parsefaaResources)
			.fail(function (jqxhr, status, error) {
				console.error(status, error);
			});

		function parsefaaResources(data) {
			var resources = data;
			window.faaresources = resources;
		}


		var resources = window.faaresources.results;
		var carousleHtml = "";
		var regionIndexstr = "";
		var stateIndexstr = "";
		var level1title = '';
		var level2title = '';
		resources && resources.forEach(function (regionitem, regionindex) {

			if (regionitem.level1) {
				carousleHtml += level1html(regionitem, regionindex, 'mainheading');
			} else if (regionitem.productdata) {
				carousleHtml += level3html(regionitem.productdata, regionindex, '', '', '');
			}


		});
		$(document).ready(function () {
			$('.card-header').on('click', function () {
				setTimeout(function () {
					$('.card-header > div').each(function (i, obj) {
						if ($(obj).attr('aria-expanded') == "true") {
							$(obj).parent().addClass('activeFAA');
						} else {
							$(obj).parent().removeClass('activeFAA');
						}

						console.log(obj);
					});
				}, 100);


			});
		});

		function level1html(regionitem, regionindex, heading) {
			var outputHtml = ""
			if (regionitem.level1 != "") {
				level1title = regionitem.level1;
				regionIndexstr = "-" + regionindex;
				var levelNumber = "1";
				if (!regionitem.data) {
					var levelNumber = "2";
				}
				outputHtml += '<div class="regiondiv-card card"><div class="regiondiv-card-header card-header" id="heading' + regionIndexstr + '">';
				outputHtml += '<div class="regiondiv ' + heading + '" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + '" data-agent="' + level1title + '" data-cta="Search Expand: Level ' + levelNumber + '"><div class="mb-0">' + regionitem.level1 + '</div></div>';
				outputHtml += '</div>';
				outputHtml += '<div id="collapse' + regionIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + '"><div class="card-body"><div id="accordion' + regionIndexstr + '" >';
			} else {
				regionIndexstr = "";
			}

			if (regionitem.data) {
				outputHtml += level2html(regionitem.data, regionIndexstr);
			} else if (regionitem.productdata) {
				outputHtml += level3html(regionitem.productdata, regionIndexstr, '', '', level1title + ':');
			}

			if (regionitem.level1 != "") {
				outputHtml += '</div></div></div></div>';
			}
			return outputHtml;
		}

		function level2html(regionitem, regionIndexstr) {
			var outputHtml = '';
			regionitem.forEach(function (stateitem, stateindex) {
				if (stateitem.level2 != "") {
					level2title = stateitem.level2;
					stateIndexstr = "-" + stateindex;
					outputHtml += '<div class="statediv-card card">';
					outputHtml += '<div class="statediv-card-header card-header" id="heading' + regionIndexstr + stateIndexstr + '"><div class="statediv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '" data-agent="' + level1title + ':' + level2title + '" data-cta="Search Expand: Level 2"><div class="mb-0">';
					outputHtml += stateitem.level2 + '</div></div></div>';
					outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '"><div class="card-body">       <div id="accordion' + regionIndexstr + stateIndexstr + '">';
				} else {
					stateIndexstr = "";
				}
				if (stateitem.productdata) {
					outputHtml += level3html(stateitem.productdata, regionIndexstr, stateIndexstr, '', level1title + ':' + level2title + ':');
				}
				if (stateitem.level2 != "") {
					outputHtml += '</div></div></div></div>';
				}
			});
			return outputHtml;
		}

		function level3html(stateitem, regionIndexstr, stateIndexstr, heading, levelTitle) {
			var outputHtml = "";
			var stateItemArray = stateitem;
			// if (usPRS) {
				stateItemArray = stateitem.filter(
					function (element) {
						return element.type && element.type.toUpperCase().indexOf("TOP 5") >= 0;
					}
				);
			// }

			outputHtml = generateLevel3Html(stateItemArray, regionIndexstr, stateIndexstr, heading, levelTitle, 0);

			if ((stateitem && stateItemArray && (stateitem.length - stateItemArray.length > 0))) {
				var regionIndex = -1;
				if (regionIndexstr) {
					regionIndex = regionIndexstr.replace("-", "");
				}
				var stateIndex = -1;
				if (stateIndexstr) {
					stateIndex = stateIndexstr.replace("-", "");
				}
				var dataAgent = levelTitle.replace(/:$/, '');
				outputHtml = outputHtml + '<div class="faa-loadmore-wrapper">' +
					'<a title="Load More" data-rindex="' + regionIndex + '" data-stindex="' + stateIndex + '" data-startindex="' + stateItemArray.length +
					'" data-leveltitle="' + levelTitle + '" class="btn btn-border arrow faa-loadmore"' +
					'data-agent="' + dataAgent + '" data-cta="Load More: Level 3">Load More </a>' +
					'</div>';
			}
			return outputHtml;
		}

		function generateLevel3Html(stateitem, regionIndexstr, stateIndexstr, heading, levelTitle, updatedProducerIndex) {
			var outputHtml = "";
			if (!updatedProducerIndex) {
				updatedProducerIndex = 0;
			}
			stateitem.forEach(function (produceritem, producerindex) {
				outputHtml += '<div class="producerdiv-card card">';
				outputHtml += '<div class="producerdiv-header card-header ' + heading + '" id="heading' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '"><div class="producerdiv collapsed" role="button" data-toggle="collapse" href="#collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" aria-expanded="false" aria-controls="collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" data-agent="' + levelTitle + produceritem.prdName + '" data-cta="Search Expand: Level 3" data-city="' + produceritem.locality + '" data-state="' + produceritem.stateCode + '" data-zip="' + produceritem.postalCode + '"><div class="row agency-name">';
				outputHtml += '<div class="mb-0 col-md-9 col-sm-12">';
				outputHtml += produceritem.prdName;
				if (produceritem.prdDescription) {
					outputHtml += '<div class="agent-description"><p>' + produceritem.prdDescription + '</p></div>';
				}
				outputHtml += '</div><div class="col-md-3 col-sm-12 agency-image">';
				if (produceritem.cornerstone == "true") {
					outputHtml += '<img src="' + produceritem.imagePath + '" alt="Chubb Cornerstone Agency" width="125"/>';
				}

				outputHtml += '</div><span class="faa-agentToggle"> <span class="faa-expand">' + $('#faaexpand').val() + '</span><span class="faa-collapse">' + $('#faacollapse').val() + '</span></span></div></div></div>';
				outputHtml += '<div id="collapse' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '" class="collapse" data-parent="" aria-labelledby="heading' + regionIndexstr + stateIndexstr + '-' + (producerindex + updatedProducerIndex) + '"><div class="card-body bbgrey">';
				/* main row start */
				outputHtml += '<div class="row">';
				/* colunm start */
				outputHtml += '';
				if (produceritem.url != "") {
					if (!pattern.test(produceritem.url)) {
						var agenturl = 'http://' + produceritem.url
					} else {
						var agenturl = produceritem.url
					}
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/website.svg" /></span><a target="_blank" class="icontext" href="' + agenturl + '" data-cta="Search Offsite" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faawebsite').val() != '') {
						outputHtml += $('#faawebsite').val();
					} else {
						outputHtml += produceritem.url
					}
					outputHtml += '</a></p></div>';
				}
				if (produceritem.prdPhone != "") {
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/tel.svg" /></span><a class="icontext" href="tel:' + produceritem.prdPhone + '" data-cta="Search Call" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaphone').val() != '') {
						outputHtml += '<span class="mobileonly">' + $('#faaphone').val() + '</span><span class="deskonly">' + produceritem.prdPhone + '</span>';
					} else {
						outputHtml += produceritem.prdPhone;
					}
					outputHtml += '</a></p></div>';
				}
				if (produceritem.emailAddress != "") {
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/email.svg" /></span><a class="icontext" target="_blank"';
					outputHtml += 'href="mailto:' + produceritem.emailAddress + '?';
					if (mailSubject != "")
						outputHtml += 'subject=' + encodeURIComponent(mailSubject) + '&amp;';
					if (mailBody != "")
						outputHtml += 'body=' + encodeURIComponent(mailBody);
					outputHtml += '" data-cta="Search Email" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaemail').val() != '') {
						outputHtml += $('#faaemail').val();
					} else {
						outputHtml += produceritem.emailAddress;
					}
					outputHtml += '</a></p></div>';
				}
				
				if (produceritem.addressLine != "") {
					var addressLine2 = "";
					if (produceritem.addressLine) {
						addressLine2 = ", " + produceritem.prdaddr2;
					}
					outputHtml += '<div class="col-md-6 col-sm-12"><p class="icon-container"><span class="faa-svg-icons"><img src="/content/dam/faa/pin.svg" /></span><a class="icontext" target="_blank" href="https://www.bing.com/maps/?q=' + produceritem.addressLine + addressLine2 +' ' + produceritem.locality + ' ' + produceritem.stateCode + ' ' + produceritem.postalCode + '" data-cta="Search Map" data-agent="' + levelTitle + produceritem.prdName + '">';
					if ($('#faaaddress').val() != '') {
						outputHtml += $('#faaaddress').val();
					} else {
						outputHtml += produceritem.addressLine + addressLine2 + '<br/>' + produceritem.locality + ' ' + produceritem.stateCode + ' ' + produceritem.postalCode;
					}
					outputHtml += '</a></p></div>';
				}

				/* colunm end */
				outputHtml += '</div>';
				/* main row start */
				/* additional row start*/
				if (produceritem.field1 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field1 + '</p></div></div>';
				}
				if (produceritem.field2 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field2 + '</p></div></div>';
				}
				if (produceritem.field3 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field3 + '</p></div></div>';
				}
				if (produceritem.field4 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field4 + '</p></div></div>';
				}
				if (produceritem.field5 != "") {
					outputHtml += '<div class="row"><div class="col-md-12"><p>' + produceritem.field5 + '</p></div></div>';
				}
				/* additional row ends */
				outputHtml += '</div></div></div>';
			});

			return outputHtml;
		}


		$('#accordion').html(carousleHtml);
		/* $(document).on('click', ".faa-loadmore", function (e) {
			e.preventDefault();
			console.log("testing  ", $(this).attr('leveltitle'));
		}); */

		$("#accordion .faa-loadmore").on('click', function (e) {
			e.preventDefault();
			var outputHtml = "";
			var regionindex = parseInt($(this).attr('data-rindex'));
			var stateindex = parseInt($(this).attr('data-stindex'));
			var leveltitle;
			var startindex = parseInt($(this).attr('data-startindex'));
			var counter = 10;
			var hideLoadmore = false;
			if (stateindex == -1) {
				var regionData = resources[regionindex].productdata;
				if (regionData.length <= (startindex + counter)) {
					hideLoadmore = true;
				}
				outputHtml = generateLevel3Html(regionData.slice(startindex, startindex + counter), '-' + regionindex, '', '', leveltitle, startindex);
			} else {
				var regionData = resources[regionindex].data;
				leveltitle = resources[regionindex].level1+":";
				var stateData = regionData[stateindex].productdata;
				leveltitle = leveltitle + regionData[stateindex].level2+":";
				if (stateData.length <= (startindex + counter)) {
					hideLoadmore = true;
				}
				outputHtml = generateLevel3Html(stateData.slice(startindex, startindex + counter), '-' + regionindex, '-' + stateindex, '', leveltitle, startindex);
			}

			$(this).attr('data-startindex', startindex + counter);
			$(this).parent().before(outputHtml);
			if (hideLoadmore) {
				$(this).parent().css('display', 'none');
			}
		});
	}
});
    $(function () {
        function textEllipsis(element, number) {
    $clamp(element, { clamp: number });
}
        if ($('.agent-marketing').length == 1) {
			$('[data-toggle="tooltip"]').on('mouseenter mouseleave',function(){
			$('.tooltip.show').remove();
			});
            $('#agent-overlay').show();
            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = window.location.search.substring(1);
                if (window.location.hash.substring(1) != "" && typeof window.location.hash.substring(1).split('?')[1] != "undefined")
                    sPageURL = window.location.hash.substring(1).split('?')[1];
                var sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }

                }
                return '';
            };
            // Grab data sync
            $.ajaxSetup({ async: false });
            // Fetch JSON
            //"/us/en/individuals-families/agent-marketing-center/articles/_centers.json  /Individuals-And-Families/AgentMarketing/
            $.getJSON($('#tilejson').val(), parseResources)
                .fail(function (jqxhr, status, error) {
                    console.error(status, error);
                }
            );
            ///us/en/individuals-families/agent-marketing-center/articles/_categories.json
            $.getJSON($('#filterjson').val(), parseFilters)
                .fail(function (jqxhr, status, error) {
                    console.error(status, error);
                }
            );

            // Parsing functions
            function parseResources(data) {
                var resources = data;
                window.resources = resources;
            }
            function parseFilters(data) {
                var filters = data;
                window.filters = filters;

            }
            // Set it to global
            var windowWidth = $(window).width();
            var resources = window.resources,
                  filters = window.filters;
            var topicsHTML = '', modalHTML = "", find = "";
            var initDataCount = 0;
            var reloadVideo = false;
            var topicSelected = [];
            var assetSelected = [];
            var resetFilter = false;
            var initwidth = 0;
            var sortby = '';
            var temp = false;
            var favdisplay = false;
            var assetHTML = '';
            var topicArray = []; var assetArray = [];
            var outputResources = "";
            var topicDl = getUrlParameter('t');
            if (topicDl != '') {
                topicSelected = topicDl.split(",");
            }
            var assetDl = getUrlParameter('a');
            if (assetDl != '') {
                assetSelected = assetDl.split(",");
            }
            var searchdl = getUrlParameter('search');
            var sortdl = getUrlParameter('sort');
            if (searchdl != '') {
                $('.agent-marketing__search-pannel-input-search').val(searchdl);
            }
            if (sortdl != '') {
                sortby = sortdl;
                $('.agent-marketing__sort-pannel-text .sort-options').children('a').each(function () {
                    if ($(this).attr('data-title') == sortdl) {
                        $(this).addClass('active');
                        $(this).find("input[type='checkbox']").prop('checked', true);
                        $('.sort-options').addClass('topic-filter-active');
                    }
                });
            }

            filters && filters.forEach(function (item) {
                var filterItem = item.values;
                if (filterItem && filterItem.length) {
                    filterItem.forEach(function (elem) {
                        topicArray.push(elem.name);
                        if (item.categoryname == "topics") {
                            let dataCta = `filter: asset types: ${(elem.name || '').gtmString()}`
                            if (jQuery.inArray(elem.id, topicSelected) == -1)
                                topicsHTML += `<p data-cta="${dataCta}" class="agent-marketing__topic-filter-item agent-marketing-${elem.theme}"`;
                            else
                                topicsHTML += `<p data-cta="${dataCta}" class="agent-marketing__topic-filter-item agent-marketing-${elem.theme} active"`;
                            if (windowWidth > 1199) {
                                topicsHTML += 'data-toggle="tooltip" data-placement="bottom"';
                            }
                            topicsHTML += 'title="' + elem.name + '" data-name ="' + elem.name + '"  data-title="' + elem.id + '">';
                            topicsHTML += '<span class="topic-filter-icon">';
                            topicsHTML += '<i class="icon ' + elem.icon + '" aria-hidden="true"></i>';
                            topicsHTML += '</span>';
                            topicsHTML += '<label class="topic-filter-icon-name mobile-only" for="' + elem.name.replace(/ /g,'') + '" >' + elem.name + '</label>';
                            topicsHTML += '<span class="topic-filter-icon-checkbox mobile-only">';
                            if (jQuery.inArray(elem.id, topicSelected) == -1)
                                topicsHTML += '<input type="checkbox" id="' + elem.name.replace(/ /g, '') + '"/>';
                            else
                                topicsHTML += '<input type="checkbox" checked="checked" id="' + elem.name.replace(/ /g, '') + '"/>';
                            topicsHTML += '</span></p>';
                        }
                        if (item.categoryname == "Asset") {
                            assetArray.push(elem.name);
                            assetHTML += `<p data-name ="${elem.name}" class="agent-marketing__asset-type-filter-item`;
                            if (jQuery.inArray(elem.id, assetSelected) != -1)
                                assetHTML += ' active ';
                            assetHTML += '" data-title="' + elem.id + '"><span class="asset-type-checkbox mobile-only">';
                            let dataCta = `filter: asset types: ${(elem.name || '').gtmString()}`
                            if (jQuery.inArray(elem.id, assetSelected) == -1)
                                assetHTML += `<input type="checkbox" id="${elem.name.replace(/ /g, '')}" data-cta="${dataCta}" data-name ="${elem.name}"/>`;
                            else
                                assetHTML += `<input type="checkbox" checked="checked" id="${elem.name.replace(/ /g, '')}" data-cta="${dataCta}" data-name ="${elem.name}"/>`;
                            assetHTML += '</span><label for="' + elem.name.replace(/ /g, '') + '">' + elem.name + '</label></p>';
                        }
                    });


                }
            });

            if (topicSelected.length > 0)
                $('#topic-filter-container').addClass('topic-filter-active');
            $('#topic-filter-container').html(topicsHTML);

            if (assetSelected.length > 0)
                $('#asset-type-filter-container').addClass('topic-filter-active');
            $('#asset-type-filter-container').html(assetHTML);
            topicsHTML = null; assetHTML = null;
            function sortData(arry, field, str) {
                str = str || "";
                if (field == 'order')
                    return arry.sort(function (a, b) {
                        var initial = a['order'];
                        var next = b['order'];
                        if (initial == "") { initial = '99'; }
                        if (next == "") { next = '99'; }
                        if (parseInt(initial) < parseInt(next))
                            return -1;
                        if (parseInt(initial) > parseInt(next))
                            return 1;
                        return 0;
                    });
                else if (field == 'date')
                    return arry.sort(function (a, b) {
                        var initial = a['date'];
                        var next = b['date'];

                        if ((a['order'] != "" || b['order'] != "") && str != "")
                            return 0;
                        if (initial > next)
                            return -1;
                        if (initial < next)
                            return 1;
                        if (initial == next)
                            return (a['title'] > b['title']) ? 1 : ((a['title'] < b['title']) ? -1 : 0);
                        return 0;
                    });
                else {
                    return arry.sort(function (a, b) {
                        return (a[field] > b[field]) ? 1 : ((a[field] < b[field]) ? -1 : 0);
                    });
                }
            }
            function removeParam(key, sourceURL) {
                var rtn = sourceURL.split("?")[0],
                    param,
                    params_arr = [],
                    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
                if (queryString !== "") {
                    params_arr = queryString.split("&");
                    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                        param = params_arr[i].split("=")[0];
                        if (param === key) {
                            params_arr.splice(i, 1);
                        }
                    }
                    rtn = rtn + "?" + params_arr.join("&");
                }
                return rtn;
            }
            var cookieList = function (cookieName) {
                var cookie = $.cookie(cookieName);
                var items = cookie ? cookie.split(/,/) : new Array();
                return {
                    "add": function (val) {
                        items.push(val);
                        $.cookie(cookieName, items.join(','), { expires: 365, path: '/' });
                    },
                    "remove": function (val) {
                        indx = items.indexOf(val);
                        if (indx != -1) items.splice(indx, 1);
                        $.cookie(cookieName, items.join(','), { expires: 365, path: '/' });
                    },
                    "clear": function () {
                        items = null;
                        $.cookie(cookieName, null, { expires: 365, path: '/' });
                    },
                    "items": function () {
                        return items;
                    }
                }
            };
            var favlist = new cookieList("agent-marketing");
            var cookieArr = favlist.items();
            if (cookieArr.length <= 0) {
                $('#agent-marketing-like-pannel').addClass('disabled');
                $('.fav-mobile').hide();
            }
            function getCategoryId(catname, cat) {
                for (var i = 0; i < filters.length; i++) {
                    if (filters[i].categoryname == cat) {
                        for (var j = 0; j < filters[i].values.length; j++) {
                            if (filters[i].values[j].name == catname) {
                                return filters[i].values[j];
                            }
                        }
                    }
                }
            }
            var categoryDetail;
            function generateTile(itemR, current_column, row, left_out, top, width) {
                var cookieArr = favlist.items();
                var outputhtml = "";
                categoryDetail = getCategoryId(itemR.topictype[0].name, 'topics');
                var themeColor = categoryDetail.theme.replace('-theme', '');
                outputhtml += '<div id="' + itemR.id + '" class="agent-marketing__item agent-marketing-green-theme c' + current_column + ' r' + row + '" style="left:' + left_out + 'px;top:' + top + 'px;width:' + width + 'px;"' + ' data-cta="' + itemR.title.gtmString() + ' - tile"' + Object.entries(getGtmAttrs(itemR.link, itemR.title)).reduce((a, b) => a += `${b[0]}="${b[1]}" `, '') + ' >';
                outputhtml += '<div class="agent-marketing__item-image ' + itemR.tileformat + '-layout">';
                if (itemR.flag == "new")
                    outputhtml += '<span class="new-flag"><img alt="new flag" src="/content/dam/aem-chubb-global/amc/images/New_' + themeColor + '.svg" /></span>';
                if (itemR.flag == "featured")
                    outputhtml += '<span class="featured-flag"><img alt="featured flag" src="/content/dam/aem-chubb-global/amc/images/Featured_' + themeColor + '.svg" /></span>';
                outputhtml += '<img src="' + itemR.thumbnail + '" alt="' + itemR.title + '" />';
                outputhtml += '<div class="agent-marketing__icon-container"><div data-id="' + itemR.id + '"';
                if (windowWidth > 1199) {
                    outputhtml += ' data-toggle="tooltip" data-placement="right"';
                }
                if (jQuery.inArray(itemR.id, cookieArr) == -1) {
                    outputhtml += ' title="Save this item!" class="agent-marketing__item-fav"  data-cta="' + itemR.title.gtmString() + ' - save item"><i class="icon icon-fav"></i></div>';
                } else {
                    outputhtml += ' title="Remove this item!" class="agent-marketing__item-fav active" data-cta="' + itemR.title.gtmString() + ' - remove item"><i class="icon icon-fav"></i></div>';
                }
                outputhtml += '<div class="agent-marketing__item-share">';
                outputhtml += '<span title="Share - Risk video" class="cyber-btn share-btn tooltip-wrap">';
                outputhtml += '<i class="icon icon-share"></i>';
                outputhtml += '<div class="share-tooltip">';
                var shareurl = "";
                if (itemR.link.indexOf('://') > 0 || itemR.link.indexOf('//') === 0) {
                    shareurl = itemR.link;
                } else {
                    shareurl = window.location.origin + itemR.link;
                }
				var linkedinshareurl = shareurl;
				if (itemR.videosrc != "") {
                    if (itemR.videosrc == "brightcove"){
						linkedinshareurl = encodeURIComponent('https://players.brightcove.net/818971943001/default_default/index.html?videoId='+itemR.videoid);	
                        shareurl = 'https://players.brightcove.net/818971943001/default_default/index.html?videoId='+itemR.videoid;	

					}
                }	
                outputhtml += '<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=' + linkedinshareurl + '&amp;title=Check out ' + itemR.title + '&amp;summary= " data-social-bookmark="LinkedIn" target="_blank" title="LinkedIn - Open in new window" data-tracked="true"><em class="fa fa-linkedin"></em></a>';
                outputhtml += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + shareurl + '&amp;title=Check out ' + itemR.title + 'e&amp;description= " data-social-bookmark="Facebook" target="_blank" title="Facebook - Open in new window" data-tracked="true"><em class="fa fa-facebook"></em></a>';
                outputhtml += '<a href="https://twitter.com/intent/tweet?text=Check out ' + itemR.title + '+ +' + shareurl + '&amp;source=webclient" data-social-bookmark="Twitter" target="_blank" title="Twitter - Open in new window" data-tracked="true"><em class="fa fa-twitter"></em></a>';
                outputhtml += '<a href="#" data-social-bookmark="Email" title="Email" id="mailto_brochurelist_sharing_1_' + itemR.id + '" data-tracked="true"><em class="fa fa-envelope-o"></em></a>';
                outputhtml += '</div>';
                outputhtml += '</span>';
                outputhtml += '<div id="mailsubject_brochurelist_sharing_1_' + itemR.id + '" style="display: none;"><ul><li>Check out ' + itemR.title + '</li></ul></div>';
                outputhtml += '<div id="maillink_brochurelist_sharing_1_' + itemR.id + '" style="display: none;">' + shareurl + '</div>';
                outputhtml += '<div id="mailmessagelist_brochurelist_sharing_1_' + itemR.id + '" style="display: none;"><ul><li>You might be interested in this resource from Chubb. Take a look.</li></ul></div>';
                outputhtml += '</div></div>';
                outputhtml += '<div class="agent-marketing-' + categoryDetail.theme + '">';
                if (itemR.videosrc != "") {
                    if (itemR.videosrc == "brightcove")
                        outputhtml += '<a title="play video" class="agent-marketing__iconPlayVideo bc-video-btn"  data-video="video-' + itemR.videoid + '" data-video-title="' + itemR.title + '" ><em class="fa fa-play agent-marketing__play-btn"></em></a>';
                    else
                        outputhtml += '<a title="play video" class="agent-marketing__iconPlayVideo"  data-video-title="' + itemR.title + '" ><em class="fa fa-play agent-marketing__play-btn"></em></a>';
                }
                outputhtml += '</div>';
                outputhtml += '</div>';
                outputhtml += '<div class="agent-marketing__item-content">';
                outputhtml += '<div class="agent-marketing__item-info"><p><em>Asset Type:</em> <strong>';
                itemR.assettype.forEach(function (item, i) {
                    outputhtml += item.name;
                    if (i != itemR.assettype.length - 1)
                        outputhtml += ", ";
                });
                outputhtml += '</strong></p></div>';
                outputhtml += '<div class="agent-marketing__item-title">' + itemR.title.replace(/[™®©]/g, '<sup>$&</sup>') + '</div>';
                //outputhtml += '<div class="agent-marketing__item-desc">' + itemR.description + '</div>';
                outputhtml += '<div class="agent-marketing__item-cta">';
                outputhtml += '<a href="javascript:void(0)" data-href="' + itemR.link + '" class="tile-link" data-cta="' + itemR.title.gtmString() + ' learn more">' + itemR.ctatext + ' <em class="readmore-icon"></em></a>';
                outputhtml += '</div>';
                outputhtml += '</div>';
                outputhtml += '</div>';
                categoryDetail = null;
                return outputhtml;
            }

            initwidth = $(window).width();           
                filterData('1');
                $(window).on('popstate', function (event) {
                    resetAssetandTopicFilters();
                    jumpToSection();
                    topicDl = getUrlParameter('t');
                    if (topicDl != '') {
                        topicSelected = topicDl.split(",");
                    }
                    assetDl = getUrlParameter('a');
                    if (assetDl != '') {
                        assetSelected = assetDl.split(",");
                    }
                    $('#agent-overlay').show();
                    filterData(0);
                });
                $(window).resize(function () {
                    if (initwidth != $(window).width() && $('.modal.show').length == 0) {
                        location.reload();
                        initwidth = $(window).width();

                    }

                });
                function jumpToSection() {
                    var locationHash = window.location.hash;
                    if (locationHash && locationHash.length) {
                        var deepLinkSection = decodeURIComponent(locationHash.substring(1).split('?')[0]);
                        if ($("#" + deepLinkSection).length) {

                            if ($("#" + deepLinkSection).hasClass('modal')) {
                                $('html, body').animate({
                                    scrollTop: $("#" + deepLinkSection).parent().offset().top - 50
                                }, 100);
                                $("#" + deepLinkSection).modal('show');

                            } 
                        }                       
                    }
                }
            /* filter function start */
                function filterData(loadcount) {                    
                var itemContainer = $('#agent-marketing-item-container');
                var agentMarketingContainer = $('.agent-marketing__container');
                //itemContainer.empty();
                var found_names = window.resources;
                var urlParm = '';
                var categoryid = '';
                find = $('.agent-marketing__search-pannel-input-search').val().trim();
                if (find != "" || sortby != "" || assetSelected.length != 0 || topicSelected.length != 0) {
                    if (windowWidth > 1199)
                    $('#agent-marketing-clear-pannel').show('slow');
                    if ($(window).height() < 700 && windowWidth > 1199) {
                        if (!$('*[data-target="#collapseTwo"]').hasClass("collapsed")) {
                            $('#collapseTwo').collapse('toggle');
                        }
                    }
                } else {
                    if (windowWidth > 1199)
                    $('#agent-marketing-clear-pannel').hide('slow');
                    if ($(window).height() < 700 && windowWidth > 1199) {
                        if ($('*[data-target="#collapseTwo"]').hasClass("collapsed")) {
                            $('#collapseTwo').collapse('toggle');
                        }
                    }
                }
              
                if (loadcount == '0') {
                    found_names = $.grep(found_names, function (v) {
                        var itemId = $('#' + v.id);
                        if (itemId.length > 0 && !itemId.is(":hidden")) {
                            itemId.attr('class', 'agent-marketing__item agent-marketing-green-theme');
                            itemId.attr('style', '');
                            itemId.hide();
                        }
                        return true;
                    });
                }
                /*fav function */
                if (favdisplay) {
                    found_names = $.grep(found_names, function (v) {
                        if (jQuery.inArray(v.id, cookieArr) != -1) {
                            return true;
                        }
                    });
                }
                /* filter topicSelected */
                found_names = $.grep(found_names, function (v) {
                    if (topicSelected.length == 0) {
                        return true;
                    } else {
                        temp = $.grep(v.topictype, function (w) {
                            categoryid = getCategoryId(w.name, 'topics');
                            if (topicSelected.indexOf(categoryid.id) > -1) {
                                return true;
                            }
                        });
                        if (temp.length > 0) {
                            return true;
                        }
                    }
                });
                /* filter assetSelected */
                found_names = $.grep(found_names, function (v) {
                    if (assetSelected.length == 0) {
                        return true;
                    } else {
                        temp = $.grep(v.assettype, function (w) {
                            categoryid = getCategoryId(w.name, 'Asset');
                            if (assetSelected.indexOf(categoryid.id) > -1) {
                                return true;
                            }
                        });
                        if (temp.length > 0) {
                            return true;
                        }
                    }
                });

                /* filter search input */

                if (find != "") {
                    find = find.toLowerCase();
                    var topicsearch = false; var assetsearch = false; var assetfound = []; var topicfound = [];
                    var a = find.split(" "), i;
                    if (a.length > 1) {
                        topicArray.forEach(function (item, index) {
                            for (i = 0; i < a.length; i++) {
                                if (item.toLowerCase().indexOf(a[i]) >= 0) {
                                    topicfound.push(topicArray[index]);
                                }
                            }
                        });
                        assetArray.forEach(function (item, index) {
                            for (i = 0; i < a.length; i++) {
                                if (item.toLowerCase().indexOf(a[i]) >= 0) {
                                    assetfound.push(assetArray[index]);
                                }
                            }
                        });
                    }
                    
                    found_names = $.grep(found_names, function (v) {
                        var assestString = ""; var topicstring = '';
                        v.assettype.forEach(function (item, i) {
                            assestString += item.name + " ";
                        });
                        v.topictype.forEach(function (item, i) {
                            topicstring += item.name + " ";
                        });
                        topicstring = topicstring.toLowerCase(); assestString = assestString.toLowerCase();
                        var a = find.split(" "), i;
                        var result = false;
                        if (a.length > 1) {
                            var titlearray = v.title.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ")
                            
                             result = a.every(function (val) {

                                    if (titlearray.indexOf(val) >= 0) {
                                            return true;
                                    }
                                });
                             if (result) {
                                 return true;
                             }
                                if (!result) {
                                for (i = 0; i < a.length; i++) {
                                    
                                        if (v.title.toLowerCase().indexOf(a[i]) >= 0) {
                                            if (assetfound.length > 0 && topicfound.length == 0) {
                                                v.assettype.forEach(function (item, i) {
                                                    if (assetfound.indexOf(item.name) >= 0) {
                                                        result = true;
                                                    }
                                                });
                                            }
                                            if (assetfound.length == 0 && topicfound.length > 0) {
                                                v.topictype.forEach(function (item, i) {
                                                    if (topicfound.indexOf(item.name) >= 0) {
                                                        result = true;
                                                    }
                                                });
                                            }
                                            if (assetfound.length > 0 && topicfound.length > 0) {
                                                var assetf = false; var topicf = false;
                                                v.assettype.forEach(function (item, i) {
                                                    if (assetfound.indexOf(item.name) >= 0) {
                                                        assetf = true;
                                                    }
                                                });
                                                v.topictype.forEach(function (item, i) {
                                                    if (topicfound.indexOf(item.name) >= 0) {
                                                        topicf = true;
                                                    }
                                                });
                                                if (assetf && topicf) {
                                                    result = true;
                                                }
                                            }
                                        }
                                        if (assetfound.length > 0 && topicfound.length > 0) {
                                            var assetf = false; var topicf = false;
                                            v.assettype.forEach(function (item, i) {
                                                if (assetfound.indexOf(item.name) >= 0) {
                                                    assetf = true;
                                                }
                                            });
                                            v.topictype.forEach(function (item, i) {
                                                if (topicfound.indexOf(item.name) >= 0) {
                                                    topicf = true;
                                                }
                                            });
                                            if (assetf && topicf) {
                                                result = true;
                                            }
                                        }
                                        if (result) {
                                            return true;
                                        }
                                   
                                }
                                }
                               
                           /* var jointstring = assestString.toLowerCase() + " " + topicstring.toLowerCase();
                            var jointsearch = false;
                            for (i = 0; i < a.length; i++) {
                                if (jointstring.toLowerCase().indexOf(a[i].toLowerCase()) != -1) {
                                    jointsearch = true;
                                    jointstring = jointstring.toLowerCase().replace(a[i].toLowerCase(), '');
                                } else {
                                    jointsearch = false;
                                }
                            }
                            if (jointsearch) { return true;}*/
                        } else {
                            for (i = 0; i < a.length; i++) {
                                if (v.title.toLowerCase().indexOf(a[i].toLowerCase()) != -1 || assestString.toLowerCase().indexOf(a[i].toLowerCase()) != -1 || topicstring.toLowerCase().indexOf(a[i].toLowerCase()) != -1) {
                                    return true;
                                }
                            }
                        }
                    });
                }

                /* filter sortby input */
                if (sortby != '') {
                    found_names = sortData(found_names, sortby);

                } else if (find == "" && topicSelected.length == 0 && assetSelected.length == 0) {
                    found_names = sortData(found_names, 'order', "1");
                } else {
                  found_names = sortData(found_names, 'date', "");
                }
                if (window.location.href.indexOf("?") < 0) {
                    urlParm += "?"
                } else {
                    urlParm += "&"
                }
                if (topicSelected.length > 0)
                    urlParm += 't=' + topicSelected.toString() + "&";
                if (assetSelected.length > 0)
                    urlParm += 'a=' + assetSelected.toString() + "&";
                if (find != "")
                    urlParm += 'search=' + find + "&";
                if (sortby != '')
                    urlParm += 'sort=' + sortby + "&";
                urlParm = urlParm.slice(0, -1);
                /* prepare Layout */
                var tallest = 0, tempc = 0;
                row = 0;
                if (windowWidth > 767) {
                    agentMarketingContainer.css('width', '100%');
                    itemContainer.css('width', 'calc(100% - 241px)');
                } else {
                    agentMarketingContainer.css('width', '100%');
                    itemContainer.css('width', '100%');
                }
                if (windowWidth > 767) {
                    article_width = 251;
                } else {
                    article_width = 173;
                }
                columns = Math.floor(itemContainer.width() / article_width);
                if (windowWidth > 1199) {
                    itemContainer.css('width', columns * article_width);
                    agentMarketingContainer.css('width', (columns * article_width) + 241);
                } else {
                    itemContainer.css('width', columns * article_width);
                    agentMarketingContainer.css('width', (columns * article_width));
                    $('#agent-marketing-mobile-menu-button').css('width', (columns * article_width));
                }
                /* pre layout ends */


                if (found_names.length > 0) {
                    $('#empty-msg-container').hide();
                    if (loadcount == '1') {
                        initDataCount = found_names.length;
                    }
                    if (found_names.length > initDataCount) {
                        reloadVideo = true;
                        initDataCount = found_names.length;
                    }
                    $(found_names).each(function (index) {
                        /* calculate item css */
                        var current_column,
                    left_out = 0,
                    top = 0,
                    $this = $(this),
                    prevAll = $this.prevAll(),
                    tallest = 0;
                        var single_column_mode = false;
                        if (windowWidth < 200) {
                            single_column_mode = true;
                        }
                        if (single_column_mode === false) {
                            current_column = (index % columns);
                        } else {
                            current_column = 0;
                        }
                        if (index % columns === 0) {
                            row++;
                        }
                        if (single_column_mode === true) {
                            left_out = 0;
                        } else {
                            left_out = (index % columns) * (article_width);
                        }
                        $('#agent-marketing-item-container .agent-marketing__item').each(function (index) {
                            if ($(this).hasClass('c' + current_column)) {
                                top += $(this).outerHeight();
                            }
                        });
                        /* calculate item css ends */
                        var output = "";
                        outputResources = "";
                        if($('#'+this.id).length == 0){
                            output = generateTile(this, current_column, row, left_out, top, article_width);
                            $(output).appendTo('#agent-marketing-item-container');
                            output = null;
                        }
                        else{
                            $('#'+this.id).attr('class','agent-marketing__item agent-marketing-green-theme c'+current_column+' r'+row);
                            $('#' + this.id).css({ 'left': left_out + 'px', 'top': top + 'px', 'width': article_width + 'px', 'display': 'inline-block' });
                        }

                        
                        $('.agent-marketing__item-info p').each(function () {
                            textEllipsis(this, 1);
                        });

                    });
                    /*container height calculation */
                    var column_heights = [],
                    largest = 0;
                    for (var z = 0; z < columns; z++) {
                        var temp_height = 0;
                        itemContainer.find('.c' + z).each(function () {
                            temp_height += $(this).outerHeight();
                        });
                        column_heights[z] = temp_height;
                    }

                    largest = Math.max.apply(Math, column_heights);

                    if (windowWidth > 1199 && largest < $('.agent-marketing__filter-container').outerHeight(true))
                        agentMarketingContainer.css('height', $('.agent-marketing__filter-container').outerHeight(true) + 250);
                    else
                        agentMarketingContainer.css('height', largest + 250);

                    /*container height calculation ends*/
                    var isIE = false;
                    var ua = window.navigator.userAgent;
                    var old_ie = ua.indexOf('MSIE ');
                    var new_ie = ua.indexOf('Trident/');

                    if ((old_ie > -1) || (new_ie > -1)) {
                        isIE = true;
                    }
                    if (windowWidth > 1199 && loadcount == '0' && !isIE) {
                        if (favdisplay && window.pageYOffset != 84) {
                            if (found_names.length <= 3)
                               window.scrollTo({ top: 84, behavior: 'smooth' });
                        }
                        else if (window.pageYOffset != 114) {
                            if (found_names.length <= 3)
                               window.scrollTo({ top: 114, behavior: 'smooth' });
                        }
                    } else if (windowWidth < 1199 && loadcount == '0') {
                        window.scrollTo({ top: 62, behavior: 'smooth' });
                    }
                    
                } else {
                    if (windowWidth > 1199) {
                        if (favdisplay && window.pageYOffset != 84) {
                                window.scrollTo({ top: 84, behavior: 'smooth' });
                        }
                        else if (window.pageYOffset != 114) {
                                window.scrollTo({ top: 114, behavior: 'smooth' });
                        }
                        agentMarketingContainer.css('height', $('.agent-marketing__filter-container').outerHeight() + 250);
                    }  else {
                        agentMarketingContainer.css('height', 250);
                        window.scrollTo({ top: 62, behavior: 'smooth' });
                    }
                    $('#empty-msg-container').show();

                }
                /* set url for deeplinking */
                if (urlParm != '?') {
                    var newURL = location.href.toString();
                    newURL = removeParam("a", newURL);
                    newURL = removeParam("t", newURL);
                    newURL = removeParam("search", newURL);
                    newURL = removeParam("sort", newURL);
                    
                    if (urlParm != '' && urlParm.indexOf("?") === -1 && newURL.indexOf("?") === -1)
                        newURL +="?"
                    window.history.pushState('object', document.title, newURL + urlParm);
                }
                timeout = setTimeout(function () {
                    $('#agent-overlay').hide();
                }, 30);

            }
            /* filter function ends */
           /* resources && resources.forEach(function (item) {
                if (item.videosrc != "") {
                    if (item.videosrc == "brightcove")
                        modalHTML += '<div tabindex="-1" class="modal video-modal bc-video-modal" id="playvideo' + item.id + '" role="dialog">';
                    else
                        modalHTML += '<div tabindex="-1" class="modal video-modal" id="playvideo' + item.id + '" role="dialog">';
                    modalHTML += '<div class="video-modal-dialog modal-dialog" role="document">';
                    modalHTML += '<div class="modal-content"><div class="modal-body">';
                    modalHTML += '<a class="fa fa-times-thin video-modal-close-btn" aria-label="Close" href="#" data-dismiss="modal"></a>';
                    modalHTML += '<div class="embed-responsive embed-responsive-16by9"><p>';
                    if (item.videosrc == "youtube")
                        modalHTML += '<iframe class="embed-responsive-item modal-video" id="TestimonialVideo0" src="https://www.youtube.com/embed/' + item.videoid + '?rel=0&amp;showinfo=0&amp;enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" enablejsapi="1"></iframe>';
                    if (item.videosrc == "brightcove")
                        modalHTML += '  <video id="video-' + item.videoid + '" data-id="video-' + item.videoid + '" data-account="818971943001" data-video-id="' + item.videoid + '" data-player="default" data-embed="default" data-video-title="Cyber Risk…Explained " class="video-js" controls style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"> </video>';
                    modalHTML += '</p></div></div> </div></div></div> </div></div>';
                }
            });
            $('#agent-video-modal').html(modalHTML);*/
            /* search filter selection */
            var timeout = null;
            $('.agent-marketing__search-pannel-input-search').keyup(function () {
                if (windowWidth > 1199) {
                    var tempFind = find;
                    find = $('.agent-marketing__search-pannel-input-search').val().trim();
                    if (find.length < 3 && tempFind == "")
                        return false;
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                   
                    timeout = setTimeout(function () {
                        $('#agent-overlay').show();
                        filterData('0');
                    }, 500);
                }
            });
            function resetAssetandTopicFilters() {
                topicDl = getUrlParameter('t');
                if (topicDl != '')
                    topicSelected = topicDl.split(",");
                else
                    topicSelected = [];
                assetDl = getUrlParameter('a');
                if (assetDl != '')
                    assetSelected = assetDl.split(",");
                else
                    assetSelected = [];
                if (topicSelected.length == 0) {
                    $('#topic-filter-container').removeClass('topic-filter-active');
                }
                if (assetSelected.length == 0) {
                    $('#asset-type-filter-container').removeClass('topic-filter-active');
                }

                $('#asset-type-filter-container').children('p.active').each(function () {
                    var checkboxes = $(this).find("input[type=checkbox]");
                    if (jQuery.inArray($(this).attr("data-title"), assetSelected) == -1) {
                        checkboxes.prop("checked", false);
                        $(this).removeClass("active");
                        assetSelected.splice($.inArray($(this).attr("data-title"), assetSelected), 1);
                    }
                });


                $('#topic-filter-container').children('p.active').each(function () {
                    var checkboxes = $(this).find("input[type=checkbox]");
                    if (jQuery.inArray($(this).attr("data-title"), topicSelected) == -1) {
                        checkboxes.prop("checked", false);
                        $(this).removeClass("active");
                        topicSelected.splice($.inArray($(this).attr("data-title"), topicSelected), 1);
                    }
                });

            }
            /* topic filter seclection */
            $('.agent-marketing__topic-filter-item').click(function (event) {
                if (!$(event.target).is("label")) {                
               
                if (windowWidth > 1199)
                $('#agent-overlay').show();
                var checkboxes = $(this).find("input[type=checkbox]");
                if (checkboxes.prop("checked") == false) {
                    checkboxes.prop("checked", true);
                    $(this).addClass('active');
                    if (jQuery.inArray($(this).attr("data-title"), topicSelected) == -1) {
                        topicSelected.push($(this).attr("data-title"));
                    }
                } else {
                    checkboxes.prop("checked", false);
                    $(this).removeClass('active');
                    topicSelected.splice($.inArray($(this).attr("data-title"), topicSelected), 1);
                }
                if (topicSelected.length > 0) {
                    $('#topic-filter-container').addClass('topic-filter-active');
                } else {
                    $('#topic-filter-container').removeClass('topic-filter-active');
                }
                if (windowWidth > 1199) {
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                   
                    timeout = setTimeout(function () {                        
                        filterData('0');
                    }, 50);
                }
                }
            });
            /* sort filter seclection */
            $('.sort-options a').click(function (event) {
                if (!$(event.target).is("label")) {

                    if (windowWidth > 1199)
                        $('#agent-overlay').show();
                    var checkboxes = $(this).find("input[type=checkbox]");
                    if (checkboxes.prop("checked") == false) {
                        $('.sort-options').find("input[type=checkbox]").prop("checked", false);
                        $('.sort-options a').removeClass('active');
                        checkboxes.prop("checked", true);
                        $(this).addClass('active');
                        $('.sort-options').addClass('topic-filter-active');
                        sortby = $(this).attr("data-title");
                    } else {
                        checkboxes.prop("checked", false);
                        $('.sort-options a').removeClass('active');
                        $('.sort-options').removeClass('topic-filter-active');
                        sortby = "";
                    }
                    if (windowWidth > 1199) {
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        timeout = setTimeout(function () {
                            filterData('0');
                        }, 50);
                    }
                }
            });
            /* asset type filter seclection */
            $('.agent-marketing__asset-type-filter-item ').click(function (event) {
                if (!$(event.target).is("label")) {

                    if (windowWidth > 1199)
                        $('#agent-overlay').show();
                    var checkboxes = $(this).find("input[type=checkbox]");
                    if (checkboxes.prop("checked") == false) {
                        checkboxes.prop("checked", true);
                        $(this).addClass('active');
                        if (jQuery.inArray($(this).attr("data-title"), assetSelected) == -1) {
                            assetSelected.push($(this).attr("data-title"));
                        }
                    } else {
                        checkboxes.prop("checked", false);
                        $(this).removeClass('active');
                        assetSelected.splice($.inArray($(this).attr("data-title"), assetSelected), 1);
                    }
                    if (assetSelected.length > 0) {
                        $('#asset-type-filter-container').addClass('topic-filter-active');
                    } else {
                        $('#asset-type-filter-container').removeClass('topic-filter-active');
                    }
                    if (windowWidth > 1199) {
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        timeout = setTimeout(function () {
                            filterData('0');
                        }, 50);
                    }
                }
            });
            if (windowWidth > 1199) {
                $('#agent-marketing-clear-pannel').click(function () {
                    clearallagentFilters();
                });
            } else {
                $('#clear-all-filter').click(function () {
                    clearallagentFilters();
                });
            }
            function clearallagentFilters() {
                $('.agent-marketing__search-pannel-input-search').val("");
                sortby = ""; find = ""; assetSelected = []; topicSelected = [];
                var newURL = location.href.toString();
                newURL = removeParam("a", newURL);
                newURL = removeParam("t", newURL);
                newURL = removeParam("search", newURL);
                newURL = removeParam("sort", newURL);
                window.history.pushState('object', document.title, newURL);
                $('.agent-marketing__sort-pannel a.active').removeClass('active');
                $('.agent-marketing__sort-pannel span.topic-filter-active').removeClass('topic-filter-active');
                if (windowWidth > 1199) {
                    $('#agent-overlay').show();
                    setTimeout(function () {
                        filterData(0);
                        resetAssetandTopicFilters();
                    }, 10);
                } else {
                    $('#topic-filter-container :checkbox').prop("checked", false);
                    $('#asset-type-filter-container :checkbox').prop("checked", false);
                    $('.agent-marketing__sort-pannel :checkbox').prop("checked", false);

                }

            }
            $('#agent-marketing-item-container').on('click', '.agent-marketing__item-fav', function (e) {
                if (jQuery.inArray($(this).attr("data-id"), cookieArr) == -1) {
                    $(this).addClass('active');
                    favlist.add($(this).attr("data-id"));
                    $(this).attr('data-original-title', "Remove this item!")
                    $(this).attr('data-cta', $(this).attr('data-cta').replace('- save item', '- remove item'))

                } else {
                    $(this).removeClass('active');
                    favlist.remove($(this).attr("data-id"));
                    $(this).attr('data-original-title', "Save this item!");                    
                    $(this).attr('data-cta', $(this).attr('data-cta').replace('- remove item', '- save item'))
                }
                if (cookieArr.length <= 0 && !favdisplay) {
                    $('#agent-marketing-like-pannel').addClass('disabled');
                    $('.fav-mobile').hide();
                } else {
                    $('#agent-marketing-like-pannel').removeClass('disabled');
                    $('.fav-mobile').show();
                }

                e.stopPropagation();
            });

            $('#agent-marketing-like-pannel').on('click', function () {
                if (cookieArr.length <= 0 && !favdisplay) {
                    return false;
                }
                $('#agent-overlay').show();
                $('.agent-marketing__search-pannel-input-search').val("");
                clearallagentFilters();
                if (!favdisplay) {
                    $('.agent-marketing__fav-msg-display').css('display', 'block');
                    if (windowWidth > 1199)
                        $('#agent-marketing-filter-container').css('margin-top', '25px');
                    favdisplay = !favdisplay;
                    $(this).html('<p class="agent-marketing__like-pannel-text"><span class="back-arrow-icon"><em class="fa fa-arrow-left"></em></span><span class="back-text"> Go back to <strong>Agent Marketing Center!</strong></span></p>');
                } else {                 
                    $('.agent-marketing__fav-msg-display').css('display', 'none');
                    if (windowWidth > 1199)
                        $('#agent-marketing-filter-container').css('margin-top', '20px');
                    favdisplay = !favdisplay;
                    $(this).html('<p class="agent-marketing__like-pannel-text"><i class="icon icon-fav"></i> Go to <strong>saved items!</strong></p>');
                }                
                setTimeout(function () {
                    filterData(0);
                }, 10);
                if (cookieArr.length <= 0) {
                    $('#agent-marketing-like-pannel').addClass('disabled');
                }
            });
            $('.fav-mobile').on('click', function () {                
                $('.agent-marketing__search-pannel-input-search').val("");
                if (cookieArr.length <= 0 && !favdisplay) {
                    return false;
                }
                clearallagentFilters();
                //$('#agent-marketing-item-container').html('');
                $('#agent-overlay').show();
                if (!favdisplay) {
                    $('.agent-marketing__fav-msg-display').css('display', 'block');
                    $('body').addClass('sticky-fav-checked');
                    favdisplay = !favdisplay;
                    $('#agent-marketing-mobile-menu-button .fav-mobile').html('<span class="back-arrow-icon"><em class="fa fa-arrow-left"></em></span> Go back to <strong>Agent Marketing Center!</strong>');
                } else {
                    $('.agent-marketing__fav-msg-display').css('display', 'none');
                    $('body').removeClass('sticky-fav-checked');
                    favdisplay = !favdisplay;
                    $('#agent-marketing-mobile-menu-button .fav-mobile').html('<i class="icon icon-fav"></i> Go to saved items!</p>');
                }
                setTimeout(function () {                   
                    filterData(0);
                }, 10);
                if (cookieArr.length <= 0) {
                    $('.fav-mobile').hide();
                }
            });
            /* disable checkbox click changes */
            $('#agent-marketing-filter-container input[type="checkbox"]').click(function (event) {
                $(this).prop('checked', !$(this).prop('checked'));
            });

            /* tile click event */

            $('#agent-marketing-item-container').on('click', '.agent-marketing__item', function (e) {
                var isHovered = $(this).find('.agent-marketing__icon-container:hover');
                var shareIsHovered = $(this).find('.share-tooltip:hover');
                var modalIsHovered = $('.modal:hover');
                if (isHovered.length == 0 && modalIsHovered.length == 0 && shareIsHovered.length == 0) 
                    window.open($(this).find('.tile-link').attr('data-href'), '_blank');
            });
            $(document).ready(function () {
                jumpToSection();
                $('body').tooltip({
                    selector: '[data-toggle=tooltip]',
                    trigger: 'hover'
                });
                if ($(window).height() < 700 && windowWidth > 1199) {
                    $('body').addClass('small-screen-agent-marketing');
                } else {
                    $('body').removeClass('small-screen-agent-marketing');
                }
                $(window).bind('scroll', function (e) {
                    if ($(window).scrollTop() + window.innerHeight >= $('footer').offset().top - 200) {
                        if (windowWidth > 1199) {
                            $('.sticky-agent-marketing-filter').css({ 'bottom': ($('.c-footer').outerHeight(true) + 30) + 'px', 'top': 'auto', 'height': 'auto' });
                        } else {
                            $('.sticky-agent-marketing-filter').css('top', '0px');
                        }
                    }
                    else {
                        $('.sticky-agent-marketing-filter').css({ 'bottom': 'auto', 'height': '100vh' });
                    }
                    if ($(window).scrollTop() + window.innerHeight >= $(window).height() + 50) {
                        $('#agent-marketing-mobile-menu-button').addClass('sticky-mobile-marketing');
                    } else {
                        $('#agent-marketing-mobile-menu-button').removeClass('sticky-mobile-marketing');
                    }
                });
                $('#agent-marketing-mobile-menu-button .filter-mobile').click(function () {
                    $("#agent-marketing-filter-container").scrollTop(0);
                    document.getElementById('agent-marketing-filter-container').style.display = "block";
                });
                $('.agent-marketing .agent-marketing__mobile-close, .agent-marketing .agent-marketing__show-result-pannel').click(function (e) {
                    document.getElementById('agent-marketing-filter-container').style.display = "none";
                    //$('#agent-marketing-item-container').html('');
                    $('#agent-overlay').show();
                    setTimeout(function () {                       
                        filterData(0);
                    }, 10);
                    e.stopPropagation();
                });
                $('#agent-marketing-item-container').find('[id^="mailto_"]').each((_, email) => {
                    var id = $(email).attr('id');
                    var mailsubject = id.replace("mailto", "mailsubject");
                    var sublist = $('#' + mailsubject + ' ul li');
                    var subject = sublist.eq(parseInt(Math.random() * sublist.length)).text();
                    var maillink = id.replace("mailto", "maillink");
                    var mailmessagelist = id.replace("mailto", "mailmessagelist");
                    var link = $('#' + maillink).text();
                    var list = $('#' + mailmessagelist + ' ul li');
                    var body = list.eq(parseInt(Math.random() * list.length)).text();
                    var subjectstring = "";
                    if (subject != "") {
                        subjectstring = "&subject=" + encodeURIComponent(subject);
                    }
                    var bodystring = "";
                    if (body != "") {
                        bodystring = encodeURIComponent(body) + "%0D%0A%0D%0A";
                    }
                    var url = "mailto:?Content-type=text/html" + subjectstring + "&body=" + bodystring + encodeURIComponent(link);
                    email.href = url;
                });

                addGtmAttributes('#agent-marketing-item-container')
                $('.sort-options a').each((_, anchor) => {
                    let $anchor = $(anchor)
                    let type =  $anchor.data('title')
                    $anchor.on('click',  triggerFilterEvent.bind(this, 'sort options', type))
                })

                let toggleFilterAttrs = (filterItem) => {
                    let $filterItem = $(filterItem)
                    let linkUrl = $filterItem.data('name').gtmString()
                    let type = $filterItem.is('.agent-marketing__topic-filter-item')
                        ? 'topics'
                        : 'asset types'
                    let $filterElement = type[0] === 'a' ? $filterItem.find('input') : $filterItem

                    let toggle = () => {
                        setTimeout(() => {
                            if ($filterItem.is('.active')) 
                                triggerFilterEvent(type, linkUrl)
                        })
                    }

                    $filterElement.on('click', toggle)
                }
                let filterItems = $('.agent-marketing__topic-filter-item, .agent-marketing__asset-type-filter-item')
                filterItems.each((_, filterItem) => toggleFilterAttrs(filterItem))
            });
        }
    });

$( document ).ready(function() {
    var firstitemhtml = $('.video-gallery__list .dropdown-menu li a').html();
    $('.video-gallery__list .dropdown a.dropdown-toggle').html(firstitemhtml);
    $('.video-gallery__list.d-none.d-sm-block li a').on('click',function(){
	$('.video-gallery__list.d-none.d-sm-block li a').removeClass('active');
    $('.video-gallery__video-container.tab-pane').removeClass('active');    
        $(this).addClass('active');
        var contentid = $(this).attr('href');
        $(contentid).addClass('active');
    })
    $('.video-gallery__list  .dropdown-menu li a').on('click',function(){
		 $('.video-gallery__list .dropdown a.dropdown-toggle').html($(this).html());
        $('.video-gallery__list  .dropdown-menu li a').removeClass('active');
         $('.video-gallery__video-container.tab-pane').removeClass('active');    
        $(this).addClass('active');
        var contentid = $(this).attr('href');
        $(contentid).addClass('active');

    });
});
$(function () {
  $("input[name='policy_purchased']").click(function () {
    if ($("#Yes_purchased").is(":checked")) {
      $("#yesCheck").show();
      $("#noCheck").hide();
    } else {
      $("#noCheck").show();
      $("#yesCheck").hide();
    }
  });
});
function myData() {
  $("#yeslink").attr("data-linkurl", "https://claims.chubbsmallbusiness.com");
  document.getElementById("yeslink").href = "https://claims.chubbsmallbusiness.com";
}
function policyNavigation() {
  var policyNumber;
  policyNumber = document.getElementById("policyNo").value;
  var $changeLink = $("#changeLink");
  if (policyNumber == "") {
    $changeLink.removeAttr("data-portal")
      .removeAttr("data-portalea").removeAttr('data-ea')
      .removeAttr('data-ec').removeAttr('data-linkurl')
      .removeAttr("data-persona");
    document.getElementById("changeLink").href = "#";
  }
  else if (isNaN(policyNumber)) {
    $changeLink.attr("data-portal", "ace claims portal")
      .attr("data-portalea", "portal click: ace claims portal")
      .attr("data-ea", "content link")
      .attr("data-ec", "cta click")
      .attr("data-linkurl", "https://thenetworkinc.quickbase.com/db/bg3h5uadf")
      .attr("data-persona", "business");
    document.getElementById("changeLink").href = "https://thenetworkinc.quickbase.com/db/bg3h5uadf";
  } else {
    $changeLink.attr("data-portal", "chubb claims portal")
      .attr("data-portalea", "portal click: chubb claims portal")
      .attr("data-ea", "content link")
      .attr("data-ec", "cta click")
      .attr("data-linkurl", "https://extpws09.chubb.com/ChubbClaims/Extranet/eLoss/Login.aspx?GAMsg=".toLowerCase())
      .attr("data-persona", "business");
    document.getElementById("changeLink").href = "https://extpws09.chubb.com/ChubbClaims/Extranet/eLoss/Login.aspx?GAMsg=";
  }

}

$(function(){
    // Create a clone of the menu, right next to original.
      if( $(".menustiky").length > 0){     
          $('.menustiky').addClass('original').clone().insertAfter('.menustiky').addClass('cloned').addClass('fixedTop').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
          scrollIntervalID = setInterval(stickIt, 10);
          function stickIt() {
            var orgElementPos = $('.original').offset();
              var getwih = $('.original').innerHeight() / 2
            orgElementTop = orgElementPos.top + getwih  ;               
            if ($(window).scrollTop() >= (orgElementTop)) {
              // scrolled past the original position; now only show the cloned, sticky element.
              // Cloned element should always have same left position and width as original element.     
              orgElement = $('.original');
              coordsOrgElement = orgElement.offset();
              leftOrgElement = coordsOrgElement.left;  
              widthOrgElement = orgElement.css('width');
              $('.menustiky.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
              $('.original').css('visibility','hidden');
              
                if($('.bannernav-sticky.bottom').is(':visible')){
                      
                      var offsettop  = $('.bannernav-sticky.bottom').offset().top
                      var windowscree = offsettop -  $(window).height();
                      
                      if ($(window).scrollTop() >= (windowscree)) {
                         
                          $('.menustiky.cloned').css('visibility','hidden');
                          $('buttonGroup ul li').removeClass('active');
                      }else{
                           $('.menustiky.cloned').css('visibility','visible');
                      }
                      
                }
                
                
            } else {
              // not scrolled past the menu; only show the original menu.
              $('.menustiky.cloned').hide();
              $('.original').css('visibility','visible');
            }
          }
      }
      
      if( $(".scroll").length > 0){
          $('.scroll').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');	
                var gethiget = $(window).width()
                  if (gethiget < 768) {
                      var scrolls= target.offset().top  - ($('.bannerNav.fixedTop').innerHeight()) + 20;
                  }else{
                      var scrolls= target.offset().top - ($('.bannerNav.fixedTop').innerHeight()) + 10;    
                  }
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: scrolls
                  }, 1000);
                  return false;
                }
              }
           });
      }
      
      /**
       * This part handles the highlighting functionality.
       * We use the scroll functionality again, some array creation and 
       * manipulation, class adding and class removing, and conditional testing
       */
      var aChildren = $(".scroll"); // find the a children of the list items
      var aArray = []; // create the empty aArray
      for (var i=0; i < aChildren.length; i++) {    
          var aChild = aChildren[i];
          var ahref = $(aChild).attr('href');
          aArray.push(ahref);
      } // this for loop fills the aArray with attribute href values
       
      $(window).scroll(function(){
          var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
          var windowHeight = $(window).height(); // get the height of the window
          var docHeight = $(document).height();
          var ptbspace = $('.bannerNav.fixedTop').innerHeight();
                     
          for (var i=0; i < aArray.length; i++) {
             var theID = aArray[i];
             var divPos = $(theID).offset().top - ptbspace; // get the offset of the div from the top of page
             var divHeight = $(theID).innerHeight(); // get the height of the div in question
             var defaultFontColor = $("a[href='" + theID + "']").attr('data-defaultFontColor');
             if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                 $("a[href='" + theID + "']").addBack('a').addClass("active");
                 var bgColor= $("a[href='" + theID + "']").attr('data-bgColor');
                 $("a[href='" + theID + "']").css("background-color", bgColor);
                 var fontColor= $("a[href='" + theID + "']").attr('data-fontColor');
                 $("a[href='" + theID + "']").css("color", fontColor);
                 $(".scroll").focusout();
             } else {
                  $("a[href='" + theID + "']").addBack('a').removeClass("active");	
                 	$("a[href='" + theID + "']").css("background-color", 'transparent');
                 if(defaultFontColor != 'defaultColor'){
                 	$("a[href='" + theID + "']").css("color", 'inherit');
                 }
                 else{$("a[href='" + theID + "']").css("color", '#fff');}
                  $(".scroll").focusout();

             }
          }
        });

    $('.buttonLink.scroll:not(.active)').hover(function(){
        var bgColor= $(this).attr('data-bgColor');
        var fontColor=$(this).attr('data-fontColor');
        $(this).css( "background-color", bgColor );
        $(this).css("color", fontColor );
    }, function(){
        $(this).css("background-color", 'transparent');
		$(this).css("color", 'inherit');
    })

      // Expand / Collapse to hide resources
      $('[data-targetid]').click(function(){
          var getraget = $(this).data('targetid');
          var getscrtols = $('[data-id="'+getraget+'"]').offset().top
          var geclos = $(this).attr('href');
          $('html,body').animate({
              scrollTop: getscrtols
          }, 500);
          setTimeout(function(){
              $(geclos).collapse("hide");
          },600)
          
      });
      
      // banner - buttonLink
      $('body').on('click','.buttonLink', function(e) {
         e.preventDefault();
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              var getwih = $('.original').innerHeight() / 2 ;
              targetscrls = target.offset().top - getwih + 10;
              
              if (target.length) {
                  $('html, body').animate({
                    scrollTop: targetscrls
                  }, 1000);
                  return false;
              }
          
      });

});
$(function() {
	var windowWidth = 0; 
	$( window ).resize( function(){  
        if( windowWidth != $( window ).width() ){
            windowWidth = $( window ).width();
            if(windowWidth < 768) {
                $('.mobile-carousel').addClass('owl-carousel owl-theme');
                $('.mobile-carousel').owlCarousel({
                    items : 1
                });
            } else {
                $('.mobile-carousel').trigger('destroy.owl.carousel');
                $('.mobile-carousel').removeClass('owl-carousel owl-theme');
            }
			
			 if(windowWidth > 767 && windowWidth < 1025) {
                $('.tablet-carousel').addClass('owl-carousel owl-theme');
                $('.tablet-carousel').owlCarousel({
                    items:4,
					dots: false,
					loop: true,
					autoplay: false,
                    margin:20,
                    nav: true,
                    navText : ["<svg width='10px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='45.63,100 0.375,38.087 30,0.375'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='10px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='0.35,0.35 28,38 0.375,75.8' /></svg>"]
                });
            } else {
                $('.tablet-carousel').trigger('destroy.owl.carousel');
                $('.tablet-carousel').removeClass('owl-carousel owl-theme');
            }
			
			$('.section-contentoff.mobile-carousel figure').each(function(){
				if(windowWidth < 768){
					$(this).css('background-image','url(' + $(this).attr('data-mobile-bg') + ')');
				}else if (windowWidth > 767 && windowWidth < 1025){
					$(this).css('background-image','url(' + $(this).attr('data-tablet-bg') + ')');
				}else{
					$(this).css('background-image','url(' + $(this).attr('data-desktop-bg') + ')' );
				}
			});
			
        }
		
    }); 
       
	$( window ).on('load',function() {
		$(this).resize();
        windowWidth = $( window ).width();
	});
	
	$(document).ready(function(){
  $(".charity-video-gallery .mobile-carousel").owlCarousel({
					items:1,
					dots: false,
					loop: true,
					autoplay: false,
                    margin:20,
                    nav: true,
                    navText : ["<svg width='10px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='45.63,100 0.375,38.087 30,0.375'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='10px' height='auto' viewBox='0 0 30 80' xml:space='preserve'><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' points='0.35,0.35 28,38 0.375,75.8' /></svg>"]
  });

 /* $('.charity-video-gallery a.vd-play-button').on('click',function(){
	  $(this).closest('.charity-video-gallery').find('iframe').attr('data-src',$(this).attr("data-video-url")+'?rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;nohtml5=1&amp;autoplay=0');
	  var url = $(this).attr("data-video-url").split('/');
	   $(this).closest('.charity-video-gallery').find('iframe').attr('video-data-id',url[4]);
  });*/
  $('.charity-video-gallery  .video-thumbnail-list-item').on('click', function(){
	  var itemSelected = $(this).attr("data-video");
	  if($(this).attr('class').indexOf("active") < 0){
          $(this).closest('.charity-video-gallery').find('.mobile-carousel .row').removeClass('active');
          $(this).closest('.charity-video-gallery').find('.video-thumbnail-list-item').removeClass('active');
		  $(this).addClass('active');
          $(this).closest('.charity-video-gallery').find('.'+itemSelected).addClass('active');
	  }
  });

  $('.video-modal:not(.bc-video-modal)').on('hidden.bs.modal', function (e) {
      let $video = $(this).find('video')
      if($video.length > 0)
        $video[0].pause();
  });
  
	
	
});
});
$(document).ready(function(){
function updateParallaxBg(){   
    $('.c-parallax .parallax-banner__image-container').each(function(){   
            var bgImg = $(this).data('dbg');
        	var overlayImg = $(this).data('overlay');
            if ($(window).width() <= 767 && $(this).data('mbg')) {
                bgImg = $(this).data('mbg');
            } else if ($(window).width() >= 768 && $(window).width() < 1200 && $(this).data('tbg')) {
                bgImg = $(this).data('tbg');
            }
             if(bgImg!== null && bgImg!== undefined){
            	$(this).css({ 'background-image': 'url(' + overlayImg + '), url(' + bgImg + ')' });
            }
    });
}
updateParallaxBg();
$(window).on('resize', function (e) {
        updateParallaxBg();
    });
  });
$(function() {
    $(document).ready(function() {
        /** Expand more charity start  **/
        $('.expand-more-charity-button').on('click', function(e) {
            e.preventDefault();
            var wrapper = $(this).closest('.charity-team-list');
            $(this).hide();
            wrapper.find('.collapse-less-charity-button').show();
            wrapper.removeClass('charity-collapsed');
            wrapper.addClass('charity-expanded');
        });
        /** Expand more articles start  **/

        /** collpase articles start  **/
        $('.collapse-less-charity-button').on('click', function(e) {
            e.preventDefault();
            var wrapper = $(this).closest('.charity-team-list');
            $(this).hide();
            wrapper.find('.expand-more-charity-button').show();
            wrapper.removeClass('charity-expanded');
            wrapper.addClass('charity-collapsed');
            $('html, body').animate({
                scrollTop: $(".c-charity-team-list").offset().top
            }, 2000);

        });
        /** collapse articles start  **/
    });
});
