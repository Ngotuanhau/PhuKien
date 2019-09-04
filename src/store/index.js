/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";

import Auth from "./modules/Auth";
import Snackbar from "./modules/Snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Snackbar
    }
});