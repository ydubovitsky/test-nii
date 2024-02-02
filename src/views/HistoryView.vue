<template>
    <div>
        <h1 class="title">История</h1>
        <div class="content">
            <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
                <Column field="code" header="Дата" sortable style="width: 25%"></Column>
                <Column field="name" header="Номер запуска" sortable style="width: 25%"></Column>
                <Column field="category" header="Число" sortable style="width: 25%"></Column>
            </DataTable>
        </div>
    </div>
</template>
<script lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    components: {
        Column, DataTable
    },
    name: "HistoryView",
    data() {
        return {
            products: []
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
</style>