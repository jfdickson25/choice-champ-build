(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[386],{5541:function(t,e,n){"use strict";n(2791);e.Z=n.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},8386:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(3433),i=n(9439),o=n(2791),a=n(7689),c=n(3999),s=n(1425),u=n.n(s),l=n(5541),f=n(584),h=n(5382),d=n(3108),p=n(184),v=function(t){var e=t.socket,n=(0,o.useContext)(d.V),s=(0,a.s0)(),v=(0,a.UO)(),m=v.code,y=v.userType,b=(0,o.useState)([]),g=(0,i.Z)(b,2),x=g[0],w=g[1],O=(0,o.useState)("movie"),j=(0,i.Z)(O,2),P=j[0],S=j[1],C=(0,o.useState)(1),I=(0,i.Z)(C,2),M=I[0],N=I[1],E=(0,o.useState)(!1),k=(0,i.Z)(E,2),T=k[0],D=k[1],R=(0,o.useState)(!1),_=(0,i.Z)(R,2),Z=_[0],F=_[1],A=(0,o.useState)(0),B=(0,i.Z)(A,2),Q=B[0],Y=B[1],q=(0,o.useState)(0),G=(0,i.Z)(q,2),V=G[0],W=G[1],H=(0,o.useState)([]),U=(0,i.Z)(H,2),L=U[0],z=U[1],X=(0,o.useState)(!1),$=(0,i.Z)(X,2),J=$[0],K=$[1],tt=(0,o.useState)(!1),et=(0,i.Z)(tt,2),nt=et[0],rt=et[1],it=(0,o.useState)(!1),ot=(0,i.Z)(it,2),at=ot[0],ct=ot[1],st=(0,o.useRef)(x),ut=(0,o.useRef)(M),lt=(0,o.useRef)(Q),ft=(0,o.useRef)(V);(0,o.useEffect)((function(){n.showFooterHandler(!1),fetch("https://choice-champ-backend.glitch.me/party/".concat(m),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var n=t.party.items.map((function(t){return{id:t._id,itemId:t.itemId,title:t.title,poster:t.poster,watched:t.watched,votes:0,voted:!1}}));n=n.filter((function(t,e,n){return e===n.findIndex((function(e){return e.itemId===t.itemId}))})),t.party.includeWatched||(n=n.filter((function(t){return!t.watched}))),n=n.sort((function(){return Math.random()-.5})),S(t.party.mediaType),D(t.party.secretMode),W(t.party.memberCount),ft.current=t.party.memberCount,w(n),st.current=n,e.emit("join-room",m)}))}),[]),(0,o.useEffect)((function(){return e.on("vote-increment",(function(t){st.current.find((function(e){return e.id==t})).votes+=1,w((0,r.Z)(st.current))})),e.on("vote-decrement",(function(t){st.current.find((function(e){return e.id==t})).votes-=1,w((0,r.Z)(st.current))})),e.on("votes-needed",(function(t){N(t),ut.current=t})),e.on("vote-selected",(function(t){var e=st.current.filter((function(e){return e.votes>=t}));if(e.forEach((function(t){t.votes=0,t.voted=!1})),1===e.length){var n=st.current.filter((function(e){return e.votes<t}));z(n)}w(e),st.current=e})),e.on("random-selected",(function(t){e.emit("leave-room",m),Z&&F(!1),rt(!0),setTimeout((function(){K(!0),setTimeout((function(){var e=st.current.find((function(e){return e.id===t})),n=st.current.filter((function(e){return e.id!==t}));z(n),w([e]),st.current=[e]}),2e3)}),1e3)})),e.on("user-ready",(function(){lt.current+=1,Y(lt.current),lt.current==ft.current&&setTimeout((function(){K(!0),setTimeout((function(){var t=st.current.filter((function(t){return t.votes>=ut.current}));if(0!==t.length){if(1===t.length){var e=st.current.filter((function(t){return t.votes<ut.current}));z(e)}else t.forEach((function(t){t.votes=0,t.voted=!1})),Y(0),lt.current=0;w(t),st.current=t,F(!1),K(!1)}else F(!1)}),2e3)}),1e3)})),e.on("user-not-ready",(function(){lt.current-=1,Y(lt.current)})),e.on("party-member-left",(function(){W(ft.current-1),ft.current-=1})),e.on("party-deleted",(function(){e.emit("leave-room",m),s("/party")})),function(){e.off("vote-increment"),e.off("vote-decrement"),e.off("votes-needed"),e.off("vote-selected"),e.off("random-selected"),e.off("party-deleted"),e.off("clear-votes"),e.off("user-ready"),e.off("user-not-ready"),e.off("party-member-left")}}),[]);var ht=function(t){var n=x.find((function(e){return e.id===t}));n.voted?(n.voted=!1,n.votes-=1,w((0,r.Z)(x)),st.current=(0,r.Z)(x),e.emit("vote-remote-decrement",t,m)):(n.voted=!0,n.votes+=1,w((0,r.Z)(x)),st.current=(0,r.Z)(x),e.emit("vote-remote-increment",t,m))};return(0,p.jsxs)("div",{className:"content",children:[1===x.length&&(0,p.jsx)(u(),{height:window.outerHeight+window.innerHeight}),(0,p.jsx)("img",{src:l.Z,alt:"Back symbol",onClick:function(){"owner"===y&&x.length>1?fetch("https://choice-champ-backend.glitch.me/party/".concat(m),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){ct(!0),setTimeout((function(){ct(!1),e.emit("leave-room",m),e.emit("party-remote-deleted",m),s("/party")}),1e3)})):(ct(!0),setTimeout((function(){ct(!1),e.emit("user-leave-party",m),e.emit("leave-room",m),s("/party")}),1e3))},className:"top-left",style:at?{animation:"button-press .75s"}:null}),"owner"===y&&x.length>1?(0,p.jsxs)("div",{className:"votes-needed-section",children:[(0,p.jsx)("p",{className:"votes-needed-title",children:"Votes Needed"}),(0,p.jsx)("input",{type:"number",className:"votes-needed-input",value:M,min:1,onChange:function(t){N(t.target.value),ut.current=t.target.value,isNaN(t.target.value)||""===t.target.value||e.emit("votes-needed-remote",t.target.value,m)}})]}):(0,p.jsx)("div",{className:"guest-banner"}),"owner"===y&&x.length>1&&(0,p.jsx)("img",{src:f,className:"edit",alt:"Dice",onClick:function(){if(1!==x.length){rt(!0);var t=Math.floor(Math.random()*x.length),n=x[t];n.votes=0,n.voted=!1;var r=x.filter((function(t){return t.id!==n.id}));setTimeout((function(){K(!0),setTimeout((function(){z(r),w([n]),st.current=[n],fetch("https://choice-champ-backend.glitch.me/party/".concat(m),{method:"DELETE",headers:{"Content-Type":"application/json"}})}),2e3)}),1e3),e.emit("random-remote-selected",n.id,m)}}}),(0,p.jsx)("div",{className:"game"===P?"collection-content-game":"collection-content-other",children:1===x.length?(0,p.jsxs)("div",{className:"winner",children:[(0,p.jsx)("p",{className:"winner-banner",children:"CHOICE CHAMPION!"}),(0,p.jsx)("img",{className:"game"===P?"winner-img-game":"winner-img",src:x[0].poster}),(0,p.jsx)("p",{className:"winner-title",children:x[0].title}),(0,p.jsx)("p",{className:"runner-up-title",children:"Runner Ups"}),L.length>0&&L.map((function(t){return(0,p.jsx)("p",{className:"runner-up",children:t.title},t.id)}))]}):(0,r.Z)(x).reverse().map((function(t){return(0,p.jsxs)("div",{className:"item-section",children:[(0,p.jsx)("img",{className:"movie"===P||"tv"===P?"item-img":"game"===P?"game-img":"board-img",src:t.poster,onClick:ht.bind(undefined,t.id),style:t.voted?{border:"5px solid #FCB016"}:null}),("game"===P||"board"===P)&&(0,p.jsx)("p",{style:t.voted?{borderLeft:"5px solid #FCB016",borderRight:"5px solid #FCB016",borderBottom:"5px solid #FCB016",borderRadius:"0px 0px 9px 9px"}:null,children:t.title}),t.votes>0&&!T&&(0,p.jsx)("div",{className:"item-votes",children:t.votes})]},t.id)}))}),x.length>1&&(Z?(0,p.jsx)("div",{className:"ready-overlay",onClick:V>1?function(){F(!1),lt.current-=1,Y(lt.current),e.emit("user-not-ready-remote",m)}:null,style:J?{transform:"translateY(100vh)",transition:"transform 2s ease-in-out"}:null,children:1===V?(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)("h1",{className:"ready-text",style:{marginBottom:"30px"},children:"Filtering Items"}),(0,p.jsx)(h.Z,{type:"beat",className:"ready-loading",size:20,speed:.5})]}):(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)("h1",{className:"ready-text",children:"Ready!"}),(0,p.jsx)("p",{className:"waiting-text",children:"Waiting on other party members..."}),(0,p.jsx)("p",{className:"waiting-text-cancel",children:"Click to return to voting"}),(0,p.jsx)(h.Z,{type:"sync",className:"ready-loading",size:20,speed:.5})]})}):nt?null:(0,p.jsx)(c.Z,{className:"finish-voting-btn",onClick:function(){F(!0),lt.current+=1,Y(lt.current),lt.current==ft.current&&setTimeout((function(){K(!0),setTimeout((function(){var t=x.filter((function(t){return t.votes>=ut.current}));if(0!==t.length){if(1===t.length){var e=x.filter((function(t){return t.votes<ut.current}));z(e),fetch("https://choice-champ-backend.glitch.me/party/".concat(m),{method:"DELETE",headers:{"Content-Type":"application/json"}})}else t.forEach((function(t){t.votes=0,t.voted=!1})),Y(0),lt.current=0;w(t),st.current=t,F(!1),K(!1)}else F(!1)}),2e3)}),1e3),e.emit("user-ready-remote",m)},children:"Finish Voting"})),nt&&(0,p.jsx)("div",{className:"ready-overlay",style:J?{transform:"translateY(100vh)",transition:"transform 2s ease-in-out"}:null,children:(0,p.jsx)("img",{src:f,className:"random-selected-dice",alt:"Dice"})})]})}},3999:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(2791);var r=n(184),i=function(t){return(0,r.jsx)("button",{type:t.type,disabled:t.disabled,onClick:t.onClick,className:t.className,children:t.children})}},1425:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(2791),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((o=0)||(o=.3*r),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+c+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,c=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+c:((o=0)||(o=r*(.3*1.5)),(i=c)<Math.abs(c)?(i=c,a=o/4):a=o/(2*Math.PI)*Math.asin(c/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+c+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return Q}));var r,i,o=n(0),a=n.n(o),c=n(1),s=n.n(c);function u(t,e){return t+Math.random()*(e-t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(i||(i={}));var h=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"context",void 0),f(this,"radius",void 0),f(this,"x",void 0),f(this,"y",void 0),f(this,"w",void 0),f(this,"h",void 0),f(this,"vx",void 0),f(this,"vy",void 0),f(this,"shape",void 0),f(this,"angle",void 0),f(this,"angularSpin",void 0),f(this,"color",void 0),f(this,"rotateY",void 0),f(this,"rotationDirection",void 0),f(this,"getOptions",void 0),this.getOptions=n;var a,c,s=this.getOptions(),l=s.colors,h=s.initialVelocityX,d=s.initialVelocityY;this.context=e,this.x=r,this.y=o,this.w=u(5,20),this.h=u(5,20),this.radius=u(5,10),this.vx="number"==typeof h?u(-h,h):u(h.min,h.max),this.vy="number"==typeof d?u(-d,0):u(d.min,d.max),this.shape=(a=0,c=2,Math.floor(a+Math.random()*(c-a+1))),this.angle=u(0,360)*Math.PI/180,this.angularSpin=u(-.2,.2),this.color=l[Math.floor(Math.random()*l.length)],this.rotateY=u(0,1),this.rotationDirection=u(0,1)?i.Positive:i.Negative}var e,n,o;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,o=t.friction,a=t.opacity,c=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=o,this.vy*=o,this.rotateY>=1&&this.rotationDirection===i.Positive?this.rotationDirection=i.Negative:this.rotateY<=-1&&this.rotationDirection===i.Negative&&(this.rotationDirection=i.Positive);var s=.1*this.rotationDirection;if(this.rotateY+=s,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,c&&"function"==typeof c)c.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&l(e.prototype,n),o&&l(e,o),t}();function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"canvas",void 0),d(this,"context",void 0),d(this,"getOptions",void 0),d(this,"x",0),d(this,"y",0),d(this,"w",0),d(this,"h",0),d(this,"lastNumberOfPieces",0),d(this,"tweenInitTime",Date.now()),d(this,"particles",[]),d(this,"particlesGenerated",0),d(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),d(this,"getParticle",(function(){var t=u(r.x,r.w+r.x),e=u(r.y,r.h+r.y);return new h(r.context,r.getOptions,t,e)})),d(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,c=o.recycle,s=o.numberOfPieces,u=o.debug,l=o.tweenFunction,f=o.tweenDuration;if(!a)return!1;var h=r.particles.length,d=c?h:n,p=Date.now();if(d<s){i!==s&&(r.tweenInitTime=p,r.lastNumberOfPieces=s);for(var v=r.tweenInitTime,m=l(p-v>f?f:Math.max(0,p-v),d,s,f),y=Math.round(m-d),b=0;b<y;b++)r.particles.push(r.getParticle());r.particlesGenerated+=y}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&d<=s?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),h>0||d<s})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=n};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:s.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},x=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"_options",void 0),b(this,"generator",void 0),b(this,"rafId",void 0),b(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=m(m(m({},e),g),t),Object.assign(r,t.confettiSource)})),b(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),b(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),b(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new p(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&y(e.prototype,n),r&&y(e,r),t}();function w(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?R(t):e}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var F=a.a.createRef(),A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(o,t);var e,n,r,i=T(o);function o(t){var e;N(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];return Z(R(e=i.call.apply(i,[this,t].concat(r))),"canvas",a.a.createRef()),Z(R(e),"confetti",void 0),e.canvas=t.canvasRef||F,e}return e=o,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=B(this.props)[0];this.confetti=new x(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=B(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=C(B(this.props),2),e=t[0],n=t[1],r=S({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",j({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&E(e.prototype,n),r&&E(e,r),o}(o.Component);function B(t){var e={},n={},r=[].concat(w(Object.keys(g)),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var o in t){var a=t[o];r.includes(o)?e[o]=a:i.includes(o)?i[o]=a:n[o]=a}return[e,n,{}]}Z(A,"defaultProps",S({},g)),Z(A,"displayName","ReactConfetti");var Q=a.a.forwardRef((function(t,e){return a.a.createElement(A,j({canvasRef:e},t))}));e.default=Q}]).default)},584:function(t,e,n){"use strict";t.exports=n.p+"static/media/dices.682aa6ebb10e531380e1.png"}}]);
//# sourceMappingURL=386.3925e244.chunk.js.map