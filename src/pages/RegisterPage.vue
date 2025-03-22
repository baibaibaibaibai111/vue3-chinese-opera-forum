<template>
  <div class="register-background">
    <el-card class="register-container">
      <h2>注册</h2>
      <el-form @submit.prevent="handleRegister" :model="registerForm" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username" style="padding-right: 50px;"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="registerForm.password" style="padding-right: 50px;"></el-input>
        </el-form-item>
        <router-link to="/login" style="font-size: 12px; text-align: right;">
          <p style="margin-right: 50px;">已有账号？返回登录</p>
        </router-link>
        <el-form-item>
          <el-button type="primary" native-type="submit" style="width: 210px;">注册</el-button>
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
const registerForm = ref({
  username: '',
  password: ''
})

const handleRegister = () => {
  if (!registerForm.value.username || !registerForm.value.password) {
    ElMessage({
      type: 'error',
      message: '用户名和密码不能为空！'
    })
    return
  }

  // 存入 localStorage
  localStorage.setItem('username', registerForm.value.username)
  localStorage.setItem('password', registerForm.value.password) 

  // 显示成功提示框
  ElMessage({
    type: 'success',
    message: '注册成功',
  })

  // 跳转到登录页面
  router.push('/login')
}
</script>

<style>
/* 正确的背景图片写法 */
.register-background {
  background-image: url('@/assets/登录注册bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-container {
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