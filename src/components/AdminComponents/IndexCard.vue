<template>
    <v-flex xs4>
      <v-card>
        <v-card-media
          :src="src"
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
              {{title}}
            </h2>
          </div>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <h2>
            {{text}}
          </h2>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
  export default {
    name: 'IndexCard',
    props: ['title', 'text', 'src']
  }
</script>

<style scoped>

</style>
