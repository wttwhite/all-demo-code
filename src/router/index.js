// import app from '@/app.vue'
import { getComponent } from '@/utils'
const routes = [
  {
    path: '/',
    redirect: '/btn-animation',
  },
]

const getRoute = (fileName, requireComponent, isIndex) => {
  return getComponent(requireComponent).map((item) => {
    const path = isIndex ? `${item.name}/index.vue` : `${item.name}.vue`
    return {
      path: '/' + item.name,
      name: item.name,
      component: () => import(`@/page/${fileName}/${path}`),
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
      /index.vue$/
    ),
    true
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
    ),
    false
  )
)
routes.push(
  ...getRoute(
    'map-demo',
    require.context(
      // 其组件目录的相对路径
      `../page/map-demo/`,
      // 是否查询其子目录
      true,
      // 匹配基础组件文件名的正则表达式
      /.vue$/
    ),
    false
  )
)
export default routes
