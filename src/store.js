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
    // increase MP
    chant(state){
      var success = Math.random() >= 0.5;
      if (success) {
        var mp = Math.floor(Math.random() * 10) + 10;
        state.player.mp += mp;
      }
      if (state.player.mp > 100) state.player.mp = 100;
      // enemy
      var enemy_attack = Math.random() >= 0.5;
      var enemy_damage = Math.floor(Math.random() * 10);
      var damage = Math.floor(Math.random() * 16);
      var damage_bonus = Math.floor(Math.random() * 8);
      this.enemyHp-=damage;
      // determine if enemy attack hits
      if (enemy_attack) {
        state.player.hp -= enemy_damage + damage_bonus;
      }
    }
  },
  actions: {

  },
  getters: {
    skills: state => state.skills,
    player: state => state.player
  }
})
