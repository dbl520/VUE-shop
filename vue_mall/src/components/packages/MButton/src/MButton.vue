<template>
    <button :class="{'btn':true,'btn-small':type === 'small','btn-default':type === 'default', 'btn-large':type === 'large'}">{{value}}</button>
</template>

<script>
    export default {
        name: 'MButton',
        props: {
            value: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'small',
                        'default',
                        'large'
                    ].indexOf(value) > -1;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .btn {
        display: inline-block;
        border: none;
        border-radius: 3px;
    }
    .btn-small{
        padding:10px 20px;
    }
    .btn-default{
        display: block;
        width:80%;
        height:47px;
        margin:0px auto;
        line-height: 47px;
        background: none;
        border:1px solid #f23030;
        color: #f23030;
    }
    .btn-large{
        width:100%;
        height:47px;
        line-height: 47px;
        background: none;
        border:1px solid #f23030;
        color: #f23030;
    }
</style>