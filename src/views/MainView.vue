<template>
    <div class="container">
        <cardComponent>
            <div class="card-item-content">
                <h1>249</h1>
                <p>Сгенерированное число</p>
            </div>
        </cardComponent>
        <cardComponent>
            <div class="card-item-content">
                <h1>10</h1>
                <p>Номер текущего запуска</p>
            </div>
        </cardComponent>
        <cardComponent>
            <div class="card-item-content">
                <h1>76</h1>
                <p>Текущий интервал</p>
            </div>
        </cardComponent>
    </div>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue';
export default {
    components: {
        CardComponent
    },
    name: "MainView"
}
</script>
<style lang="css">
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 125px;
    }

    .card-item-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>