/*! For license information please see 383.a76bae56.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[383],{5541:function(t,e,n){n(2791);n.p},3529:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(4165),o=n(5861),i=n(9439),a=n(2791),c=n(7689),s=n(3108),u=n(5382),l=n(3999),h=(n(5541),n.p+"static/media/dices.682aa6ebb10e531380e1.png"),f=n(184),p=function(t){var e=t.socket,n=(0,a.useContext)(s.V),p=(0,c.s0)(),d=(0,c.UO)().code,m=(0,a.useState)(0),y=(0,i.Z)(m,2),g=y[0],v=y[1],b=(0,a.useState)(!1),w=(0,i.Z)(b,2),x=w[0],j=w[1],k=(0,a.useState)("guest"),N=(0,i.Z)(k,2),E=N[0],L=N[1],C=(0,a.useState)(!1),S=(0,i.Z)(C,2),O=S[0],T=S[1],P=(0,a.useRef)(g);(0,a.useEffect)((function(){n.showFooterHandler(!1),fetch("https://choice-champ-backend.glitch.me/party/".concat(d,"?userId=").concat(n.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var n=t.party.memberCount+1;t.party.superChoice&&T(!0),t.owner&&L("owner"),P.current=n,v(P.current),e.emit("join-room","waiting".concat(d)),e.emit("member-remote-increment","waiting".concat(d)),fetch("https://choice-champ-backend.glitch.me/party/add-member/".concat(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyCode:d})})}))}),[]),(0,a.useEffect)((function(){return e.on("member-increment",(function(){P.current+=1,v(P.current)})),e.on("member-decrement",(function(){P.current-=1,v(P.current)})),e.on("start-party",(function(){e.emit("leave-room","waiting".concat(d)),p("/party/".concat(d))})),e.on("party-deleted",(function(){e.emit("leave-room","waiting".concat(d)),p("/party")})),function(){e.off("member-increment"),e.off("member-decrement"),e.off("start-party"),e.off("party-deleted")}}),[]);var _=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("owner"!==E){t.next=4;break}fetch("https://choice-champ-backend.glitch.me/party/".concat(d),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){j(!0),setTimeout((function(){j(!1),e.emit("party-remote-deleted","waiting".concat(d)),e.emit("leave-room","waiting".concat(d)),p("/party")}),1e3)})),t.next=10;break;case 4:return e.emit("leave-room","waiting".concat(d)),e.emit("member-remote-decrement","waiting".concat(d)),t.next=8,fetch("https://choice-champ-backend.glitch.me/party/remove-member/".concat(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyCode:d})});case 8:j(!0),setTimeout((function(){j(!1),p("/party")}),1e3);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"content",style:{paddingBottom:"0px"},children:[x?(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:_}),(0,f.jsxs)("div",{className:"party-wait-code",children:["Party Code: ",d]}),(0,f.jsx)("img",{id:"waiting-img",src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/waiting-screen.svg?v=1691033380153"}),(0,f.jsx)(u.Z,{type:"propagate",className:"list-loading",size:15,speed:.25}),(0,f.jsxs)("div",{className:"party-wait-count",children:["Party Count ",(0,f.jsx)("span",{className:"party-wait-count-num",children:g})]}),"owner"===E&&(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)(l.Z,{className:"party-wait-start-btn",onClick:function(){e.emit("start-remote-party","waiting".concat(d)),e.emit("leave-room","waiting".concat(d)),p("/party/".concat(d))},children:"Start Party"}),(0,f.jsx)("div",{className:"tip-section",children:(0,f.jsx)("p",{id:"tips-title",children:"TIPS"})}),(0,f.jsxs)("div",{class:"tip-section",children:[(0,f.jsx)("img",{src:h,alt:"Dice symbol",className:"party-wait-icon"}),(0,f.jsx)("p",{className:"party-wait-start-text",children:"Select this icon for a random item to be chosen as the winner"})]}),(0,f.jsxs)("div",{class:"tip-section",children:[(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/flag.png?v=1720218335438",alt:"Finish symbol",className:"party-wait-icon"}),(0,f.jsx)("p",{className:"party-wait-start-text",children:"Select this icon to end voting early. Remaining items can be exported to create a new collection"})]})]}),"guest"===E&&O&&(0,f.jsx)("div",{className:"tip-section",children:(0,f.jsx)("p",{id:"tips-title",children:"TIPS"})}),O&&(0,f.jsxs)("div",{class:"tip-section",children:[(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/star.png?v=1699066109692",alt:"Dice symbol",className:"party-wait-icon"}),(0,f.jsx)("p",{className:"party-wait-start-text",children:"Super choices have been enabled. Double tap an item to star it and ensure it moves on to the next round. Party items can only be starred once per choice party."})]}),("guest"===E&&O||"owner"==E)&&(0,f.jsx)("div",{className:"tip-section",style:{height:"20px"}})]})}},3999:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(9439),o=n(2791),i=n(184),a=function(t){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),a=n[0],c=n[1];return(0,i.jsx)(o.Fragment,{children:a?(0,i.jsx)("button",{type:t.type,disabled:t.disabled,className:t.className,style:t.backgroundColor?{animation:"button-press .75s",backgroundColor:t.backgroundColor}:{animation:"button-press .75s",backgroundColor:"#dd9b14"},children:t.children}):(0,i.jsx)("button",{type:t.type,disabled:t.disabled,onClick:function(){t.onClick&&(c(!0),setTimeout((function(){c(!1),t.onClick()}),1e3))},className:t.className,children:t.children})})}},5861:function(t,e,n){function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},4165:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1002);function o(){o=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new _(r||[]);return a(i,"_invoke",{value:S(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",m="suspendedYield",y="executing",g="completed",v={};function b(){}function w(){}function x(){}var j={};h(j,s,(function(){return this}));var k=Object.getPrototypeOf,N=k&&k(k(Z([])));N&&N!==n&&i.call(N,s)&&(j=N);var E=x.prototype=b.prototype=Object.create(j);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,a,c,s){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,r.Z)(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(e,n,r){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=O(c,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=p(e,n,r);if("normal"===u.type){if(o=r.done?g:m,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function Z(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError((0,r.Z)(e)+" is not iterable")}return w.prototype=x,a(E,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=h(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(C.prototype),h(C.prototype,u,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new C(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),h(E,l,"Generator"),h(E,s,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=Z,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:Z(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}}}]);
//# sourceMappingURL=383.a76bae56.chunk.js.map