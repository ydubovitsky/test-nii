import { createRouter, createWebHistory } from 'vue-router'
import SettingsView from '../views/SettingsView.vue'
import MainView from '../views/MainView.vue';
import FavoriteNumbersView from '../views/FavoriteNumbersView.vue'
import HistoryView from '../views/HistoryView.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/settings',
      name: 'SettingsView',
      component: SettingsView
    },
    {
      path: '/favorite',
      name: 'FavoriteNumbersView',
      component: FavoriteNumbersView
    },
    {
      path: '/history',
      name: 'HistoryView',
      component: HistoryView
    }
  ]
})

export default router
