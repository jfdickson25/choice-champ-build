"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[386],{5541:function(e,t,n){n(2791);t.Z=n.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},8386:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(3433),o=n(9439),i=n(2791),c=n(7689),s=n(3999),a=n(1425),u=n.n(a),l=n(5541),d=n(584),m=n(5382),f=n(3108),h=n(9170),p=n(184),v=function(e){var t=e.socket,n=(0,i.useContext)(f.V),a=(0,c.s0)(),v=(0,c.UO)().code,g=(0,i.useState)([]),y=(0,o.Z)(g,2),x=y[0],j=y[1],b=(0,i.useState)("movie"),w=(0,o.Z)(b,2),N=w[0],C=w[1],T=(0,i.useState)(1),Z=(0,o.Z)(T,2),k=Z[0],E=Z[1],S=(0,i.useState)(!1),I=(0,o.Z)(S,2),F=I[0],R=I[1],B=(0,i.useState)(!1),D=(0,o.Z)(B,2),H=D[0],M=D[1],L=(0,i.useState)(0),O=(0,o.Z)(L,2),V=O[0],_=O[1],z=(0,i.useState)(0),A=(0,o.Z)(z,2),U=A[0],W=A[1],Y=(0,i.useState)([]),G=(0,o.Z)(Y,2),P=G[0],q=G[1],J=(0,i.useState)("guest"),K=(0,o.Z)(J,2),Q=K[0],X=K[1],$=(0,i.useState)(!1),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],re=(0,i.useState)(!1),oe=(0,o.Z)(re,2),ie=oe[0],ce=oe[1],se=(0,i.useState)(!1),ae=(0,o.Z)(se,2),ue=ae[0],le=ae[1],de=(0,i.useRef)(x),me=(0,i.useRef)(k),fe=(0,i.useRef)(V),he=(0,i.useRef)(U);(0,i.useEffect)((function(){n.showFooterHandler(!1),fetch("https://choice-champ-backend.glitch.me/party/".concat(v,"?userId=").concat(n.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.owner&&X("owner");var n=e.party.items.map((function(e){return{id:e._id,itemId:e.itemId,title:e.title,poster:e.poster,watched:e.watched,votes:0,voted:!1}}));n=n.filter((function(e,t,n){return t===n.findIndex((function(t){return t.itemId===e.itemId}))})),e.party.includeWatched||(n=n.filter((function(e){return!e.watched}))),n=n.sort((function(){return Math.random()-.5})),C(e.party.mediaType),R(e.party.secretMode),W(e.party.memberCount),he.current=e.party.memberCount,j(n),de.current=n,t.emit("join-room",v)}))}),[]),(0,i.useEffect)((function(){return t.on("vote-increment",(function(e){de.current.find((function(t){return t.id==e})).votes+=1,j((0,r.Z)(de.current))})),t.on("vote-decrement",(function(e){de.current.find((function(t){return t.id==e})).votes-=1,j((0,r.Z)(de.current))})),t.on("votes-needed",(function(e){E(e),me.current=e})),t.on("vote-selected",(function(e){var t=de.current.filter((function(t){return t.votes>=e}));if(t.forEach((function(e){e.votes=0,e.voted=!1})),1===t.length){var n=de.current.filter((function(t){return t.votes<e}));q(n)}j(t),de.current=t})),t.on("random-selected",(function(e){t.emit("leave-room",v),H&&M(!1),ce(!0),setTimeout((function(){ne(!0),setTimeout((function(){var t=de.current.find((function(t){return t.id===e}));window.scrollTo(0,0);var n=de.current.filter((function(t){return t.id!==e}));q(n),j([t]),de.current=[t]}),2e3)}),1e3)})),t.on("user-ready",(function(){fe.current+=1,_(fe.current),fe.current==he.current&&setTimeout((function(){ne(!0),setTimeout((function(){var e=de.current.filter((function(e){return e.votes>=me.current}));if(0!==e.length){if(1===e.length){window.scrollTo(0,0);var t=de.current.filter((function(e){return e.votes<me.current}));q(t)}else e.forEach((function(e){e.votes=0,e.voted=!1})),window.scrollTo(0,0),_(0),fe.current=0;j(e),de.current=e,M(!1),ne(!1)}else M(!1)}),2e3)}),1e3)})),t.on("user-not-ready",(function(){fe.current-=1,_(fe.current)})),t.on("party-member-left",(function(){W(he.current-1),he.current-=1})),t.on("party-deleted",(function(){t.emit("leave-room",v),a("/party")})),function(){t.off("vote-increment"),t.off("vote-decrement"),t.off("votes-needed"),t.off("vote-selected"),t.off("random-selected"),t.off("party-deleted"),t.off("clear-votes"),t.off("user-ready"),t.off("user-not-ready"),t.off("party-member-left")}}),[]);var pe=function(e){var n=x.find((function(t){return t.id===e}));n.voted?(n.voted=!1,n.votes-=1,j((0,r.Z)(x)),de.current=(0,r.Z)(x),t.emit("vote-remote-decrement",e,v)):(n.voted=!0,n.votes+=1,j((0,r.Z)(x)),de.current=(0,r.Z)(x),t.emit("vote-remote-increment",e,v))};(0,h.TA)((function(){console.log("longpress is triggered")}),{onCancel:function(e){return console.log("longpress cancel")},threshold:1e3});return(0,p.jsxs)("div",{className:"content",children:[1===x.length&&(0,p.jsx)(u(),{height:window.outerHeight+window.innerHeight}),(0,p.jsx)("img",{src:l.Z,alt:"Back symbol",onClick:function(){"owner"===Q&&x.length>1?fetch("https://choice-champ-backend.glitch.me/party/".concat(v),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){le(!0),setTimeout((function(){le(!1),t.emit("leave-room",v),t.emit("party-remote-deleted",v),a("/party")}),1e3)})):(le(!0),setTimeout((function(){le(!1),t.emit("user-leave-party",v),t.emit("leave-room",v),a("/party")}),1e3))},className:"top-left clickable",style:ue?{animation:"button-press .75s"}:null}),"owner"===Q&&x.length>1?(0,p.jsxs)("div",{className:"votes-needed-section",children:[(0,p.jsx)("p",{className:"votes-needed-title",children:"Votes Needed"}),(0,p.jsx)("input",{type:"number",className:"votes-needed-input",value:k,min:1,onChange:function(e){E(e.target.value),me.current=e.target.value,isNaN(e.target.value)||""===e.target.value||t.emit("votes-needed-remote",e.target.value,v)}})]}):(0,p.jsx)("div",{className:"guest-banner"}),"owner"===Q&&x.length>1&&(0,p.jsx)("img",{src:d,className:"edit clickable",alt:"Dice",onClick:function(){if(1!==x.length){ce(!0);var e=Math.floor(Math.random()*x.length),n=x[e];n.votes=0,n.voted=!1;var r=x.filter((function(e){return e.id!==n.id}));setTimeout((function(){ne(!0),setTimeout((function(){q(r),j([n]),de.current=[n],window.scrollTo(0,0),fetch("https://choice-champ-backend.glitch.me/party/".concat(v),{method:"DELETE",headers:{"Content-Type":"application/json"}})}),2e3)}),1e3),t.emit("random-remote-selected",n.id,v)}}}),(0,p.jsx)("div",{className:"game"===N?"collection-content-game":"collection-content-other",children:1===x.length?(0,p.jsxs)("div",{className:"winner",children:[(0,p.jsx)("p",{className:"winner-banner",children:"CHOICE CHAMPION!"}),(0,p.jsx)("img",{className:"game"===N?"winner-img-game":"winner-img",src:x[0].poster}),(0,p.jsx)("p",{className:"winner-title",children:x[0].title}),(0,p.jsx)("p",{className:"runner-up-title",children:"Runner Ups"}),P.length>0&&P.map((function(e){return(0,p.jsx)("p",{className:"runner-up",children:e.title},e.id)}))]}):(0,r.Z)(x).reverse().map((function(e){return(0,p.jsxs)("div",{className:"item-section",onClick:pe,children:[(0,p.jsx)("img",{id:e.id,className:"movie"===N||"tv"===N?"item-img":"game"===N?"game-img":"board-img",src:e.poster,style:e.voted?{border:"5px solid #FCB016"}:null}),("game"===N||"board"===N)&&(0,p.jsx)("p",{style:e.voted?{borderLeft:"5px solid #FCB016",borderRight:"5px solid #FCB016",borderBottom:"5px solid #FCB016",borderRadius:"0px 0px 9px 9px"}:null,children:e.title}),e.votes>0&&!F&&(0,p.jsx)("div",{className:"item-votes",children:e.votes})]},e.id)}))}),x.length>1&&(H?(0,p.jsx)("div",{className:"ready-overlay",onClick:U>1?function(){M(!1),fe.current-=1,_(fe.current),t.emit("user-not-ready-remote",v)}:null,style:te?{transform:"translateY(100vh)",transition:"transform 2s ease-in-out"}:null,children:1===U?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("h1",{className:"ready-text",style:{marginBottom:"30px"},children:"Filtering Items"}),(0,p.jsx)(m.Z,{type:"beat",className:"ready-loading",size:20,speed:.5})]}):(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("h1",{className:"ready-text",children:"Ready!"}),(0,p.jsx)("p",{className:"waiting-text",children:"Waiting on other party members..."}),(0,p.jsx)("p",{className:"waiting-text-cancel",children:"Click to return to voting"}),(0,p.jsx)(m.Z,{type:"sync",className:"ready-loading",size:20,speed:.5})]})}):ie?null:(0,p.jsx)(s.Z,{className:"finish-voting-btn",onClick:function(){M(!0),fe.current+=1,_(fe.current),fe.current==he.current&&setTimeout((function(){ne(!0),setTimeout((function(){var e=x.filter((function(e){return e.votes>=me.current}));if(0!==e.length){if(1===e.length){var t=x.filter((function(e){return e.votes<me.current}));q(t),window.scrollTo(0,0),fetch("https://choice-champ-backend.glitch.me/party/".concat(v),{method:"DELETE",headers:{"Content-Type":"application/json"}})}else e.forEach((function(e){e.votes=0,e.voted=!1})),window.scrollTo(0,0),_(0),fe.current=0;j(e),de.current=e,M(!1),ne(!1)}else M(!1)}),2e3)}),1e3),t.emit("user-ready-remote",v)},children:"Finish Voting"})),ie&&(0,p.jsx)("div",{className:"ready-overlay",style:te?{transform:"translateY(100vh)",transition:"transform 2s ease-in-out"}:null,children:(0,p.jsx)("img",{src:d,className:"random-selected-dice",alt:"Dice"})})]})}},3999:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var r=n(184),o=function(e){return(0,r.jsx)("button",{type:e.type,disabled:e.disabled,onClick:e.onClick,className:e.className,children:e.children})}},584:function(e,t,n){e.exports=n.p+"static/media/dices.682aa6ebb10e531380e1.png"}}]);
//# sourceMappingURL=386.9b509124.chunk.js.map