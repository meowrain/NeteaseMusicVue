<template>
  <ItemMusicTop :musics="playList"/>
  <ItemMusicList />
</template>
<script setup>
import {useRoute} from 'vue-router'
import {onMounted, reactive, ref, toRaw} from 'vue'
import ItemMusicTop from "../components/home/item/ItemMusicTop.vue";
import ItemMusicList from "../components/home/item/ItemMusicList.vue";
import {getMusicListDetail, getMusicList} from '../request/api/getMusicList.js'
let playList = ref({});
onMounted(async () => {
  let id = useRoute().query.id
  const res = await getMusicListDetail(id);
  playList.value = res.data.playlist;
  console.log('====================================');
  console.log(playList)
  console.log('====================================');
})

</script>
<style scoped>

</style>