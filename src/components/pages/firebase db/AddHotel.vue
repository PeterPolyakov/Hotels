<template>
  <div class="wrapper">
    <h2>Добавить отель</h2>
    <input-comp 
    placeholder="Название отеля"
    v-model="hotelTitle" 
    />
    <input-comp 
    placeholder="Адрес отеля"
    v-model="hotelAdress" 
    />
    <div>
      <textarea v-model="hotelBody" placeholder="Описание отеля"></textarea>
    </div>
    <button-comp 
    class="add-btn"
    @click="addHotel"
    >
      Добавить
    </button-comp>
  </div>
</template>

<script>
import ButtonComp from '../../UI/form/button-comp.vue';
import inputComp from '../../UI/form/input-comp.vue';

export default {
  name: 'AddHotel',
  components: { inputComp, ButtonComp },
  data() {
    return {
      hotelTitle: '',
      hotelAdress: '',
      hotelBody: '',
    };
  },
  methods: {
    addHotel() {
      this.$store.dispatch("hotels/createHotel", { title: this.hotelTitle, adress: this.hotelAdress, body: this.hotelBody });
      this.$router.push("/hotels");
    },
  },
};
</script>

<style scoped>
h2 {
  color: white;
  margin-top: 30px;
}
textarea {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border: 2px solid rgb(251,176,53);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 15px;
}
textarea::placeholder {
    color: white;
    font-size: 20px;
}
.add-btn {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>