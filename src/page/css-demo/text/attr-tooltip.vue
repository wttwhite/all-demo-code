<template>
  <div style="height: 150px">
    <h1>HTML/CSS tooltip</h1>
    <p>
      Hover <span class="tooltip" data-tooltip="Tooltip Content">Here</span> to
      see the tooltip.
    </p>
    <p>
      You can also hover
      <span class="tooltip" data-tooltip="This is another Tooltip Content"
        >here</span
      >
      to see another example.
    </p>
  </div>
</template>
<script>
export default {
  name: 'attr-tooltip',
  data() {
    return {
      label: '动态工具提示',
    }
  },
}
</script>
<style lang="css" scoped>
.tooltip {
  position: relative;
  border-bottom: 1px dotted black;
}

.tooltip:before {
  content: attr(data-tooltip);
  position: absolute;
  width: 100px;
  background-color: #062b45;
  color: #fff;
  text-align: center;
  padding: 10px;
  line-height: 1.2;
  border-radius: 6px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  font-size: 0.75em;
  visibility: hidden;
}

.tooltip:after {
  content: '';
  position: absolute;
  bottom: 75%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  opacity: 0;
  transition: opacity 0.6s;
  border-color: #062b45 transparent transparent transparent;
  visibility: hidden;
}

.tooltip:hover:before,
.tooltip:hover:after {
  opacity: 1;
  visibility: visible;
}
</style>
