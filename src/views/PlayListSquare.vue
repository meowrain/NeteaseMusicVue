<template>
  <div class="playlist">
    <div class="itemMusicTop" >
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-cat"></use>
        </svg>
        <span>歌单广场</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-list"></use>
        </svg>
      </div>
    </div>
    <div class="songs">
      <div v-for="(song,index) in datas" :key="index" class="song">
        <van-image :src="song.coverImgUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="song-title">{{song.name}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getMusicSquare} from '../request/api/getMusicList.js'
let datas = ref();

onMounted(async()=>{
  try {
    const response = await getMusicSquare();
    datas.value = response.data.playlists;
    console.log(datas.value);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
})
</script>

<style scoped>
.playlist {
  display: grid;
  grid-template-rows: auto 1fr; /* Header takes auto size, songs take the remaining space */
  gap: 1rem; /* Gap between header and songs */
}


.songs {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns, adjust as needed */
  gap: 1rem; /* Gap between song items */
  padding: 0 .3rem 0 .3rem;
}

.song {
  display: flex;
  flex-direction: column;
}
.itemMusicTop {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

</style>