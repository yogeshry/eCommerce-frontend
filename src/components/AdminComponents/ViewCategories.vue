<template>
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
          <v-card>
            <v-card-title>
              <v-spacer></v-spacer>
              <div>
                <h2>
                  {{card.title}}
                </h2>
              </div>
              <v-spacer></v-spacer>
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
  export default {
    name: 'ViewCategories',
    data () {
      return {
        cards: [
          {title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home'},
          {title: 'Total Products', src: '/static/box-icon1.png', flex: 3, text: 'd', routeto: 'Login'},
          {title: 'Total Categories', src: '/static/images2.png', flex: 3, text: 'd', routeto: 'ProductDetail'},
          {title: 'Total Users', src: '/static/images1.png', flex: 3, text: '2000', routeto: 'Home'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
