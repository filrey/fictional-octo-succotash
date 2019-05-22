<template>
  <div>
    <v-progress-circular :rotate="360" :size="100" :width="15" :value="hp" color="red">HP: {{hp}}</v-progress-circular>
    <v-progress-circular :rotate="360" :size="100" :width="15" :value="mp" color="blue">MP: {{mp}}</v-progress-circular>
  </div>
</template>
<script>
export default {
  computed: {
    hp() {
      return this.$store.state.player.hp;
    },
    mp() {
      return this.$store.state.player.mp;
    }
  }
};
</script>