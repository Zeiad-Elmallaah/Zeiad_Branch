<template>

    <div>
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input
                type="username"
                placeholder="Username..."
                v-model="username"
            />
            <input
                type="email"
                placeholder="Email address..."
                v-model="email"
            />
            <input
                type="password"
                placeholder="password..."
                v-model="password"
            />
            <button type="submit">Register</button>
        </form>
    </div>
  <!-- html for background -->
  <section class="container">
    <div class="wave"></div>
  </section>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import getCookie from '../utility/utility';

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            user: '',
        };
    },
    methods: {

        register() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    alert('Successfully registered! Please login.');
                    const user = userCredential.user;
                    auth.updateCurrentUser(user.uid, {displayName: username,});
                    this.$router.push('/');
                    document.cookie = "accessToken="+user.accessToken;
                    console.log(user);
                    console.log("Cookie Jar Access Token: ", getCookie("accessToken"));
                })
                .catch((error) => {
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
  background-color: #fff;
  left: -1.5%;
  top: 60%;
}
</style>