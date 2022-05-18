<template>
  <div class="home">
    <div class="hero-image">
        <NavBar/>

      <div class="container">
          <div class="row">
                <div class="col-md-12">
                      <div class="content mt-5">
                        <div class="header-names">
                          <h1 id="head">DAPHNE'S</h1>
                          <h3 id="size">BLOG POST</h3>
                        </div>
                        <!-- <p style="text-align: left;">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis placeat quam
                           dolore molestiae! Sint minus, odio dolorum voluptatibus maiores aut eligendi quae earum alias, 
                           corrupti numquam placeat explicabo. Eos, officiis!
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis placeat quam
                           dolore molestiae! Sint minus, odio dolorum voluptatibus
                        </p> -->
                        
                      </div>
                    </div>
           </div>
      </div>
  </div>
</div>


  <div class="welcome">
    <div class="welcome-box">
      <div class="container">
        <hr class="welcome-line mb-4">
        <div class="container">
          <h2 id="welcome-text">WELCOME</h2>
          <p class="mt-4" id="welcome-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet autem assumenda aliq
          uid dolorum atque ratione nesciunt pariatur voluptas libero explicabo error quo minus labor
          osam, fugit, deleniti laborum quas ipsam! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet autem assumenda aliq
          uid dolorum atque ratione nesciunt pariatur voluptas libero explicabo error quo minus labor
          osam, fugit, deleniti laborum quas ipsam! 
        </p>
        </div>
         <router-link class="btn btn-secondary mt-4 welcome-btn" :to="{ name: 'Blogs'}">View Blogs</router-link>
        </div>

    </div>
  </div>

  <div class="blog">
      <div class="image-grid row">
        <div id="blog-box1" class="col-md-6 bb">
          <hr class="line">
          <div class="title-text">
            <h3 id="t-text">CATALOGUE<br /> BEST</h3>
          </div>
          <hr class="line">
        </div>
        <div id="blog-box2" class="col-md-6 bb">
          <hr class="line">
          <div class="title-text">
            <h3 id="t-text">SWELL<br /> FEBUARY</h3>
          </div>
          <hr class="line">
        </div>
        <div id="blog-box3" class="col-md-6 bb">
          <hr class="line">
          <div class="title-text">
            <h3 id="t-text">CRUISE<br /> WORKSHOP</h3>
          </div>
          <hr class="line">
        </div>
        <div id="blog-box4" class="col-md-6 bb">
          <hr class="line">
          <div class="title-text">
            <h3 id="t-text">WEDDING<br /> PHOTO-STORIES</h3>
          </div>
          <hr class="line">
        </div>
      </div>
  </div>

  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <hr class="line mb-4">
          <h3 id="contact-text" class="mb-4">CONTACT US</h3>
            <form action="" id="contact-form" class="m-auto">
              <div class="mb-3">
                <input type="text" class="form-control inp" id="exampleFormControlInput1" placeholder="Name*">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control inp" id="exampleFormControlInput1" placeholder="Email*">
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control inp" id="exampleFormControlInput1" placeholder="Phone*">
              </div>
              <div class="mb-3">
                <textarea class="form-control inp" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </div>
              <button type="button" class="btn btn-secondary contact-btn mt-4 mb-5">SEND</button>
          </form>
          

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'HomeView',
  components: { NavBar }
}
</script>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/fikry-anshor-SlKa1v8E3w8-unspla.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
}
  
.content{
  color: white;
  margin-bottom: 190px;
  padding-top: 16%;
  padding-bottom: 16%;
  text-align: center;
  text-shadow: 0px 4px 3px rgba(0,0,0,0,4),
               0px 8px 13px rgba(0,0,0,0,1),
               0px 18px 23px rgba(0,0,0,0,1);
}

.housed {
  background-color: rgb(238, 238, 238);
}
.header-names {
  width: 150px;
  text-align: left;
  border-top: 3px solid #b3a101;
  border-bottom: 3px solid #b3a101;
}
#head{
    font-size: 90px;
}

.btn-secondary {
    background-color: transparent;
    border: 2px solid #6c757d;
}

.welcome{
  background-color: #171718;
  color: #ccc;
  border-bottom: 3px solid #b3a101;
  position: relative;
}
.welcome-box {
  border-top: 3px solid #b3a101;
  padding-top: 10%;
  text-align: center;
}
.welcome-line {
  width: 200px;
  padding-top: 5px;
  color: #b3a101;
  margin:  auto;
}
#welcome-text {
  font-size: 55px;
}
#welcome-p {
  text-align: center;
  margin: auto;
}
.welcome-btn {
  border: 2px solid #b3a101;
  border-radius: 0px;
  margin: auto;
  margin-bottom: 80px;
  outline: none;
}
.welcome-btn:hover {
  border: none;
  outline: none;
  background-color: #b3a101;
}
.blog {
  width: 100%;
  background-color: #171718;
  border-bottom: 3px solid #b3a101;
  color: #ccc;
  position: relative;
}
.image-grid{
  margin: auto;
  height: 100%;
  width: 100%;
  /* display: inline-grid;
  grid-template-columns: auto auto ; */
}
#blog-box1 {
  background-image: url('../assets/bench-560435_1920.jpg');
  background-size: cover;
}
#blog-box2 {
  background-image: url('../assets//people-1492052_1920.jpg');
  background-size: cover;
}
#blog-box3 {
  background-image: url('../assets/man-1394395_1920.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#blog-box4 {
  background-image: url('../assets/nathan-dumlao-EdULZpOKsUE-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.title-text {
  margin: auto;
  text-align: center;
}
#blog-box1:hover, #blog-box2:hover, #blog-box3:hover, #blog-box4:hover {
  transition: all ease-in-out 0.7s;
  box-shadow:inset 0 0 0 2000px  rgba(0, 0, 0, 0.5);
}

#t-text {
  font-size: 45px;
  text-align: center;
}
.line {
  width: 200px;
  padding-top: 5px;
  background: #b3a101;
  margin: 30px auto;
}
.blog-btn {
  background-color: transparent;
  border-radius: 0px;
  border: 2px solid #b3a101;
  margin: auto;
  outline: none;
}
.blog-btn:hover {
  border: none;
  outline: none;
  background-color: #b3a101;
}

.contact-us {
  outline: none;
  color: #ccc;
  position: relative;
  background-color: #171718;
}
#contact-text {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 140px;
  font-size: 55px;
}
#contact-form {
  color: #ccc;
  text-align: center;
  max-width: 500px;
}
.inp {
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #b3a101;
}
.inp:focus {
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none !important;
  border-bottom: 1px solid #b3a101;
}
.contact-btn {
  border: 2px solid #b3a101;
  border-radius: 0px;
  margin: auto;
  outline: none;
}
.contact-btn:hover {
  background-color: #b3a101;
  border: none;
  margin: auto;
  outline: none;
}
@media only screen and (max-width: 768px) {
  .blog {
    height: 180%;
  }
  .content{
    color: #ccc;
    padding-top: 35%;
  }
}
@media only screen and (max-width: 480px) {
  #head {
    font-size: 3.125em;
  }
}
</style>