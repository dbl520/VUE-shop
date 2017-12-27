<template>
    <transition name="mtoast-pop-fade">
        <div class="mindicator" v-if="visible">
            <div class="mindicator-box">
                <div class="mindicator-dot dot-1"></div>
                <div class="mindicator-dot dot-2"></div>
                <div class="mindicator-dot dot-3"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "MIndicator",
        data() {
            return {
                visible: false
            }
        }
    };
</script>

<style lang="less" scoped>
    .mindicator {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        .mindicator-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 90px;
            text-align: center;
            .mindicator-dot {
                width: 20px;
                height: 20px;
                background-color: #de181b;
                border-radius: 100%;
                display: inline-block;
                animation: bouncedelay 1.4s infinite ease-in-out;
                animation-fill-mode: both;
            }
            .dot-1 {
                animation-delay: -0.32s;
            }
            .dot-2 {
                animation-delay: -0.16s;
            }
            @keyframes bouncedelay {
                0%,
                80%,
                100% {
                    transform: scale(0);
                    -webkit-transform: scale(0);
                }
                40% {
                    transform: scale(1);
                    -webkit-transform: scale(1);
                }
            }
        }
    }

    .mindicator-pop-fade-enter-active,
    .mindicator-pop-fade-leave-active {
        transition: opacity 0.4s;
    }

    .mindicator-pop-fade-enter,
    .mindicator-pop-fade-leave-to {
        opacity: 0;
    }
</style>