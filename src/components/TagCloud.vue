<template>
  <!-- <div class="tag-cloud">
      <h3>Tags</h3>
      <div v-for="tag in tags" :key="tag">
          <router-link :to="{ name: 'Tag', params: { tag: tag } }">
              #{{ tag }}
          </router-link>
      </div>
  </div> -->
  <div class="col-md-4">
    
      <input type="text" id="search-box" class="shadow">
        <div class="card shadow mt-4" style="width: 22rem; border: none; ">
          <ul class="list-group list-group-flush" v-for="tag in tags" :key="tag">
            <router-link class="links" :to="{ name: 'Tag', params: { tag: tag } }">
              <li class="list-group-item car">{{ tag }}</li>
            </router-link>
          </ul>
        </div>
    </div>

</template>

<script>
import useTags from '../composables/useTags'
export default {
props: ['posts'],
  setup(props) {
      const {tags} = useTags(props.posts)

      return{ tags }
  }
}
</script>

<style scoped>
.car {
  border-left: none;
  border-right: none;
  border-top: none;
}
.links {
  text-decoration: none;
}
li {
  background-color: rgb(238, 237, 237);
}
#search-box {
  color: #fff;
  width: 22em;
  border: none;
  padding: 10px;
  background-color: rgb(238, 237, 237);
}
#search-box:focus {
  background-color: #ccc;
  outline: none;
}


  /* .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #b3a101;
    font-weight: bold;
  } */
</style>