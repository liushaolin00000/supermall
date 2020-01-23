<template>
  <div id="app">
   <keep-alive> <router-view></router-view></keep-alive>
    <div class="tabbar">
      <router-link to="/home" class="tabbar-item" >
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/category" class="tabbar-item">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/cart" class="tabbar-item">
        <i class="iconfont icon-gouwuchekong"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/profile" class="tabbar-item">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </div>
  
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang='less' scoped>
@import url("assets/css/base.css");
@import url("http://at.alicdn.com/t/font_1608396_8g3rfr7m3g8.css");
.tabbar{
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
  .tabbar-item{
    text-align: center;
    width: 25%;
    i{
      font-size: 30px;
    }
  }
}
.router-link-active{
  color: red;
}
</style>
