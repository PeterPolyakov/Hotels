<template>
  <div class="wrapper">
    <header-comp></header-comp>
    <div class="contain">
      
    </div>
  </div>
</template>

<script>
import headerComp from "./../layout/Header.vue";

export default {
  data() {
    return {
      hotels: [
        {id: 1, name: "Отель 'Краматорск'", photo: require("@/assets/h-kramatorsk.jpg")}
      ]
    }
  },
  components: {
    headerComp,
  },
};
</script>

<style scoped>
</style>