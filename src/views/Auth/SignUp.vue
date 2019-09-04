<template>
  <v-container>
    <v-layout>
      <v-flex class="c-form-login" xs6 md6 offset-md3 offset-xs3 pa-5>
        <div class="c-text-header display-2 mb-8">My Account</div>

        <!-- Form validate -->
        <ValidationObserver ref="observer">
          <v-form slot-scope="{ invalid, validated }">
            <ValidationProvider name="User name" rules="required|alpha_num|max:30">
              <v-text-field
                slot-scope="{errors,valid}"
                v-model="username"
                :counter="30"
                :error-messages="errors"
                :success="valid"
                label="User name"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="Phone number" rules="required|decimal|max:12">
              <v-text-field
                slot-scope="{errors,valid}"
                v-model="phone"
                :counter="12"
                :error-messages="errors"
                :success="valid"
                label="Phone number"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="E-mail" rules="required|email">
              <v-text-field
                slot-scope="{errors,valid}"
                v-model="email"
                :error-messages="errors"
                :success="valid"
                label="E-mail"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="Password" rules="required|min:6" vid="password">
              <v-text-field
                slot-scope="{errors,valid}"
                v-model="password"
                :error-messages="errors"
                :success="valid"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="Password Confirmation" rules="required|confirmed:password">
              <v-text-field
                slot-scope="{errors,valid}"
                v-model="passwordConfirm"
                :error-messages="errors"
                :success="valid"
                label="Password Confirmation"
                type="password"
                required
              ></v-text-field>
            </ValidationProvider>

            <span class="animated">
              <li>
                <router-link
                  to="/reset_pass"
                  class="c-tran-forgot font-weight-regular font-italic"
                >Forgot your password</router-link>
              </li>
            </span>

            <v-flex class="c-button">
              <v-btn
                @click.native="submit"
                :disabled="invalid || !validated"
                class="c-btn c-btn-singup"
                text
              >
                <span class="c-btn-login-text">Sign up</span>
              </v-btn>
            </v-flex>
          </v-form>
        </ValidationObserver>
        <!-- Form validate -->

        <span class="animated c-tran-login">
          <li>
            <router-link
              class="c-tran-login font-weight-regular font-italic"
              to="/login"
            >go back Login!</router-link>
          </li>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },

  props: ["message"],

  data() {
    return {
      username: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },

  methods: {
    submit() {
      const user = {
        username: this.username,
        phone: this.phone,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      };
      axios
        .post("/signup", user)
        .then(response => {
          console.log(response);
          this.$store.commit(
            "showSnackbar",
            {
              message: response.data.message,
              timeout: 3000,
              multiline: false,
              type: "success"
            },
            { module: "Snackbar" }
          );
          this.$router.push("/login");
        })
        .catch(error => {
          this.$store.commit(
            "showSnackbar",
            {
              message: error.response.data.message,
              timeout: 3000,
              multiline: false,
              type: "error"
            },
            { module: "Snackbar" }
          );
          return;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";

.c-form-login {
  width: 100%;
  display: block;
}

.c-text-header {
  justify-content: center;
  display: flex;
}

.c-button {
  justify-content: center;
  display: flex;
  margin: 20px 0;
}

.c-btn-singup {
  width: 100%;
  background-color: #f44336;
}

.c-btn-login-text {
  color: #fff;
}

.c-tran-login,
.c-tran-forgot {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.c-tran-login {
  display: flex;
  justify-content: center;
}

.animated li {
  display: inline-block;
  list-style: outside none none;
  padding: 0;
}

.animated a {
  padding: 0.3em 0;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  text-decoration: none;
  display: inline-block;
}

.animated a:after {
  height: 2px;
  position: absolute;
  content: "";
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  background-color: #f44336;
  width: 0;
  bottom: 0;
  left: 0;
}

.animated a:hover,
.animated .current a {
  color: #f44336;
}

.animated a:hover:after,
.animated .current a:after {
  width: 100%;
}
</style>
