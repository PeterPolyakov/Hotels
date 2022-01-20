<template>
    <div v-if="hotel.id">
        <h1>Hotel: {{ hotel.name }}</h1>
        
        <img :src="hotel.photo">
    </div>
    <div v-else>
        Отель не найден
    </div>
</template>

<script>
    const hotels = [
        {
            id:1,
            name:'bukovel',
            photo:'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'
        },
        {
            id: 2,
            name: 'kovel',
            photo: 'http://www.rosphoto.com/images/u/articles/1510/4_8.jpg'
        }
    ];

    import {reactive} from 'vue'

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

                const activeHotel = hotels.find(hotel => hotel.id === parseInt(props.id));

                if (activeHotel) {
                     hotel.id = activeHotel.id;
                     hotel.name = activeHotel.name;
                     hotel.photo = activeHotel.photo;
                }

                return {
                    hotel,
                };
            }
        
    }
</script>