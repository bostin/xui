<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <br />
  <button type='button' class='btn btn-primary' @click='showXMessageBox'>
    test messagebox-ok
  </button>
  <br />
  <x-table :data='tableRows'>
    <x-table-column prop='id' label='ID' />
    <x-table-column prop='name' label='Name'>
      <template #default='{ row }'>
        <button type='button'>{{ row.name }} -> {{ row.id }}</button>
      </template>
    </x-table-column>
  </x-table>
</template>
<script setup>
import { reactive } from 'vue';
import { XMessageBox, XTable, XTableColumn } from './components'
const showXMessageBox = () => {
  XMessageBox({
    title: 'this is title',
    message: 'this is message',
    onConfirm: () => {
      console.log('onConfirm')
    },
    onCancel: () => {
      console.log('onCancel')
    }
  })
  .then(() => {
    console.log('go to then')
  })
  .catch(() => {
    console.log('go to catch')
  })
  .finally(() => {
    console.log('go to finally')
  })
}
const tableRows = reactive([
  {id: 1, name: 'A', password: 'aaa'},
  {id: 2, name: 'B', password: 'bbb'},
  {id: 3, name: 'C', password: 'ccc'},
  {id: 4, name: 'D', password: 'ddd'},
])
</script>
