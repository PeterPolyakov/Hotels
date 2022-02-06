<template>
  <div>
    PostForm {{ $route.params.id }}
    <input-comp v-model="hotelTitle" />
    <input-comp v-model="hotelAdress" />
    <button-comp @click="updateHotel">Обновить</button-comp>
  </div>
</template>

<script>
import ButtonComp from '../../UI/form/button-comp.vue';
import inputComp from '../../UI/form/input-comp.vue';
export default {
  components: { inputComp, ButtonComp },
  name: 'UpdateHotel',
  data() {
    return {
      hotelTitle: "",
      hotelAdress: "",
      hotelId: '',
    };
  },
  // created() {
  //   const id = this.$route.params.id;
  //   const hotelById = this.$store.getters["posts/postById"];
  //   const editHotel = hotelById(id);
  //   this.hotelId = editHotel?.id;
  //   this.hotelTitle = editHotel?.title;
  //   this.hotelAdress = editHotel?.adress;
  // },
  methods: {
    updateHotel() {
      this.$store.dispatch("hotels/updateHotel", {
        id: this.hotelId,
        title: this.hotelTitle,
        adress: this.hotelAdress,
      });
      this.$router.push("/hotels");
    },
  },
};
</script>