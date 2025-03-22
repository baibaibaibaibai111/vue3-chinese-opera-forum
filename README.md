# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 登录注册页+首页+文章列表展示页+文章详情页+个人信息页
### 登录页
![image](https://github.com/user-attachments/assets/2fd3f888-1656-44dc-9d83-6a82790665e5)
### 注册页
![image](https://github.com/user-attachments/assets/0405a0c6-aa36-4746-a41f-2a1f7579ced1)
#### 登录注册页信息存储在localstorage，并且登录注册成功都会弹出消息提示框
### 首页 '/'
![image](https://github.com/user-attachments/assets/cfcc7209-08f2-4b71-ad7e-2ce1cd245f6d)
#### 侧边栏使用element plus菜单，可以收缩 
![image](https://github.com/user-attachments/assets/5434a8f4-ca23-4c08-8efb-994f90cc3d1c)
#### 头部右侧显示用户icon，鼠标移动上去会弹出下拉框，可以退出登录
![image](https://github.com/user-attachments/assets/8bd8dfb2-fd3f-410b-83bf-7529f8a5bae1)
#### 退出登录时会弹出再次确认框，取消退出和成功退出都会有消息提示
![image](https://github.com/user-attachments/assets/038ae1da-70b7-4ec3-9222-1c7f840125e1)
#### 首页路由 '/' ，显示轮播图组件，搜索框和优质文章展示，搜索框可以搜索文章内容显示对应文章，点击对应文章卡片可以跳转到对应文章详情内容页 路由 '/article/{id}'
![image](https://github.com/user-attachments/assets/6879de87-21be-4f06-b0ec-d81e5b02b886)
### 文章列表展示页'/article'
![image](https://github.com/user-attachments/assets/ef3690e5-7716-4a5c-a372-150ba462d1d6)
#### 侧边有文章分类，点击可以显示对应分类下的文章，上方搜索框搜索对应文章，点击对应文章卡片可以跳转到对应文章详情内容页 路由 '/article/{id}'
### 文章详情页 '/article/{id}'
![image](https://github.com/user-attachments/assets/f5dec066-ac70-44f9-b5cc-0be625abae4d)
### 个人信息页
![image](https://github.com/user-attachments/assets/1c86c68d-7e7b-4806-8a77-fcd76a1e0fd7)
#### 显示登录时的姓名和密码，密码加密，且input都不可以点击随意更改
#### 点击编辑按钮，编辑个人信息，修改姓名，密码，电话，修改完成后localstorage中的数据也对应变化，页面自动刷新，更改信息
### 退出系统之后，localstorage中的数据全部清除
## 本系统内的全部数据都是前端写死的数据，没有后端请求，适合学习前端vue3练习



