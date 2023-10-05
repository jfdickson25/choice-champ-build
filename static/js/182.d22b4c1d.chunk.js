/*! For license information please see 182.d22b4c1d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[182],{5541:function(t,e,r){r(2791);e.Z=r.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},1182:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(4165),o=r(5861),i=r(9439),a=r(2791),c=r(7689),u=r(3108),s=r(5382),l=r(3999),f=r(5541),h=r(584),p=r(184),m=function(t){var e=t.socket,r=(0,a.useContext)(u.V),m=(0,c.s0)(),d=(0,c.UO)().code,y=(0,a.useState)(0),v=(0,i.Z)(y,2),g=v[0],w=v[1],b=(0,a.useState)(!1),x=(0,i.Z)(b,2),j=x[0],E=x[1],L=(0,a.useState)("guest"),k=(0,i.Z)(L,2),N=k[0],O=k[1],T=(0,a.useRef)(g);(0,a.useEffect)((function(){r.showFooterHandler(!1),fetch("https://choice-champ-backend.glitch.me/party/".concat(d,"?userId=").concat(r.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var r=t.party.memberCount+1;t.owner&&O("owner"),T.current=r,w(T.current),e.emit("join-room","waiting".concat(d)),e.emit("member-remote-increment","waiting".concat(d)),fetch("https://choice-champ-backend.glitch.me/party/add-member/".concat(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyCode:d})})}))}),[]),(0,a.useEffect)((function(){return e.on("member-increment",(function(){T.current+=1,w(T.current)})),e.on("member-decrement",(function(){T.current-=1,w(T.current)})),e.on("start-party",(function(){e.emit("leave-room","waiting".concat(d)),m("/party/".concat(d))})),e.on("party-deleted",(function(){e.emit("leave-room","waiting".concat(d)),m("/party")})),function(){e.off("member-increment"),e.off("member-decrement"),e.off("start-party"),e.off("party-deleted")}}),[]);var _=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("owner"!==N){t.next=4;break}fetch("https://choice-champ-backend.glitch.me/party/".concat(d),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){E(!0),setTimeout((function(){E(!1),e.emit("party-remote-deleted","waiting".concat(d)),e.emit("leave-room","waiting".concat(d)),m("/party")}),1e3)})),t.next=10;break;case 4:return e.emit("leave-room","waiting".concat(d)),e.emit("member-remote-decrement","waiting".concat(d)),t.next=8,fetch("https://choice-champ-backend.glitch.me/party/remove-member/".concat(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyCode:d})});case 8:E(!0),setTimeout((function(){E(!1),m("/party")}),1e3);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"content",children:[(0,p.jsx)("img",{src:f.Z,alt:"Back symbol",className:"top-left clickable",onClick:_,style:j?{animation:"button-press .75s"}:null}),(0,p.jsxs)("div",{className:"party-wait-code",children:["Party Code: ",d]}),(0,p.jsx)("img",{id:"waiting-img",src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/waiting-screen.svg?v=1691033380153"}),(0,p.jsx)(s.Z,{type:"propagate",className:"list-loading",size:15,speed:.25}),(0,p.jsxs)("div",{className:"party-wait-count",children:["Party Count ",(0,p.jsx)("span",{className:"party-wait-count-num",children:g})]}),"owner"===N&&(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(l.Z,{className:"party-wait-start-btn",onClick:function(){e.emit("start-remote-party","waiting".concat(d)),e.emit("leave-room","waiting".concat(d)),m("/party/".concat(d))},children:"Start Party"}),(0,p.jsxs)("div",{id:"tip-section",children:[(0,p.jsx)("img",{src:h,alt:"Dice symbol",className:"party-wait-dice"}),(0,p.jsx)("p",{className:"party-wait-start-text",children:"TIP: Select this icon for a random item to be chosen as the winner"})]})]})]})}},3999:function(t,e,r){r.d(e,{Z:function(){return o}});r(2791);var n=r(184),o=function(t){return(0,n.jsx)("button",{type:t.type,disabled:t.disabled,onClick:t.onClick,className:t.className,children:t.children})}},584:function(t,e,r){t.exports=r.p+"static/media/dices.682aa6ebb10e531380e1.png"},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new S(n||[]);return a(i,"_invoke",{value:T(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var m="suspendedStart",d="suspendedYield",y="executing",v="completed",g={};function w(){}function b(){}function x(){}var j={};f(j,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(Z([])));L&&L!==r&&i.call(L,u)&&(j=L);var k=x.prototype=w.prototype=Object.create(j);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function T(e,r,n){var o=m;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?v:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function Z(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return b.prototype=x,a(k,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},N(O.prototype),f(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=Z,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:Z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=182.d22b4c1d.chunk.js.map