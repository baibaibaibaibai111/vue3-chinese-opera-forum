<template>
  <div>
    <!-- 只有在非登录、非注册页面时才显示布局 -->
    <div v-if="$route.name !== 'Login' && $route.name !== 'Register'" class="common-layout">
      <el-container>
        <el-aside width="130px" style="margin-top: 15px;">
          <span style="margin: 20px 5px 20px 5px;font-weight: 600;color: #888888;font-size: 18px;">
            中国戏曲论坛
          </span>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-top: 20px;">
            <el-radio-button :value="false">展开</el-radio-button>
            <el-radio-button :value="true">折叠</el-radio-button>
          </el-radio-group>
          <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <router-link to="/" style="text-decoration: none;">
              <el-menu-item index="1">
                <el-icon>
                  <House />
                </el-icon>
                <template #title>主页</template>
              </el-menu-item>
            </router-link>
            <router-link to="/articles" style="text-decoration: none;">
              <el-menu-item index="2">
                <el-icon>
                  <Notebook />
                </el-icon>
                <template #title>文章</template>
              </el-menu-item>
            </router-link>
            <router-link to="/profile" style="text-decoration: none;">
              <el-menu-item index="3">
                <el-icon>
                  <User />
                </el-icon>
                <template #title>个人</template>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="border-bottom: 1px solid #ddd;">
            <el-dropdown style="display: flex;justify-content: right;bottom: -15px;">
              <el-icon :size="20">
                <User />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- 登录 & 注册页面 -->
    <router-view v-if="$route.name === 'Login' || $route.name === 'Register'"></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { House, User, Notebook } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const router = useRouter()
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const logout = () => {
  ElMessageBox.confirm('确认退出登录吗?', '提示', {
    confirmButtonText: '确认退出',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    router.push('/login')
    ElMessage.success('成功退出')
  }).catch(() => {
    ElMessage.info('取消退出')
  })
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 5px;
  padding: 0;
  overflow: hidden; /* 防止 body 滚动 */
}
.common-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-container {
  flex: 1;
  height: 100%;
}

.el-main {
  flex: 1;
  overflow-y: auto;
  /* 只允许 el-main 滚动 */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  height: 570px;
}
</style>
