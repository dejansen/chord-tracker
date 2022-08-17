<script setup>
import {ref, onMounted} from 'vue'
import Panel from '@/components/LargePanel.vue'
import SongsService from '@/services/SongsService.js'


const songs = ref(null)

onMounted(async ()=>{
    songs.value = (await SongsService.index()).data
    console.log(songs)
})

</script>

<template>
    <Panel title="Songs">
       <div v-for="song in songs" :key="song.id">
            {{song.title}}, {{song.artist}}, {{song.album}}
        </div>
    </Panel>
    


</template>