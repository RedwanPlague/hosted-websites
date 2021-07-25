(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"103e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"block"},[s("h5",[e._v("\n    Create New Issue\n    "),s("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:e.onClick}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}]},[s("q-form",{on:{submit:e.createIssue}},[s("q-input",{staticClass:"full-row",attrs:{filled:"",label:"Title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),s("div",{staticClass:"full-row"},[s("span",{staticClass:"label q-mr-md"},[e._v("Selected Students:")]),e._l(e.details.students,(function(t){return s("q-chip",{key:t,attrs:{outline:"",color:"black","text-color":"white",square:""}},[e._v("\n          "+e._s(t)+"\n        ")])})),0===e.details.students.length?s("span",[e._v("None")]):e._e()],2),s("div",{staticClass:"full-row"},[s("span",{staticClass:"label q-mr-md"},[e._v("Selected Audience:")]),e._l(e.audience,(function(t){return s("span",{key:t.id},[t.ase?s("q-chip",{attrs:{outline:"",color:"black","text-color":"white",square:"",removable:t.removable},on:{remove:function(e){t.ase=!1}}},[e._v("\n            "+e._s(t.id)+" - "+e._s(t.name)+"\n          ")]):e._e()],1)}))],2),s("div",[s("q-btn-dropdown",{attrs:{color:"primary",label:"Add Audience","no-caps":""}},[s("q-list",e._l(e.audience,(function(t){return s("q-item",{directives:[{name:"show",rawName:"v-show",value:!t.ase,expression:"!audi.ase"},{name:"close-popup",rawName:"v-close-popup"}],key:t.id,attrs:{clickable:""},on:{click:function(e){t.ase=!0}}},[s("q-item-section",[s("q-item-label",[e._v(e._s(t.id)+" - "+e._s(t.name))])],1)],1)})),1)],1)],1),s("div",{staticClass:"q-mt-xl"},[s("span",{staticClass:"baam label"},[e._v("Add description:")]),s("q-editor",{attrs:{"min-height":"5rem"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),s("div",{staticClass:"row justify-center"},[s("div",[s("q-btn",{staticClass:"q-mt-xl",attrs:{label:"Create",type:"submit",color:"primary","no-caps":"",disable:!e.details.students.length||!e.title}}),e.details.students.length&&e.title?e._e():s("q-tooltip",{attrs:{"content-style":{"font-size":"14px"}}},[e._v("\n            "+e._s(e.tooltipMsg)+"\n          ")])],1)])],1)],1)])},i=[],n=(s("e01a"),s("758b")),l=(s("bc78"),{name:"IssueForm",props:["details"],data(){return{title:"",description:"",audience:[],expanded:!1}},methods:{onClick(){this.expanded=!this.expanded},async createIssue(){const e={courseID:this.details.courseID,evalType:this.details.evalType,part:this.details.part,evalOwner:this.details.evalOwner,title:this.title,description:this.description,allStudentSelected:this.details.allStudentSelected,students:this.details.students,teachers:this.audience.filter((e=>e.ase)).map((e=>e.id))},t=this.$q.notify({spinner:!0,message:"Creating",group:!1,timeout:0,position:"bottom-left"});await n["b"].post("teacher/issues/create",e),t({icon:"done",message:"Created!",position:"bottom-left",spinner:!1,timeout:1500})}},watch:{expanded(e){this.$emit("barbe",this.expanded)}},async created(){const e=this.$store.getters["scrutinizer/currentCourseInfo"].audience,t=this.$store.getters["user"];this.audience=e.map((e=>({name:e.name,id:e.id,removable:!0,ase:!1})));const s=this.audience.find((e=>e.id===this.details.evalOwner));s?(s.removable=!1,s.ase=!0):this.audience.push({name:this.details.evalOwnerName,id:this.details.evalOwner,removable:!1,ase:!0});const a=this.audience.find((e=>e.id===t.id));a?(a.removable=!1,a.ase=!0):this.audience.push({name:t.name,id:t.id,removable:!1,ase:!0})},computed:{tooltipMsg(){return 0!=this.details.students.length||this.title?0==this.details.students.length?"Please select at least one student":this.title?"":"Please add a title":"Please add a title and select at least one student"}}}),o=l,d=(s("b746"),s("2877")),r=s("9c40"),c=s("0378"),u=s("27f9"),p=s("b047"),m=s("f20b"),h=s("1c1c"),b=s("66e5"),v=s("4074"),f=s("0170"),w=s("d66b"),_=s("05c0"),q=s("7f67"),C=s("eebe"),x=s.n(C),k=Object(d["a"])(o,a,i,!1,null,"33ec09fa",null);t["default"]=k.exports;x()(k,"components",{QBtn:r["a"],QForm:c["a"],QInput:u["a"],QChip:p["a"],QBtnDropdown:m["a"],QList:h["a"],QItem:b["a"],QItemSection:v["a"],QItemLabel:f["a"],QEditor:w["a"],QTooltip:_["a"]}),x()(k,"directives",{ClosePopup:q["a"]})},6127:function(e,t,s){},b746:function(e,t,s){"use strict";s("6127")}}]);