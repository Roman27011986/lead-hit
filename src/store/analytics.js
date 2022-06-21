import Vuex from "vuex";
import authModule from "./modules/auth";
import createPersistedDtate from "vuex-persistedstate";

const dataState = createPersistedDtate({
  paths: ["auth.token"],
});

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});

export default store;
