<template>
  <div>
    <loadingVue />
  </div>
</template>
<script>
import loadingVue from './loading.vue'
export default {
  name: 'loading',
  components: { loadingVue },
  data() {
    return {
      label: 'loading',
    }
  },
}
</script>
