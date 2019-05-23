<template>
    <div>
        EXP: {{exp}}
        <v-progress-linear v-model="exp" color="green" height="25"></v-progress-linear>
        <v-btn color="blue" flat @click="()=> this.$store.commit('chant')">Chant</v-btn>
    </div>
</template>
<script>
export default {
    name: 'ExpBar',
    data() {
        return {

        }
    },
    computed: {
        exp() {
            return this.$store.state.player.exp;
        }
    },
}
</script>