<template>
  <div>
    Skills {{ skills }}
    <v-btn @click="()=> this.$store.commit('levelUpSkill')">Increment skill</v-btn>
  </div>
</template>
<script>
export default {
  name: "SkillView",
  data() {
    return {};
  },
  computed: {
    skills: {
      get() {
        return this.$store.state.skills;
      }
    }
  },
  methods: {}
};
</script>
