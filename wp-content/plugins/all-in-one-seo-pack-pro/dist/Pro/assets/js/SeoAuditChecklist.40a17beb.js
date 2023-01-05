import{a as n,c,m as u}from"./vuex.esm.19624049.js";import{C as d}from"./Card.184c54d2.js";import{C as m}from"./Tabs.2c3e6ab7.js";import{C as p}from"./SeoSiteAnalysisResults.71bf9c8f.js";import{p as h}from"./popup.25df8419.js";import"./WpTable.61e73015.js";import{n as o}from"./vueComponentNormalizer.67c9b86e.js";import"./index.c630c4a6.js";import"./SaveChanges.68e73792.js";import{S as y}from"./SeoSiteScore.48a1cf92.js";import{C as g}from"./Blur.920c6287.js";import{C as f}from"./Index.517292a2.js";import{S as $}from"./Book.4f237719.js";import{C as v}from"./Tooltip.d723c3c3.js";import{S as C}from"./Refresh.b8058a80.js";import{S}from"./index.499c6591.js";import"./Caret.eeb84d06.js";import"./_commonjsHelpers.10c44588.js";import"./Slide.9538a421.js";import"./TruSeoScore.98a47fd6.js";import"./Information.be119534.js";import"./GoogleSearchPreview.5fb6bc89.js";import"./html.9a057d5c.js";import"./helpers.8308b279.js";import"./default-i18n.0e73c33c.js";import"./Gear.7c17fabe.js";import"./params.bea1a08d.js";import"./attachments.90c241a0.js";import"./cleanForSlug.652f2bfe.js";import"./isArrayLikeObject.44af21ce.js";import"./constants.e179df36.js";import"./Index.cb09fd7a.js";import"./client.90beecd8.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.18ed59c3.js";var b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-site-score-analyze"},[t.analyzeError?t._e():e("div",{staticClass:"aioseo-seo-site-score-score"},[e("core-site-score",{attrs:{loading:t.loading,score:t.score,description:t.description}})],1),t.analyzeError?t._e():e("div",{staticClass:"aioseo-seo-site-score-description"},[e("h2",[t._v(t._s(t.strings.yourOverallSiteScore))]),e("div",{domProps:{innerHTML:t._s(t.strings.goodResult)}}),e("div",{domProps:{innerHTML:t._s(t.strings.forBestResults)}}),e("div",{staticClass:"d-flex"},[e("svg-book"),e("a",{attrs:{href:t.$links.getDocUrl("ultimateGuide"),target:"_blank"}},[t._v(t._s(t.strings.readUltimateSeoGuide))])],1)]),t.analyzeError?e("div",{staticClass:"analyze-errors"},[e("h3",[t._v(t._s(t.strings.anErrorOccurred))]),e("span",{domProps:{innerHTML:t._s(t.getError)}})]):t._e()])},k=[];const z={components:{CoreSiteScore:f,SvgBook:$},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:{yourOverallSiteScore:this.$t.__("Your Overall Site Score",this.$td),goodResult:this.$t.sprintf(this.$t.__("A very good score is between %1$s%3$d and %4$d%2$s.",this.$td),"<strong>","</strong>",50,75),forBestResults:this.$t.sprintf(this.$t.__("For best results, you should strive for %1$s%3$d and above%2$s.",this.$td),"<strong>","</strong>",70),anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),readUltimateSeoGuide:this.$t.__("Read the Ultimate WordPress SEO Guide",this.$td)}}},computed:{...n(["analyzeError"]),getError(){switch(this.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzeError}}},i={};var A=o(z,b,k,!1,R,null,null,null);function R(t){for(let s in i)this[s]=i[s]}const O=function(){return A.exports}();var x=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-seo-site-score"},[t.licenseKey?t._e():e("core-blur",[e("core-site-score-analyze",{attrs:{score:85,description:t.description}})],1),t.licenseKey?t._e():e("div",{staticClass:"aioseo-seo-site-score-cta"},[e("a",{attrs:{href:t.$aioseo.urls.aio.settings}},[t._v(t._s(t.strings.enterLicenseKey))]),t._v(" "+t._s(t.strings.toSeeYourSiteScore)+" ")]),t.licenseKey?e("core-site-score-analyze",{attrs:{score:t.score,description:t.description,loading:t.analyzing,summary:t.getSummary}}):t._e()],1)},T=[];const E={components:{CoreBlur:g,CoreSiteScoreAnalyze:O},mixins:[y],data(){return{score:0}},watch:{"internalOptions.internal.siteAnalysis.score"(t){this.score=t}},computed:{...n(["internalOptions","options","analyzing"]),...c(["goodCount","recommendedCount","criticalCount","licenseKey"]),getSummary(){return{recommended:this.recommendedCount(),critical:this.criticalCount(),good:this.goodCount()}}},methods:{...u(["saveConnectToken","runSiteAnalyzer"]),openPopup(t){h(t,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(t){return this.saveConnectToken(t.token)},closedCallback(t){t&&this.runSiteAnalyzer(),this.$store.commit("analyzing",!0)}},mounted(){!this.internalOptions.internal.siteAnalysis.score&&this.licenseKey&&(this.$store.commit("analyzing",!0),this.runSiteAnalyzer()),this.score=this.internalOptions.internal.siteAnalysis.score}},a={};var I=o(E,x,T,!1,L,null,null,null);function L(t){for(let s in a)this[s]=a[s]}const G=function(){return I.exports}();var M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-seo-audit-checklist"},[e("core-card",{attrs:{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1}},[e("core-seo-site-score-analyze")],1),(t.$isPro&&t.licenseKey||t.internalOptions.internal.siteAnalysis.connectToken)&&t.internalOptions.internal.siteAnalysis.score?e("core-card",{attrs:{slug:"completeSeoChecklist"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.completeSeoChecklist))]),e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("span",{domProps:{innerHTML:t._s(t.strings.cardDescription)}})]},proxy:!0}],null,!1,712106145)},[e("svg-circle-question-mark")],1)]},proxy:!0},{key:"header-extra",fn:function(){return[e("base-button",{staticClass:"refresh-results",attrs:{type:"gray",size:"small",loading:t.analyzing},on:{click:t.refresh}},[e("svg-refresh"),t._v(" "+t._s(t.strings.refreshResults)+" ")],1)]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs.seoAuditChecklist,internal:"","skinny-tabs":""},on:{changed:t.processChangeTab},scopedSlots:t._u([{key:"md-tab",fn:function(_){var r=_.tab;return[e("span",{staticClass:"round",class:r.data.analyze.classColor},[t._v(" "+t._s(r.data.analyze.count||0)+" ")]),e("span",{staticClass:"label"},[t._v(t._s(r.label))])]}}],null,!1,1197247060)})]},proxy:!0}],null,!1,399875627)},[e("core-seo-site-analysis-results",{attrs:{section:t.settings.internalTabs.seoAuditChecklist,"all-results":t.getSiteAnalysisResults,"show-instructions":""}})],1):t._e()],1)},w=[];const D={components:{CoreCard:d,CoreMainTabs:m,CoreSeoSiteAnalysisResults:p,CoreSeoSiteScoreAnalyze:G,CoreTooltip:v,SvgRefresh:C,SvgCircleQuestionMark:S},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),cardDescription:this.$t.__("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",this.$td)+" "+this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzer",!0)}}},computed:{...n(["internalOptions","options","settings","analyzing"]),...c(["getSiteAnalysisResults","allItemsCount","criticalCount","recommendedCount","goodCount","licenseKey"]),tabs(){const t=this.internalOptions.internal.siteAnalysis;return[{slug:"all-items",name:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:t.score?this.allItemsCount():0}},{slug:"critical",name:this.$t.__("Important Issues",this.$td),analyze:{classColor:"red",count:t.score?this.criticalCount():0}},{slug:"recommended-improvements",name:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:t.score?this.recommendedCount():0}},{slug:"good-results",name:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:t.score?this.goodCount():0}}]}},methods:{...u(["changeTab","runSiteAnalyzer"]),processChangeTab(t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:"seoAuditChecklist",value:t}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.$store.commit("analyzing",!0),this.runSiteAnalyzer({refresh:!0})}}},l={};var P=o(D,M,w,!1,B,null,null,null);function B(t){for(let s in l)this[s]=l[s]}const Ct=function(){return P.exports}();export{Ct as default};
