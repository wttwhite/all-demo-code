<template>
  <div class="box">
    <div class="container">
      <div class="inputBox">
        <input type="text" required="required" />
        <span>你的昵称</span>
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'input1',
  data() {
    return {}
  },
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
}
.container {
  position: relative;
  padding: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}
.container .inputBox {
  position: relative;
  width: 350px;
}
.container .inputBox input {
  position: relative;
  padding: 8px 10px;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 1.25em;
  letter-spacing: 0.05em;
  z-index: 2;
}
.container .inputBox span {
  position: absolute;
  left: 0;
  padding: 10px 0;
  pointer-events: none;
  font-size: 1em;
  transition: 0.5s;
  color: #333;
  letter-spacing: 0.05em;
  bottom: 2px;
}
.container .inputBox input:valid ~ span,
.container .inputBox input:focus ~ span {
  font-size: 0.85em;
  transform: translateY(-32px);
}
.container .inputBox i {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  transition: 0.5s;
  z-index: 1;
  border-radius: 4px;
  pointer-events: none;
}
.container .inputBox input:valid ~ i,
.container .inputBox input:focus ~ i {
  height: 100%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}
</style>
