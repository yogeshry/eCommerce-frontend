<template>
  <v-card>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout row wrap>
        <v-flex
          v-for="category in allCategories"
          v-bind="{ [`xs3`]: true }"
          :key="category.id"
        >
          <v-card>
            <v-card-title>
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                >
                  {{category.name}}
                </v-btn>
                <v-list>
                  <v-list-tile
                    v-for="(subCategory, index) in category.subCategories"
                    :key="index"
                    @click=""
                  >
                    <v-list-tile-title>{{ subCategory.name }}</v-list-tile-title>
                    <v-btn small fab depressed
                    :to="{name:'AdminIndex'}">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-btn small fab depressed>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'ViewCategories',
    data () {
      return {
        cards: [
          {title: 'Total Users'},
          {title: 'Total Products'},
          {title: 'Total Categories'},
          {title: 'Total Users'}
        ],
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' }
        ]
      }
    },
    computed: {
      ...mapState({
        allCategories: state => state.categories.all,
        allSubCategories: state => state.admin.allSubCategories
      })
    },
    mounted () {
      this.getAllCategories()
    },
    methods: {
      ...mapActions({
        getAllCategories: 'categories/getAllCategories',
        getAllSubCategories: 'admin/allSubCategories'
      })
    }
  }
</script>

<style scoped>

</style>
