<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="css">
    .card {
        display: flex;
        justify-content: center;
        width: 255px;
        height: 207px;
        box-shadow: 1px 1px 1px 1px silver;
        border-radius: 10px;
    }
</style>