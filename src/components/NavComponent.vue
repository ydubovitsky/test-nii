<template lang="">
    <nav class="nav">
        <RouterLink to="/" class="main-lnk">Генератор случайных чисел</RouterLink>
        <div class="lnk-list">
            <RouterLink to="/history">История</RouterLink>
            <RouterLink to="/settings">Настройки</RouterLink>
            <RouterLink to="/favorite">Любимые числа</RouterLink>
        </div>
    </nav>
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: "NavComponent"
}
</script>
<style lang="css">
nav {
    display: flex;
    color: black;
    /* Add font correctly */
    font: 'Noto Sans';
    height: 60px;
    width: 100vw;
    padding: 20px;
    justify-content: space-between;
    background-color: #E3F2FD;
}

.main-lnk {
    font-size: 20px;
    color: black;
}

nav a {
    color: #2F54EB;
    text-decoration: none;
}

.lnk-list {
    display: flex;
    gap: 20px;
}
</style>