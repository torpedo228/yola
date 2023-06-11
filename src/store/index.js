import {
  createStore
} from "vuex";

export default createStore({
  state: {
    currentPage: "home",
    isDebug: true,
    showOverlay: false,
    categories: new Map([
      [
        "art",
        {
          title: "美勞",
          routingName: "still-building",
        },
      ],
      [
        "fine-movement",
        {
          title: "精細動作",
          routingName: "still-building",
        },
      ],
      [
        "literacy",
        {
          title: "語文",
          routingName: "still-building",
        },
      ],
    ]),
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
    SET_LEARNING_CORNER_PAGE(state) {
      state.currentPage = "learning-corner";
    },
    SET_ART_PAGE(state) {
      state.currentPage = "art";
    },
    SET_DRAWINGS_PAGE(state) {
      state.currentPage = "drawings";
    },
    SET_FINGERPRINT_PAGE(state) {
      state.currentPage = "fingerprint";
    },
    SET_CONSTRUCTION_PAGE(state) {
      state.currentPage = "construction";
    },
    SET_THEMATIC_TEACHING_PAGE(state) {
      state.currentPage = "thematic-teaching";
    },
    SET_BRAIN_STORMING_PAGE(state) {
      state.currentPage = "brain-storming";
    },
    SET_STORYBOOKS_PAGE(state) {
      state.currentPage = "storybooks";
    },
    SET_NURSERY_RHYMES_AND_FINGER_RHYMES_PAGE(state) {
      state.currentPage = "nursery-rhymes-and-finger-rhymes";
    },
    SET_PHYSICAL_FITNESS_AND_RHYTHM_MOVEMENT_PAGE(state) {
      state.currentPage = "physical-fitness-and-rhythm-movement";
    },
    SET_MYLAND_PAGE(state) {
      state.currentPage = "my-land";
    },
    SET_STILL_BUILDING_PAGE(state) {
      state.currentPage = "still-building";
    },
    SET_TEST_PAGE(state) {
      state.currentPage = "test";
    },

    TURN_ON_OVERLAY(state) {
      state.showOverlay = true;
    },
    TURN_OFF_OVERLAY(state) {
      state.showOverlay = false;
    }
  },
  actions: {},
  modules: {},
});