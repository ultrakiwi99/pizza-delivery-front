import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    cart: state => state.cart,
    cartTotal: state => ({
      usd: Object.values(state.cart).reduce((carry, item) => carry + item.priceUsd, 0),
      euro: Object.values(state.cart).reduce((carry, item) => carry + item.priceEur, 0),
    })
  },
  mutations: {
    cartAdd(state, product) {
      state.cart.push(product)
    },
    remove(state, item) {
      for (let idx in state.cart) {
        if (state.cart[idx].name === item.name) {
          state.cart.splice(idx, 1);
        }
      }
    }
  }
})
