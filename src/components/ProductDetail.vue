<template>
<v-container>
  <v-layout row wrap>
    <v-flex>
      <img src="iepimage"/>
    </v-flex>
    <v-flex>
      <v-layout>
        <v-flex fill-height><h1>
          {{items[0].name}}{{items[0].model}}
        </h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex fill-height>
          {{items[0].description}}
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          {{items[0].cost}}
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
    export default {
      name: 'ProductDetail',
      data () {
        return {
          items: [
            {id: 1, name: 'Iphone', model: '8 Plus', cost: 99000, description: 'This is Iphone 8 Plus', specifications: 'specs'}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
