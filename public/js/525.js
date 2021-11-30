"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[525],{9918:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(){function e(e,t,n){this.user_id=e,this.name=t,this.user_name=n}return e.prototype.getId=function(){return this.user_id},e.prototype.getName=function(){return this.name},e.prototype.getUserName=function(){return this.user_name},e}()},5525:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(5893),o=n(7294),i=n(2745),a=n(3379),s=n.n(a),u=n(4731),c={insert:"head",singleton:!1};s()(u.Z,c);u.Z.locals;var l=n(8839),f=n(3457),p=n(9541),d=n(3128),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},y=(0,l.Z)({overrides:{MuiInputLabel:{root:{color:"var(--main-font-color)",marginBottom:"0.5em"}},MuiInputBase:{input:{color:"var(--main-font-color)"}}}});var b=function(e){return v(void 0,void 0,void 0,(function(){var t,n,r,o,i,a,s;return m(this,(function(u){switch(u.label){case 0:e.preventDefault(),t=document.getElementById("email").value,n=document.getElementById("password").value,r={email:t,password:n},u.label=1;case 1:return u.trys.push([1,5,,6]),[4,fetch("/sanctum/csrf-cookie")];case 2:return u.sent(),o=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}("XSRF-TOKEN"),[4,fetch("/api/login",{method:"POST",body:JSON.stringify(r),headers:{"X-XSRF-TOKEN":o,"Content-Type":"application/json"}})];case 3:return[4,(i=u.sent()).json()];case 4:return a=u.sent(),200!=i.status?[2]:(localStorage.setItem("token",a.token),window.open("/","_self"),[3,6]);case 5:return s=u.sent(),console.error(s),[3,6];case 6:return[2]}}))}))};const w=function(){return(0,o.useEffect)((function(){v(void 0,void 0,void 0,(function(){return m(this,(function(e){switch(e.label){case 0:return[4,(new i.Z).getAuthenticatedUser()];case 1:return e.sent()&&window.open("/","_self"),[2]}}))}))}),[]),(0,r.jsxs)("div",h({style:{color:"white",display:"flex",flexDirection:"column",alignItems:"center",margin:"auto"}},{children:[(0,r.jsx)("h3",{children:"Login"},void 0),(0,r.jsx)("form",h({style:{display:"flex",flexDirection:"column"},onSubmit:b},{children:(0,r.jsxs)(f.Z,h({theme:y},{children:[(0,r.jsx)(p.Z,{id:"email",label:"E-mail",name:"email",required:!0,style:{marginTop:"1em"}},void 0),(0,r.jsx)(p.Z,{id:"password",label:"Password",name:"password",type:"password",style:{marginTop:"1em"},required:!0},void 0),(0,r.jsx)(d.Z,h({color:"primary",type:"submit",variant:"contained",style:{marginTop:"1em"}},{children:"Log in"}),void 0)]}),void 0)}),void 0)]}),void 0)}},2745:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9918),o=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const a=function(){function e(){}return e.prototype.getUser=function(e,t){return o(this,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch("/api/user/"+e)];case 1:if(!(n=i.sent()).ok)throw new Error("Error");return[4,n.json()];case 2:return o=i.sent(),t(new r.Z(e,o.name,o.username)),[3,4];case 3:return i.sent(),t(void 0),console.error("APIv2UserService.getUser(): Unable to fetch data from API"),[3,4];case 4:return[2]}}))}))},e.prototype.getAuthenticatedUser=function(){return o(this,void 0,void 0,(function(){var e,t,n;return i(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,fetch("/api/user",{headers:{Authorization:"Bearer "+localStorage.getItem("token"),Accept:"application/json"}})];case 1:return[4,(e=o.sent()).json()];case 2:return t=o.sent(),401==e.status?[2,null]:[2,new r.Z(t.id,t.name,t.username)];case 3:return n=o.sent(),console.error(n),[2,null];case 4:return[2]}}))}))},e}()},4731:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".content{align-items:center;display:flex}",""]);const i=o}}]);