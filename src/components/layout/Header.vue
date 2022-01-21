<template>
    <div class="container">
        <nav class="header-nav-menu">
            <div class="logo"><router-link :to="{name: 'Home'}"><img class="header-logo" src="@/assets/logo.svg" alt="header-logo"></router-link></div>
            <div><router-link :to="{name: 'Hotels'}">Отели</router-link></div>
            <div><router-link :to="{name: 'Tickets'}">Билеты</router-link></div>
            <div><router-link :to="{name: 'Rest'}">Отдых</router-link></div>
            <div class="auth"><router-link :to="{name: 'Auth'}">Войти</router-link></div>
        </nav>
    </div>
</template>

<script>
    
</script>

<style scoped>
* {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
.container {
    display: flex;
    width: 100%;
    background-color: rgb(145, 143, 143);
}
.header-logo {
    width: 150px;
}
.header-nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
.header-nav-menu div a {
    font-size: 20px;
    font-weight: 500;
    color: rgb(78, 78, 77);
}
.header-nav-menu div a:hover {
    color: #EC2C45;
}
.auth a {
    border: 1px solid rgb(78, 78, 77);
    border-radius: 5px;
    padding: 10px 20px;
}
.auth a:hover {
    border: 1px solid #EC2C45;
    border-radius: 5px;
    padding: 10px 20px;
    color: #EC2C45;

}



</style>