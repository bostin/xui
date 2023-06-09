<template>
  <td v-bind="attrs">
    <template v-if="useSlot">
      <slot />
    </template>
    <template v-else>
      {{ row[props.prop] || '' }}
    </template>
  </td>
</template>
<script setup>
import { inject, useAttrs } from 'vue'
const props = defineProps({
  prop: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
const attrs = useAttrs()
const useSlot = inject('slot')
const row = inject('row')
</script>
