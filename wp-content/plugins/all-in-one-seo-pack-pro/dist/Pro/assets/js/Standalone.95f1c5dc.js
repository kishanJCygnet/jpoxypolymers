import{a as r,l as c,n as t}from"./index.cf8251b7.js";const u={computed:{...r(["currentPost","options","dynamicOptions","settings"])},async created(){const{options:s,settings:n,dynamicOptions:e,currentPost:o,internalOptions:i,tags:a}=await c();this.$set(this.$store.state,"options",t({...this.$store.state.options},{...s})),this.$set(this.$store.state,"settings",t({...this.$store.state.settings},{...n})),this.$set(this.$store.state,"dynamicOptions",t({...this.$store.state.dynamicOptions},{...e})),this.$set(this.$store.state,"currentPost",t({...this.$store.state.currentPost},{...o})),this.$set(this.$store.state,"internalOptions",t({...this.$store.state.internalOptions},{...i})),this.$set(this.$store.state,"tags",t({...this.$store.state.tags},{...a}))}};export{u as S};
