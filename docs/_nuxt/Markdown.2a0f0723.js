import s from"./ContentSlot.861ea102.js";import{d as o,x as m,h as p,I as u}from"./entry.366d4247.js";import"./utils.407d9454.js";import"./preview.ec512d9a.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{l as default};