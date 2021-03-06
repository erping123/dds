import Vue from 'vue'
import Router from 'vue-router'
// import HelloContainer from "./components/HelloWorld.vue"
// 引入页面组件
import login from "./components/user/Login.vue"
import register from "./components/user/Register.vue"
import passlogin from "./components/user/PassLogin.vue"
import notpass from "./components/user/NotPass.vue"
import linelogin from "./components/user/LineLogin.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/login"},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {path:'/passlogin',component:passlogin},
    {path:'/notpass',component:notpass},
    {path:'/linelogin',component:linelogin}
    // {path:'/',component:HelloContainer},
  ]
})
