var C=Object.defineProperty,S=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(t,i,s)=>i in t?C(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,o=(t,i)=>{for(var s in i||(i={}))y.call(i,s)&&d(t,s,i[s]);if(l)for(var s of l(i))w.call(i,s)&&d(t,s,i[s]);return t},r=(t,i)=>S(t,k(i));import{N as b}from"./ToolsSettings.9a525564.js";import{a as c,b as v,d as f}from"./index.63323e13.js";import"./helpers.d992cd63.js";import{n}from"./vueComponentNormalizer.87056a83.js";import{C as x}from"./Card.b87ede7d.js";import{C as A,S as L,a as N}from"./SitemapsPro.44778a73.js";import{C as E}from"./GettingStarted.1d33d69d.js";import{C as M,a as O}from"./Index.1c04c240.js";import{a as z,C as U}from"./Overview.2b3d5fc8.js";import{p as R}from"./popup.25df8419.js";import{S as $}from"./SeoSiteScore.48a1cf92.js";import{C as T}from"./Blur.8490ecd2.js";import{C as V}from"./Index.f3d57e2a.js";import{C as H}from"./Tooltip.3ec20ff5.js";import{C as P}from"./Index.842cade7.js";import{G as D,a as G}from"./Row.13b6f3f1.js";import{S as I}from"./Book.b6a9040c.js";import{a as q,S as Z}from"./Build.1297b1bd.js";import{S as B}from"./QuestionMark.83ebd18e.js";import{S as F}from"./History.99f81129.js";import{S as W}from"./Message.ec85dd4f.js";import{S as j}from"./Redirect.097ea471.js";import{S as K}from"./Rocket.8cc34606.js";import{S as Y}from"./VideoCamera.896ed18d.js";import"./Modal.ff6affc5.js";import"./index.cd641513.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.40d5dc79.js";import"./isArrayLikeObject.86537e3d.js";import"./default-i18n.abde8d59.js";import"./cleanForSlug.6eecf7c2.js";import"./Slide.f5d21606.js";import"./params.bea1a08d.js";import"./Url.781a1d48.js";import"./Index.05a01367.js";/* empty css             */import"./Header.edb8b75f.js";import"./LicenseKeyBar.6284760e.js";import"./LogoGear.0c3dd5e3.js";import"./AnimatedNumber.b6059bfd.js";import"./Logo.1a5e022a.js";import"./Support.b1f25bbd.js";import"./Tabs.17f5a283.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Close.5e7bcb70.js";import"./Exclamation.356738ce.js";import"./Gear.c974e953.js";import"./External.8868c638.js";import"./DonutChartWithLegend.fe87aad2.js";var Q=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-site-score-dashboard"},[t.analyzeError?t._e():s("div",{staticClass:"aioseo-seo-site-score-score"},[s("core-site-score",{attrs:{loading:t.loading,score:t.score,description:t.description}})],1),t.analyzeError?t._e():s("div",{staticClass:"aioseo-seo-site-score-recommendations"},[s("div",{staticClass:"critical"},[s("span",{staticClass:"round red"},[t._v(t._s(t.summary.critical||0))]),t._v(" "+t._s(t.strings.criticalIssues)+" ")]),s("div",{staticClass:"recommended"},[s("span",{staticClass:"round blue"},[t._v(t._s(t.summary.recommended||0))]),t._v(" "+t._s(t.strings.recommendedImprovements)+" ")]),s("div",{staticClass:"good"},[s("span",{staticClass:"round green"},[t._v(t._s(t.summary.good||0))]),t._v(" "+t._s(t.strings.goodResults)+" ")]),t.$allowed("aioseo_seo_analysis_settings")?s("div",{staticClass:"links"},[s("a",{attrs:{href:t.$aioseo.urls.aio.seoAnalysis}},[t._v(t._s(t.strings.completeSiteAuditChecklist))]),s("a",{staticClass:"no-underline",attrs:{href:t.$aioseo.urls.aio.seoAnalysis}},[t._v("\u2192")])]):t._e()]),t.analyzeError?s("div",{staticClass:"analyze-errors"},[s("h3",[t._v(t._s(t.strings.anErrorOccurred))]),t._v(" "+t._s(t.getError)+" ")]):t._e()])},X=[];const J={components:{CoreSiteScore:V},mixins:[$],props:{score:Number,loading:Boolean,summary:{type:Object,default(){return{}}}},data(){return{strings:{anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td)}}},computed:r(o({},c(["analyzeError"])),{getError(){switch(this.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.__("We were unable to parse the content for this site.",this.$td);case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzeError}})},u={};var tt=n(J,Q,X,!1,st,null,null,null);function st(t){for(let i in u)this[i]=u[i]}var it=function(){return tt.exports}(),et=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-seo-site-score"},[t.options.general.licenseKey?t._e():s("core-blur",[s("core-site-score-dashboard",{attrs:{score:85,description:t.description}})],1),t.options.general.licenseKey?t._e():s("div",{staticClass:"aioseo-seo-site-score-cta"},[s("a",{attrs:{href:t.$aioseo.urls.aio.settings}},[t._v(t._s(t.strings.enterLicenseKey))]),t._v(" "+t._s(t.strings.toSeeYourSiteScore)+" ")]),t.options.general.licenseKey?s("core-site-score-dashboard",{attrs:{score:t.internalOptions.internal.siteAnalysis.score,description:t.description,loading:t.analyzing,summary:t.getSummary}}):t._e()],1)},ot=[];const rt={components:{CoreBlur:T,CoreSiteScoreDashboard:it},mixins:[$],computed:r(o(o({},c(["internalOptions","options","analyzing"])),v(["goodCount","recommendedCount","criticalCount"])),{getSummary(){return{recommended:this.recommendedCount(),critical:this.criticalCount(),good:this.goodCount()}}}),methods:r(o({},f(["saveConnectToken","runSiteAnalyzer"])),{openPopup(t){R(t,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(t){return this.saveConnectToken(t.token)},closedCallback(t){t&&this.runSiteAnalyzer(),this.$store.commit("analyzing",!0)}}),mounted(){!this.internalOptions.internal.siteAnalysis.score&&this.options.general.licenseKey&&(this.$store.commit("analyzing",!0),this.runSiteAnalyzer())}},_={};var nt=n(rt,et,ot,!1,at,null,null,null);function at(t){for(let i in _)this[i]=_[i]}var ct=function(){return nt.exports}(),lt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("svg",{staticClass:"aioseo-svg-clipboard-checkmark",attrs:{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.29 4.66668H22.1667C23.45 4.66668 24.5 5.71668 24.5 7.00001V23.3333C24.5 24.6167 23.45 25.6667 22.1667 25.6667H5.83333C5.67 25.6667 5.51833 25.655 5.36667 25.6317C4.91167 25.5383 4.50333 25.305 4.18833 24.99C3.97833 24.7683 3.80333 24.5233 3.68667 24.2433C3.57 23.9633 3.5 23.6483 3.5 23.3333V7.00001C3.5 6.67334 3.57 6.37001 3.68667 6.10168C3.80333 5.82168 3.97833 5.56501 4.18833 5.35501C4.50333 5.04001 4.91167 4.80668 5.36667 4.71334C5.51833 4.67834 5.67 4.66668 5.83333 4.66668H10.71C11.2 3.31334 12.4833 2.33334 14 2.33334C15.5167 2.33334 16.8 3.31334 17.29 4.66668ZM19.355 10.01L21 11.6667L11.6667 21L7 16.3334L8.645 14.6884L11.6667 17.6984L19.355 10.01ZM14 4.37501C14.4783 4.37501 14.875 4.77168 14.875 5.25001C14.875 5.72834 14.4783 6.12501 14 6.12501C13.5217 6.12501 13.125 5.72834 13.125 5.25001C13.125 4.77168 13.5217 4.37501 14 4.37501ZM5.83333 23.3333H22.1667V7.00001H5.83333V23.3333Z",fill:"currentColor"}})])},dt=[];const ut={},m={};var _t=n(ut,lt,dt,!1,mt,null,null,null);function mt(t){for(let i in m)this[i]=m[i]}var pt=function(){return _t.exports}(),ht=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("svg",{staticClass:"aioseo-location-pin",attrs:{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9999 2.33331C17.8616 2.33331 20.9999 5.47165 20.9999 9.33331C20.9999 14.5833 13.9999 22.1666 13.9999 22.1666C13.9999 22.1666 6.99992 14.5833 6.99992 9.33331C6.99992 5.47165 10.1383 2.33331 13.9999 2.33331ZM22.1666 25.6666V23.3333H5.83325V25.6666H22.1666ZM9.33325 9.33331C9.33325 6.75498 11.4216 4.66665 13.9999 4.66665C16.5783 4.66665 18.6666 6.75498 18.6666 9.33331C18.6666 11.8183 16.2399 15.7033 13.9999 18.5616C11.7599 15.715 9.33325 11.8183 9.33325 9.33331ZM11.6666 9.33331C11.6666 8.04998 12.7166 6.99998 13.9999 6.99998C15.2833 6.99998 16.3333 8.04998 16.3333 9.33331C16.3333 10.6166 15.2949 11.6666 13.9999 11.6666C12.7166 11.6666 11.6666 10.6166 11.6666 9.33331Z",fill:"currentColor"}})])},gt=[];const vt={},p={};var ft=n(vt,ht,gt,!1,$t,null,null,null);function $t(t){for(let i in p)this[i]=p[i]}var Ct=function(){return ft.exports}(),St=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("svg",{staticClass:"aioseo-title-and-meta",attrs:{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.75 4.08334L21 2.33334L19.25 4.08334L17.5 2.33334L15.75 4.08334L14 2.33334L12.25 4.08334L10.5 2.33334L8.75 4.08334L7 2.33334L5.25 4.08334L3.5 2.33334V25.6667L5.25 23.9167L7 25.6667L8.75 23.9167L10.5 25.6667L12.25 23.9167L14 25.6667L15.75 23.9167L17.5 25.6667L19.25 23.9167L21 25.6667L22.75 23.9167L24.5 25.6667V2.33334L22.75 4.08334ZM22.1667 22.2717H5.83333V5.72833H22.1667V22.2717ZM21 17.5H7V19.8333H21V17.5ZM7 12.8333H21V15.1667H7V12.8333ZM21 8.16668H7V10.5H21V8.16668Z",fill:"currentColor"}})])},kt=[];const yt={},h={};var wt=n(yt,St,kt,!1,bt,null,null,null);function bt(t){for(let i in h)this[i]=h[i]}var xt=function(){return wt.exports}(),At=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-dashboard"},[s("core-main",{attrs:{"page-name":t.strings.pageName,"show-tabs":!1,"show-save-button":!1}},[s("div",[t.settings.showSetupWizard&&t.$allowed("aioseo_setup_wizard")?s("div",{staticClass:"dashboard-getting-started"},[s("core-getting-started")],1):t._e(),s("grid-row",[s("grid-column",{attrs:{md:"6"}},[t.$aioseo.setupWizard.isCompleted?t._e():s("core-card",{attrs:{slug:"dashboardSeoSetup","header-text":t.strings.seoSetup}},[s("core-seo-setup")],1),s("core-card",{attrs:{slug:"dashboardOverview","header-text":t.strings.seoOverview}},[s("core-overview")],1),t.quickLinks.length>0?s("grid-row",[s("grid-column",[s("div",{staticClass:"aioseo-quicklinks-title"},[t._v(" "+t._s(t.strings.quicklinks)+" "),s("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.quicklinksTooltip)+" ")]},proxy:!0}],null,!1,1392699054)},[s("svg-circle-question-mark")],1)],1)]),t._l(t.quickLinks,function(e,a){return s("grid-column",{key:a,staticClass:"aioseo-quicklinks-cards",attrs:{lg:"6"}},[s("core-feature-card",{attrs:{feature:e,"can-activate":!1,"can-manage":t.$allowed(e.access),"static-card":""},scopedSlots:t._u([{key:"title",fn:function(){return[s(e.icon,{tag:"component"}),t._v(" "+t._s(e.name)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(e.description)+" ")]},proxy:!0}],null,!0)})],1)})],2):t._e()],1),s("grid-column",{attrs:{md:"6"}},[s("core-card",{attrs:{slug:"dashboardSeoSiteScore","header-text":t.strings.seoSiteScore}},[s("core-seo-site-score")],1),s("core-card",{staticClass:"dashboard-notifications",attrs:{slug:"dashboardNotifications"},scopedSlots:t._u([{key:"header",fn:function(){return[t.notificationsCount?s("div",{staticClass:"notifications-count"},[t._v(" ("+t._s(t.notificationsCount)+") ")]):t._e(),s("div",[t._v(t._s(t.notificationTitle))]),t.dismissed?s("a",{staticClass:"show-dismissed-notifications",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.dismissed=!1}}},[t._v(t._s(t.strings.activeNotifications))]):t._e()]},proxy:!0}])},[s("core-notification-cards",{attrs:{notifications:t.filteredNotifications,dismissedCount:t.dismissedNotificationsCount},on:{"toggle-dismissed":function(e){t.dismissed=!t.dismissed}},scopedSlots:t._u([{key:"no-notifications",fn:function(){return[s("div",{staticClass:"no-dashboard-notifications"},[s("div",[t._v(" "+t._s(t.strings.noNewNotificationsThisMoment)+" ")]),t.dismissedNotificationsCount?s("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.dismissed=!0}}},[t._v(t._s(t.strings.seeAllDismissedNotifications))]):t._e()])]},proxy:!0}])}),t.filteredNotifications.length&&(!t.dismissed||3<t.filteredNotifications.length)?s("div",{staticClass:"notification-footer"},[s("div",{staticClass:"more-notifications"},[t.notifications.length>t.visibleNotifications?[s("a",{attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleNotifications.apply(null,arguments)}}},[t._v(t._s(t.moreNotifications))]),s("a",{staticClass:"no-underline",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleNotifications.apply(null,arguments)}}},[t._v("\u2192")])]:t._e()],2),t.dismissed?t._e():s("div",{staticClass:"dismiss-all"},[t.notifications.length?s("a",{staticClass:"dismiss",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.processDismissAllNotifications.apply(null,arguments)}}},[t._v(t._s(t.strings.dismissAll))]):t._e()])]):t._e()],1),s("core-card",{staticClass:"dashboard-support",attrs:{slug:"dashboardSupport","header-text":t.strings.support}},t._l(t.supportOptions,function(e,a){return s("div",{key:a,staticClass:"aioseo-settings-row"},[s("a",{attrs:{href:e.link,target:e.blank?"_blank":null}},[s(e.icon,{tag:"component"}),t._v(" "+t._s(e.text)+" ")],1)])}),0),t.isUnlicensed?s("cta",{staticClass:"dashboard-cta",attrs:{type:3,floating:!1,"cta-link":t.$links.utmUrl("dashboard-cta"),"feature-list":t.$constants.UPSELL_FEATURE_LIST,"button-text":t.strings.ctaButton,"learn-more-link":t.$links.getUpsellUrl("dashboard-cta",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeaderText)+" ")]},proxy:!0}],null,!1,2059824803)}):t._e()],1)],1)],1)])],1)},Lt=[];const Nt={components:{CoreCard:x,CoreFeatureCard:A,CoreGettingStarted:E,CoreMain:M,CoreNotificationCards:O,CoreOverview:z,CoreSeoSetup:U,CoreSeoSiteScore:ct,CoreTooltip:H,Cta:P,GridColumn:D,GridRow:G,SvgBook:I,SvgBuild:q,SvgCircleQuestionMark:B,SvgClipboardCheckmark:pt,SvgHistory:F,SvgLinkAssistant:L,SvgLocationPin:Ct,SvgMessage:W,SvgRedirect:j,SvgRocket:K,SvgShare:Z,SvgSitemapsPro:N,SvgTitleAndMeta:xt,SvgVideoCamera:Y},mixins:[b],data(){return{dismissed:!1,visibleNotifications:3,strings:{pageName:this.$t.__("Dashboard",this.$td),noNewNotificationsThisMoment:this.$t.__("There are no new notifications at this moment.",this.$td),seeAllDismissedNotifications:this.$t.__("See all dismissed notifications.",this.$td),seoSiteScore:this.$t.__("SEO Site Score",this.$td),seoOverview:this.$t.sprintf(this.$t.__("%1$s Overview",this.$td),"AIOSEO"),seoSetup:this.$t.__("SEO Setup",this.$td),support:this.$t.__("Support",this.$td),readSeoUserGuide:this.$t.sprintf(this.$t.__("Read the %1$s user guide",this.$td),"All in One SEO"),accessPremiumSupport:this.$t.__("Access our Premium Support",this.$td),viewChangelog:this.$t.__("View the Changelog",this.$td),watchVideoTutorials:this.$t.__("Watch video tutorials",this.$td),gettingStarted:this.$t.__("Getting started? Read the Beginners Guide",this.$td),quicklinks:this.$t.__("Quicklinks",this.$td),quicklinksTooltip:this.$t.__("You can use these quicklinks to quickly access our settings pages to adjust your site's SEO settings.",this.$td),searchAppearance:this.$t.__("Search Appearance",this.$td),manageSearchAppearance:this.$t.__("Configure how your website content will look in Google, Bing and other search engines.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),manageSeoAnalysis:this.$t.__("Check how your site scores with our SEO analyzer and compare against your competitor's site.",this.$td),localSeo:this.$t.__("Local SEO",this.$td),manageLocalSeo:this.$t.__("Improve local SEO rankings with schema for business address, open hours, contact, and more.",this.$td),socialNetworks:this.$t.__("Social Networks",this.$td),manageSocialNetworks:this.$t.__("Setup Open Graph for Facebook, Twitter, etc. to show the right content / thumbnail preview.",this.$td),tools:this.$t.__("Tools",this.$td),manageTools:this.$t.__("Fine-tune your site with our powerful tools including Robots.txt editor, import/export and more.",this.$td),sitemap:this.$t.__("Sitemaps",this.$td),manageSitemap:this.$t.__("Manage all of your sitemap settings, including XML, Video, News and more.",this.$td),linkAssistant:this.$t.__("Link Assistant",this.$td),manageLinkAssistant:this.$t.__("Manage existing links, get relevant suggestions for adding internal links to older content, discover orphaned posts and more.",this.$td),redirects:this.$t.__("Redirection Manager",this.$td),manageRedirects:this.$t.__("Easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks.",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Get more features in %1$s %2$s:",this.$td),"AIOSEO","Pro"),ctaButton:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Save %2$s",this.$td),"Pro",this.$constants.DISCOUNT_PERCENTAGE),dismissAll:this.$t.__("Dismiss All",this.$td),relaunchSetupWizard:this.$t.__("Relaunch Setup Wizard",this.$td)}}},computed:r(o(o({},v(["isUnlicensed"])),c(["settings"])),{moreNotifications(){return this.$t.sprintf(this.$t.__("You have %1$s more notifications",this.$td),this.remainingNotificationsCount)},remainingNotificationsCount(){return this.notifications.length-this.visibleNotifications},filteredNotifications(){return[...this.notifications].splice(0,this.visibleNotifications)},supportOptions(){const t=[{icon:"svg-book",text:this.strings.readSeoUserGuide,link:this.$links.utmUrl("dashboard-support-box","user-guide","doc-categories/getting-started/"),blank:!0},{icon:"svg-message",text:this.strings.accessPremiumSupport,link:this.$links.utmUrl("dashboard-support-box","premium-support","contact/"),blank:!0},{icon:"svg-history",text:this.strings.viewChangelog,link:this.$links.utmUrl("dashboard-support-box","changelog","changelog/"),blank:!0},{icon:"svg-book",text:this.strings.gettingStarted,link:this.$links.utmUrl("dashboard-support-box","beginners-guide","docs/quick-start-guide/"),blank:!0}];return this.$allowed("aioseo_setup_wizard")?this.settings.showSetupWizard?t:t.concat({icon:"svg-rocket",text:this.strings.relaunchSetupWizard,link:this.$aioseo.urls.aio.wizard,blank:!1}):t},quickLinks(){return[{icon:"svg-title-and-meta",description:this.strings.manageSearchAppearance,name:this.strings.searchAppearance,manageUrl:this.$aioseo.urls.aio.searchAppearance,access:"aioseo_search_appearance_settings"},{icon:"svg-clipboard-checkmark",description:this.strings.manageSeoAnalysis,name:this.strings.seoAnalysis,manageUrl:this.$aioseo.urls.aio.seoAnalysis,access:"aioseo_seo_analysis_settings"},{icon:"svg-location-pin",description:this.strings.manageLocalSeo,name:this.strings.localSeo,manageUrl:this.$aioseo.urls.aio.localSeo,access:"aioseo_local_seo_settings"},{icon:"svg-share",description:this.strings.manageSocialNetworks,name:this.strings.socialNetworks,manageUrl:this.$aioseo.urls.aio.socialNetworks,access:"aioseo_social_networks_settings"},{icon:"svg-build",description:this.strings.manageTools,name:this.strings.tools,manageUrl:this.$aioseo.urls.aio.tools,access:"aioseo_tools_settings"},{icon:"svg-sitemaps-pro",description:this.strings.manageSitemap,name:this.strings.sitemap,manageUrl:this.$aioseo.urls.aio.sitemaps,access:"aioseo_sitemap_settings"},{icon:"svg-link-assistant",description:this.strings.manageLinkAssistant,name:this.strings.linkAssistant,manageUrl:this.$aioseo.urls.aio.linkAssistant,access:"aioseo_link_assistant_settings"},{icon:"svg-redirect",description:this.strings.manageRedirects,name:this.strings.redirects,manageUrl:this.$aioseo.urls.aio.redirects,access:"aioseo_redirects_settings"}].filter(t=>this.$allowed(t.access))}}),methods:r(o({},f(["dismissNotifications"])),{processDismissAllNotifications(){const t=[];this.notifications.forEach(i=>{t.push(i.slug)}),this.dismissNotifications(t)}})},g={};var Et=n(Nt,At,Lt,!1,Mt,null,null,null);function Mt(t){for(let i in g)this[i]=g[i]}var Es=function(){return Et.exports}();export{Es as default};
