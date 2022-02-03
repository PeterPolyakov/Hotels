<template>
    <div class="wrapper">
        <header-comp></header-comp>
        <div class="contain">
            <h1>Отели</h1>
            <input-comp
                v-model="searchHotel"
                placeholder="Поиск"
            />
            <div class="buttons">
                <button-comp
                    @click="showModal"
                >
                    Добавить отель
                </button-comp>
                <select-comp 
                    v-model="selectedSort"
                    :options="sortOptions"
                />
            </div>
            <modal-comp-2 v-model:show="modalVisible">
                <hotel-add
                @add="addHotel"
            />
            </modal-comp-2>
            <hotel-list
                :hotels='sortedAndSearchHotels'
                @remove="removeHotel"
                v-if="!isLoading"
            />
            <div v-else>Загрузка...</div>
        </div>
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue';
import hotelList from './../UI/hotel-list.vue';
import hotelAdd from './../UI/hotel-add.vue';
import ModalComp2 from '../UI/modal-comp2.vue';
import axios from 'axios';
import SelectComp from '../UI/form/select-comp.vue';
import InputComp from '../UI/form/input-comp.vue';

export default {
    components: {
        headerComp,
        hotelList,
        hotelAdd,
        ModalComp2,
        SelectComp,
        InputComp,
    },
    data() {
        return {
            hotels: [],
            modalVisible: false,
            isLoading: false,
            searchHotel: '',
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По адресу' },
            ]
        }
    },
    methods: {
        addHotel(hotel) {
            this.hotels.unshift(hotel);
            this.modalVisible = false;
        },
        removeHotel(hotel) {
            this.hotels = this.hotels.filter(h => h.id !== hotel.id)
        },
        showModal() {
            this.modalVisible = true;
        },
        async fetchHotels() {
            try {
                this.isLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
                    this.hotels = response.data;
                    this.isLoading = false;
            } catch (e) {
                alert('Ошибка')
            }
        }
    },
    mounted() {
        this.fetchHotels();
    },
    computed: {
        sortedHotels() {
            return [...this.hotels].sort((hotel1, hotel2) => hotel1[this.selectedSort]?.localeCompare(hotel2[this.selectedSort]))
        },
        sortedAndSearchHotels() {
            return this.sortedHotels.filter(post => post.title.toLowerCase().includes(this.searchHotel.toLowerCase()))
        }
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.contain {
    width: 70%;
    padding: 15px;
    margin: 20px auto;
}
.buttons {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
</style>
