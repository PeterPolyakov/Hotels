<template>
    <div class="wrapper">
        <label class="form-label">{{label}}</label>
            <input class="input form-control"
            required
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateInput"
            >
    </div>
</template>

<script>
export default {
    name: 'InputComp',
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
    border: 2px solid rgb(251,176,53);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 15px;
}
input::placeholder {
    color: white;
    font-size: 20px;
}
</style>
