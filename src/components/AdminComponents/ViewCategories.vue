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
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                >
                  {{card.title}}
                </v-btn>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    @click=""
                  >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
    }
  }
</script>

<style scoped>

</style>
