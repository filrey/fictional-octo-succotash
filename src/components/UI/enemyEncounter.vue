<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      <v-icon color="white">center_focus_strong</v-icon>{{text}}
      <!-- <v-btn color="pink" flat @click="snackbar = false">Close</v-btn> -->
    </v-snackbar>
    <v-dialog v-model="this.toggleDialog" width="80%">
      <v-card class="gridB encounterBoxHeight">
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
                  @playerAction_Attack="playerAction_Attack(0, true)"
                  @playerAction_Escape="playerAction_Escape"
                  @playerAction_Magic="playerAction_Magic"
                ></player-actions>
              </v-flex>
              <v-flex xs3>
                <hp-mp></hp-mp>
              </v-flex>
              <v-flex xs3>
                <exp></exp>
              </v-flex>
              <v-flex xs3 style="padding:10px;">
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
import howl from '@/assets/sounds/howl.mp3'

export default {
  name: "enemyEncounter",
  components: {
    HpMp,
    Exp,
    playerActions,
    howl
  },
  props: ["isEncounterActive"],
  data() {
    return {
      dialog: this.isEncounterActive,
      orpheus: orpheus,
      enemyHp: 100,
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "Orpheus Attacks!"
    };
  },
  methods: {
    enemyAction_Attack() {
      var enemy_attack = Math.random() >= 0.5;
      var enemy_damage = Math.floor(Math.random() * 16);
      if (enemy_attack) {
        if (enemy_damage > 10){
          this.y = "bottom";
          this.text = "You've been critically wounded!"
        }
        this.$store.state.player.hp -= enemy_damage;
        if (this.enemyHp < 0 || this.$store.state.player.hp < 0) {
          this.$store.state.player.exp = Math.floor(Math.random() * 20) + 5;
          this.dialog = false;
          this.$emit("update:isEncounterActive", false);
          this.music.play();
        }
      }
    },
    cast_fire() {
      this.snackbar = true;
      this.y = "top";
      var fire = ['Fire', 'Fira', 'Firaga'];
      var chance_fire = fire[Math.floor(Math.random() * fire.length)];
       switch(chance_fire) {
        case "Fire":
          this.text = "You casted Fire!";
          this.playerAction_Attack(4, false);
          break;
        case "Fira":
          this.text = "You casted Fira!";
          this.playerAction_Attack(8, false);
        case "Firaga":
          this.text = "You casted Firaga!";
          this.playerAction_Attack(16, false);
      }
    },
    cast_thunder() {
      this.snackbar = true;
      this.y = "top";
      var thunder = ['Thunder', 'Thundara', 'Thundaga'];
      var chance_thunder = thunder[Math.floor(Math.random() * thunder.length)];
      switch(chance_thunder) {
        case "Thunder":
          this.text = "You casted Thunder!";
          this.playerAction_Attack(4,false);
          break;
        case "Fira":
          this.text = "You casted Thundara!";
          this.playerAction_Attack(8, false);
        case "Firaga":
          this.text = "You casted Thundaga!";
          this.playerAction_Attack(16, false);
      }
    },
    cast_other() {
      this.snackbar = true;
      this.y = "top";
      var other = ['Meteor', 'Bio', 'Ultima'];
      var chance_other = other[Math.floor(Math.random() * other.length)];
      switch(chance_other) {
        case "Meteor":
          this.text = "You casted Thunder!";
          this.playerAction_Attack(10, false);
          break;
        case "Bio":
          this.text = "You casted Bio!";
          this.playerAction_Attack(8, false);
        case "Ultima":
          this.text = "You casted Ultima!";
          this.playerAction_Attack(20, false);
      }
    },
    spell_or_attack(active) {
      if (active) {
        var attacks = ['Fire', 'Thunder', 'Other'];
        var chance_attack = attacks[Math.floor(Math.random() * attacks.length)];
        switch(chance_attack) {
          case "Fire":
            this.cast_fire(4, false);
            break;
          case "Thunder":
            this.cast_thunder(8, false);
            break;
          case "Other":
            this.cast_other(16, false);
            break;
        }
      }
    },
    playerAction_Attack(bonus, active) {
      this.snackbar = true;
      bonus = 0;
      if (this.isEncounterActive && this.enemyHp > 0 && this.$store.state.player.hp > 0) {
        this.spell_or_attack(active);
        var damage = Math.floor(Math.random() * 16);
        this.enemyHp -= damage + bonus;
        this.enemyAction_Attack();
      } else {
        this.dialog = false;
        this.$emit("update:isEncounterActive", false);
      }
    },
    playerAction_Escape() {
      this.snackbar = true;
      var escape = Math.random() >= 0.5;
      if (escape) {
        this.y = "top";
        this.text = "You have successfully escaped!!!"
        this.dialog = false;
        this.$emit("update:isEncounterActive", false);
      } else {
        this.y = "bottom"
        this.text = "You failed to escape!!"
        this.enemyAction_Attack();
      }
    },
    playerAction_Magic() {
      this.snackbar = true;
      this.y = "top";
      if (this.$store.state.player.mp > 0) {
        var healing_spells = ['Nothing', 'Cure', 'Cura', 'Curaga'];
        var chance_spell = healing_spells[Math.floor(Math.random() * healing_spells.length)];
        var heal = Math.floor(Math.random() * 10);
        switch(chance_spell) {
          case "Nothing":
            this.text = "SPELL FAILED!";
            break;
          case "Cure":
            this.text = "You casted cure!";
            this.$store.state.player.hp += heal + 4;
            this.$store.state.player.mp -= heal + 4;
            break;
          case "Cura":
            this.text = "You casted cura!";
            this.$store.state.player.hp += heal + 8;
            this.$store.state.player.mp -= heal + 8;
          case "Curaga":
            this.text = "You casted curaga!";
            this.$store.state.player.hp += heal + 16;
            this.$store.state.player.mp -= heal + 16;
        }
      }
      if (this.$store.state.player.hp >= 100) {
        this.$store.state.player.hp = 100;
      }
    }
  },
  computed: {
    toggleDialog(){
      return this.isEncounterActive
    }
  },
};
</script>

<style lang="css">
.gridB {
  background-image: url("../../assets/images/environment_forestbackground.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.encounterBoxHeight {
  height: 650px;
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
  top: 485px;
}
</style>