<template>
    <div class="wrapper">
        <header-comp></header-comp>
        <div class="contain">
            <add-hotel/>
            <hr>
            <h1>{{hotelsCount}}</h1>
            <div class="post" v-for="post in allHotels" :key="post.id">
                <h2 class="title">{{post.title}}</h2>
                <p class="body">{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import headerComp from './../layout/Header.vue';
import addHotel from './../UI/add-hotel.vue'
import { mapGetters } from "vuex";

export default {
    components: {
        headerComp,
        addHotel
    },
    computed: mapGetters(["allHotels", "hotelsCount"]),
    async mounted() {
        this.$store.dispatch("fetchHotels")
    }
}
</script>

<style scoped>
.contain {
    margin: 50px auto;
    width: 500px;
    text-align: center;
}
.post {
    border: 2px solid #ccc;
    border-radius: 10px;
    margin-bottom: 1rem;
    text-align: center;
}
</style>
