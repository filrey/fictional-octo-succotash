<template>
    <div>
    <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="50"
        color="red"
      >
        HP: 50
      </v-progress-circular>
            <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="75"
        color="blue"
      >
        MP: 75
      </v-progress-circular>
    </div>
</template>
<script>
export default {
    
}
</script>