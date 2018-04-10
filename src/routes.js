import MainComponent from './components/main/main.vue'

export default [
    
    { path: '*', redirect: '/'},
    { path: '/', component: MainComponent}
]
