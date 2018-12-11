<template>
<div style="display: inline-block;">
  <!-- Skills -->
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        color="teal"
        flat
        slot="activator"
      >
        <span>Skills</span>
        <v-icon>star</v-icon>
      </v-btn>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Options
        </v-card-title>

        <v-card-text>
        MAP INFORMATION
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

      <!-- map -->
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        color="teal"
        flat
        slot="activator"
      >
        <span>Map</span>
        <v-icon>map</v-icon>
      </v-btn>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Options
        </v-card-title>

        <v-card-text>
        MAP INFORMATION
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

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="teal"
        flat
      >
        <span>Options</span>
        <v-icon>settings</v-icon>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Options
        </v-card-title>

        <v-card-text>
        OPTIONS
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
