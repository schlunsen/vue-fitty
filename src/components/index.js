import Fitty from './Fitty.vue'


export function install(Vue, settings) {
    Vue.component(
        Fitty.name,
        Fitty
    )
}

export {
    Fitty,
}

export default install