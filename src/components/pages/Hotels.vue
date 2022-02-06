<template>
  <div class="wrapper">
    <header-comp></header-comp>
    <div class="con">
      <div class="contain">
        <h1>Отели (Firebase Realtime Database)</h1>
        <h4>Найдено: {{ $store.getters["hotels/count"] }}</h4>
        <div class="add-hotel">
          <add-hotel/>
          <!-- <update-hotel/> -->
        </div>
        <div class="hotel-cards">
          <div class="hotel-card" v-for="hotel in hotelsArr" :key="hotel.id">
            <div class="img-hotel">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/267850949.jpg?k=8b574a4ab6665719d78fd83ee593d8ad6be65e429c6978cbe95d8c47e881210c&o=&hp=1" alt="">
            </div>
            <div class="block-1">
              <div class="hotel-link">
                <router-link class="hotel-title" :to="`/hotel/${hotel.id}`"> {{ hotel.title }} </router-link>
                <p class="adress"><i class="bi bi-geo-alt-fill"></i> {{ hotel.adress }}</p>
              </div>
              <div class="hotel-body">{{ hotel.body }}</div>
              <div class="btn-block">
                <button-comp @click="doDelete(hotel.title)">Удалить</button-comp>
                <!-- <button-comp >Редактировать</button-comp> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComp from "./../layout/Header.vue";
import AddHotel from './firebase db/AddHotel.vue';
// import UpdateHotel from './firebase db/UpdateHotel.vue';

export default {
  components: {
    headerComp,
    AddHotel,
    // UpdateHotel,
  },
  computed: {
    hotelsArr() {
      return this.$store.getters["hotels/all"];
    },
  },
  methods: {
    doDelete (title) {
      this.$store.dispatch('hotels/deleteHotel', title);
    }
  },
};
</script>

<style scoped>
.con {
  background-image: url('https://clipart-db.ru/file_content/rastr/background_019.jpg');
  background-attachment: fixed;
  padding-bottom: 30px;
}
.contain {
  text-align: center;
}
.hotel-card {
  display: flex;
  padding: 20px;
  border: 2px solid rgb(251,176,53);
  border-radius: 10px;
  background-color: rgb(251,176,53,0.5);
  color: white;
  margin-top: 15px;
  font-size: 20px;
}
img {
  width: 600px;
  padding-right: 10px;
}
h1 {
  font-size: 46px;
  color: white;
  padding-top: 20px;
}
h4 {
  font-size: 30px;
  color: white;
}
</style>