<template>
    <header-comp/>
    <div class="wrapper">
        <div class="con">
            <div class="contain">
                <h1 class="title">Отели</h1>
                <div class="buttons">
                    <button-comp
                        class="b"
                        @click="showModal"
                    >
                        Добавить отель
                    </button-comp>
                    <select-comp 
                        class="s"
                        v-model="selectedSort"
                        :options="sortOptions"
                    />
                    <input-comp
                        class="i"
                        v-model="searchHotel"
                        placeholder="Поиск"
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
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue';
import hotelList from './../UI/hotel-list.vue';
import hotelAdd from './../UI/hotel-add.vue';
import axios from 'axios';

export default {
    components: {
        headerComp,
        hotelList,
        hotelAdd,
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
                    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5');
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
.con {
    background-image: url('https://clipart-db.ru/file_content/rastr/background_019.jpg');
    background-attachment: fixed;
}
.contain {
    width: 70%;
    margin: 0 auto;
    color: white;
    font-size: 20px;
}
.title {
    text-align: center;
    font-size: 46px;
    padding-top: 20px;
}
.buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.b, .s, .i {
    width: 350px;
}
.b, .s {
    height: 50px;
    margin-top: 30px;
}
</style>
