<script setup>
import {reactive, ref, onMounted} from 'vue'
import Panel from '@/components/LargePanel.vue'
import SongsService from '@/services/SongsService.js'

const newSong = reactive({
    title: "some title",
    artist: null,
    genre: null,
    album: null,
    albumImageUrl: null,
    youtubeId: null,
    lyrics: null,
    chords: null,
})


async function create() {
    //call API

    const song = JSON.parse(JSON.stringify(newSong));
    try {
        await SongsService.post(song)
    } catch(err) {
        console.log(err)
    }
    // console.log("save button clicked")
}


</script>

<template>
    <div class="columns">
        <div class="column is-5">
            <Panel title="Song Metadata">
            <div class="field">
                    <label for="title" class="label">Title</label>
                    <div class="control">
                        <input
                            type="text"
                            name="title"
                            v-model="newSong.title"
                            class="input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="artist" class="label">Artist</label>
                    <div class="control">
                        <input
                            type="text"
                            name="artist"
                            v-model="newSong.artist"
                            class="input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="genre" class="label">Genre</label>
                    <div class="control">
                        <input
                            type="text"
                            name="genre"
                            v-model="newSong.genre"
                            class="input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="album" class="label">Album</label>
                    <div class="control">
                        <input
                            type="text"
                            name="album"
                            v-model="newSong.album"
                            class="input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="albumImageUrl" class="label">Album Image Url</label>
                    <div class="control">
                        <input
                            type="text"
                            name="albumImageUrl"
                            v-model="newSong.albumImageUrl"
                            class="input"
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="youtubeId" class="label">Youtube Id</label>
                    <div class="control">
                        <input
                            type="text"
                            name="youtubeId"
                            v-model="newSong.youtubeId"
                            class="input"
                        />
                    </div>
                </div>
            </Panel>
        </div>
        <div class="column is-7">
            <Panel title="Song Structure">
                <div class="field">
                    <label for="youtubeId" class="label">Lyrics</label>
                    <div class="control">
                        <textarea
                            name="lyrics"
                            v-model="newSong.lyrics"
                            class="textarea is-medium"
                            rows=6
                        />
                    </div>
                </div>
                <div class="field">
                    <label for="chords" class="label">Chords</label>
                    <div class="control">
                        <textarea
                            name="chords"
                            v-model="newSong.chords"
                            class="textarea is-medium"
                            rows=6
                        />
                    </div>
                </div>
                <div class="field">
                <div class="control">
                    <button @click.prevent="create" class="button is-info">
                        Save
                    </button>
                </div>
            </div>
            </Panel>
        </div>
    </div>
</template>
