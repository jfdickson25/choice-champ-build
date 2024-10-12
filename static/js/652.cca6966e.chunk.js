"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[652],{3217:function(e,t,c){c(2791);t.Z=c.p+"static/media/search.1769d7a66264f66c9ae9cfe98c03017d.svg"},7652:function(e,t,c){c.r(t),c.d(t,{default:function(){return b}});var a=c(3433),n=c(9439),o=c(2791),i=c(7689),l=c(3108),s=c(5382),r=c(9806),m=c(1632),d=c(8378),u=c(2852),h=c(3217),f=c(184),p=function(e){var t=e.src,c=e.alt,a=e.classNames,i=e.collectionColor,l=(0,o.useState)(!1),r=(0,n.Z)(l,2),m=r[0],d=r[1];return(0,f.jsxs)("div",{children:[!m&&(0,f.jsx)(s.Z,{color:i,type:"beat",className:"item-loading",size:20}),(0,f.jsx)("img",{src:t,className:a,alt:c,style:m?{}:{display:"none"},onLoad:function(){return d(!0)}})]})},b=function(e){var t=e.socket,c=(0,o.useContext)(l.V),b=(0,i.s0)(),g=(0,i.UO)().type,x=(0,i.UO)().id,k=window.location.search,v=new URLSearchParams(k),j=v.get("filter"),C=v.get("hash"),N=(0,o.useState)([]),y=(0,n.Z)(N,2),w=y[0],S=y[1],Z=(0,o.useState)(!1),z=(0,n.Z)(Z,2),_=z[0],T=z[1],I=(0,o.useState)(0),G=(0,n.Z)(I,2),D=G[0],E=G[1],M=(0,o.useState)(!0),B=(0,n.Z)(M,2),F=B[0],O=B[1],L=(0,o.useState)(""),P=(0,n.Z)(L,2),U=P[0],A=P[1],J=(0,o.useState)(""),R=(0,n.Z)(J,2),V=R[0],H=R[1],q=(0,o.useState)((function(){return"alphabetical"===j})),K=(0,n.Z)(q,2),Q=K[0],W=K[1],X=(0,o.useState)((function(){return"watched"===j})),Y=(0,n.Z)(X,2),$=Y[0],ee=Y[1],te=(0,o.useState)(!1),ce=(0,n.Z)(te,2),ae=ce[0],ne=ce[1],oe=(0,o.useState)(!1),ie=(0,n.Z)(oe,2),le=ie[0],se=ie[1],re=(0,o.useState)("#FCB016"),me=(0,n.Z)(re,2),de=me[0],ue=me[1],he=(0,o.useRef)(w);(0,o.useEffect)((function(){c.showFooterHandler(!0),"movie"===g?ue("#FCB016"):"tv"===g?ue("#FF4D4D"):"game"===g?ue("#2482C5"):"board"===g&&ue("#45B859"),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(x),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){S(e.items),he.current=e.items,E(e.shareCode),A(e.name),H(e.name),"alphabetical"===j?W(!0):"watched"===j&&ee(!0),setTimeout((function(){O(!1),C&&setTimeout((function(){document.getElementById(C).scrollIntoView({behavior:"smooth"})}),500)}),500),t.emit("join-room",x)}))}),[c,x,t]),(0,o.useEffect)((function(){return t.on("remove-item",(function(e){he.current=he.current.filter((function(t){return t._id!==e})),S(he.current)})),t.on("watched-item",(function(e){he.current=he.current.map((function(t){return t._id===e&&!1===t.watched?t.watched=!0:t._id===e&&!0===t.watched&&(t.watched=!1),t})),S(he.current)})),t.on("add-item",(function(e){he.current=[].concat((0,a.Z)(he.current),[e]),S(he.current)})),function(){t.off("remove-item"),t.off("watched-item"),t.off("add-item")}}),[t]);var fe=function(e){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(x,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(c){he.current=he.current.filter((function(t){return t._id!==e})),S(he.current),t.emit("remove-remote-item",e,x)}))},pe=function(e){b(Q||$?"/collections/".concat(g,"/").concat(x,"/details/").concat(e,"?filter=").concat(Q?"alphabetical":"watched"):"/collections/".concat(g,"/").concat(x,"/details/").concat(e))},be=function(e,c){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(x,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({watched:!c})}).then((function(c){S(w.map((function(t){return t._id===e&&!1===t.watched?(t.watched=!0,t.timestamp=Math.floor(Date.now()/1e3)):t._id===e&&!0===t.watched&&(t.watched=!1,t.timestamp=void 0),t}))),he.current=w,t.emit("watched-remote-item",e,x)}))},ge=(0,o.useState)(""),xe=(0,n.Z)(ge,2),ke=xe[0],ve=xe[1],je=(0,o.useMemo)((function(){return w.filter((function(e){return e.title.toLowerCase().includes(ke.toLowerCase())}))}),[w,ke]);return(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)("div",{className:"content",children:[ae?(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){t.emit("leave-room",x),ne(!0),setTimeout((function(){ne(!1),b("/collections/".concat(g))}),1e3)}}),_?(0,f.jsx)("input",{className:"title",style:{gridColumn:"5/14",marginBottom:"10px"},value:V,onChange:function(e){return H(e.target.value)}}):(0,f.jsx)("h2",{className:"title color-".concat(g),children:V}),(0,f.jsx)("img",{src:_?u:d,className:"edit clickable",alt:"Edit icon",onClick:function(){_?""!==V?V!==U?fetch("https://choice-champ-backend.glitch.me/collections/name/".concat(x),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:V})}).then((function(e){T(!1),A(V)})):T(!1):alert("Collection name cannot be empty"):T(!0)},style:_?{animation:"button-press .75s"}:null}),(0,f.jsxs)("div",{className:"share-code",children:["share code: ",D]}),le?(0,f.jsxs)("button",{className:"add-btn backgroundColor-".concat(g," backgroundColorPressed-").concat(g),style:{animation:"button-press .75s"},children:["Add ","movie"===g?"Movie":"game"===g||"board"===g?"Game":"Show"]}):(0,f.jsxs)("button",{className:"add-btn backgroundColor-".concat(g," clickable"),onClick:function(){se(!0),setTimeout((function(){se(!1),b("/collections/".concat(g,"/").concat(x,"/add"))}),1e3)},children:["Add ","movie"===g?"Movie":"game"===g||"board"===g?"Game":"Show"]}),(0,f.jsxs)("div",{className:"search-bar-container",children:[(0,f.jsx)("img",{src:h.Z,alt:"Search icon",className:"search-icon"}),(0,f.jsx)("input",{className:"search-bar",placeholder:"Search Collection",value:ke,onChange:function(e){return ve(e.target.value)}}),""!==ke&&(0,f.jsx)(r.G,{icon:m.g82,size:"lg",className:"clear-search clickable",onClick:function(){return ve("")}})]}),(0,f.jsx)(r.G,{icon:m.SZw,size:"xl",onClick:function(){W(!1),ee(!1)},className:Q||$?"category-icon clickable":"active-categorize active-".concat(g," category-icon clickable"),id:"category-clock"}),(0,f.jsx)(r.G,{icon:m.bDz,size:"xl",onClick:function(){W(!0),ee(!1)},className:Q?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-alph"}),(0,f.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",onClick:function(){ee(!0),W(!1)},className:$?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-watch"}),(0,f.jsx)("span",{id:"chrono-label",className:Q||$?"category-label":"category-label category-label-active-".concat(g),children:"recent"}),(0,f.jsx)("span",{id:"alph-label",className:Q?"category-label category-label-active-".concat(g):"category-label",children:"a-z"}),(0,f.jsx)("span",{id:"watched-label",className:$?"category-label category-label-active-".concat(g):"category-label",children:"game"===g||"board"===g?"played":"watched"}),F?(0,f.jsx)(s.Z,{color:de,type:"beat",className:"list-loading",size:20}):(0,f.jsxs)("div",{className:"collection-content",children:[0===je.length&&""===ke&&!$&&(0,f.jsx)("p",{className:"no-items",children:"No items in this collection"}),0===je.length&&""!==ke&&(0,f.jsx)("p",{className:"no-items",children:"No items match search"}),Q&&!$?(0,a.Z)(je).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return e.watched?null:(0,f.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img",src:e.poster}):(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img clickable",src:e.poster}),_?(0,f.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,f.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){be(e._id)}}):null]},e.itemId)})):(0,a.Z)(je).reverse().map((function(e){return e.watched||$?null:(0,f.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img",src:e.poster}):(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img clickable",src:e.poster}),_?(0,f.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,f.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){be(e._id)}}):null]},e.itemId)})),$&&(0===(0,a.Z)(je).filter((function(e){return e.watched})).length&&""===ke?"game"===g||"board"===g?(0,f.jsx)("p",{className:"no-items",children:"No played items"}):(0,f.jsx)("p",{className:"no-items",children:"No watched items"}):(0,a.Z)(je).filter((function(e){return e.watched})).sort((function(e,t){return e.timestamp-t.timestamp})).reverse().map((function(e){return(0,f.jsxs)("div",{className:"item-section",id:e.itemId,onClick:_?null:function(){pe(e.itemId)},children:[_?(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img",src:e.poster}):(0,f.jsx)(p,{alt:"".concat(e.title," poster"),collectionColor:de,classNames:"item-img clickable",src:e.poster}),_?(0,f.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){fe(e._id)}}):null,_?(0,f.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched color-".concat(g," clickable"),onClick:function(){be(e._id,e.watched)}}):null]},e.itemId)})))]})]})})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=652.cca6966e.chunk.js.map