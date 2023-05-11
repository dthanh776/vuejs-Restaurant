<template>
    <HeaderPage />
    <h1>Add Page ...{{ name }}...</h1>
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
        <button type="button" @click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
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

        const restaurant = reactive({
            name: "",
            address: "",
            contact: "",
        });

        const addRestaurant = async () => {
            const result = await axios.post(
                "http://localhost:3000/restaurants",
                {
                    name: restaurant.name,
                    address: restaurant.address,
                    contact: restaurant.contact,
                }
            );
            if (result.status == 201) {
                router.push({ name: "Home" });
            }
        };

        onMounted(() => {
            let user = localStorage.getItem("user-info");
            if (!user) {
                router.push({ name: "SignUp" });
            }

            // if (user) {
            //     const { name: userName } = JSON.parse(user);
            //     name.value = userName;
            // }

            name.value = JSON.parse(user).name;
        });
        return { name, restaurant, addRestaurant };
    },
};
</script>

<style>
</style>