<template>
  <div class="container">
    <header>
      <h1>中国戏曲论坛</h1>
      <div class="search-bar">
        <input type="text" placeholder="搜索戏曲" v-model="searchText" />
        <button @click="search">搜索</button>
      </div>
    </header>

    <div class="carousel">
      <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="轮播图">
        </div>
      </div>
      <button class="prev" @click="prevSlide">&#9665;</button>
      <button class="next" @click="nextSlide">&#9655;</button>
    </div>

    <section class="articles">
      <h2>推荐文章</h2>
      <ul>
        <li v-for="article in articles" :key="article.id">{{ article.title }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import image1 from '@/assets/轮播图1.jpg';
import image2 from '@/assets/轮播图2.jpg';
import image3 from '@/assets/轮播图3.jpg';

export default {
  setup() {
    const searchText = ref('');
    const articles = ref([
      { id: 1, title: '京剧的起源与发展' },
      { id: 2, title: '昆曲的艺术魅力解析' },
      { id: 3, title: '越剧的经典剧目推荐' }
    ]);

    const search = () => {
      alert(`搜索：${searchText.value}`);
    };

    const images = ref([image1, image2, image3]);
    const currentIndex = ref(0);

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    return { searchText, search, articles, images, currentIndex, prevSlide, nextSlide };
  }
};
</script>

<style>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

header h1 {
  font-size: 24px;
  color: #333;
}

.search-bar {
  margin: 10px 0;
}

.search-bar input {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar button {
  padding: 8px 15px;
  margin-left: 5px;
  border: none;
  background: #ff5722;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 380px;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
}

.carousel-item img {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border-radius: 50%;
}

.carousel .prev {
  left: 10px;
}

.carousel .next {
  right: 10px;
}

.articles {
  margin-top: 30px;
}

.articles h2 {
  color: #333;
  font-size: 20px;
}

.articles ul {
  list-style: none;
  padding: 0;
}

.articles li {
  background: #f5f5f5;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

.articles li:hover {
  background: #ddd;
}
</style>