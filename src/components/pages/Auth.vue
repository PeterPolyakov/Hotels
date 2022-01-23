<template>
    <div class="wrapper">
        <div class="contain">
            <h1 class="title text-center mb-5 mt-5">Войдите или создайте аккаунт</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                    <input type="email" class="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input type="password" class="input form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="input form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                </div>
                <button type="submit" class="button btn btn-primary mb-3">Войти</button>
            </form>
            <hr>
            <div class="text-center small">Входя в аккаунт или создавая новый, вы соглашаетесь с нашими</div> 
                <div class="text-center small"><a href="">Правилами и условиями</a> и <a href="">Положением о конфиденциальности</a></div>
            <hr>
            <div class="text-center small">Все права защищены.</div>
            <div class="text-center small">Copyright (2006–2022) — Hotels24.com™</div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .contain {
        width: 500px;
        height: 100vh;
        
    }
    .wrapper {
        background-color: #ffffff;
    }
    .title{
        font-size: 24px;
        font-weight: 700;
        color: rgb(78, 78, 77);
    }
    .input {
        border: 1px solid rgb(78, 78, 77);
    }
    .button {
        width: 500px;
        text-align: center;
        border: 1px solid rgb(78, 78, 77);
        background-color: rgb(180, 180, 180);
        color: rgb(78, 78, 77);
    }
</style>