<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
    <v-card>
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">SIGNUP</span>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-form ref="form" v-model="signup" lazy-validation>
          <v-text-field
            v-model="firstName"
            :rules="nameRules"
            :counter="255"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="middleName"
            :rules="middleNameRules"
            :counter="255"
            label="Middle Name"
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            :rules="nameRules"
            :counter="255"
            label="Last Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="255"
            label="Email Address"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone1"
            :rules="phone1Rules"
            :counter="10"
            label="Phone Number 1"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone2"
            :rules="phone2Rules"
            :counter="10"
            label="Phone Number 2(Optional)"
          ></v-text-field>
          <v-text-field
            v-model="address1"
            :rules="address1Rules"
            :counter="255"
            label="Address 1"
            required
          ></v-text-field>
          <v-text-field
            v-model="address2"
            :rules="address2Rules"
            :counter="255"
            label="Address 2(Optional)"
          ></v-text-field>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            :counter="255"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            @click:append="showPassword = !showPassword"
            hint="At Least 8 Characters"
            label="Password"
            required
          >
          </v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!signup"
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
  export default {
    name: 'signup',
    data: () => ({
      signup: true,
      showPassword: false,
      firstName: '',
      middleName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length < 255) || 'This field must be less than 255 characters'
      ],
      middleNameRules: [
        v => (v.length < 255) || 'This field must be less than 255 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => /^\S*$/.test(v) || 'Email cannot contain spaces'
      ],
      phone1: '',
      phone1Rules: [
        v => !!v || 'Phone Number 1 is required',
        v => (v && v.length === 10) || 'Must be of 10 digits',
        v => /^[0-9]*$/.test(v) || 'Only Numbers'
      ],
      phone2: '',
      phone2Rules: [
        v => (v.length = 10) || 'Must be of 10 digits',
        v => /^[0-9]*$/.test(v) || 'Only Numbers'
      ],
      address1: '',
      address1Rules:[
        v => !!v || 'Address 1 is required'
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 255) || 'Username must be less than 255 characters',
        v => /^\S*$/.test(v) || 'Username cannot contain spaces'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Minimum 8 Characters'
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
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
