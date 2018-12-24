<template>
  <div class="login-container">
    <el-form class="login-form" v-model="loginForm">
      <div>
        <h2 style="color: #FFF">系统登录</h2>
      </div>
      <el-form-item>
        <el-input placeholder="账号" prefix-icon="el-icon-menu" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item>
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
      }
    }
  },
  methods: {
    doLogin () {
      alert(1)
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
