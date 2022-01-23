<template>
    <div class="wrapper">
        <div class="contain">
            <div id="carouselExampleSlidesOnly" class="slider carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <router-link :to="{name: 'Hotel details', params: {id: 1}}"><img src="@/assets/h-kramatorsk.jpg" class="d-block w-100" alt="h-kramatorsk"></router-link>
                    </div>
                    <div class="carousel-item">
                        <router-link :to="{name: 'Hotel details', params: {id: 2}}"><img src="@/assets/h-gut.jpg" class="d-block w-100" alt="h-gut"></router-link>
                    </div>
                    <div class="carousel-item">
                        <router-link :to="{name: 'Hotel details', params: {id: 2}}"><img src="@/assets/h-aisty.jpg" class="d-block w-100" alt="h-aisty"></router-link>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    a {
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
}
.slider {
    width: 70%;
    height: 100vh;
    margin: 0 auto;
}
</style>