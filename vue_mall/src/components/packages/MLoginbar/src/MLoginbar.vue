<template>
    <div class="mloginbar flex" v-if='!loginStatus'>
        <div class="mloginbar-tip flex-item">
            <p>{{options.tip}}</p>
        </div>
        <div class="mloginbar-btn flex-item-2">
            <button @click="options.handler">登陆</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MLoginbar',
        props: {
            options: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .mloginbar {
        background: #fff;
        .mloginbar-tip {
            height: 60px;
            p {
                text-align: center;
                font-size: 14px;
                line-height: 60px;
            }
        }
        .mloginbar-btn {
            height: 60px;
            line-height: 60px;
            button {
                padding: 5px 15px;
                vertical-align: middle;
                border: none;
                border-radius: 3px;
                font-size: 14px;
                color: #fff;
                background: #e93b3d;
            }
        }
    }
</style>