<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
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
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-space-around justify-center column fill-height>
          <v-flex >
            <v-card>
              <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Fictional-Octo-Succotash</h3>
                  <div class="text-xs-left">The story of Orpheous</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn color="green">Play</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
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
    bgMusic.play()
  },

}
</script>
