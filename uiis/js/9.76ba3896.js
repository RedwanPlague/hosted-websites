(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"6eff":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{directives:[{name:"show",rawName:"v-show",value:e.pageLoaded,expression:"pageLoaded"}],staticClass:"container"},[a("h5",[e._v("Januray "+e._s(e.course_data.session)+" "+e._s(e.course_data.courseID)+": "+e._s(e.course_data.courseName))]),a("q-dialog",{model:{value:e.csvButton,callback:function(t){e.csvButton=t},expression:"csvButton"}},[a("q-card",{staticStyle:{width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Upload CSV File")])]),a("q-card-section",{staticClass:"q-pt-md"},[a("input",{attrs:{type:"file",id:"csvFile",accept:".csv"}})]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-sm",attrs:{label:"Upload",color:"primary","no-caps":""},on:{click:e.readFile}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancel",color:"primary","no-caps":""}})],1)],1)],1),a("div",{staticClass:"button-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showEditButton,expression:"showEditButton"}],staticClass:"col"},[a("q-btn",{attrs:{icon:e.buttonIcon,disable:e.editButtonLoading,size:"md",color:"primary",label:e.buttonText},on:{click:e.toggleEditMode}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.course_data.hasForwarded,expression:"!course_data.hasForwarded"}],staticClass:"col csv-button"},[a("q-btn",{attrs:{size:"md",color:"primary",icon:"upload",label:"Import CSV"},on:{click:function(t){e.csvButton=!0}}})],1)]),a("div",{staticClass:"table q-pa-lg"},[a("q-table",{attrs:{title:"Course Assessment",data:e.student_data,columns:e.columns,separator:"cell",pagination:e.pagination,filter:e.studentFilter,"row-key":function(e){return e.student_id},selection:"multiple",selected:e.selected_students},on:{"update:pagination":function(t){e.pagination=t},"update:selected":function(t){e.selected_students=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("div",{staticClass:"q-table__title"},[e._v("Course Assessment")]),a("q-space"),a("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.studentFilter,callback:function(t){e.studentFilter=t},expression:"studentFilter"}})]},proxy:!0},{key:"header",fn:function(t){return[a("q-tr",{attrs:{props:t}},e._l(t.cols,(function(s){return a("q-th",{key:s.name,attrs:{props:t}},[e._v("\n            "+e._s(s.label)+"\n          ")])})),1)]}},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"student_id",attrs:{props:t}},[e._v("\n          "+e._s(t.row.student_id)+"\n        ")]),a("q-td",{key:"student_name",attrs:{props:t}},[e._v("\n          "+e._s(t.row.student_name)+"\n        ")]),e._l(e.course_data.evalCount,(function(s){return a("q-td",{key:"eval_"+s,attrs:{props:t}},[a("q-input",{attrs:{type:"number",min:"0",autofocus:"",dense:"",disable:!t.row.editAccess||!e.editMode,"input-class":"text-center"},model:{value:t.row["eval_"+s],callback:function(a){e.$set(t.row,"eval_"+s,a)},expression:"props.row['eval_'+i]"}})],1)})),a("q-td",{key:"attendance",attrs:{props:t}},[a("q-input",{attrs:{type:"number",min:"0",autofocus:"",dense:"",disable:!t.row.editAccess||!e.editMode,"input-class":"text-center"},model:{value:t.row.attendance,callback:function(a){e.$set(t.row,"attendance",a)},expression:"props.row.attendance"}})],1)],2)]}}])}),a("div",{staticClass:"row q-pa-lg"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Total Classes:",type:"number",min:"0",disable:!e.editMode},model:{value:e.classCount,callback:function(t){e.classCount=t},expression:"classCount"}}),a("q-space"),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.course_data.hasForwarded,expression:"!course_data.hasForwarded"}]},[a("q-btn",{staticStyle:{height:"40px"},attrs:{"no-caps":"",icon:"check_circle",size:"md",color:"primary",label:"Submit Evalution"},on:{click:function(t){e.submitFlag=!0}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.submitFlag,callback:function(t){e.submitFlag=t},expression:"submitFlag"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("span",{staticClass:"q-ml-sm"},[e._v("Are you sure you want to submit your Term evaluation for "+e._s(e.course_data.courseID)+": "+e._s(e.course_data.courseName)+"?")])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Yes, Submit Evaluation",color:"primary"},on:{click:e.submitButtonClicked}})],1)],1)],1)],1)},o=[],n=a("ded3"),i=a.n(n),r=a("2f62"),l=a("5935");const c=e=>{try{const t=e.split("\n");t.forEach(((e,a)=>{t[a]=e.split(",")}));const a=t.shift(),s=[];return t.forEach((e=>{const t={};a.forEach(((a,s)=>{t[a]=e[s]})),s.push(t)})),s}catch(t){throw new Error(t)}};var d=c;const{mapGetters:u,mapActions:p}=Object(r["a"])("courseEval");let m={name:"eval_",label:"Evaluation - ",align:"center",field:"eval_",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0};var h={name:"CourseEvaluationPage",computed:i()(i()(i()({},u(["course_data","selected_students","showEditButton"])),Object(l["b"])("courseEval",["student_data"])),{},{classCount:{get(){return this.course_data.classCount},set(e){this.$store.commit("setClassCount",e)}}}),async created(){this.pageLoaded=!1,this.$q.loading.show({delay:100,message:"Loading...",messageColor:"white"}),await this.fetchCourseDetails({courseID:this.$route.params.courseID,session:this.$route.params.courseSession});for(let e=1;e<=this.course_data.evalCount;e++){let t=i()({},m);t.name+=e,t.label+=e+" (20)",t.field+=e,this.columns.splice(this.columns.length-1,0,t)}this.$q.loading.hide(),this.pageLoaded=!0},watch:{async"$route.params"(e,t){this.$route.params.courseID&&await this.fetchCourseDetails({courseID:this.$route.params.courseID,session:this.$route.params.courseSession})}},methods:i()(i()({},p(["fetchCourseDetails","saveStudentData","updateEvaluationTable","studentDataFilledCheck","setHasForwarded"])),{},{loadCSVData(e){let t;try{t=d(e)}catch(a){return console.log(a),!1}return!(!t||!this.updateEvaluationTable(t))&&(this.saveStudentData(),!0)},readFile(){const e=document.getElementById("csvFile").files[0];if(!e||"csv"!==e.name.split(".").pop())return void this.$q.notify({icon:"error",message:"Error: Please upload a .csv file",position:"bottom-left",actions:[{label:"Dismiss",color:"yellow",handler:()=>{}}]});const t=this.$q.notify({message:"Uploading File",position:"bottom-left",group:!1,timeout:0,spinner:!0});let a=new FileReader;a.readAsText(e),a.onload=e=>{const a=this.loadCSVData(e.target.result);t(a?{icon:"done",spinner:!1,message:"Evaluation table updated",timeout:1500}:{icon:"error",spinner:!1,message:"Error: Failed parsing CSV file, please check data format",actions:[{label:"Dismiss",color:"yellow",handler:()=>{}}]})}},async submitButtonClicked(e){e.preventDefault(),this.editMode&&await this.toggleEditMode(e);const t=this.$q.notify({message:"Saving Evaluation",position:"bottom-left",group:!1,timeout:0,spinner:!0}),a=await this.studentDataFilledCheck();a?(await this.setHasForwarded(),await this.saveStudentData(),t({icon:"done",spinner:!1,message:"Result Submitted",timeout:1500})):t({icon:"error",spinner:!1,message:"Error: Please fill all table cells",actions:[{label:"Dismiss",color:"yellow",handler:()=>{}}]})},async toggleEditMode(e){if(e.preventDefault(),this.editMode=!this.editMode,!this.editMode){this.editButtonLoading=!0;const e=this.$q.notify({message:"Saving Evaluation",position:"bottom-left",group:!1,timeout:0,spinner:!0}),t=await this.saveStudentData();this.editButtonLoading=!1,t.error?(this.editMode=!0,e({icon:"error",spinner:!1,message:"Error: "+t.error,actions:[{label:"Dismiss",color:"yellow",handler:()=>{}}]})):e({icon:"done",spinner:!1,message:"Progress Saved",timeout:1500})}this.editMode?(this.buttonIcon="done",this.buttonText="Save",this.course_data.hasForwarded||this.columns.forEach(((e,t)=>{t>=2&&(e.classes="bg-white-1")}))):(this.buttonIcon="edit",this.buttonText="Edit",this.columns.forEach(((e,t)=>{t>=2&&(e.classes="bg-grey-1")})))}}),data(){return{pageLoaded:"",editButtonLoading:!1,csvButton:!1,studentFilter:"",submitFlag:!1,editMode:!1,buttonIcon:"edit",buttonText:"Edit",pagination:{sortBy:"student_id",page:1,rowsPerPage:0,ascending:!0},total_mark_column:[{name:"Total Mark",label:"Total Mark",align:"center",field:"total_mark",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0},{name:"Eval - 1",label:"Student ID",align:"center",field:"eval_1",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0}],columns:[{name:"student_id",label:"Student ID",align:"center",field:"student_id",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0},{name:"student_name",label:"Student Name",align:"center",field:"student_name",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0},{name:"attendance",label:"Attendance Count",align:"center",field:"attendance",classes:"bg-grey-1",headerClasses:"bg-primary text-white",sortable:!0}]}}},b=h,g=(a("ed80"),a("2877")),v=a("9989"),f=a("24e8"),w=a("f09f"),_=a("a370"),y=a("4b7e"),C=a("9c40"),q=a("eaac"),k=a("2c91"),E=a("27f9"),x=a("0016"),S=a("bd08"),D=a("357e"),F=a("db86"),B=a("7f67"),I=a("eebe"),$=a.n(I),M=Object(g["a"])(b,s,o,!1,null,"33aa18e4",null);t["default"]=M.exports;$()(M,"components",{QPage:v["a"],QDialog:f["a"],QCard:w["a"],QCardSection:_["a"],QCardActions:y["a"],QBtn:C["a"],QTable:q["a"],QSpace:k["a"],QInput:E["a"],QIcon:x["a"],QTr:S["a"],QTh:D["a"],QTd:F["a"]}),$()(M,"directives",{ClosePopup:B["a"]})},d37c:function(e,t,a){},ed80:function(e,t,a){"use strict";a("d37c")}}]);