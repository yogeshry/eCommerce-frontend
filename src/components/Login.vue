<template>
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
            :type="'password'"
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
            :disabled="!login"
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
    name: 'Login',
    data: () => ({
      login: true,
      username: '',
      usernameRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 255) || 'This field must be less than 255 characters',
        v => /^\S*$/.test(v) || 'This field cannot contain spaces'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
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
