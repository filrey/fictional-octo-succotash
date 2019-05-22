<template>
    <div>
        <drawer></drawer>
        <map-grid :numOfEncounters="encounters"></map-grid>
        <enemy-encounter :isEncounterActive="isEncounterActive"></enemy-encounter>
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
        encounters: 10,
        isEncounterActive: true
      }
    }
}
</script>
