<template>
  <div style="display: flex; width: 100%; background: #d7c881; flex-wrap: wrap">
    <move1Vue />
    <move2Vue
      :everyHeight="34"
      :initTop="0"
      :list="[
        { title: '三改一拆成效大，五水共治生态佳。' },
        { title: '三城联创你我他，五水共治生态佳。' },
        { title: '三治建设同参与，五水共治生态佳。' },
        { title: '民主曾理网络化，五水共治生态佳。' },
        { title: '民主曾理网络化，五水共治生态佳。' },
        { title: '民主曾理网络化，五水共治生态佳。' },
      ]"
      :activeIndex="2"
      :liOpacity="[0.2, 0.6, 1, 0.6, 0.2]"
    >
      <template slot-scope="scope">
        <div class="li-box">
          <span class="circle"></span>
          <span
            :style="{
              'font-weight': scope.activeIndex === scope.$index ? 600 : 500,
            }"
            >{{ scope.row.title }}</span
          >
        </div>
      </template>
    </move2Vue>
    <move3Vue />
    <move4Vue />
  </div>
</template>
<script>
import move1Vue from './move-1.vue'
import move2Vue from './move-2.vue'
import move3Vue from './move-3/move-3.vue'
import move4Vue from './move-4/index.vue'
export default {
  name: 'move-circle',
  components: {
    move1Vue,
    move2Vue,
    move3Vue,
    move4Vue,
  },
  data() {
    return {
      label: '移动',
    }
  },
}
</script>
<style lang="scss" scoped></style>
