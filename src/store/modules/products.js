import api from '../../api/api'
// initial state
const state = {
  all: [],
  allBySubCategory: [],
  allByIds: [],
  product: null
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    api().get('products')
      .then(r => r.data)
      .then(products => {
        commit('setProducts', products)
      })
  },
  getAllProductsBySubCategory ({commit}, subCategory) {
    api().get(`subCategories/${subCategory.id}/products`)
      .then(r => r.data._embedded.products)
      .then(productsBySubCategory => {
        commit('setProductsBySubCategory', productsBySubCategory)
      })
  },
  getProductById ({commit}, product) {
    api().get(`products/${product.id}`)
      .then(r => r.data)
      .then(product => {
        commit('setProduct', product)
      })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  setProduct (state, product) {
    state.product = product
  },
  setProductsBySubCategory (state, productsBySubCategory) {
    state.allBySubCategory = productsBySubCategory
  },
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
