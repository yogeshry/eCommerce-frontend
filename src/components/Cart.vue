<template>
  <v-container>
  <v-layout>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="item in allCartProducts"
          v-bind="{xs12: true }"
          :key="item.id"
        ><v-card>
          <v-layout>
          <v-flex xs2>
          <v-card>
            <v-card-media
              height="100"
            src="/static/iphone8.png"
            >
            </v-card-media>
          </v-card>
          </v-flex>
          <v-flex>
            <v-card-title>
                {{item.name}} {{item.model}}
              <v-btn small fab depressed @click="removeItemFromCartAndRefresh(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-title></v-flex>
              <v-flex xs2></v-flex>
              <v-flex>
              <v-layout>
              <v-flex xs2>
              <v-select
                :items="[1,2,3,4,5,6,7,8,9,10]"
                v-model="items.find(cartItem => cartItem.productId === item.id).quantity"
                label="quantity"
                @change=""
              >
              </v-select>
              </v-flex>
              </v-layout>
              </v-flex>
            <v-flex xs1>
              <br><h3>
              Rs. {{item.cost}}
              SubTotal: {{calculateSubTotal(items.find(cartItem => cartItem.productId === item.id).quantity, item.cost)}}
            </h3>
            </v-flex>
          </v-layout>
          </v-card>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
    </v-container>
    <v-layout>
      <v-spacer></v-spacer>
    <v-flex>
      <v-btn @click="removeAllItemsFromCartAndRefresh">Remove all</v-btn>
    </v-flex>
      <v-spacer></v-spacer>
    <v-flex xs2>
    <h2>
    Total: Rs. {{totalCartPrice}}
  </h2>
    </v-flex>
    </v-layout>
  </v-card>
  </v-layout>
  <v-layout>
    <v-flex xs10>
    </v-flex>
    <v-flex>
      <v-btn @click="submit">
        Checkout
      </v-btn>
    </v-flex>
  </v-layout>
    <v-snackbar
      v-model="snackbar"
      :timeout="10000"
      :color="info"
      multi-line
      right
    >
      {{message}}
      <v-btn
        color="primary"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  export default {
    name: 'Detail',
    data () {
      return {
        snackbar: false,
        message: null
      }
    },
    computed: {
      ...mapGetters({
        totalCartItems: 'cart/cartTotalItems',
        totalCartPrice: 'cart/cartTotalPrice'
      }),
      ...mapState({
        items: state => state.cart.items,
        allCartProducts: state => state.cart.cartProducts,
        cartRemoveStatus: state => state.cart.cartRemoveStatus,
        checkoutStatus: state => state.cart.checkoutStatus
      })
    },
    mounted () {
      this.getCartItems()
    },
    methods: {
      ...mapActions({
        getCartItems: 'cart/getCartItems',
        removeItemFromCart: 'cart/removeItemFromCart',
        removeAllItemsFromCart: 'cart/removeAllItemsFromCart',
        checkout: 'cart/checkout'
      }),
      calculateSubTotal (quantity, cost) {
        return quantity * cost
      },
      removeItemFromCartAndRefresh (productId) {
        this.removeItemFromCart(productId)
        this.message = this.cartRemoveStatus
        this.$router.go(0)
      },
      removeAllItemsFromCartAndRefresh () {
        this.removeAllItemsFromCart()
        this.message = this.cartRemoveStatus
        this.$router.replace({name: 'Home'})
        this.$router.go(0)
      },
      submit () {
        this.checkout()
        this.$router.push({name: 'Home'})
        this.$router.go(0)
      }
    }
  }
</script>

<style scoped>

</style>
