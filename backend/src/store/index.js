import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as actions from "./actions";
import * as mutations from "./mutations";
import state from "./state";

const store = createStore({
    state,
    getters: {},
    actions,
    mutations,
});

export default store;
