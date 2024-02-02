<template>
    <div>
        <h1 class="title">Настройки</h1>
        <div class="settings-dashboard">
            <div class="frame-settings">
                <p>Интервал значений чисел:</p>
                <Slider v-model="value" :step="1" class="w-14rem" />
                <p>Частота генерации числе: 30 секунд</p>
                <Slider v-model="value" />
            </div>
            <div class="frame-actions">
                <div class="buttons">
                    <Button label="Начать" @click="sendMessage" />
                    <Button label="Остановить" @click="getAllGeneratedNumbers" />
                    <Button label="Завершить" />
                </div>
                <p>Запуск №: 95</p>
            </div>
        </div>
        <!-- <InputText v-model.number="value" /> -->
    </div>
</template>
<script lang="ts">
import axios from 'axios';
export default {
    name: "SettingsView",
    data() {
        return {
            value: 0
        }
    },
    methods: {
        sendMessage() {
            // Move to separeted method
            axios.post(
                'http://localhost:8080/number/add',
                {
                    value: 123,
                    isFavorite: true,
                    
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
        },
        getAllGeneratedNumbers() {
            axios.get('http://localhost:8080/number/all')
        }
    }
}
</script>
<style scoped>
.title {
    position: absolute;
    top: 108px;
    left: 165px;
}

.frame-settings {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 350px;
    height: 174px;
}

.frame-actions {
    display: flex;
    flex-direction: column;
    gap: 36px;
}

.buttons {
    display: flex;
    gap: 14px;
}
</style>