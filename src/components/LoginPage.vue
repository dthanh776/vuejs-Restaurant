<template>
    <img class="logo" src="@/assets/restaurant.png" alt="" />
    <h1>Login</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
        />
        <button @click="login">Login</button>

        <p>
            <router-link :to="{ name: 'SignUp' }">Sign up</router-link>
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const router = useRouter();

        const login = async () => {
            let result = await axios.get(
                `http://localhost:3000/users?email=${email.value}&password=${password.value}`
            );
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem(
                    "user-info",
                    JSON.stringify(result.data[0])
                );
                router.push({ name: "Home" });
            }
        };

        onMounted(() => {
            let user = localStorage.getItem("user-info");

            if (user) {
                router.push({ name: "Home" });
            }
        });

        return { email, password, login };
    },
};
</script>

<style>
</style>