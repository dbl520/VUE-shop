<template>
    <div class="mgoodgroup">
        <div class="mgoodgroup-title">
            <div class="title-line">
                <span>{{title}}</span>
            </div>
        </div>
        <div class="mgoodgroup-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name:'MGoodgroup',
        props:{
            title:{
                type:String,
                required:true
            }
        }
    }
</script>
<style lang="less" scoped>
    .mgoodgroup{
        margin:0px 10px;
        .mgoodgroup-title{
            padding:15px 0px;
            .title-line{
                position: relative;
                height:1px;
                box-shadow: 0px 1px 0px #eee;
                span{
                    position:absolute;
                    display: block;
                    top:50%;
                    left:50%;
                    transform: translate(-50%,-50%);
                    padding:0px 10px;
                    font-size: 14px;
                    color:gray;
                    background: #fbf9fe;
                }
            }
        }
    }
</style>