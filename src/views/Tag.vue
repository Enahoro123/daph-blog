<template>
<NavBar />
<div class="tag">
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="layout">
    <PostList :posts="postsWithTag" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>

</div>

</template>

<script> 
import NavBar from '../components/NavBar.vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
    components: { PostList, Spinner, TagCloud, NavBar },
 setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })

    return { posts, error, postsWithTag }
  }
}
</script>

<style scoped>
  .tag { 
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}
</style>