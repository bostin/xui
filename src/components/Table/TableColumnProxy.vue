<script>
import { h } from 'vue'
import TableColumn from './TableColumn.vue'
export default {
  provide() {
    return {
      slot: !!this.column?.children?.default,
      row: this.row,
      rowIndex: this.rowIndex,
      colIndex: this.colIndex
    }
  },
  props: {
    row: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number,
      required: true
    },
    colIndex: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  },
  setup({ row, rowIndex, colIndex, column }) {
    const props = column.props || {}
    return column?.children?.default
      ? () => h(TableColumn, props, () => column.children.default({ row, rowIndex, colIndex }))
      : () => h(TableColumn, props)
  }
}
</script>
