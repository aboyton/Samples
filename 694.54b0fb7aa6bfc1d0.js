"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[694],{5694:(C,c,o)=>{o.r(c),o.d(c,{LazyComponentModule:()=>u});var l=o(1048),i=o(3290),r=o(4553),t=o(9724);const p=[{path:"",component:(()=>{class n{constructor(){this.steps=[{file:()=>o.e(146).then(o.bind(o,6146))},{file:()=>o.e(729).then(o.bind(o,6729))},{file:()=>o.e(791).then(o.bind(o,1791))}],this.currentStep=2}update(e){var a=this;return(0,r.Z)(function*(){const f=a.steps[e],{default:y}=yield f.file();a.component=y})()}ngOnInit(){this.update(this.currentStep)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lazy-component"]],decls:4,vars:2,consts:[["type","range",3,"max","change"],[3,"ngComponentOutlet"]],template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"lazy-component works!"),t.qZA(),t.TgZ(2,"input",0),t.NdJ("change",function(y){return a.update(y.target.value)}),t.qZA(),t.GkF(3,1)),2&e&&(t.xp6(2),t.Q6J("max",a.steps.length-1),t.xp6(1),t.Q6J("ngComponentOutlet",a.component))},directives:[l.$G],encapsulation:2}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,m]]}),n})()},4553:(C,c,o)=>{function l(r,t,d,p,m,u,n){try{var s=r[u](n),e=s.value}catch(a){return void d(a)}s.done?t(e):Promise.resolve(e).then(p,m)}function i(r){return function(){var t=this,d=arguments;return new Promise(function(p,m){var u=r.apply(t,d);function n(e){l(u,p,m,n,s,"next",e)}function s(e){l(u,p,m,n,s,"throw",e)}n(void 0)})}}o.d(c,{Z:()=>i})}}]);