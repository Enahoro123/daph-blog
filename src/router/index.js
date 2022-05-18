import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blogs from '../views/Blogs.vue'
import Details from '../views/Details.vue'
import NewBlog from '../views/NewBlog.vue'
import Tag from '../views/Tag.vue'
import Edit from '../views/Edit.vue'
import Login from '../views/Auth/Login.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/new',
    name: 'NewBlog',
    component: NewBlog
  },  
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
    props: true
  },
  {
    path: '/post/:id',
    name: 'Edit',
    component: Edit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
