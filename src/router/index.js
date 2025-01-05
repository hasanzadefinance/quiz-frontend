import { createRouter, createWebHistory } from 'vue-router'
import ExamPage from "@/Pages/ExamPage.vue"
import IndexPage from "@/pages/IndexPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/exam',
      name: 'ExamPage',
      component: ExamPage,
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage,
    },
  ],
})

export default router
