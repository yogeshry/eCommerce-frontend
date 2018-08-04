<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        {{testresponse}}
        <h2>
          {{subCategory.name}}
        </h2>(
        {{productsBySubCategory.length}} {{itemAlias}}
        )
      </v-flex>
    </v-layout>
    <br>
    <hr>
    <br>
    <v-layout>
    <v-flex xs3>
    <v-select
      v-model="subCategory"
      :items="items"
      :rules="Rules"
      label="Sort By"
      required
    ></v-select>
    </v-flex>
      <v-flex></v-flex>
  </v-layout>
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="card in cards"
            v-bind="{ [`xs${card.flex}`]: true }"
            :key="card.title"
          >
            <v-card
            hover
            :to="{name:card.routeto}">
              <v-card-media
                :src="card.src"
                height="150px"
              >
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                </v-container>
              </v-card-media>
              <v-card-title>
                <v-spacer></v-spacer>
                <div>
                  <h2>
                    {{card.title}}
                  </h2>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h2>
                  {{card.text}}
                </h2>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'SubCategory',
    data () {
      return {
        testresponse: '',
        cards: [
          {title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home'},
          {title: 'Total Products', src: '/static/box-icon1.png', flex: 3, text: 'd', routeto: 'Login'},
          {title: 'Total Categories', src: '/static/images2.png', flex: 3, text: 'd', routeto: 'ProductDetail'},
          {title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home'},
          {title: 'Total Products', src: '/static/box-icon1.png', flex: 3, text: 'd', routeto: 'Login'},
          {title: 'Total Categories', src: '/static/images2.png', flex: 3, text: 'd', routeto: 'ProductDetail'},
          {title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home'},
          {title: 'Total Products', src: '/static/box-icon1.png', flex: 3, text: 'd', routeto: 'Login'},
          {title: 'Total Categories', src: '/static/images2.png', flex: 3, text: 'd', routeto: 'ProductDetail'}
        ],
        items: [
          {text: 'Price high to low'},
          {text: 'Price low to high'}
        ]
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
