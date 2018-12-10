<template>
<div>
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

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Modal
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Who is Orpheus?
        </v-card-title>

        <v-card-text>
          A couragous young man equiped with the harp of hearts destined for a legendary journey. <br><br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</div>
  
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
        dialog: false
      }
    }
  }
</script>
