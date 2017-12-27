<template>
    <div class="good-sec-kill-floor">
        <div class="seckill-price">
            <div class="seckill-price-now">
                <span>1449</span>
            </div>
            <div class="seckill-price-normal">
                <div class="price-normal-icon">
                    <i class="iconfont">&#xe661;</i>
                    <label>京东秒杀</label>
                </div>
                <div class="price-normal-num">
                    <span>￥1599.00</span>
                </div>
            </div>
        </div>
        <div class="seckill-timer">
            <div class="timer-title">距结束还剩:</div>
            <div class="timer-context">
                <span>09</span>
                <span>28</span>
                <span>34</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .good-sec-kill-floor {
        display: flex;
        height: 50px;
        .seckill-price {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: linear-gradient(to right, #ef3390, #ef3647);
            .seckill-price-now {
                flex-basis: 60%;
                span {
                    display: block;
                    margin-left: 10px;
                    color: #fff;
                    font-size: 18px;
                    &:before {
                        content: '￥';
                        font-size: 14px;
                    }
                    &:after {
                        content: '.00';
                        font-size: 14px;
                    }
                }
            }
            .seckill-price-normal {
                flex: 1;
                display: flex;
                .price-normal-icon {
                    position: relative;
                    flex-grow: 0;
                    height: 12px;
                    margin-left: 10px;
                    border: 1px solid #fff;
                    i {
                        float: left;
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        text-align: center;
                        line-height: 12px;
                        font-size: 10px;
                        background: #fff;
                        color: #ef3390;
                    }
                    label {
                        float: left;
                        margin: -5px 0px 0px -5px;
                        font-size: 14px;
                        transform: scale(0.7);
                        color: #fff;
                    }
                }
                .price-normal-num {
                    flex-grow: 0;
                    span {
                        position: relative;
                        float: left;
                        margin: -4px 0px 0px -4px;
                        font-size: 14px;
                        transform: scale(0.8);
                        color: #fff;
                        &:after {
                            position: absolute;
                            display: block;
                            content: '';
                            top: 50%;
                            left: 0px;
                            width: 100%;
                            height: 1px;
                            background: #fff;
                        }
                    }
                }
            }
        }
        .seckill-timer {
            display: flex;
            flex-basis: 100px;
            background: #feeae9;
            flex-direction: column;
            align-items: center;
            .timer-title {
                text-align: right;
                flex-basis: 18px;
                font-size: 14px;
                color: #de181b;
            }
            .timer-context {
                flex: 1;
                display: flex;
                align-items: center;
                span {
                    position: relative;
                    flex: 1;
                    font-size: 14px;
                    border-radius: 2px;
                    background: #ef3561;
                    color: #fff;
                    &:not(:last-child) {
                        margin-right: 7px;
                    }
                    &:not(:last-child)::after {
                        position: absolute;
                        display: block;
                        top: 50%;
                        right: -40%;
                        transform: translate(-50%, -50%);
                        content: ':';
                        color: #ef3561;
                    }
                }
            }
        }
    }
</style>