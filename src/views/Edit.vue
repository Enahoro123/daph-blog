<template>
<div class="container mt-5">
    <form @submit.prevent="handleUpdate(post)">
        <div v-if="post">
            <div class="mb-3">
            <label>Title:</label>
            <input type="text" class="form-control inp" v-model="post.title" required>
        </div>
        <div class="mb-3">
            <label>Details:</label>
        <textarea v-model="post.body" class="form-control inp" id="exampleFormControlTextarea1" required></textarea>
        </div>
        </div>
        
        
        <button class="btn btn-secondary mt-4">Update Project</button>
    </form>
</div>
 
</template>

<script>
import usePost from '@/composables/usePost'
import getPost from '../composables/getPost'
import { useRoute, useRouter } from 'vue-router'
import {  ref } from '@vue/runtime-core'

export default {
    props: ["id"],
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        const title = ref('')
        const body = ref('')
        const { updateDoc } = usePost( 'posts', props.id )   
        
        const {post, error , load} = getPost(route.params.id)
load()


        const handleUpdate = async (post) => {
            await updateDoc({
                title: post.title,
                body: post.body
            })
            console.log(title, body)

            router.push({ name: 'Blogs' })
        }
        

    
        return { title, body, post, error, handleUpdate }
    
  }
}
</script>

<style scoped>
.inp {
  color: rgb(61, 61, 61);
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #b3a101;
}
.inp:focus {
  color: rgb(0, 0, 0);
  background-color: transparent;
  border: none;
  outline: none !important;
  border-bottom: 1px solid #b3a101;
}
</style>