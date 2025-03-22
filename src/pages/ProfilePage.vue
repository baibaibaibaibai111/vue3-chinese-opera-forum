<template>
  <div>
    <el-card class="personal-info-card">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
          <el-button v-if="!isEditing" type="primary" @click="isEditing = true">编辑</el-button>
        </div>
      </template>
      <el-form ref="formRef" :model="userInfo" label-width="80px">
        <div class="demo-type">
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          </div>
        </div>
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" :disabled="!isEditing" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" type="password" show-password :disabled="!isEditing" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userInfo.phone" :disabled="!isEditing" placeholder="请输入手机号" />
        </el-form-item>
      </el-form>
      <div class="button-group" v-if="isEditing">
        <el-button type="primary" @click="saveInfo">保存</el-button>
        <el-button @click="cancelEdit">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

// 定义用户信息
const userInfo = ref({
  name: '',
  password: '',
  phone: '' // 默认手机号为空
});

const isEditing = ref(false);
const originalInfo = ref({}); // 存储初始信息，取消时恢复

// 页面加载时，从 localStorage 读取用户信息
onMounted(() => {
  const storedName = localStorage.getItem('username') || '未设置';
  const storedPassword = localStorage.getItem('password') || '未设置';
  const storedPhone = localStorage.getItem('phone') || ''; // 可能用户还没设置手机号

  userInfo.value = {
    name: storedName,
    password: storedPassword,
    phone: storedPhone
  };

  // 备份原始数据
  originalInfo.value = { ...userInfo.value };
});

// 保存修改
const saveInfo = () => {
  // 更新 localStorage
  localStorage.setItem('username', userInfo.value.name);
  localStorage.setItem('password', userInfo.value.password);
  localStorage.setItem('phone', userInfo.value.phone);

  isEditing.value = false;
  ElMessage.success('个人信息已更新');

  // 刷新页面
  setTimeout(() => {
    location.reload();
  }, 500); // 500ms 让用户有时间看到成功提示
};


// 取消编辑，恢复原始信息
const cancelEdit = () => {
  userInfo.value = { ...originalInfo.value }; // 还原
  isEditing.value = false;
};
</script>

<style scoped>
.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}

.el-avatar {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
}

.personal-info-card {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}
</style>
