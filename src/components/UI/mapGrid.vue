<template>
  <div class="gridBG">
    <v-container>
      <v-layout row wrap v-for="j in rows" :key="j">
        <v-flex v-for="n in columns" :key="n">
          <v-card color="rgb(255, 255, 255, 0)" height="100px" width="calc(100%)">
            <!-- Row {{j}} -->
            <!-- Cell {{n}} -->
            <div v-if="currentX == j && currentY == n" id="orphy" class="orpheus"></div>
          </v-card>
        </v-flex>
      </v-layout>
      <enemy-encounter :isEncounterActive="this.isEncounterActive" :startEncounter="this.startEncounter"></enemy-encounter>
    </v-container>
  </div>
</template>

<script>
import orpheus from "@/assets/images/orpheus_idle.png";
import enemyEncounter from "@/components/UI/enemyEncounter.vue";
import step from '@/assets/sounds/Step.mp3'
import NetherPlace from "@/assets/music/Netherplace_Looping.mp3";

export default {
  name: "MapGrid",
  props: ["numOfEncounters","gridSizeX","gridSizeY"],
  components: {
    enemyEncounter
  },
  data() {
    return {
      orpheus: orpheus,
      currentX: 1,
      currentY: 1,
      isCurrentCellEncounter: '',
      rows: this.gridSizeY,
      columns: this.gridSizeX,
      encounters: this.numOfEncounters,
      isEncounterActive: false,
      bgMusic: '',
      startEncounter: false,
      encounterLocations: {
        enemyXLocation: [],
        enemyYLocation: [],
        encounterAtIndexCompleted: []
      }
    };
  },
  mounted: function() {
    var vm = this;
    this.bgMusic = new Audio(NetherPlace);
    this.bgMusic.play();
    window.addEventListener("keydown", function(event) {
      // If up arrow was pressed...
      if (event.keyCode == 37 && vm.currentY != 1 && !vm.isEncounterActive) {
        vm.currentY--;
        vm.playSound(step)
        vm.checkForEncounter()
      }
      if (event.keyCode == 38 && vm.currentX != 1 && !vm.isEncounterActive) {
        vm.currentX--;
        vm.playSound(step)
        vm.checkForEncounter()
      }
      if (event.keyCode == 39 && vm.currentY != vm.columns && !vm.isEncounterActive) {
        vm.currentY++;
        vm.playSound(step)
        vm.checkForEncounter()
      }
      if (event.keyCode == 40 && vm.currentX != vm.rows && !vm.isEncounterActive) {
        vm.currentX++;
        vm.playSound(step)
        vm.checkForEncounter()
      }
    });
  },
  computed: {
    numOfCells() {
      return this.rows * this.columns;
    },
    indexMatchX() {
      return this.encounterLocations.enemyXLocation.indexOf(this.currentX)
    },
    indexMatchY() {
      return this.encounterLocations.enemyYLocation.indexOf(this.currentY)
    }
  },
  created() {
    this.populateEncounterLocations();
  },
  methods: {
    stopMusic() {
      this.bgMusic.pause()
      this.bgMusic.currentTime = 0;
    },
    playMusic() {
      this.bgMusic.play()
    },
    playSound(sound) {
      if(sound) {
        var audio = new Audio(sound)
        audio.play()
      }
    },
    markCurrentIndexEncounter(){
      this.encounterLocations.encounterAtIndexCompleted[this.indexMatchX] = true
    },
    closeDialog(){
      this.playMusic()
      this.isEncounterActive = false
    },
    checkForEncounter() {
      if (this.indexMatchX == this.indexMatchY && !this.encounterLocations.encounterAtIndexCompleted[this.indexMatchX]) {
        this.encounterLocations.encounterAtIndexCompleted[this.indexMatchX] = true
        this.stopMusic()
        this.isEncounterActive = true
        this.startEncounter = !this.startEncounter
      }
    },
    populateEncounterLocations() {
      this.encounterLocations.enemyXLocation = this.randomArrayNoRepeats(
        this.gridSizeX
      );
      this.encounterLocations.enemyYLocation = this.randomArrayNoRepeats(
        this.gridSizeY
      );
      this.encounterLocations.encounterAtIndexCompleted = this.falseArrayInit(this.gridSizeY);
    },
    randomArrayNoRepeats(arraySize) {
      for (var a = [], i = 0; i < arraySize; ++i) a[i] = i;

      function shuffle(array) {
        var tmp,
          current,
          top = array.length;
        if (top)
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        return array;
      }

      a = shuffle(a);
      return a;
    },
    falseArrayInit(arraySize) {
      var a = new Array(arraySize);

      for (var i = 0; i < a.length; ++i) { a[i] = false; }
      
      return a
    }
  }
};
</script>

<style lang="css">
.gridBG {
  background-image: url("../../assets/images/map2.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>