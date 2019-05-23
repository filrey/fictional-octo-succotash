<template>
  <div>
    <v-dialog v-model="dialog" width="80%">
      <v-card class="gridBG encounterBoxHeight">
        <!-- <v-card-title class="headline grey lighten-2" primary-title>Enemy Encounter</v-card-title> -->

        <!-- <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text> -->
        <div>
          <img class="avatarOne" src="@/assets/images/orpheus.png" alt="avatar">
          <!-- <img class="avatarTwo" src="@/assets/images/enemy6.png" alt="avatar"> -->
          <img class="avatarThree" src="@/assets/images/enemy1.png" alt="avatar">
          <!-- <img class="avatarFour" src="@/assets/images/enemy1.png" alt="avatar"> -->
        </div>

        <v-container>
          <v-card class="playerDashboard">
            <v-layout row wrap>
              <v-flex xs3>
                <player-actions
                  @playerAction_Attack="playerAction_Attack"
                  @playerAction_Escape="playerAction_Escape"
                ></player-actions>
              </v-flex>
              <v-flex xs3>
                <hp-mp></hp-mp>
              </v-flex>
              <v-flex xs3>
                <exp></exp>
              </v-flex>
              <v-flex xs3>
                Enemy: {{enemyHp}}
                <v-progress-linear v-model="enemyHp" color="red" height="25"></v-progress-linear>
              </v-flex>
            </v-layout>
          </v-card>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" flat @click="dialog = false">I accept</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import orpheus from "@/assets/images/orpheus_idle.png";
import HpMp from "@/components/UI/HpMp.vue";
import Exp from "@/components/UI/Exp.vue";
import playerActions from "@/components/UI/playerActions.vue";
export default {
  name: "enemyEncounter",
  components: {
    HpMp,
    Exp,
    playerActions
  },
  props: ["isEncounterActive"],
  data() {
    return {
      dialog: this.isEncounterActive,
      orpheus: orpheus,
      enemyHp: 100
    };
  },
  methods: {
    playerAction_Attack() {
      // alert("player attack!");
      this.enemyHp-=10;
    },
    playerAction_Escape() {
      alert("player escape!");
    }
  }
};
</script>

<style lang="css">
.gridBG {
  background-image: url("../../assets/images/environment_forestbackground.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.encounterBoxHeight {
  height: 600px;
}

.avatarOne {
  position: absolute;
  left: 50px;
  top: 200px;
  height: 110px;
}

.avatarTwo {
  position: absolute;
  right: 50px;
  top: 100px;
  height: 110px;
}

.avatarThree {
  position: absolute;
  right: 50px;
  top: 200px;
  height: 110px;
}

.avatarFour {
  position: absolute;
  right: 50px;
  top: 300px;
  height: 110px;
}

.playerDashboard {
  position: absolute;
  top: 467px;
}
</style>