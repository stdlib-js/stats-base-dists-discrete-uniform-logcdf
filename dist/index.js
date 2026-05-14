"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(z,s){
var f=require('@stdlib/math-base-assert-is-integer/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-floor/dist'),v=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist');function F(e,r,i){return t(e)||t(r)||t(i)||!f(r)||!f(i)||r>i?NaN:e<r?p:e>=i?0:v(d(e)-r+1)-v(i-r+1)}s.exports=F
});var g=o(function(A,l){
var m=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-special-floor/dist'),N=require('@stdlib/math-base-special-ln/dist'),R=require('@stdlib/constants-float64-ninf/dist');function h(e,r){var i,a;if(u(e)||u(r)||!c(e)||!c(r)||e>r)return m(NaN);return a=e-1,i=N(r-e+1),I;function I(n){return u(n)?NaN:n<e?R:n>=r?0:N(O(n)-a)-i}}l.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),k=g();j(y,"factory",k);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
