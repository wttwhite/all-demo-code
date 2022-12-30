export const getComponent = (requireComponent) => {
  let arr = []
  requireComponent.keys().forEach((fileName) => {
    // 获取组件配置
    let componentConfig = requireComponent(fileName)
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig = componentConfig.default || componentConfig
    // console.log('requireComponent', componentConfig.name)
    // console.log('requireComponent2323', componentConfig.data().label)
    arr.push(componentConfig)
  })
  return arr
}
