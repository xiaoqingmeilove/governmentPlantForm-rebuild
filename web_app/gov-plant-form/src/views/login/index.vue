<template>
    <div>
        <!-- <div class="login-text"></div> -->
        <el-form ref="loginForm" :model="loginInfo" label-width="80px">
            <el-form-item label="用户名*：">
                <el-input v-model="loginInfo.account"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input type="password" v-model="loginInfo.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="btnLoading">登录</el-button>
            </el-form-item>
        </el-form>
        <!-- <div class="back-photo"></div> -->
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
        
    }
    back-photo {

    }
</style>