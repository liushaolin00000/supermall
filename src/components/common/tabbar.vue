<template>
  <div class="all">
    <div class="tabbar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="middle">
        <slot name="middle"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style coped lang='less'>
.all {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  .tabbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    .left {
      width: 50px;
    }
    .middle {
      //    background: green;
      // flex: 1;
      width: 260px;
      // width: 80%;
      text-align: center;
      color: #fff;
    }
    .right {
      //    background: orange;
      width: 50px;
    }
  }
}
</style>