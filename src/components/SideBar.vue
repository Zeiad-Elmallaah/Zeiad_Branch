<template>
    <div id="sticky-sidebar" @load="toggleSidebar" style="width:16px">
        <div class="row align-items-start" style="height:100%">
            <div class="col" id="pop-button" @click=toggleSidebar></div>
            <div class="col" id="sidebar-main" style="visibility:hidden">

                <div class="mt-3" id="searchBar">
                    <input type="text" v-model="handle" class="form-control" placeholder="search...">
                </div>

                <div class="mt-3" id="qLinks">
                    .
                </div>

                <div class="mt-3 mb-3" id="friends">
                    .
                </div>

                <div class="mt-3" id="side-buttons">
                    <div class="container row justify-content-between">
                        <div class="col"><button @click="profile">Profile</button></div>          
                        <div class="col"><button @click="logout">Logout</button></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

    export default {
        name:"Sidebar",
        methods: {
            toggleSidebar(){
                var sidebar_m = document.getElementById("sidebar-main"); //sidebar
                var sidebar = document.getElementById("sticky-sidebar"); //div that the sidebar is within

                //hide the sidebar if visible else make it visible
                if (sidebar_m.style.visibility != "hidden"){
                    sidebar_m.style.visibility = "hidden";
                    sidebar.style.width = "16px";
                }
                else {
                    sidebar_m.style.visibility = "visible";
                    sidebar.style.width = "20%";                   
                }
            },
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

<style scoped>
    #sidebar-main{
        margin-left:30px;
        position: relative;
        height: 100%;
    }
    #pop-button {
        background-color:rgb(138, 138, 138);
        height:100%;
        position:fixed;
        width:var(--button-width);
    }
    #searchBar {
        height: 8%;
    }
    #sidebar-main div {
        position: relative;
        max-width: 95%;
    }
    #qLinks {
        background-color: darkgray;
        height:22%;
    }
    #friends{
        height:50%;
    }
    #side-buttons {
        height:8%;
        bottom:5px;
    }
    #side-buttons button{
        width:120%;
        position:relative;
    }
</style>
