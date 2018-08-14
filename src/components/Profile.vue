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
                <v-layout>Email: {{user.email}}
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
            <v-form ref="form" v-model="infos">
              <v-card-text>
                <v-layout>
                  Old {{info}}: {{user[info]}}
                </v-layout>
                <v-layout>
                  <v-text-field
                    v-model="editInfo"
                    :rules="[rules.required].concat(rules[info])"
                    :label="'New ' + info"
                    required
                  >
                  </v-text-field>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="submit" :disabled="!infos">Confirm</v-btn>
                <v-btn @click="clear(); dialog=false">Cancel</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :timeout="10000"
      :color="info"
      multi-line
      right
    >
      {{message}}
      <v-btn
        color="primary"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'Profile',
    data () {
      return {
        dialog: false,
        info: null,
        editInfo: '',
        infos: true,
        snackbar: false,
        rules: {
          required: v => !!v || 'This field is required',
          phoneNumber1: [
            v => /^[0-9]*$/.test(v) || 'Phone must contains digit only',
            v => !v || v.length === 10 || 'Phone must be of 10 digits'
          ],
          phoneNumber2: [
            v => /^[0-9]*$/.test(v) || 'Phone must contains digit only',
            v => !v || v.length === 10 || 'Phone must be of 10 digits'
          ]
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user,
        message: state => state.user.message
      })
    },
    mounted () {
      this.getUser()
    },
    methods: {
      ...mapActions({
        getUser: 'user/getUser',
        updateUser: 'user/updateUser'
      }),
      edit (info) {
        this.dialog = true
        this.info = info
      },
      clear () {
        this.$refs.form.reset()
      },
      submit () {
        if (this.$refs.form.validate()) {
          this.updateUser({key: this.info, value: this.editInfo})
        }
        this.dialog = false
        this.clear()
        this.snackbar = true
      }
    }
  }
</script>

<style scoped>

</style>
