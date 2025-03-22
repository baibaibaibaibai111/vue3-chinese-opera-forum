<template>
  <div class="login-container">
    <h2>登录</h2>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      alert(`登录：${username.value}`);
    };

    return { username, password, login };
  }
};
</script>

<style scoped>
.login-container {
  text-align: center;
  margin-top: 50px;
}
</style>