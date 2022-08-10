<template>
    <div class="swiper-container" ref="floor1Swiper">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide"
                v-for="(carousel, index) in list"
                :key="carousel.id"
            >
                <img :src="carousel.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "Carousel",
    props: ["list"],
    watch: {
        list: {
            immediate: true, //立即监听，不管数据有没有变化，立即监听一次
            handler() {
                this.$nextTick(() => {
                    var mySwiper = new Swiper(this.$refs.floor1Swiper, {
                        //第一个参数：设置轮播图方向【属性这有两个：水平、垂直】
                        // direction: 'vertical',
                        // 开启循环模式
                        loop: true,
                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination",
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                });
            },
        },
    },
};
</script>

<style lang="less" scoped>
</style>
