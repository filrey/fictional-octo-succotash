<template>
    <div>
        <drawer></drawer>
        <map-grid></map-grid>
    </div>
</template>
<script>
  import MapGrid from '@/components/UI/mapGrid.vue'
  import Drawer from '@/components/UI/drawer.vue'


export default {
    name: 'Level-2',
    components: {
      MapGrid,
      Drawer
    },
}
</script>
