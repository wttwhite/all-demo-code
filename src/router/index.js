// import app from '@/app.vue'

const routes = [
  {
    path: '/',
    redirect: '/img-position',
  },
  {
    path: '/img-position',
    name: 'img-position',
    component: () => import('@/page/css-demo/img-position.vue'),
    meta: {
      title: 'img-position',
      isMenu: true
    },
  },
  {
    path: '/btn-animation1',
    name: 'btn-animation1',
    component: () => import('@/page/css-demo/btn-animation1.vue'),
    meta: {
      title: 'btn-animation1',
      isMenu: true
    },
  },
  {
    path: '/text-style1',
    name: 'text-style1',
    component: () => import('@/page/css-demo/text-style1.vue'),
    meta: {
      title: 'text-style1',
      isMenu: true
    },
  },
  {
    path: '/interview-demo',
    name: 'interview-demo',
    component: () => import('@/page/js-demo/interview-demo.vue'),
    meta: {
      title: 'interview-demo',
      isMenu: true
    },
  }
]

export default routes
