import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store= new Vuex.Store({
    state: {
        name: '',
        surname :'',
        phone: '',
        email: ''
    }, 
    getters: {
        getName(state){
            return state.name;
        },
        getSurname(state){
            return state.surname;
        },
        getPhone(state){
            return state.phone;
        },
        getEmail(state){
            return state.email;
        }
    },
    mutations: {
        setName(state, data){
            state.name = data
        },  
        setSurname(state, data){
            state.surname = data
        }, 
        setEmail(state, data){
            state.email = data
        }, 
        setPhone(state, data){
            state.phone = data
        }, 
        deleteData(state){
            state.name = '';
            state.surname = '';
            state.phone = '';
            state.email = '';
            localStorage.setItem('name', '');
            localStorage.setItem('surname', '');
            localStorage.setItem('phone', '');
            localStorage.setItem('email', '');
        }
    },
    actions: {
        getDefaultData(store){
          store.commit('setName', localStorage.getItem('name'));
          store.commit('setSurname', localStorage.getItem('surname'));
          store.commit('setPhone', localStorage.getItem('phone'));
          store.commit('setEmail', localStorage.getItem('email'));
        },
        deleteData(store){
            store.commit('deleteData');
        }
    }

})