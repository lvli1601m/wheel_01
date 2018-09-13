<template>
<div>
  <section :class="isShow?'mask active':'mask'"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="section">
    <ul v-for="(item, index) in makeList" :key="index">
      <p>{{item.GroupName}}</p>
      <router-link tag="li" v-for="(value, key) in item.GroupList" :key="key" :to="{path:'/detail', query:{id:value.SerialID}}">
            <img :data-src="value.Picture"  src="../../assets/loading.gif">
            <div>
            <p>{{value.AliasName}}</p>
            <p>{{value.DealerPrice}}</p>
            </div>
      </router-link>
    </ul>
  </section>
  </div>
</template>
       
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import lazyload from "../../util/lazyLoad";
export default {
  computed: {
    ...mapState({
      makeList: state => state.Index.makeList,
      isShow: state => state.Index.isShow
    })
  },
  methods: {
    touchStart(e) {
      this.touch = e.touches[0];
    },
    touchMove(e) {
      let touch = e.touches[0];
      this.offsetX = touch.pageX - this.touch.pageX;
      if (this.offsetX > 0) {
        this.$refs.section.style = `transform:translate3d(${
          this.offsetX
        }px, 0, 0)`;
      }
      console.log("滑动距离", this.offsetX, this.$refs.section);
    },
    touchEnd(e) {
      if (this.offsetX > 100) {
        this.$refs.section.style = `transform:translate3d(100%, 0, 0)`;
      }
    }
  },
  updated() {
    lazyload(".mask");
  }
};
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
a{
    text-decoration: none;
}
.mask {
  position: fixed;
  right: 0;
  top: 0;
  width: 72%;
  height: 100%;
  overflow: scroll;
  background: #fff;
  transform: translate3d(100%, 0, 0);
  box-shadow: -3px 0px 10px 0px rgba(0, 0, 0, 0.1);
  & > p {
    margin-left: 1px;
    font-size: 0.28rem;
    line-height: 0.48rem;
    background: #f2f2f2;
    padding-left: 0.3rem;
    color: #717171;
  }
  ul {
    margin-left: 0.1rem;
  }
  li {
    height: 1.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }
  img {
    margin: 0 0.1rem 0 0.2rem;
    width: 1.8rem;
    height: 1.2rem;
  }
  p:nth-child(1) {
    font-size: 0.34rem;
    color: #5f687a;
  }
  p:nth-child(2) {
    margin-top: 0.1rem;
    font-size: 0.28rem;
    color: red;
  }
}
.mask.active {
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s linear;
}
</style>

