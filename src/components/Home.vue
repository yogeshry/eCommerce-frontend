<template>
  <v-container fluid>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <br><br>
    <h2>Smartphones</h2>
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="item in listOfSmartPhones"
            v-bind="{ [`xs3`]: true }"
            :key="item.id"
          >
            <v-card
              hover
              :to="{name: 'ProductDetail', params: {id: item.id}}">
              <v-card-media
                :src="src"
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
                    {{item.name}}
                  </h2>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h2>
                  {{item.model}}
                </h2>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <br>
    <h2>Feature Phones</h2>
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="item in listOfFeaturePhones"
            v-bind="{ [`xs3`]: true }"
            :key="item.id"
          >
            <v-card
              hover
              :to="{name: 'ProductDetail', params: {id: item.id}}">
              <v-card-media
                :src="src"
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
                    {{item.name}}
                  </h2>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h2>
                  {{item.model}}
                </h2>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <h2>Tablets</h2>
    <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap>
          <v-flex
            v-for="item in listOfTablets"
            v-bind="{ [`xs3`]: true }"
            :key="item.id"
          >
            <v-card
              hover
              :to="{name: 'ProductDetail', params: {id: item.id}}">
              <v-card-media
                :src="src"
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
                    {{item.name}}
                  </h2>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h2>
                  {{item.model}}
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
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Home',
    data () {
      return {
        items: [
          {
            src: '/static/iphone8banner.jpg'
          },
          {
            src: '/static/iphonexbanner.png'
          },
          {
            src: '/static/iphone8banner.jpg'
          },
          {
            src: '/static/iphonexbanner.png'
          }
        ],
        src: '/static/box-icon1.png',
        cards: [
          { title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home' },
          { title: 'Total Products', src: '/static/box-icon1.png', flex: 3, text: 'd', routeto: 'Login' },
          { title: 'Total Categories', src: '/static/images2.png', flex: 3, text: 'd', routeto: 'ProductDetail' },
          { title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home' }
        ],
        itemss: [
          { text: 'Price high to low' },
          { text: 'Price low to high' }
        ],
        listOfSmartPhones: [],
        listOfFeaturePhones: [],
        listOfTablets: []
      }
    },
    methods: {
      ...mapActions({
        getAllProductsBySubCategory: 'products/getAllProductsBySubCategory'
      })
    },
    computed: {
      ...mapState({
        allBySubCategory: 'products/allBySubCategory'
      })
    },
    mounted () {
      this.getAllProductsBySubCategory(2)
      this.listOfSmartPhones = this.allBySubCategory
      this.getAllProductsBySubCategory(3)
      this.listOfFeaturePhones = this.allBySubCategory
      this.getAllProductsBySubCategory(4)
      this.listOfTablets = this.allBySubCategory
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
