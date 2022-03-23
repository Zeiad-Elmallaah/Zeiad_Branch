<template>
	<div>
		<div ><SideBar/> <!--v-show="$route.name != Home && $router.name != Register" id="sticky-sidebar"-->
		<!--temporarily here as I can't get to Dashboard without firebase--></div>
		<div>
			<div id="nav">
        <!-- logop as home page -->
				<router-link to="/">
          <img alt="EPIC PIC" src="./assets/logo_landscape.png"
               width="200" height="200">
        </router-link> |
				<router-link to="/register">Register</router-link> |
				<router-link to="/dashboard">Dashboard</router-link> |
				<button @click="logout">Logout</button>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import { getAuth, signOut } from "firebase/auth";

export default {
	components: {
		SideBar
	},
	name: 'App',
	methods: {
        logout() {
			const auth = getAuth();
			signOut(auth).then(() => {

                alert('Successfully logged out');
                this.$router.push('/');

			}).catch((error) => {

				alert(error.message);
                this.$router.push('/');

			})
        },
    },
	

}
</script>

<style>
	.router-view{
		margin-left:40px;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height:100%;
	}
	#nav {
		padding: 30px;
	}
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}
	#nav a.router-link-exact-active {
		color: #42b983;
	}
	input {
		margin-right: 20px;
	}
	#sticky-sidebar{
        --button-width:30px;
        text-align: left;
        background: #1a5e20;
        color: #e3e2e7;
        margin-left: 0px;
        max-width: 20%;
        height:100%;
        z-index: 1;
        position:fixed;   
    }
</style>