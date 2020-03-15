<template>
    <div id="home">
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
        <router-link v-bind:class="[$style.link]" to="/profile">profile</router-link>
    </div>
</template>

<script>
export default {
    components: {
    },
    metaInfo: {
        title: 'Home'
    }
}
</script>

<style module>
.link {
    display: block;
    margin: 10px 0;
    padding: 10px 0;
    color: #666666;
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
}

.link:hover {
    display: block;
    margin: 10px 0;
    padding: 10px 0;
    color: #333333;
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
}
</style>
