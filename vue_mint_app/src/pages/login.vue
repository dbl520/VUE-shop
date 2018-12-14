<template>
  <div class="login">
    <p class="login_admin">Admin</p>
    <div class="admin">
      <div class="admin_left">
        用户名
      </div>
      <div class="admin_right">
        <input type="text" placeholder="请填写用户名" class="quchu" v-model="names">
      </div>
    </div>
    <!-- 密码 -->
    <div class="admin s_top">
      <div class="admin_left">
        密码
      </div>
      <div class="admin_right">
        <input type="password" placeholder="请填写密码" class="quchu" v-model="password">
      </div>
    </div>
    <!-- 登录 -->
    <div class="login_login" @click="login">
      登录
    </div>
    <div class="login_login checkout" @click="$store.commit('checkoutData')">
      退出登录
    </div>
  </div>
</template>

<script>
    import {
        Toast
    } from "mint-ui"; //引入mint ui
    // 引入vuex快捷写法
    export default {
        data() {
            return {
                names: "",
                password: ""
            };
        },
        computed: {

        },
        beforeCreate() {
            console.log('beforeCreate')
        },
        created() {
            this.checkLogin();
            console.log('created')
        },

        methods: {
            checkLogin() {
                // 检查是否存在logindata
                if (this.$store.state.logindata.length == 0) {
                    //如果没有登录状态则跳转到登录页
                    this.$router.push("/login");
                } else {
                    //否则跳转到登录后的页面
                    this.$router.push("/main");
                }
            },

            //  登录验证
            login: function() {
                if (!this.names) {
                    Toast({
                        message: "请填写用户名",
                        iconClass: "iconfont icon-shanchu"
                    });
                }
                else if (!this.password) {
                    Toast({
                        message: "请填写密码",
                        iconClass: "iconfont icon-shanchu"
                    });
                } else {
                    // console.log('', this.$store.state.logindata)
                    // 这里改变vuex里的状态管理
                    this.$store.commit("setData");
                    alert(this.$router)
                    this.$router.push({path:"/"});
                }
            }
        }
    };
</script>

<style scoped>
    .checkout {
        margin-top: 5vh !important;
        background: red !important;
    }

    .admin_left {
        width: 1.2rem;
    }

    .s_top {
        margin-top: 5vh !important;
    }

    .login_admin {
        height: 0.88rem;
        font-size: 0.4rem;
        text-align: center;
        background: #26a2ff;
        color: #fff;
        line-height: 0.88rem;
    }

    .admin {
        margin-top: 20vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 0.88rem;
        background: #fff;
        font-size: 0.34rem;
        padding: 0 0.2rem;
    }

    .admin_right {
        padding-left: 0.2rem;
    }

    .quchu {
        vertical-align: middle;
        border: 0;
        outline: none;
        /*清除移动端默认的表单样式*/
        -webkit-appearance: none;
        font-size: 0.34rem;
    }

    .login_login {
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.4rem;
        text-align: center;
        margin-top: 30vh;
        color: #fff;
        background: #26a2ff;
    }
</style>
