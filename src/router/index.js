import {createRouter, createWebHistory} from 'vue-router'
import ExamPage from "@/Pages/ExamPage.vue"
import IndexPage from "@/pages/IndexPage.vue"
import ResultPage from '@/pages/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/exam",
      name: "ExamPage",
      component: ExamPage,
    },
    {
      path: "/index",
      name: "IndexPage",
      component: IndexPage,
    },
    {
      path: "/result",
      name: "ResultPage",
      component: ResultPage,
    },
  ],
});

export default router