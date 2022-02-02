<template>
    <div class="contain">
        <h1>Страница с отелями</h1>
        <form action="#" @submit.prevent="submit">
            <input class="add-form" type="text" placeholder="Название отеля" v-model="title" required>
            <input class="add-form" type="text" placeholder="Адрес отеля" v-model="body" required>
            <button type="submit">Добавить объект</button>
        </form>
        <hr>
        <input type="text" v-model="search" placeholder="Поиск">
        <select>
            <option disabled selected value="">Сортировать</option>
            <option value="">По дате</option>
            <option value="">По популярности</option>
        </select>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            title: '',
            body: '',
            search: '',
        }
    },
    methods: {
        ...mapMutations(['addHotel']),
        submit() {
            this.addHotel({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = "";
        }
    }
}
</script>

<style scoped>
input, select {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    
}
.add-form {
    margin: 30px 10px;
    width: 45%;
}
select {
    margin-left: 20%;
}
button {
    width: 30%;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    color: rgb(136, 96, 96);
    font-size: 18px;
    margin-bottom: 30px;
}
</style>