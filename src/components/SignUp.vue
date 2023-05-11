<template>
    <img class="logo" src="@/assets/restaurant.png" alt="" />
    <h1>Sign up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
        />
        <button @click="signUp">Sign up</button>

        <p>
            <router-link :to="{ name: 'Login' }">Login</router-link>
        </p>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
    setup() {
        const name = ref("");
        const email = ref("");
        const password = ref("");

        const router = useRouter();

        const signUp = async () => {
            let result;
            if (
                name.value !== "" &&
                email.value !== "" &&
                password.value !== ""
            ) {
                result = await axios.post("http://localhost:3000/users", {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                });
            }
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                router.push({ name: "Home" });
            }
        };

        onMounted(() => {
            let user = localStorage.getItem("user-info");

            if (user) {
                router.push({ name: "Home" });
            }
        });
        return { signUp, name, email, password };
    },
};
</script>

<style>
</style>