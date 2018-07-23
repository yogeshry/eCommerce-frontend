<template>
  <v-app id="ecommerce">
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-group
          v-for="category in categories"
          :key="category.id"
          :prepend-icon="category.iconName"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>{{category.name}}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="subcategory in category.subCategories"
            :key="subcategory.id"
            :to="{name: 'SubCategory', params: {id: subcategory.id}}"
            ripple
          >
            <v-list-tile-title v-text="subcategory.name"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="subcategory.id"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link :to="{name:'Home'}">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-text-field
        class="mx-3"
        flat
        label="Search"
        append-icon="search"
        solo-inverted
        clear-icon="mdi-close-circle"
        clearable
        :append-icon-cb="searchItem"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-badge overlap>
        <span slot="badge">0</span>
        <v-icon large @click="goToCart">
          mdi-cart
        </v-icon>
      </v-badge>&nbsp; &nbsp; &nbsp;
      <span><v-btn :to="{name:'Login'}">Login </v-btn>OR <v-btn :to="{name: 'Signup'}">Signup </v-btn></span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-snackbar
        v-model="snackbar"
        timeout="5000"
        right
      >
        Sorry, Search is not implemented.
        <v-btn
          color="primary"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  // import api from './api/api'
  export default {
    name: 'App',
    data () {
      return {
        title: 'Ecommerce App',
        drawer: true,
        snackbar: false
      }
    },
    mounted () {
      this.$store.dispatch('categories/getAllCategories')
    }, /*
    mounted () {
      api().get('category').then(response => {this.items = response.data})
    },
    */
    computed: mapState({
      categories: state => state.categories.all
    }),
    methods: {
      searchItem () {
        this.snackbar = true
      },
      goToCart () {
        this.$router.push({name: 'Cart'})
      }
    }
  }
</script>

<style scoped>
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
</style>
