import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: {
      fire : 0,
      water : 0,
      thunder: 0,
      void: 0,
      music: 0,
    },
    player: {
      hp : 100,
      mp : 100,
      exp: 0,
    }
  },
  mutations: {
    levelUpSkill(state) {
      // NEED TO DO - allow level ups based on skill 
      state.skills.fire++;
    }

  },
  actions: {

  },
  getters: {
    skills: state => state.skills,
    player: state => state.player
  }
})
