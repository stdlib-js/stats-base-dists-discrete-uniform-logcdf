// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function d(t,m,d){return e(t)||e(m)||e(d)||!s(m)||!s(d)||m>d?NaN:t<m?r:t>=d?0:i(n(t)-m+1)-i(d-m+1)}function o(t,d){var o,a;return e(t)||e(d)||!s(t)||!s(d)||t>d?m(NaN):(a=t-1,o=i(d-t+1),function(s){if(e(s))return NaN;if(s<t)return r;if(s>=d)return 0;return i(n(s)-a)-o})}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
