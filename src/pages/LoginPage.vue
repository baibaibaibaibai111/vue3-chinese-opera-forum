<template>
  <div class="login-background">
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
          <el-button type="primary" native-type="submit" @click="handleLogin" style="width: 210px;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
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
  if (!loginForm.value.username || !loginForm.value.password) {
    ElMessage({
      type: 'error',
      message: '用户名和密码不能为空！'
    })
    return
  }

  // 存入 localStorage
  localStorage.setItem('username', loginForm.value.username)
  localStorage.setItem('password', loginForm.value.password)

  // 显示成功提示框
  ElMessage({
    type: 'success',
    message: '登录成功',
  })

  // 跳转到首页
  router.push('/')
}
</script>

<style>
/* 正确的背景图片写法 */
.login-background {
  background-image: url('@/assets/登录注册bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

</style>
