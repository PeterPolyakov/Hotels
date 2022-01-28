<template>
    <div class="form-check">
        <label class="form-check-label">
            <input 
            class="input form-check-input"
            type="radio"
            :checked="value === modelValue"
            :value="value"
            :name="name"
            @change="updateInput"
            >
            {{label}}
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioComp',
    props: {
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: true
        },
        modelValue: {
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