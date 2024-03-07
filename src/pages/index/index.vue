<template>
  <Navbar />
  <scroll-view @scrolltolower="onScrolltolower" class="scrollBox" scroll-y>
    <XtxSwiper :list="bannerList" />
    <Category :list="categoryList" />
    <HotPanel :list="mutliList" />
    <XtxGuess ref="guess" />
  </scroll-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './componet/navbar.vue'
import Category from './componet/category.vue'
import HotPanel from './componet/hotPanel.vue'
import { getHomeBannerAPI, getCategoryAPI, getMutliAPI } from '@/services/home'
import type { BannerItem, CategoryItem, MutliItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'
import { onLoad } from '@dcloudio/uni-app'

onLoad(() => {
  getHomeBannerData()
  getCategory()
  getMutli()
})
//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
//获取分类数据
const categoryList = ref<CategoryItem[]>([])
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
}
//获取推荐数据
const mutliList = ref<MutliItem[]>([])
const getMutli = async () => {
  const res = await getMutliAPI()
  mutliList.value = res.result
}

//滚动触底
let guess = ref<XtxGuessInstance>()
let page = ref<number>(1)
const onScrolltolower = () => {
  console.log(guess.value?.finished)

  //是否已是全部记录
  if (guess.value?.finished) {
    page.value = page.value + 1
    guess.value?.getGuessLike(page.value, 10)
  }
}
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scrollBox {
  flex-grow: 1;
}
</style>
