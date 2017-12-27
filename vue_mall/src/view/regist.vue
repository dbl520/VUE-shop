<template>
    <div class="regist">
        <header class="regist-header">
            <div class="header-wrap">
                <div class="wrap-left">
                    <i class="iconfont">&#xe637;</i>
                </div>
                <div class="wrap-mid">
                    <h3>用户注册</h3>
                </div>
                <div class="wrap-right"></div>
            </div>
        </header>
        <section class="page">
            <div class="login-filed">
                <div class="filed-wrap flex">
                    <div class="wrap-left flex-item-2">
                        <span>账号</span>
                    </div>
                    <div class="wrap-right flex-item">
                        <input type="text" placeholder="邮箱/手机号" v-model="user.account"/>
                    </div>
                </div>
                <div class="filed-wrap flex">
                    <div class="wrap-left flex-item-2">
                        <span>密码</span>
                    </div>
                    <div class="wrap-right flex-item">
                        <input type="password" placeholder="请输入密码" v-model="user.password"/>
                    </div>
                </div>
                <div class="filed-wrap flex">
                    <div class="wrap-left flex-item-2">
                        <span>密码确认</span>
                    </div>
                    <div class="wrap-right flex-item">
                        <input type="password" placeholder="再次输入密码" v-model="user.confirm"/>
                    </div>
                </div>
            </div>
            <div class="login-btn">
                <m-button value="注册" type="large" @click.native="regist"></m-button>
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user:{
                    account:'',
                    password:'',
                    confirm:''
                }
            }
        },
        methods:{
            regist(){
                const self = this;
                let data = {
                    account:this.user.account,
                    password:this.user.password
                }
                if(this.user.password === this.user.confirm){
                    this.$http.regist(data).then(res => {
                        if(res.success === true){
                            self.$MToast('用户注册成功');
                            localStorage.setItem('token',res.data.token);
                            self.goto('/index');
                        }else{
                            self.$MToast(res.msg);
                        }
                    }, error => {

                    });
                }else{
                    this.$MToast('帐号密码不一致');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .regist {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: #fff;
        display: flex;
        flex-direction: column;
        .regist-header {
            position: fixed;
            top: 0px;
            right: 0px;
            left: 0px;
            .header-wrap {
                display: flex;
                align-items: center;
                height: 52px;
                box-shadow: 0px 1px 0px #eee;
                .wrap-left {
                    flex-basis: 70px;
                    i {
                        height: 40px;
                        line-height: 40px;
                        padding-left: 10px;
                        font-size: 20px;
                    }
                }
                .wrap-mid {
                    flex: 1;
                    text-align: center;
                    h3 {
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
                .wrap-right {
                    flex-basis: 70px;
                }
            }
        }
        .page {
            margin-top: 52px;
            padding: 0px 10px;
            .login-filed {
                .filed-wrap {
                    border-bottom: 1px solid #eee;
                    padding: 0px 7px;
                    .wrap-left {
                        height: 48px;
                        span {
                            line-height: 48px;
                            font-size: 14px;
                        }
                    }
                    .wrap-right {
                        height: 48px;
                        input {
                            line-height: 48px;
                            font-size: 14px;
                            border: none;
                            outline: none;
                        }
                    }
                }
            }
            .login-btn {
                position: relative;
                padding-top: 30px;
            }
        }
    }
</style>