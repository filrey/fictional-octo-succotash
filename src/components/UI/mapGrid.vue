<template>
    <div>
        <v-container>
            <v-layout row wrap v-for="j in 9" :key="j">
                <v-flex v-for="n in 10" :key="n">
                    <v-card height="100px" width="calc(100%)">
                        Row {{j}}
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'map',
}
</script>