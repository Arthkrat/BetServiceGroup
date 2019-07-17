<template>
    <div class="content">
        <router-link to="/edit" class="content__link"><button :disabled="!activeBtn">Add User</button></router-link>
        <table class="content__table">
            <tr class="trr"><td class="tdd"> Name: {{ getName }}</td></tr>
            <tr><td> Surname: {{getSurname }}</td></tr>
            <tr><td> Phone: {{getPhone}}</td></tr>
            <tr><td> Email: {{  getEmail  }}</td></tr>
            
        </table>
        <router-link to="/edit"  class="content__link" :disabled="activeBtn"><button :disabled="activeBtn">Edit</button></router-link>
        <button @click="deleteAll"  class="content__link">Delete</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    created(){
        this.$store.dispatch('getDefaultData');
    },
    methods: {
        deleteAll(){
            this.$store.dispatch('deleteData');
        }
    },
    computed: {
        ...mapGetters(['getName', 'getSurname', 'getPhone', 'getEmail']),
        activeBtn(){
            return this.getName =='' && this.getSurname == '' && this.getPhone == '' && this.getEmail =='' ? true : false;
        }
    }

}

</script>
<style lang="scss" scoped>
@import '../scss/smart-grid.scss';
@include reset();
.content{
    @include wrapper();
    font-family: 'Roboto', sans-serif; 
}
button{
    border: 1px solid red;
    background-color: transparent;
    width:150px;
    padding: 10px 30px;
    font-size: 15px;
    margin: 10px 0;
    &:hover{
        background-color: red;
        color: white;
        transition: background-color 0.5s;
    }
    &:disabled{
        background-color: #eee;
        color:black;
        transition: background-color 0.5s;
    }
}
table{
    tr{
        td{
            display:block;
            border:1px solid black; 
            padding: 10px 20px;
            font-size: 15px;
            margin: 5px 0;
        } 
    }
}
</style>