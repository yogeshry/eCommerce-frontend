<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Create New Account</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-form ref="form" v-model="signUp" lazy-validation>
              <v-text-field
                v-model="firstName"
                :rules="[rules.required, rules.name]"
                :counter="50"
                label="First Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="middleName"
                :rules="[rules.name]"
                :counter="50"
                label="Middle Name"
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                :rules="[rules.required, rules.name]"
                :counter="50"
                label="Last Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="[rules.required].concat(rules.email)"
                :counter="80"
                label="Email Address"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone1"
                :rules="[rules.required].concat(rules.phone)"
                :counter="10"
                label="Phone Number 1"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone2"
                :rules="rules.phone"
                :counter="10"
                label="Phone Number 2(Optional)"
              ></v-text-field>
              <v-text-field
                v-model="address1"
                :rules="[rules.required, rules.address]"
                :counter="100"
                label="Address 1"
                required
              ></v-text-field>
              <v-text-field
                v-model="address2"
                :rules="[rules.address]"
                :counter="100"
                label="Address 2(Optional)"
              ></v-text-field>
              <v-text-field
                v-model="username"
                :rules="[rules.required].concat(rules.username)"
                :counter="40"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[rules.required].concat(rules.password)"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                @click:append="showPassword = !showPassword"
                hint="At Least 8 Characters"
                label="Password"
                required
                counter
              >
              </v-text-field>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
              <v-btn
                :disabled="!signUp"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import base from '../api/base'
  import { mapGetters } from 'vuex'

  export default {
    name: 'signup',
    data: () => ({
      signUp: true,
      showPassword: false,
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone1: '',
      phone2: '',
      address1: '',
      address2: '',
      username: '',
      password: '',
      checkbox: false,
      test: '',
      rules: {
        required: v => !!v || 'This field is required',
        name: v => v.length <= 50 || 'This field cannot exceed 50 characters',
        email: [
          v => /.+@.+/.test(v) || 'E-mail must be valid',
          v => /^\S*$/.test(v) || 'Email cannot contain spaces'
        ],
        address: v => v.length <= 100 || 'Address cannot exceed 100 characters',
        phone: [
          v => !v || v.length === 10 || 'Phone must be of 10 digits',
          v => /^[0-9]*$/.test(v) || 'Phone must contains digit only'
        ],
        username: [
          v => (v && v.length <= 40) || 'Username must be less than 40 characters',
          v => /^\S*$/.test(v) || 'Username cannot contain spaces'
        ],
        password: v => v.length >= 8 || 'Minimum 8 Characters'
      }
    }),
    mounted () {
      if (this.isAuthenticated) {
        this.$router.push({ name: 'Home' })
      } else {
        this.$router.replace({ name: 'Signup' })
      }
    },
    watch: {
      isRegistered: function (val) {
        if (val) this.$router.push({ name: 'Login' })
      }
    },
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated',
        isRegistered: 'auth/isRegistered'
      })
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$store.dispatch('auth/signUp', {
            username: this.username.toLowerCase(),
            password: this.password,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber1: this.phone1,
            phoneNumber2: this.phone2,
            address1: this.address1,
            address2: this.address2
          })
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
