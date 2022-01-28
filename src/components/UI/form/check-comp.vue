<template>
    <div class="form-check">
        <label class="form-check-label">
            <input 
            class="form-check-label"
            type="checkbox"
            :checked="beChecked"
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
    name: 'CheckComp',
    model: {
        prop: 'modelValue',
        event: 'change'
    },
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
            default: false
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        }
    },
    computed: {
        beChecked() {
        if (this.modelValue instanceof Array) {
            return this.modelValue.includes(this.value)
        }
        return this.modelValue === this.trueValue    }
    },
    methods: {
        updateInput(event) {
        let isChecked = event.target.checked     
            if (this.modelValue instanceof Array) {
            let newValue = [...this.modelValue]

            if (isChecked) {
            newValue.push(this.value)
            } else {
            newValue.splice(newValue.indexOf(this.value), 1)
            }

            this.$emit('change', newValue)
        } else {
            this.$emit('change', isChecked ? this.trueValue : this.falseValue)
        }
        }
    }
    // methods: {
    //     onChange (value) {
    //         if (this.modelValue.includes(this.value)) {
    //             this.$emit('update:modelValue', this.modelValue.filter(cv => cv !== value))
    //         }
    //         else {
    //             this.$emit('update:modelValue', this.modelValue.concat(value))
    //         }
    //     }
    // }
}
</script>