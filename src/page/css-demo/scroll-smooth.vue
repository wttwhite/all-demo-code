<template>
  <div class="full">
    <nav>
      Scroll to:
      <a href="#sectionA" class="link bg-red">A</a>

      <a href="#sectionB" class="link bg-blue">B</a>

      <a href="#sectionC" class="link bg-green">C</a>
    </nav>

    <div class="wrapper">
      <div id="sectionA" class="section bg-red">A</div>

      <div id="sectionB" class="section bg-blue">B</div>

      <div id="sectionC" class="section bg-green">C</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scroll-smooth',
  data() {
    return {
      label: '平滑滚动',
    }
  },
}
</script>
<style lang="css" scoped>
.full {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
nav {
  position: fixed;
  left: calc(50vw - 115px);
  top: 0;
  width: 200px;
  text-align: center;
  padding: 15px;
  background: #fff;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
}

nav .link {
  padding: 5px;
  color: white;
}

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 5em;
  text-shadow: 0px 2px 0px #b2a98f, 0px 4px 3px rgba(0, 0, 0, 0.15),
    0px 8px 1px rgba(0, 0, 0, 0.1);
}

.bg-red {
  background: #de5448;
}

.bg-blue {
  background: #4267b2;
}

.bg-green {
  background: #4caf50;
}
</style>
