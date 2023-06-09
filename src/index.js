import * as components from './components'

const defaultComponents = components?.default || components
const vueComponents = {
  install(Vue) {
    Object.keys(defaultComponents).forEach(name => {
      Vue.component(name, defaultComponents[name])
    })
  }
}
export default vueComponents