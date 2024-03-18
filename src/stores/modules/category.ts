import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const categoryStore = defineStore(
  'category',
  () => {
    const ckIndex = ref<number>(0)
    // 记得 return
    return {
      ckIndex,
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
