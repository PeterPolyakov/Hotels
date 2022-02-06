<template>
    <div>
        <form @submit.prevent>
            <h4>Добавить отель</h4>
            <input-comp
                v-model.trim="hotel.title"
                type="text" 
                placeholder="Название отеля"
            />
            <input-comp
                v-model.trim="hotel.body"
                type="text" 
                placeholder="Адресс отеля"
            />
            <button-comp 
                class="button" 
                @click="addHotel"
            >
            Добавить
            </button-comp>
        </form>
    </div>
</template>

<script>
import inputComp from './form/input-comp.vue';

export default {
    components: { inputComp },
    data() {
        return {
            hotel: {
                title: '',
                adress: ''
            }
        }
    },
    methods: {
        addHotel() {
            this.hotel.id = Date.now();
            this.$emit('add', this.hotel)
            this.hotel = {
                title: '',
                adress: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    color: white;
}

.button {
    align-self: flex-end;
    margin-top: 15px;
}
</style>