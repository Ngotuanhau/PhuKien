<template>
  <v-layout row justify-center>
    <v-dialog :value="value" @input="$emit('input', $event)" max-width="290">
      <v-card>
        <v-card-title class="headline">Delete Item</v-card-title>
        <v-card-text>
          You want delete item --- {{item.name}}
          <br />Click Ok! to delete
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="$emit('input', false)">Close</v-btn>
          <v-btn color="green darken-1" text @click.stop="$emit('deleteProduct', item.id)">OK!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    value: false,
    item: {}
  }
};
</script>

<style>
</style>