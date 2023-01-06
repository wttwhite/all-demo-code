<template>
  <div class="box gradient-border">炫酷渐变边框</div>
</template>
<script>
export default {
  name: 'btn-border',
  data() {
    return {
      label: '渐变边框',
    }
  },
}
</script>
<style lang="css" scoped>
.gradient-border {
  border: solid 5px transparent;
  border-radius: 10px;
  background-image: linear-gradient(white, white),
    linear-gradient(315deg, #833ab4, #fd1d1d 50%, #fcb045);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.box {
  width: 350px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
}
</style>
