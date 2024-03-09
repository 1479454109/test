// src/composables/index.ts
import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  const guess = ref<XtxGuessInstance>()
  const page = ref<number>(1)
  const onScrolltolower = () => {
    //是否已是全部记录
    if (guess.value?.finished) {
      page.value = page.value + 1
      guess.value?.getGuessLike(page.value, 10)
    }
  }
  //下拉刷新
  const isTriggered = ref(false)
  const onrefresherrefresh = async () => {
    page.value = 1 //重置页码
    guess.value?.rept()
    isTriggered.value = true
    await guess.value?.getGuessLike(page.value, 10)
    isTriggered.value = false //等待请求发送完才执行
  }
  // 返回 ref 和事件处理函数
  return { guess, isTriggered, onrefresherrefresh, onScrolltolower }
}
