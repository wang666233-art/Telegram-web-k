"use strict";(this.webpackChunktweb=this.webpackChunktweb||[]).push([[231],{3231:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var n=a(279),i=a(4159),o=a(236),r=a(3512),h=a(4874);let d;const s=new h.Z("page-signImport",!0,(()=>{var t,e,h,u;(0,n.y)(s.pageEl.firstElementChild,!0),t=void 0,e=void 0,u=function*(){const{dcId:t,token:e,tgAddr:n}=d;let h;try{r.Z.managers.apiManager.setBaseDcId(t);const n=yield r.Z.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:i.Z.id,api_hash:i.Z.hash,web_auth_token:e},{dcId:t,ignoreErrors:!0});"auth.authorization"===n._&&(r.Z.managers.apiManager.setUser(n.user),h=a.e(781).then(a.bind(a,5436)))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":t.handled=!0,h=a.e(774).then(a.bind(a,9437));break;default:{console.error("authorization import error:",t);const e=o.h.authState._;"authStateSignIn"===e?h=a.e(641).then(a.bind(a,810)):"authStateSignQr"===e&&(h=a.e(776).then(a.bind(a,9709)));break}}}location.hash=(null==n?void 0:n.trim())?"#?tgaddr="+encodeURIComponent(n):"",h&&h.then((t=>t.default.mount()))},new((h=void 0)||(h=Promise))((function(a,n){function i(t){try{r(u.next(t))}catch(t){n(t)}}function o(t){try{r(u.throw(t))}catch(t){n(t)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof h?e:new h((function(t){t(e)}))).then(i,o)}r((u=u.apply(t,e||[])).next())}))}),(t=>{d=t,r.Z.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:d})})),u=s}}]);
//# sourceMappingURL=231.2cf58745476f33d0c32c.chunk.js.map