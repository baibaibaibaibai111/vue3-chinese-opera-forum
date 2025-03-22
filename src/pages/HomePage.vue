<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <div class="search-bar">
      <el-input style="width: 240px" placeholder="搜索戏曲文章" v-model="searchText" />
      <el-button type="primary" style="margin-left: 10px">搜索</el-button>
    </div>

    <!-- 推荐文章 -->
    <h2>推荐文章</h2>
    <el-row :gutter="20">
      <el-col v-for="article in filteredArticles" :key="article.id" :span="8">
        <el-card class="article-card" @click="viewArticle(article)">
          <img :src="article.image" class="article-image" />
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import image1 from '@/assets/轮播图1.jpg'
import image2 from '@/assets/轮播图2.jpg'
import image3 from '@/assets/轮播图3.jpg'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const searchText = ref('')

    // 文章数据
    const articles = ref([
      { id: 1, title: "京剧艺术的魅力", summary: "京剧是中国国粹，融合了表演、唱腔和武术。", image: "https://example.com/jingju.jpg" },
      { id: 2, title: "昆曲的传承与发展", summary: "昆曲被誉为“百戏之祖”，是中国最古老的戏曲剧种之一。", image: "https://example.com/kunqu.jpg" },
      { id: 3, title: "越剧的起源与风格", summary: "越剧以细腻柔美著称，深受观众喜爱。", image: "https://example.com/yueju.jpg" },
      { id: 4, title: "秦腔：西北的戏曲瑰宝", summary: "秦腔是西北地区的重要剧种，气势磅礴。", image: "https://example.com/qinqiang.jpg" }
    ])

    // 轮播图
    const images = ref([image1, image2, image3])

    // 搜索功能（本地搜索文章）
    const filteredArticles = computed(() => {
      if (!searchText.value) return articles.value
      return articles.value.filter(a =>
        (a.title || '').includes(searchText.value) ||
        (a.summary || '').includes(searchText.value)
      )
    })


    // 跳转文章详情页
    const viewArticle = (article) => {
      router.push(`/article/${article.id}`)
    }

    return { searchText, images, articles, filteredArticles, viewArticle }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-bar {
  margin: 30px auto;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.article-title {
  margin: 10px 0;
  font-size: 18px;
}

.article-summary {
  font-size: 14px;
  color: gray;
}
</style>
