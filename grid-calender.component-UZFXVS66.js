import{l as O,q as g}from"./chunk-I27LS666.js";import{$a as M,Eb as m,Va as y,bb as l,cb as c,db as d,eb as S,ib as w,ja as a,mb as x,nb as k,qa as v,ra as F,rb as T,sb as f,tb as L,ub as E}from"./chunk-CXFJOMNY.js";import"./chunk-G5KKTNWD.js";var p=class{get active(){return!this.day.isCurrentMonth}get special(){return this.day.isSpecial}get first(){return this.day.isFirstSelected}get last(){return this.day.isLastSelected}},b=p;(()=>{p.\u0275fac=function(e){return new(e||p)}})(),(()=>{p.\u0275cmp=a({type:p,selectors:[["se-day-cell"]],hostVars:8,hostBindings:function(e,n){e&2&&T("mute",n.active)("special",n.special)("first",n.first)("last",n.last)},inputs:{day:"day"},standalone:!0,features:[m],decls:1,vars:1,template:function(e,n){e&1&&f(0),e&2&&E(" ",n.day.day," ")},dependencies:[g],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid black;cursor:pointer;user-select:none}.mute[_nghost-%COMP%]{opacity:.3;border-radius:50%;cursor:not-allowed}[_nghost-%COMP%]:hover{background-color:#4e4b4b;font-weight:bolder}.first[_nghost-%COMP%], .last[_nghost-%COMP%]{background-color:#1d0236cc}.first[_nghost-%COMP%]{border-top-left-radius:25%;border-bottom-left-radius:25%;margin-right:-.25rem;border-right:0}.last[_nghost-%COMP%]{border-top-right-radius:25%;border-bottom-right-radius:25%;margin-left:-.25rem;border-left:0}"]})})();function A(r,t){if(r&1){let e=w();c(0,"se-day-cell",1),x("click",function(){let C=v(e).$implicit,s=k();return F(s.select(C))}),d()}if(r&2){let e=t.$implicit;l("day",e)}}var u=class{set date(t){t?.constructor?.name==="Date"&&(this.days=this.calcDateArray(t))}get monthName(){return this.days[10].date.toLocaleString("default",{month:"long"})}select(t){if(t.isCurrentMonth===!1)return;let e=this.days.find(i=>i.isFirstSelected),n=this.days.find(i=>i.isLastSelected);if(console.log({day:t,first:e,last:n}),!e){t.isFirstSelected=!0;return}if(t.date<e.date){e.isFirstSelected=!1,t.isFirstSelected=!0;return}n&&(n.isLastSelected=!1),t.isLastSelected=!0}calcDateArray(t){let e=o=>new Date(o.getTime()+864e5),n=o=>new Date(t.getFullYear(),t.getMonth(),o),i=new Date(t.getFullYear(),t.getMonth(),1),C=new Date(t.getFullYear(),t.getMonth()+1,0),s=[];for(let o=0;o<i.getDay();o++){let V=t.getTime()-(i.getDay()-o)*24*60*60*1e3;s.push(D(new Date(V),!1))}for(let o=1;o<=C.getDate();o++)s.push(D(n(o)));let _=e(C);for(;_.getDay()!==0;)s.push(D(_,!1)),_=e(_);return s}},P=u;(()=>{u.\u0275fac=function(e){return new(e||u)}})(),(()=>{u.\u0275cmp=a({type:u,selectors:[["se-month"]],inputs:{date:"date"},standalone:!0,features:[m],decls:3,vars:2,consts:[[3,"day","click",4,"ngFor","ngForOf"],[3,"day","click"]],template:function(e,n){e&1&&(c(0,"h2"),f(1),d(),M(2,A,1,1,"se-day-cell",0)),e&2&&(y(1),L(n.monthName),y(1),l("ngForOf",n.days))},dependencies:[g,O,b],styles:["[_nghost-%COMP%]{display:grid;height:fit-content;width:fit-content;grid-template-columns:repeat(7,40px);grid-auto-rows:40px;gap:.5rem}h2[_ngcontent-%COMP%]{grid-column:1 / -1;text-align:center}.first[_ngcontent-%COMP%] ~ [_ngcontent-%COMP%]:has( ~ .last)[_ngcontent-%COMP%]{background-color:#1d023673;margin:0 -.25rem;border-left:0;border-right:0}[_nghost-%COMP%]:has(:hover) ~ [_ngcontent-%COMP%]:has( ~ .first)[_ngcontent-%COMP%]{background-color:#02362673}se-day-cell[_ngcontent-%COMP%]:hover:not(.first):not(.last){background-color:#b99f2d}se-day-cell[_ngcontent-%COMP%]:hover:not(.first):not(.last) ~ [_ngcontent-%COMP%]:has( ~ .first)[_ngcontent-%COMP%]{background-color:#b99f2d}.first[_ngcontent-%COMP%]:not(:has( ~ .last))[_ngcontent-%COMP%] ~ [_ngcontent-%COMP%]:has( ~ se-day-cell[_ngcontent-%COMP%]:hover:not(.first):not(.last)){background-color:#b99f2d}.last[_ngcontent-%COMP%] ~ [_ngcontent-%COMP%]:has( ~ se-day-cell[_ngcontent-%COMP%]:hover:not(.first):not(.last)){background-color:#b99f2d}"]})})();function D(r,t=!0){return{date:r,day:r.getDate(),isCurrentMonth:t,isFirstSelected:!1,isLastSelected:!1,isSpecial:!1}}function B(r,t){if(r&1&&S(0,"se-month",1),r&2){let e=t.$implicit;l("date",e)}}var h=class{constructor(){this.date=new Date("2023-05-01"),this.months=[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>new Date(this.date.getFullYear(),t,1))}},N=h;(()=>{h.\u0275fac=function(e){return new(e||h)}})(),(()=>{h.\u0275cmp=a({type:h,selectors:[["se-grid-calender"]],standalone:!0,features:[m],decls:4,vars:1,consts:[[3,"date",4,"ngFor","ngForOf"],[3,"date"]],template:function(e,n){e&1&&(c(0,"h1"),f(1,"Grid Calender"),d(),c(2,"div"),M(3,B,1,1,"se-month",0),d()),e&2&&(y(3),l("ngForOf",n.months))},dependencies:[g,O,P],styles:["[_nghost-%COMP%]{display:block}div[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,352px);grid-template-rows:auto 1fr;gap:2rem}"]})})();export{N as GridCalenderComponent};
