import{p as l,A as p,B as _}from"./isArrayLikeObject.44af21ce.js";import{a as d,t as m}from"./cleanForSlug.61ba6611.js";function A(r,s,c,u){if(!l(r))return r;s=d(s,r);for(var o=-1,e=s.length,f=e-1,t=r;t!=null&&++o<e;){var n=m(s[o]),i=c;if(n==="__proto__"||n==="constructor"||n==="prototype")return r;if(o!=f){var a=t[n];i=u?u(a,n,t):void 0,i===void 0&&(i=l(a)?a:p(s[o+1])?[]:{})}_(t,n,i),t=t[n]}return r}export{A as b};
