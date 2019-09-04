<template>
  <v-container>
    <v-layout>
      <v-flex class="c-form-login" xs6 md6 offset-md3 offset-xs3 pa-5>
        <div class="c-text-header display-2 mb-8">My Account</div>

        <ValidationObserver ref="observer">
          <v-form slot-scope="{ invalid, validated }">
            <ValidationProvider name="Password" rules="required|min:6" vid="confirmation">
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
            <ValidationProvider name="Password Confirmation" rules="required|password:confirmation">
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

            <v-flex class="c-button">
              <v-btn
                @click.native="submit"
                :disabled="invalid || !validated"
                class="c-btn c-btn-reset mb-3"
                text
              >
                <span class="c-btn-reset-text">RESET PASSWORD</span>
              </v-btn>
            </v-flex>
          </v-form>
        </ValidationObserver>

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

  data() {
    return {
      password: "",
      passwordConfirm: "",
      show: false
    };
  },

  methods: {
    submit() {
      axios
        .post(
          `/change_password/${this.$route.params.token}/${this.$route.params.email}`,
          { password: this.password, passwordConfirm: this.passwordConfirm }
        )
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

.c-btn-reset {
  width: 100%;
  background-color: #f44336;
}

.c-btn-reset-text {
  color: #fff;
}

.c-tran-login {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
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
