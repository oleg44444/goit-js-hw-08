var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return s.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==d.call(e))return i;if(y(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var l=a.test(t);return l||f.test(t)?u(t.slice(2),l?2:8):r.test(t)?i:+t}e=function(t,e,i){var o=!0,r=!0;if("function"!=typeof t)throw TypeError(n);return y(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(t,e,i){var o,r,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof t)throw TypeError(n);function h(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){var n=t-l,i=t-c;return void 0===l||n>=e||n<0||d&&i>=a}function O(){var t,n,i,o=g();if(j(o))return T(o);u=setTimeout(O,(t=o-l,n=o-c,i=e-t,d?v(i,a-n):i))}function T(t){return(u=void 0,b&&o)?h(t):(o=r=void 0,f)}function S(){var t,n=g(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=t=l,u=setTimeout(O,e),s?h(t):f;if(d)return u=setTimeout(O,e),h(l)}return void 0===u&&(u=setTimeout(O,e)),f}return e=m(e)||0,y(i)&&(s=!!i.leading,a=(d="maxWait"in i)?p(m(i.maxWait)||0,e):a,b="trailing"in i?!!i.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},S.flush=function(){return void 0===u?f:T(g())},S}(t,e,{leading:o,maxWait:e,trailing:r})};const b="feedback-form-state",h=document.querySelector(".feedback-form");h.addEventListener("submit",function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(b),console.log(j)}),h.addEventListener("input",(function(t){return t&&t.__esModule?t.default:t})(e)(function(t){j[t.target.name]=t.target.value,localStorage.setItem(b,JSON.stringify(j))},500));const j={};!function(){let t=JSON.parse(localStorage.getItem(b));if(t){let e=h.querySelectorAll("input, textarea");e.forEach(e=>{let n=e.name;t.hasOwnProperty(n)&&(e.value=t[n])})}}();
//# sourceMappingURL=03-feedback.17d3ae75.js.map
