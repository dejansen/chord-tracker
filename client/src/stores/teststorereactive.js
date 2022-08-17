import { reactive } from 'vue'

export const teststore = reactive({
  count: 0,
  increment() {
    this.count++
  }
})