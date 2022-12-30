<template>
  <div>
    <div class="box">
      <span class="text">前端侦探</span>
    </div>
    <div class="btn">前端侦探124</div>
  </div>
</template>
<script>
export default {
  name: 'bg-color',
  data() {
    return {
      label: '背景颜色',
    }
  },
}
</script>
<style lang="css" scoped>
.box {
  color: #ffeb3b;
  /** 背景与文字颜色相关联 **/
  background-color: currentColor;
  width: 200px;
  height: 200px;
}
.text {
  /** 灰度滤镜 对比度滤镜contrast 反转滤镜（invert）**/
  /** 这里的对比度给的比较大，这样就会极大的增强对比度，黑的更黑，白的更白，如果是浅灰，那就变成白色，如果是深灰，那就变成黑色 **/
  /** 黄色 - 灰度滤镜 - 灰色 - 对比度滤镜 - 白色 - 反转滤镜 - 黑色 **/
  filter: grayscale(1) contrast(999) invert(1);
}

.btn {
  /* CSS 变量自动变色技术 定义RGB变量 */
  --red: 44;
  --green: 135;
  --blue: 255;
  /* 文字颜色变色的临界值，建议0.5~0.6 */
  --threshold: 0.5;
  width: 200px;
  height: 200px;
  /* 按钮背景色就是基本背景色 */
  background: rgb(var(--red), var(--green), var(--blue));

  /** 
   * 使用sRGB Luma方法计算灰度（可以看成亮度）
   * 算法为：
   * lightness = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255
  */
  --r: calc(var(--red) * 0.2126);
  --g: calc(var(--green) * 0.7152);
  --b: calc(var(--blue) * 0.0722);
  --sum: calc(var(--r) + var(--g) + var(--b));
  --lightness: calc(var(--sum) / 255);

  /* 设置颜色 */
  color: hsl(0, 0%, calc((var(--lightness) - var(--threshold)) * -999999%));
}
/** 终极方案： CSS 正在起草一个颜色对比函数color-contrast，可以从几个颜色中自动选择对比度最高的那个 **/
</style>
