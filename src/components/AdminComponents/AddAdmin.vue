<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Create New Admin</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-form ref="form" v-model="addAdmin">
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
                :disabled="!addAdmin"
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
      name: 'AddAdmin',
      data: () => ({
        addAdmin: true,
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
      })
    }
</script>

<style scoped>

</style>
