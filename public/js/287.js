"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[287],{8953:(t,n,e)=>{e.d(n,{Z:()=>f});var r=e(5893),o=e(7625),i=e(1436),a=e(3379),s=e.n(a),c=e(930),u={insert:"head",singleton:!1};s()(c.Z,u);c.Z.locals;var l=function(){return(l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};const f=function(){return(0,r.jsxs)("div",l({className:"icon-only-div"},{children:[(0,r.jsx)(o.G,{className:"middle-icon loading-animation",icon:i.LM3},void 0),(0,r.jsx)("h4",l({className:"middle-text"},{children:"Loading..."}),void 0)]}),void 0)}},2336:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(5893),o=e(7625),i=e(1436),a=function(){return(a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};const s=function(t){var n=t.text;return(0,r.jsxs)("div",a({className:"icon-only-div"},{children:[(0,r.jsx)(o.G,{className:"middle-icon",icon:i.gPx},void 0),(0,r.jsx)("h4",a({className:"middle-text"},{children:n}),void 0)]}),void 0)}},4125:(t,n,e)=>{e.d(n,{Z:()=>u});var r=e(5893),o=e(3379),i=e.n(o),a=e(7202),s={insert:"head",singleton:!1};i()(a.Z,s);a.Z.locals;var c=function(){return(c=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};const u=function(t){var n=t.title,e=t.backgroundURL;return(0,r.jsx)("div",c({style:{backgroundImage:"url("+e+")",backgroundPosition:"center",backgroundSize:"cover"},className:"title-box-container"},{children:(0,r.jsx)("h1",c({className:"title-box-post-title"},{children:n}),void 0)}),void 0)}},4326:(t,n,e)=>{e.d(n,{Z:()=>r});const r=function(){function t(t,n,e,r){this.title=t,this.dateISOFormatString=n,this.coverFileName=e,this.postOptionalAttributes=r}return t.prototype.getTitle=function(){return this.title},t.prototype.getDateISOFormatString=function(){return this.dateISOFormatString},t.prototype.getLocalDateString=function(){return new Date(this.getDateISOFormatString()).toLocaleString()},t.prototype.getCoverFileName=function(){return this.coverFileName},t.prototype.getDescription=function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.description},t.prototype.getSlug=function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.slug},t.prototype.getAuthor=function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.author},t.prototype.getMarkdown=function(){var t;return(null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.markdown)?this.postOptionalAttributes.markdown:"<h1>No content available</h1>"},t.prototype.getURL=function(){return this.getSlug()?"/post/"+this.getSlug():this.getSlug()},t.prototype.getCoverURL=function(){var t;return null===(t=this.postOptionalAttributes)||void 0===t?void 0:t.coverUrl},t}()},7287:(t,n,e)=>{e.r(n),e.d(n,{default:()=>I});var r=e(6854);const o=function(){function t(t,n,e){this.user_id=t,this.name=n,this.user_name=e}return t.prototype.getId=function(){return this.user_id},t.prototype.getName=function(){return this.name},t.prototype.getUserName=function(){return this.user_name},t}();var i=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}))},a=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const s=function(){function t(){}return t.prototype.getUser=function(t,n){return i(this,void 0,void 0,(function(){var e,r;return a(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch("/api/user/"+t)];case 1:if(!(e=i.sent()).ok)throw new Error("Error");return[4,e.json()];case 2:return r=i.sent(),n(new o(t,r.name,r.username)),[3,4];case 3:return i.sent(),n(void 0),console.error("APIv2UserService.getUser(): Unable to fetch data from API"),[3,4];case 4:return[2]}}))}))},t}();var c=e(5893),u=e(7294),l=e(4326),f=e(3379),p=e.n(f),d=e(7089),h={insert:"head",singleton:!1};p()(d.Z,h);d.Z.locals;var v=e(4125),g=e(8953),m=e(2336);const b=function(){function t(t,n){this.file_name=t,this.url=n}return t.prototype.getFileName=function(){return this.file_name},t.prototype.getUrl=function(){return this.url},t}();var y=e(5682),w=e(724),x=e.n(w),k=e(2657),S=e(2569),j=function(){return(j=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},O={fontSize:".8em"};const P=function(t){var n=t.language,e=t.value;return(0,c.jsx)(k.Z,j({language:n,style:S.Z,customStyle:O,wrapLines:!0,showLineNumbers:!0},{children:e}),void 0)};var Z=function(){return(Z=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};const N=function(t){var n=new o("unknown","Unknown User","unknown"),e=new l.Z("Loading post...","",""),r=new l.Z("This post isn't available","",""),i=new b("default-cover",y.Z.getTitleBoxDefaultBackground()),a=t.slug,s=t.postService,f=t.userService,p=t.fileService,d=(0,u.useState)((function(){return e})),h=d[0],w=d[1],k=(0,u.useState)((function(){return n})),S=k[0],j=k[1],O=(0,u.useState)((function(){return(0,c.jsx)(g.Z,{},void 0)})),N=O[0],U=O[1],A=(0,u.useState)((function(){return i})),E=A[0],I=A[1];return(0,u.useEffect)((function(){s.getPost(a,(function(t){if(t)w(t);else{w(r);var n=(0,c.jsx)(m.Z,{text:"This page isn't available"},void 0);U(n)}}))}),[]),(0,u.useEffect)((function(){h!=e&&(f.getUser(h.getAuthor()||"",(function(t){t&&j(t)})),p.getFile(h.getCoverFileName(),(function(t){t&&I(t)})))}),[h]),(0,u.useEffect)((function(){if(S!=n){var t=(0,c.jsx)("div",Z({className:"post-content-container"},{children:(0,c.jsxs)("div",Z({className:"post-content"},{children:[(0,c.jsx)("h3",Z({className:"post-content-title"},{children:h.getTitle()}),void 0),(0,c.jsxs)("p",Z({className:"post-content-info"},{children:[(0,c.jsx)("span",Z({className:"not-highlighted"},{children:"Created by"}),void 0)," ",S.getUserName()," ",(0,c.jsx)("span",Z({className:"not-highlighted"},{children:"on"}),void 0)," ",h.getLocalDateString()]}),void 0),(0,c.jsx)("hr",{},void 0),(0,c.jsx)(x(),{children:h.getMarkdown(),renderers:{code:P}},void 0)]}),void 0)}),void 0);U(t)}}),[S]),(0,c.jsxs)("main",{children:[(0,c.jsx)(v.Z,{backgroundURL:E.getUrl(),title:h.getTitle()},void 0),N]},void 0)};var U=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}))},A=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const E=function(){function t(){}return t.prototype.getFile=function(t,n){return U(this,void 0,void 0,(function(){var e,r;return A(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,fetch("/api/file/"+t)];case 1:if(!(e=o.sent()).ok)throw new Error("Error");return[4,e.json()];case 2:return r=o.sent(),n(new b(r.file_name,r.url)),[3,4];case 3:return o.sent(),n(void 0),console.error("APIv2FileService.getFile(): Unable to fetch data from API"),[3,4];case 4:return[2]}}))}))},t}();const I=function(t){var n=t.match,e=new r.Z,o=new s,i=new E;return N({postService:e,userService:o,fileService:i,slug:n.params.slug})}},6854:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(4326),o=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}))},i=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const a=function(){function t(){}return t.prototype.getListPosts=function(t){return o(this,void 0,void 0,(function(){var n,e;return i(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,fetch("/api/posts")];case 1:return[4,(n=o.sent()).json()];case 2:if(e=o.sent(),!n.ok)throw new Error("Error");return t(e.map((function(t){return new r.Z(t.title,t.created_at,"",{description:t.description,slug:t.slug,coverUrl:t.cover_url})}))),[3,4];case 3:return o.sent(),t([]),console.error("APIv2PostService.getListPosts(): Unable to fetch data from API"),[3,4];case 4:return[2]}}))}))},t.prototype.getPost=function(t,n){return o(this,void 0,void 0,(function(){var e,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch("/api/post/"+t)];case 1:if(!(e=i.sent()).ok)throw new Error("Error");return[4,e.json()];case 2:return o=i.sent(),n(new r.Z(o.title,o.created_at,o.cover_file_name,{author:o.user_id,markdown:o.markdown})),[3,4];case 3:return i.sent(),n(void 0),console.error("APIv2PostService.getPost(): Unable to fetch data from API"),[3,4];case 4:return[2]}}))}))},t}()},930:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(3645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,".loading-animation{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate-animation;animation-name:rotate-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes rotate-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]);const i=o},7089:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(3645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,".post-content-container{background:var(--card-background);border:1px solid rgba(0,0,0,.2);border-radius:10px;display:flex;margin-top:6vh;min-height:83vh;padding:2.5em;transition:background var(--transition-delay)}.post-content{color:var(--main-font-color);transition:color var(--transition-delay);width:100%}.post-content img{display:block;margin-left:auto;margin-right:auto;max-width:100%}.post-content-title{font-size:28px;font-weight:300;margin-bottom:0;margin-top:0}.post-content-info{font-weight:500;margin-top:8px}.not-highlighted{font-weight:400;opacity:.8}pre{overflow-x:scroll}@media screen and (max-width:768px){.post-content-container{border:none;border-radius:0;margin-top:0}}",""]);const i=o},7202:(t,n,e)=>{e.d(n,{Z:()=>i});var r=e(3645),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,".title-box-container{align-items:center;border-radius:15px;box-shadow:0 0 5px rgba(0,0,0,.9);display:flex;height:30vh;margin:auto;padding-left:5%;padding-right:5%;position:relative;top:0}.title-box-post-title{color:#fff;font-family:Roboto,sans-serif;font-size:36px;font-weight:300;text-shadow:0 0 5px #2f244b;transition:font-size .5s}@media screen and (max-width:768px){.title-box-container{border-radius:0;box-shadow:0 2px 2px rgba(0,0,0,.5)}.title-box-post-title{font-size:28px}}",""]);const i=o}}]);