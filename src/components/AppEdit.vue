<template>
    <div class="content">
        <label> Name : {{ getName }}</label>
        <input type="text" :value="getName" v-on:input="setNewName">
        
        <label> Surname {{ getSurname }} </label>
        <input type="text" :value="getSurname" v-on:input="setNewSurname">

        <label> Phone  {{ getPhone }} </label>
        
         <input type="text" :value="getPhone" v-on:input="setNewPhone">
         <p>Require 7 or more numbers</p>
       
        <label> Email {{ getEmail }}  </label>
        
        <input type="email" :value="getEmail" v-on:input="setNewEmail">
        <p>Require @ and . </p>
        <label>ImportJson</label >
        <textarea v-on:change="parseInput"></textarea>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getName', 'getSurname', 'getPhone', 'getEmail'
        ])
    },
    methods: {
        setNewName($e){
            let pattern= /^[a-zA-Z ]{0,30}$/;
            if(pattern.test($e.target.value)){
            localStorage.setItem('name', $e.target.value.trim());
            this.$store.commit('setName', $e.target.value.trim());
            }
        },
        setNewSurname($e){
            let pattern= /^[a-zA-Z ]{0,30}$/;
            if(pattern.test($e.target.value)){
            localStorage.setItem('surname', $e.target.value.trim());
            this.$store.commit('setSurname', $e.target.value.trim());
            }
        },
        setNewPhone($e){
            let pattern = /^[0-9]{7,14}$/;
            if(pattern.test($e.target.value)){
            localStorage.setItem('phone', $e.target.value.trim());
            this.$store.commit('setPhone', $e.target.value.trim());
            }
        },
        setNewEmail($e){
            let pattern = /.+@.+\..+/i;
            if(pattern.test($e.target.value)){
            localStorage.setItem('email', $e.target.value.trim());
            this.$store.commit('setEmail', $e.target.value.trim());
            }
        },
        parseInput($e){
            try{
                localStorage.setItem('name', JSON.parse($e.target.value).name.trim());
                this.$store.commit('setName',JSON.parse($e.target.value).name.trim());

                localStorage.setItem('surname', JSON.parse($e.target.value).surname.trim());
                this.$store.commit('setSurname',JSON.parse($e.target.value).surname.trim());

                localStorage.setItem('phone', JSON.parse($e.target.value).phone.trim());
                this.$store.commit('setPhone',JSON.parse($e.target.value).phone.trim());

                localStorage.setItem('email', JSON.parse($e.target.value).email.trim());
                this.$store.commit('setEmail',JSON.parse($e.target.value).email.trim());
                }
            catch(msg){
                alert(`Ошибка импорта массива! Введены не правильные данные!\nЛибо введены не все данные `);
                }
            }
    },
    created(){
        this.$store.dispatch('getDefaultData');
    }
}
</script>
<style lang="scss" scoped>
@import '../scss/smart-grid.scss';
@include reset();
.content{
    font-family: 'Roboto', sans-serif; 
    @include wrapper();
    @include row-flex();
    label{
        @include size(24);
        margin:10px 0;
    }
    input{
        padding:10px 15px;
    }
    textarea{
            padding-bottom:100px;
            width: 215px;
        }
}
p{
    margin: 10px;
}
</style>

