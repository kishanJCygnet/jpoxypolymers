import{p as m,s as i,q as f,g as y,i as v,f as g}from"./index.cf8251b7.js";import{m as t,f as E,t as S,s as b,h as C,i as _}from"./attachments.366ec28e.js";const h=()=>{let e=!1;if(document.querySelector("#wp-content-wrap.tmce-active")){const a=window.setInterval(()=>{!window.tinyMCE||!window.tinyMCE.activeEditor||(window.clearInterval(a),t(),window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)}))},50)}else{const a=document.querySelector("textarea#content");a&&(a.addEventListener("keyup",()=>{t(500)}),a.addEventListener("paste",()=>{t(500)}))}const n=document.querySelector("#post input#title");n&&n.addEventListener("input",()=>{t(500)});const o=document.querySelector("#post textarea#excerpt");o&&o.addEventListener("input",()=>{t(500)});const u=document.querySelector("#post_name");u&&u.addEventListener("change",()=>{t(500)});const s=document.querySelector("#edit-slug-buttons");s&&s.addEventListener("click",a=>{a.target===s.querySelector("#edit-slug-buttons button.save")&&t()});const c=document.querySelector("#categorychecklist");c&&c.addEventListener("change",function(){E()});const d=function(a){a.forEach(w=>{if(w.attributeName==="class"){if(document.querySelector("#wp-content-wrap.tmce-active")){if(!window.tinyMCE)return;window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)})}const p=document.querySelector("#content");p&&(p.addEventListener("keyup",()=>{t(500)}),p.addEventListener("paste",()=>{t(500)}))}})},l=new MutationObserver(d),r=document.querySelector("#wp-content-wrap");r&&l.observe(r,{attributes:!0}),setInterval(()=>{e&&(e=!1)},500),S()&&!m()&&(e=!0,setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&window.tinyMCE.activeEditor.isDirty()&&!e&&(e=!0,t())},500))},x=()=>{t(),window.wp.data.subscribe(()=>{t(500);const e=window.wp.data.select("core/editor").isSavingPost(),n=window.wp.data.select("core/editor").isAutosavingPost();e&&!n&&(i.commit("isDirty",!1),t())})},k=()=>{if(i.getters.isUnlicensed)return;let e="",n="",o="";window.addEventListener("change",u=>{if(u.target.tagName!=="INPUT")return;const s=document.getElementById("_sku");s&&(e=s.value),i.commit("live-tags/updateWooCommerceSku",e);const c=document.getElementById("_sale_price"),d=document.getElementById("_regular_price");c&&(n=c.value),!n&&d&&(n=d.value);const l=window.aioseo.data.wooCommerce.currencySymbol+parseFloat(n||0).toFixed(2);i.commit("live-tags/updateWooCommercePrice",l);let r=document.querySelectorAll('#post input[name="tax_input[product_brand][]"]:checked');r.length||(r=document.querySelectorAll('#post input[name="tax_input[pwb-brand][]"]:checked')),r.length?o!==r[0].parentNode.innerText&&(o=r[0].parentNode.innerText,i.commit("live-tags/updateWooCommerceBrand",r[0].parentNode.innerText)):o!==""&&(o="",i.commit("live-tags/updateWooCommerceBrand",""))})},I=(e=!0)=>{if(i.state.loaded||f({}),!!b())if(t(),window.aioseo.currentPost.context==="term")C();else if(i.dispatch("ping"),e&&i.dispatch("savePostState"),y()){const n=window.setInterval(()=>{window.wp.data.select("core/editor").getCurrentPost().id&&(window.clearInterval(n),x())},50);window.addEventListener("beforeunload",o=>{!i.state.isDirty||(o.preventDefault(),o.returnValue="")})}else m()&&k(),(v()||g())&&h(),_()};export{I as l};
