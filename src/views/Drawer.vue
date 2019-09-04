<template>
  <v-card>
    <v-navigation-drawer
      :value="value"
      @input="$emit('input', $event)"
      class="c-bg-drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="c-text">Directional</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <div class="pa-2 brown lighten-1">
          <v-btn class="c-btn" text>
            <router-link to="/login" v-if="!isAuthenticated" class="c-text">Login</router-link>
            <a href="#" v-if="isAuthenticated" @click="logout" class="c-text">Logout</a>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: {
    value: false
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/login"));
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../styles/_main.scss";

.c-text,
.c-btn {
  text-decoration: none;
  color: $color-text;
}
</style>
