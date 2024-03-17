<script setup lang="ts">
import { getMemberProfileAPI, putMemberProfileAPI } from '@/services/profile'
import type { userInfo } from '@/types/user'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { useMemberStore } from '@/stores/index' 

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//获取个人信息
const info = ref<userInfo>({} as userInfo)
onLoad(async () => {
  const res = await getMemberProfileAPI()
  info.value = res.result
})
//性别
const radioChange = (evt: any) => {
  info.value.gender = evt.detail.value
}
//生日
const pickerChange = (evt: any) => {
  info.value.birthday = evt.detail.value
}
//城市
let fullLocationCode: string[] = ['', '', '']
const pickerRegionChange = (evt: any) => {
  fullLocationCode = evt.detail.code
  info.value!.fullLocation = evt.detail.value.join(' ')
}
let defaultRegionCode =ref('440113');
const handleGetRegion=(region:any)=>{
  console.log(region); 
            }
//保存个人信息
const store = useMemberStore()
const commit = async () => {
  console.log(info.value)
  console.log(fullLocationCode)
  const res = await putMemberProfileAPI({
    nickname: info.value.nickname, //昵称
    gender: info.value.gender, //性别
    birthday: info.value.birthday, //生日
    profession: info.value.profession, //职业
    provinceCode: fullLocationCode[0], //省份编码
    cityCode: fullLocationCode[1], //城市编码
    countyCode: fullLocationCode[2], //区/县编码
  })
  store.profile!.nickname = info.value.nickname
  uni.showToast({
    icon: 'success',
    title: '保存成功',
  })
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}
//修改头像
const eitImage = () => {
  // 调用拍照/选择图片
  // #ifdef MP-WEIXIN
  uni.chooseMedia({
    // 文件个数
    count: 1,
    // 文件类型
    mediaType: ['image'],
    success: (res) => {
      // 本地路径
      const { tempFilePath } = res.tempFiles[0]
      // 文件上传
      uni.uploadFile({
        url: '/member/profile/avatar', // [!code ++]
        name: 'file', // 后端数据字段名  // [!code ++]
        filePath: tempFilePath, // 新头像  // [!code ++]
        success: (res) => {
          // 判断状态码是否上传成功
          if (res.statusCode === 200) {
            // 提取头像
            const { avatar } = JSON.parse(res.data).result
            // 当前页面更新头像
            info.value!.avatar = avatar // [!code ++]
            // 更新 Store 头像
            store.profile!.avatar = avatar // [!code ++]
            uni.showToast({ icon: 'success', title: '更新成功' })
          } else {
            uni.showToast({ icon: 'error', title: '出现错误' })
          }
        },
      })
    },
  })
  // #endif

  // #ifdef H5 || APP-PLUS
  uni.chooseImage({
    // 文件个数
    count: 1,
    // 文件类型
    mediaType: ['image'],
    success: (chooseImageRes) => {
      const tempFilePaths = chooseImageRes.tempFilePaths
      uni.uploadFile({
        url: '/member/profile/avatar', //仅为示例，非真实的接口地址
        name: 'file',
        filePath: tempFilePaths[0],
        success: (res) => {
          if (res.statusCode == 200) {
            console.log(JSON.parse(res.data))
            info.value!.avatar = JSON.parse(res.data).result.avatar
            store.profile!.avatar = info.value.avatar
            uni.showToast({
              icon: 'success',
              title: '修改成功',
            })
          } else {
            uni.showToast({
              icon: 'error',
              title: '出现错误',
            })
          }
        },
      })
    },
  })
  // #endif
}
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content">
        <image class="image" :src="info?.avatar" mode="aspectFill" />
        <text @tap="eitImage" class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ info?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="info!.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="radioChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="info?.gender == '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="info?.gender == '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            @change="pickerChange"
            :value="info?.birthday"
          >
            <view v-if="info?.birthday">{{ info?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <!-- #ifdef MP-WEIXIN -->
          <picker
            @change="pickerRegionChange"
            class="picker"
            mode="region"
            :value="info?.fullLocation?.split(' ')"
          >
            <view v-if="info?.fullLocation">{{ info?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
          <!-- #endif -->

          <!-- #ifdef H5 || APP-PLUS--> 
          <!-- #endif -->

        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="info!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button @tap="commit" class="form-button">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
