<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mobile-break-point="10240"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content class="homeBG">
      <v-container>
        <v-layout  align-center justify-center>
          <v-card class="opacity50" width="150vh">
            <v-card-title primary-title ><v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon><h1>Fictional-Octo-Succotash</h1></v-card-title>
              <v-card-actions>
                <router-link to="/Level1"><v-btn color="green">Play</v-btn></router-link>
              </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import Title from '@/views/Title.vue'
import oldcrypt from '@/assets/music/oldcrypt.mp3'

export default {
  name: 'home',
  components: {

  },
  data: () => ({
    drawer: null
  }),
  props: {
  source: String
  },
  mounted() {
    var bgMusic = new Audio(oldcrypt)
    // This function loops the background music after it ends
    bgMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    //Play background music on page load

    // bgMusic.play()
  },

}
</script>
<style lang="scss">

  a {
    text-decoration: none;
  }
  .homeBG{
    background-image: url('../assets/images/environment_forestbackground.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
  }
  .fillHeight{
    height: 90vh;
  }

  .title{
    width: 100vh;
    max-height: 85px;
  }
  .opacity50{
    opacity: .8;
  }
</style>

