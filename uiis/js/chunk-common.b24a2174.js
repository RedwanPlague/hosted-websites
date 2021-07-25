(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0286":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));const a=(e,t)=>JSON.stringify(e)===JSON.stringify(t),i=(e,t)=>(e||(e=""),t||(t=""),e.toString()===t.toString()),l=e=>JSON.parse(JSON.stringify(e)),s=e=>()=>!e||parseFloat(e)>=0||"Negative value not allowed"},"0fe9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,readonly:e.readonly,outlined:"","use-chips":e.multiple,multiple:e.multiple,clearable:e.multiple,"use-input":"","input-debounce":"0",rules:[function(){return!e.required||e.multiple||!!e.value||"Please Select "+e.label}]},on:{input:function(t){return e.$emit("input",t)},"input-value":function(t){e.newRole=t},filter:e.optionFilter},scopedSlots:e._u([e.allowAddNew&&e.notDuplicate?{key:"append",fn:function(){return[n("q-btn",{attrs:{icon:"add",flat:"",color:"primary"},on:{click:e.addNewRole}})]},proxy:!0}:null,{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}],null,!0)})},i=[],l=n("ded3"),s=n.n(l),o=n("e824"),r=n("7338"),c=n("2f62"),u={name:"RolePicker",mixins:[o["a"],r["a"]],data(){return{newRole:null}},props:{allowAddNew:{type:Boolean,default:!1}},computed:s()(s()({},Object(c["d"])("admin",["roleList"])),{},{notDuplicate(){return this.newRole&&!this.mainList.find((e=>e.value===this.newRole))}}),methods:s()(s()({},Object(c["c"])("admin",["fetchRoleList"])),{},{loadRoles(){this.fetchRoleList().then((()=>{this.mainList=this.roleList.map((e=>({value:e._id,label:e._id}))),this.fixValue()}))},addNewRole(){this.callCreateApi("/role/create",{role:this.newRole,privileges:[]},`Role '${this.newRole}'`).then((()=>{this.fetchRoleList().catch((()=>{}));const e={value:this.newRole,label:this.newRole};this.mainList.push(e),this.$emit("input",e)}))}}),created(){this.loadRoles()},watch:{roleList(){this.loadRoles()}}},d=u,p=n("2877"),h=n("ddd8"),f=n("9c40"),m=n("66e5"),b=n("4074"),y=n("eebe"),v=n.n(y),g=Object(p["a"])(d,a,i,!1,null,"d74c8168",null);t["a"]=g.exports;v()(g,"components",{QSelect:h["a"],QBtn:f["a"],QItem:m["a"],QItemSection:b["a"]})},"29b9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,outlined:"",readonly:e.readonly,rules:[function(){return!e.required||e.multiple||!!e.value||"Please Select "+e.label},function(){return!e.required||!e.multiple||Array.isArray(e.value)&&e.value.length>0||"Please Select At least one "+e.label}],"use-chips":e.multiple,multiple:e.multiple,clearable:e.multiple,"use-input":""},on:{input:function(t){return e.$emit("input",t)},filter:e.optionFilter},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}])})},i=[],l=n("ded3"),s=n.n(l),o=n("e824"),r=n("2f62"),c={name:"CoursePicker",props:{onlyOffered:{type:Boolean,default:!1}},mixins:[o["a"]],computed:s()({},Object(r["d"])("admin",["courseList"])),methods:s()(s()({},Object(r["c"])("admin",["fetchCourseList"])),{},{useData(e){this.mainList=e.map((e=>({value:{courseID:e.courseID,syllabusID:e.syllabusID},label:`${e.courseID}(${e.syllabusID}) - ${e.title}`}))),this.fixValue()},loadCourses(){this.onlyOffered?this.$adminAPI.get("/currentSession/coursesToOfferWithTitle").then((e=>{this.useData(e.data.coursesToOffer)})):this.fetchCourseList().then((()=>{this.useData(this.courseList)}))}}),created(){this.loadCourses()},watch:{courseList(){this.loadCourses()}}},u=c,d=n("2877"),p=n("ddd8"),h=n("66e5"),f=n("4074"),m=n("eebe"),b=n.n(m),y=Object(d["a"])(u,a,i,!1,null,"b9f3621a",null);t["a"]=y.exports;b()(y,"components",{QSelect:p["a"],QItem:h["a"],QItemSection:f["a"]})},"567a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-input",{class:e.classes,attrs:{label:e.label,value:e.value,outlined:"",readonly:e.readonly,"input-class":{"cursor-pointer":!e.readonly},rules:[function(){return!e.required||!!e.value||"Please Enter "+e.label}]},on:{input:function(t){return e.$emit("input",t)},click:function(t){!e.readonly&&e.$refs.monthPicker.show()}},scopedSlots:e._u([e.readonly?null:{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"monthPicker",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{minimal:"",mask:"MMM YYYY","emit-immediately":"","default-view":"Years",value:e.value},on:{input:e.checkValue}})],1)],1)]},proxy:!0}],null,!0)})},i=[],l=n("a796"),s=n("dce8"),o={name:"SessionField",props:{label:{type:String,default:"Session"},value:{type:String,default:null},classes:{type:[Object,String]},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},generic:{type:Boolean,default:!1}},methods:{checkValue(e,t){"month"===t&&this.$refs.monthPicker.hide(),this.$emit("input",e)},fetchCurrentSession(){Object(s["a"])("/currentSession",null,"Current Session").then((e=>{this.$emit("input",Object(l["a"])(e.data.session))}))},preLoad(){this.generic?this.$emit("input",Object(l["a"])(new Date)):this.fetchCurrentSession()}},created(){this.preLoad()},watch:{generic(){this.preLoad()}}},r=o,c=n("2877"),u=n("27f9"),d=n("0016"),p=n("7cbe"),h=n("52ee"),f=n("eebe"),m=n.n(f),b=Object(c["a"])(r,a,i,!1,null,"60e43cf8",null);t["a"]=b.exports;m()(b,"components",{QInput:u["a"],QIcon:d["a"],QPopupProxy:p["a"],QDate:h["a"]})},6308:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var a=n("4360"),i=n("c9d9"),l=n("0286");const s=a["a"].getters.userHasPrivilege;let o=Object(l["a"])(i["b"]);s(i["d"].LEVEL_CHANGING_FEE_MANAGEMENT)||delete o.LEVEL_CHANGING_FEE,s(i["d"].EXAM_FEE_MANAGEMENT)||delete o.EXAM_FEE,s(i["d"].DINING_FEE_MANAGEMENT)||delete o.DINING_FEE,o=Object.values(o);let r=Object(l["a"])(i["c"]);s(i["d"].LIBRARY_FINE_MANAGEMENT)||delete r.LIBRARY_FINE,s(i["d"].LAB_FINE_MANAGEMENT)||delete r.LAB_FINE,s(i["d"].DISCIPLINARY_FINE_MANAGEMENT)||delete r.DISCIPLINARY_FINE,r=Object.values(r)},7338:function(e,t,n){"use strict";var a=n("758b"),i=n("b2c5");t["a"]={data(){return{createLoading:!1}},methods:{callCreateApi(e,t,n){return Object(i["b"])(t),this.createLoading=!0,new Promise(((i,l)=>{a["a"].post(e,t).then((e=>{this.createLoading=!1;const t=`${n} created successfully`;this.$q.notify({message:t,type:"positive"}),console.log(t),console.log(e),i(e)})).catch((e=>{this.createLoading=!1;const t=`Failed to create ${n}`;this.$q.notify({message:t,type:"negative"}),console.log(t),console.log(e.response),l(e)}))}))}}}},"88f5":function(e,t,n){"use strict";n("ddb0");var a=n("758b"),i=n("0286"),l=n("b2c5");t["a"]={data(){return{viewing:!0,editLoading:!1,oldDataLoading:!1,oldData:{}}},computed:{label(){return this.viewing?"View":"Edit"}},methods:{loadOldDataIntoForm(){for(const e of Object.keys(this.oldData))this[e]=Object(i["a"])(this.oldData[e])},fetchOldData(e,t,n,i=0){return this.oldDataLoading=!0,new Promise(((l,s)=>{a["a"].get(e,{params:t}).then((e=>{0===e.data.length&&s({doesNotExist:!0}),this.oldDataLoading=!1,this.oldData=0===i?e.data[0]:e.data,this.loadOldDataIntoForm(),console.log(`Old data for ${n} loaded`),console.log(e),l(e)})).catch((e=>{this.oldDataLoading=!1,console.log(`Failed to load Old data for ${n}`),console.log(e.response),this.$q.notify({message:`Failed to load data for ${n}`,type:"negative"}),s(e)}))}))},callEditApi(e,t,n){return Object(l["b"])(t),this.editLoading=!0,new Promise(((l,s)=>{a["a"].patch(e,t).then((e=>{this.editLoading=!1,this.oldData=Object(i["a"])(t);const a=`${n} updated successfully`;this.$q.notify({message:a,type:"positive"}),console.log(a),console.log(e),l(e)})).catch((e=>{this.editLoading=!1;const t=`Failed to update ${n}, Please Try Again`;this.$q.notify({message:t,type:"negative"}),console.log(t),console.log(e.response),s(e)}))}))}}}},9053:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,outlined:"",readonly:e.readonly,rules:[function(){return!e.required||!!e.value||"Please Select a "+e.label}],"use-input":""},on:{input:function(t){return e.$emit("input",t)},filter:e.optionFilter},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}])})},i=[],l=n("ded3"),s=n.n(l),o=n("e824"),r=n("2f62"),c={name:"HallPicker",mixins:[o["a"]],computed:s()({},Object(r["d"])("admin",["hallList"])),methods:s()(s()({},Object(r["c"])("admin",["fetchHallList"])),{},{loadHalls(){this.fetchHallList().then((()=>{this.mainList=this.hallList.map((e=>({value:e.id,label:`${e.id} - ${e.name}`}))),this.fixValue()}))}}),created(){this.loadHalls()},watch:{hallList(){this.loadHalls()}}},u=c,d=n("2877"),p=n("ddd8"),h=n("66e5"),f=n("4074"),m=n("eebe"),b=n.n(m),y=Object(d["a"])(u,a,i,!1,null,"516bce57",null);t["a"]=y.exports;b()(y,"components",{QSelect:p["a"],QItem:h["a"],QItemSection:f["a"]})},"91a4":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:e.path,exact:""}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{staticStyle:{"font-size":"2em"},attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},path:{type:String,default:"#"},icon:{type:String,default:""}}},s=l,o=n("2877"),r=n("66e5"),c=n("4074"),u=n("0016"),d=n("0170"),p=n("714f"),h=n("eebe"),f=n.n(h),m=Object(o["a"])(s,a,i,!1,null,null,null);t["a"]=m.exports;f()(m,"components",{QItem:r["a"],QItemSection:c["a"],QIcon:u["a"],QItemLabel:d["a"]}),f()(m,"directives",{Ripple:p["a"]})},"92ad":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-input",{class:e.classes,attrs:{value:e.value,label:e.label,outlined:"",rules:[function(){return!e.required||!!e.value||"Please Enter a "+e.label}]},on:{input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{label:"generate",flat:"",dense:"",color:"primary"},on:{click:function(t){e.$emit("input",e.passwordGenerator())}}})]},proxy:!0}])})},i=[];const l="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKNOPQRSTUVWXYZ1234567890@#$%^&",s=(e,t)=>e+Math.floor(Math.random()*(t-e+1)),o=()=>{const e=10,t=10,n=s(e,t);let a="";for(let i=0;i<n;i++)a+=l[s(0,l.length-1)];return a};var r=o,c={name:"PasswordMakerAndPicker",props:{label:{type:String,default:"Password"},value:{type:String,default:""},classes:{type:[Object,String],default:""},required:{type:Boolean,default:!1}},methods:{passwordGenerator:r}},u=c,d=n("2877"),p=n("27f9"),h=n("9c40"),f=n("eebe"),m=n.n(f),b=Object(d["a"])(u,a,i,!1,null,"eaa9c11c",null);t["a"]=b.exports;m()(b,"components",{QInput:p["a"],QBtn:h["a"]})},a49b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,readonly:e.readonly,outlined:"","use-chips":e.multiple,multiple:e.multiple,clearable:e.multiple,"use-input":"","input-debounce":"0",rules:[function(){return!e.required||e.multiple||!!e.value||"Please Select "+e.label}]},on:{input:function(t){return e.$emit("input",t)},filter:e.optionFilter},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}])})},i=[],l=n("e824"),s=n("c9d9"),o={name:"PrivilegePicker",mixins:[l["a"]],methods:{loadPrivileges(){this.mainList=Object.values(s["d"]).map((e=>({value:e,label:e}))),this.fixValue()}},created(){this.loadPrivileges()},watch:{privilegeList(){this.loadPrivileges()}}},r=o,c=n("2877"),u=n("ddd8"),d=n("66e5"),p=n("4074"),h=n("eebe"),f=n.n(h),m=Object(c["a"])(r,a,i,!1,null,"3d0b6f20",null);t["a"]=m.exports;f()(m,"components",{QSelect:u["a"],QItem:d["a"],QItemSection:p["a"]})},a688:function(e,t,n){"use strict";var a=n("758b"),i=n("b2c5"),l=n("2a19");t["a"]={data(){return{searchLoading:!1,showResults:!1,tableData:[]}},methods:{callSearchApi(e,t,n){return Object(i["b"])(t),this.searchLoading=!0,new Promise(((i,s)=>{a["a"].get(e,{params:t}).then((e=>{this.searchLoading=!1,this.tableData=e.data,this.showResults=!0,console.log(`${n} search results loaded`),console.log(e),i(e)})).catch((e=>{this.searchLoading=!1,console.log(`Search failed for ${n}`),console.log(e.response),l["a"].create({message:`Failed to load ${n}. Try Again`,type:"negative"}),s(e)}))}))}}}},a796:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s}));n("ddb0");const a=e=>e.toString().padStart(2,"0"),i=e=>{e%=86400,e=(e-e%60)/60;const t=e%60;let n=(e-t)/60;const i=n<12?"AM":"PM";return 0===n?n=12:n>12&&(n-=12),`${a(n)}:${a(t)} ${i}`},l=e=>{e%=86400,e=(e-e%60)/60;const t=e%60;let n=(e-t)/60;return`${a(n)}:${a(t)}`},s=e=>{const[t,n]=e.split(":").map((e=>parseInt(e)));return 60*(60*t+n)},o=e=>new Intl.DateTimeFormat("en",{month:"short",year:"numeric"}).format(new Date(e))},b2c5:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("ddb0");const a=e=>{const t=[null,""];for(const n of Object.keys(e))t.includes(e[n])&&delete e[n]},i=e=>Array.isArray(e)?e.map((e=>e.value)):"string"===typeof e?e:e?e.value:null},d255:function(e,t,n){"use strict";n("ddb0");const a=(e,t)=>{for(const n of["style","headerStyle"])if(t.hasOwnProperty(n))for(let a=0;a<e.length;a++)e[a].hasOwnProperty(n)?e[a][n]+=";"+t[n]:e[a][n]=t[n]};t["a"]=a},d795:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,outlined:"",readonly:e.readonly,rules:[function(){return!e.required||!!e.value||"Please Select a "+e.label}],"use-input":""},on:{input:function(t){return e.$emit("input",t)},filter:e.optionFilter},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}])})},i=[],l=n("ded3"),s=n.n(l),o=n("e824"),r=n("2f62"),c={name:"DepartmentPicker",mixins:[o["a"]],computed:s()({},Object(r["d"])("admin",["deptList"])),methods:s()(s()({},Object(r["c"])("admin",["fetchDeptList"])),{},{loadDepartments(){this.fetchDeptList().then((()=>{this.mainList=this.deptList.map((e=>({value:e.id,label:`${e.id} - ${e.name}`}))),this.fixValue()}))}}),created(){this.loadDepartments()},watch:{deptList(){this.loadDepartments()}}},u=c,d=n("2877"),p=n("ddd8"),h=n("66e5"),f=n("4074"),m=n("eebe"),b=n.n(m),y=Object(d["a"])(u,a,i,!1,null,"6750d494",null);t["a"]=y.exports;b()(y,"components",{QSelect:p["a"],QItem:h["a"],QItemSection:f["a"]})},e824:function(e,t,n){"use strict";const a=(e,t)=>e.toLowerCase().indexOf(t.toLowerCase())>-1;var i=n("0286");t["a"]={props:{label:{type:String,required:!0},value:{type:[Object,Array,String],default:null},classes:{type:[Object,String],default:""},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data(){return{options:[],mainList:[]}},methods:{fixValue(){if(0!==this.mainList.length)if(this.multiple){if(Array.isArray(this.value)&&this.value.length>0){if(this.mainList.includes(this.value[0]))return;const e=this.value.map((e=>JSON.stringify(e))),t=this.mainList.filter((t=>e.includes(JSON.stringify(t.value))));Object(i["b"])(this.value,t)||this.$emit("input",t)}}else{const e=JSON.stringify(this.value),t=this.mainList.find((t=>JSON.stringify(t.value)===e));t&&this.$emit("input",t)}},optionFilter(e,t){t(""!==e?()=>{this.options=this.mainList.filter((t=>a(t.label,e)))}:()=>{this.options=this.mainList})}},watch:{value:{handler(){this.fixValue()}}}}},e92d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{class:e.classes,attrs:{value:e.value,options:e.options,label:e.label,outlined:"",readonly:e.readonly,rules:[function(){return!e.required||!!e.value||"Please Select "+e.label}],"use-chips":e.multiple,multiple:e.multiple,clearable:e.multiple,"use-input":""},on:{input:function(t){return e.$emit("input",t)},filter:e.optionFilter},scopedSlots:e._u([{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",{staticClass:"text-grey"},[e._v("\n        No results\n      ")])],1)]},proxy:!0}])})},i=[],l=n("ded3"),s=n.n(l),o=n("e824"),r=n("2f62"),c={name:"TeacherPicker",mixins:[o["a"]],computed:s()({},Object(r["d"])("admin",["teacherList"])),methods:s()(s()({},Object(r["c"])("admin",["fetchTeacherList"])),{},{loadTeachers(){this.fetchTeacherList().then((()=>{this.mainList=this.teacherList.map((e=>({value:e.id,label:`(${e.id}) ${e.name}`}))),this.fixValue()}))}}),created(){this.loadTeachers()},watch:{teacherList(){this.loadTeachers()}}},u=c,d=n("2877"),p=n("ddd8"),h=n("66e5"),f=n("4074"),m=n("eebe"),b=n.n(m),y=Object(d["a"])(u,a,i,!1,null,"fa365472",null);t["a"]=y.exports;b()(y,"components",{QSelect:p["a"],QItem:h["a"],QItemSection:f["a"]})}}]);