import Vue from 'vue'
import Router from 'vue-router'
import Agent from './views/Agent.vue'
import Project from './views/Project.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // linkActiveClass:"exact-active-class",
  // linkExactActiveClass: "exact-active-class",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Agent,
      children: [
        { path: 'projects/:category', component: Project }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Agent,
    },
    {
      path: '/mycuise',
      name: 'mycuise',
      component: Agent,
    },
    {
      path: '/help',
      name: 'help',
      component: Agent,
    }
  ]
})
