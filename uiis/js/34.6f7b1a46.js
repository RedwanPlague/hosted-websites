(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{7574:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-h5 q-my-md"},[e._v("\n      Search Fees\n    ")]),s("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.loadFees,reset:e.resetForm}},[s("q-select",{staticClass:"col-12",attrs:{label:"Student ID(s)",multiple:"","use-chips":"","use-input":"",clearable:"","new-value-mode":"add-unique",outlined:"",rules:[function(){return!!e.columns||"Dummy Text"}]},model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}}),s("q-select",{staticClass:"col-6",attrs:{label:"Fee Type",outlined:"",options:e.feeOptions,rules:[function(){return!!e.feeType||"Please Select Fee Type"}]},model:{value:e.feeType,callback:function(t){e.feeType=t},expression:"feeType"}}),s("session-field",{attrs:{classes:"col-6",label:e.feeType===e.DUE_TYPES.DINING_FEE?"Month Year":"Session",required:"",readonly:e.feeType!==e.DUE_TYPES.DINING_FEE,generic:e.feeType===e.DUE_TYPES.DINING_FEE},model:{value:e.yearMonth,callback:function(t){e.yearMonth=t},expression:"yearMonth"}}),s("div",{staticClass:"col-12"},[s("q-btn",{attrs:{label:"Search",type:"submit",color:"primary",unelevated:""}}),s("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1),e.showResults?s("div",{staticClass:"q-mt-lg"},[s("q-separator",{staticClass:"q-my-sm"}),s("q-table",{attrs:{title:"Results",data:e.fees,columns:e.columns,flat:"","wrap-cells":"","row-key":"_id","selected-rows-label":e.getSelectedString,selected:e.selected,selection:"multiple"},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"header-selection",fn:function(t){return[s("q-checkbox",{on:{input:e.onSelect},model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"scope.selected"}})]}},{key:"body-selection",fn:function(t){return[t.row.status===e.DUE_STATUS.PENDING?s("q-checkbox",{model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"scope.selected"}}):e._e()]}},{key:"body-cell-status",fn:function(t){return[s("q-td",{style:{color:t.value===e.DUE_STATUS.PENDING?"red":"green"},attrs:{props:t}},[e._v("\n            "+e._s(t.value)+"\n          ")])]}}],null,!1,1744454906)}),s("q-btn",{attrs:{label:"Clear Selected",color:"primary",unelevated:"",loading:e.clearLoading,disable:0===e.selected.length},on:{click:e.clearFees}})],1):e._e(),s("q-inner-loading",{attrs:{showing:e.resultsLoading}}),s("div",{staticStyle:{"min-height":"200px"}})],1)},l=[],n=s("ded3"),i=s.n(n),o=(s("4e82"),s("567a")),r=s("c9d9"),c=s("d255"),d=s("6308");const u=e=>`৳ ${e}`,h=e=>new Intl.DateTimeFormat("en",{month:"short",day:"numeric",year:"numeric"}).format(new Date(e)),m=[{name:"issuedTo",label:"Student ID",field:"issuedTo",align:"center"},{name:"amount",label:"Initial Amount",field:"amount",align:"center",format:u},{name:"deadline",label:"Deadline",field:"deadline",align:"center",format:h},{name:"delayFine",label:"Delay Fine",field:"delayFine",align:"center",format:u},{name:"currentAmount",label:"Current Amount",field:"currentAmount",align:"center",format:u},{name:"status",label:"Status",field:"status",align:"center",sortable:!0}],p={style:"font-size: 1.02em;",headerStyle:"font-size: 1.02em;"};Object(c["a"])(m,p);var f={name:"FeeSearch",components:{SessionField:o["a"]},data(){return{ids:null,feeType:null,yearMonth:null,showResults:!1,resultsLoading:!1,clearLoading:!1,fees:[],selected:[],DUE_TYPES:r["b"],DUE_STATUS:r["a"],feeOptions:d["a"],columns:m}},computed:{partialData(){const e={dueType:this.feeType};return this.feeType===r["b"].DINING_FEE?e.yearMonth=new Date(this.yearMonth).toString():e.session=new Date(this.yearMonth).toString(),e},selectedIDs(){return this.selected.map((e=>e.issuedTo))}},methods:{getSelectedString(){return 0===this.selected.length?"":`${this.selected.length} record${this.selected.length>1?"s":""} selected of ${this.fees.length}`},onSelect(){this.selected=this.selected.filter((e=>e.status===r["a"].PENDING))},loadFees(){this.resultsLoading=!0,this.$adminAPI.post("/due/getDue",i()(i()({},this.partialData),{},{ids:this.ids})).then((e=>{this.fees=e.data.sort(((e,t)=>e.status>t.status?-1:1)),this.resultsLoading=!1,this.showResults=!0})).catch((()=>{this.resultsLoading=!1,this.$q.notify({message:"Failed to load due list, Try Again",type:"negative"})}))},clearFees(){this.clearLoading=!0,this.$adminAPI.post("/due/clearDue",i()(i()({},this.partialData),{},{ids:this.selectedIDs})).then((()=>{this.clearLoading=!1,this.fees=this.fees.map((e=>(this.selectedIDs.includes(e.issuedTo)&&(e.status=r["a"].CLEARED),e))),this.selected=[]})).catch((()=>{this.clearLoading=!1,this.$q.notify({message:"Failed to clear selected fees",type:"negative"})}))},resetForm(){this.ids=null,this.feeType=null,this.yearMonth=null}}},y=f,g=s("2877"),b=s("9989"),S=s("0378"),T=s("ddd8"),D=s("9c40"),E=s("eb85"),F=s("eaac"),q=s("8f8e"),v=s("db86"),I=s("74f7"),w=s("eebe"),_=s.n(w),k=Object(g["a"])(y,a,l,!1,null,null,null);t["default"]=k.exports;_()(k,"components",{QPage:b["a"],QForm:S["a"],QSelect:T["a"],QBtn:D["a"],QSeparator:E["a"],QTable:F["a"],QCheckbox:q["a"],QTd:v["a"],QInnerLoading:I["a"]})}}]);