<template>
  <div class="post-list">
          <div class="row">
            <div class="col-lg-6 col-md-6 mb-3" v-for="post in posts" :key="post.id">
              <SinglePost :post="post"/>
            </div>
          </div>
          
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('ola just got onUnmounted "wink wink"'))
    onUpdated(() => console.log('component updated'))
    
  }
}
</script>

<style>
 
</style>