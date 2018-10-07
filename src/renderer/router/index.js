import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view-hub',
      component: require('@/views/ViewHub').default
    },
    {
      path: '/project/settings',
      name: 'view-project-settings',
      component: require('@/views/ViewProjectSettings').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
