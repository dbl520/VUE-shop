<template>
    <div class="mslidenav">
        <ul :style="{'width':7*20 + 'vw'}" v-slide>
            <li :key="key" v-for="(item,key) in navList" :class="{'active':key === activeTab}"
                @click="selectTab(key,item)">
                <span>{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    function elWidth(el) {
        return el.clientWidth;
    }

    function screenWidth() {
        return document.body.clientWidth;
    }

    export default {
        name: 'MSlidenav',
        data() {
            return {
                activeTab: 0
            }
        },
        props: {
            navList: {
                type: Array,
                required: true
            }
        },
        methods: {
            selectTab(key, item) {
                this.activeTab = key;
                this.$emit('selectTab', item);
            }
        },
        directives: {
            slide: {
                inserted: (el) => {
                    let start, deviation = 0, distance = 0;
                    el.addEventListener('touchstart', e => {
                        el.style.transition = '';
                        start = e.touches[0].screenX;
                    }, false);
                    el.addEventListener('touchmove', e => {
                        let total;
                        distance = (e.touches[0].screenX - start);
                        total = distance + deviation;
                        el.style.transform = 'translateX(' + total + 'px)';
                        e.preventDefault();
                    }, false);
                    el.addEventListener('touchend', e => {
                        deviation = deviation + distance;
                        if (deviation > 0) {
                            el.style.transition = 'all 0.4s';
                            el.style.transform = '';
                            deviation = 0;
                        }
                        if (Math.abs(deviation) > (elWidth(el) - screenWidth())) {
                            el.style.transition = 'all 0.4s';
                            el.style.transform = 'translateX(' + (screenWidth() - elWidth(el)) + 'px)';
                            deviation = screenWidth() - elWidth(el);
                        }
                    }, false);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .mslidenav {
        width: 100%;
        overflow-x: hidden;
        background: #fff;
        box-shadow: 0px 1px 0px #ddd;
        ul {
            list-style: none;
            display: flex;
            li {
                position: relative;
                flex-basis: 20vw;
                flex-shrink: 0;
                height: 40px;
                text-align: center;
                display: flex;
                align-items: center;
                font-size: 16px;
                span {
                    flex: 1;
                    height: 25px;
                    line-height: 25px;
                }
                &:not(:last-child) > span {
                    box-shadow: 1px 0px 0px #aaa;
                }
            }
            .active {
                color: red;
                &:after {
                    position: absolute;
                    bottom: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    content: '';
                    display: block;
                    width: 80%;
                    border-bottom: 3px solid red;
                }
            }
        }
    }
</style>