import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view-project-select',
      component: require('@/views/ViewProjectSelect').default
    },
    {
      path: '/project/hub',
      name: 'view-project-hub',
      component: require('@/views/ViewProjectHub').default
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
