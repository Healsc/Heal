<template>
  <div>
    <van-tabbar v-model="active" @change='change'>
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="profile">我的</van-tabbar-item>
    </van-tabbar>
   <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0,
    }
  },
  created() {
    this.active =  parseInt(localStorage.getItem('active'))
  },
  methods: {
    change(active){
      localStorage.setItem('active',active)
    }
  },
}
</script>
<style lang="scss">


</style>
