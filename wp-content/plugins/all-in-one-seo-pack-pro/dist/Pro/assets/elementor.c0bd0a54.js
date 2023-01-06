import{V as c}from"./js/vueComponentNormalizer.58b0a173.js";import"./js/index.2a1615d5.js";import{T as w}from"./js/index.9b4e2087.js";import{s as n}from"./js/index.d229874d.js";import{k as f,m as u}from"./js/attachments.5c790671.js";import{i as g}from"./js/isEqual.a6913dc6.js";import{i as h}from"./js/isEmpty.e3b1708a.js";import{s,_ as r}from"./js/default-i18n.0e73c33c.js";import{A as y}from"./js/App.0704e4f2.js";import"./js/client.b661b356.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/constants.b5b5d9a1.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/portal-vue.esm.272b3133.js";import"./js/cleanForSlug.554cc757.js";import"./js/_baseIsEqual.e22c67bc.js";import"./js/_getTag.3036b7b0.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/WpTable.d951bd0b.js";import"./js/JsonValues.08065e69.js";import"./js/SettingsRow.0d51ff21.js";import"./js/Row.89c6bb85.js";import"./js/Checkbox.732cf0d4.js";import"./js/Checkmark.c0183939.js";import"./js/LicenseKeyBar.26a49d6b.js";import"./js/LogoGear.99a79064.js";import"./js/Tabs.e5edd7e7.js";import"./js/TruSeoScore.98a47fd6.js";import"./js/Information.6f7632ab.js";import"./js/Slide.01023b2f.js";import"./js/Index.ebdaa5e0.js";import"./js/ProBadge.6745e7cb.js";import"./js/External.051baee5.js";import"./js/Exclamation.77933285.js";import"./js/Gear.b5f13261.js";import"./js/Tooltip.a36a3967.js";import"./js/Plus.d9c7f9ce.js";import"./js/MaxCounts.5a7ca2fd.js";import"./js/RadioToggle.d0794ab7.js";import"./js/GoogleSearchPreview.42ce749d.js";import"./js/HtmlTagsEditor.8c2f0897.js";import"./js/Editor.ab65d1f4.js";import"./js/UnfilteredHtml.44261c87.js";import"./js/Mobile.ca3b04e9.js";import"./js/popup.25df8419.js";import"./js/Index.2879f882.js";import"./js/Table.54efa19a.js";import"./js/Affiliate.cf96499f.js";import"./js/Blur.945b1b3e.js";import"./js/Index.063d480c.js";import"./js/RequiredPlans.d7c85342.js";import"./js/Image.a2b87617.js";import"./js/Img.30b01953.js";import"./js/FacebookPreview.13f2bdcb.js";import"./js/dannie-profile.e0152a9f.js";import"./js/TwitterPreview.eb78855f.js";import"./js/Book.942a8cf4.js";import"./js/Build.f76e2a34.js";import"./js/Redirects.f57fbd79.js";import"./js/Card.18919467.js";import"./js/Datepicker.9cafc602.js";import"./js/NewsChannel.32f1527e.js";import"./js/Radio.8fe23bef.js";import"./js/Textarea.92b32df4.js";import"./js/Eye.1747422d.js";class k extends window.$e.modules.hookUI.Base{constructor(o,e,i){super(),this.hook=o,this.id=e,this.callback=i}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class _ extends window.$e.modules.hookData.Base{constructor(o,e,i){super(),this.hook=o,this.id=e,this.callback=i}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function a(t,o,e){window.$e.hooks.registerUIAfter(new k(t,o,e))}function E(t,o,e){window.$e.hooks.registerDataAfter(new _(t,o,e))}let m={};const p=()=>{const t=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(t.config.type))return;const o={...m},e=f();g(o,e)||(m=e,u())},$=()=>{h(n.state.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&n.dispatch("saveCurrentPost",n.state.currentPost)},b=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},v=()=>{a("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",p),a("document/save/set-is-modified","aioseo-content-scraper-on-modified",p),E("document/save/save","aioseo-save",$),window.aioseoBus.$on("postSettingsUpdated",b)},A=()=>{if(window.elementor.config.user.introduction["aioseo-introduction"]===!0)return;const t=new window.elementorModules.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:s(r("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:s(r("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:r("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{t.setViewed(),t.getDialog().hide()}}});t.show()};c.prototype.$truSeo=new w;const I=()=>{let t=window.elementor.getPreferences("ui_theme")||"auto";t==="auto"&&(t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(o=>{o.startsWith("aioseo-elementor-")&&document.body.classList.remove(o)}),document.body.classList.add("aioseo-elementor-"+t)},C=()=>{window.$e.routes.on("run:after",function(t,o){I(),o==="panel/page-settings/aioseo"&&(new c({store:n,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:e=>e(y)}).$mount("#elementor-panel-page-settings-controls"),document.getElementById("elementor-panel-page-settings").classList.add("edit-post-sidebar","aioseo-elementor-panel"),u())})},S=()=>{const t=window.elementor.modules.layouts.panel.pages.menu.Menu,o=window.elementor.getPreferences("ui_theme");t.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+o,title:"All in One SEO",type:"page",callback:()=>{try{window.$e.routes.run("panel/page-settings/aioseo")}catch{window.$e.routes.run("panel/page-settings/settings"),window.$e.routes.run("panel/page-settings/aioseo")}}},"more")},d=()=>{S(),C(),A(),v()};let l=!1;window.elementor&&(setTimeout(d),l=!0);(function(t){l||t(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(d)})})})(window.jQuery);
