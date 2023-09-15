<template>
  <canvas id="canvas" width="280" height="400"></canvas>
</template>
<script>
export default {
  name: 'webgl',

  data() {
    return {
      label: 'webgl',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let { webgl, proJMat4 } = this.initWebgl()
      webgl = this.initShader(webgl)
      webgl = this.initBuffer(webgl, proJMat4)
      this.draw(webgl)
    },
    initWebgl() {
      const webglDiv = document.getElementById('canvas')
      const webgl = webglDiv.getContext('webgl')
      let proJMat4 = ''
      webgl.viewport(0, 0, webglDiv.clientWidth, webglDiv.clientHeight)

      return { webgl, proJMat4 }
    },
    initShader(webgl) {
      let vecString = `
      attribute vec4 a_position
      void main(){
        gl_Position = a_position;
        gl_PointSize = 60.0;
      }
      `
      let fragString = `
      void main(){
        gl_FragColor = vec4(0.0,0.0,1.0,1.0);
      }
      `
      let shader = webgl.createShader(webgl.VERTEX_SHADER)
      let fragShader = webgl.createShader(webgl.FRAGMENT_SHADER)

      webgl.shaderSource(shader, vecString)
      webgl.shaderSource(fragShader, fragString)

      webgl.compileShader(shader)
      webgl.compileShader(fragShader)

      let program = webgl.createProgram()
      webgl.attachShader(program, shader)
      webgl.attachShader(program, fragShader)

      webgl.linkProgram(program)
      webgl.useProgram(program)

      webgl.program = program
      return webgl
    },
    initBuffer(webgl, proJMat4) {
      let pointPosition = new Float32Array([100.0, 100.0, 0.0, 1.0])
      let aPosition = webgl.getAttribLocation(webgl.program, 'a_position')
      webgl.vertexAttrib3f(aPosition, 0.0, 0.0, 0.0)

      return webgl
    },
    draw(webgl) {
      webgl.clearColor(0.0, 0.0, 0.0, 1.0)
      webgl.clear(webgl.COLOR_BUFFER_BIT)
      webgl.drawArrays(webgl.POINTS, 0, 1)
    },
  },
}
</script>
<style lang="scss" scoped></style>
