<template>
    <div class="user_notpass">
        <header class="mui-bar mui-bar-nav mui-bar-transparent login_header" id="header_top">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" href="javascript:history.back(-1)"></a>
            <h1 class="mui-title">忘记密码</h1>
        </header>
        <div class="notpass_content">
            <input type="text" placeholder="设置新密码" id="input_pass" v-model="notpass" @focus="yyz" style="color:#eee;">
            <p v-if="ask">6-20为字母、数字和符号两种以上组合</p>
            <!-- 按钮 -->
            <button type="submit" class="btn" style="font-size: 17PX;">完成</button>
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            ask:'true',
            notpass:''
        }
    },
    methods:{
        // 聚焦的时候
        yyz(){
            var reg=/^[a-zA-Z0-9]{6,20}$/;
            if(!reg.test(this.notpass)||this.notpass==''){
                Toast("密码格式不正确！");
                
            }else{

            }
        }
    }
}
</script>
<style>
    .notpass_content>#input_pass{
        font-size: 15PX;
        margin-top:40px !important;
        margin-bottom:14px !important;
        color:#eee !important;
    }
    .notpass_content p{
        padding:0 15px;
        font-size: 12PX;
    }
</style>


