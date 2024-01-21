<template>
  <div>
    <!-- <router-link to="/">Home</router-link> -->
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<script setup>

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>