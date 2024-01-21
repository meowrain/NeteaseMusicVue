<template>
  <div class="items">
    <p>播放全部 ({{songsLength}})</p>
    <van-row v-for="(music,index) in datas.songs" :key="music" justify="space-between" class="list">
      <van-col span="2">{{ index + 1 }}</van-col>
      <van-col span="3">
        <van-image round  fit="contain" :src="music.al.picUrl" class="musicImg" >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-col>
      <van-col span="15">{{ music.name }}</van-col>
      <van-col span="2" v-show="music.mv !== 0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-play-fill"></use>
        </svg>
      </van-col>
      <van-col span="2" v-show="music.mv === 0">
      </van-col>
      <van-col span="2">...</van-col>
    </van-row>
  </div>
</template>

<script setup>
import {defineProps, reactive, ref} from 'vue';
import { onMounted } from 'vue';
import { getMusicList } from '../../../request/api/getMusicList.js';
import { useRoute } from 'vue-router';

let datas = reactive({});
let songsLength = ref(0)
onMounted(async () => {
  const id = useRoute().query.id;
  const response = await getMusicList(id);
  datas.songs = response.data.songs; // Directly modify the property of the reactive object
  songsLength.value = datas.songs.length;
  console.log(datas.songs);
});
</script>

<style scoped>
.items {
  margin-top: 1rem;

}
.list {
  display:flex;
  justify-content: center;
  align-items: center;
  height: 1rem;
}
.musicImg{
  margin-right:.2rem;
}
</style>
