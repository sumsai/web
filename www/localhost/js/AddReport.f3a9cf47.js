(window["webpackJsonp_stars"]=window["webpackJsonp_stars"]||[]).push([["AddReport"],{"219c":function(t,a,e){"use strict";var n=e("9f56"),s=e.n(n);s.a},6182:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add-report"},[e("div",{staticClass:"add-report--panel"},[e("div",{staticClass:"form-item"},[e("label",{staticClass:"label",attrs:{for:"name"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",maxlength:"5",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"form-item"},[e("label",{staticClass:"label",attrs:{for:"gender"}},[t._v("性别")]),e("div",{staticClass:"gender",on:{click:function(){return t.switchGender(1)}}},[t._v(" 男 "),e("div",{staticClass:"gender--selector",class:{"gender--selector__active":t.gender}})]),e("div",{staticClass:"gender",on:{click:function(){return t.switchGender(0)}}},[t._v(" 女 "),e("div",{staticClass:"gender--selector",class:{"gender--selector__active":!t.gender}})])]),e("div",{staticClass:"form-item",on:{click:function(a){t.calendarShow=!0}}},[e("label",{staticClass:"label",attrs:{for:"birthday"}},[t._v("生辰")]),e("input",{attrs:{type:"text",id:"birthday",readonly:"",placeholder:t.birthdayPlaceholder}}),e("i",{staticClass:"iconfont iconcalendar icon"})]),e("btn",{on:{click:t.addReport}},[t._v(" 立即测算 ")])],1),t._m(0),e("modal",{attrs:{show:t.calendarShow},on:{"update:show":function(a){t.calendarShow=a}}},[e("calendar",{attrs:{"default-date":[1995,1,1],show:t.calendarShow},on:{change:t.handleChange,"update:show":function(a){t.calendarShow=a}}})],1),t.loading?e("loading"):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"add-report--footer"},[e("div",{staticClass:"footer--item"},[e("img",{staticClass:"icon",attrs:{src:"https://faceplus.vsuan.com/UI_daili/stars/aliyun.png"}})]),e("div",{staticClass:"footer--item"},[e("img",{staticClass:"icon",attrs:{src:"https://faceplus.vsuan.com/UI_daili/stars/nuodun.png"}})])])}],r=(e("a15b"),e("d81d"),e("0d03"),e("b0c0"),e("6b47")),i=e.n(r),o=(e("96cf"),e("89ba")),c=e("dedc"),d=e("5cfc"),l=e("714b"),h=e("d560"),u={name:"AddReport",components:{Btn:c["a"],Calendar:d["a"],Modal:l["a"],Loading:h["a"]},data:function(){return{name:"",gender:1,birthday:788918400,birthdayPlaceholder:"1995-01-01",calendarShow:!1,loading:!1}},methods:{handleChange:function(t){var a=t.type,e=t.lunar,n=t.solar;this.birthdayPlaceholder=a?e.map((function(t){var a=t.hans;return a})).join(" "):n.map((function(t){var a=t.hans;return a})).join("-"),this.birthday=Math.floor(new Date(n[0].year,n[1].month-1,n[2].date)/1e3),this.calendarShow=!1},switchGender:function(t){this.gender=t},addReport:function(){var t=Object(o["a"])(i.a.mark((function t(){var a,e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.name){t.next=2;break}return t.abrupt("return",this.$toast.fail({message:"请输入姓名"}));case 2:return a={name:this.name,gender:this.gender,birthday:this.birthday},this.loading=!0,t.next=6,this.$store.dispatch("addReport",{data:a});case 6:e=t.sent,this.loading=!1,this.goto(e);case 9:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),goto:function(t){this.$router.push({name:"report",params:{id:t}})}}},p=u,f=(e("219c"),e("2877")),m=Object(f["a"])(p,n,s,!1,null,"7e7dcd5f",null);a["default"]=m.exports},"9f56":function(t,a,e){}}]);