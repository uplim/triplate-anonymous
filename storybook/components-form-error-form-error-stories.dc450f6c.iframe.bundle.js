"use strict";(self.webpackChunktriplate_anonymous=self.webpackChunktriplate_anonymous||[]).push([[159],{"./src/components/form-error/form-error.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithInput:()=>WithInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_error_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),edit_field=__webpack_require__("./src/app/new/_components/edit-field/edit-field.tsx"),input_text=__webpack_require__("./src/components/input-text/input-text.tsx"),hi=__webpack_require__("./node_modules/react-icons/hi/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),form_error_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/form-error/form-error.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(form_error_module.Z,options);const form_error_form_error_module=form_error_module.Z&&form_error_module.Z.locals?form_error_module.Z.locals:void 0;var __jsx=react.createElement,FormError=function FormError(_ref){var id=_ref.id,messages=_ref.messages;return __jsx("div",{className:"".concat(form_error_form_error_module.outer," ").concat(messages?form_error_form_error_module.show:form_error_form_error_module.disable),id,role:"alert"},__jsx(hi.baL,{className:form_error_form_error_module.icon,size:20}),__jsx("p",{className:form_error_form_error_module.message},null==messages?void 0:messages.join("\n")))};FormError.displayName="FormError";try{FormError.displayName="FormError",FormError.__docgenInfo={description:"",displayName:"FormError",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},messages:{defaultValue:null,description:"",name:"messages",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form-error/form-error.tsx#FormError"]={docgenInfo:FormError.__docgenInfo,name:"FormError",path:"src/components/form-error/form-error.tsx#FormError"})}catch(__react_docgen_typescript_loader_error){}var form_error_stories_jsx=react.createElement;const form_error_stories={title:"components/FormError",component:FormError,argTypes:{id:{description:"一意のid。エラーとinputフィールドは紐づける必要があるため、idは必須で受け取る"},messages:{description:"エラーの文言を配列で受け取る"}},tags:["autodocs"]};var Default={args:{id:"id",messages:["必須です"]}},WithInput={render:function render(_ref){var id=_ref.id,messages=_ref.messages;return form_error_stories_jsx(edit_field.B,{id,label:"表示される名前"},form_error_stories_jsx(input_text.o,{id,defaultValue:""}),form_error_stories_jsx(FormError,{id,messages}))},args:{id:"id",messages:["必須です","20文字以内にしてください"]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'id',\n    messages: ['必須です']\n  }\n}",...Default.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:"{\n  render: ({\n    id,\n    messages\n  }) => <EditField id={id} label=\"表示される名前\">\n      <InputText id={id} defaultValue=\"\" />\n      <FormError id={id} messages={messages} />\n    </EditField>,\n  args: {\n    id: 'id',\n    messages: ['必須です', '20文字以内にしてください']\n  }\n}",...WithInput.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithInput"]},"./src/app/new/_components/edit-field/edit-field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>EditField});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),edit_field_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/new/_components/edit-field/edit-field.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(edit_field_module.Z,options);const edit_field_edit_field_module=edit_field_module.Z&&edit_field_module.Z.locals?edit_field_module.Z.locals:void 0;var __jsx=react.createElement,EditField=function EditField(_ref){var id=_ref.id,label=_ref.label,description=_ref.description,children=_ref.children;return __jsx("div",null,__jsx("label",{className:edit_field_edit_field_module.label,htmlFor:id,"data-testid":"edit-field"},label,description&&__jsx("span",{className:edit_field_edit_field_module.description},description)),children)};EditField.displayName="EditField";try{EditField.displayName="EditField",EditField.__docgenInfo={description:"",displayName:"EditField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/new/_components/edit-field/edit-field.tsx#EditField"]={docgenInfo:EditField.__docgenInfo,name:"EditField",path:"src/app/new/_components/edit-field/edit-field.tsx#EditField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input-text/input-text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>InputText});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),input_text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/input-text/input-text.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(input_text_module.Z,options);const input_text_input_text_module=input_text_module.Z&&input_text_module.Z.locals?input_text_module.Z.locals:void 0;var _excluded=["id","name","defaultValue","placeholder"],__jsx=react.createElement,InputText=function InputText(_ref){var id=_ref.id,name=_ref.name,defaultValue=_ref.defaultValue,placeholder=_ref.placeholder,ariaAttributes=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("input",(0,esm_extends.Z)({id,name,className:input_text_input_text_module.input,placeholder,defaultValue,type:"text"},ariaAttributes))};InputText.displayName="InputText";try{InputText.displayName="InputText",InputText.__docgenInfo={description:"",displayName:"InputText",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input-text/input-text.tsx#InputText"]={docgenInfo:InputText.__docgenInfo,name:"InputText",path:"src/components/input-text/input-text.tsx#InputText"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/new/_components/edit-field/edit-field.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".edit-field_label__VHYcm {\n  display: block;\n  font-size: var(--font-md);\n  margin-bottom: 8px;\n  margin-top: 16px;\n}\n\n.edit-field_description__6Wgyf {\n  font-size: var(--font-sm);\n  margin-left: 16px;\n  color: var(--color-gray);\n}\n","",{version:3,sources:["webpack://./src/app/new/_components/edit-field/edit-field.module.css"],names:[],mappings:"AAAA;EACE,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,wBAAwB;AAC1B",sourcesContent:[".label {\n  display: block;\n  font-size: var(--font-md);\n  margin-bottom: 8px;\n  margin-top: 16px;\n}\n\n.description {\n  font-size: var(--font-sm);\n  margin-left: 16px;\n  color: var(--color-gray);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={label:"edit-field_label__VHYcm",description:"edit-field_description__6Wgyf"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/form-error/form-error.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".form-error_outer__oOSR5 {\n  align-items: flex-start;\n  margin-top: 8px;\n  color: var(--color-red);\n}\n\n.form-error_icon__wk7xJ {\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n\n.form-error_message__c4msS {\n  font-size: var(--font-sm);\n  line-height: 20px;\n  white-space: pre-wrap;\n}\n\n.form-error_show__v9Gf2 {\n  display: flex;\n}\n\n.form-error_disable__OUDsA {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/components/form-error/form-error.module.css"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:[".outer {\n  align-items: flex-start;\n  margin-top: 8px;\n  color: var(--color-red);\n}\n\n.icon {\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n\n.message {\n  font-size: var(--font-sm);\n  line-height: 20px;\n  white-space: pre-wrap;\n}\n\n.show {\n  display: flex;\n}\n\n.disable {\n  display: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={outer:"form-error_outer__oOSR5",icon:"form-error_icon__wk7xJ",message:"form-error_message__c4msS",show:"form-error_show__v9Gf2",disable:"form-error_disable__OUDsA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/input-text/input-text.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".input-text_input__ul3JK {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px 16px;\n  font-size: var(--font-md);\n  background-color: var(--bg-gray-1);\n  border: 0;\n  border-radius: 100px;\n  outline: none;\n}\n\n.input-text_input__ul3JK:hover,\n.input-text_input__ul3JK:focus {\n  outline: 2px solid var(--bg-gray-2);\n}\n\n/* invalid時 */\n.input-text_input__ul3JK[aria-invalid='true'],\n.input-text_input__ul3JK:hover[aria-invalid='true'],\n.input-text_input__ul3JK:focus[aria-invalid='true'] {\n  outline: 2px solid var(--outline-red);\n}\n\n/* disabled時 */\n.input-text_input__ul3JK[aria-disabled='true'] {\n  background-color: var(--bg-gray-2);\n}\n","",{version:3,sources:["webpack://./src/components/input-text/input-text.module.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,kCAAkC;EAClC,SAAS;EACT,oBAAoB;EACpB,aAAa;AACf;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA,aAAa;AACb;;;EAGE,qCAAqC;AACvC;;AAEA,cAAc;AACd;EACE,kCAAkC;AACpC",sourcesContent:[".input {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px 16px;\n  font-size: var(--font-md);\n  background-color: var(--bg-gray-1);\n  border: 0;\n  border-radius: 100px;\n  outline: none;\n}\n\n.input:hover,\n.input:focus {\n  outline: 2px solid var(--bg-gray-2);\n}\n\n/* invalid時 */\n.input[aria-invalid='true'],\n.input:hover[aria-invalid='true'],\n.input:focus[aria-invalid='true'] {\n  outline: 2px solid var(--outline-red);\n}\n\n/* disabled時 */\n.input[aria-disabled='true'] {\n  background-color: var(--bg-gray-2);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={input:"input-text_input__ul3JK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);