<template>
    <div class="article-detail">
        <el-card v-if="article">
            <h2 class="article-title">{{ article.title }}</h2>
            <img :src="article.image" class="article-image" />
            <p class="article-content">{{ article.content }}</p>
            <el-button type="primary" @click="goBack">返回</el-button>
        </el-card>

        <el-empty v-else description="文章未找到"></el-empty>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 模拟文章数据
const articles = [
    { id: 1, title: "京剧艺术的魅力", category: "京剧", image: "https://example.com/jingju.jpg", content: "京剧是中国国粹，融合了..." },
    { id: 2, title: "昆曲的传承与发展", category: "昆曲", image: "https://example.com/kunqu.jpg", content: "昆曲是中国最古老的戏曲剧种之一..." },
    { id: 3, title: "越剧的起源与风格", category: "越剧", image: "https://example.com/yueju.jpg", content: "越剧以细腻柔美著称..." },
    { id: 4, title: "秦腔：西北的戏曲瑰宝", category: "秦腔", image: "https://example.com/qinqiang.jpg", content: "秦腔是西北地区的重要剧种..." }
]

const route = useRoute()
const router = useRouter()
const article = ref(null)

// 组件挂载时获取文章详情
onMounted(() => {
    const articleId = parseInt(route.params.id)
    article.value = articles.find(a => a.id === articleId) || null
})

// 返回推荐列表
const goBack = () => {
    router.push('/articles')
}
</script>

<style scoped>
.article-detail {
    max-width: 800px;
    margin: 20px auto;
}

.article-title {
    text-align: center;
}

.article-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.article-content {
    font-size: 16px;
    line-height: 1.6;
    margin: 20px 0;
}
</style>
