<template>
<div class="wrap">
    <div class="contain">
        <h1 class="title">Регистрация</h1>
        <form action="#">
            <div class="blocs mb-3">
                <div class="bloc">
                    <div class="mb-3">
                        <label for="name" class="form-label">Логин</label>
                        <input 
                        class="input form-control" 
                        id="name"
                        v-model.trim="name"
                        required
                        >
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Адрес электронной почты</label>
                        <input 
                        class="input form-control" 
                        type="email" 
                        id="email"
                        v-model.trim="email"
                        required
                        >
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Пароль</label>
                        <input 
                        class="input form-control" 
                        type="password"
                        id="password"
                        v-model.trim="password"
                        required
                        >
                    </div>
                    <div class="mb-3">
                        <label for="password_2" class="form-label">Повторите пароль</label>
                        <input 
                        class="input form-control" 
                        type="password" 
                        id="password_2"
                        v-model.trim="password_2"
                        required
                        >
                    </div>
                </div>
                <div class="bloc">
                    <div>
                        <label for="district" class="form-label">Область</label>
                        <select v-model="district" class="form-select input mb-3" id="district">
                            <option 
                            v-for="(district, index) in districts"
                            :value="district.value"
                            :key="index"
                            >
                            {{ district.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-check">
                        <input v-model="gender" class="form-check-input" value="male" type="radio" name="gender" id="male" checked>
                        <label class="form-check-label" for="male">Мужчина</label>
                    </div>
                    <div class="form-check">
                        <input v-model="gender" class="form-check-input" value="female" type="radio" name="gender" id="female">
                        <label class="form-check-label" for="female">Женщина</label>
                    </div>
                    <div class="mb-3 mt-3 form-check">
                        <input v-model="remember" type="checkbox" class="input form-check-input" id="example">
                        <label class="form-check-label" for="example">Запомнить меня</label>
                    </div>
                    <div class="form-floating">
                        <textarea v-model.trim="message" class="form-control input mb-3" placeholder="Сообщение" id="message" style="height: 120px"></textarea>
                        <label for="message">Сообщение</label>
                    </div>
                </div>
            </div>
                <div class="text-center"><button type="submit" class="button btn btn-primary mb-3">Войти</button></div>
            <hr>
            <div class="text-center small">Входя в аккаунт или создавая новый, вы соглашаетесь с нашими</div> 
                <div class="text-center small"><a href="">Правилами и условиями</a> и <a href="">Положением о конфиденциальности</a></div>
            <hr>
            <div class="text-center small">Все права защищены.</div>
            <div class="text-center small">Copyright (2006–2022) — Hotels24.com™</div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'vAuth',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_2: '',
            gender: 'male',
            remember: false,
            message: '',
            district: 'Donetsk',
            districts: [
                {
                name: 'Донецкая',
                value: 'Donetsk'
                },
                {
                name: 'Харьковская',
                value: 'Kharkiv'
                },
                {
                name: 'Луганская',
                value: 'Luhansk'
                },
            ]
        }
    }
}
</script>

<style scoped>
.wrap {
    background-color: rgb(251,176,53,0);
}
.contain {
    width: 100%;
    /* height: 100vh; */
}
.blocs {
    display: flex;
    justify-content: space-around;
}
.bloc {
    width: 40%;
}
.title{
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: rgb(78, 78, 77);
}
.input {
    border: 1px solid rgb(78, 78, 77);
    resize: none;
}
.button {
    width: 500px;
    border: 1px solid rgb(78, 78, 77);
    background-color: rgb(180, 180, 180);
    color: rgb(78, 78, 77);
}
</style>