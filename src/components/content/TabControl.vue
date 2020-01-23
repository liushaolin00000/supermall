<template>
  <div class="tabcontrol">
    <div
      class="tab-item"
      v-for="(item,index) in title"
      :key="index"
      @click="handleClick(index)"
      :class="{'active':index==current}"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['homeindex1',"title",'homeindex2'],
  data() {
    return {
      current: 0,
      currentType:'pop',
    };
  },
  methods: {
    handleClick(index) {
      // index = this.homeindex1
      // index = this.homeindex2
      this.current = index;
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
           break;
        case 2:
          this.currentType = "sell";
      }
      this.$emit('currentType',this.currentType)
      // index = this.index1
      // index = this.index2
      // console.log(this.index1)
      // console.log(this.homeindex1)
      // console.log(this.homeindex2)
      
    }
  }
};
</script>

<style scoped lang='less'>
.tabcontrol {
  display: flex;
  position: sticky;
  top: 44px;
  //    justify-content: space-around;
  background-color: #fff;
  .tab-item {
    flex: 1;
    text-align: center;
    padding: 7px 0;
    margin: 0 30px;
  }
  .active {
    color: #ff6b7d;
    border-bottom: 2px solid #ff6b7d;
  }
}
</style>