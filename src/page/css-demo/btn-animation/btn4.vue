<template>
  <div>
    <div class="box gradient-border">炫酷渐变边框</div>
  </div>
</template>
<script>
export default {
  name: 'btn-5',
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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
}
</style>
