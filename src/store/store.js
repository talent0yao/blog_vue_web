import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    user:null,
    blog:null,
    id:0
  },
  getters:{
    getUser:state => {
      return state.user
    },
    getBlog:state => {
      return state.blog
    },
    getId:state => {
      return state.id
    }
  },
  mutations:{
    setUser:(state,user) =>{
      state.user = user
    },
    setBlog:(state,blog) =>{
      state.blog = blog
    },
    setId:(state,id) =>{
      state.id = id
    }
  },
  plugins:[PersistedState({
      storage: window.sessionStorage
  })]
});
