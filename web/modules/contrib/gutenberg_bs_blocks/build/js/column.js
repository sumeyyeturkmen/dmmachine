!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a,o=wp.data,c=o.select,i=o.dispatch,l={slug:"bootstrap",title:Drupal.t("Bootstrap")},u=c("core/blocks").getCategories().filter((function(e){return e.slug!==l.slug}));i("core/blocks").setCategories([l].concat(function(e){if(Array.isArray(e))return n(e)}(a=u)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),t.a=l},function(e,t,r){"use strict";var n=(0,wp.data.withSelect)((function(e,t){var r=t.clientId;return{hasInnerBlocks:(0,(e("core/block-editor")||e("core/editor")).getBlockOrder)(r).length>0}}));t.a=n},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=[Drupal.t("Extra small devices"),Drupal.t("Small devices"),Drupal.t("Medium devices"),Drupal.t("Large devices"),Drupal.t("Extra large devices")],o=["Xs","Sm","Md","Lg","Xl"],c=function(e){return"Xs"!==e?"-"+e.toLowerCase():""},i=function(e){var t=e.className,r=e.alignment,n=e.sizeXs,a=e.sizeSm,i=e.sizeMd,l=e.sizeLg,u=e.sizeXl;return o.reduce((function(t,r){var n=c(r),a=e["size".concat(r)],o=e["order".concat(r)],i=e["offset".concat(r)];return void 0!==a&&"Xs"!==r&&(t["data-size".concat(n)]=a),void 0!==o&&(t["data-order".concat(n)]=o),void 0!==i&&i>0&&(t["data-offset".concat(n)]=i),t}),{className:t,"data-alignment":r,"data-size":[n,a,i,l,u].every((function(e){return void 0===e}))?0:n})},l=r(1),u=wp.blockEditor||wp.editor,s=u.BlockControls,p=u.BlockVerticalAlignmentToolbar,f=function(e){var t=e.attributes,r=e.setAttributes,n=t.alignment;return React.createElement(s,null,React.createElement(p,{value:n,onChange:function(e){return r({alignment:e})}}))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=wp.components.RangeControl,v=function(e){var t=e.attributeName,r=e.setAttributes,n=b(e,["attributeName","setAttributes"]);return React.createElement(d,m({onChange:function(e){var n,a,o;r((o=e,(a=t)in(n={})?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n))}},n))};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=function(e){return React.createElement(v,y({min:-1,max:13},e))},h=wp.components.PanelBody,E=function(e){var t=e.attributes,r=e.setAttributes;return React.createElement(h,{title:Drupal.t("Column size"),initialOpen:!1},o.map((function(e,n){return React.createElement(React.Fragment,null,React.createElement(g,{label:a[n],attributeName:"size".concat(e),value:t["size".concat(e)],setAttributes:r}),React.createElement("hr",null))})))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w=function(e){return React.createElement(v,O({min:-1,max:13},e))},R=wp.components.PanelBody,A=function(e){var t=e.attributes,r=e.setAttributes;return React.createElement(R,{title:Drupal.t("Column order"),initialOpen:!1},o.map((function(e,n){return React.createElement(React.Fragment,null,React.createElement(w,{label:a[n],attributeName:"order".concat(e),value:t["order".concat(e)],setAttributes:r}),React.createElement("hr",null))})))};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var z=function(e){return React.createElement(v,j({min:0,max:11},e))},k=wp.components.PanelBody,S=function(e){var t=e.attributes,r=e.setAttributes;return React.createElement(k,{title:Drupal.t("Column offset"),initialOpen:!1},o.map((function(e,n){return React.createElement(React.Fragment,null,React.createElement(z,{label:a[n],attributeName:"offset".concat(e),value:t["offset".concat(e)],setAttributes:r}),React.createElement("hr",null))})))},P=(wp.blockEditor||wp.editor).InspectorControls,x=function(e){var t=e.attributes,r=e.setAttributes;return React.createElement(P,null,React.createElement(E,{attributes:t,setAttributes:r}),React.createElement(A,{attributes:t,setAttributes:r}),React.createElement(S,{attributes:t,setAttributes:r}))},B=wp.compose.compose,X=(wp.blockEditor||wp.editor).InnerBlocks,C=wp.element.Fragment,M=B(l.a)((function(e){var t=e.className,r=e.hasInnerBlocks,n=e.attributes,a=e.setAttributes;return React.createElement(C,null,React.createElement(X,{templateLock:!1,renderAppender:!r&&X.ButtonBlockAppender,__experimentalPassedProps:{className:t}}),React.createElement(f,{attributes:n,setAttributes:a}),React.createElement(x,{attributes:n,setAttributes:a}))})),N=r(2),D=r.n(N),I=(wp.blockEditor||wp.editor).InnerBlocks,L=function(e){var t=e.className,r=e.attributes,n=r.alignment,a=r.sizeXs,i=r.sizeSm,l=r.sizeMd,u=r.sizeLg,s=r.sizeXl,p=o.reduce((function(e,t){var n=c(t),a=r["size".concat(t)],o=r["order".concat(t)],i=r["offset".concat(t)];return void 0!==a&&(e["col".concat(n)]="Xs"!==t&&0===a,e["col".concat(n,"-").concat(a)]=a>0),void 0!==o&&(e["order".concat(n,"-first")]=-1===o,e["order".concat(n,"-last")]=13===o,e["order".concat(n,"-").concat(o)]=-1!==o&&13!==o),void 0!==o&&(e["offset".concat(n,"-").concat(i)]=i>0),e}),{col:[a,i,l,u,s].every((function(e){return void 0===e})),"align-self-start":n&&"top"===n,"align-self-center":n&&"center"===n,"align-self-end":n&&"bottom"===n});return React.createElement("div",{className:D()(p,t)},React.createElement(I.Content,null))};(0,wp.blocks.registerBlockType)(n.a.slug+"/column",{title:Drupal.t("Column"),description:Drupal.t("A single Bootstrap column within a row block."),icon:"columns",category:n.a.slug,parent:["bootstrap/row"],attributes:{alignment:{type:"string"},sizeXs:{type:"number"},sizeSm:{type:"number"},sizeMd:{type:"number"},sizeLg:{type:"number"},sizeXl:{type:"number"},orderXs:{type:"number"},orderSm:{type:"number"},orderMd:{type:"number"},orderLg:{type:"number"},orderXl:{type:"number"},offsetXs:{type:"number"},offsetSm:{type:"number"},offsetMd:{type:"number"},offsetLg:{type:"number"},offsetXl:{type:"number"}},supports:{anchor:!0,html:!1,className:!1,reusable:!1},getEditWrapperProps:i,edit:M,save:L})}]);