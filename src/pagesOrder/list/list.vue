<script setup lang="ts">
import { ref,onMounted } from 'vue'
import OrderList from './component/OrderList.vue'
// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价' },
])
// 获取页面参数
const query = defineProps<{
  type: string
}>()
// 高亮下标
const activeIndex = ref(orderTabs.value.findIndex((v) => v.orderState === Number(query.type)))

//获取新数据
const OrderListRef=ref()
const onchange=($event:any)=>{   
  activeIndex.value=$event.detail.current;  
  //OrderListRef.value[activeIndex.value].onrefresherrefresh();   
}
  
</script>

<template>
  <view class="listViewport">
    <!-- tabs -->
    <view class="tabs">
      <text @tap="activeIndex=index" class="item" v-for="(item,index) in orderTabs" :key="index"> {{ item.title }} </text>
      <!-- 游标 -->
      <view class="cursor" :style="{ left: activeIndex * 20 + '%' }"></view>
    </view>
    <!-- 滑动容器 -->
    <swiper :current="activeIndex"  @tap="onrefresh" class="swiper" @change="onchange">
      <!-- 滑动项 -->
      <swiper-item v-for="(item,index) in orderTabs" :key="index">
        <OrderList ref="OrderListRef" :orderState="item?.orderState"/>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.listViewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  uni-image{
    width: 100% !important;
    height: 100% !important;
  }
}
 
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #27ba9b;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}
 
.swiper {
  background-color: #f7f7f8;
}
 
</style>