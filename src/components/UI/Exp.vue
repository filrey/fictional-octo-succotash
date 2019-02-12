<template>
    <div>
        Current EXP: {{exp}}
        <v-progress-linear v-model="exp" color="green" height="25"></v-progress-linear>
        <v-btn color="green" flat @click="()=> this.$store.commit('randExp')">Random Exp</v-btn>
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