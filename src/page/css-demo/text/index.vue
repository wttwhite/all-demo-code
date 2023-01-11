<template>
  <div>
    <attrTooltipVue />
    <daZiVue />
    <textStyle1Vue />
  </div>
</template>
<script>
import attrTooltipVue from './attr-tooltip.vue'
import daZiVue from './da-zi.vue'
import textStyle1Vue from './text-style1.vue'
export default {
  name: 'text',
  components: { attrTooltipVue, daZiVue, textStyle1Vue },
  data() {
    return {
      label: '文字样式',
    }
  },
}
</script>
