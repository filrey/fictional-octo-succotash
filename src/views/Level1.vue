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
        <div id="myMap"></div>
        </v-card-text>
          <img width="450px" height="300px" src="@/assets/images/map.png"/>
          <span class="location blinking">
           *
          </span>
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
          <br>
        <div class="abs-center container">
          <div class="option"><div>EASY<br>WEAK</div></div>
          <div class="option"><div>MEDIUM<br>Okay</div></div>
          <div class="option"><div>HARD<br>Ouch...</div></div>
        </div>
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
      <skill-view></skill-view>
      <exp-view></exp-view>
  <div id="orphy" class="orpheus"></div>
</div>
</template>

<script>
  //UI
  import SkillView from '@/components/UI/Skills.vue'
  import ExpView from '@/components/UI/Exp.vue'


  export default {
    components: {
      SkillView,
      ExpView
    },
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
    },
    methods: {

    },
  }
</script>

<style>
.blinking{
	animation:blinkingText 0.8s infinite;
}
@keyframes blinkingText {
	0%{		color: rgb(255, 8, 8);	}
	49%{	color: transparent;	}
	50%{	color: transparent;	}
	99%{	color:transparent;	}
	100%{	color: rgb(255, 0, 0);	}
}

.location {
  font-size: 50px;
  position:absolute;
  top:250px;
  left:250px;
  }

.container {
  display: inline;
}
.abs-center {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.option {
  left: 100px;
  height: 40px;
  width: 210px;
  margin: 10px auto;
  line-height: 36px;
  letter-spacing: 3px;
  border: 2px solid #aaa;
  color: #aaa;
  cursor: pointer;
  overflow: hidden;
}
.option:hover {
  border: 2px solid #000;
}
.option:hover div {
  color: #000;
  margin-top: -37px;
}

@keyframes play {
  100% { background-position: -1900px; }
}

.orpheus {
	position:absolute;
	top:0px;
  right:0px;
  bottom: 400px;
  left:0px;
	width:50px;
	height:50px;
	image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
  background: url('../assets/images/orpheus_idle.png');
  animation: play 0.8s steps(2) infinite;
}
</style>
