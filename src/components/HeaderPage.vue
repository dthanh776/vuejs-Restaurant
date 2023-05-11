<template>
    <div class="nav">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Add' }">Add Restaurant</router-link>
        <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        const logout = () => {
            localStorage.clear();
            router.push({ name: "Login" });
        };

        return { logout };
    },
};
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>