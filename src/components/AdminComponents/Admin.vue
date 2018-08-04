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
          v-for="(item, i) in items"
          :key="i"
          :prepend-icon="item.icon"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(subItem,i) in item.subItems"
            :key="i"
            :to="{name: subItem.url}"
            ripple
          >
            <v-list-tile-title v-text="subItem.name"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="subItem.id"></v-icon>
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
      <router-link :to="{name:'AdminIndex'}">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <span v-if="authenticated !== 'true' "><v-btn :to="{name:'AdminLogin'}">Login </v-btn></span>
      <span v-else><v-btn :to="{name: 'AdminIndex'}">My Account</v-btn> <v-btn @click="logout">Logout</v-btn></span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      {{username}} {{authenticated}} {{jwt}}
      <slot/>
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
    name: 'Admin',
    data () {
      return {
        title: 'Admin Panel',
        drawer: true,
        snackbar: false,
        items: [{
          'name': 'Add',
          'icon': 'mdi-library-plus',
          'subItems': [
            {'name': 'Categories', 'url': 'AddCategories'},
            {'name': 'Products', 'url': 'AddProducts'},
          ]
        },
        {
          'name': 'View',
          'icon': 'mdi-eye',
          'subItems': [
              {'id': '10', 'name': 'Categories', 'url': 'ViewCategories'},
              {'id': '11', 'name': 'Products', 'url': 'ViewProducts'},
              {'id': '13', 'name': 'SubCategories', 'url': 'ViewSubCategories'},
              {'id': '15', 'name': 'Users', 'url': 'ViewUsers'},
              {'id': '17', 'name': 'Orders', 'url': 'ViewOrders'},
              {'id': '19', 'name': 'Cart', 'url': 'ViewCart'}
          ]
        },
        {
          'name': 'Admin',
          'icon': 'mdi-account-key',
          'subItems': [
              {'id': '254', 'name': 'Add Admin', 'url': 'AddAdmin'},
              {'id': '785', 'name': 'View Admin', 'url': 'ViewAdmin'}
          ]
        }
        ]
      }
    },
    mounted () {
      this.$store.dispatch('auth/getAuthenticationState')
      this.$store.dispatch('categories/getAllCategories')
    },

    /*
    mounted () {
      api().get('category').then(response => {this.items = response.data})
    },
    */
    computed: mapState({
      categories: state => state.categories.all,
      username: state => state.auth.username,
      jwt: state => state.auth.token,
      authenticated: state => state.auth.authenticated
    }),
    methods: {
      logout () {
        this.$store.dispatch('auth/logout')
        this.$router.push({name: 'Admin'})
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
