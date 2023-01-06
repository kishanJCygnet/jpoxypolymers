import{a as o}from"./index.cf8251b7.js";import{B as r}from"./Checkbox.93944087.js";import{B as i}from"./RadioToggle.18d51233.js";import{B as c}from"./Textarea.2db5f910.js";import{C as l,g as d}from"./index.8e492c68.js";import{C as p}from"./Card.d96e1c99.js";import{C as u}from"./ExcludePosts.37a51fb8.js";import{C as g}from"./HtmlTagsEditor.dd22df62.js";import{C as h}from"./PostTypeOptions.df14d3b7.js";import{C as _}from"./RobotsMeta.43a238ee.js";import{C as m}from"./SettingsRow.8a127375.js";import{C as v}from"./Tooltip.060399ab.js";import{S as f}from"./External.1af3387c.js";import{n as y}from"./vueComponentNormalizer.58b0a173.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.0e73c33c.js";import"./Checkmark.627d69a4.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./constants.01c2b898.js";import"./portal-vue.esm.272b3133.js";import"./Slide.8aaa5049.js";import"./WpTable.9fcf1d36.js";import"./attachments.366ec28e.js";import"./cleanForSlug.61ba6611.js";import"./JsonValues.08065e69.js";import"./AddPlus.a5cc22bc.js";import"./Editor.0d4dfada.js";import"./UnfilteredHtml.081ff59f.js";import"./HighlightToggle.af16c79b.js";import"./Radio.fa2678ef.js";import"./Row.dfea53f7.js";var $=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aioseo-search-appearance-advanced"},[t("core-card",{attrs:{slug:"searchAdvanced","header-text":e.strings.advanced}},[t("core-settings-row",{attrs:{name:e.strings.globalRobotsMeta},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-robots-meta",{attrs:{options:e.options.searchAppearance.advanced.globalRobotsMeta,global:""}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.sitelinks,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:e.strings.sitelinks,options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.sitelinks,callback:function(s){e.$set(e.options.searchAppearance.advanced,"sitelinks",s)},expression:"options.searchAppearance.advanced.sitelinks"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.sitelinksDescription)+" ")])]},proxy:!0}])}),e.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")?t("core-settings-row",{attrs:{name:e.strings.autogenerateDescriptions,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"autogenerateDescriptions",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.deprecated.searchAppearance.advanced.autogenerateDescriptions,callback:function(s){e.$set(e.options.deprecated.searchAppearance.advanced,"autogenerateDescriptions",s)},expression:"options.deprecated.searchAppearance.advanced.autogenerateDescriptions"}})]},proxy:!0}],null,!1,3425659337)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("useContentForAutogeneratedDescriptions")&&(!e.internalOptions.internal.deprecatedOptions.includes("autogenerateDescriptions")||e.options.deprecated.searchAppearance.advanced.autogenerateDescriptions)?t("core-settings-row",{attrs:{name:e.strings.useContentForAutogeneratedDescriptions,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useContentForAutogeneratedDescriptions",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions,callback:function(s){e.$set(e.options.deprecated.searchAppearance.advanced,"useContentForAutogeneratedDescriptions",s)},expression:"options.deprecated.searchAppearance.advanced.useContentForAutogeneratedDescriptions"}})]},proxy:!0}],null,!1,1103360809)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.noPaginationForCanonical,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"noPaginationForCanonical",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.noPaginationForCanonical,callback:function(s){e.$set(e.options.searchAppearance.advanced,"noPaginationForCanonical",s)},expression:"options.searchAppearance.advanced.noPaginationForCanonical"}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.useKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useKeywords",s)},expression:"options.searchAppearance.advanced.useKeywords"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useKeywordsDescription)+" ")])]},proxy:!0}])}),e.options.searchAppearance.advanced.useKeywords?t("core-settings-row",{attrs:{name:e.strings.useCategoriesForMetaKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useCategoriesForMetaKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useCategoriesForMetaKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useCategoriesForMetaKeywords",s)},expression:"options.searchAppearance.advanced.useCategoriesForMetaKeywords"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useCategoriesDescription)+" ")])]},proxy:!0}],null,!1,1182210491)}):e._e(),e.options.searchAppearance.advanced.useKeywords?t("core-settings-row",{attrs:{name:e.strings.useTagsForMetaKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useTagsForMetaKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.useTagsForMetaKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"useTagsForMetaKeywords",s)},expression:"options.searchAppearance.advanced.useTagsForMetaKeywords"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.useTagsDescription)+" ")])]},proxy:!0}],null,!1,980507244)}):e._e(),e.options.searchAppearance.advanced.useKeywords?t("core-settings-row",{attrs:{name:e.strings.dynamicallyGenerateKeywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"dynamicallyGenerateKeywords",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.dynamicallyGenerateKeywords,callback:function(s){e.$set(e.options.searchAppearance.advanced,"dynamicallyGenerateKeywords",s)},expression:"options.searchAppearance.advanced.dynamicallyGenerateKeywords"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.dynamicallyGenerateDescription)+" ")])]},proxy:!0}],null,!1,3269411336)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("descriptionFormat")?t("core-settings-row",{attrs:{id:"description-format",name:e.strings.descriptionFormat,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"description-format",attrs:{"line-numbers":!1,single:"","show-tags-description":!1,"tags-context":"descriptionFormat","default-tags":["description","site_title","tagline"],"show-all-tags-link":!0},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.emptyString)+" ")]},proxy:!0}],null,!1,115256282),model:{value:e.options.deprecated.searchAppearance.global.descriptionFormat,callback:function(s){e.$set(e.options.deprecated.searchAppearance.global,"descriptionFormat",s)},expression:"options.deprecated.searchAppearance.global.descriptionFormat"}}),e.options.deprecated.searchAppearance.global.descriptionFormat.includes("#description")?e._e():t("core-alert",{staticClass:"description-notice",attrs:{type:"red"}},[e._v(" "+e._s(e.strings.descriptionTagRequired)+" ")])]},proxy:!0}],null,!1,3789774672)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.runShortcodes,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"runShortcodes",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.searchAppearance.advanced.runShortcodes,callback:function(s){e.$set(e.options.searchAppearance.advanced,"runShortcodes",s)},expression:"options.searchAppearance.advanced.runShortcodes"}}),e.options.searchAppearance.advanced.runShortcodes?t("core-alert",{staticClass:"run-shortcodes-alert",attrs:{type:"yellow"},domProps:{innerHTML:e._s(e.strings.runShortcodesWarning)}}):e._e(),t("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.runShortcodesDescription)}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.pagedFormat,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"paged-format",attrs:{"line-numbers":!1,single:"","tags-context":"pagedFormat","default-tags":["page_number"],"show-all-tags-link":!1},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.emptyString)+" ")]},proxy:!0}]),model:{value:e.options.searchAppearance.advanced.pagedFormat,callback:function(s){e.$set(e.options.searchAppearance.advanced,"pagedFormat",s)},expression:"options.searchAppearance.advanced.pagedFormat"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.pagedFormatDescription)+" ")])]},proxy:!0}])}),e.internalOptions.internal.deprecatedOptions.includes("excludePosts")?t("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:e.strings.excludePostsPages,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-exclude-posts",{attrs:{options:e.options.deprecated.searchAppearance.advanced,type:"posts"}})]},proxy:!0}],null,!1,4134150415)}):e._e(),e.internalOptions.internal.deprecatedOptions.includes("excludeTerms")?t("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:e.strings.excludeTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-exclude-posts",{attrs:{options:e.options.deprecated.searchAppearance.advanced,type:"terms"}})]},proxy:!0}],null,!1,1691116537)}):e._e()],1),t("core-card",{staticClass:"aioseo-rss-content-advanced",attrs:{slug:"searchAdvancedCrawlCleanup",toggles:e.options.searchAppearance.advanced.crawlCleanup.enable},scopedSlots:e._u([{key:"header",fn:function(){return[t("base-toggle",{model:{value:e.options.searchAppearance.advanced.crawlCleanup.enable,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"enable",s)},expression:"options.searchAppearance.advanced.crawlCleanup.enable"}}),t("span",[e._v(e._s(e.strings.crawlCleanup))]),e.options.searchAppearance.advanced.crawlCleanup.enable?e._e():t("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.crawlCleanupDescription)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0))}})]},proxy:!0}],null,!1,3235161590)},[t("svg-circle-question-mark")],1)]},proxy:!0}])},[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.crawlCleanupDescription)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0))}})]),t("core-settings-row",{attrs:{name:e.strings.removeUnrecognizedQueryArgs,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"removeUnrecognizedQueryArgs",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"removeUnrecognizedQueryArgs",s)},expression:"options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs"}}),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?e._e():t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.removeUnrecognizedQueryArgsDescription)+" "+e._s(e.strings.removeUnrecognizedQueryArgsAlert)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?t("core-alert",{attrs:{type:"yellow"}},[e._v(" "+e._s(e.strings.removeUnrecognizedQueryArgsAlert)+" ")]):e._e()]},proxy:!0}])}),e.options.searchAppearance.advanced.crawlCleanup.removeUnrecognizedQueryArgs?t("core-settings-row",{attrs:{name:e.strings.allowedQueryArgs},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-textarea",{attrs:{minHeight:200,maxHeight:200},model:{value:e.options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup,"allowedQueryArgs",s)},expression:"options.searchAppearance.advanced.crawlCleanup.allowedQueryArgs"}}),t("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.allowedQueryArgsDescription)}})]},proxy:!0}],null,!1,4112819009)}):e._e(),t("core-settings-row",{attrs:{id:"crawl-content-global-feed",name:e.strings.globalFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"global",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.global,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"global",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.global"}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.global?t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.globalFeedDescription)+" "+e._s(e.strings.disableGlobalFeedAlert)+" "),t("div",{staticClass:"rss-link"},[t("a",{attrs:{href:e.$aioseo.urls.feeds.global,target:"_blank"}},[e._v(e._s(e.strings.openYourRssFeed))]),t("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.global,target:"_blank"}},[e._v("\xA0"),t("svg-external")],1)])]):e._e(),e.options.searchAppearance.advanced.crawlCleanup.feeds.global?e._e():t("core-alert",{attrs:{type:"red"}},[e._v(" "+e._s(e.strings.disableGlobalFeedAlert)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.globalCommentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"globalComments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"globalComments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.globalComments"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.globalCommentsFeedDescription)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.globalComments?t("div",{staticClass:"aioseo-description"},[t("a",{attrs:{href:e.$aioseo.urls.feeds.globalComments,target:"_blank"}},[e._v(e._s(e.strings.openYourCommentsRssFeed))]),t("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.globalComments,target:"_blank"}},[e._v("\xA0"),t("svg-external")],1)]):e._e()]},proxy:!0}])}),e.$aioseo.data.staticBlogPage?t("core-settings-row",{attrs:{name:e.strings.staticBlogPageFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"staticBlogPage",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"staticBlogPage",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.staticBlogPageFeedDescription)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.staticBlogPage?t("div",{staticClass:"aioseo-description"},[t("a",{attrs:{href:e.$aioseo.urls.feeds.staticBlogPage,target:"_blank"}},[e._v(e._s(e.strings.openYourStaticBlogPageFeed))]),t("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.staticBlogPage,target:"_blank"}},[e._v("\xA0"),t("svg-external")],1)]):e._e()]},proxy:!0}],null,!1,2073575804)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.authorsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"authors",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.authors,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"authors",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.authors"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.authorsFeedDescription)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.postCommentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"postComments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.postComments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"postComments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.postComments"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.postCommentsFeedDescription)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.searchFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"search",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.search,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"search",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.search"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.searchFeedDescription)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.attachmentsFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"attachments",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.attachments,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"attachments",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.attachments"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.attachmentsFeedDescription)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.paginatedFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"paginated",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.paginated,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"paginated",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.paginated"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.paginatedFeedDescription)+" ")])]},proxy:!0}])}),e.$aioseo.postData.archives.length?t("core-settings-row",{attrs:{name:e.strings.postTypesFeed},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds.archives,"all",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.archives.all"}},[e._v(" "+e._s(e.strings.includeAllPostTypes)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.archives.all?e._e():t("core-post-type-options",{attrs:{options:e.options.searchAppearance.advanced.crawlCleanup.feeds,type:"archives"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectPostTypes)+" ")])]},proxy:!0}],null,!1,1023774212)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.taxonomiesFeed},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies,"all",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all"}},[e._v(" "+e._s(e.strings.includeAllTaxonomies)+" ")]),e.options.searchAppearance.advanced.crawlCleanup.feeds.taxonomies.all?e._e():t("core-post-type-options",{attrs:{options:e.options.searchAppearance.advanced.crawlCleanup.feeds,type:"taxonomies"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectTaxonomies)+" ")])]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.atomFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"atom",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.atom,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"atom",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.atom"}}),t("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.atomFeedDescription)}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.atom?t("div",{staticClass:"aioseo-description"},[t("a",{attrs:{href:e.$aioseo.urls.feeds.atom,target:"_blank"}},[e._v(e._s(e.strings.openYourAtomFeed))]),t("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.atom,target:"_blank"}},[e._v("\xA0"),t("svg-external")],1)]):e._e()]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.rdfFeed,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"rdf",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.searchAppearance.advanced.crawlCleanup.feeds.rdf,callback:function(s){e.$set(e.options.searchAppearance.advanced.crawlCleanup.feeds,"rdf",s)},expression:"options.searchAppearance.advanced.crawlCleanup.feeds.rdf"}}),t("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.rdfFeedDescription)}}),e.options.searchAppearance.advanced.crawlCleanup.feeds.rdf?t("div",{staticClass:"aioseo-description"},[t("a",{attrs:{href:e.$aioseo.urls.feeds.rdf,target:"_blank"}},[e._v(e._s(e.strings.openYourRdfFeed))]),t("a",{staticClass:"no-underline",attrs:{href:e.$aioseo.urls.feeds.rdf,target:"_blank"}},[e._v("\xA0"),t("svg-external")],1)]):e._e()]},proxy:!0}])})],1)],1)},b=[];const A={components:{BaseCheckbox:r,BaseRadioToggle:i,BaseTextarea:c,CoreAlert:l,CoreCard:p,CoreExcludePosts:u,CoreHtmlTagsEditor:g,CorePostTypeOptions:h,CoreRobotsMeta:_,CoreSettingsRow:m,CoreTooltip:v,SvgCircleQuestionMark:d,SvgExternal:f},data(){return{emptyString:"",strings:{advanced:this.$t.__("Advanced Settings",this.$td),globalRobotsMeta:this.$t.__("Global Robots Meta",this.$td),noIndexEmptyCat:this.$t.__("Noindex Empty Category and Tag Archives",this.$td),removeStopWords:this.$t.__("Remove Stopwords from Permalinks",this.$td),autogenerateDescriptions:this.$t.__("Autogenerate Descriptions",this.$td),useContentForAutogeneratedDescriptions:this.$t.__("Use Content for Autogenerated Descriptions",this.$td),runShortcodes:this.$t.__("Run Shortcodes",this.$td),runShortcodesDescription:this.$t.sprintf(this.$t.__("This option allows you to control whether %1$s should parse shortcodes when generating data such as the SEO title/meta description. Enabling this setting may cause conflicts with third-party plugins/themes. %2$s",this.$td),"AIOSEO",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),runShortcodesWarning:this.$t.sprintf(this.$t.__("NOTE: Enabling this setting may cause conflicts with third-party plugins/themes. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"runningShortcodes",!0)),noPaginationForCanonical:this.$t.__("No Pagination for Canonical URLs",this.$td),useKeywords:this.$t.__("Use Meta Keywords",this.$td),useKeywordsDescription:this.$t.__("This option allows you to toggle the use of Meta Keywords throughout the whole of the site.",this.$td),useCategoriesForMetaKeywords:this.$t.__("Use Categories for Meta Keywords",this.$td),useCategoriesDescription:this.$t.__("Check this if you want your categories for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",this.$td),useTagsForMetaKeywords:this.$t.__("Use Tags for Meta Keywords",this.$td),removeUnrecognizedQueryArgs:this.$t.__("Remove Query Args",this.$td),removeUnrecognizedQueryArgsDescription:this.$t.__("Enable this option to remove any unrecognized query args from your site.",this.$td),removeUnrecognizedQueryArgsAlert:this.$t.__("This will help prevent search engines from crawling every variation of your pages with all the unrecognized query arguments. Only enable this if you understand exactly what it does as it can have a significant impact on your site.",this.$td),allowedQueryArgs:this.$t.__("Allowed Query Args",this.$td),allowedQueryArgsDescription:this.$t.sprintf(this.$t.__('Add any query args that you want to allow, one per line. You can also use regular expressions here for advanced use. All query args that are used by WordPress Core (e.g. "s" for search pages) are automatically whitelisted by default. %1$s',this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"crawlCleanup",!0)),useTagsDescription:this.$t.__("Check this if you want your tags for a given post used as the Meta Keywords for this post (in addition to any keywords you specify on the Edit Post screen).",this.$td),dynamicallyGenerateKeywords:this.$t.__("Dynamically Generate Meta Keywords",this.$td),dynamicallyGenerateDescription:this.$t.__("Check this if you want your keywords on your Posts page (set in WordPress under Settings, Reading, Front Page Displays) and your archive pages to be dynamically generated from the keywords of the posts showing on that page. If unchecked, it will use the keywords set in the edit page screen for the posts page.",this.$td),pagedFormat:this.$t.__("Paged Format",this.$td),pagedFormatDescription:this.$t.__("This string gets appended to the titles and descriptions of paginated pages (like term or archive pages).",this.$td),descriptionFormat:this.$t.__("Description Format",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),sitelinks:this.$t.__("Enable Sitelinks Search Box",this.$td),sitelinksDescription:this.$t.sprintf(this.$t.__("Choose whether %1$s should output the required schema markup that Google needs to generate a sitelinks search box.",this.$td),"AIOSEO"),descriptionTagRequired:this.$t.__("A Description tag is required in order to properly display your meta descriptions on your site.",this.$td),crawlCleanup:this.$t.__("Crawl Cleanup",this.$td),crawlCleanupDescription:this.$t.__("Removing unrecognized query arguments from URLs and disabling unnecessary RSS feeds can help save search engine crawl quota and speed up content indexing for larger sites. If you choose to disable any feeds, those feed links will automatically redirect to your homepage or applicable archive page.",this.$td),globalFeed:this.$t.__("Global RSS Feed",this.$td),globalFeedDescription:this.$t.__("The global RSS feed is how users subscribe to any new content that has been created on your site.",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),disableGlobalFeedAlert:this.$t.__("Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings.",this.$td),globalCommentsFeed:this.$t.__("Global Comments RSS Feed",this.$td),globalCommentsFeedDescription:this.$t.__("The global comments feed allows users to subscribe to any new comments added to your site.",this.$td),openYourCommentsRssFeed:this.$t.__("Open Your Comments RSS Feed",this.$td),staticBlogPageFeed:this.$t.__("Static Posts Page Feed",this.$td),staticBlogPageFeedDescription:this.$t.__("The static posts page feed allows users to subscribe to any new content added to your blog page.",this.$td),openYourStaticBlogPageFeed:this.$t.__("Open Your Static Posts Page RSS Feed",this.$td),authorsFeed:this.$t.__("Author Feeds",this.$td),authorsFeedDescription:this.$t.__("The authors feed allows your users to subscribe to any new content written by a specific author.",this.$td),postCommentsFeed:this.$t.__("Post Comment Feeds",this.$td),postCommentsFeedDescription:this.$t.__("The post comments feed allows your users to subscribe to any new comments on a specific page or post.",this.$td),searchFeed:this.$t.__("Search Feed",this.$td),searchFeedDescription:this.$t.__("The search feed description allows visitors to subscribe to your content based on a specific search term.",this.$td),attachmentsFeed:this.$t.__("Attachments Feed",this.$td),attachmentsFeedDescription:this.$t.__("The attachments feed allows users to subscribe to any changes to your site made to media file categories.",this.$td),postTypesFeed:this.$t.__("Post Type Archive Feeds",this.$td),includeAllPostTypes:this.$t.__("Include All Post Type Archives",this.$td),selectPostTypes:this.$t.__("Select which post type archives should include an RSS feed. This only applies to post types that include an archive page.",this.$td),taxonomiesFeed:this.$t.__("Taxonomy Feeds",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies should include an RSS feed.",this.$td),atomFeed:this.$t.__("Atom Feed",this.$td),atomFeedDescription:this.$t.sprintf(this.$t.__("This is a global feed of your site output in the Atom format. %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"http://www.atomenabled.org/",!0)),openYourAtomFeed:this.$t.__("Open Your Atom Feed",this.$td),rdfFeed:this.$t.__("RDF/RSS 1.0 Feed",this.$td),rdfFeedDescription:this.$t.sprintf(this.$t.__("This is a global feed of your site output in the RDF/RSS 1.0 format. %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,"https://web.resource.org/rss/1.0/",!0)),openYourRdfFeed:this.$t.__("Open Your RDF Feed",this.$td),paginatedFeed:this.$t.__("Paginated RSS Feeds",this.$td),paginatedFeedDescription:this.$t.__("The paginated RSS feeds are for any posts or pages that are paginated.",this.$td)}}},computed:{...o(["options","internalOptions"])}},n={};var C=y(A,$,b,!1,w,null,null,null);function w(e){for(let a in n)this[a]=n[a]}const ne=function(){return C.exports}();export{ne as default};
