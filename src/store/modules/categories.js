import api from '../../api/api'

const state = {
  all: [],
  subCategory: null
}

const getters = {}

const actions = {
  getAllCategories ({commit}) {
    api()
      .get('category')
      .then(r => r.data)
      .then(categories => {
        commit('setCategories', categories)
      })
  },
  getSubCategory ({commit}, subCategory) {
    api()
      .get(`subCategories/${subCategory.id}`)
      .then(r => r.data)
      .then(subCategory => {
        commit('setSubCategory', subCategory)
      })
  }
}

const mutations = {
  setCategories (state, categories) {
    state.all = categories
  },
  setSubCategory (state, subCategory) {
    state.subCategory = subCategory
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
