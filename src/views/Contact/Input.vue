<template>
    <div id="profile">
        <div v-bind:class="[$style.section]" id="contact">
            <div>
                <label for="name">Name: <input v-bind:class="[$style.form_input]" v-model="contact.name" placeholder="Your Name"></label>
                <label for="email">Email: <input v-bind:class="[$style.form_input]" v-model="contact.email" placeholder="user@example.com"></label>
                <label for="content">Content of inquiry: <textarea v-bind:class="[$style.form_textarea]" v-model="contact.content" placeholder="Content of inquiry"></textarea></label>
                <button @click="confirmForm">Confirm</button>
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
        }
    },
    metaInfo: {
        title: 'Contact'
    },
    methods: {
        confirmForm: function() {
            this.$router.push('/contact/confirm')
        }
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