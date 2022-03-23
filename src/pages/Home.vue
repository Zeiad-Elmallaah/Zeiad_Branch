<template>
    <div>
        <form @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email address..." v-model="email"/>
            <input type="password" placeholder="password..." v-model="password"/>
            <button type="submit">Login</button>
        </form>
    </div>
  <!-- html for background -->
  <section class="container">
    <div class="wave"></div>
  </section>

</template>

<script>
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    alert('Successfully logged in');
                    this.$router.push('/dashboard');
                    const user = userCredential.user;
                    document.cookie = "accessToken="+user.accessToken;
                    console.log("Cookie Jar Access Token: ", getCookie("accessToken"));
                })
                .catch(error => {
                    console.log(error.message);
                });
        },
    },
};
</script>
<!-- css for background -->
<style>
.container {
  position: relative;
  background: #2c3e50;
  height: 50vh;
}

.wave {
  position: absolute;
  height: 250px;
  width: 100%;
  background: #2c3e50;
  bottom: 0;
}

.wave::before, .wave::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 50% 100%;
}

.wave::before {
  width: 55%;
  height: 100%;
  background-color: #2c3e50;
  right: -1.5%;
  top: 40%;
}
.wave::after {
  width: 55%;
  height: 109%;
  background-color: WHITE;
  left: -1.5%;
  top: 60%;
}
</style>