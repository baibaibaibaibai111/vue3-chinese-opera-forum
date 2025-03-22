<template>
  <el-card class="login-container">
    <h2>登录</h2>
    <el-form @submit.prevent="handleLogin" :model="loginForm" label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" style="padding-right: 50px;"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password" style="padding-right: 50px;"></el-input>
      </el-form-item>
      <router-link to="/register" style="font-size: 12px;text-align: right;">
        <p style="margin-right: 50px;">没有账号？点击注册</p>
      </router-link>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loginForm = ref({
  username: '',
  password: ''
})

const handleLogin = () => {
  console.log('登录表单提交', loginForm.value)
  // 显示成功提示框
  ElMessage({
    type: 'success',
    message: '登录成功',
  })
  router.push('/')
}
</script>

<style scoped>
.login-container {
  width: 400px;
  height: 300px;
  margin: 150px auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
}

.el-button {
  width: 210px;
}


</style>
