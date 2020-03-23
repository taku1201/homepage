<template>
    <div id="profile">
        <div v-bind:class="[$style.section]" id="project">
            <h2>実績</h2>
            <div v-for="project of projects" v-bind:key="project.id">
                <h3>{{ project.title }}</h3>
                <p v-html="project.article">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    metaInfo: {
        title: 'Project'
    },
    methods: {
        getProjects: function() {
            this.axios.get('/projects')
            .then((res) => {
                this.projects = res.data
            })
            .catch((err) => {
                console.log(err)
                alert(err)
                this.projects = null
            })
        }
    },
    data() {
        return {
            projects: this.getProjects()
        }
    }
}
</script>

<style module>
.section {
    margin: 30px 0;
}
</style>