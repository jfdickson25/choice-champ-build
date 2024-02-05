"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[699],{5699:function(e,t,c){c.r(t),c.d(t,{default:function(){return f}});var a=c(3433),n=c(9439),i=c(2791),o=c(7689),l=c(3108),s=c(5382),r=c(9806),m=c(1632),d=c(8378),u=c(2852),h=c(184),f=function(e){var t=e.socket,c=(0,i.useContext)(l.V),f=(0,o.s0)(),g=(0,o.UO)().type,b=(0,o.UO)().id,p=(0,o.UO)().name,v=(0,i.useState)([]),k=(0,n.Z)(v,2),x=k[0],j=k[1],N=(0,i.useState)(!1),y=(0,n.Z)(N,2),C=y[0],w=y[1],Z=(0,i.useState)(0),S=(0,n.Z)(Z,2),_=S[0],T=S[1],z=(0,i.useState)(!0),I=(0,n.Z)(z,2),E=I[0],O=I[1],D=(0,i.useState)((0,o.UO)().name),G=(0,n.Z)(D,2),M=G[0],B=G[1],U=(0,i.useState)(!1),L=(0,n.Z)(U,2),A=L[0],F=L[1],H=(0,i.useState)(!1),J=(0,n.Z)(H,2),P=J[0],V=J[1],R=(0,i.useState)(!1),q=(0,n.Z)(R,2),K=q[0],Q=q[1],W=(0,i.useState)(!1),X=(0,n.Z)(W,2),Y=X[0],$=X[1],ee=(0,i.useRef)(x),te=(0,o.TH)().hash;(0,i.useEffect)((function(){c.showFooterHandler(!0),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(b),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){j(e.items),ee.current=e.items,T(e.shareCode),setTimeout((function(){O(!1),te&&setTimeout((function(){document.getElementById(te.substring(1)).scrollIntoView({behavior:"smooth"})}),500)}),500),t.emit("join-room",b)}))}),[c,b,t]),(0,i.useEffect)((function(){return t.on("remove-item",(function(e){ee.current=ee.current.filter((function(t){return t._id!==e})),j(ee.current)})),t.on("watched-item",(function(e){ee.current=ee.current.map((function(t){return t._id===e&&!1===t.watched?t.watched=!0:t._id===e&&!0===t.watched&&(t.watched=!1),t})),j(ee.current)})),t.on("add-item",(function(e){ee.current=[].concat((0,a.Z)(ee.current),[e]),j(ee.current)})),function(){t.off("remove-item"),t.off("watched-item"),t.off("add-item")}}),[t]);var ce=function(e){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(b,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(c){ee.current=ee.current.filter((function(t){return t._id!==e})),j(ee.current),t.emit("remove-remote-item",e,b)}))},ae=function(e){f("/collections/".concat(g,"/").concat(M,"/").concat(b,"/details/").concat(e))},ne=function(e,c){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(b,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({watched:!c})}).then((function(c){j(x.map((function(t){return t._id===e&&!1===t.watched?(t.watched=!0,t.timestamp=Math.floor(Date.now()/1e3)):t._id===e&&!0===t.watched&&(t.watched=!1,t.timestamp=void 0),t}))),ee.current=x,t.emit("watched-remote-item",e,b)}))},ie=(0,i.useState)(""),oe=(0,n.Z)(ie,2),le=oe[0],se=oe[1],re=(0,i.useMemo)((function(){return x.filter((function(e){return e.title.toLowerCase().includes(le.toLowerCase())}))}),[x,le]);return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("div",{className:"content",children:[K?(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){t.emit("leave-room",b),Q(!0),setTimeout((function(){Q(!1),f("/collections/".concat(g))}),1e3)}}),C?(0,h.jsx)("input",{className:"title",style:{gridColumn:"5/14",marginBottom:"10px"},value:M,onChange:function(e){return B(e.target.value)}}):(0,h.jsx)("h2",{className:"title color-".concat(g),children:M}),(0,h.jsx)("img",{src:C?u:d,className:"edit clickable",alt:"Edit icon",onClick:function(){C?""!==M?M!==p?fetch("https://choice-champ-backend.glitch.me/collections/name/".concat(b),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M})}).then((function(e){w(!1)})):w(!1):alert("Collection name cannot be empty"):w(!0)},style:C?{animation:"button-press .75s"}:null}),(0,h.jsxs)("div",{className:"share-code",children:["share code: ",_]}),Y?(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/plus-button-active.png?v=1702137827635",alt:"Add icon",className:"add clickable",style:{animation:"button-press .75s"}}):(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/plus-button.png?v=1702138169050",alt:"Add icon",className:"add clickable",onClick:function(){$(!0),setTimeout((function(){$(!1),f("/collections/".concat(g,"/").concat(M,"/").concat(b,"/add"))}),1e3)}}),(0,h.jsx)("input",{className:"search-bar",placeholder:"Search Collection",value:le,onChange:function(e){return se(e.target.value)}}),(0,h.jsx)(r.G,{icon:m.SZw,size:"xl",onClick:function(){F(!1),V(!1)},className:A||P?"category-icon clickable":"active-categorize active-".concat(g," category-icon clickable"),id:"category-clock"}),(0,h.jsx)(r.G,{icon:m.bDz,size:"xl",onClick:function(){F(!0),V(!1)},className:A?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-alph"}),(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",onClick:function(){V(!0),F(!1)},className:P?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-watch"}),(0,h.jsx)("span",{id:"chrono-label",className:A||P?"category-label":"category-label category-label-active-".concat(g),children:"recent"}),(0,h.jsx)("span",{id:"alph-label",className:A?"category-label category-label-active-".concat(g):"category-label",children:"a-z"}),(0,h.jsx)("span",{id:"watched-label",className:P?"category-label category-label-active-".concat(g):"category-label",children:"game"===g||"board"===g?"played":"watched"}),E?(0,h.jsx)(s.Z,{type:"beat",className:"list-loading",size:20}):(0,h.jsxs)("div",{className:"collection-content",children:[0===re.length&&""===le&&!P&&(0,h.jsx)("p",{className:"no-items",children:"No items in this collection"}),0===re.length&&""!==le&&(0,h.jsx)("p",{className:"no-items",children:"No items match search"}),A&&!P?(0,a.Z)(re).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return e.watched?null:(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:C?null:function(){ae(e.itemId)},children:[C?(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}):(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img clickable":"board-img clickable",src:e.poster}),C?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ce(e._id)}}):null,C?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){ne(e._id)}}):null]},e.itemId)})):(0,a.Z)(re).reverse().map((function(e){return e.watched||P?null:(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:C?null:function(){ae(e.itemId)},children:[C?(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}):(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img clickable":"board-img clickable",src:e.poster}),C?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ce(e._id)}}):null,C?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){ne(e._id)}}):null]},e.itemId)})),P&&(0===(0,a.Z)(re).filter((function(e){return e.watched})).length&&""===le?"game"===g||"board"===g?(0,h.jsx)("p",{className:"no-items",children:"No played items"}):(0,h.jsx)("p",{className:"no-items",children:"No watched items"}):(0,a.Z)(re).filter((function(e){return e.watched})).sort((function(e,t){return e.timestamp-t.timestamp})).reverse().map((function(e){return(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:C?null:function(){ae(e.itemId)},children:[(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}),C?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ce(e._id)}}):null,C?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched color-".concat(g," clickable"),onClick:function(){ne(e._id,e.watched)}}):null]},e.itemId)})))]})]})})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=699.4d08d1a5.chunk.js.map