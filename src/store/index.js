import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  //Le state correspond aux donnée incluse dans le store de VueX
  state: { 
    totalFromVueX: 0
  },

  //Getter même rôle que computed, mais pour store de VueX
  getters:{
    doubleDuTotal(state){
      return state.totalFromVueX * 2;
    }
  },

  //Mutation sera déclanché par une fonction au niveau du composant
  mutations: {
    setTotalFromVueX(state, nouvelle_valeur){
      state.totalFromVueX = nouvelle_valeur
    }  
  },
  actions: {
  },
  modules: {
  }
})


