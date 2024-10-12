"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[699],{3217:function(e,t,c){c(2791);t.Z=c.p+"static/media/search.1769d7a66264f66c9ae9cfe98c03017d.svg"},5699:function(e,t,c){c.r(t),c.d(t,{default:function(){return b}});var a=c(3433),n=c(9439),o=c(2791),i=c(7689),l=c(3108),s=c(5382),r=c(9806),d=c(1632),m=c(8378),u=c(2852),h=c(3217),f=c(8387),p=c(184),b=function(e){var t=e.socket,c=(0,o.useContext)(l.V),b=(0,i.s0)(),g=(0,i.UO)().type,v=(0,i.UO)().id,x=window.location.search,k=new URLSearchParams(x),j=k.get("filter"),C=k.get("hash"),N=(0,o.useState)([]),y=(0,n.Z)(N,2),w=y[0],Z=y[1],S=(0,o.useState)(!1),z=(0,n.Z)(S,2),_=z[0],T=z[1],I=(0,o.useState)(0),G=(0,n.Z)(I,2),D=G[0],B=G[1],E=(0,o.useState)(!0),M=(0,n.Z)(E,2),F=M[0],O=M[1],L=(0,o.useState)(""),P=(0,n.Z)(L,2),U=P[0],A=P[1],J=(0,o.useState)(""),R=(0,n.Z)(J,2),V=R[0],H=R[1],q=(0,o.useState)((function(){return"alphabetical"===j})),K=(0,n.Z)(q,2),Q=K[0],W=K[1],X=(0,o.useState)((function(){return"watched"===j})),Y=(0,n.Z)(X,2),$=Y[0],ee=Y[1],te=(0,o.useState)(!1),ce=(0,n.Z)(te,2),ae=ce[0],ne=ce[1],oe=(0,o.useState)(!1),ie=(0,n.Z)(oe,2),le=ie[0],se=ie[1],re=(0,o.useState)("#FCB016"),de=(0,n.Z)(re,2),me=de[0],ue=de[1],he=(0,o.useRef)(w);(0,o.useEffect)((function(){c.showFooterHandler(!0),"movie"===g?ue("#FCB016"):"tv"===g?ue("#FF4D4D"):"game"===g?ue("#2482C5"):"board"===g&&ue("#45B859"),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){Z(e.items),he.current=e.items,B(e.shareCode),A(e.name),H(e.name),"alphabetical"===j?W(!0):"watched"===j&&ee(!0),setTimeout((function(){O(!1),C&&setTimeout((function(){document.getElementById(C).scrollIntoView({behavior:"smooth"})}),500)}),500),t.emit("join-room",v)}))}),[c,v,t]),(0,o.useEffect)((function(){return t.on("remove-item",(function(e){he.current=he.current.filter((function(t){return t._id!==e})),Z(he.current)})),t.on("watched-item",(function(e){he.current=he.current.map((function(t){return t._id===e&&!1===t.watched?t.watched=!0:t._id===e&&!0===t.watched&&(t.watched=!1),t})),Z(he.current)})),t.on("add-item",(function(e){he.current=[].concat((0,a.Z)(he.current),[e]),Z(he.current)})),function(){t.off("remove-item"),t.off("watched-item"),t.off("add-item")}}),[t]);var fe=function(e){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(c){he.current=he.current.filter((function(t){return t._id!==e})),Z(he.current),t.emit("remove-remote-item",e,v)}))},pe=function(e){b(Q||$?"/collections/".concat(g,"/").concat(v,"/details/").concat(e,"?filter=").concat(Q?"alphabetical":"watched"):"/collections/".concat(g,"/").concat(v,"/details/").concat(e))},be=function(e,c){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({watched:!c})}).then((function(c){Z(w.map((function(t){return t._id===e&&!1===t.watched?(t.watched=!0,t.timestamp=Math.floor(Date.now()/1e3)):t._id===e&&!0===t.watched&&(t.watched=!1,t.timestamp=void 0),t}))),he.current=w,t.emit("watched-remote-item",e,v)}))},ge=(0,o.useState)(""),ve=(0,n.Z)(ge,2),xe=ve[0],ke=ve[1],je=(0,o.useMemo)((function(){return w.filter((function(e){return e.title.toLowerCase().includes(xe.toLowerCase())}))}),[w,xe]);return(0,p.jsx)(o.Fragment,{children:(0,p.jsxs)("div",{className:"content",children:[ae?(0,p.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,p.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){t.emit("leave-room",v),ne(!0),setTimeout((function(){ne(!1),b("/collections/".concat(g))}),1e3)}}),_?(0,p.jsx)("input",{className:"title",style:{gridColumn:"5/14",marginBottom:"10px"},value:V,onChange:function(e){return H(e.target.value)}}):(0,p.jsx)("h2",{className:"title color-".concat(g),children:V}),(0,p.jsx)("img",{src:_?u:m,className:"edit clickable",alt:"Edit icon",onClick:function(){_?""!==V?V!==U?fetch("https://choice-champ-backend.glitch.me/collections/name/".concat(v),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V})}).then((function(e){T(!1),A(V)})):T(!1):alert("Collection name cannot be empty"):T(!0)},style:_?{animation:"button-press .75s"}:null}),(0,p.jsxs)("div",{className:"share-code",children:["share code: ",D]}),le?(0,p.jsxs)("button",{className:"add-btn backgroundColor-".concat(g," backgroundColorPressed-").concat(g),style:{animation:"button-press .75s"},children:["Add ","movie"===g?"Movie":"game"===g||"board"===g?"Game":"Show"]}):(0,p.jsxs)("button",{className:"add-btn backgroundColor-".concat(g," clickable"),onClick:function(){se(!0),setTimeout((function(){se(!1),b("/collections/".concat(g,"/").concat(v,"/add"))}),1e3)},children:["Add ","movie"===g?"Movie":"game"===g||"board"===g?"Game":"Show"]}),(0,p.jsxs)("div",{className:"search-bar-container",children:[(0,p.jsx)("img",{src:h.Z,alt:"Search icon",className:"search-icon"}),(0,p.jsx)("input",{className:"search-bar",placeholder:"Search Collection",value:xe,onChange:function(e){return ke(e.target.value)}}),""!==xe&&(0,p.jsx)(r.G,{icon:d.g82,size:"lg",className:"clear-search clickable",onClick:function(){return ke("")}})]}),(0,p.jsx)(r.G,{icon:d.SZw,size:"xl",onClick:function(){W(!1),ee(!1)},className:Q||$?"category-icon clickable":"active-categorize active-".concat(g," category-icon clickable"),id:"category-clock"}),(0,p.jsx)(r.G,{icon:d.bDz,size:"xl",onClick:function(){W(!0),ee(!1)},className:Q?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-alph"}),(0,p.jsx)(r.G,{icon:"game"===g?d.l9D:"board"===g?d.rvC:d.Mdf,size:"xl",onClick:function(){ee(!0),W(!1)},className:$?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-watch"}),(0,p.jsx)("span",{id:"chrono-label",className:Q||$?"category-label":"category-label category-label-active-".concat(g),children:"recent"}),(0,p.jsx)("span",{id:"alph-label",className:Q?"category-label category-label-active-".concat(g):"category-label",children:"a-z"}),(0,p.jsx)("span",{id:"watched-label",className:$?"category-label category-label-active-".concat(g):"category-label",children:"game"===g||"board"===g?"played":"watched"}),F?(0,p.jsx)(s.Z,{color:me,type:"beat",className:"list-loading",size:20}):(0,p.jsxs)("div",{className:"collection-content",children:[0===je.length&&""===xe&&!$&&(0,p.jsx)("p",{className:"no-items",children:"No items in this collection"}),0===je.length&&""!==xe&&(0,p.jsx)("p",{className:"no-items",children:"No items match search"}),Q&&!$?(0,a.Z)(je).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return e.watched?null:(0,p.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img",src:e.poster}):(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img clickable",src:e.poster}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,p.jsx)(r.G,{icon:"game"===g?d.l9D:"board"===g?d.rvC:d.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){be(e._id)}}):null]},e.itemId)})):(0,a.Z)(je).reverse().map((function(e){return e.watched||$?null:(0,p.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img",src:e.poster}):(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img clickable",src:e.poster}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,p.jsx)(r.G,{icon:"game"===g?d.l9D:"board"===g?d.rvC:d.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){be(e._id)}}):null]},e.itemId)})),$&&(0===(0,a.Z)(je).filter((function(e){return e.watched})).length&&""===xe?"game"===g||"board"===g?(0,p.jsx)("p",{className:"no-items",children:"No played items"}):(0,p.jsx)("p",{className:"no-items",children:"No watched items"}):(0,a.Z)(je).filter((function(e){return e.watched})).sort((function(e,t){return e.timestamp-t.timestamp})).reverse().map((function(e){return(0,p.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img",src:e.poster}):(0,p.jsx)(f.Z,{voted:null,finished:null,alt:"".concat(e.title," poster"),collectionColor:me,classNames:"item-img clickable",src:e.poster}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,p.jsx)(r.G,{icon:"game"===g?d.l9D:"board"===g?d.rvC:d.Mdf,size:"xl",className:"item-action-watched color-".concat(g," clickable"),onClick:function(){be(e._id,e.watched)}}):null]},e.itemId)})))]})]})})}},8387:function(e,t,c){var a=c(9439),n=c(2791),o=c(5382),i=c(184);t.Z=function(e){var t=e.src,c=e.alt,l=e.classNames,s=e.collectionColor,r=e.voted,d=e.finished,m=(0,n.useState)(!1),u=(0,a.Z)(m,2),h=u[0],f=u[1];return(0,i.jsxs)("div",{children:[!h&&(0,i.jsx)(o.Z,{color:s,type:"beat",className:"item-loading",size:20}),(0,i.jsx)("img",{src:t,className:l,alt:c,style:h?r&&!d?{border:"5px solid #FCB016"}:null:{display:"none"},onLoad:function(){return f(!0)}})]})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=699.74c4f96a.chunk.js.map