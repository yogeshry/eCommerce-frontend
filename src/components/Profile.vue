<template>
  <v-container>
    <v-layout>
      <v-flex xs3>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
              <h2>
                Profile
              </h2>
              <br>
              <hr>
              <br><br><h3>
              <v-layout>First Name: firstname</v-layout><br>
              <v-layout>Middle Name: middlename</v-layout><br>
              <v-layout>Last Name: lastname</v-layout><br>
              <v-layout>Email: email</v-layout><br>
              <v-layout>Username: username</v-layout><br>
              <v-layout>Phone: phone</v-layout><br>
              <v-layout>Address: address</v-layout><br>
              <br></h3>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>

<style scoped>

</style>
