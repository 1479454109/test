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
