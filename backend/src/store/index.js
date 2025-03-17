import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as actions from "./actions";
import * as mutations from "./mutations";
import state from "./state";

const store = createStore({
    // state: {
        // user: {
            // token: localStorage.getItem('TOKEN'),
            // token: sessionStorage.getItem("TOKEN"),
            // data: {},
        // },
    // },
    state,
    getters: {},
    actions,
    mutations,
});

export default store;
