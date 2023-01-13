import{d as Q,j as Z,t as A}from"./chunk-I27LS666.js";import{C as B,G as K,Na as G,Pa as W,Wb as Y,b as J,ba as P,ca as V,ga as E,ha as I,k as z,ka as $,p as N,va as v}from"./chunk-CXFJOMNY.js";var S=class{},F=class{},y=class{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let s=t.indexOf(":");if(s>0){let n=t.slice(0,s),o=n.toLowerCase(),a=t.slice(s+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:this.lazyInit=()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t],n=t.toLowerCase();typeof s=="string"&&(s=[s]),s.length>0&&(this.headers.set(n,s),this.maybeSetNormalizedName(t,n))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof y?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new y;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof y?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if(typeof s=="string"&&(s=[s]),s.length===0)return;this.maybeSetNormalizedName(e.name,t);let n=(e.op==="a"?this.headers.get(t):void 0)||[];n.push(...s),this.headers.set(t,n);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(u=>o.indexOf(u)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var _=class{encodeKey(e){return q(e)}encodeValue(e){return q(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function ye(r,e){let t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(n=>{let o=n.indexOf("="),[a,u]=o==-1?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,o)),e.decodeValue(n.slice(o+1))],i=t.get(a)||[];i.push(u),t.set(a,i)}),t}var me=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function q(r){return encodeURIComponent(r).replace(me,(e,t)=>ge[t]??e)}function j(r){return`${r}`}var m=class{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new _,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ye(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let s=e.fromObject[t],n=Array.isArray(s)?s.map(j):[j(s)];this.map.set(t,n)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(s=>{let n=e[s];Array.isArray(n)?n.forEach(o=>{t.push({param:s,value:o,op:"a"})}):t.push({param:s,value:n,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(s=>t+"="+this.encoder.encodeValue(s)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new m({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(j(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let s=this.map.get(e.param)||[],n=s.indexOf(j(e.value));n!==-1&&s.splice(n,1),s.length>0?this.map.set(e.param,s):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var H=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ee(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ee(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function te(r){return typeof Blob<"u"&&r instanceof Blob}function re(r){return typeof FormData<"u"&&r instanceof FormData}function ve(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var w=class{constructor(e,t,s,n){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Ee(this.method)||n?(this.body=s!==void 0?s:null,o=n):o=s,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new y),this.context||(this.context=new H),!this.params)this.params=new m,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let u=t.indexOf("?"),i=u===-1?"?":u<t.length-1?"&":"";this.urlWithParams=t+i+a}}}serializeBody(){return this.body===null?null:ee(this.body)||te(this.body)||re(this.body)||ve(this.body)||typeof this.body=="string"?this.body:this.body instanceof m?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||re(this.body)?null:te(this.body)?this.body.type||null:ee(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,s=e.url||this.url,n=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,u=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,i=e.headers||this.headers,f=e.params||this.params,O=e.context??this.context;return e.setHeaders!==void 0&&(i=Object.keys(e.setHeaders).reduce((b,g)=>b.set(g,e.setHeaders[g]),i)),e.setParams&&(f=Object.keys(e.setParams).reduce((b,g)=>b.set(g,e.setParams[g]),f)),new w(t,s,o,{params:f,headers:i,context:O,reportProgress:u,responseType:n,withCredentials:a})}},d=(()=>(d=d||{},d[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))(),R=class{constructor(e,t=200,s="OK"){this.headers=e.headers||new y,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},x=class extends R{constructor(e={}){super(e),this.type=d.ResponseHeader}clone(e={}){return new x({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},T=class extends R{constructor(e={}){super(e),this.type=d.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new T({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},M=class extends R{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}};function L(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}var we=(()=>{class r{constructor(t){this.handler=t}request(t,s,n={}){let o;if(t instanceof w)o=t;else{let i;n.headers instanceof y?i=n.headers:i=new y(n.headers);let f;n.params&&(n.params instanceof m?f=n.params:f=new m({fromObject:n.params})),o=new w(t,s,n.body!==void 0?n.body:null,{headers:i,context:n.context,params:f,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}let a=z(o).pipe(K(i=>this.handler.handle(i)));if(t instanceof w||n.observe==="events")return a;let u=a.pipe(B(i=>i instanceof T));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe(N(i=>{if(i.body!==null&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return u.pipe(N(i=>{if(i.body!==null&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return u.pipe(N(i=>{if(i.body!==null&&typeof i.body!="string")throw new Error("Response is not a string.");return i.body}));case"json":default:return u.pipe(N(i=>i.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,s={}){return this.request("DELETE",t,s)}get(t,s={}){return this.request("GET",t,s)}head(t,s={}){return this.request("HEAD",t,s)}jsonp(t,s){return this.request("JSONP",t,{params:new m().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,s={}){return this.request("OPTIONS",t,s)}patch(t,s,n={}){return this.request("PATCH",t,L(n,s))}post(t,s,n={}){return this.request("POST",t,L(n,s))}put(t,s,n={}){return this.request("PUT",t,L(n,s))}}return r.\u0275fac=function(t){return new(t||r)(E(S))},r.\u0275prov=P({token:r,factory:r.\u0275fac}),r})();function ie(r,e){return e(r)}function be(r,e){return(t,s)=>e.intercept(t,{handle:n=>r(n,s)})}function Ce(r,e,t){return(s,n)=>t.runInContext(()=>e(s,o=>r(o,n)))}var Te=new v("HTTP_INTERCEPTORS"),X=new v("HTTP_INTERCEPTOR_FNS");function Ne(){let r=null;return(e,t)=>(r===null&&(r=(I(Te,{optional:!0})??[]).reduceRight(be,ie)),r(e,t))}var ne=(()=>{class r extends S{constructor(t,s){super(),this.backend=t,this.injector=s,this.chain=null}handle(t){if(this.chain===null){let s=Array.from(new Set(this.injector.get(X)));this.chain=s.reduceRight((n,o)=>Ce(n,o,this.injector),ie)}return this.chain(t,s=>this.backend.handle(s))}}return r.\u0275fac=function(t){return new(t||r)(E(F),E(W))},r.\u0275prov=P({token:r,factory:r.\u0275fac}),r})();var Pe=/^\)\]\}',?\n/;function Ie(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var se=(()=>{class r{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new J(s=>{let n=this.xhrFactory.build();if(n.open(t.method,t.urlWithParams),t.withCredentials&&(n.withCredentials=!0),t.headers.forEach((c,l)=>n.setRequestHeader(c,l.join(","))),t.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&n.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();n.responseType=c!=="json"?c:"text"}let o=t.serializeBody(),a=null,u=()=>{if(a!==null)return a;let c=n.statusText||"OK",l=new y(n.getAllResponseHeaders()),C=Ie(n)||t.url;return a=new x({headers:l,status:n.status,statusText:c,url:C}),a},i=()=>{let{headers:c,status:l,statusText:C,url:U}=u(),p=null;l!==204&&(p=typeof n.response>"u"?n.responseText:n.response),l===0&&(l=p?200:0);let D=l>=200&&l<300;if(t.responseType==="json"&&typeof p=="string"){let fe=p;p=p.replace(Pe,"");try{p=p!==""?JSON.parse(p):null}catch(pe){p=fe,D&&(D=!1,p={error:pe,text:p})}}D?(s.next(new T({body:p,headers:c,status:l,statusText:C,url:U||void 0})),s.complete()):s.error(new M({error:p,headers:c,status:l,statusText:C,url:U||void 0}))},f=c=>{let{url:l}=u(),C=new M({error:c,status:n.status||0,statusText:n.statusText||"Unknown Error",url:l||void 0});s.error(C)},O=!1,b=c=>{O||(s.next(u()),O=!0);let l={type:d.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),t.responseType==="text"&&n.responseText&&(l.partialText=n.responseText),s.next(l)},g=c=>{let l={type:d.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),s.next(l)};return n.addEventListener("load",i),n.addEventListener("error",f),n.addEventListener("timeout",f),n.addEventListener("abort",f),t.reportProgress&&(n.addEventListener("progress",b),o!==null&&n.upload&&n.upload.addEventListener("progress",g)),n.send(o),s.next({type:d.Sent}),()=>{n.removeEventListener("error",f),n.removeEventListener("abort",f),n.removeEventListener("load",i),n.removeEventListener("timeout",f),t.reportProgress&&(n.removeEventListener("progress",b),o!==null&&n.upload&&n.upload.removeEventListener("progress",g)),n.readyState!==n.DONE&&n.abort()}})}}return r.\u0275fac=function(t){return new(t||r)(E(A))},r.\u0275prov=P({token:r,factory:r.\u0275fac}),r})(),ae=new v("XSRF_ENABLED"),ce="XSRF-TOKEN",le=new v("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>ce}),de="X-XSRF-TOKEN",ue=new v("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>de}),k=class{},Se=(()=>{class r{constructor(t,s,n){this.doc=t,this.platform=s,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Z(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return r.\u0275fac=function(t){return new(t||r)(E(Q),E(Y),E(le))},r.\u0275prov=P({token:r,factory:r.\u0275fac}),r})();function Re(r,e){let t=r.url.toLowerCase();if(!I(ae)||r.method==="GET"||r.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(r);let s=I(k).getToken(),n=I(ue);return s!=null&&!r.headers.has(n)&&(r=r.clone({headers:r.headers.set(n,s)})),e(r)}var h=(()=>(h=h||{},h[h.Interceptors=0]="Interceptors",h[h.LegacyInterceptors=1]="LegacyInterceptors",h[h.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",h[h.NoXsrfProtection=3]="NoXsrfProtection",h[h.JsonpSupport=4]="JsonpSupport",h[h.RequestsMadeViaParent=5]="RequestsMadeViaParent",h))();function he(r,e){return{\u0275kind:r,\u0275providers:e}}function xe(...r){let e=[we,se,ne,{provide:S,useExisting:ne},{provide:F,useExisting:se},{provide:X,useValue:Re,multi:!0},{provide:ae,useValue:!0},{provide:k,useClass:Se}];for(let t of r)e.push(...t.\u0275providers);return G(e)}var oe=new v("LEGACY_INTERCEPTOR_FN");function Oe(){return he(h.LegacyInterceptors,[{provide:oe,useFactory:Ne},{provide:X,useExisting:oe,multi:!0}])}function je({cookieName:r,headerName:e}){let t=[];return r!==void 0&&t.push({provide:le,useValue:r}),e!==void 0&&t.push({provide:ue,useValue:e}),he(h.CustomXsrfConfiguration,t)}var Ue=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=$({type:r}),r.\u0275inj=V({providers:[xe(Oe(),je({cookieName:ce,headerName:de}))]}),r})();export{we as a,Ue as b};
/*! Bundled license information:

@angular/common/fesm2020/http.mjs:
  (**
   * @license Angular v15.1.0
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
