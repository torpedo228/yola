import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/Home.vue";
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
      default: () => import("@/views/learning-corner/LearningCorner.vue"),
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/learning-corner/art",
    name: "art",
    component: () => import("@/views/learning-corner/Art.vue"),
  },
  {
    path: "/learning-corner/contruction",
    name: "contruction",
    component: () => import("@/views/learning-corner/Construction.vue"),
  },
  {
    path: "/test",
    name: "test",
    // this.$router.push({ name: "test" });
    // or <a href="#" @click="$router.push({ name: 'test' })">
    // or <a href="/test">
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === "production" ? "/yola" : "",
  routes,
});

export default router;
