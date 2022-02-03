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
    background: none;
    border: 2px solid #ccc;
    color: rgb(92, 91, 91);
    border-radius: 5px;
    padding: 10px 15px;
}
</style>