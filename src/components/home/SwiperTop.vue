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
const images = [
    'https://vip1.loli.io/2022/05/11/7iOfYbw52gKSxpu.jpg',
    'https://vip2.loli.io/2022/05/11/HAatMhUdEV5kgZp.jpg',
    'https://vip2.loli.io/2022/05/11/YPl83hbnWFgpIyq.jpg',
    'https://vip1.loli.io/2022/05/12/cG2aifgQsIJUhNw.jpg'
]
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