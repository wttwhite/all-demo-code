<template>
  <div class="wrapper">
    <div class="tile">Default</div>

    <div class="tile tile-image-cursor">Image</div>

    <div class="tile tile-emoji-cursor">Emoji</div>
  </div>
</template>
<script>
export default {
  name: 'cursor-custom',
  data() {
    return {
      label: '自定义光标样式',
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #4776e6;
  background: linear-gradient(to right, #4776e6, #8e54e9);
  padding: 0 10px;
}

.tile {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de5448;
  margin-right: 10px;
  color: #fff;
  font-size: 1.4em;
  text-align: center;
}

.tile-image-cursor {
  background-color: #1da1f2;
  cursor: url(https://picsum.photos/20/20), auto;
}

.tile-emoji-cursor {
  background-color: #4267b2;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>"),
    auto;
}
</style>
