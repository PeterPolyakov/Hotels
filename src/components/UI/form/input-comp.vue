<template>
    <div class="wrapper">
        <label class="form-label">{{label}}</label>
            <input class="input form-control"
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateInput"
            >
    </div>
</template>

<script>
export default {
    name: 'input-сomp',
    props: {
        modelValue: {
            type: [String, Number]
        },
        type: { 
            type: String, 
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: { 
            type: String, 
            default: ''
        }
    },
    methods: {
        updateInput (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;

}
</style>
