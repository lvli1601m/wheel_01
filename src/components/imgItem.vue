<template>
  <div class="pic">
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img :src="images">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import {mapState, mapMutations, mapActions} from 'vuex';
  import getImgList from './Img.vue';
  export default {
    data(){
      return {
        images : ''
      }
    },
    computed:{
      ...mapState({
        imgList: (state) => state.Imgs.imgList,
      })
    },
    methods:{
      ...mapActions({
        imgs: 'Imgs/imgs',
        getImgList:'Imgs/getImgList'
      })
    },
    mounted(){
      this.images = this.$route.query.img
      console.log(this.images)
      var mySwiper = new Swiper('.swiper-container', {
    })
  },
}
</script>
<style scoped lang="scss">
.pic{
  background: #000;
  top: 0;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 101;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  margin-top: 200px;
  box-sizing: content-box;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  bottom: 20%;
  // position: relative;
}
img{
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}


</style>

