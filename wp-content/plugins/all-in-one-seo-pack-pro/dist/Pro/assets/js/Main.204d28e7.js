import s from"./AdditionalInformation.1377b084.js";import p from"./Category.5c70cfcd.js";import a from"./Features.19ce0b17.js";import l from"./Import.27c6fbe4.js";import c from"./LicenseKey.0ebedcf5.js";import u from"./SearchAppearance.b5976751.js";import d from"./SmartRecommendations.b64bec42.js";import f from"./Success.aeded9e1.js";import _ from"./Welcome.7e066af3.js";import{e,a as i,b as h}from"./index.d229874d.js";import{n as S}from"./vueComponentNormalizer.58b0a173.js";import"./WpTable.d951bd0b.js";import"./constants.b5b5d9a1.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.0e73c33c.js";import"./attachments.5c790671.js";import"./cleanForSlug.554cc757.js";import"./index.2a1615d5.js";import"./client.b661b356.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.272b3133.js";import"./Image.a2b87617.js";import"./MaxCounts.5a7ca2fd.js";import"./Img.30b01953.js";import"./Phone.7552a536.js";import"./RadioToggle.d0794ab7.js";import"./SocialProfiles.f47b86cf.js";import"./Checkbox.732cf0d4.js";import"./Checkmark.c0183939.js";import"./Textarea.92b32df4.js";import"./SettingsRow.0d51ff21.js";import"./Row.89c6bb85.js";import"./Plus.d9c7f9ce.js";import"./Header.ffe31ebf.js";import"./Logo.97285076.js";import"./Steps.4b9519ed.js";import"./HighlightToggle.ad3182d2.js";import"./Radio.8fe23bef.js";import"./HtmlTagsEditor.8c2f0897.js";import"./Editor.ab65d1f4.js";import"./UnfilteredHtml.44261c87.js";import"./ImageSeo.8572f954.js";import"./NewsChannel.32f1527e.js";import"./ProBadge.6745e7cb.js";import"./popup.25df8419.js";import"./params.bea1a08d.js";import"./GoogleSearchPreview.42ce749d.js";import"./PostTypeOptions.3d4dfd50.js";import"./Tooltip.a36a3967.js";import"./Book.942a8cf4.js";import"./VideoCamera.fa20d595.js";var g=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r(t.$route.name,{tag:"component"})},y=[];const v={components:{AdditionalInformation:s,Category:p,Features:a,Import:l,LicenseKey:c,SearchAppearance:u,SmartRecommendations:d,Success:f,Welcome:_},computed:{...e("wizard",["shouldShowImportStep"]),...e(["isUnlicensed"]),...i("wizard",["stages"]),...i(["internalOptions"])},methods:{...h("wizard",["setStages","loadState"]),deleteStage(t){const o=[...this.stages],r=o.findIndex(m=>t===m);r!==-1&&this.$delete(o,r),this.setStages(o)}},mounted(){if(this.internalOptions.internal.wizard){const t=JSON.parse(this.internalOptions.internal.wizard);delete t.currentStage,delete t.stages,delete t.licenseKey,this.loadState(t)}this.shouldShowImportStep||this.deleteStage("import"),this.isUnlicensed||this.deleteStage("license-key"),this.$isPro&&this.deleteStage("smart-recommendations")}},n={};var w=S(v,g,y,!1,x,null,null,null);function x(t){for(let o in n)this[o]=n[o]}const wt=function(){return w.exports}();export{wt as default};
