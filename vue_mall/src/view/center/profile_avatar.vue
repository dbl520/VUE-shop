<template>
    <div class="profile-avatar">
        <m-imguploader @selected="selectedAvatar"></m-imguploader>
        <div class="modify-btn">
            <m-button value="修改" type="large" @click.native="uploadAvatar"></m-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                base64URL: null
            }
        },
        methods: {
            selectedAvatar(e) {
                this.base64URL = e;
            },
            uploadAvatar() {
                const self = this;
                let data = {
                    type: 'avatar',
                    imgUrl: this.base64URL
                }
                if (this.base64URL && typeof this.base64URL === 'string') {
                    this.$http.userEdit(data).then(res => {
                        if (res.success === true) {
                            self.$MToast('修改成功');
                            self.back();
                        }
                    }, error => {

                    });
                } else {

                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .profile-avatar {
        .modify-btn {
            margin: 30px auto 0px auto;
            width: 80%;
        }
    }
</style>