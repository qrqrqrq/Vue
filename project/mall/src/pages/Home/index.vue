<template>
    <div>
        <!-- 全局的三级菜单 -->
        <TypeNav />
        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <!-- 父组件Home要向子组件Floor传递数据 -->
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"/>
        <Brand /> 
        
    
    </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";

import { mapState } from "vuex";
export default {
    name: "Home",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Brand,
        Floor,
    },
    mounted() {
        // 派发action，获取floor组件的数据
        this.$store.dispatch("getFloorList");
    },
    computed:{
        ...mapState({
            floorList:state=>state.home.floorList
        })
    }
    
};
</script>

<style scoped></style>
