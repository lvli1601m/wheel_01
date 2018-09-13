<template>
    <div class="img">
        <!-- <router-link tag="div" to="/color"> -->
        <div class="color">
            <span @click="imgColor">颜色v</span>
            <span>车款v</span>
        </div>
        <!-- </router-link> -->
        <div class="tit" v-for="(val,ind) in imgData" :key="ind">
               <span>{{val.pic_group_count}}</span>
                <li v-for="(item,index) in val.List" :key="index" v-if="index === 0" @click="getMoreImg(val.Id)">
                    <img :src="item.Url">
                    <div class="txt">
                        <p>{{val.Count}}</p>
                        <p>{{val.Name}}</p>
                    </div>
                </li>  
                <li v-for="(item,index) in val.List" :key="index" v-if="index !== 0">
                    <img :src="item.Url">
                </li> 
        </div>
    </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed:{
            ...mapState({
                imgData: (state) => state.Imgs.imgData, 
            })
        },
        methods:{
           ...mapActions({
               imgs: 'Imgs/imgs',
               getImgList:'Imgs/getImgList'
            }),
            getMoreImg(imgId){
                let id =  this.$route.query.id
                this.getImgList({id,imgId});
                this.$router.push({
                    path: '/type',
                    query: {  id: imgId } 
                })
            },
            imgColor(id) {
				this.$router.push({
					path:'/color',
					query: {
						id: this.$route.query.id
					}
				})
				// this.getColorList(this.$route.query.id)
			},
        },
        mounted(){
            //console.log('.....',this.$store.state.Imgs.imgData)
            let id =  this.$route.query.id
            this.imgs(id)
        },
    }
</script>
<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
    overflow: hidden;
}
ul li{
    list-style: none;
}
.color{
    width: 100%;
    padding: 9px;
    display: flex;
    font-size: 20px;
    justify-content: space-around;
}

.car-img{
width: 100%;
height: 100%;
  }
.car-img{
    flex: 1;

}

  .tit li{
    position: relative;
    float: left;
    margin-right: .06rem;
    margin-bottom: .06rem;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0;
  }
 li>img{
    width: 100%;
    height: 100%;
    background-size: cover;
 }
 .txt{
     position: absolute;
     top: 25%;
     left: 25px;
     font-size: 20px;
     color: #fff;
 }
</style>

