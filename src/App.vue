<template>
  <div>

    <div class="common-layout">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="120px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">
              展开
            </el-radio-button>
            <el-radio-button :value="true">
              关闭
            </el-radio-button>
          </el-radio-group>
          <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <router-link to="/" style="text-decoration: none;">
              <el-menu-item index="1">
                <el-icon>
                  <House />
                </el-icon>
                <template #title>
                  主页
                </template>
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
          <!-- 头部 -->
          <el-header>
            <el-dropdown style="float: right;">
              <el-icon :size="20">
                <User />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="open">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>
          <!-- 主体 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      <router-link to="/articles">文章列表</router-link>
      <router-link to="/profile">个人中心</router-link>
    </nav> -->




  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  House,
  User,
  Notebook
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  name: "App",
  setup() {
    const router = useRouter()
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => { console.log(key, keyPath) }
    const handleClose = (key, keyPath) => { console.log(key, keyPath) }

    const open = () => {
      ElMessageBox.confirm(
        '确认退出登录吗?',
        '提示',
        {
          confirmButtonText: '确认退出',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          //添加路由跳转
          router.push('/login')
          ElMessage({
            type: 'success',
            message: '成功退出',
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消退出',
          })
        })
    }

    return {
      isCollapse,
      handleOpen,
      handleClose,
      Document,
      IconMenu,
      House,
      User,
      Notebook,
      open
    }
  }
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #eee;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
}

nav a:hover {
  background: #ddd;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  min-height: 630px;
}

.el-main {
  height: 620px;
}
</style>
