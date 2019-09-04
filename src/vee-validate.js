/* eslint-disable */

import { extend, localize } from "vee-validate";
import { min, required, email } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", required);
extend("min", min);
extend("email", email);
extend("password", {
    validate: (value, { other }) => value === other,
    message: "The password confirmation does not match.",
    params: [{ name: "other", isTarget: true }]
});

// Install messages
localize({
    en
});