import { createRouter, createWebHistory } from 'vue-router'
import ExamPage from "@/views/ExamPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/exam'
    },
    {
      path: '/exam',
      name: 'exam',
      component: ExamPage,
    },
  ],
})

export default router
