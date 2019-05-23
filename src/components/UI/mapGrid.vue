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
      <enemy-encounter :isEncounterActive="isEncounterActive"></enemy-encounter>
    </v-container>
  </div>
</template>

<script>
import orpheus from "@/assets/images/orpheus_idle.png";
import enemyEncounter from "@/components/UI/enemyEncounter.vue";
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
      rows: this.gridSizeY,
      columns: this.gridSizeX,
      encounters: this.numOfEncounters,
      isEncounterActive: true,
      encounterLocations: {
        enemyXLocation: [],
        enemyYLocation: []
      }
    };
  },
  mounted: function() {
    var vm = this;
    window.addEventListener("keydown", function(event) {
      // If up arrow was pressed...
      if (event.keyCode == 37 && vm.currentY != 1) {
        vm.currentY--;
      }
      if (event.keyCode == 38 && vm.currentX != 1) {
        vm.currentX--;
      }
      if (event.keyCode == 39 && vm.currentY != vm.columns) {
        vm.currentY++;
      }
      if (event.keyCode == 40 && vm.currentX != vm.rows) {
        vm.currentX++;
      }
    });
  },
  computed: {
    numOfCells() {
      return this.rows * this.columns;
    }
  },
  created() {
    this.populateEncounterLocations();
  },
  methods: {
    populateEncounterLocations() {
      this.encounterLocations.enemyXLocation = this.randomArrayNoRepeats(
        this.gridSizeX
      );
      this.encounterLocations.enemyYLocation = this.randomArrayNoRepeats(
        this.gridSizeY
      );
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