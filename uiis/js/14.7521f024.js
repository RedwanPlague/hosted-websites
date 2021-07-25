(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{3191:function(e,t,s){},"7bcb":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[e.isPageLoaded?s("div",{staticClass:"q-pa-md"},[s("q-card",{attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"row q-gutter-lg"},[s("div",[s("div",{staticClass:"text-h5"},[e._v("Advisee Information")]),s("br"),s("div",{staticClass:"text-subtitle2"},[s("p",[s("strong",[e._v("Student ID:")]),e._v(" "+e._s(e.getStudent.id)+"\n              ")]),s("p",[s("strong",[e._v("Name:")]),e._v(" "+e._s(e.getStudent.name)+"\n              ")]),s("p",[s("strong",[e._v("Level/Term:")]),e._v(" "+e._s(e.getStudent.level)+"/"+e._s(e.getStudent.term)+"\n              ")]),s("p",[s("strong",[e._v("Department:")]),e._v(" "+e._s(e.getStudent.department)+"\n              ")]),s("p",[s("strong",[e._v("Hall:")]),e._v(" "+e._s(e.getStudent.hall)+"\n              ")]),s("p",[s("strong",[e._v("Contact Number:")]),e._v(" "+e._s(e.getStudent.contactNumber)+"\n              ")]),s("p",[s("strong",[e._v("Email Address:")]),e._v(" "+e._s(e.getStudent.email)+"\n              ")]),s("p",[s("strong",[e._v("Residential Address:")]),e._v(" "+e._s(e.getStudent.residentialAddress)+"\n              ")])])]),s("q-space"),s("img",{staticClass:"profile-photo",attrs:{alt:"",src:this.getStudentProfilePicture.display_image_link}})],1)]),s("q-separator"),s("br"),s("q-card-section",[s("div",{staticClass:"text-h5"},[e._v("View Grades")]),s("br")]),s("q-card-actions",{attrs:{align:"center"}},[s("div",{staticClass:"row q-gutter-lg"},[s("q-btn-dropdown",{attrs:{"no-caps":"",color:"primary",label:"Filter with Level/Term"}},[s("q-list",e._l(e.getAvailableSemesters,(function(t){return s("q-item",e._b({key:t.semesterID,staticClass:"bg-grey-2",attrs:{clickable:""},nativeOn:{click:function(s){e.selectedSemester=t,e.onSemesterClick()}}},"q-item",t,!1),[s("q-item-section",[s("q-item-label",[e._v("Level/Term: "),s("strong",[e._v(e._s(t.level)+"/"+e._s(t.term))])])],1)],1)})),1)],1),s("q-btn-dropdown",{attrs:{"no-caps":"",color:"primary",label:"Filter with GradeLetter"}},[s("q-list",e._l(e.getGradeLetters,(function(t){return s("q-item",e._b({key:t,staticClass:"bg-grey-2",attrs:{clickable:""},nativeOn:{click:function(s){e.selectedGradeLetter=t,e.onGradeClick()}}},"q-item",t,!1),[s("q-item-section",[s("q-item-label",[e._v("Grade: "),s("strong",[e._v(e._s(t))])])],1)],1)})),1)],1)],1)]),s("br"),s("q-card-actions",[s("q-space"),s("q-btn",{staticClass:"bg-secondary text-white",attrs:{label:"Back"},on:{click:e.visitSelectionPage}})],1)],1)],1):e._e()])},r=[],i=s("ded3"),n=s.n(i),l=s("2f62"),d={name:"AdviseeInformationPage",data(){return{isPageLoaded:!1,selectedSemester:{},selectedGradeLetter:""}},methods:n()(n()({},Object(l["c"])(["fetchStudentProfileInfo","fetchStudentProfilePicture","generateAvailableSemesters","clearAvailableGrades"])),{},{onSemesterClick(){this.clearAvailableGrades(),this.$router.push({name:"adviseeGrades",params:{studentID:this.getStudent.id},query:{filter:"semester",level:this.selectedSemester.level,term:this.selectedSemester.term}})},onGradeClick(){this.clearAvailableGrades(),this.$router.push({name:"adviseeGrades",params:{studentID:this.getStudent.id},query:{filter:"grade",gradeLetter:this.selectedGradeLetter}})},visitSelectionPage(){this.$router.push({name:"adviseeSelection",params:{},query:{}})}}),computed:Object(l["d"])(["getStudent","getStudentProfilePicture","getAvailableSemesters","getGradeLetters"]),async created(){try{this.$q.loading.show({delay:100,message:"Loading...",messageColor:"white"}),await this.fetchStudentProfileInfo(this.$route.params.studentID),await this.fetchStudentProfilePicture(this.$route.params.studentID),this.generateAvailableSemesters({level:this.getStudent.level,term:this.getStudent.term}),this.$q.loading.hide(),this.isPageLoaded=!this.isPageLoaded}catch(e){console.log(e)}}},c=d,o=(s("9015"),s("2877")),u=s("9989"),g=s("f09f"),m=s("a370"),v=s("2c91"),p=s("eb85"),h=s("4b7e"),_=s("f20b"),b=s("1c1c"),S=s("66e5"),f=s("4074"),q=s("0170"),w=s("9c40"),C=s("eebe"),P=s.n(C),L=Object(o["a"])(c,a,r,!1,null,"e6c84d60",null);t["default"]=L.exports;P()(L,"components",{QPage:u["a"],QCard:g["a"],QCardSection:m["a"],QSpace:v["a"],QSeparator:p["a"],QCardActions:h["a"],QBtnDropdown:_["a"],QList:b["a"],QItem:S["a"],QItemSection:f["a"],QItemLabel:q["a"],QBtn:w["a"]})},9015:function(e,t,s){"use strict";s("3191")}}]);