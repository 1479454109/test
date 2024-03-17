<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel data-v-17cc3903 XtxSwiper--data-v-17cc3903">
      <swiper
        :indicator-dots="true"
        :autoplay="false"
        :circular="true"
        class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
        indicator-active-color="#fff"
        :interval="3000"
        :current="0"
      >
        <swiper-item
          class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator
            class="navigator XtxSwiper--navigator data-v-17cc3903 XtxSwiper--data-v-17cc3903"
            hover-class="none"
          >
            <image
              class="image XtxSwiper--image data-v-17cc3903 XtxSwiper--data-v-17cc3903 sk-image"
              mode="aspectFill"
            ></image>
          </navigator>
        </swiper-item>
      </swiper>
    </view>
  </view>
  <view is="pages/index/componet/category">
    <view class="category category--category data-v-d77961df category--data-v-d77961df">
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-52 sk-text"
          >居家</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-594 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-750 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-487 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-592 sk-text"
          >个护</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-267 sk-text"
          >严选</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-590 sk-text"
          >数码</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-891 sk-text"
          >运动</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-786 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator
        class="category-item category--category-item data-v-d77961df category--data-v-d77961df"
        hover-class="none"
      >
        <image
          class="icon category--icon data-v-d77961df category--data-v-d77961df sk-image"
        ></image>
        <text
          class="text category--text data-v-d77961df category--data-v-d77961df sk-transparent sk-text-14-2857-780 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/componet/hotPanel">
    <view class="panel hotPanel--panel hot hotPanel--hot">
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-786 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-858 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-672 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-290 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-372 sk-text"
            >一站买全</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-580 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item hotPanel--item">
        <view class="title hotPanel--title">
          <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-966 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-716 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards hotPanel--cards" hover-class="none">
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-489 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style lang="scss"> 
/* #ifdef H5 || APP-PLUS */

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
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url('@/static/images/bubble.png');
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;

  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }

  .image {
    width: 304rpx;
    height: 304rpx;
  }

  .name {
    height: 64rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }

  .small {
    font-size: 80%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
.hot {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;
    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
/* #endif */
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-499 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-946 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-52 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-594 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-750 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-487 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-592 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-267 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-590 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-891 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-786 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-780 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-858 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-672 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-290 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-372 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-580 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-966 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-716 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-489 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
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
