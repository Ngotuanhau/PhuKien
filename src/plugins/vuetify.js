/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi",
        values: {
            eye: "mdi-eye",
            eye_off: "mdi-eye-off",
            account: "mdi-account",
            pencil: "mdi-pencil",
            facebook: "mdi-facebook",
            delete: "mdi-delete",
            close: "mdi-close-circle",
            plus: "mdi-plus-box-outline"
        }
    }
});