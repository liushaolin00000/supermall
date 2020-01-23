<template>
  <div class="home">
    <TabControl
      :title="title"
      @currentType="currentTypes"
      ref="tabControl1"
      class="TabControl1"
      :homeindex1="homeindex"
      v-show="tabControlfix"
    ></TabControl>
    <div class="all">
      <Tabbar class="tabbar">
        <div slot="middle">购物车</div>
      </Tabbar>
    </div>

    <Scroll
      class="content"
      @backscroll="handlebackscroll"
      ref="scroll"
      :probeType="probeType"
      :pullUpLoad="true"
      @pullingUp="moreLoad"
    >
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt style="width:100%" @load="loadswiperimg" />
        </van-swipe-item>
      </van-swipe>
      <div class="tuijain">
        <div class="tuijian-item" v-for="(item,index) in recommend" :key="index">
          <img :src="item.image" alt="item.title" />
          <p>{{item.title}}</p>
        </div>
      </div>
      <Fetureview />
      <TabControl
        :title="title"
        @currentType="currentTypes"
        ref="tabControl2"
        :homeindex2="homeindex"
      ></TabControl>
        <div class="goods">
          <div v-for="(item,index) in goods[currentType].list" :key="index" class="item-goods" @click="indetial(item.iid)">
            <img :src="item.show.img" alt @load="imageLoad" />
            <p>{{item.title}}</p>
            <div class="price">
              <span>￥{{item.price}}</span>
              <i class="iconfont icon-shoucang"></i>
              <span>{{item.cfav}}</span>
            </div>
          </div>
        </div>
    </Scroll>
    <Backbutton @click.native="handleback" v-show="isShow"></Backbutton>
  </div>
</template>
<script>
import Tabbar from "components/common/tabbar";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import Fetureview from "./childcop/fetureview";
import TabControl from "components/content/TabControl";
import Scroll from "components/common/scroll/scroll";
import Backbutton from "components/content/backbutton/backbutton";
export default {
  components: {
    Tabbar,
    Fetureview,
    TabControl,
    Scroll,
    Backbutton
  },
  data() {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      title1: ["pop", "new", "sell"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      probeType: 3,
      loadswiperimgs: false,
      //tab切换栏到顶部的高度
      tabControlTop: 0,
      //判断切换栏是否吸顶
      tabControlfix: false,
      //tab栏切换的index值
      homeindex: 0
    };
  },
  mounted() {
    getHomeMultidata().then(res => {
      // console.log(res.data.data.recommend)
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    });
    // const type = this.currentType;
    this.getHomeGoods();
  },
  destroyed(){
      console.log(123)
  },
  methods: {
    getHomeGoods() {
      console.log("加载更多");
      getHomeGoods(this.currentType, this.goods[this.currentType].page).then(
        res => {
          this.goods[this.currentType].list.push(...res.data.data.list);
          this.goods[this.currentType].page += 1;
          this.$refs.scroll.scroll.finishPullUp();
        }
      );
    },
    currentTypes(data) {
      this.currentType = data;
      this.homeindex = this.title1.indexOf(data);
      //   console.log(this.homeindex)

      //   this.index2 =  this.$refs.tabControl2.current
      //   console.log(this.index1)
      //   console.log(this.currentType);
      // console.log(data)
      // alert(data)t
      //   getHomeGoods(this.currentType, this.goods[this.currentType].page).then(res => {
      //     this.goods[this.currentType].list = res.data.data.list;
      //     // console.log(res.data.data.list)
      //     this.goods[this.currentType].page =1
      //     // console.log(res.data.data.list);
      //   });
    },
    handleback() {
      // console.log(this.$refs.scroll)
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    handlebackscroll(position) {
      this.isShow = position > 1000;
      this.tabControlfix = position > this.tabControlTop;
    },
    moreLoad() {
      //   console.log("上拉加载更多");
      //    const type = this.currentType;
      this.getHomeGoods();
      this.$refs.scroll.scroll.refresh();
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
    },
    //轮播图图片加载完成
    loadswiperimg() {
      if (!this.loadswiperimgs) {
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
        this.loadswiperimgs = true;
      }
    },
    //点击进入详情页
    indetial(iid){
        this.$router.push('/detail/'+iid)
    }
  }
};
</script>

<style lang='less' scoped>
.home {
  // position: relative;
  .tabbar {
    background-color: var(--color-tint);
  }
}
.tuijain {
  display: flex;
  margin-top: 10px;
  .tuijian-item {
    width: 25%;
    justify-content: space-around;
    text-align: center;
    img {
      width: 80%;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item-goods {
    width: 48%;
    margin-top: 10px;
    img {
      width: 100%;
      border-radius: 20px;
    }
    p {
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      //   padding: 5px;
      margin: 5px;
      color: #7f7d7f;
    }
    .price {
      text-align: center;
      span:first-child {
        color: red;
        margin-right: 5px;
      }
    }
  }
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.TabControl1 {
  position: relative;
  z-index: 20;
}
</style>