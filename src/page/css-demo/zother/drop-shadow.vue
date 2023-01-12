<template>
  <div class="wrapper">
    <div class="mr-2">
      <div class="mb-1 text-center box-shadow">box-shadow</div>

      <img
        class="box-shadow"
        src="https://markodenic.com/man_working.png"
        alt="Image with box-shadow"
      />
    </div>

    <div>
      兼容性IE13， chrome66, 安卓4.4
      <div class="mb-1 text-center drop-shadow">drop-shadow</div>

      <img
        class="drop-shadow"
        src="https://markodenic.com/man_working.png"
        alt="Image with drop-shadow"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'drop-shadow',
  data() {
    return {
      label: '设置阴影',
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
  font-size: 18px;
}

.mr-2 {
  margin-right: 2em;
}

.mb-1 {
  margin-bottom: 1em;
}

.text-center {
  text-align: center;
}

.box-shadow {
  box-shadow: 2px 4px 8px #585858;
}

.drop-shadow {
  filter: drop-shadow(2px 4px 8px #585858);
}
</style>
