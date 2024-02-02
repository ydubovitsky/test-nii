<template>
  <header>
    <NavComponent />
  </header>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'

</script>

<style scoped>
  .content {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>
