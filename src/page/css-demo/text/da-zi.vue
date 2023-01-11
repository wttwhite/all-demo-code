<template>
  <div class="wrapper">
    <div class="typing-demo">有趣且实用的 CSS 小技巧</div>
  </div>
</template>
<script>
export default {
  name: 'da-zi',
  data() {
    return {
      label: '打字效果',
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
