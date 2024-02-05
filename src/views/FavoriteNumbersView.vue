<template lang="">
    <div>
        <h1 class="title"><IconHeart/>Любимые числа</h1>
        <div class="content">
            <Button label="+ Добавить" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="Добавьте любимое число" :style="{ width: '25rem' }">
                <span class="p-text-secondary block mb-5">Введите ваше любимое число</span>
                <div class="flex align-items-center gap-3 mb-3">
                    <InputText id="number" class="flex-auto" autocomplete="off" v-model="number"/>
                </div>
                <div class="flex justify-content-end gap-2">
                    <Button type="button" label="Отмена" severity="secondary" @click="visible = false"></Button>
                    <Button type="button" label="Сохранить" @click="addFavoriteNumber"></Button>
                </div>
            </Dialog>
        </div>
        <div class="favorite-numbers">
            <div class="favorite-numbers-item" 
                v-for="(item, index) in favoriteNumbers"
                :key="index" 
                @mouseover="() => favoriteNumbers[index].isRemoveIconVisible=true"
                @mouseleave="() => favoriteNumbers[index].isRemoveIconVisible=false"
                >{{item}}</div>
            <IconRemove/>
        </div>
    </div>
</template>
<script lang="ts">
import IconHeart from '@/components/icons/IconHeart.vue';
import IconRemove from '@/components/icons/IconRemove.vue';
export default {
    name: "FavoriteNumbersView",
    components: { IconHeart, IconRemove },
    data() {
        return {
            number: 0,
            //fix me
            favoriteNumbers: [] as Object[],
            visible: false
        }
    },
    methods: {
        addFavoriteNumber() {
            this.visible = false;
            this.favoriteNumbers.push({ value: this.number, isRemoveIconVisible: false });
        },
        removeFavoriteNumber() {

        }
    }
}
</script>
<style lang="css" scoped>
.title {
    position: absolute;
    top: 108px;
    left: 165px;
}

.favorite-numbers-item {
    background-color: #ADC6FF;
    padding: 16px;
    border-radius: 109px;
    font-size: 56px;
    font-weight: 400;
}
</style>