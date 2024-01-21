<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" indicator-color="white" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img class="image" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script setup>
import {ref, onMounted } from 'vue';
import {getBannerImage} from '../../request/api/getBannerImage'
const images = ref([]);
onMounted(async ()=>{
    let res = await getBannerImage();
    let banner = res.data.banners;
    // console.log(banner)
    images.value = banner.map((bannerImage)=> bannerImage.pic)

})

</script>
<style>
.van-swipe-item {
    width: 100%;
    text-align: center;
}

.van-swipe {
    width: 100%;
    padding: 10px;
}

.van-swipe__track .van-swipe-item .image {
    width: 100%;
    height: 4rem;
}

.van-swipe_indicator--active {
    background-color: rgb(219, 130, 130);
}</style>