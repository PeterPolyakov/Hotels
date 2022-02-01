<template>
    <div class="modal-wrapper" ref="modal-wrapper">
        <div class="mod">
            <i class="icon bi bi-x-lg"
            @click="closeModal"
            ></i>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal-comp",
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function (item) {
            if (item.target === vm.$refs['modal-wrapper']) {
                vm.closeModal()
            }
        })
    }
}
</script>

<style scoped>
.modal-wrapper {
    background-color: rgba(230, 224, 216, 0.5);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.mod {
    padding: 20px;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 90%;
    width: 35%;
    background-color: rgb(251,176,53,0.9);
    box-shadow: 0 0 17px 0 rgb(251,176,53,0.9);
}
.icon {
    font-size: 28px;
    position: fixed;
    right: 34%;
    top: 6%;
    cursor: pointer;
}
</style>
