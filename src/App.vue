<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <p>Finsta</p>
  </header>

  <RouterView />
</template>

<style>
body{
  background-color: #fafafa;
  margin: 0;
}

#app {
  width: 100%;
  padding: 2rem;
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-top: 0;
  margin: 0;
  padding: 0;
}


header{
  font-size: 4rem;
  background-color: #fff;
  margin-bottom: 1rem;
}

header p{
  font-size: 3rem;
  width: 100%;
  text-align: center;
  margin: 0;
}
</style>
