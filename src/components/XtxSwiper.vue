<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { defineProps } from 'vue'

const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper
      indicator-dots
      indicator-active-color="#fff"
      :circular="true"
      :autoplay="true"
      :interval="3000"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef; 
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}

:host {
  display: block;
  height: 280rpx;
}
</style>
