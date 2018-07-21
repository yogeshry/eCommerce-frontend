
import api from '../../api/api'
const state = {
  all: []
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
  }
}

const mutations = {
  setCategories (state, categories) {
    state.all = categories
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
