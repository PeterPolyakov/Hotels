<template>
  <div class="wrap">
    <div class="contain">
      <h1 class="title">Авторизация</h1>
      <form>
        <input-comp class="mb-3"
          v-model.trim="email"
          type="email"
          label="Email"
        />
        <input-comp class="mb-3"
          v-model.trim="password"
          type="password"
          label="Пароль"
        />
        <div class="mb-3 mt-3 form-check">
          <input class="input form-check-input" id="example"
            v-model="remember"
            type="checkbox"
          />
          <label class="form-check-label" for="example">Запомнить меня</label>
        </div>
        <div class="text-center">
          <button 
            @click.prevent="login" 
            class="button btn btn-primary mb-3"
          >
            Войти
          </button>
          <p class="subtitle">НЕТ АККАУНТА?</p>
          <button 
            @click.prevent="registration" 
            class="button btn btn-primary mb-3"
          >
            Зарегестрироватся
          </button>
          <p class="subtitle">ИЛИ</p>
          <button 
            @click.prevent="google" 
            class="g-auth"
          >
            <img src="../../assets/icon-google.svg" alt="google">
          </button>
        </div>
      </form>
      <hr />
        <div class="text-center small">Входя в аккаунт или создавая новый, вы соглашаетесь с нашими</div>
        <div class="text-center small">
          <a href="#">Правилами и условиями</a> и
          <a href="#">Положением о конфиденциальности</a>
        </div>
        <hr />
        <div class="text-center small">Все права защищены.</div>
        <div class="text-center small">Copyright (2006–2022) — Hotels24.com™</div>
    </div>
  </div>
</template>

<script>
import InputComp from "../UI/form/input-comp.vue";

export default {
  name: "vAuth",
  components: {
    InputComp,
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', {email: this.email, password: this.password}).then((result) => {
        console.log('login result', result)
        this.$emit('closeModal')
      })
    },
    registration() {
      this.$store.dispatch('user/sign', {email: this.email, password: this.password}).then((result) => {
        console.log(result)
        this.$emit('closeModal')
        if (result === 'OK') {
          this.$router.push('/');
        } else if (result === 'error') {
          alert('Ошибка регистрации')
        }
      })
    },
    google() {
      this.$store.dispatch('user/gAuth').then((result) => {
        console.log(result)
        this.$emit('closeModal')
      })
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: rgb(251, 176, 53, 0);
}
.contain {
  width: 80%;
}
.title {
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
  width: 70%;
  border: 1px solid rgb(78, 78, 77);
  background-color: rgb(180, 180, 180);
  color: rgb(78, 78, 77);
}
.g-auth {
  padding: 5px;
  border: 1px solid rgb(78, 78, 77);
  background-color: rgb(180, 180, 180, 0);
  margin-bottom: 15px;
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
    background: rgb(0, 0, 0);
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