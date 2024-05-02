import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import jobsParent from './components/jobs/jobsParent.vue'
import JobsDetails from './components/jobs/jobsDetails.vue'
import PostsList from './components/PostsList.vue'
import NotFound from './components/NotFound.vue'




const routes = [
    {path:'/', name:'Home', component: HomeComponent},
    {path:'/hello-world', name:'Hello World', component: HelloWorld},
    {path:'/jobs', name:'Jobs Parent', component: jobsParent},
    {path:'/posts', name:'Posts', component: PostsList},
    // params
    {path:'/jobs/:id', name:'Jobs Details', component: JobsDetails},
    // redirect
    {path:'/alljobs', redirect: '/jobs'},
    // catch all 404 not found .. don't forget : before catchAll
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }, 

]


const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App).use(router).mount('#app')
