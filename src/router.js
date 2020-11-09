import VueRouter from 'vue-router';
import information from "@/components/ActiveBarPages/information";
import profile from "@/components/ActiveBarPages/profile";
import tests from "@/components/ActiveBarPages/tests";

export default new VueRouter({
    routes: [
        {
            path: '/information',
            component: information
        },
        {
            path: '/profile',
            component: profile
        },
        {
            path: '/tests',
            component: tests
        },
    ],
    //отключение хеша в урле #
    mode: 'history'
})