<template>
    <div>
        <div class="login-text"></div>
        <el-form ref="loginForm" :model="loginInfo" label-width="80px" class="login-form">
            <div style="margin:0px">
                <img src="../../img/logo.jpg" style="width:200px;height:200px">
            </div>
            <el-form-item label="用户名：">
                <el-input v-model="loginInfo.account"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input type="password" v-model="loginInfo.password"></el-input>
            </el-form-item>
            <div>
                <el-button type="primary" :loading="btnLoading">登录</el-button>
            </div>
        </el-form>
        <div>
            <img src="../../img/background.png" class="back-photo">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                loginInfo: {
                    account: "",
                    password: ""
                },

                btnLoading: false
            }
        },
        methods: {

        }
    }
</script>
<style>
    .login-text {
        overflow: hidden;
    }
    .back-photo {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
    }
    .login-form {
        width: 30%;
        border: 5px solid #66ccff;
        border-radius: 5px;
        padding: 20px;
        margin: 200px auto;
        background-color: white;
    }
</style>