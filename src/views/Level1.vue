<template>
<div style="display: inline-block;">
  <!-- Skills -->
    <v-dialog
      v-model="skills"
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
        Skills
        </v-card-title>

        <v-card-text>
      <template>
  <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    activatable
    item-key="name"
    open-on-click
  >
    <template slot="prepend" slot-scope="{ item, open, leaf }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="skills = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <!-- map -->
    <v-dialog
      v-model="map"
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
         MAP
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
            @click="map = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="options"
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
          Settings
        </v-card-title>

        <v-card-text>
        Settings menu
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="options = false"
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
        skills: false,
        options: false,
        map: false,
        open: ['Skill-3'],
        files: {
          fire: 'fire type',
          water: 'water type',
          earth: 'earth type',
          void: 'void type',
        },
      tree: [],
      items: [
        {
          name: 'Skill-1',
          type: 'fire'
        },
        {
          name: 'Fire Skills',
          children: [
            {
              name: 'meteor',
              type: 'fire',
            },
            {
              name: 'fire 2',
              type: 'fire',
            },
            {
              name: 'fire 3',
              type: 'fire'
            }
          ]
        },
        {
          name: 'Void Skills',
          children: [
            {
              name: 'nightmare',
              type: 'void',
            },
            {
              name: 'dream',
              type: 'void'
            },
            {
              name: 'skill-5',
              type: 'void'
            }
          ]
        },
      ]
      }
    }
  }
</script>
