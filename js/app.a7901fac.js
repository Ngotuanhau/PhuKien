(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"183f":function(t,e,a){},1881:function(t,e,a){"use strict";var s=a("1d61"),r=a.n(s);r.a},"1b8e":function(t,e,a){"use strict";var s=a("67a0"),r=a.n(s);r.a},"1d61":function(t,e,a){},"282f":function(t,e,a){},"4af1":function(t,e,a){"use strict";var s=a("e2f7"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),a("v-app-bar",{attrs:{app:""},on:{toogle:function(e){t.drawer=!t.drawer}}}),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("v-layout",{attrs:{"fill-height":""}},[a("Snackbar"),a("v-snackbar",{attrs:{message:t.message,color:t.color,top:"top"===t.y,bottom:"bottom"===t.y,left:"left"===t.x,right:"right"===t.x,"multi-line":"multi-line"===t.mode,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.message)+"\n        "),a("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("router-view",{on:{showSnackbar:t.showSnackbar}})],1)],1),a("v-footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{top:"",color:t.snackbar.type,timeout:t.snackbar.timeout,"multi-line":!0===t.snackbar.multiline},model:{value:t.snackbar.visible,callback:function(e){t.$set(t.snackbar,"visible",e)},expression:"snackbar.visible"}},[t._v("\n  "+t._s(t.snackbar.message)+"\n  "),a("v-btn",{attrs:{text:""},on:{click:t.closeSnackbar}},[t._v("Close")])],1)},i=[],l=a("2f62"),c={computed:{snackbar(){return this.$store.state.Snackbar.snackbar}},methods:{...Object(l["b"])(["closeSnackbar"])}},u=c,d=a("2877"),m=a("6544"),p=a.n(m),v=a("8336"),f=a("2db4"),h=Object(d["a"])(u,o,i,!1,null,null,null),b=h.exports;p()(h,{VBtn:v["a"],VSnackbar:f["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-toolbar"},[a("v-app-bar",{staticClass:"c-bg-toolbar",attrs:{absolute:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){return e.stopPropagation(),t.$emit("toogle")}}}),a("v-spacer",{staticClass:"hidden-sm-and-up"}),a("v-toolbar-title",[a("router-link",{staticClass:"c-text",attrs:{to:"/"}},[a("span",{staticClass:"font-weight-regular display-1 font-italic px-4"},[t._v("Technology Toys")])])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[a("router-link",{staticClass:"c-text",attrs:{to:"/"}},[t._v("Home")])],1),"admin"===t.isAdmin.role&&t.isAuthenticated?a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[a("router-link",{staticClass:"c-text",attrs:{to:"/manage"}},[t._v("Manage")])],1):t._e(),"user"===t.isAdmin.role&&t.isAuthenticated?a("v-flex",{staticClass:"c-g-btn"},[a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[a("router-link",{staticClass:"c-text",attrs:{to:"/about"}},[t._v("About Us")])],1),a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[a("router-link",{staticClass:"c-text",attrs:{to:"/me"}},[t._v("Me")])],1)],1):t._e(),a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[t.isAuthenticated?t._e():a("router-link",{staticClass:"c-text",attrs:{to:"/login"}},[t._v("Login")]),t.isAuthenticated?a("a",{staticClass:"c-text",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1)],1)},x=[],_={methods:{logout(){this.$store.dispatch("logout").then(()=>this.$router.push("/login"))}},computed:{isAdmin(){return this.$store.getters.isAdmin},isAuthenticated(){return this.$store.getters.isAuthenticated}}},k=_,w=(a("ea3d"),a("40dc")),y=a("5bc1"),C=a("0e8f"),V=a("2fa4"),$=a("2a7f"),S=Object(d["a"])(k,g,x,!1,null,"39149763",null),P=S.exports;p()(S,{VAppBar:w["a"],VAppBarNavIcon:y["a"],VBtn:v["a"],VFlex:C["a"],VSpacer:V["a"],VToolbarItems:$["a"],VToolbarTitle:$["b"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-navigation-drawer",{staticClass:"c-bg-drawer",attrs:{value:t.value,fixed:"",temporary:""},on:{input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-2 brown lighten-1"},[a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[t.isAuthenticated?t._e():a("router-link",{staticClass:"c-text",attrs:{to:"/login"}},[t._v("Login")]),t.isAuthenticated?a("a",{staticClass:"c-text",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)]},proxy:!0}])},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"c-text"},[t._v("Directional")])],1)],1)],1)],1)},j=[],O={props:{value:!1},methods:{logout(){this.$store.dispatch("logout").then(()=>this.$router.push("/login"))}},computed:{isAuthenticated(){return this.$store.getters.isAuthenticated}}},E=O,F=(a("6d2c"),a("b0af")),T=a("da13"),q=a("5d23"),D=a("f774"),L=Object(d["a"])(E,A,j,!1,null,"74b604b2",null),I=L.exports;p()(L,{VBtn:v["a"],VCard:F["a"],VListItem:T["a"],VListItemContent:q["a"],VListItemTitle:q["b"],VNavigationDrawer:D["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"c-bg-footer py-4 px-5"},[a("v-layout",[a("v-flex",{staticClass:"c-text",attrs:{xs12:"",md6:""}},[t._v("\n      ©"+t._s((new Date).getFullYear())+"\n      "),a("strong",[t._v("Vuetify")])]),a("v-flex",{staticClass:"c-group-icon",attrs:{xs12:"",md6:""}},[a("v-btn",{staticClass:"c-btn",attrs:{text:""}},[a("v-icon",{attrs:{color:"brown lighten-1"}},[t._v("$vuetify.icons.facebook")])],1)],1)],1)],1)},N=[],M={computed:{isAuthenticated(){return this.$store.getters.isAuthenticated}}},W=M,U=(a("82bd"),a("553a")),R=a("132d"),H=a("a722"),J=Object(d["a"])(W,B,N,!1,null,"accdf3aa",null),Q=J.exports;p()(J,{VBtn:v["a"],VFlex:C["a"],VFooter:U["a"],VIcon:R["a"],VLayout:H["a"]});var Y={name:"App",components:{vAppBar:P,vNavigationDrawer:I,vFooter:Q,Snackbar:b},data:()=>({color:"",snackbar:!1,message:"",timeout:null,y:null,x:null,mode:null,drawer:null}),methods:{showSnackbar(t,e=3e3,a="top",s,r){this.message=t,this.timeout=e,this.y=a,this.x=s,this.mode=r,this.snackbar=!0}},computed:{isAuthenticated(){return this.$store.getters.isAuthenticated},isAdmin(){return this.$store.getters.isAdmin}}},z=Y,G=a("7496"),K=a("a75b"),X=Object(d["a"])(z,r,n,!1,null,null,null),Z=X.exports;p()(X,{VApp:G["a"],VAppBar:w["a"],VBtn:v["a"],VContent:K["a"],VFooter:U["a"],VLayout:H["a"],VNavigationDrawer:D["a"],VSnackbar:f["a"]});var tt=a("8c4f"),et=a("2b27"),at=a.n(et);const st={token:at.a.get("token")||"",user:at.a.get("user")||"",users:[]},rt={isAuthenticated:t=>!!t.token,isAdmin:t=>t.user,authStatus:t=>t.status},nt={signup({commit:t},e){return new Promise((a,s)=>{axios.post("/signup",e).then(e=>{console.log(e);e.data.message;t("setStatus","success"),ta.push("/login")}).catch(e=>{t("setError",e.message),t("setStatus","failure")})})},login({commit:t},e){return new Promise((a,s)=>{axios.post("/login",e).then(e=>{const s=e.data.token,r=e.data.user;at.a.set("user",r),at.a.set("token",s),t("setUser",r),t("setToken",s),a(e)}).catch(e=>{t("setError",e.message),t("setStatus","failure"),at.a.remove("token"),at.a.remove("user"),s(e)})})},logout({commit:t}){return new Promise((e,a)=>{t("setLogout"),at.a.remove("token"),at.a.remove("user"),e()})}},ot={setUser(t,e){t.status="success",t.user=e},setToken(t,e){t.token=e},setError(t,e){t.error=e},setLogout(t){t.status="",t.token=""}};var it={state:st,getters:rt,actions:nt,mutations:ot};const lt={snackbar:{visible:!1,message:null,timeout:6e3,multiline:!1,type:""}},ct={showSnackbar(t,e){t.snackbar.multiline=e.message.length>50,e.multiline&&(t.snackbar.multiline=e.multiline),e.timeout&&(t.snackbar.timeout=e.timeout),e.visible=!0,t.snackbar=Object.assign({},e)},closeSnackbar(t){t.snackbar=Object.assign({},{visible:!1,message:null,timeout:6e3,multiline:!1,type:""})}};var ut={state:lt,mutations:ct},dt=a("bc3a"),mt=a.n(dt);const pt={products:[],product:""},vt={products:t=>t.products,product:t=>t.product},ft={getProducts({commit:t}){return new Promise((e,a)=>{mt.a.get("/products").then(a=>{let s=a.data;t("setProducts",s),e(s)}).catch(t=>{a(t)})})},async addProduct({commit:t},e){await mt.a.post("/products",e).then(a=>{console.log(a),t("setAddProduct",e)}).catch(e=>{t("setAddProductError",e)})}},ht={setProducts(t,e){t.products=Object.assign(e,t.products),t.status="Get Products Success!!"},setAddProduct(t,e){t.product=t.products.unshift(e),t.status="Add Product Success"},setAddProductError(t){t.status="Add Product Failure!!"}};var bt={state:pt,getters:vt,actions:ft,mutations:ht};s["a"].use(l["a"]);var gt=new l["a"].Store({modules:{Auth:it,Snackbar:ut,Products:bt}}),xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},_t=[],kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),s("v-flex",{attrs:{"mb-4":""}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),s("br"),t._v("please join our online\n        "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-flex",{attrs:{"mb-5":"",xs12:""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1)],1)],1)},wt=[],yt={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},Ct=yt,Vt=a("a523"),$t=a("adda"),St=Object(d["a"])(Ct,kt,wt,!1,null,null,null),Pt=St.exports;p()(St,{VContainer:Vt["a"],VFlex:C["a"],VImg:$t["a"],VLayout:H["a"]});var At={components:{HelloWorld:Pt}},jt=At,Ot=Object(d["a"])(jt,xt,_t,!1,null,null,null),Et=Ot.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{staticClass:"c-form-login",attrs:{xs6:"",md6:"","offset-md3":"","offset-xs3":"","pa-5":""}},[a("div",{staticClass:"c-text-header display-2 mb-8"},[t._v("My Account")]),a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.validated;return a("v-form",{},[a("ValidationProvider",{attrs:{name:"User name",rules:"required|min:6"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{counter:30,"error-messages":s,success:r,label:"User name",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Phone number",rules:"required|min:10"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{counter:12,"error-messages":s,success:r,label:"Phone number",required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})}}],null,!0)}),a("ValidationProvider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{"error-messages":s,success:r,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password",rules:"required|min:6",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{"error-messages":s,success:r,label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password Confirmation",rules:"required|password:confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{"error-messages":s,success:r,label:"Password Confirmation",type:"password",required:""},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})}}],null,!0)}),a("span",{staticClass:"animated"},[a("li",[a("router-link",{staticClass:"c-tran-forgot font-weight-regular font-italic",attrs:{to:"/reset_pass"}},[t._v("Forgot your password")])],1)]),a("v-flex",{staticClass:"c-button"},[a("v-btn",{staticClass:"c-btn c-btn-singup",attrs:{disabled:s||!r,text:""},nativeOn:{click:function(e){return t.submit(e)}}},[a("span",{staticClass:"c-btn-login-text"},[t._v("Sign up")])])],1)],1)}}])}),a("span",{staticClass:"animated c-tran-login"},[a("li",[a("router-link",{staticClass:"c-tran-login font-weight-regular font-italic",attrs:{to:"/login"}},[t._v("go back Login!")])],1)])],1)],1)],1)},Tt=[],qt=a("7bb1"),Dt={components:{ValidationObserver:qt["a"],ValidationProvider:qt["b"]},props:["message"],data(){return{username:"",phone:"",email:"",password:"",passwordConfirm:""}},methods:{submit(){const t={username:this.username,phone:this.phone,email:this.email,password:this.password,passwordConfirm:this.passwordConfirm};axios.post("/signup",t).then(t=>{console.log(t),this.$store.commit("showSnackbar",{message:t.data.message,timeout:3e3,multiline:!1,type:"success"},{module:"Snackbar"}),this.$router.push("/login")}).catch(t=>{this.$store.commit("showSnackbar",{message:t.response.data.message,timeout:3e3,multiline:!1,type:"error"},{module:"Snackbar"})})}}},Lt=Dt,It=(a("4af1"),a("4bd4")),Bt=a("8654"),Nt=Object(d["a"])(Lt,Ft,Tt,!1,null,"17e61512",null),Mt=Nt.exports;p()(Nt,{VBtn:v["a"],VContainer:Vt["a"],VFlex:C["a"],VForm:It["a"],VLayout:H["a"],VTextField:Bt["a"]});var Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{staticClass:"c-form-login",attrs:{xs6:"",md6:"","offset-md3":"","offset-xs3":"","pa-5":""}},[a("div",{staticClass:"c-text-header display-2 mb-8"},[t._v("My Account")]),a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.validated;return a("v-form",{},[a("VTextFieldWithValidation",{attrs:{rules:"required|email",label:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("VTextFieldWithValidation",{attrs:{rules:"required|min:6",label:"Password","append-icon":t.show?"$vuetify.icons.eye":"$vuetify.icons.eye_off",type:t.show?"text":"password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("span",{staticClass:"animated"},[a("li",[a("router-link",{staticClass:"c-tran-forgot font-weight-regular font-italic",attrs:{to:"/reset_pass"}},[t._v("Forgot your password !")])],1)]),a("v-flex",{staticClass:"c-button"},[a("v-btn",{staticClass:"c-btn c-btn-login",attrs:{text:"",disabled:s||!r},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[a("span",{staticClass:"c-btn-login-text"},[t._v("Sign In")])])],1)],1)}}])}),a("span",{staticClass:"animated c-btn-create"},[a("li",[a("router-link",{staticClass:"c-tran-create font-weight-regular font-italic",attrs:{to:"/sign_up"}},[t._v("Create An Acount!")])],1)])],1)],1)],1)},Ut=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationProvider",{attrs:{rules:t.rules,name:t.$attrs.label},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",t._g(t._b({attrs:{"error-messages":s,success:r,color:" black"},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},"v-text-field",t.$attrs,!1),t.$listeners))}}])})},Ht=[],Jt={components:{ValidationProvider:qt["b"]},props:{rules:{type:[Object,String],value:null},value:{type:null}},data(){return{innerValue:null}},watch:{innerValue(t){this.$emit("input",t)},value(t){this.innerValue=t}},created(){this.value&&(this.innerValue=this.value)}},Qt=Jt,Yt=Object(d["a"])(Qt,Rt,Ht,!1,null,"b44ee40c",null),zt=Yt.exports;p()(Yt,{VTextField:Bt["a"]});var Gt={components:{ValidationObserver:qt["a"],VTextFieldWithValidation:zt},data(){return{email:"",password:"",show:!1}},methods:{submit(){const t={email:this.email,password:this.password};this.$store.dispatch("login",t).then(()=>this.$router.push("/")).catch(t=>this.$store.commit("showSnackbar",{message:t.response.data.message,timeout:4e3,multiline:!1,type:"error"},{module:"Snackbar"}))}}},Kt=Gt,Xt=(a("bd67"),Object(d["a"])(Kt,Wt,Ut,!1,null,"19a2d86f",null)),Zt=Xt.exports;p()(Xt,{VBtn:v["a"],VContainer:Vt["a"],VFlex:C["a"],VForm:It["a"],VLayout:H["a"]});var te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{staticClass:"c-form-login",attrs:{xs6:"",md6:"","offset-md3":"","offset-xs3":"","pa-5":""}},[a("div",{staticClass:"c-text-header display-2 mb-8"},[t._v("My Account")]),a("v-flex",{attrs:{"my-5":""}},[a("span",{staticClass:"c-tran-login"},[t._v("Please! enter your email, press the button and check mail to follow instruction")])]),a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.validated;return a("v-form",{},[a("VTextFieldWithValidation",{attrs:{rules:"required|email",label:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-flex",{staticClass:"c-button"},[a("v-btn",{staticClass:"c-btn c-btn-send",attrs:{text:"",disabled:s||!r},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[a("span",{staticClass:"c-btn-login-text"},[t._v("SEND")])])],1)],1)}}])}),a("span",{staticClass:"animated c-tran-login"},[a("li",[a("router-link",{staticClass:"c-tran-login font-weight-regular font-italic",attrs:{to:"/login"}},[t._v("go back Login!")])],1)])],1)],1)],1)},ee=[],ae={components:{ValidationObserver:qt["a"],VTextFieldWithValidation:zt},data(){return{email:"",show:!1}},methods:{submit(){const t=this.email;axios.post("/forgot_password",{email:t}).then(t=>{console.log(t),this.$store.commit("showSnackbar",{message:t.data.message,timeout:1e4,multiline:!1,type:"success"},{module:"Snackbar"})}).catch(t=>{this.$store.commit("showSnackbar",{message:t.response.data.message,timeout:3e3,multiline:!1,type:"error"},{module:"Snackbar"})}),this.email="",requestAnimationFrame(()=>{this.$refs.observer.reset()})}}},se=ae,re=(a("c6e5"),Object(d["a"])(se,te,ee,!1,null,"1a850cfe",null)),ne=re.exports;p()(re,{VBtn:v["a"],VContainer:Vt["a"],VFlex:C["a"],VForm:It["a"],VLayout:H["a"]});var oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{staticClass:"c-form-login",attrs:{xs6:"",md6:"","offset-md3":"","offset-xs3":"","pa-5":""}},[a("div",{staticClass:"c-text-header display-2 mb-8"},[t._v("My Account")]),a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.validated;return a("v-form",{},[a("ValidationProvider",{attrs:{name:"Password",rules:"required|min:6",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{"error-messages":s,success:r,label:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})}}],null,!0)}),a("ValidationProvider",{attrs:{name:"Password Confirmation",rules:"required|password:confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.valid;return a("v-text-field",{attrs:{"error-messages":s,success:r,label:"Password Confirmation",type:"password",required:""},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})}}],null,!0)}),a("v-flex",{staticClass:"c-button"},[a("v-btn",{staticClass:"c-btn c-btn-reset mb-3",attrs:{disabled:s||!r,text:""},nativeOn:{click:function(e){return t.submit(e)}}},[a("span",{staticClass:"c-btn-reset-text"},[t._v("RESET PASSWORD")])])],1)],1)}}])}),a("span",{staticClass:"animated c-tran-login"},[a("li",[a("router-link",{staticClass:"c-tran-login font-weight-regular font-italic",attrs:{to:"/login"}},[t._v("go back Login!")])],1)])],1)],1)],1)},ie=[],le={components:{ValidationObserver:qt["a"],ValidationProvider:qt["b"]},data(){return{password:"",passwordConfirm:"",show:!1}},methods:{submit(){axios.post(`/change_password/${this.$route.params.token}/${this.$route.params.email}`,{password:this.password,passwordConfirm:this.passwordConfirm}).then(t=>{console.log(t),this.$store.commit("showSnackbar",{message:t.data.message,timeout:3e3,multiline:!1,type:"success"},{module:"Snackbar"}),this.$router.push("/login")})}}},ce=le,ue=(a("1b8e"),Object(d["a"])(ce,oe,ie,!1,null,"7fb2a91d",null)),de=ue.exports;p()(ue,{VBtn:v["a"],VContainer:Vt["a"],VFlex:C["a"],VForm:It["a"],VLayout:H["a"],VTextField:Bt["a"]});var me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Manage")},pe=[],ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{column:""}},[[a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[[a("v-btn",{staticClass:"mb-2",attrs:{color:"brown lighten-4"},on:{click:function(e){t.dialog_create=!t.dialog_create}}},[a("span",{staticStyle:{color:"#8d6e63"}},[t._v("New product")])])],a("v-text-field",{staticClass:"pa-5",attrs:{label:"Search. . .","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],2),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products,"server-items-length":t.totalProducts,loading:t.loading,options:t.options,"item-key":"id",search:t.search,"mobile-breakpoint":350},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.action",fn:function(e){var s=e.item;return[a("v-btn",{attrs:{color:"brown lighten-4"},on:{click:function(e){return t.openEdit(s)}}},[a("v-icon",{attrs:{color:"brown lighten-1",small:""}},[t._v("$vuetify.icons.pencil")])],1),a("v-btn",{attrs:{color:"brown lighten-4"},on:{click:function(e){return t.openDelete(s)}}},[a("v-icon",{attrs:{color:"brown lighten-1",small:""}},[t._v("$vuetify.icons.delete")])],1)]}}])})],1),a("v-delete",{attrs:{item:t.currentItem},on:{deleteProduct:t.deleteItem},model:{value:t.dialog_delete,callback:function(e){t.dialog_delete=e},expression:"dialog_delete"}}),a("v-create",{on:{reload:t.reload},model:{value:t.dialog_create,callback:function(e){t.dialog_create=e},expression:"dialog_create"}})]],2)],1)},fe=[],he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{value:t.value,"max-width":"290"},on:{input:function(e){return t.$emit("input",e)}}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Delete Item")]),a("v-card-text",[t._v("\n        You want delete item --- "+t._s(t.item.name)+"\n        "),a("br"),t._v("Click Ok! to delete\n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Close")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.$emit("deleteProduct",t.item.id)}}},[t._v("OK!")])],1)],1)],1)],1)},be=[],ge={props:{value:!1,item:{}}},xe=ge,_e=a("99d9"),ke=a("169a"),we=Object(d["a"])(xe,he,be,!1,null,null,null),ye=we.exports;p()(we,{VBtn:v["a"],VCard:F["a"],VCardActions:_e["a"],VCardText:_e["b"],VCardTitle:_e["c"],VDialog:ke["a"],VLayout:H["a"],VSpacer:V["a"]});var Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-dialog",{attrs:{value:t.value,fullscreen:"",transition:"dialog-bottom-transition"},on:{input:function(e){return t.$emit("input",e)}}},[a("v-card",[a("v-toolbar",{attrs:{color:"brown lighten-4"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("input",!1)}}},[a("v-icon",{attrs:{color:"brown lighten-1"}},[t._v("$vuetify.icons.close")])],1),a("v-toolbar-title",{staticStyle:{color:"#8D6E63"}},[t._v("New Product")])],1),a("v-form",{ref:"form"},[a("v-card-text",[a("v-container",[a("v-layout",{staticClass:"create_form",attrs:{wrap:""}},[a("v-flex",[a("span",[t._v("Categories *")]),a("v-flex",{attrs:{"d-flex":"",row:"","pa-2":"","ma-0":""}},t._l(t.categories,(function(e,s){return a("v-checkbox",{key:s,staticClass:"c-checkbox",attrs:{label:e.name,value:e.id},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})})),1)],1),a("v-flex",[a("span",[t._v("Name Product *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-flex",[a("span",[t._v("Slug *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.slug,callback:function(e){t.slug=e},expression:"slug"}})],1),a("v-flex",[a("span",[t._v("Short Description *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.short_description,callback:function(e){t.short_description=e},expression:"short_description"}})],1),a("v-flex",[a("span",[t._v("Sku *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.sku,callback:function(e){t.sku=e},expression:"sku"}})],1),a("v-flex",[a("span",[t._v("Price *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),a("v-flex",[a("span",[t._v("Sale Price *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.sale_price,callback:function(e){t.sale_price=e},expression:"sale_price"}})],1),a("v-flex",[a("span",[t._v("Quantity *")]),a("v-text-field",{attrs:{"single-line":"",solo:""},model:{value:t.stock_quantity,callback:function(e){t.stock_quantity=e},expression:"stock_quantity"}})],1),a("v-flex",[a("span",{staticClass:"sp_content"},[t._v("Description")]),a("v-vue-editor",{model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),a("v-flex",{staticClass:"uploadfile"},[a("span",[t._v("Upload")]),a("input",{ref:"files",staticStyle:{display:"none"},attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:t.handleChange}}),a("v-btn",{staticClass:"btn_upload",on:{click:function(e){return t.$refs.files.click()}}},[a("v-icon",{staticClass:"btn_icon"},[t._v("$vuetify.icons.plus")])],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.files,(function(t,e){return a("v-flex",{key:e,attrs:{xs4:"","d-flex":""}},[a("img",{ref:"image"+e,refInFor:!0,staticClass:"preview",attrs:{width:"100%"}})])})),1)],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"brown lighten-1",text:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Close")]),a("v-btn",{attrs:{color:"brown lighten-1",text:""},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save")])],1)],1)],1)],1)],1)},Ve=[],$e=a("5873"),Se={props:{value:!1},components:{vVueEditor:$e["a"]},data(){return{name:"",slug:"",short_description:"",sku:"",price:"",sale_price:"",stock_quantity:"",description:"",categories:[],selected:[],images:[],files:[]}},mounted(){this.getCategories()},methods:{getCategories(){axios.get("/categories").then(t=>{this.categories=t.data})},async submit(){const t=[],e=this.files;console.log(e),e.forEach(e=>{console.log(e);const a=new FormData;a.append("file",e),console.log(e),t.push(axios.post("/images",a).then(t=>{console.log(t)})),console.log(t)})},handleChange(t){const e=this.$refs.files.files;for(var a=0;a<e.length;a++)this.files.push(e[a]);this.getImagePreview()},getImagePreview(){for(let t=0;t<this.files.length;t++){let e=new FileReader;e.addEventListener("load",()=>{this.$refs[`image${t}`][0].src=e.result},!1),e.readAsDataURL(this.files[t])}}}},Pe=Se,Ae=(a("1881"),a("ac7c")),je=a("71d9"),Oe=Object(d["a"])(Pe,Ce,Ve,!1,null,"236b64cf",null),Ee=Oe.exports;p()(Oe,{VBtn:v["a"],VCard:F["a"],VCardActions:_e["a"],VCardText:_e["b"],VCheckbox:Ae["a"],VContainer:Vt["a"],VDialog:ke["a"],VFlex:C["a"],VForm:It["a"],VIcon:R["a"],VLayout:H["a"],VSpacer:V["a"],VTextField:Bt["a"],VToolbar:je["a"],VToolbarTitle:$["b"]});var Fe={props:{product:{}},components:{vDelete:ye,vCreate:Ee},data(){return{totalProducts:0,products:[],loading:!0,options:{},dialog_create:!1,dialog_delete:!1,dialog_edit:!1,search:"",currentItem:{},headers:[{text:"Name",value:"name",sortable:!1},{text:"Action",value:"action",sortable:!1,align:"center"}]}},watch:{options:{immediate:!0,handler(){this.getData().then(t=>{this.products=t.items})},deep:!0}},methods:{getData(t){return this.loading=!0,new Promise((t,e)=>{const{page:a,itemsPerPage:s}=this.options;axios.get(`/products?page=${a}`).then(e=>{let r=e.data.data;const n=r.length;if(this.totalProducts=e.data.total,s>0){r.slice((a-1)*s,a*s)}setTimeout(()=>{this.loading=!1,t({items:r,total:n})},1e3)})})},openDelete(t){this.currentItem=t,this.dialog_delete=!0},deleteItem(t){axios.delete(`/products/${t}`).then(t=>{this.getData().then(t=>{this.products=t.items})}),this.dialog_delete=!1},reload(){this.getData().then(t=>{this.products=t.items})}}},Te=Fe,qe=a("8fea"),De=Object(d["a"])(Te,ve,fe,!1,null,null,null),Le=De.exports;p()(De,{VBtn:v["a"],VContainer:Vt["a"],VDataTable:qe["a"],VIcon:R["a"],VLayout:H["a"],VTextField:Bt["a"],VToolbar:je["a"]});var Ie={components:{Manage:Le}},Be=Ie,Ne=Object(d["a"])(Be,me,pe,!1,null,"67fe0d24",null),Me=Ne.exports,We=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ue=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],Re={},He=Object(d["a"])(Re,We,Ue,!1,null,null,null),Je=He.exports,Qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("me")])},Ye=[],ze={},Ge=ze,Ke=Object(d["a"])(Ge,Qe,Ye,!1,null,null,null),Xe=Ke.exports;s["a"].use(tt["a"]);let Ze=new tt["a"]({mode:"history",base:"/",routes:[{path:"/",component:{render:t=>t("router-view")},children:[{path:"/",name:"home",component:Et},{path:"/guest",meta:{requiresAuth:!0,roles:["user"]},component:{render:t=>t("router-view")},children:[{path:"/about",name:"about",component:Je},{path:"/me",name:"me",component:Xe}]},{path:"/admin",meta:{requiresAuth:!0,roles:["admin"]},component:{render:t=>t("router-view")},children:[{path:"/manage",name:"manage",component:Me}]}]},{path:"/sign_up",name:"sign_up",component:Mt},{path:"/login",name:"login",component:Zt},{path:"/reset_pass",name:"reset_pass",component:ne},{path:"/change_pass/:token/:email",name:"change_pass",component:de}]});Ze.beforeEach((t,e,a)=>{if(t.matched.some(t=>t.meta.requiresAuth)){const e=gt.state.Auth.user;if(gt.getters.isAuthenticated){if(!t.meta.roles)return a();if(t.meta.roles.includes(e.role))switch(e.role){case"user":a({path:"/guest"});break;case"admin":a({path:"/admin"});break;default:a({path:"/"})}}}return a()});var ta=Ze,ea=a("9483");Object(ea["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var aa=a("f309");a("5363");s["a"].use(aa["a"]);var sa=new aa["a"]({icons:{iconfont:"mdi",values:{eye:"mdi-eye",eye_off:"mdi-eye-off",account:"mdi-account",pencil:"mdi-pencil",facebook:"mdi-facebook",delete:"mdi-delete",close:"mdi-close-circle",plus:"mdi-plus-box-outline"}}}),ra={install(t,e){window.axios=mt.a,mt.a.defaults.baseURL="http://127.0.0.1:3333",mt.a.interceptors.request.use(t=>{const e=at.a.get("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t},(function(t){return Promise.reject(t)}))}},na=a("4c93"),oa=a("2593");Object(qt["c"])("required",na["c"]),Object(qt["c"])("min",na["b"]),Object(qt["c"])("email",na["a"]),Object(qt["c"])("password",{validate:(t,{other:e})=>t===e,message:"The password confirmation does not match.",params:[{name:"other",isTarget:!0}]}),Object(qt["d"])({en:oa}),s["a"].use(ra),s["a"].config.productionTip=!1,new s["a"]({router:ta,store:gt,vuetify:sa,render:t=>t(Z)}).$mount("#app")},"60e3":function(t,e,a){},"67a0":function(t,e,a){},"6d2c":function(t,e,a){"use strict";var s=a("c3d4"),r=a.n(s);r.a},"82bd":function(t,e,a){"use strict";var s=a("60e3"),r=a.n(s);r.a},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},bd67:function(t,e,a){"use strict";var s=a("ddd3"),r=a.n(s);r.a},c3d4:function(t,e,a){},c6e5:function(t,e,a){"use strict";var s=a("183f"),r=a.n(s);r.a},ddd3:function(t,e,a){},e2f7:function(t,e,a){},ea3d:function(t,e,a){"use strict";var s=a("282f"),r=a.n(s);r.a}});
//# sourceMappingURL=app.a7901fac.js.map