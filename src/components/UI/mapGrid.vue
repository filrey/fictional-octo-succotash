<template>
    <div>
        <v-container>
            <v-layout row wrap v-for="j in 9" :key="j">
                <v-flex v-for="n in 10" :key="n">
                    <v-card height="100px" width="calc(100%)">
                        Row {{j}}
                        <div id="orphy" class="orpheus"></div>
                        <!-- <v-img :src="orpheus"></v-img> -->
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import orpheus from '@/assets/images/orpheus_idle.png'
export default {
    name: 'map',
        data: function () {
        return {
            orpheus: orpheus
        }
    }
}
</script>