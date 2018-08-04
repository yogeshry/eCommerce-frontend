import shop from '../../api/shop'
import api from '../../api/api'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  cartItems: [],
  cartProducts: [],
  checkoutStatus: null,
  cartAddStatus: null,
  status: null
}

// getters
const getters = {
  cartTotalItems: (state) => {
    return state.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  },

  cartTotalPrice: (state) => {
    return state.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  getCartProducts ({ commit, state }) {
    state.items.forEach((item) => {
      api().get(`api/products/${item.productId}`)
        .then(r => commit('setCartProducts', r.data))
        .catch(() => commit('setStatus', 'Cannot get products'))
    })
  },
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  getCartItems ({ state, commit, rootState }) {
    api().get(`order/cartItem/${rootState.auth.username}`)
      .then(r => {
        commit('setCartItems', r.data)
      })
      .catch(() => commit('setStatus', 'Cannot get cart items'))
    // commit('setCartItems', {items})
  },
  addProductToCart ({ state, commit, rootState }, productId) {
    commit('setCheckoutStatus', null)
    const cartItem = state.items.find(
      item => item.productId === productId)
    if (!cartItem) {
      commit('pushProductToCart', { productId: productId, username: rootState.auth.username })
    } else {
      commit('incrementItemQuantity', cartItem)
    }
    const newItem = state.items.find(
      item => item.productId === productId)
    api()
      .post('/order/addToCart', newItem)
      .then(() => commit('setCartAddStatus', 'Success'))
      .catch(() => commit('setCartAddStatus', 'Failed'))
  }
}

// mutations
const mutations = {
  setCartProducts (state, { product }) {
    if (!JSON.stringify(state.items).includes(JSON.stringify(product))) state.cartProducts.push(product)
  },

  pushProductToCart (state, payload) {
    state.items.push({
      productId: payload.productId,
      username: payload.username,
      quantity: 1
    })
  },

  setStatus (state, status) {
    state.status = status
  },

  incrementItemQuantity (state, cart) {
    const cartItem = state.items.find(item => item.productId === cart.productId)
    cartItem.quantity++
  },

  setCartItems (state, items) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  },

  setCartAddStatus (state, cartAddStatus) {
    state.cartAddStatus = cartAddStatus
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
