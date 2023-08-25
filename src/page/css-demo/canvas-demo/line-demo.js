/**
 * 绘制坐标轴
 */
function drawAxis() {
  ctx.beginPath()
  ctx.moveTo(margin, margin)
  ctx.lineTo(margin, height - margin)
  ctx.lineTo(width - margin + 2, height - margin)
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = '#aaa'
  ctx.stroke()
  ctx.setLineDash([1])
  const yLen = newOpt.axisY.data.length
  const xLen = newOpt.axisX.data.length

  // 绘制 Y 轴坐标标记和标签
  for (let i = 0; i < yLen; i++) {
    let y = (rangeY * i) / (yLen - 1) + minY
    let yPos = height - margin - (y - minY) * ratioY

    if (i) {
      ctx.beginPath()
      ctx.moveTo(margin, yPos)
      ctx.lineTo(width - margin, yPos)
      ctx.strokeStyle = '#ddd'
      ctx.stroke()
    }

    ctx.beginPath()
    ctx.stroke()
    newYs = []
    for (const val of options.axisY.data) {
      newYs.push(options.axisY.format(val))
    }
    ctx.fillText(newYs[i] + '', margin - 15 - options.axisY.right, yPos + 5)
    firstEnding && axisYList.push(yPos + 5)
  }

  // 绘制 X 轴坐标标签
  for (let i = 0; i < xLen; i++) {
    let x = i * stepX
    let xPos = margin + x
    if (i) {
      ctx.beginPath()
      ctx.moveTo(xPos, height - margin)
      ctx.lineTo(xPos, margin)
      ctx.strokeStyle = '#ddd'
      ctx.stroke()
    }
    newXs = []
    for (const val of options.axisX.data) {
      newXs.push(options.axisX.format(val))
    }
    ctx.fillText(newXs[i], xPos - 1, height - margin + 10 + options.axisX.top)
    firstEnding && axisXList.push(xPos - 1)
  }
}
