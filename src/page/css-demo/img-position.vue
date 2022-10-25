<template>
    <div class="img-container">
      <div>
        background-size: 300px 300px;
      </div>
      <div class="mt">
        background-position: 0 -200px;
      </div>
      <div class="mt">
        /*1-3*/
        .img-item:nth-child(-1n+3)
      </div>
      <div class="img-box mt" >
        <div class="img-item" v-for="n in 9" :index="n"></div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'img-position'
  }
</script>
<style>
.img-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  flex-direction: column;
}
.img-box {
  width: 322px;
  height: 322px;
  position: relative;
  border: 1px solid #ccc;
}
.img-item {
  width: 100px;
  height: 100px;
  background: url(./img-position.webp) no-repeat;
  background-size: 300px 300px;
  border: 1px solid #fff;
  position: absolute;
}
/*1-9*/
.img-item:nth-child(n) {
  background-position: 0 -200px;
  top: 220px;
}
.img-box:hover .img-item{
  top: 200px;
  border: none;
}

/* 1-6*/
.img-item:nth-child(-1n+6) {
  background-position-y: -100px;
  top: 110px;
}
.img-box:hover .img-item:nth-child(-1n+6){
  top: 100px;
}
/*1-3*/
.img-item:nth-child(-1n+3) {
  background-position-y: 0;
  top: 0;
}
.img-box:hover .img-item:nth-child(-1n+3){
  top: 0;
}
.img-item:nth-child(3n+1) {
  left: 0;
}
.img-item:nth-child(3n+2) {
  background-position-x: -100px;
  left: 110px
}
.img-box:hover .img-item:nth-child(3n+2){
  left: 100px;
}
.img-item:nth-child(3n+3) {
  background-position-x: -200px;
  left: 220px;
}
.img-box:hover .img-item:nth-child(3n+3){
  left: 200px;
}
.img-box:hover{
  height: 300px;
  width: 300px;
}

</style>