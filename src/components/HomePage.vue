<template>
    <HeaderPage />
    <h1>Home Page ...{{ name }}...</h1>
    <table border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{ restaurant.id }}</td>
            <td>{{ restaurant.name }}</td>
            <td>{{ restaurant.contact }}</td>
            <td>{{ restaurant.address }}</td>
            <td>
                <router-link :to="'/update/' + restaurant.id"
                    >Update</router-link
                >
                <button @click="deleteRestaurant(restaurant.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";

export default {
    components: {
        HeaderPage,
    },
    setup() {
        const router = useRouter();

        const name = ref("");
        const restaurants = ref([]);

        const deleteRestaurant = async (id) => {
            let result = await axios.delete(
                `http://localhost:3000/restaurants/${id}`
            );
            if (result.status == 200) {
                loadData();
            }
        };

        const loadData = async () => {
            let user = localStorage.getItem("user-info");

            if (!user) {
                router.push({ name: "SignUp" });
            }

            if (user) {
                const { name: userName } = JSON.parse(user);
                name.value = userName;
            }

            let result = await axios.get("http://localhost:3000/restaurants");

            restaurants.value = result.data;
        };

        onMounted(async () => {
            await loadData();
        });
        return { name, restaurants, deleteRestaurant, loadData };
    },
};
</script>

<style>
td {
    width: 160px;
    height: 40px;
    text-align: center;
}
</style>