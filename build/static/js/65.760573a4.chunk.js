(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[65],{3024:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{clsx:()=>o,default:()=>a});const a=o},1497:(e,t,r)=>{"use strict";var n=r(3218);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8136:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(5043)),o=d(r(5173)),a=d(r(7950)),i=d(r(3024)),s=r(1212),l=r(1777),u=r(2447),c=d(r(935)),f=d(r(5387));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class y extends n.Component{static getDerivedStateFromProps(e,t){let{position:r}=e,{prevPropsPosition:n}=t;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,f.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:{...r}})}constructor(e){super(e),g(this,"onDragStart",((e,t)=>{(0,f.default)("Draggable: onDragStart: %j",t);if(!1===this.props.onStart(e,(0,l.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),g(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,f.default)("Draggable: onDrag: %j",t);const r=(0,l.createDraggableData)(this,t),n={x:r.x,y:r.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=n;n.x+=this.state.slackX,n.y+=this.state.slackY;const[o,a]=(0,l.getBoundPosition)(this,n.x,n.y);n.x=o,n.y=a,n.slackX=this.state.slackX+(e-n.x),n.slackY=this.state.slackY+(t-n.y),r.x=n.x,r.y=n.y,r.deltaX=n.x-this.state.x,r.deltaY=n.y-this.state.y}if(!1===this.props.onDrag(e,r))return!1;this.setState(n)})),g(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,l.createDraggableData)(this,t)))return!1;(0,f.default)("Draggable: onDragStop: %j",t);const r={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;r.x=e,r.y=t}this.setState(r)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){"undefined"!==typeof window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:a.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:r,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:u,defaultClassNameDragged:f,position:d,positionOffset:p,scale:g,...y}=this.props;let b={},m=null;const v=!Boolean(d)||this.state.dragging,O=d||o,w={x:(0,l.canDragX)(this)&&v?this.state.x:O.x,y:(0,l.canDragY)(this)&&v?this.state.y:O.y};this.state.isElementSVG?m=(0,s.createSVGTransform)(w,p):b=(0,s.createCSSTransform)(w,p);const S=(0,i.default)(r.props.className||"",a,{[u]:this.state.dragging,[f]:this.state.dragged});return n.createElement(c.default,h({},y,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(r),{className:S,style:{...r.props.style,...b},transform:m}))}}t.default=y,g(y,"displayName","Draggable"),g(y,"propTypes",{...c.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),g(y,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},935:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(5043)),o=c(r(5173)),a=c(r(7950)),i=r(1212),s=r(1777),l=r(2447),u=c(r(5387));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},h={start:"mousedown",move:"mousemove",stop:"mouseup"};let g=h;class y extends n.Component{constructor(){super(...arguments),d(this,"dragging",!1),d(this,"lastX",NaN),d(this,"lastY",NaN),d(this,"touchIdentifier",null),d(this,"mounted",!1),d(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"===typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=t;if(this.props.disabled||!(e.target instanceof r.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const n=(0,i.getTouchIdentifier)(e);this.touchIdentifier=n;const o=(0,s.getControlPosition)(e,n,this);if(null==o)return;const{x:a,y:l}=o,c=(0,s.createCoreData)(this,a,l);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(r),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(r,g.move,this.handleDrag),(0,i.addEvent)(r,g.stop,this.handleDragStop))})),d(this,"handleDrag",(e=>{const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:r,y:n}=t;if(Array.isArray(this.props.grid)){let e=r-this.lastX,t=n-this.lastY;if([e,t]=(0,s.snapToGrid)(this.props.grid,e,t),!e&&!t)return;r=this.lastX+e,n=this.lastY+t}const o=(0,s.createCoreData)(this,r,n);(0,u.default)("DraggableCore: handleDrag: %j",o);if(!1!==this.props.onDrag(e,o)&&!1!==this.mounted)this.lastX=r,this.lastY=n;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(a){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),d(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:r,y:n}=t;if(Array.isArray(this.props.grid)){let e=r-this.lastX||0,t=n-this.lastY||0;[e,t]=(0,s.snapToGrid)(this.props.grid,e,t),r=this.lastX+e,n=this.lastY+t}const o=(0,s.createCoreData)(this,r,n);if(!1===this.props.onStop(e,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,u.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,g.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,g.stop,this.handleDragStop))})),d(this,"onMouseDown",(e=>(g=h,this.handleDragStart(e)))),d(this,"onMouseUp",(e=>(g=h,this.handleDragStop(e)))),d(this,"onTouchStart",(e=>(g=p,this.handleDragStart(e)))),d(this,"onTouchEnd",(e=>(g=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,i.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,i.removeEvent)(t,h.move,this.handleDrag),(0,i.removeEvent)(t,p.move,this.handleDrag),(0,i.removeEvent)(t,h.stop,this.handleDragStop),(0,i.removeEvent)(t,p.stop,this.handleDragStop),(0,i.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:a.default.findDOMNode(this)}render(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=y,d(y,"displayName","DraggableCore"),d(y,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),d(y,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},1929:(e,t,r)=>{"use strict";const{default:n,DraggableCore:o}=r(8136);e.exports=n,e.exports.default=n,e.exports.DraggableCore=o},1212:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=u,t.addEvent=function(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&u(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const r=l(e,t,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:r}},t.createSVGTransform=function(e,t){return l(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,n.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,n.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=l,t.innerHeight=function(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,n.int)(r.paddingTop),t-=(0,n.int)(r.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,n.int)(r.paddingLeft),t-=(0,n.int)(r.paddingRight),t},t.matchesSelector=s,t.matchesSelectorAndParentsTo=function(e,t,r){let n=e;do{if(s(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.offsetXYFromParent=function(e,t,r){const n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-n.left)/r,a=(e.clientY+t.scrollTop-n.top)/r;return{x:o,y:a}},t.outerHeight=function(e){let t=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,n.int)(r.borderTopWidth),t+=(0,n.int)(r.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,n.int)(r.borderLeftWidth),t+=(0,n.int)(r.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,r,n){if(!e)return;const o={capture:!0,...n};e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(t){}};var n=r(2447),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(1561));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}let i="";function s(e,t){return i||(i=(0,n.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,n.isFunction)(e[t])}))),!!(0,n.isFunction)(e[i])&&e[i](t)}function l(e,t,r){let{x:n,y:o}=e,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){const e="".concat("string"===typeof t.x?t.x:t.x+r),n="".concat("string"===typeof t.y?t.y:t.y+r);a="translate(".concat(e,", ").concat(n,")")+a}return a}function u(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},1561:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=n;const r=["Moz","Webkit","O","ms"];function n(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window)return"";const n=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!n)return"";if(t in n)return"";for(let a=0;a<r.length;a++)if(o(t,r[a])in n)return r[a];return""}function o(e,t){return t?"".concat(t).concat(function(e){let t="",r=!0;for(let n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}t.default=n()},5387:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},1777:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,r){const o=!(0,n.isNum)(e.lastX),i=a(e);return o?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:i,deltaX:t-e.lastX,deltaY:r-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:r}},t.createDraggableData=function(e,t){const r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];let{bounds:i}=e.props;i="string"===typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);const s=a(e);if("string"===typeof i){const{ownerDocument:e}=s,t=e.defaultView;let r;if(r="parent"===i?s.parentNode:e.querySelector(i),!(r instanceof t.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=r,l=t.getComputedStyle(s),u=t.getComputedStyle(a);i={left:-s.offsetLeft+(0,n.int)(u.paddingLeft)+(0,n.int)(l.marginLeft),top:-s.offsetTop+(0,n.int)(u.paddingTop)+(0,n.int)(l.marginTop),right:(0,o.innerWidth)(a)-(0,o.outerWidth)(s)-s.offsetLeft+(0,n.int)(u.paddingRight)-(0,n.int)(l.marginRight),bottom:(0,o.innerHeight)(a)-(0,o.outerHeight)(s)-s.offsetTop+(0,n.int)(u.paddingBottom)-(0,n.int)(l.marginBottom)}}(0,n.isNum)(i.right)&&(t=Math.min(t,i.right));(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom));(0,n.isNum)(i.left)&&(t=Math.max(t,i.left));(0,n.isNum)(i.top)&&(r=Math.max(r,i.top));return[t,r]},t.getControlPosition=function(e,t,r){const n="number"===typeof t?(0,o.getTouch)(e,t):null;if("number"===typeof t&&!n)return null;const i=a(r),s=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,s,r.props.scale)},t.snapToGrid=function(e,t,r){const n=Math.round(t/e[0])*e[0],o=Math.round(r/e[1])*e[1];return[n,o]};var n=r(2447),o=r(1212);function a(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},2447:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"===typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"===typeof e&&!isNaN(e)}},6325:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(5043)),o=r(1929),a=r(5769),i=r(5394),s=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var h=function(e){var t,r;function i(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleRefs={},t.lastHandleRect=null,t.slack=null,t}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r);var l=i.prototype;return l.componentWillUnmount=function(){this.resetData()},l.resetData=function(){this.lastHandleRect=this.slack=null},l.runConstraints=function(e,t){var r=this.props,n=r.minConstraints,o=r.maxConstraints,a=r.lockAspectRatio;if(!n&&!o&&!a)return[e,t];if(a){var i=this.props.width/this.props.height,s=e-this.props.width,l=t-this.props.height;Math.abs(s)>Math.abs(l*i)?t=e/i:e=t*i}var u=e,c=t,f=this.slack||[0,0],d=f[0],p=f[1];return e+=d,t+=p,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),o&&(e=Math.min(o[0],e),t=Math.min(o[1],t)),this.slack=[d+(u-e),p+(c-t)],[e,t]},l.resizeHandler=function(e,t){var r=this;return function(n,o){var a=o.node,i=o.deltaX,s=o.deltaY;"onResizeStart"===e&&r.resetData();var l=("both"===r.props.axis||"x"===r.props.axis)&&"n"!==t&&"s"!==t,u=("both"===r.props.axis||"y"===r.props.axis)&&"e"!==t&&"w"!==t;if(l||u){var c=t[0],f=t[t.length-1],d=a.getBoundingClientRect();if(null!=r.lastHandleRect){if("w"===f)i+=d.left-r.lastHandleRect.left;if("n"===c)s+=d.top-r.lastHandleRect.top}r.lastHandleRect=d,"w"===f&&(i=-i),"n"===c&&(s=-s);var p=r.props.width+(l?i/r.props.transformScale:0),h=r.props.height+(u?s/r.props.transformScale:0),g=r.runConstraints(p,h);p=g[0],h=g[1];var y=p!==r.props.width||h!==r.props.height,b="function"===typeof r.props[e]?r.props[e]:null;b&&!("onResize"===e&&!y)&&(null==n.persist||n.persist(),b(n,{node:a,size:{width:p,height:h},handle:t})),"onResizeStop"===e&&r.resetData()}}},l.renderResizeHandle=function(e,t){var r=this.props.handle;if(!r)return n.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e,ref:t});if("function"===typeof r)return r(e,t);var o=f({ref:t},"string"===typeof r.type?{}:{handleAxis:e});return n.cloneElement(r,o)},l.render=function(){var e=this,t=this.props,r=t.children,i=t.className,l=t.draggableOpts,c=(t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart,t.resizeHandles),d=(t.transformScale,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,s));return(0,a.cloneElement)(r,f(f({},d),{},{className:(i?i+" ":"")+"react-resizable",children:[].concat(r.props.children,c.map((function(t){var r,a=null!=(r=e.handleRefs[t])?r:e.handleRefs[t]=n.createRef();return n.createElement(o.DraggableCore,u({},l,{nodeRef:a,key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t,a))})))}))},i}(n.Component);t.default=h,h.propTypes=i.resizableProps,h.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1}},7276:(e,t,r)=>{"use strict";t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(5043)),o=l(r(5173)),a=l(r(6325)),i=r(5394),s=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var g=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height},t.onResize=function(e,r){var n=r.size;t.props.onResize?(null==e.persist||e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)},t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,h(t,r),o.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},o.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize,o=(e.onResize,e.onResizeStart),i=e.onResizeStop,l=e.draggableOpts,u=e.minConstraints,f=e.maxConstraints,p=e.lockAspectRatio,h=e.axis,g=(e.width,e.height,e.resizeHandles),y=e.style,b=e.transformScale,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s);return n.createElement(a.default,{axis:h,draggableOpts:l,handle:t,handleSize:r,height:this.state.height,lockAspectRatio:p,maxConstraints:f,minConstraints:u,onResizeStart:o,onResize:this.onResize,onResizeStop:i,resizeHandles:g,transformScale:b,width:this.state.width},n.createElement("div",c({},m,{style:d(d({},y),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},o}(n.Component);t.default=g,g.propTypes=d(d({},i.resizableProps),{},{children:o.default.element})},5394:(e,t,r)=>{"use strict";t.__esModule=!0,t.resizableProps=void 0;var n,o=(n=r(5173))&&n.__esModule?n:{default:n};r(1929);var a={axis:o.default.oneOf(["both","x","y","none"]),className:o.default.string,children:o.default.element.isRequired,draggableOpts:o.default.shape({allowAnyClick:o.default.bool,cancel:o.default.string,children:o.default.node,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:o.default.node,grid:o.default.arrayOf(o.default.number),handle:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number}),height:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,a=t[0];return"both"===a.axis||"y"===a.axis?(n=o.default.number).isRequired.apply(n,t):o.default.number.apply(o.default,t)},handle:o.default.oneOfType([o.default.node,o.default.func]),handleSize:o.default.arrayOf(o.default.number),lockAspectRatio:o.default.bool,maxConstraints:o.default.arrayOf(o.default.number),minConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:o.default.number,width:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,a=t[0];return"both"===a.axis||"x"===a.axis?(n=o.default.number).isRequired.apply(n,t):o.default.number.apply(o.default,t)}};t.resizableProps=a},5769:(e,t,r)=>{"use strict";t.__esModule=!0,t.cloneElement=function(e,t){t.style&&e.props.style&&(t.style=i(i({},e.props.style),t.style));t.className&&e.props.className&&(t.className=e.props.className+" "+t.className);return o.default.cloneElement(e,t)};var n,o=(n=r(5043))&&n.__esModule?n:{default:n};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},5003:(e,t,r)=>{"use strict";e.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e.exports.Resizable=r(6325).default,e.exports.ResizableBox=r(7276).default},9659:()=>{}}]);
//# sourceMappingURL=65.760573a4.chunk.js.map