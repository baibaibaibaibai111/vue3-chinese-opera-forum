<template>
  <div>
    <!-- 侧边栏 -->
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <House />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">
            <span>Item One</span>
          </el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><House /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      <router-link to="/articles">文章列表</router-link>
      <router-link to="/profile">个人中心</router-link>
    </nav>



    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  House,
  Setting,
} from '@element-plus/icons-vue'
export default {
  name: "App",
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => { console.log(key, keyPath) }
    const handleClose = (key, keyPath) => { console.log(key, keyPath) }

    return {
      isCollapse,
      handleOpen,
      handleClose,
      Document,
      IconMenu,
      House,
      Setting,
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
  width: 200px;
  min-height: 400px;
}
</style>
