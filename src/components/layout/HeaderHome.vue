<template>
    <div class="wrapper">
        <div class="contain">
            <header-comp>
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
                <h1 class="title">Бронирование отелей, квартир, хостелов</h1>
                <h2 class="subtitle">ПО УКРАИНЕ И МИРУ</h2>
                <h3 class="butto"><button class="search-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Поиск</button></h3>
            </header-comp>
        </div>
    </div>
</template>

<script>
import headerComp from './Header.vue'

export default {
    name: 'headerHome',
    components: {
        headerComp,
    },
}
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
    transform: scale(1.5);
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