<template>
    <div class="wrapper">
        <div class="contain">
            <nav class="header-nav-menu">
                <div class="logo"><router-link :to="{name: 'Home'}"><img class="header-logo" src="@/assets/logo_white.png" alt="header-logo"></router-link></div>
                <div class="nav-menu">
                    <div><router-link class="nav-menu-item active" :to="{name: 'Hotels'}">Отели</router-link></div>
                    <div><router-link class="nav-menu-item" :to="{name: 'Tickets'}">Билеты</router-link></div>
                    <div><router-link class="nav-menu-item" :to="{name: 'Rest'}">Отдых</router-link></div>
                    <div><router-link class="nav-menu-item" :to="{name: 'About'}">О Нас</router-link></div>
                </div>
                <div class="auth-search">
                    <div class="auth"><router-link :to="{name: 'Auth'}">Войти</router-link></div> 
                    <div class="search-contain">
                    
                        <div class="search-modal offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                            <div class="offcanvas-header">
                                <div class="container">
                                    <h5 class="search-title text-center" id="offcanvasTopLabel">Куда едем?</h5>
                                    <form>
                                        <div class="search-block offcanvas-body">
                                            <input class="search" type="search" name="search" autofocus placeholder="Город или отель">
                                            <input class="date" type="date" name="" placeholder="Дата заезда">
                                            <input class="submit" type="submit" value="Поиск">
                                        </div>
                                    </form>
                                </div>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <h1 class="title">Бронирование отелей, квартир, хостелов</h1>
            <h2 class="subtitle">ПО УКРАИНЕ И МИРУ</h2>
            <h3 class="butto"><button class="search-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Поиск</button></h3>
        </div>
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
.wrapper {
    height: 100vh;
    background: url("../../assets/lissete.jpg") no-repeat 100% 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.header-logo {
    width: 250px;
}
.header-nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0;
}
.nav-menu {
    display: flex;
}
.nav-menu-item {
    padding: 15px 30px;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    transition: 0.3s;
}
.nav-menu-item:hover {
    color: #FBB035;
    border-bottom: 2px solid #FBB035;
    transform: scale(1.2);
}
.active {
    color: #FBB035;
    border-bottom: 2px solid #FBB035;
}
.auth a {
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    margin-right: 50px;
}
.auth a {
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 10px 20px;
}
.auth a:hover {
    border: 2px solid #FBB035;
    border-radius: 5px;
    padding: 10px 20px;
    color: #FBB035;
}
.auth-search {
    display: flex;
    align-items: center;
}
.search-modal {
    background-color: rgb(251,176,53,0.8);
}
.butto {
    text-align: center;
}
.search-button {
    font-size: 26px;
    border: 2px solid #fff;
    padding: 10px 30px;
    border-radius: 5px;
    background: none;
    color: #fff;
    transition: 0.5s;
}
.search-button:hover {
    transform: scale(8.4);
}
.icon-search {
    width: 35px;
}

.search-title {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    margin: 20px 0;
}
.search-block {
    display: flex;
    align-items:flex-end;
    justify-content: space-between;
}
input {
    padding: 10px ;
    border-radius: 5px;
    font-size: 18px;
    
}
.search {
    width: 60%;
}
.search:focus {
    box-shadow: 0px 0px 10px 5px rgb(78, 78, 77,0.5);
}
.date {
    width: 25%;
}
.date:focus {
    box-shadow: 0px 0px 10px 5px rgb(78, 78, 77,0.5);
}
.submit {
    width: 10%;
    font-size: 18px;
    color: #fff;
    background-color: rgb(78, 78, 77,0.5);
}
.submit:hover {
    box-shadow: 0px 0px 10px 5px rgb(78, 78, 77,0.5)
}

.title {
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: 130px;
}
.subtitle {
    color: #fff;
    overflow: hidden;
    position: relative;
    margin: 50px 0;
    text-align: center;
    white-space: nowrap;
}
.subtitle:before,
.subtitle:after {
    content: '';
    display: inline-block;
    position: relative;
    top: -1px;
    width: 10%;
    height: 1px;
    vertical-align: middle;
    background: #fff;
}
.subtitle:before {
    left: -10px;
    margin-left: -50%;
}
.subtitle:after {
    left: 10px;
    margin-right: -50%;
}

</style>