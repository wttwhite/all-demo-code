// import app from '@/app.vue'
import { getComponent } from '@/utils'
const routes = [
  {
    path: '/',
    redirect: '/img-position',
  },
]

const getRoute = (fileName, requireComponent) => {
  return getComponent(requireComponent).map((item) => {
    return {
      path: '/' + item.name,
      name: item.name,
      component: () => import(`@/page/${fileName}/${item.name}.vue`),
      meta: {
        title: item.name,
        isMenu: true,
      },
    }
  })
}
routes.push(
  ...getRoute(
    'css-demo',
    require.context(
      // 其组件目录的相对路径
      `../page/css-demo/`,
      // 是否查询其子目录
      true,
      // 匹配基础组件文件名的正则表达式
      /.vue$/
    )
  )
)
routes.push(
  ...getRoute(
    'js-demo',
    require.context(
      // 其组件目录的相对路径
      `../page/js-demo/`,
      // 是否查询其子目录
      true,
      // 匹配基础组件文件名的正则表达式
      /.vue$/
    )
  )
)
export default routes
