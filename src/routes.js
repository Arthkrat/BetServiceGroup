import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import AppEdit from './components/AppEdit';
import AppTable from './components/AppTable';
const routes = [
    {   
        name: 'table',
        path: '/table',
        component: AppTable
    },

    {
        path:'',
        redirect: 
        {
            name: 'table'
        }
    }, 

    {
        path: '/edit',
        component: AppEdit
    }
];
export const router = new VueRouter({
    routes
})