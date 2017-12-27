<template>
    <div class="wxlogin"></div>
</template>

<script>
    export default {
        created() {
            /*
            * 路由存在code字段表示微信授权回调成功
            * */
            if (this.$route.query.code) {
                const self = this;
                let data = {
                    type: 'weixin',
                    account: this.$route.query.code
                }
                this.$http.login(data).then(res => {
                    if (res.success === true) {
                        localStorage.setItem('token',res.data.token);
                        self.$MToast('登陆成功！');
                        self.goto('/index');
                    }
                }, error => {

                })
            } else {
                /*
                * 非微信授权回调
                * */
            }
        }
    }
</script>