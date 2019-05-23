<template>
    <div style="padding:10px;">
        EXP: {{exp}}
        <v-progress-linear v-model="exp" color="green" height="25"></v-progress-linear>
        <v-btn color="blue" flat @click="()=> this.chant()">Chant</v-btn>
    </div>
</template>
<script>
export default {
    name: 'ExpBar',
    data() {
        return {
            snackbar: false,
            y: "top",
            x: null,
            mode: "",
            timeout: 6000,
            text: "chanting.."
        }
    },
    methods: {
        chant() {
            this.snackbar = true;
            this.y = "top";
            this.text = "You are chanting!"
             var success = Math.random() >= 0.5;
            if (success) {
                var mp = Math.floor(Math.random() * 10) + 10;
                this.$store.state.player.mp += mp;
            }
            if (this.$store.state.player.mp > 100) this.$store.state.player.mp = 100;
            // enemy
            var enemy_attack = Math.random() >= 0.5;
            var enemy_damage = Math.floor(Math.random() * 10);
            var damage = Math.floor(Math.random() * 16);
            var damage_bonus = Math.floor(Math.random() * 8);
            this.enemyHp-=damage;
            // determine if enemy attack hits
            if (enemy_attack) {
                this.$store.state.player.hp -= enemy_damage + damage_bonus;
            }
        }
    },
    computed: {
        exp() {
            return this.$store.state.player.exp;
        }
    },
}
</script>