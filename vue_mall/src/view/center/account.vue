<template>
    <div class="account">
        <m-cell value="更多" @click.native="goto('/profile')">
            <div class="account-private flex">
                <div class="avatar flex-item-4">
                    <img :src="userInfo.avatar ? userInfo.avatar : require('../../assets/logo.png')">
                </div>
                <div class="name flex-item">
                    <div class="name-wrap">
                        <span>{{userInfo.realName === null ? '未认证' : userInfo.realName}}</span>
                        <span>昵称：{{userInfo.nickName}}</span>
                    </div>
                </div>
            </div>
        </m-cell>
        <m-sheetgroup>
            <m-cell title="账户安全" value="密码/支付等管理"></m-cell>
            <m-cell title="关联帐号"></m-cell>
            <m-cell title="地址管理"></m-cell>
        </m-sheetgroup>
        <m-sheetgroup>
            <m-cell title="设置"></m-cell>
            <m-cell title="定制"></m-cell>
        </m-sheetgroup>
        <div class="account-logout">
            <m-button value="退出登录" @click.native="exit"></m-button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            userInfo: {
                get() {
                    return this.$store.state.user.userInfo
                }
            }
        },
        methods: {
            exit() {
                localStorage.clear();
                this.$vux.toast.show({
                    text: '注销成功'
                });
                this.goto('/login')
            }
        }
    }
</script>

<style lang="less" scoped>
    .account {
        .account-private {
            width: 100%;
            height: 70px;
            .avatar {
                height: 70px;
                line-height: 70px;
                img {
                    height: 50px;
                    width: 50px;
                    vertical-align: middle;
                }
            }
            .name {
                display: flex;
                font-size: 16px;
                .name-wrap {
                    flex-grow: 0;
                    margin: auto;
                    span {
                        display: block;
                        font-size: 14px;
                    }
                }
            }
        }
        .account-logout {
            margin-top: 50px;
        }
    }
</style>
