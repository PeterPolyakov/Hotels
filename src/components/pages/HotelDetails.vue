<template>
    <div v-if="hotel.id">
        <h1>{{ hotel.name }}</h1>
        <img :src="hotel.photo" />
    </div>
    <div v-else>Отель не найден</div>
</template>

<script>
    const hotels = [
    {
        id: 1,
        name: "Hotel Kramatorsk",
        photo: "../../assets/h-kramatorsk.jpg",
    },
    {
    id: 2,
    name: "Hotel Gut",
    photo: "../../assets/h-gut.jpg",
    },
    {
        id: 3,
        name: "Hotel Aisty",
        photo: "../../assets/h-aisty.jpg",
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
