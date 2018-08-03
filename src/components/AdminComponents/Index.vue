<template>
  <v-container>
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
              <v-card-media
                :src="card.src"
                height="250px"
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
  export default {
    name: 'Index',
    data () {
      return {
        cards: [
          {title: 'Total Users', src: '/static/images1.png', flex: 4, text: '2000'},
          {title: 'Total Products', src: '/static/box-icon1.png', flex: 4, text: 'd'},
          {title: 'Total Categories', src: '/static/images2.png', flex: 4, text: 'd'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
