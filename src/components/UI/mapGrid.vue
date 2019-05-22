<template>
    <div class="gridBG">
        <v-container>
            <v-layout row wrap v-for="j in rows" :key="j">
                <v-flex v-for="n in columns" :key="n">
                    <v-card color="rgb(255, 255, 255, 0.5)" height="100px" width="calc(100%)">
                        Row {{j}}
                        Cell {{n}}
                        <div v-if="currentX == j && currentY == n" id="orphy" class="orpheus"></div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import orpheus from '@/assets/images/orpheus_idle.png'
export default {
    name: 'MapGrid',
    props: ['numOfEncounters'],
    data() {
        return {
            orpheus: orpheus,
            currentX: 1,
            currentY: 1,
            rows: 9,
            columns: 10,
            encounters: this.numOfEncounters
        }
    },
    mounted: function () {
    var vm = this;
    window.addEventListener('keydown', function (event) {
      // If up arrow was pressed...
      if (event.keyCode == 37 && vm.currentY != 1) {
        vm.currentY--
      }
      if (event.keyCode == 38 && vm.currentX != 1) {
        vm.currentX--
      }
      if (event.keyCode == 39 && vm.currentY != vm.columns) {
        vm.currentY++
      }
      if (event.keyCode == 40 && vm.currentX != vm.rows) {
        vm.currentX++
      }
    });
  },
  computed: {
    numOfCells() {
      return this.rows * this.columns;
    },
  }
}
</script>

<style lang="css">
    .gridBG{
     background-image: url('../../assets/images/environment_forestbackground.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
     background-size: cover;
    }
</style>