"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[27],{4027:(O,g,i)=>{i.r(g),i.d(g,{BigDataModule:()=>y});var l=i(1048),m=i(3290),f=i(9959),h=i(4121),v=i(5490),x=i(2993),d=i(2147),C=i(1528),u=i(7969),B=i(5598),Z=i(8168),T=i(5619),t=i(9724),D=i(9550);function M(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.username),t.xp6(2),t.Oqu(n.email)}}function U(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"section"),t._uU(1),t._UZ(2,"br"),t.TgZ(3,"label"),t._uU(4,"Search "),t.TgZ(5,"input",1),t.NdJ("input",function(o){return t.CHM(n),t.oxw().setProp("search",o)}),t.qZA()(),t.TgZ(6,"div",2)(7,"button",3),t.NdJ("click",function(o){return t.CHM(n),t.oxw().setProp("sort",o)}),t._uU(8,"none"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(o){return t.CHM(n),t.oxw().setProp("sort",o)}),t._uU(10,"username"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(o){return t.CHM(n),t.oxw().setProp("sort",o)}),t._uU(12,"email"),t.qZA(),t.TgZ(13,"button",6),t.NdJ("click",function(o){return t.CHM(n),t.oxw().setProp("sort",o)}),t._uU(14,"id"),t.qZA()(),t.TgZ(15,"div",7)(16,"input",8),t.NdJ("input",function(o){return t.CHM(n),t.oxw().setProp("position",o)}),t.qZA(),t.TgZ(17,"table")(18,"tbody"),t.YNc(19,M,7,3,"tr",9),t.qZA()()()()}if(2&e){const n=r.ngIf;t.xp6(1),t.AsE(" Available users:",n.users.length," (Loading done:",n.done,"%)"),t.xp6(15),t.Q6J("max",n.users.length/n.state.pageSize),t.xp6(3),t.Q6J("ngForOf",n.page)}}const A=[{path:"",component:(()=>{class e{constructor(n){this.user=n,this.state$=new h.X({pageSize:20,position:0,search:"",sort:""}),this.users$=this.state$.pipe((0,x.j)("sort"),(0,d.x)(),(0,C.w)(s=>this.user.allUsers$.pipe((0,u.U)(o=>""===s?o:o.sort((a,c)=>a[s]<c[s]?-1:1))))),this.doneLoadingPer$=(0,v.F)(100).pipe((0,B.q)(1e3),(0,Z.b)(()=>this.user.addUsers(500)),(0,u.U)(s=>Math.ceil(s/1e3*100))),this.curPage$=this.state$.pipe((0,d.x)(),(0,T.z)(s=>this.users$.pipe((0,u.U)(o=>this.findFirst(o,s))))),this.vm$=(0,f.Hv)({users:this.users$,state:this.state$,page:this.curPage$,done:this.doneLoadingPer$})}findFirst(n,{position:s,pageSize:o,search:a}){if(!a)return n.slice(s*o,s*o+o);let c=0;const p=[];for(;c<n.length&&p.length<o;)n[c].username.toLowerCase().includes(a.toLowerCase())&&p.push(n[c]),c+=1;return p}setProp(n,s){const o=s.target,a=this.state$.value,c="number"==typeof a[n];this.state$.next(Object.assign(Object.assign({},a),{[n]:c?o.valueAsNumber:o.value}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(D.H))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-big-data"]],decls:4,vars:3,consts:[[4,"ngIf"],[3,"input"],["id","buttons"],["value","",3,"click"],["value","username",3,"click"],["value","email",3,"click"],["value","id",3,"click"],["id","scroll"],["type","range",3,"max","input"],[4,"ngFor","ngForOf"]],template:function(n,s){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Big data and performance demo"),t.qZA(),t.YNc(2,U,20,4,"section",0),t.ALo(3,"async")),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,s.vm$)))},directives:[l.O5,l.sg],pipes:[l.Ov],styles:["#scroll[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 40px 1fr;\n      }\n      #buttons[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 154px);\n      }\n      #scroll[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n        transform: translateY(-100%) rotate(90deg); \n        transform-origin: left bottom;\n        width: 20rem; \n        height: 40px; \n      }"]}),e})()}];let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(A)],m.Bz]}),e})();var P=i(4395);let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,$,P.f]]}),e})()}}]);