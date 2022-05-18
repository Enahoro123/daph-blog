<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  <section class="login">
        <div class="container">
            <div class="m-box">
                <h1>Welcome Back!</h1>
                <p>Login to Daph-Blog Daph or whoever was able to hack this</p>
            </div>
            
        </div>
        <aside>
            <form class="mt-5" @submit.prevent="handleSubmit">
                <div class="mb-5">
                    <h2>Login</h2>
                </div>
                <div class="container">
                    <div class="form-floating mb-3">
                      <input type="email" v-model="email" class="form-control input" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Email</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="password" v-model="password" v-if="!error" class="form-control input" id="floatingInput" placeholder="name@example.com">
                      <input type="text" v-model="password" v-if="error" class="form-control is-invalid input" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback">
                      <label for="floatingInput">Password</label>
                    </div>

                    <div v-if="error" class="error">{{ error }}</div>
                    <button v-if="!isPending" type="submit" class="btn form-btn btn-primary">Log in</button>
                    <button  type="submit" class="btn form-btn btn-primary" v-if="isPending" disabled >Loading</button>
                </div>

            </form>
        </aside>
    </section>
</template>

<script>
import useLogin from "@/composables/useLogin"
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const {error, login, isPending} = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if(!error.value) {
                console.log('user logged in')
            }
        }


        return{ email,  password, handleSubmit, error, isPending }
    }
}
</script>

<style scoped>
    section.login {
        width:100%;
        height: 100%;
        display: grid;
        background-size: cover;
        position: absolute;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-color: #000;
    }
    aside {
        width: 500px;
        padding: 45px 60px 60px 60px;
        position: absolute;
        right: 0;
        top: 0;
        overflow-y: auto; 
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/timon-klauser-3MAmj1ZKSZA-unsplash.jpg');
    }
    .m-box {
        bottom: 100px;
        color: #ccc;
        position: absolute;
    }
    .form-btn {
        border: none;
        background-color: #1b8a88;
    }
    form {
        color: #ccc;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    }
    .input{
        border: 0;
        border-bottom: 1px solid #1b8a88;
        outline: none;
        color: #ccc;
        display: block;
        box-sizing: border-box;
        background-color: transparent;
    }
    .input:focus {
        color: #ccc;
        outline: none;
        background-color: transparent;
    }
    @media only screen and (max-width: 996px) {
        aside {
            width: 100%;
        }
    }
  
    /* error */
    .error {
        color: #f83f5e;
        font-size: 14px;
        margin: 16px 0;
    } 
</style>

