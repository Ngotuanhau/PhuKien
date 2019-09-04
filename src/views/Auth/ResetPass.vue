<template>
  <v-container>
    <v-layout>
      <v-flex class="c-form-login" xs6 md6 offset-md3 offset-xs3 pa-5>
        <div class="c-text-header display-2 mb-8">My Account</div>

        <v-flex my-5>
          <span
            class="c-tran-login"
          >Please! enter your email, press the button and check mail to follow instruction</span>
        </v-flex>
        <ValidationObserver ref="observer">
          <v-form slot-scope="{ invalid, validated }">
            <VTextFieldWithValidation rules="required|email" v-model="email" label="E-mail" />

            <v-flex class="c-button">
              <v-btn
                class="c-btn c-btn-send"
                text
                @click.prevent="submit"
                :disabled="invalid || !validated"
              >
                <span class="c-btn-login-text">SEND</span>
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
import { ValidationObserver } from "vee-validate";
import VTextFieldWithValidation from "@/components/input/VTextFieldWithValidation";

export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation
  },

  data() {
    return {
      email: "",
      show: false
    };
  },

  methods: {
    submit() {
      const email = this.email;
      axios
        .post("/forgot_password", { email })
        .then(response => {
          console.log(response);
          this.$store.commit(
            "showSnackbar",
            {
              message: response.data.message,
              timeout: 10000,
              multiline: false,
              type: "success"
            },
            { module: "Snackbar" }
          );
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
        });
      this.email = "";
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
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

.c-btn-send {
  width: 100%;
  background-color: #f44336;
}

.c-btn-login-text {
  color: #fff;
}

.c-tran-login {
  color: black;
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
