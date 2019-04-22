<template>
    <div class="user-login">
        <mt-header class="bar" fixed style="background:#fff;"></mt-header>
        <!-- <header class="mui-bar mui-bar-nav mui-bar-transparent login_header">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.back(-1)"></a>
            <h1 class="mui-title">登录</h1>
        </header> -->
        <div class="logo"></div>
        <!-- 表单输入框 -->
        <div class="form_login">
            <div class="input_phone">
                <input type="text" v-model="phone" placeholder="手机号">
            </div>
            <div class="input_yz">
                <input type="text" v-model="yanzheng" placeholder="短信验证码">
                <!-- <input id="yzm" type="text" placeholder="发送验证码"> -->
                <input id="get_yanzheng" class="jet fr" type="button" v-model="fsyzm" v-if="disabled">
            </div>
            <button type="button" class="btn" @click="handleLogin">登录</button>
        </div>
        <div class="qt_login">
            <router-link to="/passlogin">密码登录</router-link>
            <router-link to="/register">新用户注册</router-link>
        </div>
        <!-- 第三方登录 -->
        <div class="th_login">
            <div>第三方登录</div>
            <div>
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            // isLogin:false,
            second:60,
            phone:'',
            yanzheng:'',
            disabled:true,
            fsyzm:'发送验证码',
            timer:null
        }
    },
    methods:{
        //先判断验证码和手机号是否为空
        //点击发送验证码，得到验证码
        //输入的验证码是否为空和是否正确
        //最后向服务器发送请求
        handleLogin(){
            // this.isLogin=ture; 
            // 手机号验证
            var ph=/^[0-9]{11}$/; 
            if(this.phone=""||!ph.test(this.phone)){
                Toast("请输入正确的手机号!");
            }else if(this.yanzheng=""){
                Toast("请输入正确的验证码!");
            }
        }
    }
}
</script>
<style>
    .mui-bar-nav{
        position:fixed;
    }
    .logo{
        width:50px;
        height:50px;
        background: red;
        margin:0 15px;
        margin-bottom: 40px;
    }
    input[type='text']{
        font-size: 14px;
        border:none !important;
        padding: 0px !important;
        border-bottom: 1px solid #aaa !important;
        margin: 0 15px !important;
        width:92% !important;
        margin-bottom: 20px !important;
    }
    .input_yz{
        width:100%;
        display:flex;
        justify-content: space-between;
        margin: 0 0px;
    }
    .input_yz>input[type='text']{
        margin-bottom: 0px;
    } 
    .input_yz>input[type='button']:last-child{
        width:24%;
        border:none;
        text-align: center;
        margin-right:15px;
        color:red;.

        font-size: 13PX;
        height:40px;
        border-bottom: 1px solid #aaa;
        padding:0;
        cursor: pointer;
    }
    .input_yz>input[type='text']:first-child{
        margin-right:-2px !important;
    }
    #qt_login{
        color:red;
    }
    .btn{
        display: block;
        margin:0 auto;
        width:345px;
        height:49px;
        font-size:17PX;
        color:#fff;
        background:#bbb;
        margin-top:40px;
        border-radius:50px;
    }
    .qt_login{
        text-align: center;
        margin:20px 0px;
    }
    .qt_login a{
        text-decoration: none;
        color:#666;
        padding:20px;
        font-size: 14px;
    }
    .th_login{
        margin:200px 15px;
        font-size: 13px;
    }
</style>

