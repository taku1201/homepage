<template>
    <div id="profile">
        <div v-bind:class="[$style.section]" id="contact">
            <div>
                <form @submit.prevent="submitForm">
                    <div>Name: {{ this.contact.name }}</div>
                    <div>Email: {{ this.contact.email }}</div>
                    <div>Content of inquiry: {{ this.contact.content }}</div>
                    <button type="submit">Submit</button>
                </form>
                <button @click="$router.back()">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            require: true
        }
    },
    methods: {
        submitForm: function() {
            this.axios.post('/api/contact', {
                name: this.contact.name,
                email: this.contact.email,
                content: this.contact.content
            })
            .then((response) => {
                console.log(response)
                this.$router.push('/contact/submit')
            })
            .catch((error) => {
                console.log(error)
                this.$router.push('/contact/error')
            })
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