<template>
<div class="wrapper">
    <div class="contain">
        <nav class="header-nav-menu">
            <div class="logo"><router-link :to="{name: 'Home'}"><img class="header-logo" src="@/assets/logo_white.png" alt="header-logo"></router-link></div>
            <div class="nav-menu">
                <div><router-link active-class="active" class="nav-menu-item" :to="{name: 'Hotels'}">Отели</router-link></div>
                <div><router-link active-class="active" class="nav-menu-item" :to="{name: 'Tickets'}">Билеты</router-link></div>
                <div><router-link active-class="active" class="nav-menu-item" :to="{name: 'Rest'}">Отдых</router-link></div>
                <div><router-link active-class="active" class="nav-menu-item" :to="{name: 'About'}">Добавить объект</router-link></div>
            </div>
            <div class="auth-search">
                <div class="auth">
                    <button class="button" @click="showModal">
                    Войти
                    </button>
                </div>
            </div>
        </nav>
        <slot></slot>
        <modal-comp
        v-if="isModalVisible"
        @closeModal="closeModal">
        <v-auth></v-auth>
        </modal-comp>
    </div>
</div>
</template>

<script>
import modalComp from '../UI/modal-comp.vue'
import vAuth from '../pages/Auth.vue'

export default {
    name: 'headerComp',
    data(){
        return {
            isModalVisible: false
        }
    },
    components: {
        modalComp,
        vAuth
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
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
    /* height: 10%; */
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
.auth button {
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 10px 20px;
    background: none;
}
.auth button:hover {
    border: 2px solid #FBB035;
    border-radius: 5px;
    padding: 10px 20px;
    color: #FBB035;
}
</style>