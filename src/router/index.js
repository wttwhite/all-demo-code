// import app from '@/app.vue'

const routes = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/img-position',
    name: 'img-position',
    component: () => import('@/page/css-demo/img-position.vue'),
    meta: {
      title: 'img-position',
      isMenu: true
    },
  }
]

export default routes
