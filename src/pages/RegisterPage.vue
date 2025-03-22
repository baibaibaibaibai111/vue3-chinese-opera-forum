<template>
  <div class="register-container">
    <h2>注册</h2>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="register">注册</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const register = () => {
      alert(`注册：${username.value}`);
    };

    return { username, password, register };
  }
};
</script>