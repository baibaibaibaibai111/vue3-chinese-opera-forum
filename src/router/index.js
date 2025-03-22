import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import ArticleListPage from '../pages/ArticleListPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/articles', name: 'ArticleList', component: ArticleListPage },
  { path: '/profile', name: 'Profile', component: ProfilePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
