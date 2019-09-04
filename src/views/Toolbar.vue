<template>
  <div class="c-toolbar">
    <v-app-bar class="c-bg-toolbar" flat absolute>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="$emit('toogle')"></v-app-bar-nav-icon>
      <v-spacer class="hidden-sm-and-up"></v-spacer>
      <v-toolbar-title>
        <router-link class="c-text" to="/">
          <span class="font-weight-regular display-1 font-italic px-4">Technology Toys</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text class="c-btn">
          <router-link to="/" class="c-text">Home</router-link>
        </v-btn>
        <v-btn text class="c-btn" v-if="isAdmin.role === 'admin'">
          <router-link to="/manage" class="c-text">Manage</router-link>
        </v-btn>

        <v-flex v-if="isAdmin.role === 'user'" class="c-g-btn">
          <v-btn text class="c-btn">
            <router-link to="/about" class="c-text">About Us</router-link>
          </v-btn>
          <v-btn text class="c-btn">
            <router-link to="/me" class="c-text">Me</router-link>
          </v-btn>
        </v-flex>

        <v-btn class="c-btn" text>
          <router-link to="/login" v-if="!isAuthenticated" class="c-text">Login</router-link>
          <a href="#" v-if="isAuthenticated" @click="logout" class="c-text">Logout</a>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/login"));
    }
  },

  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
      console.log(isAdmin, "123");
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_main.scss";

.c-toolbar {
  height: 64px;
}

.c-bg-toolbar {
  background-color: #fff;
}

.c-g-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-btn {
  color: $text-color-1;
  height: 100% !important;
}
.c-text {
  text-decoration: none;
  color: $text-color-1;
}
.c-menudrop {
  background-color: $main-bg-color-4;
}
</style>
