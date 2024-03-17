<script setup lang="ts">
import { ref } from 'vue'
import {
  postMemberAddressAPI,
  getMemberAddressByIdAPI,
  putMemberAddressByIdAPI,
} from '@/services/address'
import type { AddressParams } from '@/types/address'
import { onLoad } from '@dcloudio/uni-app'

//修改导航标题
const query = defineProps<{
  id: string
}>()
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新建地址' })

// 获取收货地址详情数据
const getMemberAddressByIdData = async () => {
  // 有 id 才调用接口
  if (query.id) {
    // 发送请求
    const res = await getMemberAddressByIdAPI(query.id)
    // 把数据合并到表单中
    Object.assign(form.value, res.result)
  }
}

onLoad(() => {
  getMemberAddressByIdData()
})

// 表单数据
const form = ref<AddressParams>({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

// 定义校验规则
const rules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请输入收货人姓名' }],
  },
  contact: {
    rules: [
      { required: true, errorMessage: '请输入联系方式' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
    ],
  },
  countyCode: {
    rules: [{ required: true, errorMessage: '请选择所在地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请选择详细地址' }],
  },
}
const formRef = ref<UniHelper.UniFormsInstance>() // [!code ++]

//所在地区
// #ifdef MP-WEIXIN
const onChange = (e: any) => {
  form.value.fullLocation = e.detail.value.join(' ')
  const [provinceCode, cityCode, countyCode] = e.detail.code
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}
// #endif
//  #ifdef H5 || APP-PLUS
const onCityChange = (e: any) => {
  const [provinceCode, cityCode, countyCode] = e.detail.value.map((e: any) => e.value)
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}
// #endif
//设为默认
const onSwitchChange = (e: any) => {
  form.value.isDefault = e.detail.value ? 1 : 0
}

//保存地址
const addEitAddress = async () => {
  try {
    // 表单校验
    await formRef.value?.validate?.() // [!code ++]
    if (query.id) {
      await putMemberAddressByIdAPI(query.id, form.value)
    } else {
      await postMemberAddressAPI(form.value)
    }
    uni.showToast({
      icon: 'success',
      title: '保存成功',
    })
    setTimeout(() => {
      uni.navigateBack()
    }, 500)
  } catch (error) {
    uni.showToast({ icon: 'error', title: '请填写完整信息' }) // [!code ++]
  }
}
</script>

<template>
  <view class="content">
    <uni-forms :rules="rules" :model="form" ref="formRef">
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input class="input" v-model="form.contact" placeholder="请填写收货人手机号码" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="countyCode">
        <text class="label">所在地区</text>
        <!-- #ifdef MP-WEIXIN -->
        <picker class="picker" mode="region" @change="onChange">
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
        <!-- #endif -->
        <!-- #ifdef H5 || APP-PLUS -->
        <uni-data-picker
          placeholder="请选择地址"
          popup-title="请选择城市"
          collection="opendb-city-china"
          field="code as value, name as text"
          orderby="value asc"
          :step-searh="true"
          self-field="code"
          parent-field="parent_code"
          :clear-icon="false"
          @change="onCityChange"
          v-model="form.countyCode"
        >
        </uni-data-picker>
        <!-- #endif -->
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="isDefault">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          @change="onSwitchChange"
          color="#27ba9b"
          :checked="form.isDefault == 1"
        />
      </uni-forms-item>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button @tap="addEitAddress" class="button">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}
/* #ifdef H5 || APP-PLUS */
.content {
  .uni-forms {
    :deep(.selected-area) {
      height: auto;
      flex: 0 1 auto;
    }
  }
}
/* #endif */
.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
