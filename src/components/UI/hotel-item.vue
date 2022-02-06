<template>
  <div class="hotel">
    <div class="block">
      <div class="block-1">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/267850949.jpg?k=8b574a4ab6665719d78fd83ee593d8ad6be65e429c6978cbe95d8c47e881210c&o=&hp=1" alt="">
      </div>
      <div class="block-2">
        <div><strong>Название:</strong> {{hotel.title}}</div>
        <div><strong>Адрес:</strong> {{hotel.url}}</div>
        <div class="hotel-btns">
          <button-comp class="btns">Подробнее</button-comp>
          <button-comp class="btns" @click="$emit('remove', hotel)">Не показывать</button-comp>
        </div>
      </div>
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
    border: 2px solid rgb(251,176,53);
    border-radius: 10px;
    background-color: rgb(251,176,53,0.5);
    color: white;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
}
.block {
  display: flex;
}
.block-1 {
  margin-right: 20px;
}
.btns {
  margin: 20px;
}
img {
  width: 400px;
}
strong {
  font-size: 22px;
}
</style>
