<template>
    <div class="picture">
       <div v-for="(item, index) in imgList.List" :key="index" @click= "Broadcast(item)">
           <img :src="item.Url" alt="">
       </div>
    </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed:{
            ...mapState({
                imgList: (state) => state.Imgs.imgList,
            })
        },
        methods:{
           ...mapActions({
               getImgList:'Imgs/getImgList'
            }),
            Broadcast(img){
                this.getImgList(img);
                this.$router.push({
                    path: '/imgItem',
                    query: {  img:img.Url } 
                })
            }
        },
        
        mounted(){
        }
    }
</script>
<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
    
}
.picture{
    width: 100%;
    overflow: hidden;
}
div{
    float: left;
    width: 33.3%;
}
img{
    width: 100%;
    height: 100%;
}

</style>

