"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[474],{5541:function(t,e,n){n(2791);e.Z=n.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},9474:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var c=n(3433),i=n(9439),o=n(2791),a=n(7689),s=n(3108),l=n(5382),r=n(763),d=n.n(r),u=n(5541),m=n(2940),f=(n(8496),n(9770)),p=n(184),h=function(t){t.socket;var e=(0,o.useContext)(s.V),n=(0,a.s0)(),r=(0,a.UO)().type,h=(0,a.UO)().name,g=(0,a.UO)().id,b=(0,o.useState)([]),v=(0,i.Z)(b,2),k=v[0],j=v[1],C=(0,o.useState)([]),x=(0,i.Z)(C,2),N=x[0],y=x[1],Z=(0,o.useState)(!1),I=(0,i.Z)(Z,2),w=I[0],E=I[1],S=(0,o.useState)(!1),T=(0,i.Z)(S,2),_=T[0],O=T[1],U=(0,o.useRef)(N);(0,o.useEffect)((function(){e.showFooterHandler(!1),fetch("https://choice-champ-backend.glitch.me/collections/items/".concat(g),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){t.items&&(U.current=t.items.map((function(t){return{itemId:t.itemId,mongoId:t._id}})),y(U.current))}))}),[e,r,g]);var R=(0,o.useRef)(d().debounce((function(t){if(""===t||void 0===t||null===t)return j([]),void E(!1);fetch("https://choice-champ-backend.glitch.me/media/".concat(r,"/").concat(t,"/1")).then((function(t){return t.json()})).then((function(t){j([]),t.media.results.forEach((function(t){var e=!1;U.current.forEach((function(n){n.itemId===t.id&&(e=!0)})),"movie"===r?(j((function(n){return[].concat((0,c.Z)(n),[{id:t.id,title:t.title,poster:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),selected:!1,inCollection:e}])})),E(!1)):"tv"===r?(j((function(n){return[].concat((0,c.Z)(n),[{id:t.id,title:t.name,poster:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),selected:!1,inCollection:e}])})),E(!1)):"game"===r?(j((function(n){return[].concat((0,c.Z)(n),[{id:t.id,title:t.name,poster:t.background_image,selected:!1,inCollection:e}])})),E(!1)):"board"===r&&(j((function(n){return[].concat((0,c.Z)(n),[{id:t.id,title:t.name,selected:!1,inCollection:e}])})),E(!1))}))}))}),2e3,{search:""})).current,z=function(t,e,n){fetch("http://localhost:5000/collections/items/".concat(g),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([{title:e,id:t,poster:n}])}).then((function(t){return t.json()})).then((function(e){U.current.push({itemId:t,mongoId:e.newItems[0]._id}),y(U.current);var n=k.map((function(e){return e.id===t&&(e.inCollection=!0),e}));j(n)}))};return(0,p.jsxs)("div",{className:"content",children:[(0,p.jsx)("img",{src:u.Z,alt:"Back symbol",className:"top-left clickable",onClick:function(){O(!0),setTimeout((function(){O(!1),n("/collections/".concat(r,"/").concat(h,"/").concat(g))}),1e3)},style:_?{animation:"button-press .75s"}:null}),(0,p.jsx)("h2",{className:"title",children:h}),(0,p.jsx)("input",{className:"search-bar",placeholder:"Search",onChange:function(t){E(!0),R(t.target.value)}}),w?(0,p.jsx)(l.Z,{type:"sync",className:"list-loading",size:15,speed:.5}):(0,p.jsx)("div",{className:"game"===r?"collection-content-game":"collection-content",children:k.map((function(t){return(0,p.jsxs)("div",{className:"item-section",children:["board"!==r?(0,p.jsx)("img",{src:t.poster,alt:"".concat(t.title," poster"),className:"movie"===r||"tv"===r?"item-img":"game-img"}):(0,p.jsx)("div",{className:"board-img-search"}),"movie"!==r&&"tv"!==r&&(0,p.jsx)("p",{className:"board"===r?"item-title":void 0,children:t.title}),t.inCollection?(0,p.jsx)("img",{src:f,alt:"".concat(t.title," saved"),style:"game"===r?{width:"15%"}:null,className:"game"===r?"item-action-game clickable":"item-action clickable",onClick:function(){!function(t){var e=U.current.find((function(e){return e.itemId===t}));fetch("http://localhost:5000/collections/items/".concat(g,"/").concat(e.mongoId),{method:"DELETE",headers:{"Content-Type":"application/json"}});var n=k.map((function(e){return e.id===t&&(e.inCollection=!1),e}));j(n);var c=U.current.filter((function(e){return e.itemId!==t}));U.current=c,y(U.current)}(t.id)}}):(0,p.jsx)("img",{id:t.id,src:m,alt:"".concat(t.title," unselected"),className:"game"===r?"item-action-game clickable":"item-action clickable",onClick:function(){"board"===r?z(t.id,t.title):z(t.id,t.title,t.poster)}})]},t.id)}))})]})}},9770:function(t,e,n){t.exports=n.p+"static/media/check.ba9d3e54bdec2de99f79.png"},2940:function(t,e,n){t.exports=n.p+"static/media/circle.004850191698b41d6112.png"},8496:function(t,e,n){t.exports=n.p+"static/media/filled-circle.b3ddbfdcf723d9daf179.png"}}]);
//# sourceMappingURL=474.fbb4a2d5.chunk.js.map