<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.topNav{
  width: 100%;
  height: 1rem;
  padding: .2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.topNav .topContent {
  width: 65%;
  height: 100%;
  display: flex;
  font-size: .36rem;
  align-items: center;
  justify-content: space-around;
}
.topContent .active {
  font-weight: 900;
}
</style>