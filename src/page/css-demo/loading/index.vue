<template>
  <div>
    <div style="display: flex">
      <loadingVue />
      <imgLoadingVue />
      <textLoadingVue />
    </div>
  </div>
</template>
<script>
import loadingVue from './loading.vue'
import imgLoadingVue from './img-loading.vue'
import textLoadingVue from './text-loading.vue'
export default {
  name: 'loading',
  components: { loadingVue, imgLoadingVue, textLoadingVue },
  data() {
    return {
      label: 'loading',
    }
  },
}
</script>
