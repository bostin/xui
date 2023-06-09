<template>
  <TransitionRoot appear :show='show' as='template'>
    <Dialog as='div' @close='onClose' class='relative z-10'>
      <TransitionChild as='template' enter='duration-300 east-out' enter-from='opacity-0' enter-to='opacity-100'
        leave='duration-200 east-in' leave-from='opacity-100' leave-to='opacity-0'>
        <div class='fixed inset-0 bg-black bg-opacity-25' />
      </TransitionChild>

      <div class='fixed inset-0 overflow-y-auto'>
        <div class='flex min-h-full items-center justify-center p-4'>
          <TransitionChild as='template' enter='duration-300 east-out' enter-from='opacity-0 scale-95'
            enter-to='opacity-100 scale-100' leave='duration-200 east-in' leave-from='opacity-100 scale-100'
            leave-to='opacity-0 scale-95'>
            <DialogPanel
              class='w-full max-w-md transform oervflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
              <DialogTitle v-if='title' as='h3' class='text-lg font-medium leading-6 text-gray-900'>
                {{ title }}
              </DialogTitle>

              <div class='mt-2'>
                <p class='text-sm text-gray-500'>{{ message }}</p>
              </div>

              <div v-if='showConfirmButton || showCancelButton' class='mt-4 text-right'>
                <button v-if='showConfirmButton' type='button' class='ml-2 btn-sm' :class='confirmButtonClass'
                  @click='onConfirmButtonClicked'>{{ confirmButtonText }}</button>
                <button v-if='showCancelButton' type='button' class='ml-2 btn-sm' :class='cancelButtonClass'
                  @click='onCancelButtonClicked'>{{
                    cancelButtonText }}</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requried: false,
    default: ''
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: 'Confirm'
  },
  confirmButtonClass: {
    type: String,
    default: 'btn btn-success'
  },
  onConfirm: {
    type: Function,
    default: () => {}
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  cancelButtonText: {
    type: String,
    default: 'Cancel'
  },
  cancelButtonClass: {
    type: String,
    default: 'btn btn-error'
  },
  onCancel: {
    type: Function,
    default: () => {}
  },
})
const show = ref(false)
onMounted(() => {
  show.value = true
})
const onConfirmButtonClicked = () => {
  if (props.onConfirm) {
    if (props.onConfirm() !== false) {
      show.value = false
    }
  } else {
    show.value = false
  }
}
const onCancelButtonClicked = () => {
  show.value = false
  props.onCancel && props.onCancel()
}
const onClose = () => onCancelButtonClicked()
</script>