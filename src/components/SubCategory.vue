<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex d-flex>
        Row 1
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
            <v-toolbar-title>Something</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="i in 6" :key="i" xs2>
                <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
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
  export default {
    name: 'SubCategory'
  }
</script>

<style scoped>

</style>
