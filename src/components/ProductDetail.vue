<template>
  <v-container>
    <v-layout row wrap>
      <v-flex></v-flex>
      <v-flex>
        <img src="/static/iphone8.png"/>
      </v-flex>
      <v-flex>
        <v-layout>
          <v-flex fill-height><h1>
            {{product.name}} {{product.model}}
          </h1>
          </v-flex>
        </v-layout>
        <br>
        <hr>
        <br>
        <v-layout>
          <v-flex fill-height>
            <h2>
              Description
            </h2>
            <br>
            {{product.description}}
            <br>
            <br>
            <br>
            <br>
          </v-flex>
        </v-layout>
        <br>
        <hr>
        <br>
        <v-layout>
          <v-flex xs8>
            <h2>
              Rs. {{product.cost}}
            </h2>
          </v-flex>
          <v-flex>
            <v-btn fab small flat>
              <v-icon>
                mdi-heart
              </v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="primary" @click="addToCart(product.id)">
              Add to cart
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'ProductDetail',
    data () {
      return {
        items: []
      }
    },
    mounted () {
      this.getProductById({id: this.$route.params.id})
      // this.$store.dispatch('products/getProductById', {id: this.$route.params.id})
    },
    computed: {
      ...mapState({
        product: state => state.products.product,
        username: state => state.auth.username
      })
    },
    methods: {
      ...mapActions({
        getProductById: 'products/getProductById',
        getCartProducts: 'cart/getCartProducts',
        addProductToCart: 'cart/addProductToCart'
      }),
      addToCart: function (productId) {
        this.addProductToCart(productId)
      }
    }
  }
</script>

<style scoped>

</style>
