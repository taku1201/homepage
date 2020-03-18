<template>
    <div id="profile">
        <div v-bind:class="[$style.section]" id="contact">
            <div>
                <p>Error</p>
                <button @click="$router.push('/contact/confirm')">Back</button>
                <button @click="$router.push('/')">Home</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            resultValue: this.result
        }
    },
    props: {
        result: {
            type: Object,
            require: true
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