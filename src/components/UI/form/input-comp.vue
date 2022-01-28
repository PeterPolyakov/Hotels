<template>
    <div class="wrapper">
        <label class="form-label">{{label}}</label>
            <input class="input form-control"
            :type="type"
            :value="modelValue"
            @input="updateInput"
            >
    </div>
</template>

<script>
export default {
    name: "input-сomp",
    props: {
        modelValue: {
            type: [String, Number]
        },
        type: { 
            type: String, 
            default: 'text'
        },
        label: { 
            type: String, 
            default: ''
        }
    },
    methods: {
        updateInput (e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    border: 1px solid rgb(78, 78, 77);
}
</style>
