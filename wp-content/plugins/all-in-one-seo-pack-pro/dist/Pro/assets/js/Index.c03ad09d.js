/* empty css             */import{g as D,r as A}from"./params.bea1a08d.js";import{N as L,S as T}from"./WpTable.d951bd0b.js";import{n as a}from"./vueComponentNormalizer.58b0a173.js";import{m as l,e as d,a as c,b as N}from"./index.d229874d.js";import{C as M,G as E}from"./Header.ec021be2.js";import{S as _,d as B,b as p,g as S}from"./index.2a1615d5.js";import{C as I,a as U}from"./LicenseKeyBar.26a49d6b.js";import{S as O}from"./LogoGear.99a79064.js";import{S as H}from"./Logo.97285076.js";import{S as z}from"./Support.01b73fda.js";import{C as R}from"./Tabs.e5edd7e7.js";import{S as j}from"./Exclamation.77933285.js";import{U as F}from"./Url.781a1d48.js";import{S as q}from"./Gear.b5f13261.js";import{T as u}from"./Slide.01023b2f.js";var G=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-upgrade-bar"},[s("div",{staticClass:"upgrade-text"},[s("svg-aioseo-logo-gear"),s("div",{domProps:{innerHTML:t._s(t.upgradeText)}})],1),s("svg-close",{on:{click:t.processHideUpgradeBar}})],1)},V=[];const Y={components:{SvgAioseoLogoGear:O,SvgClose:_},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{...l(["hideUpgradeBar"]),processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},f={};var K=a(Y,G,V,!1,W,null,null,null);function W(t){for(let i in f)this[i]=f[i]}const X=function(){return K.exports}();var J=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("svg",{staticClass:"aioseo-description",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",fill:"currentColor"}})])},Q=[];const Z={},h={};var tt=a(Z,J,Q,!1,st,null,null,null);function st(t){for(let i in h)this[i]=h[i]}const it=function(){return tt.exports}();var et=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("svg",{staticClass:"aioseo-folder-open",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",fill:"currentColor"}})])},ot=[];const nt={},g={};var at=a(nt,et,ot,!1,rt,null,null,null);function rt(t){for(let i in g)this[i]=g[i]}const ct=function(){return at.exports}();var lt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-help",attrs:{id:"aioseo-help-modal"}},[!t.$isPro&&t.settings.showUpgradeBar&&t.pong?s("core-upgrade-bar"):t._e(),t.$isPro&&t.isUnlicensed&&t.pong?s("core-license-key-bar"):t._e(),t.pong?t._e():s("core-api-bar"),s("div",{staticClass:"aioseo-help-header"},[s("div",{staticClass:"logo"},[t.isUnlicensed?s("a",{attrs:{href:t.$links.utmUrl("header-logo"),target:"_blank"}},[s("svg-aioseo-logo",{attrs:{id:"aioseo-help-logo"}})],1):t._e(),t.isUnlicensed?t._e():s("svg-aioseo-logo",{attrs:{id:"aioseo-help-logo"}})],1),s("div",{attrs:{id:"aioseo-help-close",title:t.strings.close},on:{click:function(e){return e.stopPropagation(),t.toggleModal.apply(null,arguments)}}},[s("svg-close")],1)]),s("div",{staticClass:"help-content"},[s("div",{attrs:{id:"aioseo-help-search"}},[s("base-input",{attrs:{type:"text",size:"medium",placeholder:t.strings.search},on:{input:function(e){return t.inputSearch(e)}}})],1),s("div",{attrs:{id:"aioseo-help-result"}},[s("ul",{staticClass:"aioseo-help-docs"},t._l(t.filteredDocs,function(e,n){return s("li",{key:n},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",e.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(e.title))])])}),0)]),s("div",{attrs:{id:"aioseo-help-categories"}},[s("ul",{staticClass:"aioseo-help-categories-toggle"},t._l(t.helpPanel.categories,function(e,n){return s("li",{key:n,staticClass:"aioseo-help-category",class:{opened:n==="getting-started"}},[s("header",{on:{click:function(o){return o.stopPropagation(),t.toggleSection(o)}}},[s("span",{staticClass:"folder-open"},[s("svg-folder-open")],1),s("span",{staticClass:"title"},[t._v(t._s(e))]),s("span",{staticClass:"dashicons dashicons-arrow-right-alt2"})]),s("ul",{staticClass:"aioseo-help-docs"},[t._l(t.getCategoryDocs(n).slice(0,5),function(o,r){return s("li",{key:r},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",o.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(o.title))])])}),s("div",{staticClass:"aioseo-help-additional-docs"},t._l(t.getCategoryDocs(n).slice(5,t.getCategoryDocs(n).length),function(o,r){return s("li",{key:r},[s("span",{staticClass:"icon"},[s("svg-description")],1),s("a",{attrs:{href:t.$links.utmUrl("help-panel-doc","",o.url),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(o.title))])])}),0),t.getCategoryDocs(n).length>=5?s("base-button",{staticClass:"aioseo-help-docs-viewall gray medium",on:{click:function(o){return o.stopPropagation(),t.toggleDocs(o)}}},[t._v(" "+t._s(t.strings.viewAll)+" "+t._s(e)+" "+t._s(t.strings.docs)+" ")]):t._e()],2)])}),0)]),s("div",{attrs:{id:"aioseo-help-footer"}},[s("div",{staticClass:"aioseo-help-footer-block"},[s("a",{attrs:{href:t.$links.utmUrl("help-panel-all-docs","","https://aioseo.com/docs/"),rel:"noopener noreferrer",target:"_blank"}},[s("svg-description"),s("h3",[t._v(t._s(t.strings.viewDocumentation))]),s("p",[t._v(t._s(t.strings.browseDocumentation))]),s("base-button",{staticClass:"aioseo-help-docs-viewall gray small"},[t._v(" "+t._s(t.strings.viewAllDocumentation)+" ")])],1)]),s("div",{staticClass:"aioseo-help-footer-block"},[s("a",{attrs:{href:!t.$isPro||!t.$aioseo.license.isActive?t.$links.getUpsellUrl("help-panel","get-support","liteUpgrade"):"https://aioseo.com/account/support/",rel:"noopener noreferrer",target:"_blank"}},[s("svg-support"),s("h3",[t._v(t._s(t.strings.getSupport))]),s("p",[t._v(t._s(t.strings.submitTicket))]),t.$isPro&&t.$aioseo.license.isActive?s("base-button",{staticClass:"aioseo-help-docs-support blue small"},[t._v(" "+t._s(t.strings.submitSupportTicket)+" ")]):t._e(),!t.$isPro||!t.$aioseo.license.isActive?s("base-button",{staticClass:"aioseo-help-docs-support green small"},[t._v(" "+t._s(t.strings.upgradeToPro)+" ")]):t._e()],1)])])])],1)},ut=[];const dt={components:{CoreApiBar:I,CoreLicenseKeyBar:U,CoreUpgradeBar:X,SvgAioseoLogo:H,SvgClose:_,SvgDescription:it,SvgFolderOpen:ct,SvgSupport:z},data(){return{searchItem:null,strings:{close:this.$t.__("Close",this.$td),search:this.$t.__("Search",this.$td),viewAll:this.$t.__("View All",this.$td),docs:this.$t.__("Docs",this.$td),viewDocumentation:this.$t.__("View Documentation",this.$td),browseDocumentation:this.$t.sprintf(this.$t.__("Browse documentation, reference material, and tutorials for %1$s.",this.$td),"AIOSEO"),viewAllDocumentation:this.$t.__("View All Documentation",this.$td),getSupport:this.$t.__("Get Support",this.$td),submitTicket:this.$t.__("Submit a ticket and our world class support team will be in touch soon.",this.$td),submitSupportTicket:this.$t.__("Submit a Support Ticket",this.$td),upgradeToPro:this.$t.__("Upgrade to Pro",this.$td)}}},computed:{...d(["settings","isUnlicensed"]),...c(["showHelpModal","helpPanel","pong"]),filteredDocs(){return this.searchItem!==""?Object.values(this.helpPanel.docs).filter(t=>this.searchItem!==null?t.title.toLowerCase().includes(this.searchItem.toLowerCase()):null):null}},methods:{inputSearch:function(t){B(()=>{this.searchItem=t},1e3)},toggleSection:function(t){t.target.parentNode.parentNode.classList.toggle("opened")},toggleDocs:function(t){t.target.previousSibling.classList.toggle("opened"),t.target.style.display="none"},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},getCategoryDocs(t){return Object.values(this.helpPanel.docs).filter(i=>i.categories.flat().includes(t)?i:null)}}},m={};var _t=a(dt,lt,ut,!1,pt,null,null,null);function pt(t){for(let i in m)this[i]=m[i]}const ft=function(){return _t.exports}(),ht=""+window.__aioseoDynamicImportPreload__("images/dannie-detective.f19b97eb.png");var gt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s(t.getIcon,{tag:"component",class:t.notification.type})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.notification.title))]),s("div",{staticClass:"date"},[t._v(" "+t._s(t.getDate)+" ")])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.notification.content)}}),s("div",{staticClass:"actions"},[t.notification.button1_label&&t.notification.button1_action?s("base-button",{attrs:{size:"small",type:"gray",tag:t.getTagType(t.notification.button1_action),href:t.getHref(t.notification.button1_action),target:t.getTarget(t.notification.button1_action),loading:t.button1Loading},on:{click:function(e){return t.processButtonClick(t.notification.button1_action,1)}}},[t._v(" "+t._s(t.notification.button1_label)+" ")]):t._e(),t.notification.button2_label&&t.notification.button2_action?s("base-button",{attrs:{size:"small",type:"gray",tag:t.getTagType(t.notification.button2_action),href:t.getHref(t.notification.button2_action),target:t.getTarget(t.notification.button2_action),loading:t.button2Loading},on:{click:function(e){return t.processButtonClick(t.notification.button2_action,2)}}},[t._v(" "+t._s(t.notification.button2_label)+" ")]):t._e(),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification.apply(null,arguments)}}},[t._v(t._s(t.strings.dismiss))])],1)])])])},mt=[];const vt={components:{SvgCircleCheck:p,SvgCircleClose:S,SvgCircleExclamation:j,SvgGear:q,TransitionSlide:u},mixins:[F],props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td)}}},computed:{getIcon(){switch(this.notification.type){case"warning":return"svg-circle-exclamation";case"error":return"svg-circle-close";case"info":return"svg-gear";case"success":default:return"svg-circle-check"}},getDate(){return this.$moment.utc(this.notification.start).tz(this.$moment.tz.guess()).fromNow().replace("a few seconds ago",this.$t.__("a few seconds ago",this.$td)).replace("a minute ago",this.$t.__("a minute ago",this.$td)).replace("minutes ago",this.$t.__("minutes ago",this.$td)).replace("a day ago",this.$t.__("a day ago",this.$td)).replace("days ago",this.$t.__("days ago",this.$td)).replace("a month ago",this.$t.__("a month ago",this.$td)).replace("months ago",this.$t.__("months ago",this.$td)).replace("a year ago",this.$t.__("a year ago",this.$td)).replace("years ago",this.$t.__("years ago",this.$td))}},methods:{...l(["dismissNotifications","processButtonAction"]),processDismissNotification(){this.active=!1,this.dismissNotifications([this.notification.slug]),this.$emit("dismissed-notification")}}},v={};var $t=a(vt,gt,mt,!1,yt,null,null,null);function yt(t){for(let i in v)this[i]=v[i]}const bt=function(){return $t.exports}();var Ct=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-check",{staticClass:"success"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[t.step===1?[s("base-button",{attrs:{size:"small",type:"blue"},on:{click:function(e){e.stopPropagation(),t.step=2}}},[t._v(" "+t._s(t.strings.yesILoveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){e.stopPropagation(),t.step=3}}},[t._v(" "+t._s(t.strings.notReally)+" ")])]:t._e(),t.step===2?[s("base-button",{attrs:{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.okYouDeserveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!0)}}},[t._v(" "+t._s(t.strings.nopeMaybeLater)+" ")])]:t._e(),t.step===3?[s("base-button",{attrs:{tag:"a",href:t.feedbackUrl,size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.giveFeedback)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.noThanks)+" ")])]:t._e(),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(t._s(t.strings.dismiss))])],2)])])])},kt=[];const wt={components:{SvgCircleCheck:p,TransitionSlide:u},props:{notification:{type:Object,required:!0}},data(){return{step:1,active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{...c(["options"]),...d(["licenseKey"]),title(){switch(this.step){case 2:return this.$t.__("That's Awesome!",this.$td);case 3:return this.$t.__("Help us improve",this.$td);default:return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")}},content(){switch(this.step){case 2:return this.$t.__("Could you please do me a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td)+"<br><br><strong>~ Syed Balkhi<br>"+this.$t.sprintf(this.$t.__("CEO of %1$s",this.$td),"All in One SEO")+"</strong>";case 3:return this.$t.sprintf(this.$t.__("We're sorry to hear you aren't enjoying %1$s. We would love a chance to improve. Could you take a minute and let us know what we can do better?",this.$td),"All in One SEO");default:return""}},feedbackUrl(){const t=this.options.general&&this.licenseKey?this.licenseKey:"",i=this.$isPro?"pro":"lite";return this.$links.utmUrl("notification-review-notice",this.$aioseo.version,"https://aioseo.com/plugin-feedback/?wpf7528_24="+encodeURIComponent(this.$aioseo.urls.home)+"&wpf7528_26="+t+"&wpf7528_27="+i+"&wpf7528_28="+this.$aioseo.version)}},methods:{...l(["dismissNotifications","processButtonAction"]),processDismissNotification(t=!1){this.active=!1,this.dismissNotifications([this.notification.slug+(t?"-delay":"")]),this.$emit("dismissed-notification")}}},$={};var Nt=a(wt,Ct,kt,!1,St,null,null,null);function St(t){for(let i in $)this[i]=$[i]}const Pt=function(){return Nt.exports}();var xt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-check",{staticClass:"success"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[s("base-button",{attrs:{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.processDismissNotification(!1)}}},[t._v(" "+t._s(t.strings.okYouDeserveIt)+" ")]),s("base-button",{attrs:{size:"small",type:"gray"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!0)}}},[t._v(" "+t._s(t.strings.nopeMaybeLater)+" ")]),t.notification.dismissed?t._e():s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissNotification(!1)}}},[t._v(t._s(t.strings.dismiss))])],1)])])])},Dt=[];const At={components:{SvgCircleCheck:p,TransitionSlide:u},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{...c(["options"]),title(){return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")},content(){return this.$t.sprintf(this.$t.__("Hey, I noticed you have been using %1$s for some time - that\u2019s awesome! Could you please do me a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td),"<strong>All in One SEO</strong>")+"<br><br><strong>~ Syed Balkhi<br>"+this.$t.sprintf(this.$t.__("CEO of %1$s",this.$td),"All in One SEO")+"</strong>"}},methods:{...l(["dismissNotifications","processButtonAction"]),processDismissNotification(t=!1){this.active=!1,this.dismissNotifications([this.notification.slug+(t?"-delay":"")]),this.$emit("dismissed-notification")}}},y={};var Lt=a(At,xt,Dt,!1,Tt,null,null,null);function Tt(t){for(let i in y)this[i]=y[i]}const Mt=function(){return Lt.exports}();var Et=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition-slide",{staticClass:"aioseo-notification",attrs:{active:t.active}},[s("div",[s("div",{staticClass:"icon"},[s("svg-circle-close",{staticClass:"error"})],1),s("div",{staticClass:"body"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.strings.title))])]),s("div",{staticClass:"notification-content",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"actions"},[s("base-button",{attrs:{size:"small",type:"green",tag:"a",href:t.$links.utmUrl("notification-unlicensed-addons"),target:"_blank"}},[t._v(" "+t._s(t.strings.upgrade)+" ")])],1)])])])},Bt=[];const It={components:{SvgCircleClose:S,TransitionSlide:u},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{title:this.$t.sprintf(this.$t.__("%1$s %2$s Not Configured Properly",this.$td),"AIOSEO","Addons"),learnMore:this.$t.__("Learn More",this.$td),upgrade:this.$t.__("Upgrade",this.$td)}}},computed:{...c(["options"]),content(){let t="<ul>";return this.notification.addons.forEach(i=>{t+="<li><strong>AIOSEO - "+i.name+"</strong></li>"}),t+="</ul>",this.notification.message+t}}},b={};var Ut=a(It,Et,Bt,!1,Ot,null,null,null);function Ot(t){for(let i in b)this[i]=b[i]}const Ht=function(){return Ut.exports}();var zt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-notification-cards"},[t.notifications.length?t._l(t.notifications,function(e){return s(e.component?e.component:"core-notification",{key:e.slug,ref:"notification",refInFor:!0,tag:"component",attrs:{notification:e},on:{"dismissed-notification":function(n){return t.$emit("dismissed-notification")}}})}):t._e(),t.notifications.length?t._e():s("div",{key:"no-notifications"},[t._t("no-notifications",function(){return[s("div",{staticClass:"no-notifications"},[s("img",{attrs:{alt:"Dannie the Detective",src:t.$getAssetUrl(t.dannieDetectiveImg)}}),s("div",{staticClass:"great-scott"},[t._v(" "+t._s(t.strings.greatScott)+" ")]),s("div",{staticClass:"no-new-notifications"},[t._v(" "+t._s(t.strings.noNewNotifications)+" ")]),t.dismissedCount?s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),t.$emit("toggle-dismissed")}}},[t._v(" "+t._s(t.strings.seeDismissed)+" ")]):t._e()])]})],2)],2)},Rt=[];const jt={components:{CoreNotification:bt,NotificationsReview:Pt,NotificationsReview2:Mt,NotificationsUnlicensedAddons:Ht},props:{dismissedCount:{type:Number,required:!0},notifications:{type:Array,required:!0}},data(){return{dannieDetectiveImg:ht,strings:{greatScott:this.$t.__("Great Scott! Where'd they all go?",this.$td),noNewNotifications:this.$t.__("You have no new notifications.",this.$td),seeDismissed:this.$t.__("See Dismissed Notifications",this.$td)}}}},C={};var Ft=a(jt,zt,Rt,!1,qt,null,null,null);function qt(t){for(let i in C)this[i]=C[i]}const Gt=function(){return Ft.exports}();var Vt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"aioseo-notifications",staticClass:"aioseo-notifications"},[s("transition",{attrs:{name:"notifications-slide"}},[t.showNotifications?s("div",{staticClass:"notification-menu"},[s("div",{staticClass:"notification-header"},[s("span",{staticClass:"new-notifications"},[t._v("("+t._s(t.notificationsCount)+") "+t._s(t.notificationTitle))]),s("div",{staticClass:"dismissed-notifications"},[!t.dismissed&&t.dismissedNotificationsCount?s("a",{attrs:{href:"#"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dismissed=!0}}},[t._v(t._s(t.strings.dismissedNotifications))]):t._e(),t.dismissed&&t.dismissedNotificationsCount?s("a",{attrs:{href:"#"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.dismissed=!1}}},[t._v(t._s(t.strings.activeNotifications))]):t._e()]),s("svg-close",{on:{click:t.toggleNotifications}})],1),s("core-notification-cards",{staticClass:"notification-cards",attrs:{notifications:t.filteredNotifications,dismissedCount:t.dismissedNotificationsCount},on:{"toggle-dismissed":function(e){t.dismissed=!t.dismissed}}}),s("div",{staticClass:"notification-footer"},[s("div",{staticClass:"pagination"},[t.totalPages>1?t._l(t.pages,function(e,n){return s("div",{key:n,staticClass:"page-number",class:{active:e.number===1+t.currentPage},on:{click:function(o){t.currentPage=e.number-1}}},[t._v(" "+t._s(e.number)+" ")])}):t._e()],2),t.dismissed?t._e():s("div",{staticClass:"dismiss-all"},[t.notifications.length?s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissAllNotifications.apply(null,arguments)}}},[t._v(t._s(t.strings.dismissAll))]):t._e()])])],1):t._e()]),s("transition",{attrs:{name:"notifications-fade"}},[t.showNotifications?s("div",{staticClass:"overlay",on:{click:t.toggleNotifications}}):t._e()])],1)},Yt=[];const Kt={components:{CoreNotificationCards:Gt,SvgClose:_},mixins:[L],data(){return{dismissed:!1,maxNotifications:Number.MAX_SAFE_INTEGER,currentPage:0,totalPages:1,strings:{dismissedNotifications:this.$t.__("Dismissed Notifications",this.$td),dismissAll:this.$t.__("Dismiss All",this.$td)}}},watch:{showNotifications(t){t?(this.currentPage=0,this.setMaxNotifications(),this.addBodyClass()):this.removeBodyClass()},dismissed(){this.setMaxNotifications()},notifications(){this.setMaxNotifications()}},computed:{...c(["showNotifications"]),filteredNotifications(){return[...this.notifications].splice(this.currentPage===0?0:this.currentPage*this.maxNotifications,this.maxNotifications)},pages(){const t=[];for(let i=0;i<this.totalPages;i++)t.push({number:i+1});return t}},methods:{...l(["dismissNotifications"]),...N(["toggleNotifications"]),escapeListener(t){t.key==="Escape"&&this.showNotifications&&this.toggleNotifications()},addBodyClass(){document.body.classList.add("aioseo-show-notifications")},removeBodyClass(){document.body.classList.remove("aioseo-show-notifications")},documentClick(t){if(!this.showNotifications)return;const i=t&&t.target?t.target:null,s=document.querySelector("#wp-admin-bar-aioseo-notifications");if(s&&(s===i||s.contains(i)))return;const e=document.querySelector("#toplevel_page_aioseo .wp-first-item"),n=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");if(e&&e.contains(n)&&(e===i||e.contains(i)))return;const o=this.$refs["aioseo-notifications"];o&&(o===i||o.contains(i))||this.toggleNotifications()},notificationsLinkClick(t){t.preventDefault(),this.toggleNotifications()},processDismissAllNotifications(){const t=[];this.notifications.forEach(i=>{t.push(i.slug)}),this.dismissNotifications(t).then(()=>{this.setMaxNotifications()})},setMaxNotifications(){const t=this.currentPage;this.currentPage=0,this.totalPages=1,this.maxNotifications=Number.MAX_SAFE_INTEGER,this.$nextTick(async()=>{const i=[],s=document.querySelectorAll(".notification-menu .aioseo-notification");s&&s.forEach(n=>{let o=n.offsetHeight;const r=window.getComputedStyle?getComputedStyle(n,null):n.currentStyle,P=parseInt(r.marginTop)||0,x=parseInt(r.marginBottom)||0;o+=P+x,i.push(o)});const e=document.querySelector(".notification-menu .aioseo-notification-cards");if(e){let n=0,o=0;for(let r=0;r<i.length&&(o+=i[r],!(o>e.offsetHeight));r++)n++;this.maxNotifications=n||1,this.totalPages=Math.ceil(i.length/n)}this.currentPage=t>this.totalPages-1?this.totalPages-1:t})}},mounted(){document.addEventListener("keydown",this.escapeListener),document.addEventListener("click",this.documentClick);const t=document.querySelector("#wp-admin-bar-aioseo-notifications .ab-item");t&&t.addEventListener("click",this.notificationsLinkClick);const i=document.querySelector("#toplevel_page_aioseo .wp-first-item"),s=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");i&&s&&i.addEventListener("click",this.notificationsLinkClick)}},k={};var Wt=a(Kt,Vt,Yt,!1,Xt,null,null,null);function Xt(t){for(let i in k)this[i]=k[i]}const Jt=function(){return Wt.exports}();var Qt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("core-notifications"),s("div",{staticClass:"aioseo-main"},[s("core-header",{attrs:{"page-name":t.pageName}}),s("grid-container",[t.showTabs?s("core-main-tabs",{key:t.tabsKey,attrs:{tabs:t.tabs,showSaveButton:t.shouldShowSaveButton}}):t._e(),s("transition",{attrs:{name:"route-fade",mode:"out-in"}},[t._t("default")],2),t.shouldShowSaveButton?s("div",{staticClass:"save-changes"},[s("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processSaveChanges}},[t._v(" "+t._s(t.strings.saveChanges)+" ")])],1):t._e()],1)],1),t.helpPanel.docs&&Object.keys(t.helpPanel.docs).length?s("core-help"):t._e()],1)},Zt=[];const ts={components:{CoreHeader:M,CoreHelp:ft,CoreMainTabs:R,CoreNotifications:Jt,GridContainer:E},mixins:[T],props:{pageName:{type:String,required:!0},showTabs:{type:Boolean,default(){return!0}},showSaveButton:{type:Boolean,default(){return!0}},excludeTabs:{type:Array,default(){return[]}}},data(){return{tabsKey:0,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},watch:{excludeTabs(){this.tabsKey+=1}},computed:{...d(["settings"]),...c(["loading","options","showNotifications","helpPanel","notifications"]),tabs(){return this.$router.options.routes.filter(t=>t.name&&t.meta&&t.meta.name).filter(t=>this.$allowed(t.meta.access)).filter(t=>!(t.meta.display==="lite"&&this.$isPro||t.meta.display==="pro"&&!this.$isPro)).filter(t=>!this.excludeTabs.includes(t.name)).map(t=>({slug:t.name,name:t.meta.name,url:{name:t.name},access:t.meta.access,pro:!!t.meta.pro}))},shouldShowSaveButton(){if(this.$route&&this.$route.name){const t=this.$router.options.routes.find(i=>i.name===this.$route.name);if(t&&t.meta&&t.meta.hideSaveButton)return!1}return this.showSaveButton}},methods:{...N(["toggleNotifications","disableForceShowNotifications"])},mounted(){D().notifications&&(this.showNotifications||this.toggleNotifications(),setTimeout(()=>{A("notifications")},500)),this.notifications.force&&this.notifications.active.length&&(this.disableForceShowNotifications(),this.toggleNotifications())}},w={};var ss=a(ts,Qt,Zt,!1,is,null,null,null);function is(t){for(let i in w)this[i]=w[i]}const $s=function(){return ss.exports}();export{$s as C,Gt as a};