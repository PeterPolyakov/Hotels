<template>
  <div v-if="hotels.length > 0">
    <transition-group name="hotel-list">
      <hotel-item 
        v-for="hotel in hotels" 
        :key="hotel.id" 
        :hotel="hotel"
        @remove="$emit('remove', hotel)"
      />
    </transition-group>
  </div>
  <h2 v-else>Список отелей пуст!</h2>
</template>

<script>
import hotelItem from "./hotel-item.vue";

export default {
  components: {hotelItem},
  props: {
    hotels: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
div {
  padding-bottom: 40px;
}
.hotel-list-item {
  display: inline-block;
  margin-right: 10px;
}
.hotel-list-enter-active,
.hotel-list-leave-active {
  transition: all 0.5s ease;
}
.hotel-list-enter-from,
.hotel-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.hotel-list-move {
  transition: transform 0.5s ease;
}
</style>