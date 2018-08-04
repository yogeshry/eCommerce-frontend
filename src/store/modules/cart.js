import shop from '../../api/shop'
import api from '../../api/api'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  cartProducts: [],
  checkoutStatus: null,
  cartAddStatus: null,
  status: null
}

// getters
const getters = {

  cartTotalItem: (state) => {
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

  addProductToCart ({ state, commit }, payload) {
    commit('setCheckoutStatus', null)
    const cartItem = state.items.find(
      item => item.productId === payload.productId)
    if (!cartItem) {
      commit('pushProductToCart',
        { productId: payload.productId, userId: payload.userId })
    } else {
      commit('incrementItemQuantity', cartItem)
    }
    const newItem = state.items.find(
      item => item.productId === payload.productId)
    api()
      .post('addToCart', newItem)
      .then(() => commit('setCartAddStatus', 'Success'))
      .catch(() => commit('setCartAddStatus', 'Failed'))
  }
}

// mutations
const mutations = {
  setCartProducts (state, { product }) {
    if (!JSON.stringify(state.items).includes(JSON.stringify(product))) state.cartProducts.push(product)
  },

  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  setStatus (state, { status }) {
    state.status = state
  },

  incrementItemQuantity (state, { productId }) {
    const cartItem = state.items.find(item => item.productId === productId)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
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
