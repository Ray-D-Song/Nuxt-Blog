<<<<<<< HEAD:docs/_nuxt/ContentDoc.1949519a.js
import{b as h,p as g,g as a,q as v,s as w,v as C,d as D,x as q,y as x,z as r}from"./entry.847a443f.js";import S from"./ContentRenderer.5195b789.js";import _ from"./ContentQuery.382f26bf.js";import"./ContentRendererMarkdown.f4dda43f.js";import"./index.a6ef77ff.js";import"./preview.48473359.js";import"./asyncData.f7e42373.js";import"./query.523a7cad.js";import"./utils.29d18ea9.js";const y=(p,e=a())=>{const f=h(p),u=C();g(()=>h(p),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),u.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),v(()=>w(n))},{immediate:!0})},T=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=q(),{tag:f,excerpt:u,path:m,query:t,head:n}=p,s={...t||{},path:m||(t==null?void 0:t.path)||x(a().path),find:"one"},c=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(_,s,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&y(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&y(i),r(S,{value:i,excerpt:u,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):c("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
=======
import{b as h,p as g,g as a,q as v,s as w,v as C,d as D,x as q,y as x,z as r}from"./entry.366d4247.js";import S from"./ContentRenderer.d1f1901d.js";import _ from"./ContentQuery.a0598d32.js";import"./ContentRendererMarkdown.cb86992e.js";import"./index.a6ef77ff.js";import"./preview.ec512d9a.js";import"./asyncData.1991e38f.js";import"./query.983e9654.js";import"./utils.407d9454.js";const y=(p,e=a())=>{const f=h(p),u=C();g(()=>h(p),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),u.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),v(()=>w(n))},{immediate:!0})},T=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=q(),{tag:f,excerpt:u,path:m,query:t,head:n}=p,s={...t||{},path:m||(t==null?void 0:t.path)||x(a().path),find:"one"},c=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(_,s,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&y(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&y(i),r(S,{value:i,excerpt:u,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):c("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
>>>>>>> d40ea2c4570f7a7fa89de7e6548bd23e26307035:docs/_nuxt/ContentDoc.4b31dfc5.js
