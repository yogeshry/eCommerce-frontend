<template>
  <v-app id="ecommerce">
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-group
          v-for="(category, i) in categories"
          :key="i"
          :prepend-icon="category.iconName"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>{{category.name}}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(subcategory,i) in category.subCategories"
            :key="i"
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
        <span slot="badge">{{ totalCartItems }}</span>
        <v-icon large @click="goToCart">
          mdi-cart
        </v-icon>
      </v-badge>&nbsp; &nbsp; &nbsp;
      <span v-if="authenticated !== 'true' "><v-btn :to="{name:'Login'}">Login </v-btn>OR <v-btn :to="{name: 'Signup'}">Signup </v-btn></span>
      <span v-else><v-btn :to="{name: 'Profile'}">My Account</v-btn> <v-btn @click="logoutUser">Logout</v-btn></span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-snackbar
        v-model="snackbar"
        :timeout="5000"
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
      <slot/>
    </v-content>
    <div>
      <beautiful-chat
        :agentProfile="agentProfile"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :isOpen="isChatOpen"
        :close="closeChat"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showTypingIndicator="false"
        style="z-index: 20"
      >
      </beautiful-chat>
      <a href="#" @click.prevent="openChat()">Open the chat window</a>
    </div>
    <v-footer fixed app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import api from '../api/chatApi'
  // import api from './api/api'
  export default {
    name: 'Default',
    data () {
      return {
        title: 'Ecommerce App',
        drawer: true,
        snackbar: false,
        text: '',
        agentProfile: {
          teamName: 'ShopBot',
          imageUrl: '/static/agent.png'
        },
        messageList: [],
        showTypingIndicator: false,
        newMessagesCount: 0,
        isChatOpen: false
      }
    },
    mounted () {
      this.getAuthenticationState()
      this.getAllCategories()
      this.getCartItems(this.userId)
    },
    /*
    mounted () {
      api().get('category').then(response => {this.items = response.data})
    },
    */
    computed: {
      ...mapGetters({
        cartItems: 'cart/cartItems',
        totalCartItems: 'cart/cartTotalItems'
      }),
      ...mapState({
        categories: state => state.categories.all,
        userId: state => state.auth.userId,
        username: state => state.auth.username,
        jwt: state => state.auth.token,
        authenticated: state => state.auth.authenticated
      })
    },
    methods: {
      ...mapActions({
        getAuthenticationState: 'auth/getAuthenticationState',
        getAllCategories: 'categories/getAllCategories',
        logout: 'auth/logout',
        getCartItems: 'cart/getCartItems'
      }),
      searchItem () {
        this.snackbar = true
      },
      goToCart () {
        this.$router.push({ name: 'Cart' })
      },
      logoutUser () {
        this.logout()
        this.$router.push({ name: 'Home' })
        this.$router.go(0)
      },
      sendMessage (message) {
        if (this.text.length > 0) {
          this.messageList.push(message)
        }
      },
      onMessageWasSent (message) {
        this.messageList.push(message)
        api()
          .get(message.data.text)
          .then(response => {
            message = {
              author: 'them',
              type: 'text',
              data: {
                text: response.data
              }
            }
            this.messageList.push(message)
            if (response.data === 'ok lets checkout' || response.data === 'ok lets see cart') { this.$router.push({name: 'Cart'}) }
            // this.$emit('messageSent', {
            //   author: 'them',
            //   type: 'text',
            //   data: {
            //     text: response.data
            //   }
            // })
          }).catch(err => {
            const message1 = err.response ? `${err.response.status} ${err.response.data}` : err.message
            message = {
              author: 'them',
              type: 'text',
              data: {
                text: message1
              }
            }
            this.messageList.push(message)
          // $emit('messageSent', {
          //   author: 'them',
          //   type: 'text',
          //   data: {
          //     text: message
          //   }
          // })
          })
      },
      openChat () {
        this.isChatOpen = true
      },
      closeChat () {
        this.isChatOpen = false
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
