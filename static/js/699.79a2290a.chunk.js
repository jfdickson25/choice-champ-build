"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[699],{5699:function(e,t,c){c.r(t),c.d(t,{default:function(){return f}});var a=c(3433),n=c(9439),i=c(2791),o=c(7689),l=c(3108),s=c(5382),r=c(9806),m=c(1632),d=c(8378),u=c(2852),h=c(184),f=function(e){var t=e.socket,c=(0,i.useContext)(l.V),f=(0,o.s0)(),g=(0,o.UO)().type,p=(0,o.UO)().id,b=(0,o.UO)().name,v=(0,i.useState)([]),k=(0,n.Z)(v,2),x=k[0],j=k[1],N=(0,i.useState)(!1),y=(0,n.Z)(N,2),w=y[0],C=y[1],S=(0,i.useState)(0),Z=(0,n.Z)(S,2),_=Z[0],z=Z[1],T=(0,i.useState)(!0),I=(0,n.Z)(T,2),E=I[0],O=I[1],D=(0,i.useState)((0,o.UO)().name),G=(0,n.Z)(D,2),M=G[0],U=G[1],B=(0,i.useState)(!1),L=(0,n.Z)(B,2),P=L[0],A=L[1],F=(0,i.useState)(!1),J=(0,n.Z)(F,2),R=J[0],V=J[1],H=(0,i.useState)(!1),q=(0,n.Z)(H,2),K=q[0],Q=q[1],W=(0,i.useState)(!1),X=(0,n.Z)(W,2),Y=X[0],$=X[1],ee=(0,i.useRef)(x),te=window.location.search,ce=new URLSearchParams(te),ae=ce.get("filter"),ne=ce.get("hash");(0,i.useEffect)((function(){c.showFooterHandler(!0),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(p),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){j(e.items),ee.current=e.items,z(e.shareCode),"alphabetical"===ae?A(!0):"watched"===ae&&V(!0),setTimeout((function(){O(!1),ne&&setTimeout((function(){document.getElementById(ne).scrollIntoView({behavior:"smooth"})}),500)}),500),t.emit("join-room",p)}))}),[c,p,t]),(0,i.useEffect)((function(){return t.on("remove-item",(function(e){ee.current=ee.current.filter((function(t){return t._id!==e})),j(ee.current)})),t.on("watched-item",(function(e){ee.current=ee.current.map((function(t){return t._id===e&&!1===t.watched?t.watched=!0:t._id===e&&!0===t.watched&&(t.watched=!1),t})),j(ee.current)})),t.on("add-item",(function(e){ee.current=[].concat((0,a.Z)(ee.current),[e]),j(ee.current)})),function(){t.off("remove-item"),t.off("watched-item"),t.off("add-item")}}),[t]);var ie=function(e){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(p,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(c){ee.current=ee.current.filter((function(t){return t._id!==e})),j(ee.current),t.emit("remove-remote-item",e,p)}))},oe=function(e){f(P||R?"/collections/".concat(g,"/").concat(M,"/").concat(p,"/details/").concat(e,"?filter=").concat(P?"alphabetical":"watched"):"/collections/".concat(g,"/").concat(M,"/").concat(p,"/details/").concat(e))},le=function(e,c){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(p,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({watched:!c})}).then((function(c){j(x.map((function(t){return t._id===e&&!1===t.watched?(t.watched=!0,t.timestamp=Math.floor(Date.now()/1e3)):t._id===e&&!0===t.watched&&(t.watched=!1,t.timestamp=void 0),t}))),ee.current=x,t.emit("watched-remote-item",e,p)}))},se=(0,i.useState)(""),re=(0,n.Z)(se,2),me=re[0],de=re[1],ue=(0,i.useMemo)((function(){return x.filter((function(e){return e.title.toLowerCase().includes(me.toLowerCase())}))}),[x,me]);return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("div",{className:"content",children:[K?(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){t.emit("leave-room",p),Q(!0),setTimeout((function(){Q(!1),f("/collections/".concat(g))}),1e3)}}),w?(0,h.jsx)("input",{className:"title",style:{gridColumn:"5/14",marginBottom:"10px"},value:M,onChange:function(e){return U(e.target.value)}}):(0,h.jsx)("h2",{className:"title color-".concat(g),children:M}),(0,h.jsx)("img",{src:w?u:d,className:"edit clickable",alt:"Edit icon",onClick:function(){w?""!==M?M!==b?fetch("https://choice-champ-backend.glitch.me/collections/name/".concat(p),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M})}).then((function(e){C(!1)})):C(!1):alert("Collection name cannot be empty"):C(!0)},style:w?{animation:"button-press .75s"}:null}),(0,h.jsxs)("div",{className:"share-code",children:["share code: ",_]}),Y?(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/plus-button-active.png?v=1702137827635",alt:"Add icon",className:"add clickable",style:{animation:"button-press .75s"}}):(0,h.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/plus-button.png?v=1702138169050",alt:"Add icon",className:"add clickable",onClick:function(){$(!0),setTimeout((function(){$(!1),f("/collections/".concat(g,"/").concat(M,"/").concat(p,"/add"))}),1e3)}}),(0,h.jsx)("input",{className:"search-bar",placeholder:"Search Collection",value:me,onChange:function(e){return de(e.target.value)}}),(0,h.jsx)(r.G,{icon:m.SZw,size:"xl",onClick:function(){A(!1),V(!1)},className:P||R?"category-icon clickable":"active-categorize active-".concat(g," category-icon clickable"),id:"category-clock"}),(0,h.jsx)(r.G,{icon:m.bDz,size:"xl",onClick:function(){A(!0),V(!1)},className:P?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-alph"}),(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",onClick:function(){V(!0),A(!1)},className:R?"active-categorize active-".concat(g," category-icon clickable"):"category-icon clickable",id:"category-watch"}),(0,h.jsx)("span",{id:"chrono-label",className:P||R?"category-label":"category-label category-label-active-".concat(g),children:"recent"}),(0,h.jsx)("span",{id:"alph-label",className:P?"category-label category-label-active-".concat(g):"category-label",children:"a-z"}),(0,h.jsx)("span",{id:"watched-label",className:R?"category-label category-label-active-".concat(g):"category-label",children:"game"===g||"board"===g?"played":"watched"}),E?(0,h.jsx)(s.Z,{type:"beat",className:"list-loading",size:20}):(0,h.jsxs)("div",{className:"collection-content",children:[0===ue.length&&""===me&&!R&&(0,h.jsx)("p",{className:"no-items",children:"No items in this collection"}),0===ue.length&&""!==me&&(0,h.jsx)("p",{className:"no-items",children:"No items match search"}),P&&!R?(0,a.Z)(ue).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return e.watched?null:(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:w?null:function(){oe(e.itemId)},children:[w?(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}):(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img clickable":"board-img clickable",src:e.poster}),w?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ie(e._id)}}):null,w?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){le(e._id)}}):null]},e.itemId)})):(0,a.Z)(ue).reverse().map((function(e){return e.watched||R?null:(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:w?null:function(){oe(e.itemId)},children:[w?(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}):(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img clickable":"board-img clickable",src:e.poster}),w?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ie(e._id)}}):null,w?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched clickable",onClick:function(){le(e._id)}}):null]},e.itemId)})),R&&(0===(0,a.Z)(ue).filter((function(e){return e.watched})).length&&""===me?"game"===g||"board"===g?(0,h.jsx)("p",{className:"no-items",children:"No played items"}):(0,h.jsx)("p",{className:"no-items",children:"No watched items"}):(0,a.Z)(ue).filter((function(e){return e.watched})).sort((function(e,t){return e.timestamp-t.timestamp})).reverse().map((function(e){return(0,h.jsxs)("div",{className:"item-section",id:e.itemId,onClick:w?null:function(){oe(e.itemId)},children:[(0,h.jsx)("img",{alt:"".concat(e.title," poster"),className:"movie"===g||"tv"===g||"game"===g?"item-img":"board-img",src:e.poster}),w?(0,h.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(e.title," poster"),className:"item-action clickable",onClick:function(){ie(e._id)}}):null,w?(0,h.jsx)(r.G,{icon:"game"===g?m.l9D:"board"===g?m.rvC:m.Mdf,size:"xl",className:"item-action-watched color-".concat(g," clickable"),onClick:function(){le(e._id,e.watched)}}):null]},e.itemId)})))]})]})})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=699.79a2290a.chunk.js.map