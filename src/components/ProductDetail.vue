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
        <v-flex>
          <h2>
         Rs. {{product.cost}}
          </h2>
        </v-flex>
        <v-flex xs4>
          <v-btn color="primary">
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
  import {mapState} from 'vuex'
  export default {
    name: 'ProductDetail',
    data () {
      return {
        items: [
            {id: 1, name: 'Iphone', model: '8 Plus', cost: 99000, description: 'This is Iphone 8 Plus', specifications: 'specs'}
        ]
      }
    },
    mounted () {
      this.$store.dispatch('products/getProductById', {id: this.$route.params.id})
    },
    computed: mapState({
      product: state => state.products.product
    })
  }
</script>

<style scoped>

</style>
