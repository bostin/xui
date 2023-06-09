<template>
  <div class="x-table-container">
    <table class="x-table-table">
      <thead class="x-table-thead">
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.props.label }}
          </th>
        </tr>
      </thead>
      <tbody class="x-table-tbody">
        <tr v-for="(row, r_index) in data" :key="r_index">
          <template v-for="(column, c_index) in columns" :key="r_index + '_' + c_index">
            <table-column-proxy :row="row" :row-index="r_index" :col-index="c_index" :column="column" />
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, useSlots } from 'vue'
import TableColumn from './TableColumn.vue'
import TableColumnProxy from './TableColumnProxy.vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  dataUrl: {
    type: String,
    default: () => ''
  }
})
const slots = useSlots()
const columns = slots.default().filter(s => s.type === TableColumn)
</script>
