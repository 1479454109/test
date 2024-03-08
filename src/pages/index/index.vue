<template>
  <Navbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onrefresherrefresh"
    @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered"
    class="scrollBox"
    scroll-y
  >
    <PageSkeleton v-if="isOnLoad" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <Category :list="categoryList" />
      <HotPanel :list="mutliList" />
      <XtxGuess ref="guess" />
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './componet/navbar.vue'
import Category from './componet/category.vue'
import HotPanel from './componet/hotPanel.vue'
import PageSkeleton from './componet/PageSkeleton.vue'
import { getHomeBannerAPI, getCategoryAPI, getMutliAPI } from '@/services/home'
import type { BannerItem, CategoryItem, MutliItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'
import { onLoad } from '@dcloudio/uni-app'

let isOnLoad = ref(true) //骨灰架
onLoad(async () => {
  await Promise.all([getHomeBannerData(), getCategory(), getMutli()])
  isOnLoad.value = false
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
  //是否已是全部记录
  if (guess.value?.finished) {
    page.value = page.value + 1
    guess.value?.getGuessLike(page.value, 10)
  }
}
//下拉刷新
const isTriggered = ref(false)
const onrefresherrefresh = async () => {
  page.value = 1 //重置页码
  isTriggered.value = true
  // await getHomeBannerData()  //单个
  await Promise.all([
    getHomeBannerData(),
    getCategory(),
    getMutli(),
    guess.value?.getGuessLike(page.value, 10),
  ]) //多个请求一起发送
  isTriggered.value = false //等待请求发送完才执行
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
