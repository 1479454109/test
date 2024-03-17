 
<template name="skeleton">
    <view class="sk-container">
      <view class="navbar navbar" style="padding-top:44px">
        <view class="wrap wrap">
          <navigator class="back icon-home sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
          <view class="title sk-transparent sk-text-14-2857-762 sk-text">订单详情</view>
        </view>
      </view>
      <scroll-view :refresher-enabled="true" :scroll-y="true" class="viewport viewport" id="scroller" enable-back-to-top="true">
        <view class="overview sk-image" style="padding-top:64px">
          <view class="status icon-clock sk-transparent sk-text-0-0000-923 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
          <view class="tips sk-transparent">
            <text class="money sk-transparent sk-text-0-0000-688 sk-text">应付金额: ¥ 99.00</text>
            <text class="time sk-transparent sk-text-0-0000-919 sk-text">支付剩余</text> 00 时 29 分 59 秒 </view>
          <view class="button sk-transparent sk-text-28-1250-271 sk-text" style="background-position-x: 50%;">去支付</view>
        </view>
        <view class="shipment shipment">
          <view class="item sk-image">
            <view class="message sk-transparent sk-text-14-2857-748 sk-text"> 您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
            <view class="date sk-transparent sk-text-14-2857-792 sk-text"> 2023-04-14 13:14:20 </view>
          </view>
          <view class="locate sk-image">
            <view class="user sk-transparent sk-text-14-2857-465 sk-text"> 张三 13333333333 </view>
            <view class="address sk-transparent sk-text-14-2857-798 sk-text"> 广东省 广州市 天河区 黑马程序员 </view>
          </view>
        </view>
        <view class="goods goods">
          <view class="item item">
            <navigator class="navigator navigator" hover-class="none">
              <image class="cover sk-image"></image>
              <view class="meta meta">
                <view class="name ellipsis sk-transparent sk-text-14-2857-793 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
                <view class="type sk-transparent sk-text-22-2222-231 sk-text">藏青小花， 130</view>
                <view class="price price">
                  <view class="actual actual">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="sk-transparent sk-text-14-2857-360 sk-text">99.00</text>
                  </view>
                </view>
                <view class="quantity sk-transparent sk-opacity">x1</view>
              </view>
            </navigator>
            <navigator class="navigator navigator" hover-class="none">
              <image class="cover sk-image"></image>
              <view class="meta meta">
                <view class="name ellipsis sk-transparent sk-text-14-2857-944 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
                <view class="type sk-transparent sk-text-22-2222-278 sk-text">藏青小花， 130</view>
                <view class="price price">
                  <view class="actual actual">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="sk-transparent sk-text-14-2857-765 sk-text">99.00</text>
                  </view>
                </view>
                <view class="quantity sk-transparent sk-opacity">x1</view>
              </view>
            </navigator>
            <view class="action action">
              <view class="button primary sk-transparent sk-text-28-3333-601 sk-text" style="background-position-x: 50%;border: none;">申请售后</view>
              <navigator class="button sk-transparent sk-text-28-3333-161 sk-text" style="background-position-x: 50%;border: none;"> 去评价 </navigator>
            </view>
          </view>
          <view class="total total">
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-985 sk-text">商品总价: </view>
              <view class="symbol sk-transparent sk-text-0-0000-932 sk-text sk-pseudo sk-pseudo-circle">99.00</view>
            </view>
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-446 sk-text">运费: </view>
              <view class="symbol sk-transparent sk-text-0-0000-123 sk-text sk-pseudo sk-pseudo-circle">10.00</view>
            </view>
            <view class="row row">
              <view class="text sk-transparent sk-text-0-0000-86 sk-text">应付金额: </view>
              <view class="symbol primary sk-transparent sk-text-0-0000-551 sk-text sk-pseudo sk-pseudo-circle">109.00</view>
            </view>
          </view>
        </view>
        <view class="detail detail">
          <view class="title sk-transparent sk-text-0-0000-87 sk-text">订单信息</view>
          <view class="row row">
            <view class="item sk-transparent"> 订单编号: 1768147137113100290
              <text class="copy sk-transparent sk-text-0-0000-874 sk-text">复制</text>
            </view>
            <view class="item sk-transparent sk-text-0-0000-394 sk-text">下单时间: 2023-04-14 13:14:20</view>
          </view>
        </view>
      </scroll-view> 
    </view>
  </template>

  <style lang="scss" scoped >  
  
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.navbar {
  width: 750rpx;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  /* background-color: #f8f8f8; */
  background-color: transparent;

  .wrap {
    position: relative;

    .title {
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32rpx;
      /* color: #000; */
      color: transparent;
    }

    .back {
      position: absolute;
      left: 0;
      height: 44px;
      width: 44px;
      font-size: 44rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      /* color: #000; */
      color: #fff;
    }
  }
}

.viewport {
  background-color: #f7f7f8;
}

.overview {
  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 1;
  padding-bottom: 30rpx;
  color: #fff;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: cover;

  .status {
    font-size: 36rpx;
  }

  .status::before {
    margin-right: 6rpx;
    font-weight: 500;
  }

  .tips {
    margin: 30rpx 0;
    display: flex;
    font-size: 14px;
    align-items: center;

    .money {
      margin-right: 30rpx;
    }
  }

  .button-group {
    margin-top: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 260rpx;
    height: 64rpx;
    margin: 0 10rpx;
    text-align: center;
    line-height: 64rpx;
    font-size: 28rpx;
    color: #27ba9b;
    border-radius: 68rpx;
    background-color: #fff;
  }
}

.shipment {
  line-height: 1.4;
  padding: 0 20rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .locate,
  .item {
    min-height: 120rpx;
    padding: 30rpx 30rpx 25rpx 75rpx;
    background-size: 50rpx;
    background-repeat: no-repeat;
    background-position: 6rpx center;
  }

  .locate {
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);

    .user {
      font-size: 26rpx;
      color: #444;
    }

    .address {
      font-size: 24rpx;
      color: #666;
    }
  }

  .item {
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/car.png);
    border-bottom: 1rpx solid #eee;
    position: relative;

    .message {
      font-size: 26rpx;
      color: #444;
    }

    .date {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.goods {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item {
    padding: 30rpx 0;
    border-bottom: 1rpx solid #eee;

    .navigator {
      display: flex;
      margin: 20rpx 0;
    }

    .cover {
      width: 170rpx;
      height: 170rpx;
      border-radius: 10rpx;
      margin-right: 20rpx;
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 6rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .price {
      display: flex;
      margin-top: 6rpx;
      font-size: 24rpx;
    }

    .symbol {
      font-size: 20rpx;
    }

    .original {
      color: #999;
      text-decoration: line-through;
    }

    .actual {
      margin-left: 10rpx;
      color: #444;
    }

    .text {
      font-size: 22rpx;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 24rpx;
      color: #444;
    }

    .action {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      padding: 30rpx 0 0;

      .button {
        width: 200rpx;
        height: 60rpx;
        text-align: center;
        justify-content: center;
        line-height: 60rpx;
        margin-left: 20rpx;
        border-radius: 60rpx;
        border: 1rpx solid #ccc;
        font-size: 26rpx;
        color: #444;
      }

      .primary {
        color: #27ba9b;
        border-color: #27ba9b;
      }
    }
  }

  .total {
    line-height: 1;
    font-size: 26rpx;
    padding: 20rpx 0;
    color: #666;

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10rpx 0;
    }

    .symbol::before {
      content: '¥';
      font-size: 80%;
      margin-right: 3rpx;
    }

    .primary {
      color: #cf4444;
      font-size: 36rpx;
    }
  }
}

.detail {
  line-height: 1;
  padding: 30rpx 20rpx 0;
  margin: 20rpx 20rpx 0;
  font-size: 26rpx;
  color: #666;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    font-size: 30rpx;
    color: #444;
  }

  .row {
    padding: 20rpx 0;

    .item {
      padding: 10rpx 0;
      display: flex;
      align-items: center;
    }

    .copy {
      border-radius: 20rpx;
      font-size: 20rpx;
      border: 1px solid #ccc;
      padding: 5rpx 10rpx;
      margin-left: 10rpx;
    }
  }
}

.toolbar-height {
  height: 100rpx;
  box-sizing: content-box;
}

.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(var(--window-bottom));
  z-index: 1;

  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-top: 1rpx solid #ededed;
  border-bottom: 1rpx solid #ededed;
  background-color: #fff;
  box-sizing: content-box;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200rpx;
    height: 72rpx;
    margin-left: 15rpx;
    font-size: 26rpx;
    border-radius: 72rpx;
    border: 1rpx solid #ccc;
    color: #444;
  }

  .delete {
    order: 4;
  }

  .button {
    order: 3;
  }

  .secondary {
    order: 2;
    color: #27ba9b;
    border-color: #27ba9b;
  }

  .primary {
    order: 1;
    color: #fff;
    background-color: #27ba9b;
  }
}

.popup-root {
  padding: 30rpx 30rpx 0;
  border-radius: 10rpx 10rpx 0 0;
  overflow: hidden;

  .title {
    font-size: 30rpx;
    text-align: center;
    margin-bottom: 30rpx;
  }

  .description {
    font-size: 28rpx;
    padding: 0 20rpx;

    .tips {
      color: #444;
      margin-bottom: 12rpx;
    }

    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15rpx 0;
      color: #666;
    }

    .icon::before {
      content: '\e6cd';
      font-family: 'erabbit' !important;
      font-size: 38rpx;
      color: #999;
    }

    .icon.checked::before {
      content: '\e6cc';
      font-size: 38rpx;
      color: #27ba9b;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 0 40rpx;
    font-size: 28rpx;
    color: #444;

    .button {
      flex: 1;
      height: 72rpx;
      text-align: center;
      line-height: 72rpx;
      margin: 0 20rpx;
      color: #444;
      border-radius: 72rpx;
      border: 1rpx solid #ccc;
    }

    .primary {
      color: #fff;
      background-color: #27ba9b;
      border: none;
    }
  }
}
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-762 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-0-0000-923 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-688 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-919 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-28-1250-271 {
    background-image: linear-gradient(transparent 28.1250%, #EEEEEE 0%, #EEEEEE 71.8750%, transparent 0%) !important;
    background-size: 100% 64.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-748 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-792 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-465 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-798 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-793 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-22-2222-231 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-360 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-944 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-22-2222-278 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
  }
.sk-text-14-2857-765 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-28-3333-601 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-28-3333-161 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-985 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-932 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-446 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-123 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-86 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-551 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-87 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-874 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 20.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-394 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-647 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-637 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
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