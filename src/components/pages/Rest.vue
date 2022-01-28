<template>
    <div class="wrapper">
        <header-comp></header-comp>
        <div class="contain">
            <div class="title">
                Места для отдыха
            </div>
            <div class="title">
                Места для отдыха
            </div>
            <div class="title">
                Места для отдыха
            </div>
            <div class="title">
                Места для отдыха
            </div>
            <div class="title">
                Места для отдыха
            </div>
        </div>
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue'

export default {
    components: {
        headerComp
    }
}

</script>

<style scoped>
    .title {
        font-size: 100px;
        font-weight: 900;
        margin-bottom: 50px;
    }
</style>
