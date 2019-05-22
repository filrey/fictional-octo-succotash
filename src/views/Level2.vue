<template>
    <div>
        <drawer></drawer>
        <map-grid :numEncounters="numOfEncounters" :gridSizeX="gridSizeX" :gridSizeY="gridSizeY"></map-grid>
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
        isEncounterActive: true
      }
    }
}
</script>
