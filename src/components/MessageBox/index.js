import { h, render } from 'vue'
import XMessageBox from './MessageBox.vue'

export default (props) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  return new Promise((resolve, reject) => {
    const onConfirmCallback = () => {
      props.onConfirm && props.onConfirm()
      document.body.removeChild(div)
      resolve()
    }

    const onCancelCallback = () => {
      props.onCancel && props.onCancel()
      document.body.removeChild(div)
      reject()
    }

    const vNode = h(XMessageBox, Object.assign({}, props, {
      onConfirm: onConfirmCallback,
      onCancel: onCancelCallback,
    }))

    render(vNode, div)
  })
}