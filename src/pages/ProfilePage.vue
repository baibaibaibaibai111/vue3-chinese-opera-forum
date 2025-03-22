<template>
  <div>
    <h2>个人中心</h2>
    <input type="text" placeholder="修改用户名" v-model="username" />
    <button @click="updateProfile">更新</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('用户123');

const updateProfile = () => {
  alert(`更新用户名为：${username.value}`);
};
</script>
