<template>
  <div class="hotel">
    <div>
      <div><strong>Название:</strong> {{hotel.title}}</div>
      <div><strong>Адрес:</strong> {{hotel.body}}</div>
    </div>
    <div class="hotel-btns">
      <button-comp @click="$emit('remove', hotel)">Удалить</button-comp>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.hotel {
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
