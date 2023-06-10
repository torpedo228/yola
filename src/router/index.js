import { createRouter, createWebHistory } from "vue-router";
// import { publicPath } from "../../vue.config";
import HomeView from "@/views/pages/Home.vue";
import TestView from "@/views/others/TestView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
    meta: {
      title: "首頁",
    },
    // children: [{
    //   path: "introduction",
    //   name: "introduction",
    //   component: () => import("@/views/sections/home/Introduction.vue"),
    //   meta: {
    //     title: "園區介紹",
    //   },
    // }],
  },
  {
    path: "/learning-corner",
    component: () => import("@/views/pages/LearningCorner.vue"),
    meta: {
      title: "學習區",
    },
    children: [
      {
        path: "",
        name: "learning-corner",
        component: () =>
          import("@/views/sections/learning-corner/LearningCornerPortal.vue"),
        meta: {
          title: "",
        },
      },
      {
        path: "art",
        component: () => import("@/views/sections/learning-corner/Art.vue"),
        meta: {
          title: "美勞區",
        },
        children: [
          {
            path: "",
            name: "art",
            component: () =>
              import("@/views/sections/learning-corner/ArtPortal.vue"),
            meta: {
              title: "",
            },
          },
          {
            path: "drawings",
            component: () =>
              import("@/views/sections/learning-corner/Drawings.vue"),
            meta: {
              title: "繪畫",
            },
            children: [
              {
                path: "",
                name: "drawings",
                component: () =>
                  import("@/views/sections/learning-corner/DrawingsPortal.vue"),
                meta: {
                  title: "",
                },
              },
              {
                path: "fingerprint",
                name: "fingerprint",
                component: () =>
                  import("@/views/sections/learning-corner/Fingerprint.vue"),
                meta: {
                  title: "指印",
                },
              },
            ],
          },
        ],
      },

      {
        path: "construction",
        name: "construction",
        component: () =>
          import("@/views/sections/learning-corner/Construction.vue"),
        meta: {
          title: "組合建構區",
        },
      },
    ],
  },
  {
    path: "/thematic-teaching",
    component: () => import("@/views/pages/ThematicTeaching.vue"),
    meta: {
      title: "主題教學",
    },
    children: [
      {
        path: "",
        name: "thematic-teaching",
        component: () =>
          import(
            "@/views/sections/thematic-teaching/ThematicTeachingPortal.vue"
          ),
        meta: {
          title: "",
        },
      },
      {
        path: "/brain-storming",
        name: "brain-storming",
        component: () =>
          import("@/views/sections/thematic-teaching/BrainStorming.vue"),
        meta: {
          title: "主題發想牆",
        },
      },
    ],
  },
  {
    path: "/storybooks",
    name: "storybooks",
    component: () => import("@/views/pages/Storybooks.vue"),
    meta: {
      title: "繪本故事",
    },
  },
  {
    path: "/nursery-rhymes-and-finger-rhymes",
    name: "nursery-rhymes-and-finger-rhymes",
    component: () => import("@/views/pages/NurseryRhymesAndFingerRhymes.vue"),
    meta: {
      title: "兒歌&手指謠",
    },
  },
  {
    path: "/physical-fitness-and-rhythm-movement",
    name: "physical-fitness-and-rhythm-movement",
    component: () =>
      import("@/views/pages/PhysicalFitnessAndRhythmMovement.vue"),
    meta: {
      title: "體能&律動",
    },
  },
  {
    path: "/my-land",
    name: "my-land",
    component: () => import("@/views/pages/MyLand.vue"),
    meta: {
      title: "我的樂園",
    },
  },
  {
    path: "/still-building",
    name: "still-building",
    component: () => import("@/views/others/StillBuilding.vue"),
    meta: {
      title: "建造中",
    },
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
  history: createWebHistory(process.env.BASE_URL),
  // base: publicPath === "/yola/" ? "/yola" : "",
  routes,
});

export default router;
