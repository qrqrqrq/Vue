<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <!-- 利用事件委派+编程式导航实现路由的跳转与传递参数 -->
                        <div class="all-sort-list2" @click="goSearch">
                            <div
                                class="item"
                                v-for="(c1, index) in categoryList"
                                :key="c1.categoryId"
                                :class="{ cur: currentIndex == index }"
                            >
                                <h3 @mouseenter="changeIndex(index)">
                                    <a
                                        :data-categoryName="c1.categoryName"
                                        :data-category1Id="c1.categoryId"
                                        >{{ c1.categoryName }}</a
                                    >
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl
                                            class="fore"
                                            v-for="(
                                                c2, index
                                            ) in c1.categoryChild"
                                            :key="c2.categoryId"
                                        >
                                            <dt>
                                                <a
                                                    :data-categoryName="
                                                        c2.categoryName
                                                    "
                                                    :data-category2Id="
                                                        c2.categoryId
                                                    "
                                                    >{{ c2.categoryName }}</a
                                                >
                                            </dt>
                                            <dd>
                                                <em
                                                    v-for="c3 in c2.categoryChild"
                                                    :key="c3.categoryId"
                                                >
                                                    <a
                                                        :data-categoryName="
                                                            c3.categoryName
                                                        "
                                                        :data-category3Id="
                                                            c3.categoryId
                                                        "
                                                        >{{
                                                            c3.categoryName
                                                        }}</a
                                                    >
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
    name: "TypeNav",
    data() {
        return {
            // 存储用户鼠标移上哪个一级分类
            currentIndex: -1,
            show: true,
        };
    },

    // 组件挂载完毕，向服务器发请求
    mounted() {
        // this.$store.dispatch("categoryList");、--->写到了App.vue里
        // 当组件挂载完毕，show变为false
        // 如果不是Home路由组件，将typeNav隐藏
        if (this.$route.path != "/home") {
            this.show = false;
        }
    },
    computed: {
        ...mapState({
            categoryList: (state) => {
                return state.home.categoryList;
            },
        }),
    },
    methods: {
        // 鼠标进入修改响应式数据currentIndex的值
        // changeIndex(index) {
        //     // index:鼠标移上某个一级分类的元素的索引值
        //     this.currentIndex = index;
        // },

        changeIndex: throttle(function (index) {
            this.currentIndex = index;
        }, 50),
        // 一级分类鼠标移出的事件回调及
        // 在search页面，当鼠标移出时，让商品分类列表进行隐藏
        leaveIndex() {
            if (this.$route.path != "/home") {
                this.show = false;
            }
            this.currentIndex = -1;
        },
        goSearch(event) {
            //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
            let node = event.target;
            //给a标签添加自定义属性data-categoryName,全部的子标签当中只有a标签带有自定义属性，别的标签名字----dataset纯属扯淡
            let { categoryname, category1id, category2id, category3id } =
                node.dataset;
            if (categoryname) {
                // 整理路由跳转参数
                let location = { name: "search" };
                let query = { categoryName: categoryname };
                // 一级二级三级分类的a标签
                if (category1id) {
                    query.category1Id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else if (category3id) {
                    query.category3Id = category3id;
                }
                // 整理完参数
                // 判断：如果路由跳转时候，带有params参数，顺带传递过去
                if (this.$route.params) {
                    location.params = this.$route.params;
                    // 动态给location配置对象添加query属性
                    location.query = query;
                    // 路由跳转
                    this.$router.push(location);
                }
            }
        },
        // 在search页面，当鼠标移入时，让商品分类列表进行展示
        enterShow() {
            this.show = true;
        },
    },
};
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            display: block;
                        }
                    }
                }
                .cur {
                    background-color: skyblue;
                }
            }
        }
        // 过渡动画的样式
        // 动画进入的起点
        .sort-enter {
            height: 0px;
        }
        // 进入的终点
        .sort-enter-to {
            height: 461px;
        }
        .sort-enter-active {
            transition: all 0.3s linear;
        }
    }
}
</style>