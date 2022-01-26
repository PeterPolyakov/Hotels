<template>
    <div class="wrapper">
        <header-comp></header-comp>
        <div class="contain">
            <div class="card mb-3">
                <img src="../../assets/h-kramatorsk.jpg" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
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
    
</style>