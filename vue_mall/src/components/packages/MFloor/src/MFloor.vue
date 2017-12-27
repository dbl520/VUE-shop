<template>
    <div class="mfloor">
        <div class="mfloor-title">
            <span class="title-text">{{title}}</span>
            <div class="title-slot">
                <slot name="title-slot"></slot>
            </div>
            <i class="iconfont">&#xe639;</i>
            <span class="more">更多</span>
        </div>
        <div class="mfloor-main">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MFloor",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="less" scoped>
    .mfloor {
        margin-top: 10px;
        padding: 0px 10px;
        background: #fff;
        .mfloor-title {
            overflow: hidden;
            padding: 12px 0px;
            .title-text {
                float: left;
                padding-left: 10px;
                font-size: 14px;
                border-left: 3px solid #ee4000;
            }
            .title-slot{
                float:left;
                padding-left:5px;
            }
            .more {
                float: right;
                padding-right: 10px;
                font-size: 14px;
                color: gray;
            }
            i {
                float: right;
                font-size: 14px;
                color: gray;
            }
        }
        .mfloor-main {
            margin: 0px -10px;
            background: #fbf9fe;
        }
    }
</style>
