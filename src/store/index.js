import { createStore } from "vuex";

export default createStore({
  state: {
    currentPage: "home",
  },
  getters: {
    isHomePage(state) {
      return state.currentPage === "home";
    },
    isLearningCornerPage(state) {
      return state.currentPage === "learning-corner";
    },
    isArtPage(state) {
      return state.currentPage === "art";
    },
    isConstructionPage(state) {
      return state.currentPage === "construction";
    },
  },
  mutations: {
    // SET_CURRENT_PAGE(state, pageName) {
    //   state.currentPage = pageName;
    // },
    SET_HOME_PAGE(state) {
      state.currentPage = "home";
    },
    SET_SIDEMENU_PAGE(state) {
      state.currentPage = "side-menu";
    },
    SET_LEARNING_CORNER_PAGE(state) {
      state.currentPage = "learning-corner";
    },
    SET_ART_PAGE(state) {
      state.currentPage = "art";
    },
    SET_CONSTRUCTION_PAGE(state) {
      state.currentPage = "construction";
    },
    SET_TEST_PAGE(state) {
      state.currentPage = "test";
    },
  },
  actions: {},
  modules: {},
});
