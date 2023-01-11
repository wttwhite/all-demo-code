<template>
  <div class="box">
    <div class="background" id="background"></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
      <h1 class="text-3xl">密码强度看图片清晰度</h1>
      <p class="text-sm text-gray-700">
        密码强度越强，图片越清晰，不信，你改一下试试
      </p>
      <div class="my-4 text-left">
        <label for="email" class="text-gray-900">邮箱:</label>
        <input
          type="text"
          class="border block w-full p-2 mt-2 rounded"
          id="email"
          placeholder="你的邮箱"
        />
      </div>

      <div class="my-4 text-left">
        <label for="email" class="text-gray-900">密码:</label>
        <input
          type="password"
          class="border block w-full p-2 mt-2 rounded"
          id="password"
          placeholder="输入你的密码"
          v-model="input"
        />
      </div>

      <button
        class="bg-black text-white py-2 mt-4 inline-block w-full rounded"
        type="submit"
      >
        提交
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login3',
  data() {
    return {
      input: '',
    }
  },
  watch: {
    input(n) {
      const background = document.getElementById('background')
      const length = n.length
      const blurValue = 20 - length * 2
      background.style.filter = `blur(${blurValue}px)`
    },
  },
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  overflow: hidden;
  margin: 0;
}
.background {
  background: url('../img-rotate-3d/img/1.jpg') no-repeat center center/cover;
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  z-index: -1;
  filter: blur(20px);
}
</style>
