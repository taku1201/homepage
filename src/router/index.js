import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact/Contact.vue'
import ContactInput from '@/views/Contact/Input.vue'
import ContactConfirm from '@/views/Contact/Confirm.vue'
import ContactComplete from '@/views/Contact/Complete.vue'
import ContactError from '@/views/Contact/Error.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        children: [
            {
                path: '/contact',
                component: ContactInput
            },
            {
                path: 'confirm',
                component: ContactConfirm
            },
            {
                path: 'complete',
                component: ContactComplete
            },
            {
                path: 'error',
                component: ContactError
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
