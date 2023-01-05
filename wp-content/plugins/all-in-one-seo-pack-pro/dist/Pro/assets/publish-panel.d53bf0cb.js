var w=Object.defineProperty,k=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(e,s,t)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,r=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&u(e,t,s[t]);if(c)for(var t of c(s))C.call(s,t)&&u(e,t,s[t]);return e},o=(e,s)=>k(e,S(s));import{j as P,a8 as p,V as d}from"./js/vendor.f6bbc087.js";import{c as E}from"./js/index.0c09686e.js";import{S as $}from"./js/Standalone.5cc5afb3.js";import{C as A}from"./js/GoogleSearchPreview.72c7499f.js";import{S as M}from"./js/Close.952d41b7.js";import{S as T}from"./js/Exclamation.32e01d31.js";import{S as O}from"./js/External.c6f0b2ea.js";import{S as R}from"./js/Pencil.d0705f77.js";import{n as i}from"./js/vueComponentNormalizer.4c221f82.js";import{s as _}from"./js/index.2a722b10.js";import{s as F}from"./js/helpers.46947768.js";import{i as V}from"./js/context.0a0c6a10.js";import{l as I}from"./js/loadTruSeo.e46071bd.js";import{e as L}from"./js/elemLoaded.b1f6e29c.js";import"./js/ToolsSettings.7cc9335c.js";var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.currentPost.id?t("div",{staticClass:"seo-overview"},[t("ul",{staticClass:"pre-publish-checklist"},e._l(e.tips,function(n,a){return t("li",{key:a},[t("span",{staticClass:"icon"},[t(n.icon,{tag:"component",class:n.type})],1),t("span",[e._v(e._s(n.label)+": "),t("span",{staticClass:"result",class:n.value.endsWith("/100")?n.type:null},[e._v(e._s(n.value))])]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?t("span",{staticClass:"edit",on:{click:function(l){return e.openSidebar(n.name)}}},[t("svg-pencil")],1):e._e()])}),0),e.$allowed("aioseo_page_analysis")?t("div",{staticClass:"snippet-preview"},[t("p",{staticClass:"title"},[e._v(e._s(e.strings.snippetPreview)+":")]),t("core-google-search-preview",{class:{ismobile:e.currentPost.generalMobilePrev},attrs:{title:e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title",separator:e.options.searchAppearance.global.separator,description:e.currentPost.description||e.currentPost.tags.description||"#post_content"},scopedSlots:e._u([{key:"domain",fn:function(){return[t("a",{attrs:{href:e.liveTags.permalink,target:"_blank"}},[e._v(" "+e._s(e.liveTags.permalink)+" ")])]},proxy:!0}],null,!1,4038479585)})],1):e._e(),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?t("div",{staticClass:"canonical-url"},[t("p",{staticClass:"title"},[e._v(" "+e._s(e.strings.canonicalUrl)+": "),t("span",{staticClass:"edit",on:{click:function(n){return e.openSidebar("canonical")}}},[t("svg-pencil")],1)]),t("a",{attrs:{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"}},[t("span",[e._v(e._s(e.currentPost.canonicalUrl))]),t("svg-external")],1)]):e._e()]):e._e()},j=[];const z={components:{CoreGoogleSearchPreview:A,SvgCircleCheck:E,SvgCircleClose:M,SvgCircleExclamation:T,SvgExternal:O,SvgPencil:R},mixins:[$],data(){return{strings:{snippetPreview:"Snippet Preview",canonicalUrl:"Canonical URL"}}},computed:o(r({},P("live-tags",["liveTags"])),{tips(){const e=[{label:"Visibility",name:"visibility",access:"aioseo_page_advanced_settings"},{label:"SEO Analysis",name:"seoAnalysis",access:"aioseo_page_analysis"},{label:"Readability",name:"redabilityAnalysis",access:"aioseo_page_analysis"},{label:"Focus Keyphrase",name:"focusKeyphrase",access:"aioseo_page_analysis"}].filter(s=>this.$allowed(s.access)&&(s.access!=="aioseo_page_analysis"||this.options.advanced.truSeo));return e.forEach((s,t)=>{e[t]=r(r({},s),this.getData(s.name))}),e},canImprove(){return this.tips.some(e=>e.type==="error")}}),methods:{getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const s={};let t;switch(e){case"visibility":s.value="Good!",s.type="success",t=this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex,t&&(s.value="Blocked!",s.type="error");break;case"seoAnalysis":s.value="N/A",s.type="error",t=this.currentPost.seo_score,Number.isInteger(t)&&(s.value=t+"/100",s.type=80<t?"success":50<t?"warning":"error");break;case"redabilityAnalysis":s.value="Good!",s.type="success",t=this.currentPost.page_analysis.analysis.readability.errors,t&&0<t&&(s.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",t,this.$td),t),s.type="error");break;case"focusKeyphrase":s.value="No focus keyphrase!",s.type="error",t=this.currentPost.keyphrases.focus,t&&t.keyphrase&&(s.value=t.score+"/100",s.type=80<t.score?"success":50<t.score?"warning":"error");break}return o(r({},s),{icon:this.getIcon(s.type)})},openSidebar(e){const{closePublishSidebar:s,openGeneralSidebar:t}=window.wp.data.dispatch("core/edit-post");switch(s(),t("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar"),e){case"canonical":case"visibility":this.$bus.$emit("open-post-settings",{tab:"advanced"});break;case"seoAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"basicseo"});break;case"redabilityAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"readability"});break;case"focusKeyphrase":this.$bus.$emit("open-post-settings",{tab:"general",card:"focus"});break}}},mounted(){this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?"Your post needs improvement!":"You're good to go!")})}},v={};var U=i(z,N,j,!1,B,null,null,null);function B(e){for(let s in v)this[s]=v[s]}var m=function(){return U.exports}(),D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-facebook-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"}})])},G=[];const K={},h={};var H=i(K,D,G,!1,Y,null,null,null);function Y(e){for(let s in h)this[s]=h[s]}var q=function(){return H.exports}(),W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-linkedin-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"}})])},J=[];const Q={},f={};var X=i(Q,W,J,!1,Z,null,null,null);function Z(e){for(let s in f)this[s]=f[s]}var ee=function(){return X.exports}(),te=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-pinterest-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"}})])},se=[];const ne={},g={};var re=i(ne,te,se,!1,ie,null,null,null);function ie(e){for(let s in g)this[s]=g[s]}var ae=function(){return re.exports}(),oe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-twitter-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),t("path",{attrs:{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"}})])},le=[];const ce={},y={};var ue=i(ce,oe,le,!1,pe,null,null,null);function pe(e){for(let s in y)this[s]=y[s]}var de=function(){return ue.exports}(),_e=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.liveTags.permalink?t("div",{staticClass:"aioseo-post-publish"},[t("h2",{staticClass:"title"},[e._v(e._s(e.strings.title))]),t("p",{staticClass:"description"},[e._v(e._s(e.strings.description))]),t("div",{staticClass:"links"},e._l(e.socialNetworks,function(n,a){return t("a",{key:a,staticClass:"link",attrs:{target:"_blank",href:n.link}},[t(n.icon,{tag:"component"})],1)}),0)]):e._e()},ve=[];const me={components:{SvgFacebookRounded:q,SvgLinkedinRounded:ee,SvgPinterestRounded:ae,SvgTwitterRounded:de},mixins:[$],data(){return{strings:{title:"Get out the word!",description:"Share your content on your favorite social media platforms to drive engagement and increase your SEO."}}},computed:o(r({},P("live-tags",["liveTags"])),{socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"http://www.linkedin.com/shareArticle?url="}].map(e=>o(r({},e),{link:e.link+this.liveTags.permalink}))}})},b={};var he=i(me,_e,ve,!1,fe,null,null,null);function fe(e){for(let s in b)this[s]=b[s]}var ge=function(){return he.exports}();(function(e){if(!V()||!F()||!e.editPost.PluginDocumentSettingPanel)return;const s=e.editPost.PluginDocumentSettingPanel,t=e.editPost.PluginPrePublishPanel,n=e.editPost.PluginPostPublishPanel,a=e.plugins.registerPlugin,l=window.aioseo.user;!l.capabilities.aioseo_page_analysis&&!l.capabilities.aioseo_page_general_settings&&!l.capabilities.aioseo_page_advanced_settings||a("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(s,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(t,{title:["AIOSEO",":",e.element.createElement("span",{class:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(n,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:m},{id:"aioseo-document-setting",component:m},{id:"aioseo-post-publish",component:ge}].forEach(s=>{document.getElementById(s.id)?new d({store:_,render:t=>t(s.component)}).$mount("#"+s.id):(L("#"+s.id,p(s.id)),document.addEventListener("animationstart",function(t){p(s.id)===t.animationName&&new d({store:_,render:n=>n(s.component)}).$mount("#"+s.id)},{passive:!0}))});window.addEventListener("load",()=>{I(!1)});
