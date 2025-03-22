<template>
  <div class="opera-recommend">
    <el-container>
      <!-- 侧边栏（分类筛选） -->
      <el-aside width="200px">
        <el-menu :default-active="selectedCategory" @select="selectCategory">
          <el-menu-item v-for="category in categories" :key="category.value" :index="category.value">
            {{ category.label }}
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 头部搜索框 -->
        <el-header>
          <el-input v-model="searchQuery" placeholder="搜索戏曲文章..." clearable @clear="searchQuery = ''"
            @keyup.enter="searchQuery = searchQuery.trim()">
            <template #append>
              <el-button type="primary" @click="searchQuery = searchQuery.trim()">搜索</el-button>
            </template>
          </el-input>

        </el-header>

        <!-- 文章列表 -->
        <el-main>
          <el-row :gutter="20">
            <el-col v-for="article in filteredArticles" :key="article.id" :span="8">
              <el-card :body-style="{ padding: '10px' }" class="article-card" @click="viewArticle(article)">
                <img :src="article.image" class="article-image" />
                <div class="article-content">
                  <h3>{{ article.title }}</h3>
                  <p class="article-desc">{{ article.content }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>

          <!-- 无数据提示 -->
          <el-empty v-if="filteredArticles.length === 0" description="暂无相关文章"></el-empty>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// 模拟文章数据
const articles = ref([
  { id: 1, title: "京剧艺术的魅力", category: "京剧", image: "https://example.com/jingju.jpg", content: "京剧作为国粹，融合了唱、念、做、打..." },
  { id: 2, title: "昆曲的传承与发展", category: "昆曲", image: "https://example.com/kunqu.jpg", content: "昆曲是中国最古老的戏曲剧种之一..." },
  { id: 3, title: "越剧的起源与风格", category: "越剧", image: "https://example.com/yueju.jpg", content: "越剧以细腻柔美著称，深受女性观众喜爱..." },
  { id: 4, title: "秦腔：西北的戏曲瑰宝", category: "秦腔", image: "https://example.com/qinqiang.jpg", content: "秦腔是中国西北地区的传统戏曲..." },
  { id: 5, title: "中国“国粹”", category: "京剧", image: "https://example.com/qinqiang.jpg", content: "京剧是因清朝皇帝乾隆的喜好而诞生..." }
])

const categories = ref([
  { label: "全部", value: "全部" },
  { label: "京剧", value: "京剧" },
  { label: "昆曲", value: "昆曲" },
  { label: "越剧", value: "越剧" },
  { label: "秦腔", value: "秦腔" }
])

const selectedCategory = ref("全部")
const searchQuery = ref("")
const router = useRouter()

// 过滤文章
const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchCategory = selectedCategory.value === "全部" || article.category === selectedCategory.value
    const matchSearch = article.title.includes(searchQuery.value) || article.content.includes(searchQuery.value)
    return matchCategory && matchSearch
  })
})


// 选择分类
const selectCategory = (category) => {
  selectedCategory.value = category
}

// 搜索文章
const fetchArticles = () => {
  // 在这里可以调用 API 获取搜索结果
  console.log("搜索:", searchQuery.value)
}

// 查看文章详情
const viewArticle = (article) => {
  router.push({ path: `/article/${article.id}` })
}
</script>

<style scoped>
.opera-recommend {
  padding: 20px;
}

.el-header {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.el-aside {
  background: #f8f8f8;
  padding: 10px;
}

.article-card {
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 320px;
  height: 290px;
  margin: 5px;
}

.article-card:hover {
  transform: scale(1.05);
}

.article-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.article-content {
  padding: 10px;
}

.article-desc {
  font-size: 14px;
  color: #666;
}
</style>
