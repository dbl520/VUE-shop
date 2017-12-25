<template>
    <div class="index">
        <p>{{token}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                token:''
            }
        },
        created(){
            this.token = localStorage.getItem('token');
        }
    }
</script>
