<template>
  <select v-model="selected" @change="changeOption">
    <option disabled value="disabled">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectComp',
  data() {
    return {
      selected: 'disabled'
    }
  },
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
select {
  border: 2px solid rgb(251,176,53,0.8);
  background-color: rgb(251,176,53,0.5);
  border-radius: 5px;
}
option {
  color: white;
}
</style>