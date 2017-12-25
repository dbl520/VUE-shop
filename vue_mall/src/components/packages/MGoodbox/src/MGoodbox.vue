<template>
    <div class="mgoodbox">
        <div v-bind:class="{ 'mgoodbox-img':true,'img-min': options.type ==='min','img-middle': options.type ==='middle','img-large': options.type ==='large'}">
            <img :src="options.imgUrl">
        </div>
        <div class="mgoodbox-text">
            <template v-if="options.type ==='large'">
                <p class="text-detail">{{options.detail}}</p>
                <span class="text-price price-large">{{options.price | priceFormat}}</span>
                <span class="text-rate">好评率：{{options.rate}}</span>
            </template>
            <template v-if="options.type ==='middle'">
                <span class="text-sell-out">{{options.sellOut | priceFormat}}</span>
                <span class="text-price">{{options.price | priceFormat}}</span>
            </template>
            <template v-if="options.type ==='min'">
                <span class="text-belong">{{options.belong}}</span>
            </template>
        </div>
        <div class="mgoodbox-extra" v-if="options.type ==='large'">
            <span class="extra-similar">看相似</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MGoodbox",
        props: {
            options: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="less" scoped>
    .mgoodbox {
        position: relative;
        width: 100%;
        padding: 7px 0px;
        background: #fff;
        .mgoodbox-img {
            width: 100%;
            border-bottom: 1px solid #fbf9fe;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .img-min {
            height: 55px;
            border: none;
        }
        .img-middle {
            height: 102px;
        }
        .img-large {
            height: 150px;
        }
        .mgoodbox-text {
            text-align: center;
            .text-detail {
                height: 33px;
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-word;
                color: #232326;
                margin-top: 5px;
                line-height: 17px;
                margin-bottom: 3px;
                padding: 0 4px;
            }
            .text-sell-out {
                display: block;
                font-size: 16px;
                color: red;
            }
            .text-price {
                display: block;
                padding: 0px 4px;
                font-size: 14px;
                color: gray;
            }
            .price-large {
                text-align: left;
                color: red;
            }
            .text-rate {
                display: block;
                padding: 0px 4px;
                text-align: left;
                font-size: 12px;
                color: gray;
            }
            .text-belong {
                font-size: 12px;
                color: #686868;
            }
        }
        .mgoodbox-extra {
            position: absolute;
            bottom: 5px;
            right: 5px;
            .extra-similar {
                padding: 3px;
                border: 1px solid #686868;
                font-size: 14px;
                color: #686868;
            }
        }
    }
</style>
