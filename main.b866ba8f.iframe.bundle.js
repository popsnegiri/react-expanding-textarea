(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync ^\\.[\\\\/](?:index\\.tsx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/base.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 2em;\n  font-size: 1.6rem;\n  font-family: monospace;\n  color: #333;\n}\nbody,\ninput,\nbutton {\n  -webkit-font-smoothing: antialiased;\n}\n.textarea {\n  width: 100%;\n  outline: 0;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: #FFF;\n  border-left: 4px solid #005C9A;\n  resize: none;\n  font: inherit;\n}\n",""]),module.exports=exports},"./stories sync ^\\.[\\\\/](?:index\\.tsx)$":function(module,exports,__webpack_require__){var map={"./index.tsx":"./stories/index.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync ^\\.[\\\\/](?:index\\.tsx)$"},"./stories/base.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/base.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FancyTextarea",(function(){return stories_FancyTextarea})),__webpack_require__.d(__webpack_exports__,"RegularTextarea",(function(){return stories_RegularTextarea})),__webpack_require__.d(__webpack_exports__,"Minimum3Rows",(function(){return stories_Minimum3Rows})),__webpack_require__.d(__webpack_exports__,"MaxHeight",(function(){return stories_MaxHeight})),__webpack_require__.d(__webpack_exports__,"FunctionRef",(function(){return stories_FunctionRef})),__webpack_require__.d(__webpack_exports__,"ValueFromProps",(function(){return stories_ValueFromProps})),__webpack_require__.d(__webpack_exports__,"StyleChanges",(function(){return stories_StyleChanges}));__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/react-with-forwarded-ref/dist/esm/index.js")),fast_shallow_equal=__webpack_require__("./node_modules/fast-shallow-equal/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["forwardedRef"],_excluded2=["onChange","onInput"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var resize=function resize(rows,el){if(el){var overflowY="hidden",maxHeight=window.getComputedStyle(el).maxHeight;if("none"!==maxHeight)parseFloat(maxHeight)<el.scrollHeight&&(overflowY="");el.style.height="0",el.style.overflowY=overflowY,el.style.height=function getHeight(rows,el){var _window$getComputedSt=window.getComputedStyle(el),borderBottomWidth=_window$getComputedSt.borderBottomWidth,borderTopWidth=_window$getComputedSt.borderTopWidth,fontSize=_window$getComputedSt.fontSize,lineHeight=_window$getComputedSt.lineHeight,paddingBottom=_window$getComputedSt.paddingBottom,paddingTop=_window$getComputedSt.paddingTop,lh="normal"===lineHeight?1.2*parseFloat(fontSize):parseFloat(lineHeight),rowHeight=0===rows?0:lh*rows+parseFloat(borderBottomWidth)+parseFloat(borderTopWidth)+parseFloat(paddingBottom)+parseFloat(paddingTop),scrollHeight=el.scrollHeight+parseFloat(borderBottomWidth)+parseFloat(borderTopWidth);return Math.max(rowHeight,scrollHeight)}(rows,el)+"px"}},useSSRLayoutEffect="undefined"==typeof window?Function.prototype:react.useLayoutEffect,source_ExpandingTextarea=function ExpandingTextarea(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,_excluded),isForwardedRefFn="function"==typeof forwardedRef,style=function useShallowObjectMemo(obj){var refObject=Object(react.useRef)(obj),refCounter=Object(react.useRef)(0);return Object(fast_shallow_equal.equal)(obj,refObject.current)||(refObject.current=obj,refCounter.current+=1),Object(react.useMemo)((function(){return refObject.current}),[refCounter.current])}(props.style),internalRef=Object(react.useRef)(),ref=isForwardedRefFn||!forwardedRef?internalRef:forwardedRef,rows=props.rows?parseInt(""+props.rows,10):0,onChange=props.onChange,onInput=props.onInput,rest=_objectWithoutProperties(props,_excluded2);useSSRLayoutEffect((function(){resize(rows,ref.current)}),[props.className,props.value,ref,rows,style]),useSSRLayoutEffect((function(){if(window.ResizeObserver){var observer=new ResizeObserver((function(){resize(rows,ref.current)}));return observer.observe(ref.current),function(){observer.disconnect()}}}),[ref,rows]);var handleInput=Object(react.useCallback)((function(e){null==onChange||onChange(e),null==onInput||onInput(e),resize(rows,ref.current)}),[onChange,onInput,ref,rows]),handleRef=Object(react.useCallback)((function(node){ref.current=node,isForwardedRefFn&&forwardedRef(node)}),[forwardedRef,isForwardedRefFn,ref]);return Object(jsx_runtime.jsx)("textarea",Object.assign({},rest,{onInput:handleInput,ref:handleRef,rows:rows}))};source_ExpandingTextarea.displayName="ExpandingTextarea";var source=Object(esm.a)(source_ExpandingTextarea);try{source_ExpandingTextarea.displayName="ExpandingTextarea",source_ExpandingTextarea.__docgenInfo={description:"",displayName:"ExpandingTextarea",props:{forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"RefObject<HTMLTextAreaElement> | RefFn"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((evt: ChangeEvent<HTMLTextAreaElement>) => void)"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"((evt: ChangeEvent<HTMLTextAreaElement>) => void)"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/index.tsx#ExpandingTextarea"]={docgenInfo:source_ExpandingTextarea.__docgenInfo,name:"ExpandingTextarea",path:"source/index.tsx#ExpandingTextarea"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./stories/base.css");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_exports__.default={title:"ExpandingTextarea",component:source,parameters:{}};var defaultArgs={maxLength:3e3,placeholder:"Enter details here..."},stories_FancyTextarea=function FancyTextarea(_ref){var maxLength=_ref.maxLength,placeholder=_ref.placeholder,textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current;null===(_textareaRef$current=textareaRef.current)||void 0===_textareaRef$current||_textareaRef$current.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Minimalist textarea"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{className:"textarea",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:maxLength,name:"pet[notes]",onChange:handleChange,placeholder:placeholder,ref:textareaRef,rows:"1",style:{display:"block",width:"350px"}})]})};stories_FancyTextarea.displayName="FancyTextarea",stories_FancyTextarea.args=defaultArgs;var stories_RegularTextarea=function RegularTextarea(_ref2){var maxLength=_ref2.maxLength,placeholder=_ref2.placeholder,textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current2;null===(_textareaRef$current2=textareaRef.current)||void 0===_textareaRef$current2||_textareaRef$current2.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Regular textarea"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:maxLength,name:"pet[notes]",onChange:handleChange,placeholder:placeholder,ref:textareaRef,style:{display:"block",width:"300px"}})]})};stories_RegularTextarea.displayName="RegularTextarea",stories_RegularTextarea.args=defaultArgs;var stories_Minimum3Rows=function Minimum3Rows(_ref3){var maxLength=_ref3.maxLength,placeholder=_ref3.placeholder,textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current3;null===(_textareaRef$current3=textareaRef.current)||void 0===_textareaRef$current3||_textareaRef$current3.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Regular textarea with minimum 3 rows"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:maxLength,name:"pet[notes]",onChange:handleChange,placeholder:placeholder,ref:textareaRef,rows:"3",style:{display:"block",width:"300px"}})]})};stories_Minimum3Rows.displayName="Minimum3Rows",stories_Minimum3Rows.args=defaultArgs;var stories_MaxHeight=function MaxHeight(_ref4){var maxLength=_ref4.maxLength,placeholder=_ref4.placeholder,textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current4;null===(_textareaRef$current4=textareaRef.current)||void 0===_textareaRef$current4||_textareaRef$current4.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Minimalist textarea with a max-height"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{className:"textarea",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:maxLength,name:"pet[notes]",onChange:handleChange,placeholder:placeholder,ref:textareaRef,rows:"1",style:{display:"block",maxHeight:"100px",width:"350px"}})]})};stories_MaxHeight.displayName="MaxHeight",stories_MaxHeight.args=defaultArgs;var stories_FunctionRefComp=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FunctionRefComp,_Component);var _super=_createSuper(FunctionRefComp);function FunctionRefComp(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FunctionRefComp),(_this=_super.call(this,props)).el=null,_this.handleChange=function(e){_this.setState({value:e.currentTarget.value})},_this.setRef=function(node){_this.el=node},_this.state={value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FunctionRefComp,[{key:"render",value:function render(){console.log(this.el);var _this$props=this.props,maxLength=_this$props.maxLength,placeholder=_this$props.placeholder;return Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Textarea component that receives a callback ref"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{id:"my-textarea",maxLength:maxLength,name:"pet[notes]",onChange:this.handleChange,placeholder:placeholder,ref:this.setRef,style:{display:"block",width:"300px"},value:this.state.value})]})}}]),FunctionRefComp}(react.Component),stories_FunctionRef=function FunctionRef(_ref5){var maxLength=_ref5.maxLength,placeholder=_ref5.placeholder;return Object(jsx_runtime.jsx)(stories_FunctionRefComp,{maxLength:maxLength,placeholder:placeholder})};stories_FunctionRef.displayName="FunctionRef",stories_FunctionRef.args=defaultArgs;var stories_ValueFromProps=function ValueFromProps(_ref6){var maxLength=_ref6.maxLength,placeholder=_ref6.placeholder,value=_ref6.value,textareaRef=Object(react.useRef)();return Object(react.useEffect)((function(){var _textareaRef$current5;null===(_textareaRef$current5=textareaRef.current)||void 0===_textareaRef$current5||_textareaRef$current5.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Minimalist textarea"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{className:"textarea",id:"my-textarea",maxLength:maxLength,name:"pet[notes]",placeholder:placeholder,ref:textareaRef,rows:"1",style:{display:"block",width:"350px"},value:value})]})};stories_ValueFromProps.displayName="ValueFromProps",stories_FunctionRef.args=Object.assign({},defaultArgs,{value:"Lorem ipsum dolor sit amet..."});var stories_StyleChanges=function StyleChanges(){var _useState2=_slicedToArray(Object(react.useState)(!1),2),isWide0=_useState2[0],setIsWide0=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(!1),2),isWide1=_useState4[0],setIsWide1=_useState4[1],setCounter0=_slicedToArray(Object(react.useState)(0),2)[1],setCounter1=_slicedToArray(Object(react.useState)(0),2)[1],handleClickToggle0=Object(react.useCallback)((function(){setIsWide0((function(x){return!x}))}),[]),handleClickToggle1=Object(react.useCallback)((function(){setIsWide1((function(x){return!x}))}),[]),handleClickCounter0=Object(react.useCallback)((function(){setCounter0((function(x){return x+1}))}),[]),handleClickCounter1=Object(react.useCallback)((function(){setCounter1((function(x){return x+1}))}),[]);return Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Textarea's width / style changes"}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Toggling the parent's width"}),Object(jsx_runtime.jsxs)("p",{children:["When it goes from smaller to larger, there should not be any extra whitespace leftover at the bottom from its height when it was small. This will only work if ",Object(jsx_runtime.jsx)("code",{children:"ResizeObserver"})," is available in your browser."]}),Object(jsx_runtime.jsx)("button",{onClick:handleClickToggle0,type:"button",children:"Toggle textarea parent's width"}),Object(jsx_runtime.jsx)("button",{onClick:handleClickCounter0,type:"button",children:"Force a state update (for testing)"}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea0",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)("div",{style:{width:isWide0?400:200},children:Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa\ndas\nd\ndolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor",id:"my-textarea0",style:{display:"block",width:"100%"}})})]})]}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Toggling the textarea's width"}),Object(jsx_runtime.jsx)("button",{onClick:handleClickToggle1,type:"button",children:"Toggle textarea width"}),Object(jsx_runtime.jsx)("button",{onClick:handleClickCounter1,type:"button",children:"Force a state update (for testing)"}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea1",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dsa\ndas\nd\ndolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor",id:"my-textarea1",style:{display:"block",width:isWide1?400:200}})]})]})]})};stories_StyleChanges.displayName="StyleChanges";try{stories_FancyTextarea.displayName="FancyTextarea",stories_FancyTextarea.__docgenInfo={description:"",displayName:"FancyTextarea",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#FancyTextarea"]={docgenInfo:stories_FancyTextarea.__docgenInfo,name:"FancyTextarea",path:"stories/index.tsx#FancyTextarea"})}catch(__react_docgen_typescript_loader_error){}try{stories_RegularTextarea.displayName="RegularTextarea",stories_RegularTextarea.__docgenInfo={description:"",displayName:"RegularTextarea",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#RegularTextarea"]={docgenInfo:stories_RegularTextarea.__docgenInfo,name:"RegularTextarea",path:"stories/index.tsx#RegularTextarea"})}catch(__react_docgen_typescript_loader_error){}try{stories_Minimum3Rows.displayName="Minimum3Rows",stories_Minimum3Rows.__docgenInfo={description:"",displayName:"Minimum3Rows",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#Minimum3Rows"]={docgenInfo:stories_Minimum3Rows.__docgenInfo,name:"Minimum3Rows",path:"stories/index.tsx#Minimum3Rows"})}catch(__react_docgen_typescript_loader_error){}try{stories_MaxHeight.displayName="MaxHeight",stories_MaxHeight.__docgenInfo={description:"",displayName:"MaxHeight",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#MaxHeight"]={docgenInfo:stories_MaxHeight.__docgenInfo,name:"MaxHeight",path:"stories/index.tsx#MaxHeight"})}catch(__react_docgen_typescript_loader_error){}try{stories_FunctionRef.displayName="FunctionRef",stories_FunctionRef.__docgenInfo={description:"",displayName:"FunctionRef",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#FunctionRef"]={docgenInfo:stories_FunctionRef.__docgenInfo,name:"FunctionRef",path:"stories/index.tsx#FunctionRef"})}catch(__react_docgen_typescript_loader_error){}try{stories_ValueFromProps.displayName="ValueFromProps",stories_ValueFromProps.__docgenInfo={description:"",displayName:"ValueFromProps",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"any"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.tsx#ValueFromProps"]={docgenInfo:stories_ValueFromProps.__docgenInfo,name:"ValueFromProps",path:"stories/index.tsx#ValueFromProps"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);