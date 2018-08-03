import base from '../../api/base'
// import api from '../../api/api'

const state = {
  username: localStorage.getItem('username'),
  token: localStorage.getItem('jwtEcommerceToken'),
  authenticated: localStorage.getItem('isAuthenticated'),
  message: null
}

const getters = {
  isAuthenticated: state => Boolean(state.authenticated),
  isRegistered: state => state.message === 200
}

const actions = {
  getAuthenticationState ({commit}) {
    if (!localStorage.getItem('isAuthenticated')) {
      commit('removeJwtToken')
    }
  },
  getJwtToken ({commit}, user) {
    base().post('login', user)
      .then(r => r.headers.authorization)
      .then(token => {
        commit('setJwtToken', {user, token})
      })
  },
  signUp ({commit}, user) {
    if (!localStorage.getItem('isAuthenticated')) {
      commit('removeJwtToken')
    }
    base().post('users/sign-up', user)
      .then(r => r.status)
      .then(status => {
        commit('setMessage', status)
      })
      .catch(err => {
        commit('setMessage', err.status)
      })
  },
  logout ({commit}) {
    commit('removeJwtToken')
  }
}

const mutations = {
  setJwtToken (state, {user, token}) {
    localStorage.setItem('username', user.username)
    localStorage.setItem('jwtEcommerceToken', token)
    localStorage.setItem('isAuthenticated', 'true')
    state.username = user.username
    state.token = token
    state.authenticated = 'true'
  },
  removeJwtToken (state) {
    localStorage.removeItem('username')
    localStorage.removeItem('jwtEcommerceToken')
    localStorage.setItem('isAuthenticated', '')
    state.username = null
    state.token = null
    state.authenticated = ''
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
