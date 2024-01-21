<template>
  <div class="itemMusicTop" >
    <img :src="playListDetail.coverImgUrl" alt="" class="bgimg"/>
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
    <img :src="playListDetail.coverImgUrl" alt="" class="avatar"/>
    <div class="text"><p class="title">{{ playListDetail.name }}</p>
      <p>{{ playListDetail.tags }}</p>
      <div class="creator">
        <img :src="playListDetail.creator.avatarUrl" alt="" class="creator_avatar"/>
        <span class="creator_nickname">{{ playListDetail.creator.nickname }}</span>
      </div>
      <p class="playCount">播放量:{{playListDetail.playCount}}</p>
      <p class="playCount">收藏量:{{playListDetail.subscribedCount}}</p>
    </div>

  </div>

</template>
<script setup>
import {defineProps} from 'vue';
defineProps({
  playListDetail: Object
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
  position: absolute;
  top: 0;
  width: 100%;
  height: 6.3rem;
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

.creator .creator_avatar{
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