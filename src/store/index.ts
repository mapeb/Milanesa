import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pedidos: [{}],
    comidas: [{}],
  },
  mutations: {
    agregarPedido(state,pedido) {
      state.pedidos.push(pedido);
    },
    agregarComida(state, comida) {
      state.comidas.push(comida);
    }
  }
});