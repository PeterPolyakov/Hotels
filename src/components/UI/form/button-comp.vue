<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-comp'
}
</script>

<style scoped>
.button {
    background-color: rgb(251,176,53,0.5);;
    border: 2px solid rgb(251,176,53);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 10px 15px;
}
</style>