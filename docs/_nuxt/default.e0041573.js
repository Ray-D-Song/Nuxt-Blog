import{B as f,d as p,j as _,u as h,o as b,c as x,a as e,i as s,n as w,b as g,m as v,F as k,l as y,a6 as C}from"./entry.0440777a.js";import{_ as B,w as S,a as z}from"./clipboard-polyfill.es6.633dd63e.js";import"./nuxt-link.89bad5ce.js";const R=()=>f("color-mode").value,T={class:"flex items-start min-h-full flex-col justify-between"},$={class:"sticky top-0 flex items-center mb-8 w-full backdrop-blur-sm z-10 bg-gray-300 dark:bg-gray-900 justify-between h-16 shadow-sm"},N={class:"flex items-center"},j=e("div",{class:"w-1"},null,-1),M={class:"flex-center w-full flex-grow"},V={class:"w-4/5 sm:w-7/10 lg:w-3/5 xl:w-3/5 2xl:w-2/5"},F=e("div",{class:"mt-12 pb-6 text-sm text-center opacity-50 w-full"},[e("div",null,"Built with Nuxt 3"),y(" Copyright 2023 © Ray Song ")],-1),q=p({__name:"default",setup(D){const o=_(!1),n=R(),d=h(),a={1:"/",2:"https://github.com/Ray-D-Song",3:"https://ray-d-song.com/rss.xml"},u=()=>{n.preference==="light"?n.preference="dark":n.preference="light"},l=i=>{switch(i){case 1:d.push(a[1]);break;case 2:window.location.replace(a[2]);break;case 3:S(a[3]).then(()=>{o.value=!0,setTimeout(()=>{o.value=!1},2e3)});break}};return(i,t)=>{const m=C,c=z;return b(),x(k,null,[e("div",T,[e("div",$,[e("div",{class:"flex items-center",onClick:t[0]||(t[0]=r=>l(1))},[s(m,{name:"oi:code",class:"w-12 h-12 ml-5 font-bold hover:dark:text-blue-300 hover:text-blue-600 mx-3 mt-3 cursor-pointer"})]),e("div",N,[s(c,{padded:!1,icon:"i-simple-icons-github",size:"sm",variant:"ghost",class:"icon-button",onClick:t[1]||(t[1]=r=>l(2))}),j,s(c,{padded:!1,icon:"i-bi-rss",size:"sm",variant:"ghost",class:"icon-button",onClick:t[2]||(t[2]=r=>l(3))}),s(c,{onClick:u,padded:!1,icon:"i-fluent-dark-theme-24-filled",size:"xl",variant:"ghost",class:"icon-button"})])]),s(B,{title:"RSS 订阅已复制到剪切板",class:w(["transition-all duration-300",g(o)?"opacity-100":"opacity-0"])},null,8,["class"]),e("div",M,[e("div",V,[v(i.$slots,"default")])])]),F],64)}}});export{q as default};
