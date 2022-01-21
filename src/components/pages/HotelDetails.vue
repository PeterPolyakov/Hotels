<template>
    <div v-if="hotel.id">
        <h1>Hotel: {{ hotel.name }}</h1>
        <img :src="hotel.photo" />
    </div>
    <div v-else>Отель не найден</div>
</template>

<script>
    const hotels = [
    {
        id: 1,
        name: "Hotel Kramatorsk",
        photo: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/267850949.jpg?k=8b574a4ab6665719d78fd83ee593d8ad6be65e429c6978cbe95d8c47e881210c&o=&hp=1",
    },
    {
    id: 2,
    name: "Hotel Aisty",
    photo: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/198545321.jpg?k=6aa766d9f9dbedcd0e35c554e5afc61b36a3ea575670fe300b18bde2abaa1d26&o=&hp=1",
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
