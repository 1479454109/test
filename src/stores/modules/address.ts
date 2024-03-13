import type { AddressItem } from '@/types/global'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const addressStore = defineStore(
  'address',
  () => {
    const selectedAddress = ref<AddressItem>()
    const changeSelectedAddress = (val: AddressItem) => {
      selectedAddress.value = val
    }

    // 记得 return
    return {
      selectedAddress,
      changeSelectedAddress,
    }
  },
  // TODO: 持久化
  {
    //persist: true,
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
