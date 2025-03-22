<template>
  <div>
    <!-- 只有在非登录、非注册页面时才显示布局 -->
    <div v-if="$route.name !== 'Login' && $route.name !== 'Register'" class="common-layout">
      <el-container>
        <el-aside width="120px">
          <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
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
          <el-header>
            <el-dropdown style="float: right;">
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
const isCollapse = ref(true)

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
