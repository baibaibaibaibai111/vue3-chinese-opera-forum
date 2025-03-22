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
          <el-input v-model="userInfo.password" :disabled="!isEditing" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userInfo.phone" :disabled="!isEditing" />
        </el-form-item>
      </el-form>
      <div class="button-group" v-if="isEditing">
        <el-button type="primary" @click="saveInfo">保存</el-button>
        <el-button @click="cancelEdit">取消</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

export default {
  name: 'Profile',
  setup() {
    const userInfo = ref({
      name: '张三',
      password: '123123',
      phone: '123-4567-8901'
    });
    const isEditing = ref(false);

    const saveInfo = () => {
      isEditing.value = false;
      ElMessage.success('个人信息已保存');
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    return {
      userInfo,
      isEditing,
      saveInfo,
      cancelEdit
    };
  }
}


</script>

<style>
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