<template>
<NavBar />
  <!-- <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
      <img :src="post.image" alt="">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleClick" class="delete">Delete post</button>
  </div>
  <div v-else>
      <Spinner />
  </div> -->

<div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <div class="container">
        <div class="col-md-12">
            <div class="post-header mt-5" :style="{'background-image': 'url(' + post.image +')'}">
            </div>
                <img id="blog-image" class="mt-4" :src="post.image" alt="">
            <div class="container">
                <div id="blog-writeup" class="pt-5">
                    <h1 style="text-align: center;" class="header-blog">{{ post.title }}</h1>
                    <p class="p-5">{{ post.body }}</p>
            </div>
            </div>
        </div>
    </div>
      <button @click="handleClick" class="delete">Delete post</button>
    </div>
  <div v-else>
      <Spinner />
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
    props: ["id"],
    components: { Spinner, NavBar },
    setup(props) {
        const route = useRoute()
        const router = useRouter()

        const {post, error , load} = getPost(route.params.id)

        load()

        const handleClick = async () => {
            await projectFirestore.collection('posts')
            .doc(props.id)
            .delete()

            router.push('/blogs')
        }

        return { post, error, handleClick}
    }
}
</script>

<style scoped>
.header-blog {
  font-family: 'Sansita Swashed', cursive;
  font-weight: 800;
}
#blog-image {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.post-header {
  width: 100%;
  height: 400px;
  background-size:contain;
  background-position: center;
  margin: auto;
}
@media only screen and (max-width: 1920px) {
    .post-header {
        display: block;
    }
    #blog-image{
        display: none;
    }
}
@media only screen and (max-width: 768px) {
    .post-header {
        display: none;
    }
    #blog-image{
        display: block;
    }
}

#blog-writeup {
  position: relative;
  bottom: 140px;
  margin: auto;
  background-color: #fff;
  text-align: justify;

}

/* .post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
} */
button.delete {
    margin: 10px auto;
    cursor: pointer;
}
</style>