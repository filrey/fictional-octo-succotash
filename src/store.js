import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: {
      fire : {name: 'fire', level: 0},
      water : {name: 'water', level: 0},
      thunder: {name: 'thunder', level: 0},
      void: {name: 'void', level: 0},
      music: {name: 'music', level: 0},
    },
    player: {
      name: 'Orpheous',
      hp : 100,
      mp : 100,
      exp: 50,
    }
  },
  mutations: {
    //SKILLS
    levelUpSkill(state) {
      // NEED TO DO - allow level ups based on skill 
      state.skills.fire.level++;
    },
    //EXP
    randExp(state){
      state.player.exp = Math.floor(Math.random() * 100); 
    }

  },
  actions: {

  },
  getters: {
    skills: state => state.skills,
    player: state => state.player
  }
})
