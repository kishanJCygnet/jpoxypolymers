import{S as s}from"./Checkmark.dc905798.js";import{n as l}from"./vueComponentNormalizer.a77505d6.js";var u=function(){var r,n=this,o=n.$createElement,t=n._self._c||o;return t("label",{staticClass:"aioseo-checkbox",class:[n.labelClass,(r={},r[n.size]=n.size,r),{disabled:n.disabled},{round:n.round}],on:{keydown:[function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.labelToggle.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:n.labelToggle.apply(null,arguments)}],click:function(e){return e.stopPropagation(),function(){}.apply(null,arguments)}}},[n._t("header"),t("span",{staticClass:"form-checkbox-wrapper"},[t("span",{staticClass:"form-checkbox"},[t("input",{ref:"input",class:n.inputClass,attrs:{type:"checkbox",name:n.name,id:n.id,disabled:n.disabled},domProps:{checked:n.value},on:{input:function(e){return n.$emit("input",e.target.checked)}}}),t("span",{staticClass:"fancy-checkbox",class:n.type},[t("svg-checkmark")],1)])]),n._t("default")],2)},c=[];const i={components:{SvgCheckmark:s},props:{value:Boolean,name:String,labelClass:{type:String,default(){return""}},inputClass:{type:String,default(){return""}},id:String,size:String,disabled:Boolean,round:Boolean,type:{type:String,default(){return"blue"}}},methods:{labelToggle(){this.$refs.input.click()}}},a={};var p=l(i,u,c,!1,_,null,null,null);function _(r){for(let n in a)this[n]=a[n]}const y=function(){return p.exports}();export{y as B};
