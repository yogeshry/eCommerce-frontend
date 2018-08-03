<template xmlns:>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">LOGIN</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-form ref="form" v-model="login" lazy-validation>
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                :counter="255"
                label="Username/Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                @click:append="showPassword = !showPassword"
                counter
                hint="At Least 8 Characters"
                label="Password"
                required
              >
              </v-text-field>
              <v-btn
                :disabled="!login"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        {{loginStatus}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Login',
    data: () => ({
      login: true,
      showPassword: false,
      username: '',
      usernameRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 255) || 'This field must be less than 255 characters',
        v => /^\S*$/.test(v) || 'This field cannot contain spaces'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Minimum 8 Characters'
      ],
      loginStatus: ''
    }),
    mounted () {
      if (this.isAuthenticated) {
        this.$router.push({name: 'Admin'})
      } else {
        this.$router.replace({name: 'AdminLogin'})
      }
    },
    watch: {
      isAuthenticated: function (val) {
        if (val) this.$router.push({name: 'Admin'})
      }
    },
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated'
      })
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$store.dispatch('auth/getJwtToken', {username: this.username, password: this.password})
          this.loginStatus = this.isAuthenticated ? 'Redirecting to homepage' : 'Wrong Credentials Provided'
        }
      },
      refresh () {
        this.$store.dispatch('auth/getAuthenticationState')
        if (this.isAuthenticated) {
          this.$router.push({name: 'Admin'})
        } else {
          this.$router.replace({name: 'AdminLogin'})
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
