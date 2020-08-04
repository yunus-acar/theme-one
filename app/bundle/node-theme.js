!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=7)}({0:function(e,t,a){"use strict";function n(e,t,a,n,r,s,o,l){var i,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=i):r&&(i=l?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),i)if(c.functional){c._injectStyles=i;var m=c.render;c.render=function(e,t){return i.call(t),m(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,i):[i]}return{exports:e,options:c}}a.d(t,"a",(function(){return n}))},7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-form-horizontal"},["page"===e.node.type?[a("div",{staticClass:"uk-margin"},[a("span",{staticClass:"uk-form-label"},[e._v(e._s(e._f("trans")("Title")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-form-controls-text"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.title_hide,expression:"node.theme.title_hide"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.title_hide)?e._i(e.node.theme.title_hide,null)>-1:e.node.theme.title_hide},on:{change:function(t){var a=e.node.theme.title_hide,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"title_hide",a.concat([null])):s>-1&&e.$set(e.node.theme,"title_hide",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"title_hide",r)}}}),e._v(" "+e._s(e._f("trans")("Hide Title")))])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("span",{staticClass:"uk-form-label"},[e._v(e._s(e._f("trans")("Title Size")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-form-controls-text"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.title_large,expression:"node.theme.title_large"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.title_large)?e._i(e.node.theme.title_large,null)>-1:e.node.theme.title_large},on:{change:function(t){var a=e.node.theme.title_large,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"title_large",a.concat([null])):s>-1&&e.$set(e.node.theme,"title_large",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"title_large",r)}}}),e._v(" "+e._s(e._f("trans")("Extra large title.")))])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("span",{staticClass:"uk-form-label"},[e._v(e._s(e._f("trans")("Alignment")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-form-controls-text"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.alignment,expression:"node.theme.alignment"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.alignment)?e._i(e.node.theme.alignment,null)>-1:e.node.theme.alignment},on:{change:function(t){var a=e.node.theme.alignment,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"alignment",a.concat([null])):s>-1&&e.$set(e.node.theme,"alignment",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"alignment",r)}}}),e._v(" "+e._s(e._f("trans")("Center the title and content.")))])])])]:e._e(),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"form-class"}},[e._v(e._s(e._f("trans")("HTML Class")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.html_class,expression:"node.theme.html_class"}],staticClass:"uk-form-width-large uk-input",attrs:{id:"form-class",type:"text"},domProps:{value:e.node.theme.html_class},on:{input:function(t){t.target.composing||e.$set(e.node.theme,"html_class",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("span",{staticClass:"uk-form-label"},[e._v(e._s(e._f("trans")("Sidebar")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-form-controls-text"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.sidebar_first,expression:"node.theme.sidebar_first"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.sidebar_first)?e._i(e.node.theme.sidebar_first,null)>-1:e.node.theme.sidebar_first},on:{change:function(t){var a=e.node.theme.sidebar_first,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"sidebar_first",a.concat([null])):s>-1&&e.$set(e.node.theme,"sidebar_first",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"sidebar_first",r)}}}),e._v(" "+e._s(e._f("trans")("Show the sidebar before the content.")))])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v("Hero "+e._s(e._f("trans")("Position")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-form-controls-text"},[a("p",{staticClass:"uk-margin-small"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.hero_viewport,expression:"node.theme.hero_viewport"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.hero_viewport)?e._i(e.node.theme.hero_viewport,null)>-1:e.node.theme.hero_viewport},on:{change:function(t){var a=e.node.theme.hero_viewport,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"hero_viewport",a.concat([null])):s>-1&&e.$set(e.node.theme,"hero_viewport",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"hero_viewport",r)}}}),a("span",{staticClass:"uk-margin-small-left"},[e._v(e._s(e._f("trans")("Full viewport height")))])])]),e._v(" "),a("p",{staticClass:"uk-margin-small"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.hero_contrast,expression:"node.theme.hero_contrast"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.hero_contrast)?e._i(e.node.theme.hero_contrast,null)>-1:e.node.theme.hero_contrast},on:{change:function(t){var a=e.node.theme.hero_contrast,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"hero_contrast",a.concat([null])):s>-1&&e.$set(e.node.theme,"hero_contrast",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"hero_contrast",r)}}}),a("span",{staticClass:"uk-margin-small-left"},[e._v(e._s(e._f("trans")("Invert colors")))])])]),e._v(" "),a("p",{staticClass:"uk-margin-small"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.navbar_transparent,expression:"node.theme.navbar_transparent"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.navbar_transparent)?e._i(e.node.theme.navbar_transparent,null)>-1:e.node.theme.navbar_transparent},on:{change:function(t){var a=e.node.theme.navbar_transparent,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"navbar_transparent",a.concat([null])):s>-1&&e.$set(e.node.theme,"navbar_transparent",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"navbar_transparent",r)}}}),a("span",{staticClass:"uk-margin-small-left"},[e._v(e._s(e._f("trans")("Transparent navbar as overlay")))])])]),e._v(" "),a("p",{staticClass:"uk-margin-small uk-margin-bottom"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.hero_parallax,expression:"node.theme.hero_parallax"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.theme.hero_parallax)?e._i(e.node.theme.hero_parallax,null)>-1:e.node.theme.hero_parallax},on:{change:function(t){var a=e.node.theme.hero_parallax,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=e._i(a,null);n.checked?s<0&&e.$set(e.node.theme,"hero_parallax",a.concat([null])):s>-1&&e.$set(e.node.theme,"hero_parallax",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.node.theme,"hero_parallax",r)}}}),a("span",{staticClass:"uk-margin-small-left"},[e._v(e._s(e._f("trans")("Enable parallax effect")))])])]),e._v(" "),a("div",{staticClass:"uk-form-width-large"},[a("input-image",{attrs:{"input-class":"uk-form-width-large"},model:{value:e.node.theme.hero_image,callback:function(t){e.$set(e.node.theme,"hero_image",t)},expression:"node.theme.hero_image"}})],1),e._v(" "),a("div",{staticClass:"uk-text-meta"},[e._v("\n                "+e._s(e._f("trans")("Select a background image for the hero position."))+"\n            ")])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"form-top-style"}},[e._v("Top "+e._s(e._f("trans")("Position")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.top_style,expression:"node.theme.top_style"}],staticClass:"uk-form-width-large uk-select",attrs:{id:"form-top-style"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.node.theme,"top_style",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"uk-section-default"}},[e._v("\n                    "+e._s(e._f("trans")("Default"))+"\n                ")]),e._v(" "),a("option",{attrs:{value:"uk-section-muted"}},[e._v("\n                    "+e._s(e._f("trans")("Muted"))+"\n                ")])])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"form-main-style"}},[e._v("Main "+e._s(e._f("trans")("Position")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.main_style,expression:"node.theme.main_style"}],staticClass:"uk-form-width-large uk-select",attrs:{id:"form-main-style"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.node.theme,"main_style",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"uk-section-default"}},[e._v("\n                    "+e._s(e._f("trans")("Default"))+"\n                ")]),e._v(" "),a("option",{attrs:{value:"uk-section-muted"}},[e._v("\n                    "+e._s(e._f("trans")("Muted"))+"\n                ")])])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label",attrs:{for:"form-bottom-style"}},[e._v("Bottom "+e._s(e._f("trans")("Position")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.node.theme.bottom_style,expression:"node.theme.bottom_style"}],staticClass:"uk-form-width-large uk-select",attrs:{id:"form-bottom-style"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.node.theme,"bottom_style",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"uk-section-default"}},[e._v("\n                    "+e._s(e._f("trans")("Default"))+"\n                ")]),e._v(" "),a("option",{attrs:{value:"uk-section-muted"}},[e._v("\n                    "+e._s(e._f("trans")("Muted"))+"\n                ")])]),e._v(" "),a("div",{staticClass:"uk-text-meta uk-margin"},[e._v("\n                "+e._s(e._f("trans")("Note: Position settings only work if you publish a widget in that position."))+"\n            ")])])])],2)};n._withStripped=!0;var r={section:{label:"Theme",priority:90},props:["node"]},s=r;window.Site.components["node-theme"]=r;var o=s,l=a(0),i=Object(l.a)(o,n,[],!1,null,null,null);i.options.__file="app/components/node-theme.vue";t.default=i.exports}});