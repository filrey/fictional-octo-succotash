<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-btn slot="activator" color="teal" dark>Skills
        <v-icon>star</v-icon>
      </v-btn>

      <v-card>
        <!-- <v-card-title class="headline grey lighten-2" primary-title>Skills</v-card-title> -->

        <!-- Dialog content -->
        <v-tabs color="cyan" dark slider-color="yellow">
          <v-tab v-for="skill in skills" :key="skill.id" ripple>{{skill.name}}</v-tab>
          <v-tab-item v-for="skill in skills" :key="skill.id">
            <v-card flat>
              <v-card-text> Level: {{ skill.level }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>

        Skills {{ skills }}
        <v-btn @click="()=> this.$store.commit('levelUpSkill')">Increment skill</v-btn>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "SkillView",
  data() {
    return {
      dialog: false
    };
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
