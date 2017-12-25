<template>
    <div class="profile">
        <m-cell title="头像" value="修改" @click.native="goto('/profile/avatar')"></m-cell>
        <m-cell title="用户名" value="邓海标"></m-cell>
        <m-cell title="昵称" value="Neho"></m-cell>
        <m-cell title="收货地址"></m-cell>
        <m-cell title="生日" :value="info.birthday | timeStampFormat"
                @click.native="interact.timePickerShow = !interact.timePickerShow"></m-cell>
        <m-timepicker @update:show="val => interact.timePickerShow = val" :show="interact.timePickerShow"
                      @handlerComfirm="selectDay"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                interact: {
                    timePickerShow: false
                },
                info: {
                    birthday: 775197285000
                }
            }
        },
        methods: {
            selectDay(e) {
                this.info.birthday = e.getTime();
            },
        }
    }
</script>

<style lang="less" scoped>
</style>
