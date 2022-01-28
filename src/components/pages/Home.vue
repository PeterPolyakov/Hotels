<template>
    <div class="wrapper">
        <header-home></header-home>
        <div class="slider-home contain">
            <slider-comp>
                <h3 class="slider-title">Популярные отели Украины:</h3>
            </slider-comp>
        </div>
        <div class="comments">
            <h3 class="comments-title">Отзывы клиентов:</h3>
        </div> 
    </div>
</template>

<script>
import HeaderHome from "@/components/layout/HeaderHome.vue"
import sliderComp from '../UI/slider-comp.vue'

export default {
    components: {
        HeaderHome,
        sliderComp
    }
}
</script>

<style scoped>
    /* a {
        color: rgb(78, 78, 77);
    }
    .recomend {
        font-size: 28px;
        color: #FBB035;
        padding-top: 30px;
    }
    .wrapper {
        background-color: #ffffff;
    }
    .name {
        font-size: 20px;
        padding: 30px 0;
        
    }
    .name a:hover {
    color: #FBB035;
} */

.comments {
    width: 100%;
    height: 400px;
    background: url("../../assets/comments-bg.jpg") no-repeat 100% 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.slider-home {
    margin-bottom: 30px;
}
.slider-title {
    margin: 30px;
}
</style>