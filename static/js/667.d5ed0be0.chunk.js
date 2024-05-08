"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[667],{8667:function(e,t,c){c.r(t),c.d(t,{default:function(){return p}});var n=c(3433),o=c(9439),a=c(2791),l=c(7689),i=c(1087),s=c(8214),r=c(5382),d=c(8378),u=c(2852),h=c(3108),m=c(3999),f=c(184),p=function(e){var t=(0,a.useContext)(h.V),c=(0,l.s0)(),p=(0,l.UO)().type,g=(0,a.useState)(""),b=(0,o.Z)(g,2),v=b[0],x=b[1],C=(0,a.useState)([]),j=(0,o.Z)(C,2),k=j[0],N=j[1],y=(0,a.useState)(!1),Z=(0,o.Z)(y,2),T=Z[0],S=Z[1],_=(0,a.useState)(!0),O=(0,o.Z)(_,2),E=O[0],I=O[1],w=(0,a.useState)(null),R=(0,o.Z)(w,2),A=R[0],G=R[1],P=(0,a.useState)(""),B=(0,o.Z)(P,2),F=B[0],M=B[1],J=(0,a.useState)(!1),L=(0,o.Z)(J,2),U=L[0],V=L[1],W=(0,a.useState)(!1),z=(0,o.Z)(W,2),D=z[0],H=z[1];(0,a.useEffect)((function(){t.showFooterHandler(!0),"movie"===p?x("Movie Collections"):"tv"===p?x("TV Collections"):"game"===p?x("Game Collections"):"board"===p&&x("Board Game Collections"),fetch("https://choice-champ-backend.glitch.me/collections/".concat(p,"/").concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){N(e.collections),I(!1)}))}),[t,p]);var q=(0,a.useState)(!1),K=(0,o.Z)(q,2),Q=K[0],X=K[1],Y=(0,a.useRef)(),$=(0,a.useRef)(),ee=function(){Y.current.value="",$.current.value=null,G(!1),M(""),X(!1)};return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsxs)("div",{className:"content",children:[U?(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button-active.png?v=1702137193420",alt:"Back symbol",className:"top-left clickable",style:{animation:"button-press .75s"}}):(0,f.jsx)("img",{src:"https://cdn.glitch.global/ebf12691-ad1e-4a83-81e2-641b9d7c5f64/back-button.png?v=1702137134668",alt:"Back symbol",className:"top-left clickable",onClick:function(){V(!0),setTimeout((function(){V(!1),c("/collections")}),1e3)}}),(0,f.jsx)("h2",{className:"title color-".concat(p),children:v}),(0,f.jsx)("img",{src:T?u:d,className:"edit clickable",alt:"Edit icon",onClick:function(){return S(!T)},style:T?{animation:"button-press .75s"}:null}),D?(0,f.jsx)("button",{className:"add-btn backgroundColor-".concat(p," backgroundColorPressed-").concat(p),style:{animation:"button-press .75s"},children:"Add Collection"}):(0,f.jsx)("button",{className:"add-btn backgroundColor-".concat(p," clickable"),onClick:function(){H(!0),setTimeout((function(){X(!0),H(!1)}),750)},children:"Add Collection"}),E?(0,f.jsx)(r.Z,{type:"beat",className:"list-loading",size:20}):(0,f.jsx)("div",{className:"collections-content",children:k.length>0?k.map((function(e,c){return T?(0,f.jsxs)("div",{className:"collections-item",children:[(0,f.jsx)("img",{className:"remove",alt:"Remove Icon",onClick:function(){var c;c=e._id,fetch("https://choice-champ-backend.glitch.me/collections/".concat(p,"/").concat(t.userId,"/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){N(k.filter((function(e){return e._id!==c})))})).catch((function(e){console.log(e)}))},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/remove.png?v=1682136649433"}),0!==c&&(0,f.jsx)("img",{className:"left",alt:"left arrow",onClick:function(){!function(e){var c=k.find((function(t){return t._id===e})),o=k.indexOf(c);if(0!==o){var a=(0,n.Z)(k);a.splice(o,1),a.splice(o-1,0,c),N(a),fetch("https://choice-champ-backend.glitch.me/collections/moveLeft/".concat(p,"/").concat(t.userId,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){N(a)})).catch((function(e){console.log(e)}))}}(e._id)},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/left.png?v=1692161740511"}),(0,f.jsx)("div",{className:"collection-text-".concat(p," collection-text"),children:e.name}),c!==k.length-1&&(0,f.jsx)("img",{className:"right",alt:"right arrow",onClick:function(){!function(e){var c=k.find((function(t){return t._id===e})),o=k.indexOf(c);if(o!==k.length-1){var a=(0,n.Z)(k);a.splice(o,1),a.splice(o+1,0,c),N(a),fetch("https://choice-champ-backend.glitch.me/collections/moveRight/".concat(p,"/").concat(t.userId,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){N(a)})).catch((function(e){console.log(e)}))}}(e._id)},src:"https://cdn.glitch.global/7cdfb78e-767d-42ef-b9ca-2f58981eb393/right.png?v=1692161745669"})]},e._id):(0,f.jsx)(i.rU,{to:"/collections/".concat(p,"/").concat(e.name,"/").concat(e._id),className:"collections-item",children:(0,f.jsx)("div",{className:"collection-text-".concat(p," collection-text"),children:e.name})},e._id)})):(0,f.jsx)("div",{className:"no-collections-txt",children:"No Collections"})})]}),(0,f.jsx)(s.Z,{open:Q,onClose:ee,fullWidth:!0,maxWidth:"lg",children:(0,f.jsx)("div",{className:"dialog-content",children:(0,f.jsxs)("div",{className:"dialog-sub-content",children:[(0,f.jsx)("input",{type:"text",placeholder:"collection name",onChange:function(e){var t=e.target.value;Y.current.value=t},ref:Y}),(0,f.jsx)(m.Z,{onClick:function(){""===Y.current.value||k.find((function(e){return e.name===Y.current.value}))?G(!0):(fetch("https://choice-champ-backend.glitch.me/collections/".concat(t.userId),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y.current.value,type:p})}).then((function(e){return e.json()})).then((function(e){N([].concat((0,n.Z)(k),[e.collection]))})).catch((function(e){console.log(e)})),ee())},children:"Create Collection"}),A&&(0,f.jsx)("p",{className:"error",style:{textAlign:"center"},children:"Collection must have a name"}),(0,f.jsx)("p",{className:"or",children:"OR"}),(0,f.jsx)("input",{type:"number",min:1e4,max:99999,placeholder:"share code",onChange:function(e){var t=e.target.value;$.current.value=t},ref:$}),(0,f.jsx)(m.Z,{onClick:function(){5===$.current.value.length?fetch("https://choice-champ-backend.glitch.me/collections/join/".concat($.current.value,"/").concat(p,"/").concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.errMsg?M(e.errMsg):(N([].concat((0,n.Z)(k),[e.collection])),ee())})).catch((function(e){console.log(e)})):M("Code must be 5 digits long")},children:"Join Collection"}),(0,f.jsx)("p",{className:"error",style:{textAlign:"center"},children:F})]})})})]})}},3999:function(e,t,c){c.d(t,{Z:function(){return l}});var n=c(9439),o=c(2791),a=c(184),l=function(e){var t=(0,o.useState)(!1),c=(0,n.Z)(t,2),l=c[0],i=c[1];return(0,a.jsx)(o.Fragment,{children:l?(0,a.jsx)("button",{type:e.type,disabled:e.disabled,className:e.className,style:e.backgroundColor?{animation:"button-press .75s",backgroundColor:e.backgroundColor}:{animation:"button-press .75s",backgroundColor:"#dd9b14"},children:e.children}):(0,a.jsx)("button",{type:e.type,disabled:e.disabled,onClick:function(){e.onClick&&(i(!0),setTimeout((function(){i(!1),e.onClick()}),1e3))},className:e.className,children:e.children})})}},8378:function(e,t,c){e.exports=c.p+"static/media/edit.da72498c9a63add0149a.png"},2852:function(e,t,c){e.exports=c.p+"static/media/editing.e007df67d027caed3e0d.png"}}]);
//# sourceMappingURL=667.d5ed0be0.chunk.js.map