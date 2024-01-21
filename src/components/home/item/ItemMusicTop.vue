<template>
  <div class="itemMusicTop" v-if="props">
    <img :src="props.musics.coverImgUrl" alt="" class="bgimg"/>
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-cat"></use>
      </svg>
      <span>歌单</span>
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

  <div class="container">
    <img :src="props.musics.coverImgUrl" alt="" class="avatar"/>
    <div class="text"><p class="title">{{ props.musics.name }}</p>
      <p>{{ props.musics.tags }}</p>
      <div class="creator">
<!--        <img :src="props.musics.creator.avatarUrl" alt="" class="creator_avatar"/>-->
<!--        <span class="creator_nickname">{{ props.musics.creator.nickname }}</span>-->
      </div>
      <p class="playCount">播放量:{{props.musics.playCount}}</p>
    </div>

  </div>

</template>
<script setup>
import {defineProps, watch} from 'vue';

let props = defineProps({
  musics: Object,
})


</script>
<style scoped>
.itemMusicTop {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.bgimg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  z-index: -1;
  filter: blur(5px);
}

.itemLeft, .itemRight {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 .2rem;
}

.itemLeft, .itemRight span {
  font-size: 20px;
  color: white;
}

.itemRight .icon {
  fill: #ffffff;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 10%;
  margin-top: .7rem;
  margin-left: .3rem;
}

.text {
  display: flex;
  flex-direction: column;
  color: #ffff;
  margin-top: .8rem;
  margin-left: 0.3rem;
}

.text .title {
  margin: 0;
  font-size: .36rem;
}

.creator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.creator .creator_avatar {
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  margin-right: .2rem;
}

.creator .creator_nickname {
  color: rgb(151, 151, 155);
}
.playCount {
  color: rgb(151, 151, 155);
}
</style>