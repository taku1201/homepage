<template>
    <div>
        <h2 v-bind:class="$style.section">404 Not Found</h2>
        <router-link v-bind:class="$style.link" to="/">Back To Home</router-link>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: '404 Not Found'
    }
}
</script>

<style module>
.section {
    margin: 30px 0;
}

.link {
    display: block;
    margin: 30px 0;
    color: #666666;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
}

.link:hover {
    display: block;
    margin: 30px 0;
    color: #333333;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
}
</style>