<template>
  <div>
    <div class="mt">
      1、var a = ?; console.log(a == 1 && a == 2 && a == 3); // true
    </div>
    <div class="mt">2、数组递归求和</div>
  </div>
</template>
<script>
export default {
  name: 'interview',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.oneMethods()
    this.twoMethods()
  },
  methods: {
    oneMethods() {
      // 1、var a = ?; console.log(a == 1 && a == 2 && a == 3); // true
      const a = {
        n: 1,
        valueOf() {
          return this.n++
        }
      }
      console.log('1: ', a == 1 && a == 2 && a == 3)
    },
    twoMethods() {
      const arrs = [1, 2, 3, 4, 5, 6]
      // fn n到末尾之和
      // fn = fn+1 + arr[n]
      const sum = (arr) => {
        const fn = (n) => {
          return n >= arr.length ? 0 : fn(n+1) + arr[n]
        }
        return fn(0)
      }
      console.log('2: ', sum(arrs))
    }
  }
}
</script>