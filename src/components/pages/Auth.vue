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
          <button @click.prevent="login" class="button btn btn-primary mb-3">Войти</button>
          <hr>
          <button @click="gAuth"><img src="../../assets/icon-google.svg" alt="google"></button>
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
        <!-- <div class="bloc">
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
                    <radio-comp
                    v-model="gender"
                    value="male"
                    name="gender"
                    label="Мужчина"
                    />
                    <radio-comp
                    v-model="gender"
                    value="female"
                    name="gender"
                    label="Женщина"
                    />
                    
                    <div class="form-floating">
                        <textarea v-model.trim="message" class="form-control input mb-3" placeholder="Сообщение" id="message" style="height: 120px"></textarea>
                        <label for="message">Сообщение</label>
                    </div>
                </div> -->
    </div>
  </div>
</template>

<script>
import InputComp from "../UI/form/input-comp.vue";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export default {
  namespaced: true,
  name: "vAuth",
  components: {
    InputComp,
  },
  data() {
    return {
      // name: "",
      email: "",
      password: "",
      // password_2: "",
      // gender: "male",
      remember: false,
      // message: "",
      // district: "Donetsk",
      // districts: [
      //   {
      //     name: "Донецкая",
      //     value: "Donetsk",
      //   },
      //   {
      //     name: "Харьковская",
      //     value: "Kharkiv",
      //   },
      //   {
      //     name: "Луганская",
      //     value: "Luhansk",
      //   },
      // ],
    };
  },
  methods: {
    gAuth: function() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        let token = result.credential.assetsToken;
        let user = result.user;
          console.log(token)
          console.log(user)
      }).catch(err => {
        console.log(err);
      });
    },
    async login() {
      await this.$store.dispatch('user/login', {email: this.email, password: this.password}).then((result) => {
        console.log('login result', result)
        this.$router.push('/')
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
</style>