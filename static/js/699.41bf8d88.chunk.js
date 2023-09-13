"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[699],{5541:function(t,e,c){c(2791);e.Z=c.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},5699:function(t,e,c){c.r(e),c.d(e,{default:function(){return g}});var n=c(3433),i=c(9439),a=c(2791),o=c(7689),l=c(3108),s=c(5382),d=c(9806),r=c(1632),m=c(5541),h=c(4297),u=c(8378),f=c(2852),p=c(184),g=function(t){var e=t.socket,c=(0,a.useContext)(l.V),g=(0,o.s0)(),b=(0,o.UO)().type,v=(0,o.UO)().id,x=(0,o.UO)().name,j=(0,a.useState)([]),w=(0,i.Z)(j,2),C=w[0],N=w[1],k=(0,a.useState)(!1),Z=(0,i.Z)(k,2),_=Z[0],y=Z[1],S=(0,a.useState)(0),O=(0,i.Z)(S,2),T=O[0],E=O[1],z=(0,a.useState)(!0),I=(0,i.Z)(z,2),U=I[0],G=I[1],L=(0,a.useState)((0,o.UO)().name),A=(0,i.Z)(L,2),B=A[0],D=A[1],F=(0,a.useState)(!1),J=(0,i.Z)(F,2),P=J[0],H=J[1],M=(0,a.useRef)(C);(0,a.useEffect)((function(){c.showFooterHandler(!0),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){N(t.items),M.current=t.items,E(t.shareCode),G(!1),e.emit("join-room",v)}))}),[]),(0,a.useEffect)((function(){return e.on("remove-item",(function(t){M.current=M.current.filter((function(e){return e._id!==t})),N(M.current)})),e.on("watched-item",(function(t){M.current=M.current.map((function(e){return e._id===t&&!1===e.watched?e.watched=!0:e._id===t&&!0===e.watched&&(e.watched=!1),e})),N(M.current)})),e.on("add-items",(function(t){var e=[].concat((0,n.Z)(M.current),(0,n.Z)(t));M.current=e,N(M.current)})),function(){e.off("remove-item"),e.off("watched-item"),e.off("add-items")}}),[]);var R=function(t){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(c){N(C.filter((function(e){return e._id!==t}))),M.current=C,e.emit("remove-remote-item",t,v)}))},V=function(t){g("/collections/".concat(b,"/").concat(B,"/").concat(v,"/details/").concat(t))},W=function(t,c){fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(v,"/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({watched:!c})}).then((function(c){N(C.map((function(e){return e._id===t&&!1===e.watched?e.watched=!0:e._id===t&&!0===e.watched&&(e.watched=!1),e}))),M.current=C,e.emit("watched-remote-item",t,v)}))},q=(0,a.useState)(""),K=(0,i.Z)(q,2),Q=K[0],X=K[1],Y=(0,a.useMemo)((function(){return C.filter((function(t){return t.title.toLowerCase().includes(Q.toLowerCase())}))}),[C,Q]);return(0,p.jsx)(a.Fragment,{children:(0,p.jsxs)("div",{className:"content",children:[(0,p.jsx)("img",{src:m.Z,alt:"Back symbol",className:"top-left",onClick:function(){e.emit("leave-room",v),g("/collections/".concat(b))}}),_?(0,p.jsx)("input",{className:"title",style:{gridColumn:"5/14",marginBottom:"10px"},value:B,onChange:function(t){return D(t.target.value)}}):(0,p.jsx)("h2",{className:"title",children:B}),(0,p.jsx)("img",{src:_?f:u,className:"edit",alt:"Edit icon",onClick:function(){_?""!==B?B!==x?fetch("https://choice-champ-backend.glitch.me/collections/name/".concat(v),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})}).then((function(t){y(!1)})):y(!1):alert("Collection name cannot be empty"):y(!0)}}),(0,p.jsxs)("div",{className:"share-code",children:["share code: ",T]}),(0,p.jsx)("img",{src:h,alt:"Add icon",className:"add",onClick:function(){g("/collections/".concat(b,"/").concat(B,"/").concat(v,"/add"))}}),(0,p.jsx)("input",{className:"search-bar",placeholder:"Search Collection",value:Q,onChange:function(t){return X(t.target.value)}}),(0,p.jsx)(d.G,{icon:r.bDz,size:"xl",onClick:function(){H(!0)},className:P?"active-categorize":""}),(0,p.jsx)(d.G,{icon:r.SZw,size:"xl",onClick:function(){H(!1)},className:P?"":"active-categorize"}),U?(0,p.jsx)(s.Z,{type:"beat",className:"list-loading",size:20}):(0,p.jsxs)("div",{className:"game"===b?"collection-content-game":"collection-content",children:[0===Y.length&&(0,p.jsx)("p",{style:{textAlign:"center",gridColumn:"1/3",fontWeight:"bold"},children:"No items in this collection"}),P?(0,n.Z)(Y).sort((function(t,e){return t.title.localeCompare(e.title)})).map((function(t){return t.watched?null:(0,p.jsxs)("div",{className:"item-section",onClick:_?null:function(){V(t.itemId)},children:[(0,p.jsx)("img",{className:"item-img",src:t.poster}),("game"===b||"board"===b)&&(0,p.jsx)("p",{children:t.title}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(t.title," poster"),className:"item-action",onClick:function(){R(t._id)}}):null,_?(0,p.jsx)("img",{src:t.watched?"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/watched.png?v=1682136650141":"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/unwatched.png?v=1682136649813",alt:"".concat(t.title," poster"),className:"item-action-watched",onClick:function(){W(t._id)}}):null]},t.itemId)})):(0,n.Z)(Y).reverse().map((function(t){return t.watched?null:(0,p.jsxs)("div",{className:"item-section",onClick:_?null:function(){V(t.itemId)},children:[(0,p.jsx)("img",{className:"item-img",src:t.poster}),("game"===b||"board"===b)&&(0,p.jsx)("p",{children:t.title}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(t.title," poster"),className:"item-action",onClick:function(){R(t._id)}}):null,_?(0,p.jsx)("img",{src:t.watched?"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/watched.png?v=1682136650141":"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/unwatched.png?v=1682136649813",alt:"".concat(t.title," poster"),className:"item-action-watched",onClick:function(){W(t._id)}}):null]},t.itemId)})),Y.filter((function(t){return t.watched})).length>0?(0,p.jsx)("div",{className:"game"===b?"divider-game":"divider-other"}):null,P?(0,n.Z)(Y).sort((function(t,e){return t.title.localeCompare(e.title)})).map((function(t){return t.watched?(0,p.jsxs)("div",{className:"item-section",children:[(0,p.jsx)("img",{className:"item-img",src:t.poster}),("game"===b||"board"===b)&&(0,p.jsx)("p",{children:t.title}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(t.title," poster"),className:"item-action",onClick:function(){R(t._id)}}):null,_?(0,p.jsx)("img",{src:t.watched?"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/watched.png?v=1682136650141":"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/unwatched.png?v=1682136649813",alt:"".concat(t.title," poster"),className:"item-action-watched",onClick:function(){W(t._id,t.watched)}}):null]},t.itemId):null})):(0,n.Z)(Y).reverse().map((function(t){return t.watched?(0,p.jsxs)("div",{className:"item-section",children:[(0,p.jsx)("img",{className:"item-img",src:t.poster}),("game"===b||"board"===b)&&(0,p.jsx)("p",{children:t.title}),_?(0,p.jsx)("img",{src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433",alt:"".concat(t.title," poster"),className:"item-action",onClick:function(){R(t._id)}}):null,_?(0,p.jsx)("img",{src:t.watched?"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/watched.png?v=1682136650141":"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/unwatched.png?v=1682136649813",alt:"".concat(t.title," poster"),className:"item-action-watched",onClick:function(){W(t._id,t.watched)}}):null]},t.itemId):null}))]})]})})}},4297:function(t,e,c){t.exports=c.p+"static/media/add.28df205f935a3975dcff.png"},8378:function(t,e,c){t.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(t,e,c){t.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=699.41bf8d88.chunk.js.map