<template>
    <div class="user-passlogin">
        <header class="mui-bar mui-bar-nav mui-bar-transparent login_header" id="header_top">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.back(-1)"></a>
            <h1 class="mui-title">忘记密码</h1>
        </header>
        <div class="bd_content">
            <ul class="bd_phone">
                <li>已绑定手机号{{phone}}</li> 
            </ul>
            <!-- 发送验证码 -->
            <div class="yangzhengma">
                <input type="text" placeholder="短信验证码" v-model="ym">
                <button type="button" class="btner">发送验证码</button>
            </div>
            <!-- 按钮 -->
            <button type="submit" class="btn" @click="jump">下一步</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:12345668456,
            ym:'短信验证码'
        }
    },
    methods:{
        // 跳转到忘记密码界面
        jump(){
            this.$router.push("/notpass");
        }
    }
}
</script>
<style>
    #header_top{
        -webkit-box-shadow:none;
        box-shadow: none;
    }
    #header_top .mui-title{
        font-size: 17PX;
    }
    #header_top a{
        color:#666;
    }
    .bd_content{
        width:100%;
        margin:0 auto;
    }
    .bd_content .bd_phone{
        margin:40px 15px 20px 15px;
        padding-left:15px;
        font-size: 15PX;
    }
    .yangzhengma{
        display: -webkit-flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        margin:0 15px;
    }
    /* .yangzhengma::after{
        position: absolute;
        right: 0;
        bottom: 0;
        top:160px;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
        margin:0 15px;
    } */
    .yangzhengma>input{
        border:none !important;
        font-size: 15px;
        color:#ccc;
        margin: 0px !important;
        margin-bottom: 0px !important;
    }
    .yangzhengma button{
        height:40px;
        padding:0px;
        border:none;
        color:red;
        text-align: right;
        font-size: 13px;
    }
    .bd_content .btn{
        display: block;
        margin:0 auto;
        width:345px;
        height:49px;
        background: #bbb;
        border:none;
        color:#fff;
        margin-top:40px;
        font-size: 17PX;

    }
</style>


