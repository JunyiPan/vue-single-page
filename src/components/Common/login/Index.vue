<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm">
      <div>
        <h2 style="color: #FFF">系统登录</h2>
      </div>
      <el-form-item prop="userName">
        <el-input placeholder="用户名" prefix-icon="el-icon-menu" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input placeholder="密码" type="password" prefix-icon="el-icon-edit" v-model="loginForm.passWord"></el-input>
      </el-form-item>
      <el-button type="primary" style="width: 520px;" @click="doLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userName: 'admin',
        passWord: '123456'
      },
      loginRules: {
        userName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        passWord: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    doLogin () {
      alert(0)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert(1)
        }
      })
    }
  }
}
</script>

<style>
.login-container{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}
.login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
</style>
