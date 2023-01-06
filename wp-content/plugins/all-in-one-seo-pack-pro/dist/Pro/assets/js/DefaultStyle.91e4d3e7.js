import{a as o,m as c}from"./vuex.esm.19624049.js";import"./WpTable.61e73015.js";import{n as i}from"./vueComponentNormalizer.67c9b86e.js";import{U as m}from"./Image.114d3975.js";import"./SaveChanges.68e73792.js";import{D as l}from"./Map.5d68f94e.js";import{B as p}from"./Img.68436b24.js";import{C as u}from"./SettingsRow.d7400549.js";import{S as _}from"./Plus.92a90910.js";var d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-settings-row",{attrs:{name:t.strings.customMarker,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.getDataObject().customMarker,callback:function(a){t.$set(t.getDataObject(),"customMarker",a)},expression:"getDataObject().customMarker"}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(a){return t.openUploadModal("customMarkerImage",t.setImageUrl)}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(a){t.getDataObject().customMarker=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.minimumSize)}}),e("base-img",{attrs:{src:t.getDataObject().customMarker}})]},proxy:!0}])})},f=[];const g={components:{BaseImg:p,CoreSettingsRow:u,SvgCirclePlus:_},mixins:[m,l],data(){return{strings:{customMarker:this.$t.__("Custom Marker",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.sprintf(this.$t.__("%1$sThe custom marker should be: 100x100 px.%2$s If the image exceeds those dimensions it could (partially) cover the info popup.",this.$td),"<strong>","</strong>"),remove:this.$t.__("Remove",this.$td)}}},computed:{...o(["currentPost","options"])},methods:{...c(["savePostState"]),setImageUrl(t){if(this.$root._data.screenContext!=="metabox"){this.options.localBusiness.maps.customMarker=t;return}this.currentPost.local_seo.maps.customMarker=t,this.savePostState()}}},r={};var h=i(g,d,f,!1,v,"639f6ea1",null,null);function v(t){for(let s in r)this[s]=r[s]}const L=function(){return h.exports}();var $=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-settings-row",{attrs:{name:t.strings.defaultMapStyle,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{value:t.getValue(),options:t.defaultMapStyles},on:{input:function(a){return t.getDataObject().mapOptions.mapTypeId=a.value}}})]},proxy:!0}])})},y=[];const M={components:{CoreSettingsRow:u},mixins:[l],data(){return{strings:{defaultMapStyle:this.$t.__("Default Map Style",this.$td)},defaultMapStyles:[{label:this.$t.__("Roadmap",this.$td),value:"roadmap"},{label:this.$t.__("Hybrid",this.$td),value:"hybrid"},{label:this.$t.__("Satellite",this.$td),value:"satellite"},{label:this.$t.__("Terrain",this.$td),value:"terrain"}]}},computed:{...o(["options"])},methods:{getValue(){return this.getDataObject().mapOptions.mapTypeId?this.defaultMapStyles.find(t=>t.value===this.getDataObject().mapOptions.mapTypeId):this.defaultMapStyles.find(t=>t.value===this.options.localBusiness.maps.mapOptions.mapTypeId)}}},n={};var b=i(M,$,y,!1,S,null,null,null);function S(t){for(let s in n)this[s]=n[s]}const R=function(){return b.exports}();export{L,R as a};
