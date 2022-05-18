<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-inverse sticky-top">
      <div class="container container-fluid">
        <router-link class="navbar-brand" style="color: #b3a101;" :to="{ name: 'home'}"> DAPPH'S </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home'}"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'NewBlog'}"> New </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Blogs'}"> Blogs </router-link>
            </li>
            <li class="nav-item">
              <div v-if="user">
              <router-link :to="{ name:'home' }">home</router-link>
              <button @click="handleClick" class="btn">Logout</button>
            </div>
            <div v-else>
              <router-link class="btn" :to="{ name: 'Login'}">Log in</router-link>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout'
export default {
  setup() {
    const router = useRouter()
    const { logout } = useLogout()
    const { user } = getUser()

        const handleClick = async () => {
            await logout()
            console.log('User logged out')
            router.push({ name: 'Login' })
        }

        return { handleClick, user }
  }
}

</script>

<style>

</style>