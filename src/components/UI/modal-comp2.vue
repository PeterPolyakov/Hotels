<template>
  <div class="modal" v-if="show === true" @click.stop="hideModal">
    <div @click.stop class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-comp2',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.modal {
  background-color: rgba(230, 224, 216, 0.5);
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
}
.modal-content {
  margin: auto;
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
}
</style>
