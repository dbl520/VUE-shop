<template>
    <div class="mimguploader">
        <div class="mimguploader-img">
            <i class="iconfont">&#xe679;</i>
            <input type="file" @change="change"/>
        </div>
        <div class="mimguploader-text">
            <div class="mimguploader-img-preview">
                <img :src="base64URL" v-if="base64URL"/>
                <span v-else="base64URL">图片预览</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MImguploader',
        data() {
            return {
                base64URL: ''
            }
        },
        methods: {
            change(e) {
                let file = e.target.files[0];
                let limitedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                if (file && limitedTypes.indexOf(file.type) >= 0) {
                    this.createBase64URL(file);
                } else {
                    this.$MToast("不支持" + file.type + "文件");
                }
            },
            createBase64URL(file) {
                const self = this, reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    self.base64URL = e.target.result;
                    self.$emit('selected', e.target.result);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .mimguploader {
        display: flex;
        background: #fff;
        padding: 10px;
        .mimguploader-img {
            position: relative;
            flex-basis: 100px;
            height: 100px;
            border: 1px dashed #eee;
            i {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                font-size: 50px;
                text-align: center;
                line-height: 100px;
            }
            input {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                outline: none;
                opacity: 0;
            }
        }
        .mimguploader-text {
            flex: 1;
            .mimguploader-img-preview {
                width: 100px;
                height: 100px;
                margin-left: 15px;
                line-height: 100px;
                border: 1px dashed #eee;
                text-align: center;
                img {
                    width: 80%;
                    height: 80%;
                    vertical-align: middle;
                }
                span {
                    font-size: 16px;
                    color: gray;
                }
            }
        }
    }
</style>