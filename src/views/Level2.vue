<template>
    <div>
        <drawer></drawer>
        <map-grid :numEncounters="numOfEncounters" :gridSizeX="gridSizeX" :gridSizeY="gridSizeY"></map-grid>
    </div>
</template>
<script>
  import MapGrid from '@/components/UI/mapGrid.vue'
  import Drawer from '@/components/UI/drawer.vue'
  import oldcrypt from '@/assets/music/oldcrypt.mp3'

export default {
    name: 'Level-2',
    components: {
      MapGrid,
      Drawer,
      oldcrypt
    },
    data () {
      return {
        numOfEncounters: 10,
        gridSizeX: 10,
        gridSizeY: 9,
        isEncounterActive: true,
        music: oldcrypt
      }
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
