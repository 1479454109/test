<template>
  <!-- 订单列表 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onrefresherrefresh"
    @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered"
    scroll-y
    class="orders"
  >
    <view class="card" v-for="item in orderList?.items" :key="item?.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ item.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ OrderStateList[item.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text
          @tap="deleteMemberOrder(item?.id)"
          v-if="
            [OrderState?.DaiPingJia, OrderState?.YiWanCheng, OrderState?.YiQuXiao].includes(
              item?.orderState,
            )
          "
          class="icon-delete"
        ></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="(sku, index) in item?.skus"
        :key="index"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=${item?.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image mode="aspectFit" :src="sku?.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ sku.name }}</view>
          <view class="type">{{ sku.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ item?.skus?.length }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ item.payMoney }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="item.orderState == OrderState.DaiFuKuan">
          <view @tap="onOrderPay(item?.id)" class="button primary">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=${item?.id}`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            @tap="onOrderConfirm(item?.id)"
            v-if="item?.orderState == OrderState?.DaiShouHuo"
            class="button primary"
            >确认收货</view
          >
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      {{ !finished ? '没有更多数据~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>
<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue'
import {
  deleteMemberOrderAPI,
  getMemberOrderAPI,
  putMemberOrderReceiptByIdAPI,
} from '../../../services/order'
import type { OrderItem, OrderListResult } from '@/types/order'
import { OrderStateList, OrderState } from '@/services/constants'
import { getPayMockAPI, getPayWxPayMiniPayAPI } from '@/services/pay'
import { onLoad, onShow } from '@dcloudio/uni-app'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const props = defineProps<{
  orderState: number
}>()

//获取订单列表数据
const orderList = ref<OrderListResult>()
const page = ref(1)
let finished = ref(true) //还不是全部数据
const getMemberOrder = async () => {
  const res = await getMemberOrderAPI({
    page: page.value,
    pageSize: 5,
    orderState: props.orderState,
  })
  if (page.value == 1) {
    orderList.value = res.result
  } else {
    orderList.value!.items.push(...res.result.items)
  }
  finished.value = res.result.pages > page.value
}
//触底
const onScrolltolower = () => {
  //是否已是全部记录
  if (finished.value) {
    page.value = page.value + 1
    getMemberOrder()
  }
}
//下拉刷新动画
const isTriggered = ref(false)
const onrefresherrefresh = async () => {
  page.value = 1 //重置页码
  isTriggered.value = true
  await getMemberOrder()
  isTriggered.value = false //等待请求发送完才执行
}
onShow(() => {
  onrefresherrefresh()
})
//删除订单
const deleteMemberOrder = async (id: string) => {
  // 二次确认弹窗
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，再确认收货',
    success: async (success) => {
      if (success.confirm) {
        await deleteMemberOrderAPI({ ids: [id] })
        uni.showToast({
          icon: 'success',
          title: '删除成功',
        })
        orderList.value!.items = orderList.value?.items.filter(
          (x: OrderItem) => x.id != id,
        ) as OrderItem[]
      }
    },
  })
}

// 确认收货
const onOrderConfirm = (id: string) => {
  // 二次确认弹窗
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后，再确认收货',
    success: async (success) => {
      if (success.confirm) {
        const res = await putMemberOrderReceiptByIdAPI(id)
        uni.showToast({
          icon: 'success',
          title: '已收货',
        })
        // 去除收货项
        if (props.orderState == OrderState.DaiShouHuo) {
          orderList.value!.items = orderList.value?.items.filter(
            (x: OrderItem) => x.id != id,
          ) as OrderItem[]
        } else {
          //修改为待评价
          let item = orderList.value!.items.find((x: OrderItem) => x.id == id)
          item!.orderState = OrderState.DaiPingJia
        }
      }
    },
  })
}

// 订单支付
const onOrderPay = async (id: string) => {
  // 通过环境变量区分开发环境
  await getPayMockAPI({ orderId: id })
  // 生产环境：获取支付参数 + 发起微信支付
  // #ifdef MP-WEIXIN
  const res = await getPayWxPayMiniPayAPI({ orderId: id })
  await wx.requestPayment(res.result)
  // #endif
  uni.showToast({
    icon: 'success',
    title: '支付成功',
  })
  //修改为待发货
  let item = orderList.value!.items.find((x: OrderItem) => x.id == id)
  item!.orderState = OrderState.DaiFaHuo
}

defineExpose({
  onrefresherrefresh,
  getMemberOrder,
})
</script>
<style lang="scss" scoped>
.orders {
  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;

    &:last-child {
      padding-bottom: 40rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #999;
    margin-bottom: 15rpx;

    .date {
      color: #666;
      flex: 1;
    }

    .primary {
      color: #ff9240;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }

  .goods {
    display: flex;
    margin-bottom: 20rpx;

    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #333;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid #eee;

    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }

    .amount {
      color: #444;
      margin-left: 6rpx;
    }

    .symbol {
      font-size: 20rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20rpx;

    .button {
      width: 180rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid #ccc;
      font-size: 26rpx;
      color: #444;
    }

    .secondary {
      color: #27ba9b;
      border-color: #27ba9b;
    }

    .primary {
      color: #fff;
      background-color: #27ba9b;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
