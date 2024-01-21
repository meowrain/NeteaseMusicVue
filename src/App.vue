
<template>
  <div>
    <!-- <router-link to="/">Home</router-link> -->
  <router-view></router-view>
  </div>
</template>

<script setup>
import Home from './views/HomePage.vue';
</script>
<style scoped>
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
</style>