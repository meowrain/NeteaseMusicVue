<template>
  <ItemMusicTop v-if="playListDetail" :playListDetail="playListDetail.data.playlist" />
  <ItemMusicList/>
</template>

<script setup>
import {useRoute} from 'vue-router';
import ItemMusicTop from "../components/home/item/ItemMusicTop.vue";
import ItemMusicList from "../components/home/item/ItemMusicList.vue";
import {getMusicListDetail} from '../request/api/getMusicList.js';
import {onMounted, ref} from "vue";

let id = useRoute().query.id;
const playListDetail = ref(null);
onMounted(async () => {
  playListDetail.value = await getMusicListDetail(id);
});
</script>

<style scoped>

</style>
