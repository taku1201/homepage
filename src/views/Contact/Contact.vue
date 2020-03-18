<template>
    <div id="profile">
        <div v-bind:class="[$style.section]" id="contact">
            <h2>Contact</h2>
            <div>
                <router-view v-bind:result.sync="result" v-bind:contact.sync="contact"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            default: () => ({})
        },
        result: {
            type: Object,
            default: () => ({})
        }
    },
    metaInfo: {
        title: 'Contact'
    }
}
</script>

<style module>
.section {
    margin: 30px 0;
}

.form_input {
    display: block;
    width: 160px;
    height: 20px;
    margin: 10px 0;
    padding: 5px 0;
}

.form_textarea {
    display: block;
    width: 320px;
    height: 240px;
    margin: 10px 0;
    padding: 5px 0;   
}
</style>