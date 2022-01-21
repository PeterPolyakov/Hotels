<template>
    <div class="container">
            <div class="recomend">Рекомендуем:</div>
            <div class="name"><router-link :to="{name: 'Hotel details', params: {id: 1}}">"Hotel "Kramatorsk"</router-link></div>
            <div class="img"><img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/267850949.jpg?k=8b574a4ab6665719d78fd83ee593d8ad6be65e429c6978cbe95d8c47e881210c&o=&hp=1" alt="hotel1"></div>
            <div class="name"><router-link :to="{name: 'Hotel details', params: {id: 2}}">"Hotel Aisty"</router-link></div>
            <div class="img"><img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/198545321.jpg?k=6aa766d9f9dbedcd0e35c554e5afc61b36a3ea575670fe300b18bde2abaa1d26&o=&hp=1" alt="hotel2"></div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    a {
        text-decoration: none;
        color: rgb(78, 78, 77);
    }
    .recomend {
        font-size: 28px;
        color: #EC2C45;
        padding-top: 30px;
    }
    .container {
        max-width: 1320px;
        margin: 0 auto;
        background-color: rgb(187, 187, 187);
    }
    .name {
        font-size: 20px;
        padding: 30px 0;
        
    }
    .name a:hover {
    color: #EC2C45;
}
    .img {
        
    }
</style>