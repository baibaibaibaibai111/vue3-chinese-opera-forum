<template>
  <div>
    <h2>文章列表</h2>
    <input type="text" placeholder="输入关键词" v-model="keyword" />
    <button @click="search">搜索</button>
    <ul>
      <li v-for="article in filteredArticles" :key="article.id">{{ article.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'ArticleList',
  setup() {
    const keyword = ref('');
    const articles = ref([
      { id: 1, title: '京剧的起源' },
      { id: 2, title: '昆曲的艺术魅力' }
    ]);

    const filteredArticles = computed(() =>
      articles.value.filter(a => a.title.includes(keyword.value))
    );

    return { keyword, filteredArticles };
  }
};
</script>