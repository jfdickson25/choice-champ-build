"use strict";(self.webpackChunkchoice_champ=self.webpackChunkchoice_champ||[]).push([[132],{5541:function(e,a,s){s(2791);a.Z=s.p+"static/media/back.130646437979786be8370a1fdf68655a.svg"},3132:function(e,a,s){s.r(a),s.d(a,{default:function(){return o}});var i=s(9439),t=s(2791),l=s(7689),r=s(3108),n=s(5382),c=s(5541),d=s(184),o=function(){var e=(0,t.useContext)(r.V),a=(0,l.s0)(),s=(0,l.UO)().type,o=(0,l.UO)().name,m=(0,l.UO)().collectionId,p=(0,l.UO)().itemId,v=(0,t.useState)({}),h=(0,i.Z)(v,2),u=h[0],g=h[1],x=(0,t.useState)({}),j=(0,i.Z)(x,2),N=j[0],f=j[1],b=(0,t.useState)(!1),y=(0,i.Z)(b,2),w=y[0],_=y[1],k=(0,t.useState)(!1),Z=(0,i.Z)(k,2),F=Z[0],P=Z[1];(0,t.useEffect)((function(){e.showFooterHandler(!1),_(!0),fetch("https://choice-champ-backend.glitch.me/media/getInfo/".concat(s,"/").concat(p),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if("board"===s){var a=e.media.details.overview.replace(/(<([^>]+)>)/gi," ").replace(/&mdash;/g,"-").replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&rsquo;/g,"'");e.media.details.overview=a}g(e.media.details),"board"===s&&"game"===s||f(e.media.providers),"game"===s&&f({platforms:e.media.providers.platforms}),_(!1)}))}),[]);return(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("img",{src:c.Z,alt:"Back symbol",className:"top-left",onClick:function(){P(!0),setTimeout((function(){P(!1),a("/collections/".concat(s,"/").concat(o,"/").concat(m))}),1e3)},style:F?{animation:"button-press .75s"}:null}),w?(0,d.jsx)(n.Z,{type:"beat",className:"list-loading",size:20}):(0,d.jsx)(t.Fragment,{children:(0,d.jsxs)("div",{id:"content-details",children:[(0,d.jsx)("img",{className:"game"===s?"details-img-game":"details-img",src:u.poster}),(0,d.jsx)("div",{className:"details-title",children:u.title}),(0,d.jsxs)("div",{className:"details-section",children:[(0,d.jsxs)("span",{className:"details-section-title",children:[("game"===s||"board"===s)&&" Play Time:","movie"===s&&" Runtime:","tv"===s&&" Seasons:"]}),u.runtime>0?u.runtime:"N/A","game"===s&&u.runtime>0&&" hour",("movie"===s||"board"===s)&&" minute","tv"===s&&" season",u.runtime>1&&"s"]}),"board"===s&&(0,d.jsxs)(t.Fragment,{children:[(0,d.jsxs)("div",{className:"details-section",children:[(0,d.jsx)("span",{className:"details-section-title",children:"Min Players:"})," ",u.minPlayers]}),(0,d.jsxs)("div",{className:"details-section",children:[(0,d.jsx)("span",{className:"details-section-title",children:"Max Players:"})," ",u.maxPlayers]})]}),(0,d.jsxs)("div",{className:"details-section",children:[(0,d.jsx)("div",{className:"details-section-title",children:"Overview:"}),(0,d.jsx)("div",{className:"details-overview",children:u.overview})]}),("movie"===s||"tv"===s)&&(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)("div",{className:"details-provider-title",children:"Stream"}),N.stream?(0,d.jsx)("div",{className:"details-provider-list",children:N.stream.map((function(e){return(0,d.jsx)("div",{className:"details-provider-item",children:(0,d.jsx)("img",{className:"provider-img",src:"https://image.tmdb.org/t/p/w500".concat(e.logo_path),alt:e.provider_name})},e.provider_name)}))}):(0,d.jsx)("div",{className:"providers-not-available",children:"Not available to stream"}),(0,d.jsx)("div",{className:"details-provider-title",children:"Buy"}),N.buy?(0,d.jsx)("div",{className:"details-provider-list",children:N.buy.map((function(e){return(0,d.jsx)("div",{className:"details-provider-item",children:(0,d.jsx)("img",{className:"provider-img",src:"https://image.tmdb.org/t/p/w500".concat(e.logo_path),alt:e.provider_name})},e.provider_name)}))}):(0,d.jsx)("div",{className:"providers-not-available",children:"Not available to buy"}),"movie"===s&&(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)("div",{className:"details-provider-title",children:"Rent"}),N.rent?(0,d.jsx)("div",{className:"details-provider-list",children:N.rent.map((function(e){return(0,d.jsx)("div",{className:"details-provider-item",children:(0,d.jsx)("img",{className:"provider-img",src:"https://image.tmdb.org/t/p/w500".concat(e.logo_path),alt:e.provider_name})},e.provider_name)}))}):(0,d.jsx)("div",{className:"providers-not-available",children:"Not available to rent"})]})]}),"game"===s&&(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)("div",{className:"details-provider-title",children:"Platforms"}),(0,d.jsx)("div",{className:"details-platforms",children:N.platforms&&N.platforms.map((function(e,a){return(0,d.jsx)("span",{children:a===N.platforms.length-1?e.platform.name:e.platform.name+", "},e.platform.name)}))})]})]})})]})}}}]);
//# sourceMappingURL=132.6470f5d1.chunk.js.map