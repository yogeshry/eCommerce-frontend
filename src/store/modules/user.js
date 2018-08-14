import api from '../../api/api'

// initial state
const state = {
  user: null,
  message: null,
  orders: []
}

const getters = {}

const actions = {
  getUser ({commit, rootState}) {
    api().get(`users/search/findByUsername?username=${rootState.auth.username}`)
      .then(r => r.data)
      .then(r => {
        commit('setUser', r)
      })
      .catch(() => {
        commit('setMessage', 'User Cannot be found')
      })
  }
}

const mutations = {
  setUser (state, data) {
    state.user = data
  },
  setMessage (state, message) {
    state.message = message
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
