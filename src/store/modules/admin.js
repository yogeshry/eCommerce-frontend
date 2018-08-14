import api from '../../api/api'

const state = {
  category: null,
  allSubCategories: [],
  randomSubCategories: [],
  allBrands: [],
  message: null,
  indexDetail: null
}

const getters = {}

const actions = {
  getIndexPageDetail({ state, commit }) {
    api().get('admin/counts')
      .then(r => {
        commit('setIndexPageDetail', r.data)
      })
  },
  addCategoryAdmin({ state, commit }, categorySubcategory) {
    api().post('admin/addCategory', categorySubcategory)
      .then(() => commit('setSuccessMessage'))
      .catch(() => commit('setFailureMessage'))
  },
  getAllSubCategories ({ state, commit }) {
    api().get('subcategory')
      .then(r => {
        commit('setAllSubCategories', r.data)
      })
      .catch(() => commit('setFailureMessage'))
  },
  getAllBrands({ state, commit }) {
    api().get('brands')
      .then(r => {
        commit('setAllBrands', r.data._embedded.brands.map(brand => {
          return { id: brand.id, name: brand.name }
        }))
      })
      .catch(() => commit('setFailureMessage'))
  },
  addNewProduct({ state, commit }, product) {
    api().post('admin/addProduct', product)
      .then(() => commit('setSuccessMessage'))
      .catch(() => commit('setFailureMessage'))
  },
  addNewBrand({ state, commit }, brandName) {
    api().post('brands', { name: brandName })
      .then(() => commit('setSuccessMessage'))
      .catch(() => commit('setFailureMessage'))
  }
}

const mutations = {
  setSuccessMessage(state) {
    state.message = 'Operation completed successfully'
  },
  setFailureMessage(state) {
    state.message = 'Operation failed due to one or more errors'
  },
  setAllSubCategories(state, subCategories) {
    state.allSubCategories = subCategories
  },
  setAllBrands(state, brands) {
    state.allBrands = brands
  },
  setIndexPageDetail(state, detail) {
    state.indexDetail = detail
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
