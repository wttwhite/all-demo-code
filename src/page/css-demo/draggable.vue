<template>
  <div>
    <div class="list" ref="list">
      <div
        v-for="val in 5"
        :key="val"
        draggable="true"
        class="list-item"
        @dragstart="dragstart"
        @dragenter="dragenter"
        @dragend="dragend"
        @dragover="dragover"
      >
        {{ val }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'draggable',
  data() {
    return {
      sourceNode: null, // 当前拖动的元素
    }
  },
  methods: {
    dragstart(e) {
      setTimeout(() => {
        e.target.classList.add('moving')
      }, 0)
      this.sourceNode = e.target
      e.dataTransfer.effectAllowed = 'move'
    },
    dragover(e) {
      e.preventDefault()
    },
    dragenter(e) {
      e.preventDefault()
      const list = this.$refs.list
      if (e.target === this.sourceNode || e.target === list) {
        return
      }
      //   console.log(e.target)
      const children = Array.from(list.children)
      const sourceIndex = children.indexOf(this.sourceNode)
      const targetIndex = children.indexOf(e.target)
      if (sourceIndex < targetIndex) {
        // console.log('向下拖动')
        list.insertBefore(this.sourceNode, e.target.nextElementSibling)
      } else {
        // console.log('向上拖动')
        list.insertBefore(this.sourceNode, e.target)
      }
    },
    dragend(e) {
      e.target.classList.remove('moving')
    },
  },
}
</script>
<style scoped>
.list-item {
  width: 200px;
  height: 30px;
  background: burlywood;
  border-radius: 4px;
  margin-top: 8px;
  cursor: move;
}
.moving {
  background: transparent;
  color: transparent;
  border: 1px dashed red;
}
</style>
