<template>
    <HeaderPage />
    <h1>Update Page ...{{ name }}...</h1>
    <h1>{{ restaurant.value }}</h1>
    <form action="" class="add">
        <input
            type="text"
            name="name"
            placeholder="Enter name"
            v-model="restaurant.name"
        />
        <input
            type="text"
            name="address"
            placeholder="Enter address"
            v-model="restaurant.address"
        />
        <input
            type="text"
            name="contact"
            placeholder="Enter contact"
            v-model="restaurant.contact"
        />
        <button type="button" @click="updateRestaurant">
            Update Restaurant
        </button>
    </form>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import HeaderPage from "./HeaderPage.vue";

export default {
    components: {
        HeaderPage,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const name = ref("");

        const restaurant = reactive({
            name: "",
            address: "",
            contact: "",
        });

        onMounted(async () => {
            let user = localStorage.getItem("user-info");
            if (!user) {
                router.push({ name: "SignUp" });
            }

            const result = await axios.get(
                `http://localhost:3000/restaurants/${route.params.id}`
            );
            restaurant.name = result.data.name;
            restaurant.address = result.data.address;
            restaurant.contact = result.data.contact;

            if (user) {
                const { name: userName } = JSON.parse(user);
                name.value = userName;
            }
        });

        const updateRestaurant = async () => {
            const result = await axios.put(
                `http://localhost:3000/restaurants/${route.params.id}`,
                {
                    name: restaurant.name,
                    address: restaurant.address,
                    contact: restaurant.contact,
                }
            );
            console.log(result);
            if (result.status == 200) {
                router.push({ name: "Home" });
            }
        };

        return { name, restaurant, updateRestaurant };
    },
};
</script>

<style>
</style>