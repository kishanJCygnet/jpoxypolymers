var u=Object.defineProperty,l=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(n,t,r)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,o=(n,t)=>{for(var r in t||(t={}))_.call(t,r)&&s(n,r,t[r]);if(e)for(var r of e(t))p.call(t,r)&&s(n,r,t[r]);return n},a=(n,t)=>l(n,c(t));import{C as d}from"./Index.e2bd87fe.js";import{b as f}from"./index.9b64eb46.js";import{n as m}from"./vueComponentNormalizer.87056a83.js";var h=function(){var n=this,t=n.$createElement,r=n._self._c||t;return n.isUnlicensed||n.showAlert?r("core-alert",{attrs:{type:"red"}},[n._v(" "+n._s(n.strings.thisFeatureRequires)+" "),r("strong",[n._v(n._s(n.$addons.currentPlans(this.addon)))])]):n._e()},v=[];const g={components:{CoreAlert:d},props:{addon:String},data(){return{strings:{thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}},computed:a(o({},f(["isUnlicensed"])),{showAlert(){return this.$addons.requiresUpgrade(this.addon)&&this.$addons.currentPlans(this.addon)}})},i={};var y=m(g,h,v,!1,x,null,null,null);function x(n){for(let t in i)this[t]=i[t]}var P=function(){return y.exports}();export{P as R};
