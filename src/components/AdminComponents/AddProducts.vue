<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs6>
        <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Add Product</span>
                {{subCategory}}
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            <v-layout>
              <v-flex>
                <v-form ref="form" v-model="addProducts">
                  <v-overflow-btn
                    v-model="subCategory"
                    :items="subCategories"
                    :rules="Rules"
                    label="SubCategory"
                    item-text="name"
                    item-value="id"
                    return-object
                    required
                    editable
                    overflow
                    clearable
                  ></v-overflow-btn>
                  <v-overflow-btn
                    v-model="brand"
                    :items="brands"
                    :rules="rules"
                    editable
                    item-text="name"
                    item-value="id"
                    label="Brand"
                    return-object
                    overflow
                    clearable
                    required
                  ></v-overflow-btn>
                  <v-text-field
                    v-model="productName"
                    :rules="rules"
                    :counter="255"
                    label="Product Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="productModel"
                    :rules="rules"
                    :counter="255"
                    label="Product Model"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="cost"
                    :rules="costRules"
                    label="Cost (Rs.)"
                    type="number"
                    required
                  ></v-text-field>
                  <v-textarea
                    v-model="description"
                    :rules="rules"
                    solo
                    name="input-7-4"
                    label="Product Description"
                    required
                  ></v-textarea>
                  <v-textarea
                    v-model="specification"
                    :rules="rules"
                    solo
                    name="input-7-4"
                    label="Product Specification"
                    required
                  ></v-textarea>
                  <v-text-field
                    v-model="inventory"
                    :rules="costRules"
                    label="Inventory"
                    type="number"
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
                              :rules="rules"
                              label="Category"
                              required>
                            </v-select>
                          </v-layout>
                          <v-layout>
                            <v-select
                              :items="dropdown_edit"
                              :rules="rules"
                              label="SubCategory"
                              required>
                            </v-select>
                          </v-layout>
                          <v-layout>
                            <v-text-field
                              :rules="rules"
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
  import { mapState } from 'vuex'

  export default {
    name: 'AddProducts',
    data () {
      return {
        addBrand: true,
        addProducts: true,
        dialog: false,
        // dropdown_edit: [
        //   { text: 'Apple' },
        //   { text: 'Samsung' },
        //   { text: 'LG' },
        //   { text: 'Huawei' },
        //   { text: 'Xiaomi' }
        // ],
        // items: [
        //   {text: 'Apple'},
        //   {text: 'Samsung'},
        //   {text: 'LG'},
        //   {text: 'Huawei'},
        //   {text: 'Xiaomi'}
        // ],
        subCategory: '',
        brand: '',
        productName: '',
        productModel: '',
        rules: [
          v => !!v || 'This field is required',
          v => /^\S*$/.test(v) || 'This field cannot contain spaces'
        ],
        costRules: [
          v => !!v || 'This field is required',
          v => v > 0 || 'This field must be positive'
        ]
      }
    },
    methods: {
      clear() {
        this.$refs.form.reset()
      }
    },
    computed: {
      ...mapState({
        subCategories: state => state.admin.allSubCategories,
        brands: state => state.admin.allBrands
      })
    }
  }
</script>

<style scoped>

</style>
