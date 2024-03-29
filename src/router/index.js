import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {path:'/',name:'home',component: ()=>import('../views/HomePage.vue')},
    {path:'/itemMusic',name:'itemMusic',component:()=>import('../views/ItemMusic.vue')},
    {path:'/musicSquare',name:'musicSquare',component:()=>import('../views/PlayListSquare.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})
export default router
