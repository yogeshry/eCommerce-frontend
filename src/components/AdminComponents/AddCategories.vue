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
                <v-form ref="form" v-model="AddCategories" lazy-validation>
                  <v-text-field
                    v-model="Category"
                    :rules="CategoryRules"
                    :counter="255"
                    label="Category"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="CategoryIcon"
                    :rules="CategoryRules"
                    :counter="255"
                    label="Category Icon"
                    required
                  ></v-text-field>
                  <v-btn
                    @click="addSubCategory">
                    Add SubCategory
                  </v-btn>
                  <!--<v-text-field-->
                  <!--v-model="SubCategory"-->
                  <!--:rules="SubCategoryRules"-->
                  <!--append-outer-icon="mdi-playlist-plus"-->
                  <!--@click:append-outer="addSubCategory"-->
                  <!--counter="255"-->
                  <!--hint="At Least 8 Characters"-->
                  <!--label="SubCategory"-->
                  <!--required-->
                  <!--&gt;-->
                  <!--</v-text-field>-->
                  <v-list>
                    <v-list-tile
                      v-for="(input, index) in inputs"
                      :key="SubCategory">
                      <div>
                        <v-text-field
                          append-outer-icon="mdi-minus"
                          @click:append-outer="deleteRow(index)"
                          v-model="input.one" label="SubCategory"> - {{ input.one }}
                        </v-text-field>
                      </div>
                    </v-list-tile>
                  </v-list>
                  <v-btn
                    :disabled="!AddCategories"
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
        {{loginStatus}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'AddCategories',
    data () {
      return {
        AddCategories: true,
        Category: '',
        CategoryIcon: '',
        CategoryRules: [
          v => !!v || 'This field is required',
          v => (v && v.length <= 255) || 'This field must be less than 255 characters',
          v => /^\S*$/.test(v) || 'This field cannot contain spaces'
        ],
        inputs: []
      }
    },
    methods: {
      addSubCategory () {
        this.inputs.push({
          one: ''
        })
      },
      deleteRow (i) {
        this.inputs.splice(i, 1)
      },
      clear () {
        this.$refs.form.reset()
        this.inputs.splice(0, this.inputs.length)
      }
    }
  }
</script>

<style scoped>

</style>
