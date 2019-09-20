<template>
  <v-container>
    <v-layout column>
      <template>
        <div>
          <v-toolbar flat color="white">
            <template>
              <v-btn color="brown lighten-4" class="mb-2" @click="dialog_create=!dialog_create">
                <span style="color: #8d6e63;">New product</span>
              </v-btn>
            </template>
            <v-text-field
              v-model="search"
              label="Search. . ."
              single-line
              hide-details
              class="pa-5"
            ></v-text-field>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="products"
            :server-items-length="totalProducts"
            :loading="loading"
            :options.sync="options"
            item-key="id"
            :search="search"
            class="elevation-1"
            :mobile-breakpoint="350"
          >
            <template v-slot:item.action="{ item }">
              <v-btn color="brown lighten-4" @click="openEdit(item)">
                <v-icon color="brown lighten-1" small>$vuetify.icons.pencil</v-icon>
              </v-btn>
              <v-btn color="brown lighten-4" @click="openDelete(item)">
                <v-icon color="brown lighten-1" small>$vuetify.icons.delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </div>
        <v-delete v-model="dialog_delete" :item="currentItem" @deleteProduct="deleteItem" />
        <v-create v-model="dialog_create" @reload="reload" />
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import Delete from "../Dialog/Delete";
import Create from "../Dialog/Create";

export default {
  props: {
    product: {}
  },

  components: {
    vDelete: Delete,
    vCreate: Create
  },

  data() {
    return {
      totalProducts: 0,
      products: [],
      loading: true,
      options: {},
      dialog_create: false,
      dialog_delete: false,
      dialog_edit: false,
      search: "",
      currentItem: {},
      headers: [
        {
          text: "Name",
          value: "name",
          sortable: false
        },
        {
          text: "Action",
          value: "action",
          sortable: false,
          align: "center"
        }
      ]
    };
  },

  watch: {
    options: {
      immediate: true,
      handler() {
        this.getData().then(data => {
          // console.log("watch", data);
          this.products = data.items;
        });
      },
      deep: true
    }
  },

  methods: {
    getData(page) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { page, itemsPerPage } = this.options;

        const response = axios.get(`/products?page=${page}`).then(response => {
          // console.log(response);
          let items = response.data.data;
          const total = items.length;
          this.totalProducts = response.data.total;

          if (itemsPerPage > 0) {
            let newItems = items.slice(
              (page - 1) * itemsPerPage,
              page * itemsPerPage
            );
          }

          setTimeout(() => {
            this.loading = false;
            resolve({ items, total });
          }, 1000);
        });
      });
    },

    openDelete(item) {
      this.currentItem = item;
      this.dialog_delete = true;
    },

    deleteItem(id) {
      axios.delete(`/products/${id}`).then(response => {
        this.getData().then(data => {
          this.products = data.items;
        });
      });
      this.dialog_delete = false;
    },

    reload() {
      this.getData().then(data => {
        this.products = data.items;
      });
    }
  }
};
</script>

<style>
</style>