<template>
  <div>
    <div style="display: flex">
      <btn1Vue />
      <btn2Vue />
      <btn4Vue />
    </div>
    <div
      style="
        background: rgba(0, 0, 0, 0.8);
        position: relative;
        z-index: 1;
        margin-bottom: 50px;
      "
    >
      <btn3Vue />
    </div>
    <btn5Vue />
    <div style="display: flex">
      <btn6Vue />
      <btn7Vue />
      <btn8Vue />
    </div>
  </div>
</template>
<script>
import btn1Vue from './btn1.vue'
import btn2Vue from './btn2.vue'
import btn3Vue from './btn3.vue'
import btn4Vue from './btn4.vue'
import btn5Vue from './btn5.vue'
import btn6Vue from './btn6.vue'
import btn7Vue from './btn7.vue'
import btn8Vue from './btn8.vue'
export default {
  name: 'btn-animation',
  components: {
    btn1Vue,
    btn2Vue,
    btn3Vue,
    btn4Vue,
    btn5Vue,
    btn6Vue,
    btn7Vue,
    btn8Vue,
  },
  data() {
    return {
      label: '按钮动效',
    }
  },
}
</script>
<style lang="scss" scoped></style>
