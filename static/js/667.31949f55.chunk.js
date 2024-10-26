"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[667],{8667:function(e,t,c){c.r(t),c.d(t,{default:function(){return p}});var n=c(3433),o=c(9439),a=c(2791),l=c(7689),i=c(1087),s=c(8214),r=c(5382),d=c(8378),u=c(2852),h=c(3108),m=c(3999),f=c(184),p=function(e){var t=(0,a.useContext)(h.V),c=(0,l.s0)(),p=(0,l.UO)().type,g=(0,a.useState)(""),b=(0,o.Z)(g,2),C=b[0],v=b[1],x=(0,a.useState)([]),j=(0,o.Z)(x,2),k=j[0],N=j[1],y=(0,a.useState)(!1),Z=(0,o.Z)(y,2),S=Z[0],T=Z[1],_=(0,a.useState)(!0),O=(0,o.Z)(_,2),E=O[0],F=O[1],I=(0,a.useState)(null),w=(0,o.Z)(I,2),B=w[0],R=w[1],A=(0,a.useState)(""),G=(0,o.Z)(A,2),P=G[0],D=G[1],M=(0,a.useState)(""),J=(0,o.Z)(M,2),L=J[0],U=J[1],V=(0,a.useState)(!1),W=(0,o.Z)(V,2),z=W[0],H=W[1],q=(0,a.useState)(!1),K=(0,o.Z)(q,2),Q=K[0],X=K[1],Y=(0,a.useState)("#FCB016"),$=(0,o.Z)(Y,2),ee=$[0],te=$[1];(0,a.useEffect)((function(){t.showFooterHandler(!0),"movie"===p?(v("Movie Collections"),te("#FCB016")):"tv"===p?(v("TV Collections"),te("#FF4D4D")):"game"===p?(v("Game Collections"),te("#2482C5")):"board"===p&&(v("Board Game Collections"),te("#45B859")),fetch("https://choice-champ-backend.glitch.me/collections/".concat(p,"/").concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){N(e.collections),F(!1)}))}),[t,p]);var ce=(0,a.useState)(!1),ne=(0,o.Z)(ce,2),oe=ne[0],ae=ne[1],le=(0,a.useRef)(),ie=(0,a.useRef)(),se=function(){le.current.value="",ie.current.value=null,R(!1),U(""),ae(!1)};return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsxs)("div",{className:"content",children:[z?(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){H(!0),setTimeout((function(){H(!1),c("/collections")}),1e3)}}),(0,f.jsx)("h2",{className:"title color-".concat(p),children:C}),(0,f.jsx)("img",{src:S?u:d,className:"edit clickable",alt:"Edit icon",onClick:function(){return T(!S)},style:S?{animation:"button-press .75s"}:null}),Q?(0,f.jsx)("button",{className:"add-btn backgroundColor-".concat(p," backgroundColorPressed-").concat(p),style:{animation:"button-press .75s"},children:"Add Collection"}):(0,f.jsx)("button",{className:"add-btn backgroundColor-".concat(p," clickable"),onClick:function(){X(!0),setTimeout((function(){ae(!0),X(!1)}),750)},children:"Add Collection"}),E?(0,f.jsx)(r.Z,{color:ee,type:"beat",className:"list-loading",size:20}):(0,f.jsx)("div",{className:"collections-content",children:k.length>0?k.map((function(e,c){return S?(0,f.jsxs)("div",{className:"collections-item",children:[(0,f.jsx)("img",{className:"remove",alt:"Remove Icon",onClick:function(){var c;c=e._id,fetch("https://choice-champ-backend.glitch.me/collections/".concat(p,"/").concat(t.userId,"/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){N(k.filter((function(e){return e._id!==c})))})).catch((function(e){console.log(e)}))},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433"}),0!==c&&(0,f.jsx)("img",{className:"left",alt:"left arrow",onClick:function(){!function(e){var c=k.find((function(t){return t._id===e})),o=k.indexOf(c);if(0!==o){var a=(0,n.Z)(k);a.splice(o,1),a.splice(o-1,0,c),N(a),fetch("https://choice-champ-backend.glitch.me/collections/moveLeft/".concat(p,"/").concat(t.userId,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){N(a)})).catch((function(e){console.log(e)}))}}(e._id)},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/left.png?v=1692161740511"}),(0,f.jsx)("div",{className:"collection-text-".concat(p," collection-text"),children:e.name}),c!==k.length-1&&(0,f.jsx)("img",{className:"right",alt:"right arrow",onClick:function(){!function(e){var c=k.find((function(t){return t._id===e})),o=k.indexOf(c);if(o!==k.length-1){var a=(0,n.Z)(k);a.splice(o,1),a.splice(o+1,0,c),N(a),fetch("https://choice-champ-backend.glitch.me/collections/moveRight/".concat(p,"/").concat(t.userId,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){N(a)})).catch((function(e){console.log(e)}))}}(e._id)},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/right.png?v=1692161745669"})]},e._id):(0,f.jsx)(i.rU,{to:"/collections/".concat(p,"/").concat(e._id),className:"collections-item",children:(0,f.jsx)("div",{className:"collection-text-".concat(p," collection-text"),children:e.name})},e._id)})):(0,f.jsx)("div",{className:"no-collections-txt",children:"No Collections"})})]}),(0,f.jsx)(s.Z,{open:oe,onClose:se,fullWidth:!0,maxWidth:"lg",children:(0,f.jsx)("div",{className:"dialog-content",children:(0,f.jsxs)("div",{className:"dialog-sub-content",children:[(0,f.jsx)("input",{type:"text",placeholder:"collection name",onChange:function(e){var t=e.target.value;le.current.value=t},ref:le}),(0,f.jsx)(m.Z,{backgroundColor:ee,onClick:function(){return""===le.current.value?(R(!0),void D("Collection must have a name")):k.find((function(e){return e.name===le.current.value}))?(R(!0),void D("Collection with that name already exists")):(fetch("https://choice-champ-backend.glitch.me/collections/".concat(t.userId),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:le.current.value,type:p})}).then((function(e){return e.json()})).then((function(e){N([].concat((0,n.Z)(k),[e.collection]))})).catch((function(e){console.log(e)})),void se())},children:"Create Collection"}),B&&(0,f.jsx)("p",{className:"error",style:{textAlign:"center"},children:P}),(0,f.jsx)("p",{className:"or",children:"OR"}),(0,f.jsx)("input",{type:"number",min:1e4,max:99999,placeholder:"share code",onChange:function(e){var t=e.target.value;ie.current.value=t},ref:ie}),(0,f.jsx)(m.Z,{backgroundColor:ee,onClick:function(){5===ie.current.value.length?fetch("https://choice-champ-backend.glitch.me/collections/join/".concat(ie.current.value,"/").concat(p,"/").concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.errMsg?U(e.errMsg):(N([].concat((0,n.Z)(k),[e.collection])),se())})).catch((function(e){console.log(e)})):U("Code must be 5 digits long")},children:"Join Collection"}),(0,f.jsx)("p",{className:"error",style:{textAlign:"center"},children:L})]})})})]})}},3999:function(e,t,c){c.d(t,{Z:function(){return l}});var n=c(9439),o=c(2791),a=c(184),l=function(e){var t=(0,o.useState)(!1),c=(0,n.Z)(t,2),l=c[0],i=c[1];return(0,a.jsx)(o.Fragment,{children:l?(0,a.jsx)("button",{type:e.type,disabled:e.disabled,className:e.className,style:e.backgroundColor?{animation:"button-press .75s",backgroundColor:"".concat(e.backgroundColor)}:{animation:"button-press .75s",backgroundColor:"#dd9b14"},children:e.children}):(0,a.jsx)("button",{type:e.type,disabled:e.disabled,onClick:function(){e.onClick&&(i(!0),setTimeout((function(){i(!1),e.onClick()}),1e3))},className:e.className,style:e.backgroundColor?{backgroundColor:"".concat(e.backgroundColor)}:null,children:e.children})})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=667.31949f55.chunk.js.map