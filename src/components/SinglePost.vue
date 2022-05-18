<template>
  <div class="post">
        <!-- <div class="blog-slim-box3 mt-3 pb-4">
            <div class="text-blog-box p-4">
                <p id="blog-theme" v-for="tag in post.tags" :key="tag">
                    #{{tag}}
                </p>
                <router-link :to="{ name: 'Details', params: { id: post.id }}">
                <h2>{{ post.title }}</h2>
                </router-link>
                <button class="btn btn-success blog-btn mt-5"> Read </button>
            </div>  
        </div> -->
        <div class="card shadow-lg" style="width: 18rem; border: none">
            <img :src="post.image" alt="...">
            <div class="card-body">
                <router-link class="links" :to="{ name: 'Details', params: { id: post.id }}">
                    <h5 class="card-title">{{ post.title }}</h5>
                </router-link>
                <p class="card-text mt-2">{{ snippet }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <div :class="{ icon: true, fav: post.isFav }" @click="handleUpdate(post)">
                    <span class="material-icons">favorite</span>
                </div>
                <div>
                    <p class="icon">Likes {{ post.count }}</p>
                </div>
                <!-- <router-link class="btn btn-primary" :to="{ name: 'Edit', params: { id: post.id }}"> Edit </router-link> -->
            </div>
        </div>
        
  </div>
</template>

<script>
import { computed, ref } from 'vue'  
import usePost from '@/composables/usePost'
import { doc, increment, updateDoc } from 'firebase/firestore'
import { projectFirestore } from '@/firebase/config'

export default {
    props: ["post"],
    setup(props) {
        const count = ref(Number)
        const snippet = computed(() => {
            return props.post.body.substring(0, 70) + '....'
        }) 

        const handleUpdate = async (post) => {
            const docRef = doc( projectFirestore, 'posts', post.id )
            
            await updateDoc(docRef, {
                isFav: !post.isFav
            })
            if(!post.isFav) {
                await updateDoc(docRef, {
                    count: increment(1)
                }) 
            } 
            else{
                await updateDoc(docRef, {
                    count: increment(-1)
                })
            }
        }

        return { snippet, handleUpdate, count }
    }
}
</script>

<style scoped>
.blog-slim-box3 {
  width: 100%;
  color: #ccc;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/54fc947ef4abd3c572f462ff4c8c2127.jpg');
}
#blog-theme {
  color: #b3a101 ;
}
.links {
  text-decoration: none;
}
 h5 {
    color: #b3a101;
    text-decoration: none;
    text-decoration-line: none;
}
.card {
     box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
     transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
.icon.fav {
  color: #f83f5e;
}
</style>