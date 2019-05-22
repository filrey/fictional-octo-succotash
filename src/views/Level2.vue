<template>
    <div>
        <drawer></drawer>
        <map-grid :numEncounters="numOfEncounters"></map-grid>
    </div>
</template>
<script>
  import MapGrid from '@/components/UI/mapGrid.vue'
  import Drawer from '@/components/UI/drawer.vue'
  import enemyEncounter from '@/components/UI/enemyEncounter.vue'

export default {
    name: 'Level-2',
    components: {
      MapGrid,
      Drawer,
      enemyEncounter
    },
    data () {
      return {
        numOfEncounters: 10,
        gridSizeX: 10,
        gridSizeY: 9,
        isEncounterActive: true,
        encounterLocations: {
          enemyXLocation:[],
          enemyYLocation:[]
        }
      }
    },
    created() {
      this.populateEncounterLocations();
    },
    methods: {
      populateEncounterLocations() {
        this.encounterLocations.enemyXLocation = this.randomArrayNoRepeats(this.gridSizeX);
        this.encounterLocations.enemyYLocation = this.randomArrayNoRepeats(this.gridSizeY);
      },
      randomArrayNoRepeats(arraySize) {
        for (var a=[],i=0;i<arraySize;++i) a[i]=i;

        function shuffle(array) {
          var tmp, current, top = array.length;
          if(top) while(--top) {
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
    },
}
</script>
