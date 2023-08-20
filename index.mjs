// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randi@v0.0.7-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(h){var p,f,c,u,g;if(arguments.length>0){if(!r(h))throw new TypeError(a("0qL2V,FD",h));if(p=n({},h),o(p,"iter")){if(!i(p.iter))throw new TypeError(a("0qL2t,G9","iter",p.iter))}else p.iter=d;c=m(p),!1!==p.copy&&(p.state=c.state)}else c=m(),p={iter:d,state:c.state};return g=0,e(f={},"next",b),e(f,"return",v),t(f,"seed",y),t(f,"seedLength",G),s(f,"state",P,R),t(f,"stateLength",L),t(f,"byteLength",N),e(f,"PRNG",c.PRNG),l&&e(f,l,x),f;function b(){return g+=1,u||g>p.iter?{done:!0}:{value:c(),done:!1}}function v(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function x(){return j(p)}function y(){return c.PRNG.seed}function G(){return c.PRNG.seedLength}function L(){return c.PRNG.stateLength}function N(){return c.PRNG.byteLength}function P(){return c.PRNG.state}function R(e){c.PRNG.state=e}}export{j as default};
//# sourceMappingURL=index.mjs.map
