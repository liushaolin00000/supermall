<template>
  <div class="wrapper" ref="wrapper">
    <div class="contents">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  props: ["probeType", "pullUpLoad"],
  data() {
    return {
      scroll: null,
      position: 0
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    // console.log(this.scroll);
    this.scroll.on("scroll", position => {
      this.position = -position.y;
      this.$emit("backscroll", this.position);
    });
    this.scroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    //   this.scroll.finishPullUp();
     this.$emit('pullingUp')
    });
  }
};
</script>

<style scoped lang='less'>
</style>