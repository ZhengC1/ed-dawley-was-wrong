import Vue from 'vue'
import Router from 'vue-router'
import Clock from '@/components/Clock'
import Hello from '@/components/HelloWorld'

Vue.use(Router)


export default new Router({
    routes: [
        { 
            path: '/', 
            name: 'clock', 
            component: Clock 
        },
        { path: '/testaments', 
            name: 'hello', 
            component: Hello 
        }
    ]
})


