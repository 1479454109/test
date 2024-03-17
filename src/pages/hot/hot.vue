<script setup lang="ts">
import { getHotRecommendAPI } from '@/services/hot'
import type { HotType, HotItemsType } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref, toRefs } from 'vue'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

//获取展示类型
const props = defineProps<{
  type: string
}>()
const ckHotMap = hotMap.find((x) => x.type == props.type)
uni.setNavigationBarTitle({ title: ckHotMap?.title })

//获取数据
let bannerPicture = ref('')
let subTypes = ref<(HotItemsType & { finished?: boolean })[]>([])
let subTypesActive = ref(0)
const getHotData = async () => {
  const res = await getHotRecommendAPI(ckHotMap!.url, { page: 1, pageSize: 10 })
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes.map((x) => {
    return { ...x, finished: true }
  })
}
onLoad(() => {
  getHotData()
})

//分页
const onScrolltolower = async () => {
  const ckSubTypes = subTypes.value[subTypesActive.value]
  if (subTypes.value[subTypesActive.value].finished) {
    ckSubTypes.goodsItems.page++
    const res = await getHotRecommendAPI(ckHotMap!.url, {
      page: ckSubTypes.goodsItems.page,
      pageSize: 10,
      subType: ckSubTypes.id,
    })
    subTypes.value[subTypesActive.value].finished =
      ckSubTypes.goodsItems.counts > ckSubTypes.goodsItems.page * 10
    //追加数据
    subTypes.value[subTypesActive.value].goodsItems.items.push(
      ...res.result.subTypes[subTypesActive.value].goodsItems.items,
    )
  }
}

//下拉刷新
let isTriggered = ref(false)
const onrefresherrefresh = async () => {
  isTriggered.value = true
  subTypes.value[subTypesActive.value].goodsItems.page = 1
  const res = await getHotRecommendAPI(ckHotMap!.url, {
    page: 1,
    pageSize: 10,
    subType: subTypes.value[subTypesActive.value].id,
  })
  subTypes.value[subTypesActive.value] = res.result.subTypes[subTypesActive.value]
  subTypes.value[subTypesActive.value].finished = true
  isTriggered.value = false //等待请求发送完才执行
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === subTypesActive }"
        @tap="subTypesActive = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <view v-for="(item, index) in subTypes" :key="index">
      <scroll-view
        scroll-y
        class="scroll-view"
        v-show="subTypesActive == index"
        @scrolltolower="onScrolltolower"
        refresher-enabled
        @refresherrefresh="onrefresherrefresh"
        :refresher-triggered="isTriggered"
      >
        <view class="goods">
          <navigator
            hover-class="none"
            class="navigator"
            v-for="good in item.goodsItems.items"
            :key="good.id"
            :url="`/pages/goods/goods?id=${good.id}`"
          >
            <image class="thumb" :src="good.picture"></image>
            <view class="name ellipsis">{{ good.name }} {{ good.desc }}</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">{{ good.price }}</text>
            </view>
          </navigator>
        </view>
        <view class="loading-text">{{ item.finished ? '正在加载...' : '没有更多了~' }}</view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 100%;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  uni-image{
    width: 100%;
  }
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 70rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
