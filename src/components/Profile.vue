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
              <br><br>
              <h3>
                <v-layout>Name: {{user.firstName}} {{user.middleName}} {{user.lastName}}</v-layout>
                <br>
                <v-layout>Email: {{user.email}} &ensp;
                  <v-icon
                  @click.stop="edit('email')">mdi-pencil</v-icon>
                </v-layout>
                <br>
                <v-layout>Username: {{user.username}}</v-layout>
                <br>
                <v-layout>Phone1: {{user.phoneNumber1}} &ensp;
                  <v-icon
                    @click.stop="edit('phoneNumber1')">mdi-pencil</v-icon>
                </v-layout>
                <br>
                <v-layout>Phone2: {{user.phoneNumber2}} &ensp;
                  <v-icon
                    @click.stop="edit('phoneNumber2')">mdi-pencil</v-icon>
                </v-layout>
                <br>
                <v-layout>Address1: {{user.address1}} &ensp;
                  <v-icon
                    @click.stop="edit('address1')">mdi-pencil</v-icon>
                </v-layout>
                <br>
                <v-layout>Address2: {{user.address2}} &ensp;
                  <v-icon
                    @click.stop="edit('address2')">mdi-pencil</v-icon>
                </v-layout>
                <br>
                <br></h3>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs3>
      </v-flex>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-container grid-list-md>
            <v-card-title>
              <span class="headline">Edit {{info}}</span>
            </v-card-title>
            <v-form ref="form" v-model="info">
              <v-card-text>
                <v-layout>
                  Old {{info}}: {{user[info]}}
                </v-layout>
                <v-layout>
                  <v-text-field
                    v-model="newBrandName"
                    :rules="rules"
                    :label="'New ' + info"
                    required
                  >
                  </v-text-field>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-btn :disabled="!info" @click.native="addNewBrandConfirm">Confirm</v-btn>
                <v-btn @click="clear(); dialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'Profile',
    data () {
      return {
        dialog: false,
        info: null
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      })
    },
    mounted () {
      this.getUser()
    },
    methods: {
      ...mapActions({
        getUser: 'user/getUser'
      }),
      edit (info) {
        this.dialog = true
        this.info = info
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
