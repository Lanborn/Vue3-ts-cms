(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74cc24e0"],{"078e":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("7a23");function o(){var e=Object(a["ref"])(),t=function(){var t;null===(t=e.value)||void 0===t||t.getPageData()},n=function(t){var n;null===(n=e.value)||void 0===n||n.getPageData(t)};return[e,t,n]}},3260:function(e,t,n){"use strict";n("a8ee")},a8ee:function(e,t,n){},cacb:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"department"};function l(e,t,n,l,c,r){var i=Object(a["resolveComponent"])("page-search"),d=Object(a["resolveComponent"])("page-content"),p=Object(a["resolveComponent"])("page-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(i,{searchFormConfig:e.searchFormConfig,onResetBtnClick:e.handleResetClick,onQueryBtnClick:e.handleQueryClick},null,8,["searchFormConfig","onResetBtnClick","onQueryBtnClick"]),Object(a["createVNode"])(d,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageName:"department",onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),Object(a["createVNode"])(p,{ref:"pageModalRef",defaultInfo:e.defaultInfo,modalConfig:e.modalConfig,pageName:"department"},null,8,["defaultInfo","modalConfig"])])}var c=n("3835"),r=n("fe8c"),i=n("3573"),d=n("9d1a"),p={formItems:[{field:"name",label:"部门名称",type:"input",placeholder:"请输入部门名称..."},{field:"create_time",type:"datepicker",label:"创建时间",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}},{field:"leader",label:"部门管理",type:"input",placeholder:"请输入部门管理人.."}],labelWidth:"120px",itemStyle:{padding:"10px 40px"}},u={propList:[{prop:"id",label:"部门id",minWidth:"100"},{prop:"name",label:"部门名称",minWidth:"100"},{prop:"create_time",label:"创建时间",minWidth:"250",slotName:"create_time"},{prop:"update_time",label:"更新时间",minWidth:"250",slotName:"update_time"},{prop:"leader",label:"部门领导",minWidth:"120",slotName:"operation"},{label:"操作",minWidth:"120",slotName:"handler"}],showTabelIndex:!0,showTabelSelect:!0},f={formItems:[{field:"id",type:"text",label:"id",isHidden:!0},{field:"name",type:"input",label:"部门名称",placeholder:"请输入部门名称"},{field:"parentId",type:"select",label:"上级部门",placeholder:"请选择上级部门",options:[{title:"总裁办",value:1},{title:"研发部",value:2}]},{field:"leader",type:"input",label:"领导名称",placeholder:"请输入领导名称"}],colLayout:{span:24}},s=n("078e"),m=n("6a85"),b=Object(a["defineComponent"])({name:"department",components:{PageSearch:r["a"],PageContent:i["a"],PageModal:d["a"]},setup:function(){var e=Object(s["a"])(),t=Object(c["a"])(e,3),n=t[0],a=t[1],o=t[2],l=Object(m["a"])(),r=Object(c["a"])(l,4),i=r[0],d=r[1],b=r[2],h=r[3];return{searchFormConfig:p,contentTableConfig:u,modalConfig:f,pageContentRef:n,handleResetClick:a,handleQueryClick:o,defaultInfo:d,pageModalRef:i,handleNewData:b,handleEditData:h}}}),h=n("6b0d"),C=n.n(h);const v=C()(b,[["render",l]]);t["default"]=v},fe8c:function(e,t,n){"use strict";var a=n("7a23"),o=function(e){return Object(a["pushScopeId"])("data-v-76879a63"),e=e(),Object(a["popScopeId"])(),e},l={class:"page-search"},c=o((function(){return Object(a["createElementVNode"])("h1",{class:"header"},"检索",-1)})),r={class:"handle-btns"},i=Object(a["createTextVNode"])("重置"),d=Object(a["createTextVNode"])("搜索");function p(e,t,n,o,p,u){var f=Object(a["resolveComponent"])("el-button"),s=Object(a["resolveComponent"])("an-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createVNode"])(s,Object(a["mergeProps"])(e.searchFormConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),{title:Object(a["withCtx"])((function(){return[c]})),footer:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(f,{icon:"el-icon-refresh",onClick:e.handleResetClick},{default:Object(a["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(a["createVNode"])(f,{type:"primary",icon:"el-icon-search",onClick:e.handleQueryClick},{default:Object(a["withCtx"])((function(){return[d]})),_:1},8,["onClick"])])]})),_:1},16,["modelValue"])])}var u=n("b85c"),f=n("0e3f"),s=Object(a["defineComponent"])({props:{searchFormConfig:{type:Object,reuqired:!0}},components:{AnForm:f["a"]},emits:["resetBtnClick","queryBtnClick"],setup:function(e,t){var n,o,l,c=t.emit,r=null!==(n=null===(o=e.searchFormConfig)||void 0===o?void 0:o.formItems)&&void 0!==n?n:[],i={},d=Object(u["a"])(r);try{for(d.s();!(l=d.n()).done;){var p=l.value;i[p.field]=""}}catch(b){d.e(b)}finally{d.f()}var f=Object(a["ref"])(i),s=function(){for(var e in i)f.value["".concat(e)]=i[e];f.value=i,c("resetBtnClick")},m=function(){c("queryBtnClick",f.value)};return{formData:f,handleResetClick:s,handleQueryClick:m}}}),m=(n("3260"),n("6b0d")),b=n.n(m);const h=b()(s,[["render",p],["__scopeId","data-v-76879a63"]]);var C=h;t["a"]=C}}]);
//# sourceMappingURL=chunk-74cc24e0.bfd40d1a.js.map