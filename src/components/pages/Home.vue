<template>
    <div>
        <p>
            Home page
        </p>
        <p>
            <router-link class="link" :to="{name: 'Hotel details', params: {id: 1}}">Hotel 1</router-link>

            <br/>
            <router-link class="link" :to="{name: 'Hotel details', params: {id: 2}}">Hotel 2</router-link>
            
            <br/>
            <router-link class="link" :to="{name: 'About'}">About</router-link>
        </p>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .link {
        color: red;
        text-decoration: none;
        margin-bottom: 20px;
    }
</style>