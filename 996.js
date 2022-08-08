"use strict";(self.webpackChunkdmf_config=self.webpackChunkdmf_config||[]).push([[996],{1996:(e,n,t)=>{t.r(n);var o={};t.r(o),t.d(o,{addTodo:()=>O,doNothing:()=>R,loadTodosAsync:()=>T,removeTodo:()=>S,saveTodosAsync:()=>A});var a={};t.r(a),t.d(a,{configLoadTodosEpic:()=>J,configSaveTodosEpic:()=>$});var l={};t.r(l),t.d(l,{configUserSaveTodosEpic:()=>ee});var r={};t.r(r),t.d(r,{default:()=>de});var i={};t.r(i),t.d(i,{loadSnapshot:()=>me,saveSnapshot:()=>pe});var s=t(2950),u=t.n(s),d=t(2181),c=t.n(d),m=t(8147),p=t(1936),f=t.n(p),_=t(7784),b=t.n(_),g=t(1730),v=t.n(g),h=t(7149),y=t.n(h),w=t(6610),Z=function(e){return e.configTodos},C=t(5737),O=(0,C.createAction)("CONFIG_ADD_TODO",(function(e){return{id:Math.ceil(999999*Math.random()).toString(),title:e}}))(),S=(0,C.createAction)("CONFIG_REMOVE_TODO")(),T=(0,C.createAsyncAction)("CONFIG_LOAD_TODOS_REQUEST","CONFIG_LOAD_TODOS_SUCCESS","CONFIG_LOAD_TODOS_FAILURE")(),A=(0,C.createAsyncAction)("CONFIG_SAVE_TODOS_REQUEST","CONFIG_SAVE_TODOS_SUCCESS","CONFIG_SAVE_TODOS_FAILURE")(),R=(0,C.createAction)("DO_NO_THING")(),D=t(9476);const E=function(e){var n=e.title,t=e.onRemoveClick;return(0,D.tZ)("div",null,n,(0,D.tZ)("div",{onClick:t},"X"))};var F={removeTodo:S};const k=(0,m.connect)((function(e){return{isLoading:e.config.todoModule.isConfigLoading,todos:Z(e.config.todoModule),userTodos:e.user.todo.todos}}),F)((function(e){var n=e.isLoading,t=e.todos,o=void 0===t?[]:t,a=e.userTodos,l=e.removeTodo;return n?(0,D.tZ)("p",null,"Loading..."):(0,D.tZ)(s.Fragment,null,(0,D.tZ)("h4",null,"TodoList from Config Module"),(0,D.tZ)("ul",null,o.map((function(e){return(0,D.tZ)("li",{key:e.id},(0,D.tZ)(E,{title:e.title,onRemoveClick:function(){return l(e.id)}}))}))),(0,D.tZ)("h4",null,"Todo from User Microfront End App"),(0,D.tZ)("ul",null,a.map((function(e){return(0,D.tZ)("li",{key:e.id},(0,D.tZ)(E,{title:e.title,onRemoveClick:function(){return l(e.id)}}))}))))}));var I=t(5431),M=t.n(I),N=t(4265),P=t.n(N),L={name:"ez40ln-u",styles:"margin:0.5rem;label:u;"},U={name:"ez40ln-u",styles:"margin:0.5rem;label:u;"},G=function(){return(0,D.tZ)(u().Fragment,null,(0,D.tZ)(f(),{header:(0,D.tZ)(b(),null),footer:(0,D.tZ)(v(),null),className:"u-demo"},(0,D.tZ)("div",null,(0,D.tZ)(y(),null,"Config App"),(0,D.tZ)(w.TodosView,null),(0,D.tZ)("hr",null),(0,D.tZ)(k,null),(0,D.tZ)("h1",null,"Demo Dynamic Form"),(0,D.tZ)("div",{css:L},(0,D.tZ)(M(),{inputs:[{name:"name",label:"User name",placeholder:"nghiandd",validationRules:[{rule:"required",message:"Please enter an user name"}]},{name:"email",label:"Email",placeholder:"With error message",validationRules:[{rule:"required",message:"Please enter an email"},{rule:"email",message:"Please enter a valid email"}]},[{name:"password",type:"password",label:"Password",placeholder:"pass@word1",inputClass:"md:w-1/2",validationRules:[{rule:"required",message:"Please enter a password"}]},{name:"confirmation_password",type:"password",label:"Confirm Password",placeholder:"pass@word1",inputClass:"md:w-1/2",validationRules:[{rule:"required",message:"Please enter a confirm password"},{rule:function(e,n,t){return n===t.password},message:"Confirm password must match password"}]}],{name:"gender",type:"radio",label:"Gender",placeholder:"0123456789",options:[{name:"male",value:"m",label:"Male"},{name:"female",value:"f",label:"Female"}]},{name:"number-demo",label:"number only",type:"number",placeholder:"0123456789",filter:"numeric"},[{name:"a",label:"A-value",type:"number",placeholder:"0123456789",validationRules:[{rule:"required",message:"Please enter a A-value"}],inputClass:"md:w-1/2"},{name:"b",label:"B",type:"text",inputClass:"md:w-1/2"}],{name:"select_type",type:"select",label:"Select Type",inputClass:"select-type md:w-1/2 pt-2",selectClass:"w-full",options:[{name:"male",value:"m",label:"Male"},{name:"female",value:"f",label:"Female"}],validationRules:[{rule:"required",message:"Please select type"}]},[{name:"date",label:"date",type:"date",inputClass:"md:w-1/4"},{name:"time",label:"Time",type:"time",inputClass:"md:w-1/4"}],[{name:"disabled",label:"Disabled",type:"checkbox",inputClass:"md:w-1/4"},{name:"disabled_date",label:"Disabled Date",type:"date",inputClass:"md:w-1/4",onHide:function(e){return!e.disabled}}]],submitButton:{text:"Save",className:"submit"},onSubmit:function(e){console.log(e)},defaultValues:{"number-demo":999,gender:"m",a:12,b:"Test B",select_type:null}})),(0,D.tZ)("div",{css:U},(0,D.tZ)(q,null)))))},q=function(){var e=[{id:1,name:"Sadio Mane",country_id:3,club_id:2,position_id:1,shirt_number:"10",created_by:2,deleted_at:null,created_at:"12/12/12 15:00:00",updated_at:"12/12/12 15:00:00",is_defender:!1,is_midfielder:!1,is_forward:!0,is_goalkeeper:!1,front_end_position:{name:"attach",id:2}},{id:2,name:"Mohammed Sala",country_id:3,club_id:2,position_id:1,shirt_number:"11",created_by:2,deleted_at:null,created_at:"12/12/12 15:00:00",updated_at:"12/12/12 15:00:00",is_defender:!1,is_midfielder:!1,is_forward:!0,is_goalkeeper:!1,front_end_position:{name:"Forward",id:4}},{id:3,name:"Robertor Fermino",country_id:3,club_id:2,position_id:1,shirt_number:"8",created_by:2,deleted_at:null,created_at:"12/12/12 15:00:00",updated_at:"12/12/12 15:00:00",is_defender:!1,is_midfielder:!1,is_forward:!0,is_goalkeeper:!1,front_end_position:{name:"Defence",id:9}}],n=e.concat(e).concat(e);return(0,D.tZ)(u().Fragment,null,(0,D.tZ)(P(),{columns:[{field:"created_at",use:"Action"},{field:"front_end_position.name",use:"Position",useInSearch:!0},{field:"name",use:"Name"},{field:"country_id",use:"Country",useInDisplay:!1},{field:"club_id",use:"Club Details",useInDisplay:!0}],rows:n,perPage:2,tableHeader:"Test Table",rowRender:function(e,n,t){return"created_at"===n.field?(0,D.tZ)("button",{className:"border p-2"},"See button"):"name"===n.field?(0,D.tZ)("b",null,t):t},styling:{baseBgColor:"primary",top:{elements:{search:{text:"Search In Table",placeHolder:"Mane ..."},bulkSelect:{button:"Bulk Select",main:"bulk-select"}}}},bulkSelectOptions:["Delete"]}))},B=t(8188),V=t(1586),x=t(5648),H=B.compose,X=t(1599),j=(X.routerActions,t(18)),z=t(326),K=t(4975),Q=t(4978),Y=t(9127),W=t(9878),J=function(e,n,t){var o=t.config;return e.pipe((0,K.h)((0,C.isActionOf)(T.request)),(0,Q.w)((function(){return(0,z.from)(o.api.todos.loadSnapshot()).pipe((0,Y.U)(T.success),(0,W.K)((function(e){return(0,z.of)(T.failure(e))})))})))},$=function(e,n,t){var o=t.config;return e.pipe((0,K.h)((0,C.isActionOf)(A.request)),(0,Q.w)((function(){return console.log(n.value,o),o.logger.default.log(n),(0,z.from)(o.api.todos.saveSnapshot(Z(n.value.user.todo))).pipe((0,Y.U)(A.success),(0,W.K)((function(e){return(0,z.of)(A.failure(e))})))})))},ee=function(e,n,t){return e.pipe((0,K.h)((0,C.isActionOf)(w.actions.saveTodosAsync.success)),(0,z.tap)((function(){console.log(e,n.value,t),console.log("Do something here")})),(0,Y.U)((function(){return R()})))},ne=Object.values(a),te=Object.values(l);ne.push.apply(ne,(0,j.Z)(te));var oe=(0,C.createReducer)(!1).handleAction([T.request],(function(e,n){return!0})).handleAction([T.success,T.failure],(function(e,n){return!1})),ae=(0,C.createReducer)([{id:"0",title:"You can add new todos using the form or load saved snapshot..."}]).handleAction(T.success,(function(e,n){return n.payload})).handleAction(O,(function(e,n){return[].concat((0,j.Z)(e),[n.payload])})).handleAction(S,(function(e,n){return e.filter((function(e){return e.id!==n.payload}))}));const le=(0,B.combineReducers)({isConfigLoading:oe,configTodos:ae});var re=(0,B.combineReducers)({todoModule:le}),ie=t(2625);console.log(ie),(0,B.combineReducers)({router:(0,X.connectRouter)((0,x.lX)()),user:ie.reducer.userReducer,config:re});var se=(0,j.Z)(ne);se.push.apply(se,(0,j.Z)(ie.epic.userEpic)),console.log(se,ie.epic.userEpic);const ue=V.combineEpics.apply(void 0,(0,j.Z)(se)),de={log:console.log};var ce=[{id:"0",title:"Yo, your snapshot has been loaded successfully!"}];function me(){return new Promise((function(e,n){setTimeout((function(){e(ce)}),500)}))}function pe(e){return new Promise((function(n,t){setTimeout((function(){ce=e,n(void 0)}),500)}))}const fe={user:{logger:r,api:{todos:i}}};var _e,be=(0,V.createEpicMiddleware)({dependencies:fe}),ge=(0,x.lX)(),ve=[be],he=H(B.applyMiddleware.apply(void 0,ve)),ye=(0,B.createStore)((_e=ge,(0,B.combineReducers)({router:(0,X.connectRouter)(_e),user:ie.reducer.userReducer,config:re})),{},he);console.log(ye),be.run(ue);const we=ye;console.log(we),c().render((0,D.tZ)((function(){return(0,D.tZ)(u().Fragment,null,(0,D.tZ)(m.Provider,{store:we},(0,D.tZ)(G,null)))}),null),document.getElementById("root"))}}]);