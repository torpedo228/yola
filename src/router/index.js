import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: MainView,
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/learning-corner",
    name: "learning-corner",
    components: {
      default: import("@/views/learning-corner/LearningCorner.vue"),
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/learning-corner/art",
    name: "art",
    component: TestView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
