<template>
    <div>
        <h2>Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';

export default {
    name: 'Dashboard',
    components: {
        SideBar
    },
};
</script>

<style lang="scss" scoped></style>
