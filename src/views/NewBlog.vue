<template>
  <div class="create">
    <NavBar />
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <label>Title:</label>
            <input type="text" class="form-control inp" v-model="title" required>
        </div>
        <div class="mb-3">
            <label>Content:</label>
            <textarea type="text" class="form-control inp" v-model="body" required></textarea>
        </div>
        <div class="mb-3">
            <label>Image:</label>
            <input type="text" class="form-control inp" v-model="image" required>
        </div>
        <div class="mb-3">
            <label>Tags (hit enter to add a tag)</label>
            <input type="text" v-model="tag"
            @keydown.enter.prevent="handleKeydown" class="form-control inp" required>
        </div>

          <div v-for="tag in tags" :key="tag" class="pill">
              #{{ tag }}
          </div>
          <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
  components: { NavBar },
    setup() {
        const title = ref('')
        const body = ref('')
        const tags = ref([])
        const tag = ref('')
        const image = ref('')

        const router = useRouter()

        const handleKeydown = () => {           
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/g, '') //removes all whitespace
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                // id: Math.floor(Math.random() * 10000),
                title: title.value,
                body: body.value,
                tags: tags.value,
                image: image.value,
                isFav: false,
                count: 0,
                createdAt: timestamp()
            }


            const res = await projectFirestore.collection('posts').add(post)
            //console.log(res)

            router.push({ name: 'Blogs' })
        }


        return { title, body, tag, tags, image, handleKeydown, handleSubmit }
    }
}
</script>

<style scoped>
/* .create {
  background-color: #444; 
} */
 form {  
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
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
  outline: none;
  border-bottom: 1px solid #b3a101;
}
</style>