<template>
  <div class="wrapper">
    <div>
      <div class="tile mr-1">
        <div class="tile-content">默认滚动条</div>
      </div>

      <div class="tile tile-custom-scrollbar">
        <div class="tile-content">自定义滚动条</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scroll-custom',
  data() {
    return {
      label: '自定义滚动条样式',
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mr-1 {
  margin-right: 1em;
}

.tile {
  overflow: auto;
  display: inline-block;
  background-color: #ccc;
  height: 200px;
  width: 180px;
}

.tile-custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #eff1f5;
}

.tile-custom-scrollbar::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: transparent;
}

.tile-custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #515769;
  border: 2px solid #eff1f5;
}

.tile-content {
  padding: 20px;
  height: 500px;
}
</style>
