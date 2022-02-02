<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-comp'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgb(180, 128, 15);
  border: 1px solid rgb(185, 161, 23);
}
</style>