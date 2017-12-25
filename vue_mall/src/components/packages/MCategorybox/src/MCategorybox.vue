<template>
    <div class="mcategorybox">
        <div class="mcategorybox-title">
            <h3>{{title}}</h3>
        </div>
        <div class="mcategorybox-main">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MCategorybox",
        props: {
            title: {
                type: String,
                required: true
            },
            options:{
                type: Object
            }
        }
    };
</script>

<style lang="less" scoped>
    .mcategorybox {
        margin-top:10px;
        .mcategorybox-title{
            overflow: hidden;
            padding-bottom: 5px;
            h3{
                float: left;
                font-weight: 400;
                font-size: 12px;
            }
        }
        .mcategorybox-main{
            background: #fff;
            padding:5px;
        }
    }
</style>
