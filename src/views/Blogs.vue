<template>
  <body class="blogs">
      <NavBar />
      <div class="hero-image">
          <div class="container pt-4">
              <div class="col-md-12">
                  <div class="content">
                      <h2 id="blog_heading" class="text-white"> Blogs </h2>
                        <p id="blog_heading" class="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sapiente officiis rerum? <br /> Itaque iste, 
                            expedita officiis quos fugiat dolorum est 
                        </p>
                        <button type="button" class="btn btn-secondary ">Secondary</button>
                  </div>
                
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    <div class="container">
        <div v-if="error">{{ error }}</div>
        <div class="row">
            <div class="col-lg-6">
                <div class="blog-wide-box mt-3">
                    <div class="text-blog-box p-4">
                        <p class="blog-theme animation">TRAVEL</p>
                        <h2>Wake Up and Smell The Roses</h2>
                        <button class="btn btn-success blog-btn"> Read </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="blog-slim-box1 mt-3 pb-4">
                            <div class="text-blog-box p-4">
                                <p class="blog-theme animation">ARCHITECTURE</p>
                            <h2>The Brand New Grid</h2>
                            <button class="btn btn-success blog-btn mb-3 mt-3"> Read </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="blog-slim-box2 mt-3 pb-2">
                            <div class="text-blog-box p-4">
                                <p class="blog-theme animation">TRAVEL</p>
                            <h2>Let's Go Round The World</h2>
                            <button class="btn btn-success blog-btn  mt-1"> Read </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 mb-4">
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="blog-slim-box3 mt-3 pb-4">
                            <div class="text-blog-box p-4">
                                <p class="blog-theme animation">ARCHITECTURE</p>
                            <h2>The Grand Designs</h2>
                            <button class="btn btn-success blog-btn my-3"> Read </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="blog-slim-box4 mt-3 mb-1 pb-2">
                            <div class="text-blog-box p-4">
                                <p class="blog-theme animation">STREETS</p>
                            <h2>Let's Hear The Word</h2>
                            <button class="btn btn-success blog-btn my-4"> Read </button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="blog-wide-box2 mt-3">
                        <div class="text-blog-box p-4">
                            <p class="blog-theme animation">STREETS</p>
                            <h2>Wake Up and Smell The Roses</h2>
                            <button class="btn btn-success blog-btn "> Read </button>
                        </div>
                    </div>
                </div>
        
            </div>
    </div>
    <div class="container">
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark jumbo">
            <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">People seem to like this article</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
            </div>
        </div>
        <div  v-if="posts.length" class="layout">
            <div class="row g-5">
                <div class="col-md-12 col-lg-8">
                    <PostList :posts="posts" />
                </div>
                <div class="col-md-12 col-lg-4">
                    <div class="position-sticky" style="top: 2rem;">
                        <div class="p-4 mb-3 bg-light rounded">
                            <h4 >Category</h4>
                        </div>
                        <TagCloud :posts="posts"/>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div v-else class="pb-3"> 
            <Spinner />
        </div>
    </div>
</body>
</template>

<script>
import TagCloud from '../components/TagCloud.vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud, NavBar },
  setup() {

    const {posts, error, load} = getPosts()

    load()
    return { posts, error }
  }
}
</script>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/david-marcu-78A265wPiO4-unsplash.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
}
.content{
  color: white;
  padding-top: 14%;
  padding-bottom: 10%;
  text-align: left;
  text-shadow: 0px 4px 3px rgba(0,0,0,0,4),
               0px 8px 13px rgba(0,0,0,0,1),
               0px 18px 23px rgba(0,0,0,0,1);
}

#blog_heading {
  color: #000;
}
.btn-secondary {
    background-color: #bbbbbb;
    color: #000;
}
.blog-wide-box {
  color: #ccc;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/david-marcu-78A265wPiO4-unsplash.jpg');
}
.blog-slim-box1 {
  width: 100%;
  color: #ccc;
  bottom: 0;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/art_digital_draw-20181210-0013.jpg');
}
.blog-slim-box2 {
  width: 100%;
  color: #ccc;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/emma-harrisova-PiHsdlKN8Sk-unsplash.jpg');
}
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
.blog-slim-box4 {
  width: 100%;
  color: #ccc;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/pexels-josh-hild-4117560.jpg');
}
.blog-wide-box2 {
  color: #ccc;
  border-radius: 4px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/funyons.gif');
}
.blog-theme {
  overflow: hidden;
  color: #b3a101;
  white-space: nowrap;
  /* transform: translate(-50%, -50%); */
}
.animation {
  animation: typewriter 4s steps(40, end) 1s 1 normal both,
             blinkCursor 500ms step-end infinite;
}
@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
@keyframes blinkCursor {
    from, to { border-color: transparent }
    50% { border-color: #b3a101; }
}
.jumbo {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/david-marcu-78A265wPiO4-unsplash.jpg');
}
/* .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
} */
</style>