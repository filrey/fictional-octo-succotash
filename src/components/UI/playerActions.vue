<template>
  <div>
    <v-navigation-drawer floating permanent stateless value="true">
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
            <v-icon>input</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-btn @click="()=> this.$emit('playerAction_Escape')" outline color="indigo">Escape</v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-btn @click="()=> this.$emit('playerAction_Magic')" outline color="indigo">Magic</v-btn>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {};
</script>