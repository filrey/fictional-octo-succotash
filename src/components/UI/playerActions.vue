<template>
  <div>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>center_focus_strong</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn @click="()=> this.$emit('playerAction_Attack')" outline color="indigo">Attack</v-btn>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>local_hospital</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn @click="()=> this.$emit('playerAction_Magic')" outline color="indigo">Heal</v-btn>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn @click="()=> this.$emit('playerAction_Escape')" outline color="indigo">Escape</v-btn>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
  </div>
</template>

<script>
export default {};
</script>