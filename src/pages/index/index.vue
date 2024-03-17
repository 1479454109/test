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
    <view v-show="!isOnLoad">
      <XtxSwiper class="banner"  :list="bannerList" />
      <Category :list="categoryList" />
      <HotPanel :list="mutliList" />
      <XtxGuess ref="guess" />
    </view>
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
import { onLoad } from '@dcloudio/uni-app'
import { useGuessList } from '@/composables/index'

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

//猜你喜欢 滚动触底、下拉刷新
const { guess, isTriggered, onScrolltolower, onrefresherrefresh } = useGuessList()
</script>

<style lang="scss">
/* #ifdef APP-PLUS */
#app, 
/* #endif */
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex; 
  flex-direction: column; 
}
.scrollBox {
  flex-grow: 1;
}
</style>
