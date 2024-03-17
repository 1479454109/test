<template name="skeleton">
  <view class="sk-container">
    <scroll-view
      :scroll-y="true"
      class="viewport viewport data-v-e000afeb data-v-e000afeb"
      :enable-back-to-top="true"
    >
      <view class="goods goods data-v-e000afeb data-v-e000afeb">
        <view class="preview preview data-v-e000afeb data-v-e000afeb">
          <swiper
            :circular="true"
            class="data-v-e000afeb data-v-e000afeb"
            :current="0"
            :autoplay="false"
          >
            <swiper-item
              class="data-v-e000afeb data-v-e000afeb"
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image class="data-v-e000afeb sk-image" mode="aspectFill"></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator data-v-e000afeb data-v-e000afeb">
            <text class="current data-v-e000afeb sk-transparent sk-opacity">1</text>
            <text class="split data-v-e000afeb sk-transparent sk-opacity">/</text>
            <text class="total data-v-e000afeb sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta data-v-e000afeb data-v-e000afeb">
          <view class="price price data-v-e000afeb data-v-e000afeb">
            <text class="symbol data-v-e000afeb sk-transparent sk-opacity">¥</text>
            <text class="number data-v-e000afeb sk-transparent sk-text-14-2857-903 sk-text"
              >168.00</text
            >
          </view>
          <view class="name ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-354 sk-text"
            >梅乃宿梅酒720毫升</view
          >
          <view class="desc data-v-e000afeb sk-transparent sk-text-0-0000-434 sk-text"
            >小藏手工酿造，百年名酒app</view
          >
        </view>
        <view class="action action data-v-e000afeb data-v-e000afeb">
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-115 sk-text"
              >选择</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-773 sk-text">
              请选择商品规格
            </text>
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-649 sk-text"
              >送至</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-84 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-98 sk-text"
              >服务</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-185 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view is="pages/goods/comonent/detail" class="data-v-e000afeb data-v-e000afeb">
        <view
          class="detail detail--detail panel detail--panel data-v-1034a2dc detail--data-v-1034a2dc"
        >
          <view class="title detail--title data-v-1034a2dc detail--data-v-1034a2dc">
            <text
              class="data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-0-0000-120 sk-text"
              >详情</text
            >
          </view>
          <view class="content detail--content data-v-1034a2dc detail--data-v-1034a2dc">
            <view class="properties detail--properties data-v-1034a2dc detail--data-v-1034a2dc">
              <view class="item detail--item data-v-1034a2dc detail--data-v-1034a2dc">
                <text
                  class="label detail--label data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-25-0000-336 sk-text"
                  >品名</text
                >
                <text
                  class="value detail--value data-v-1034a2dc detail--data-v-1034a2dc sk-transparent sk-text-25-0000-677 sk-text"
                  >梅乃宿梅酒</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar data-v-e000afeb data-v-e000afeb" style="padding-bottom: 34px">
      <view class="icons icons data-v-e000afeb data-v-e000afeb">
        <button
          class="icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"
        >
          <text class="icon-heart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>收藏
        </button>
        <!-- #ifdef MP-WEIXIN -->
        
        <button
          class="icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="contact"
        >
          <text class="icon-handset data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>客服
        </button>
        <!-- #endif -->
        <navigator class="icons-button data-v-e000afeb sk-transparent" open-type="switchTab">
          <text class="icon-cart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons buttons data-v-e000afeb data-v-e000afeb">
        <view
          class="addcart data-v-e000afeb sk-transparent sk-text-31-9444-767 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow data-v-e000afeb sk-transparent sk-text-31-9444-637 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
page {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .viewport {
    background-color: #f4f4f4;
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
  
  .arrow {
    &::after {
      position: absolute;
      top: 50%;
      right: 30rpx;
      content: '\e6c2';
      color: #ccc;
      font-family: 'erabbit' !important;
      font-size: 32rpx;
      transform: translateY(-50%);
    }
  }
   
  /* 商品信息 */
  .goods {
    background-color: #fff;
    .preview {
      height: 750rpx;
      position: relative;
      .image {
        width: 750rpx;
        height: 750rpx;
      }
      uni-image{
        height: 100%;
        width: 100%;
      }
      .indicator {
        height: 40rpx;
        padding: 0 24rpx;
        line-height: 40rpx;
        border-radius: 30rpx;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 30rpx;
        right: 30rpx;
        .current {
          font-size: 26rpx;
        }
        .split {
          font-size: 24rpx;
          margin: 0 1rpx 0 2rpx;
        }
        .total {
          font-size: 24rpx;
        }
      }
    }
    .meta {
      position: relative;
      border-bottom: 1rpx solid #eaeaea;
      .price {
        height: 130rpx;
        padding: 25rpx 30rpx 0;
        color: #fff;
        font-size: 34rpx;
        box-sizing: border-box;
        background-color: #35c8a9;
      }
      .number {
        font-size: 56rpx;
      }
      .brand {
        width: 160rpx;
        height: 80rpx;
        overflow: hidden;
        position: absolute;
        top: 26rpx;
        right: 30rpx;
      }
      .name {
        max-height: 88rpx;
        line-height: 1.4;
        margin: 20rpx;
        font-size: 32rpx;
        color: #333;
      }
      .desc {
        line-height: 1;
        padding: 0 20rpx 30rpx;
        font-size: 24rpx;
        color: #cf4444;
      }
    }
    .action {
      padding-left: 20rpx;
      .item {
        height: 90rpx;
        padding-right: 60rpx;
        border-bottom: 1rpx solid #eaeaea;
        font-size: 26rpx;
        color: #333;
        position: relative;
        display: flex;
        align-items: center;
        &:last-child {
          border-bottom: 0 none;
        }
      }
      .label {
        width: 60rpx;
        color: #898b94;
        margin: 0 16rpx 0 10rpx;
      }
      .text {
        flex: 1;
        -webkit-line-clamp: 1;
      }
    }
  }
   
  .similar {
    .content {
      padding: 0 20rpx 200rpx;
      background-color: #f4f4f4;
      display: flex;
      flex-wrap: wrap;
      .goods {
        width: 340rpx;
        padding: 24rpx 20rpx 20rpx;
        margin: 20rpx 7rpx;
        border-radius: 10rpx;
        background-color: #fff;
      }
      .image {
        width: 300rpx;
        height: 260rpx; 
      }
      .name {
        height: 80rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
      }
      .price {
        line-height: 1;
        font-size: 20rpx;
        color: #cf4444;
      }
      .number {
        font-size: 26rpx;
        margin-left: 2rpx;
      }
    }
    navigator {
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
   
  .toolbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #fff;
    height: 100rpx;
    padding: 0 20rpx var(--window-bottom);
    border-top: 1rpx solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    .buttons {
      display: flex;
      & > view {
        width: 220rpx;
        text-align: center;
        line-height: 72rpx;
        font-size: 26rpx;
        color: #fff;
        border-radius: 72rpx;
      }
      .addcart {
        background-color: #ffa868;
      }
      .buynow,
      .payment {
        background-color: #27ba9b;
        margin-left: 20rpx;
      }
    }
    .icons {
      padding-right: 10rpx;
      display: flex;
      align-items: center;
      flex: 1;
      .icons-button {
        flex: 1;
        text-align: center;
        line-height: 1.4;
        padding: 0;
        margin: 0;
        border-radius: 0;
        font-size: 20rpx;
        color: #333;
        background-color: #fff;
        &::after {
          border: none;
        }
      }
      text {
        display: block;
        font-size: 34rpx;
      }
    }
  }
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-903 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.4rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-354 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-0-0000-434 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24rpx;
  position: relative !important;
}
.sk-text-14-2857-115 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-773 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-649 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-84 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-98 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-185 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-0-0000-120 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-25-0000-336 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 52rpx;
  position: relative !important;
}
.sk-text-25-0000-677 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 52rpx;
  position: relative !important;
}
.sk-text-31-9444-767 {
  background-image: linear-gradient(
    transparent 31.9444%,
    #eeeeee 0%,
    #eeeeee 68.0556%,
    transparent 0%
  ) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-31-9444-637 {
  background-image: linear-gradient(
    transparent 31.9444%,
    #eeeeee 0%,
    #eeeeee 68.0556%,
    transparent 0%
  ) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
