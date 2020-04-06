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
      usd: state.cart.reduce((carry, item) => carry + item.totalUsd, 0),
      euro: state.cart.reduce((carry, item) => carry + item.totalEur, 0),
    })
  },
  mutations: {
    cartAdd(state, product) {
      state.cart.push({...product, qty: 1, totalUsd: product.priceUsd, totalEur: product.priceEur})
    },
    cartAddOne(state, {name}) {
      const increased = Object.assign({}, state.cart.find(item => item.name === name));
      increased.qty++;
      increased.totalUsd = increased.priceUsd * increased.qty;
      increased.totalEur = increased.priceEur * increased.qty;
      state.cart = [
        ...state.cart.filter(item => item.name !== increased.name),
        increased
      ];
    },
    cartDelOne(state, {name}) {
      const decreased = Object.assign({}, state.cart.find(item => item.name === name));
      if (decreased.qty > 1) {
        decreased.qty--;
        decreased.totalUsd = decreased.priceUsd * decreased.qty;
        decreased.totalEur = decreased.priceEur * decreased.qty;
        state.cart = [
          ...state.cart.filter(item => item.name !== decreased.name),
          decreased
        ];
      }
    },
    clear(state) {
      state.cart = [];
    },
    remove(state, item) {
      for (let idx in state.cart) {
        if (state.cart[idx].name === item.name) {
          state.cart.splice(idx, 1);
          return;
        }
      }
    }
  }
})
