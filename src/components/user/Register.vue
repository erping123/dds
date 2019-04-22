<template>
    <div class="user-register">
        <header class="mui-bar mui-bar-nav mui-bar-transparent login_header" id="header_top">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.back(-1)"></a>
            <h1 class="mui-title">新用户注册</h1>
        </header>
        <div class="register_content">
            <input type="text" placeholder="请输入常用手机号">
            <div class="yangzhengma">
                <input type="text" placeholder="短信验证码" v-model="ymm">
                <button type="button" class="btner">发送验证码</button>
            </div>
            <button type="submit" class="btn" style="background:red;" @click="jump">同意协议并注册</button>
            <p>我以阅读并同意以下协议</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            ymm:''
        }
    },
    methods:{
        jump(){
        this.$router.push("/linelogin");
        }
    }
}
</script>
<style>
    .register_content>input{
        margin-top:40px !important;
    }
    .register_content>p{
        font-size: 12PX;
        margin:16px 15px;
        border:none;
    }
</style>


