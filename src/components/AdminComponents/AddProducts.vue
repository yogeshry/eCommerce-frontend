<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Add Product</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-layout>
              <v-flex>
                <v-form ref="form" v-model="addProducts">
                  <v-select
                    v-model="subCategory"
                    :items="items"
                    :rules="Rules"
                    label="SubCategory"
                    required
                  ></v-select>
                  <v-overflow-btn
                    v-model="brand"
                    :items="dropdown_edit"
                    :rules="Rules"
                    editable
                    label="Brand"
                    overflow
                    required
                  ></v-overflow-btn>
                  <v-text-field
                    v-model="productName"
                    :rules="Rules"
                    :counter="255"
                    label="Product Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="productModel"
                    :rules="Rules"
                    :counter="255"
                    label="Product Model"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="cost"
                    :rules="costRules"
                    label="Cost (Rs.)"
                    required
                  ></v-text-field>
                  <v-textarea
                    v-model="description"
                    :rules="Rules"
                    solo
                    name="input-7-4"
                    label="Product Description"
                    required
                  ></v-textarea>
                  <v-textarea
                    v-model="specification"
                    :rules="Rules"
                    solo
                    name="input-7-4"
                    label="Product Specification"
                    required
                  ></v-textarea>
                  <v-text-field
                    v-model="inventory"
                    :rules="costRules"
                    label="Inventory"
                    required
                  ></v-text-field>
                  <v-layout>
                    <input type="file" name="pic" accept="image/*">
                  </v-layout>
                  <br>
                  <v-btn
                    :disabled="!addProducts"
                    @click="submit"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-form>
              </v-flex>
              <v-flex xs2>
                <br><br><br><br>
                <v-btn small fab outline color="grey"
                       @click.stop="dialog = true">
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="500px">
                  <v-card>
                    <v-container grid-list-md>
                      <v-card-title>
                        <span class="headline">Add Brand</span>
                      </v-card-title>
                      <v-form ref="form" v-model="addBrand">
                        <v-card-text>
                          <v-layout>
                            <v-select
                              :items="dropdown_edit"
                              :rules="Rules"
                              label="Category"
                              required>
                            </v-select>
                          </v-layout>
                          <v-layout>
                            <v-select
                              :items="dropdown_edit"
                              :rules="Rules"
                              label="SubCategory"
                              required>
                            </v-select>
                          </v-layout>
                          <v-layout>
                            <v-text-field
                              :rules="Rules"
                              label="Brand"
                              required
                            >
                            </v-text-field>
                          </v-layout>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn :disabled="!addBrand" @click.native="dialog = false">Add</v-btn>
                          <v-btn @click.native="dialog = false">Cancel</v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-container>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'AddProducts',
    data () {
      return {
        addBrand: true,
        addProducts: true,
        dialog: false,
        dropdown_edit: [
          {text: 'Apple'},
          {text: 'Samsung'},
          {text: 'LG'},
          {text: 'Huawei'},
          {text: 'Xiaomi'}
        ],
        items: [
          {text: 'Apple'},
          {text: 'Samsung'},
          {text: 'LG'},
          {text: 'Huawei'},
          {text: 'Xiaomi'}
        ],
        subCategory: '',
        productName: '',
        productModel: '',
        Rules: [
          v => !!v || 'This field is required',
          v => (v && v.length <= 255) || 'This field must be less than 255 characters',
          v => /^\S*$/.test(v) || 'This field cannot contain spaces'
        ],
        costRules: [
          v => !!v || 'This field is required',
          v => /^[0-9]*$/.test(v) || 'This field must contains digit only'
        ]
      }
    },
    methods: {
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>
