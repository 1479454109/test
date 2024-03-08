<template>
  <!-- 商品详情 -->
  <view class="detail panel">
    <view class="title">
      <text>详情</text>
    </view>
    <view class="content">
      <view class="properties">
        <!-- 属性详情 -->
        <view class="item" v-for="item in data?.properties" :key="item?.value">
          <text class="label">{{ item.name }}</text>
          <text class="value">{{ item.value }}</text>
        </view>
      </view>
      <!-- 图片详情 -->
      <image v-for="item in data?.pictures" :key="item" mode="widthFix" :src="item"></image>
    </view>
  </view>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import type { Details } from '@/types/goods'
defineProps<{
  data: Details | undefined
}>()
</script>
<style lang="scss" scoped>
/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
    .image {
      width: 100%;
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}
.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}
</style>
