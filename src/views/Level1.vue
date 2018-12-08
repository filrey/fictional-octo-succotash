<template>
  <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="Skills"
      >
        <span>Skills</span>
        <v-icon>star</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="Map"
      >
        <span>Map</span>
        <v-icon>map</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="Options"
      >
        <span>Options</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>
