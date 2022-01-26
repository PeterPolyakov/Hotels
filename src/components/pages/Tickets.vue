<template>
    <div class="wrapper">
        <header-comp></header-comp>
            <div class="contain">
                <div class="title">
                    Билеты
                </div>
                <div class="title">
                    Билеты
                </div>
                <div class="title">
                    Билеты
                </div>
                <div class="title">
                    Билеты
                </div>
            </div>
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue'

export default {
    data() {},
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
