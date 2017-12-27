<template>
    <div class="app-shell">
        <header class="app-header-wrap app-header" :class="{'app-header-gradient':this.$route.path === '/index'}">
            <m-header title="EasyShop">
                <div class="header-search">
                    <i class="iconfont">&#xe626;</i>
                    <input placeholder="发现生活"/>
                </div>
            </m-header>
        </header>
        <div class="app-view-wrap">
            <div class="app-view app-view-with-header" :class="{'app-view-with-footer':this.$route.meta.level !== 1}">
                <router-view></router-view>
            </div>
        </div>
        <footer class="app-footer-wrap app-footer" v-if="this.$route.meta.level === 0">
            <m-tabbar :list="icons" :active="active" @update:active="val => active = val"></m-tabbar>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icons: [
                    {
                        text: "首页",
                        icon: "&#xe677;",
                        handler: () => this.goto("/index")
                    },
                    {
                        text: "分类",
                        icon: "&#xe660;",
                        handler: () => this.goto("/category")
                    },
                    {
                        text: "发现",
                        icon: "&#xe601;",
                        handler: () => this.goto("/find")
                    },
                    {
                        text: "购物车",
                        icon: "&#xe600;",
                        handler: () => this.goto("/shopping")
                    },
                    {
                        text: "个人中心",
                        icon: "&#xe611;",
                        handler: () => this.goto("/center")
                    }
                ],
                active: 0
            };
        }
    };
</script>

<style lang='less' scoped>
    .app-shell {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        display: flex;
        flex-direction: column;
        .app-header-wrap {
            position: fixed;
            top: 0px;
            left: 0px;
            right: 0px;
            z-index: 10;
            .header-search {
                width: 90%;
                height: 32px;
                margin: 0px auto;
                border-radius: 7px;
                background: #fff;
                i {
                    float: left;
                    padding-left: 10px;
                    line-height: 32px;
                }
                input {
                    float: left;
                    padding-left: 10px;
                    line-height: 32px;
                    border: 0px;
                    background: #fff;
                    outline: none;
                }
            }
        }
        .app-header {
            height: 52px;
            background: #fff;
            box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
            0 1px 10px rgba(0, 0, 0, 0.12);
        }
        .app-header-gradient {
            background: linear-gradient(#8b8b7a, #fff);
            opacity: 0.5;
        }
        .app-view-wrap {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow-x: hidden;
            overflow-y: auto;
            .app-view {
                position: relative;
                flex: 1;
                transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1);
                background: #fbf9fe;
            }
            .app-view-with-header {
                padding-top: 52px;
            }
            .app-view-with-footer {
                padding-bottom: 56px;
            }
        }
        .app-footer-wrap {
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            z-index: 10;
        }
        .app-footer {
            display: flex;
            align-items: center;
            height: 56px;
            background: #fff;
            box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
        }
    }
</style>
