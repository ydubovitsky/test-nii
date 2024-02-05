<template>
    <div>
        <h1 class="title">Настройки</h1>
        <div class="settings-dashboard">
            <div class="frame-settings">
                <p>Интервал значений чисел:</p>
                <div class="frame-range">
                    <InputText v-model.number="range[0]" width="50px" />
                    <Slider v-model="range" range class="w-14rem" max=1000 />
                    <InputText v-model.number="range[1]" maxlength="1000" />
                </div>
                <p>Частота генерации числе: {{ intervalValue }} секунд</p>
                <Slider v-model="intervalValue" />
            </div>
            <div class="frame-actions">
                <div class="buttons">
                    <Button label="Начать" @click="randomInteger" />
                    <Button v-if="!isStopped" label="Остановить" @click="stopGenerator" />
                    <Button v-else label="Возобновить" @click="randomInteger" />
                    <Button label="Завершить" />
                </div>
                <p>Запуск №: {{ counter }}</p>
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
            range: [],
            isStopped: false,
            counter: 0,
            generatedNumber: 0,
            intervalValue: 0,
            intervalId: 0,
            now: 0
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
        },
        randomInteger() {
            this.intervalId = setInterval(() => {
                this.isStopped = false;
                this.generatedNumber = Math.floor(this.range[0] + Math.random() * (this.range[1] + 1 - this.range[0]));
                console.log(this.generatedNumber)
                return this.generatedNumber;
            }, this.intervalValue)
        },
        stopGenerator() {
            this.isStopped = true;
            clearInterval(this.intervalId);
        },
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

.frame-range {
    display: grid;
    grid-template-columns: 36px 100% 36px;
    gap: 8px;
    align-items: center;
    width: 100%;
}

.frame-range input {
    width: 36px;
    height: 32px;
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