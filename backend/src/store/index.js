import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    state: {
        user: {
            // token: localStorage.getItem('TOKEN'),
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
    },
    getters: {},
    actions,
    mutations,
});

export default store;
