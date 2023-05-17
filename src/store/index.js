import { createStore } from "vuex";

export default createStore({
  state: {
    currentPage: "index",
  },
  getters: {
    isIndexPage(state) {
      return state.currentPage === "index";
    },
    isLearningCornerPage(state) {
      return state.currentPage === "learning-corner";
    },
  },
  mutations: {
    // SET_CURRENT_PAGE(state, pageName) {
    //   state.currentPage = pageName;
    // },
    SET_INDEX_PAGE(state) {
      state.currentPage = "index";
    },
    SET_LEARNING_CORNER_PAGE(state) {
      state.currentPage = "learning-corner";
    },
    SET_TEST_PAGE(state) {
      state.currentPage = "test";
    },
  },
  actions: {},
  modules: {},
});
