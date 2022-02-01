<template>
    <div class="contain">
        <form action="#" @submit.prevent="submit">
            <input type="text" placeholder="Название отеля" v-model="title" required>
            <input type="text" placeholder="Адрес отеля" v-model="body" required>
            <button type="submit">Добавить объект</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            title: '',
            body: ''
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
input {
    display: block;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
}
button {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    color: rgb(136, 96, 96);
    font-size: 18px;
}
</style>