<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <div id="orphy" class="orpheus"></div>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Orpheus</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" @click>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <exp></exp>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <hp-mp></hp-mp>
        <!-- <skills></skills> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import orpheus from "@/assets/images/orpheus_idle.png";
import Exp from "@/components/UI/Exp.vue";
import HpMp from "@/components/UI/HpMp.vue";
import UIButton from "@/assets/sounds/UI_Quirky21.mp3";
// import Skills from '@/components/UI/Skills.vue'

export default {
  name: "drawer",
  components: {
    Exp,
    HpMp
    // Skills
  },
  data() {
    return {
      orpheus: orpheus,
      drawer: false,
      items: [
        { title: "Items", icon: "dashboard" },
        { title: "Skills", icon: "star" }
      ]
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },
  mounted: function() {
    var vm = this;
    window.addEventListener("keydown", function(event) {
      // If up arrow was pressed...
      if (event.keyCode == 27) {
        vm.playSound(UIButton)
        vm.drawer = !vm.drawer;
      }
    });
  }
};
</script>