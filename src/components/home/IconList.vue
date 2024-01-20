<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-cat1"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-list"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-cat"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rankfill"></use>
            </svg>
            <span>排行榜</span>
        </div>

    </div>
</template>
<script setup>

</script>

<style scoped>
.iconList {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.iconItem {
    width:25%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.iconItem .icon {
    width: .8rem;
    height: .8rem;
}
</style>