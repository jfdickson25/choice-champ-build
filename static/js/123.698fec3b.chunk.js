"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[123],{5541:function(e,t,a){a(2791);t.Z=a.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},8123:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var c=a(9439),n=a(2791),s=a(7689),i=a(2940),o=a(9770),l=a(5541),r=a(3999),d=a(3108),m=a(5382),h=a(184),u=function(e){var t=(0,n.useContext)(d.V),a=(0,n.useState)([]),u=(0,c.Z)(a,2),p=u[0],f=u[1],b=(0,n.useState)("movie"),x=(0,c.Z)(b,2),v=x[0],j=x[1],y=(0,n.useState)(!1),N=(0,c.Z)(y,2),g=N[0],k=N[1],C=(0,n.useState)(!0),T=(0,c.Z)(C,2),Z=T[0],S=T[1],w=(0,n.useState)(!1),_=(0,c.Z)(w,2),F=_[0],M=_[1],P=(0,n.useState)(!1),G=(0,c.Z)(P,2),I=G[0],E=G[1],V=(0,n.useState)(!1),z=(0,c.Z)(V,2),B=z[0],O=z[1],W=(0,s.s0)();(0,n.useEffect)((function(){t.showFooterHandler(!0),fetch("https://choice-champ-backend.glitch.me/collections/movie/".concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){f(e.collections),S(!1)}))}),[]);var H=function(e){S(!0),j(e.target.value),fetch("https://choice-champ-backend.glitch.me/collections/".concat(e.target.value,"/").concat(t.userId),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){k(!1),f(e.collections),S(!1)}))};return(0,h.jsx)(n.Fragment,{children:(0,h.jsxs)("div",{className:"content",children:[(0,h.jsx)("img",{src:l.Z,alt:"Back symbol",className:"top-left",onClick:function(){O(!0),setTimeout((function(){O(!1),W("/party")}),1e3)},style:B?{animation:"resize .75s"}:null}),(0,h.jsx)("h2",{className:"title",children:"Create Party"}),(0,h.jsx)("div",{className:"create-divider"}),(0,h.jsx)("p",{className:"option-text",children:"Secret Mode"}),(0,h.jsx)("img",{className:"option-img",src:F?o:i,onClick:function(){M(!F)}}),(0,h.jsx)("p",{className:"option-subtext",children:"Party members will not see each other's votes"}),(0,h.jsx)("p",{className:"option-text",children:"Include Watched"}),(0,h.jsx)("img",{className:"option-img",src:I?o:i,onClick:function(){E(!I)}}),(0,h.jsx)("p",{className:"option-subtext",children:"Include items that have been marked as watched/played"}),(0,h.jsx)("div",{className:"create-divider"}),(0,h.jsx)("label",{className:"radio-btn-label",htmlFor:"movie",children:"Movies"}),(0,h.jsx)("input",{className:"radio-btn",type:"radio",name:"mediaType",id:"movie",value:"movie",onChange:H,checked:"movie"===v}),(0,h.jsx)("label",{className:"radio-btn-label",htmlFor:"tv",children:"TV Shows"}),(0,h.jsx)("input",{className:"radio-btn",type:"radio",name:"mediaType",id:"tv",value:"tv",onChange:H,checked:"tv"===v}),(0,h.jsx)("label",{className:"radio-btn-label",htmlFor:"games",children:"Video Games"}),(0,h.jsx)("input",{className:"radio-btn",type:"radio",name:"mediaType",id:"games",value:"game",onChange:H,checked:"game"===v}),(0,h.jsx)("label",{className:"radio-btn-label",htmlFor:"games",children:"Board Games"}),(0,h.jsx)("input",{className:"radio-btn",type:"radio",name:"mediaType",id:"board",value:"board",onChange:H,checked:"board"===v}),(0,h.jsx)("p",{className:"option-subtext",children:"Choose collections to include in party"}),(0,h.jsx)("div",{className:"create-party-collections",children:Z?(0,h.jsx)(m.Z,{type:"beat",className:"list-loading-create",size:20}):p.length>0?p.map((function(e){return(0,h.jsxs)("div",{className:"create-party-collection",children:[(0,h.jsx)("img",{id:e._id,src:e.selected?o:i,className:"create-party-selectable",onClick:function(){!function(e){g&&k(!1);var t=p.map((function(t){return t._id===e&&(t.selected=!t.selected),t}));f(t)}(e._id)}}),(0,h.jsx)("div",{className:"create-party-collection-name",children:e.name})]},e._id)})):(0,h.jsx)("div",{className:"no-collections-found",children:"No collections found for this media type"})}),(0,h.jsx)(r.Z,{type:"button",className:"create-party-btn",onClick:function(){var e=p.filter((function(e){return e.selected}));if(0!==e.length){var t=Math.floor(1e3+9e3*Math.random()),a=e.map((function(e){return e._id}));fetch("https://choice-champ-backend.glitch.me/party",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collections:a,partyCode:t,mediaType:v,secretMode:F,includeWatched:I})}).then((function(e){W("/party/wait/".concat(t,"/owner"))}))}else k(!0)},children:"Create Party"}),g&&(0,h.jsx)("div",{className:"select-alert",children:"Please select at least one collection"})]})})}},3999:function(e,t,a){a.d(t,{Z:function(){return n}});a(2791);var c=a(184),n=function(e){return(0,c.jsx)("button",{type:e.type,disabled:e.disabled,onClick:e.onClick,className:e.className,children:e.children})}},9770:function(e,t,a){e.exports=a.p+"static/media/check.ba9d3e54bdec2de99f79.png"},2940:function(e,t,a){e.exports=a.p+"static/media/circle.004850191698b41d6112.png"}}]);
//# sourceMappingURL=123.698fec3b.chunk.js.map