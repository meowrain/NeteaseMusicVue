<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swiper" :show-indicators="false">
                <van-swipe-item v-for="music in musicList" :key="music">
                    <router-link :to="{path:'/itemMusic',query:{id:music.id}}">
                    <img :src="music.picUrl" alt="" />
                    <span class="playCount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cat1"></use>
                        </svg>
                        {{ changeNum(music.playCount )}}
                    </span>
                    <span class="name">{{ music.name }}</span>
                </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getMusicList } from '../../request/api/getMusicRecommendations';
const musicList = ref([]);
function changeNum(num){
    if(num>=100000000){
        return (num/100000000).toFixed(1)+ '亿';
    }else if(num >= 10000){
        return (num/10000).toFixed(1)+'万';
    }
}
onMounted(async () => {
    let res = await getMusicList();
    musicList.value = res.data.result;
    console.log(musicList.value)
    // console.log(res.data.result); 
})
</script>
<style scoped>
.musicList {
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
}

.musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
}



.musicTop .title {
    font-size: 0.4rem;
    font-weight: 900;
}

.musicTop .more {
    border: 1px solid #ccc;
    text-align: center;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    border-radius: 0.4rem;
}
.musicContent {
    width: 100%;
    height: 150px;
}

.musicContent .my-swiper {
    height: 100%;
    padding-bottom: 0.85rem;
}

.musicContent .my-swiper img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
}
.playCount {
    font-size: 0.3rem;
    color:white;
    position: absolute;
    left: 53%;
    top: 4%;
}
.name {
    font-size: 0.3rem;
    color:black;
}
.van-swipe-item {
    margin-right: 0.2rem;
}
</style>