(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{gVKy:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),o=u("oBZk"),b=u("ZZ/e"),r=u("SVse"),s=u("yTNM");u("0tRk");class a{constructor(l){this.api=l,this.api.requestToAnswer?this.api.getRequestWhishDrugs():this.api.go("requests")}ngOnInit(){this.api.requestToAnswer?this.api.getRequestWhishDrugs():this.api.go("requests")}}var c=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"ion-label",[],null,null,null,o.E,o.l)),e.pb(1,49152,null,0,b.L,[e.h,e.k,e.x],null,null),(l()(),e.Ib(2,0,[""," Requete(s)"]))],null,(function(l,n){l(n,2,0,n.component.api.remainRequests)}))}function m(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"ion-label",[],null,null,null,o.E,o.l)),e.pb(1,49152,null,0,b.L,[e.h,e.k,e.x],null,null)],null,null)}function q(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,9,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.api.go("requests")&&e),e}),o.u,o.b)),e.pb(1,49152,null,0,b.i,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,7,"ion-chip",[],null,null,null,o.w,o.d)),e.pb(3,49152,null,0,b.q,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,o.B,o.i)),e.pb(5,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.fb(16777216,null,0,1,null,p)),e.pb(7,16384,null,0,r.j,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,m)),e.pb(9,16384,null,0,r.j,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"notifications"),l(n,7,0,u.api.remainRequests),l(n,9,0,!u.api.remainRequests)}),null)}function h(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"ion-icon",[["name","help"],["style","background-color: #006600;border-radius: 50%; color: white"]],null,null,null,o.B,o.i)),e.pb(1,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"help")}),null)}function f(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"ion-icon",[["name","checkmark"],["style","background-color: #006600;border-radius: 50%; color: white"]],null,null,null,o.B,o.i)),e.pb(1,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"checkmark")}),null)}function d(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,8,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.api.answer(l.context.$implicit)&&e),e}),o.w,o.d)),e.pb(1,49152,null,0,b.q,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,2,"ion-label",[],null,null,null,o.E,o.l)),e.pb(3,49152,null,0,b.L,[e.h,e.k,e.x],null,null),(l()(),e.Ib(4,0,[""," \xa0"])),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(6,16384,null,0,r.j,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,f)),e.pb(8,16384,null,0,r.j,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,6,0,!u.api.answeredWish(n.context.$implicit.id)),l(n,8,0,u.api.answeredWish(n.context.$implicit.id))}),(function(l,n){l(n,4,0,null==n.context.$implicit.attributes?null:null==n.context.$implicit.attributes.Drug?null:null==n.context.$implicit.attributes.Drug.attributes?null:n.context.$implicit.attributes.Drug.attributes.name)}))}function g(l){return e.Kb(0,[e.Db(0,r.d,[e.s]),(l()(),e.qb(1,0,null,null,20,"ion-header",[],null,null,null,o.A,o.h)),e.pb(2,49152,null,0,b.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(3,0,null,0,18,"ion-toolbar",[],null,null,null,o.L,o.s)),e.pb(4,49152,null,0,b.Ab,[e.h,e.k,e.x],null,null),(l()(),e.qb(5,0,null,0,5,"ion-buttons",[["slot","start"],["style","padding-left: 20px"]],null,null,null,o.v,o.c)),e.pb(6,49152,null,0,b.j,[e.h,e.k,e.x],null,null),(l()(),e.qb(7,0,null,0,3,"ion-button",[["style","background: #ccc;border-radius: 49%;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.api.go("home")&&e),e}),o.u,o.b)),e.pb(8,49152,null,0,b.i,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,o.B,o.i)),e.pb(10,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(11,0,null,0,2,"ion-title",[],null,null,null,o.K,o.r)),e.pb(12,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,[" DispoMed "])),(l()(),e.qb(14,0,null,0,7,"ion-buttons",[["slot","end"],["style","padding-right: 20px"]],null,null,null,o.v,o.c)),e.pb(15,49152,null,0,b.j,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,q)),e.pb(17,16384,null,0,r.j,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(18,0,null,0,3,"ion-button",[["style","background: #ccc;border-radius: 49%;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.api.go("profile")&&e),e}),o.u,o.b)),e.pb(19,49152,null,0,b.i,[e.h,e.k,e.x],null,null),(l()(),e.qb(20,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,o.B,o.i)),e.pb(21,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(22,0,null,null,31,"ion-content",[["class","ion-padding"]],null,null,null,o.x,o.e)),e.pb(23,49152,null,0,b.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(24,0,null,0,11,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,1,"ion-img",[["src","assets/logo.svg"],["style","height: 96px;"]],null,null,null,o.C,o.j)),e.pb(26,49152,null,0,b.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(27,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,1,"ion-icon",[["name","locate"]],null,null,null,o.B,o.i)),e.pb(29,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Ib(30,null,[" ",""])),(l()(),e.qb(31,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,1,"ion-icon",[["name","clock"]],null,null,null,o.B,o.i)),e.pb(33,49152,null,0,b.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Ib(34,null,[" ",""])),e.Eb(35,2),(l()(),e.qb(36,0,null,0,2,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,d)),e.pb(38,278528,null,0,r.i,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(39,0,null,0,2,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.qb(40,0,null,null,1,"small",[["style","color: #bbb"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Cliquez sur le nom du m\xe9dicament pour donner la disponibilit\xe9"])),(l()(),e.qb(42,0,null,0,5,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["\xa0"])),(l()(),e.qb(45,0,null,null,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.api.go("home")&&e),e}),o.u,o.b)),e.pb(46,49152,null,0,b.i,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Ib(-1,0,["Retour"])),(l()(),e.qb(48,0,null,0,5,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.qb(49,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.qb(50,0,null,null,3,"small",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["\xa9 Dr Horus Dogue | R\xe9alis\xe9 par "])),(l()(),e.qb(52,0,null,null,1,"a",[["href","http://it-num.bj"],["target","_system"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["IT-NUM"]))],(function(l,n){var u=n.component;l(n,10,0,"home"),l(n,17,0,null==u.api.user?null:null==u.api.user.attributes?null:u.api.user.attributes.isPharma),l(n,21,0,"person"),l(n,26,0,"assets/logo.svg"),l(n,29,0,"locate"),l(n,33,0,"clock"),l(n,38,0,u.api.wishesToAnswer),l(n,46,0,"clear")}),(function(l,n){var u=n.component;l(n,30,0,(null==u.api.requestToAnswer?null:null==u.api.requestToAnswer.attributes?null:null==u.api.requestToAnswer.attributes.geocode?null:u.api.requestToAnswer.attributes.geocode.adminArea5)||(null==u.api.requestToAnswer?null:null==u.api.requestToAnswer.attributes?null:u.api.requestToAnswer.attributes.city));var t=e.Jb(n,34,0,l(n,35,0,e.Cb(n,0),null==u.api.requestToAnswer?null:u.api.requestToAnswer.createdAt," dd MMM yyyy HH:mm:ss"));l(n,34,0,t)}))}function k(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-request",[],null,null,null,g,c)),e.pb(1,114688,null,0,a,[s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.mb("app-request",a,k,{},{},[]),A=u("s7LF"),I=u("iInd");class v{}u.d(n,"RequestPageModuleNgFactory",(function(){return w}));var w=e.nb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,x]],[3,e.j],e.v]),e.Ab(4608,r.l,r.k,[e.s,[2,r.r]]),e.Ab(4608,A.g,A.g,[]),e.Ab(4608,b.b,b.b,[e.x,e.g]),e.Ab(4608,b.Fb,b.Fb,[b.b,e.j,e.p]),e.Ab(4608,b.Ib,b.Ib,[b.b,e.j,e.p]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,A.f,A.f,[]),e.Ab(1073742336,A.a,A.a,[]),e.Ab(1073742336,b.Cb,b.Cb,[]),e.Ab(1073742336,I.n,I.n,[[2,I.s],[2,I.m]]),e.Ab(1073742336,v,v,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,I.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);