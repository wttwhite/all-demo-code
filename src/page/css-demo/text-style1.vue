<template>
  <div class="text-style1">
    <div class="text">文字倒影</div>
  </div>
</template>
<style>
.text-style1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text {
  position: relative;
  color: blue;
  font-size: 58px;
}
.text::after{
  content: '文字倒影';
  position: absolute;
  left: 0;
  transform: scaleY(0.7) translate(-24px, 14px) skewX(40deg);
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000000);
}
</style>