<template>
    <div class="mtabbar">
        <div class="mtabbar-item" :class="active === key ? classObject : ''" @click="item.handler(),handlerClick(key)"
             :key="key" v-for="(item,key) in list">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "MTabbar",
        data() {
            return {
                classObject: {
                    'mtabbar-item-active': true
                }
            }
        },
        props: {
            list: {
                type: Array,
                default: "default",
                required: true
            },
            active: {
                type: Number,
                default: 0
            }
        },
        methods: {
            handlerClick(val) {
                this.$emit('update:active', val)
            }
        },
        created(){
            switch(this.$route.path)
                {
                    case '/index':
                        this.$emit('update:active', 0)
                        break;
                    case '/category':
                        this.$emit('update:active', 1)
                        break;
                    case '/find':
                        this.$emit('update:active', 2)
                        break;
                    case '/shopping':
                        this.$emit('update:active', 3)
                        break;
                    case '/center':
                        this.$emit('update:active', 4)
                        break;                        
                }
        }
    };
</script>

<style lang="less" scoped>
    .mtabbar {
        display: flex;
        width: 100%;
        height: 56px;
        color: #5e5e5e;
        .mtabbar-item {
            flex: 1;
            text-align: center;
            padding: 5px 0px;
            i {
                display: block;
                height: 23px;
                font-size: 20px;
            }
            span {
                display: block;
                height: 23px;
                font-size: 16px;
            }
        }
        .mtabbar-item-active {
            color: #de181b;
        }
    }
</style>