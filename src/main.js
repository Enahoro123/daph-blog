import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/js/bootstrap.js"
import { projectAuth } from './firebase/config'

// global styles 
import './assets/main.css'

let app

projectAuth.onAuthStateChanged(() => {
    if(!app) {
         app = createApp(App).use(router).mount('#app')
    }
  
})
import "bootstrap/dist/css/bootstrap.min.css"