<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex>
        {{testresponse}}
        {{subCategory.name}} <br/>
        {{productsBySubCategory.length}} {{itemAlias}}
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex>
        Row 2
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex>
        Row 3
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex d-flex>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="i in 6" :key="i" xs2>
                <a href="http://localhost:8081/product/1">
                  <img src="/static/iphone8.png" class="image" alt="lorem" width="80%" height="90%">
                </a>
              </v-flex>
            </v-layout>
          </v-container>
          <v-footer class="mt-5">Total</v-footer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'SubCategory',
    data () {
      return {
        testresponse: ''
      }
    },
    computed: {
      itemAlias: function () {
        return this.productsBySubCategory.length > 1 ? 'items' : 'item'
      },
      ...mapState({
        productsBySubCategory: state => state.products.allBySubCategory,
        subCategory: state => state.categories.subCategory
      })
    },
    mounted () {
      this.$store.dispatch('products/getAllProductsBySubCategory', {id: this.$route.params.id})
      this.$store.dispatch('categories/getSubCategory', {id: this.$route.params.id})
    },
    beforeRouteUpdate (to, from, next) {
      this.$store.dispatch('products/getAllProductsBySubCategory', {id: to.params.id})
      this.$store.dispatch('categories/getSubCategory', {id: to.params.id})
      next()
    }
  }
</script>

<style scoped>

</style>
