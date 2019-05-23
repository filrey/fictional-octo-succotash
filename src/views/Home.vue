<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" mobile-break-point="10240" clipped fixed app>
      <v-list dense>
        <v-list-tile @click="this.playMusic">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Play Music</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="this.stopMusic">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Stop Music</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content class="homeBG">
      <v-container>
        <v-layout align-center justify-center>
          <v-card class="opacity50" width="150vh">
            <v-card-title primary-title>
              <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <h1>Fictional-Octo-Succotash</h1>
            </v-card-title>
            <v-card-actions>
              <router-link to="/Level2">
                <v-btn @click="this.stopMusic" color="green">Play</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import oldcrypt from "@/assets/music/oldcrypt.mp3";
import mountain from "@/assets/music/Our-Mountain_v003_Looping.mp3";

export default {
  name: "home",
  components: {},
  data: () => ({
    drawer: null,
    audio: ''
  }),
  props: {
    source: String
  },
  mounted() {
    this.audio = new Audio(mountain)
    this.audio.play()
  },
  methods: {
    stopMusic() {
      this.audio.pause()
      this.audio.currentTime = 0;
    },
    playMusic() {
      this.audio.play()
    }
  }
};
</script>
<style lang="scss">
a {
  text-decoration: none;
}
.homeBG {
  background-image: url("../assets/images/environment_forestbackground.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.fillHeight {
  height: 90vh;
}

.title {
  width: 100vh;
  max-height: 85px;
}
.opacity50 {
  opacity: 0.8;
}
</style>

