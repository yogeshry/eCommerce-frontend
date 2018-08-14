<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Add Category</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-layout>
              <v-flex>
                <v-form ref="form" v-model="addCategory">
                  <v-text-field
                    v-model="category"
                    :rules="Rules"
                    :counter="255"
                    label="Category"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="categoryIcon"
                    :rules="Rules"
                    :counter="255"
                    label="Category Icon"
                    required
                  ></v-text-field>
                  <v-btn
                    @click.stop="addSubCategory">
                    Add SubCategory
                  </v-btn>
                  <v-list>
                    <v-list-tile
                      v-for="(subCategory, i) in subCategories"
                      :key="i">
                        <v-text-field
                          append-outer-icon="mdi-minus"
                          @click:append-outer="deleteRow(i)"
                          v-model="subCategory.name" label="SubCategory"
                        >
                        </v-text-field>
                    </v-list-tile>
                  </v-list>
                  <v-btn
                    :disabled="!addCategory"
                    @click="submit"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
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
    name: 'AddCategories',
    data () {
      return {
        addCategory: true,
        category: '',
        categoryIcon: '',
        snackbar: false,
        Rules: [
          v => !!v || 'This field is required',
          v => (v && v.length <= 255) || 'This field must be less than 255 characters'
        ],
        subCategories: []
      }
    },
    computed: {
      ...mapState({
        message: state => state.admin.message
      })
    },
    methods: {
      ...mapActions({
        addCategoryAdmin: 'admin/addCategoryAdmin'
      }),
      addSubCategory () {
        this.subCategories.push({
          name: ''
        })
      },
      deleteRow (i) {
        this.subCategories.splice(i, 1)
      },
      submit () {
        if (this.$refs.form.validate()) {
          this.addCategoryAdmin({categoryName: this.category, categoryIcon: this.categoryIcon, names: this.subCategories})
        }
        this.snackbar = true
      },
      clear () {
        this.$refs.form.reset()
        this.subCategories.splice(0, this.subCategories.length)
      }
    }
  }
</script>

<style scoped>

</style>
