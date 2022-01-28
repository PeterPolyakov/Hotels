<template>
    <div class="wrapper">
        <header-comp></header-comp>

        <div v-if="hotel.id">
            <h1>{{ hotel.name }}</h1>
            <img :src="hotel.photo" />
        </div>
        <div v-else>Отель не найден</div>
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue'

const hotels = [
    {
        id: 1,
        name: "Hotel Kramatorsk",
        photo: require("@/assets/h-kramatorsk.jpg"),
    },
    {
        id: 2,
        name: "Hotel Gut",
        photo: require("@/assets/h-gut.jpg"),
    },
    {
        id: 3,
        name: "Hotel Aisty",
        photo: require("@/assets/h-aisty.jpg"),
    },
];

import { reactive } from "vue";

export default {
    props: {
    id: {
        required: true,
        type: Number,
    },
    },
    components: {
        headerComp
    },
    setup(props) {
    const hotel = reactive({
        id: null,
        name: null,
        photo: null,
    });

    // вызов бека

    const activeHotel = hotels.find((hotel) => hotel.id === parseInt(props.id));

    if (activeHotel) {
        hotel.id = activeHotel.id;
        hotel.name = activeHotel.name;
        hotel.photo = activeHotel.photo;
    }
    return {
        hotel,
    };
},
};
</script>
