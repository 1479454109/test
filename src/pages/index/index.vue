

<template>
  <Navbar />
  <XtxSwiper />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './componet/navbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home'

//const Navbar = defineAsyncComponent(() => import('./componet/navbar.vue'))
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
//
</style>
