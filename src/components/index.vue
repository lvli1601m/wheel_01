<template>
    <div class="index">
    <div class="wrap">
      <section>
          <div v-for="(item, index) in brand" :key="index">
              <ul>
                <p :id ='index'>{{index}}</p>
                <li v-for="(value,key) in item" :key="key" @click="getMakeList(value.MasterID)">
                    <img :data-src="value.CoverPhoto" src="../assets/loading.gif">
                    <span>{{value.Name}}</span>
                </li>
              </ul>
          </div>
      </section>
    </div>
     <aside @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <span v-for="(item, index) in letters" :key="index">{{item}}</span>
      </aside>
      <div v-show= "flag" class='squire'>
        <span class='con'>{{con}}</span>
      </div>
      <MakeList></MakeList>
    </div>
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
import MakeList from './common/makeList'
import lazyLoad from '../util/lazyLoad'
    export default {
        computed: {
            ...mapState({
                letters: state=>state.Index.letters,
                brand: state=>state.Index.brand,
                flag: state=>state.Index.flag,
                con: state=>state.Index.con
            })
        },
        components:{
            MakeList  
        },
        methods: {
        ...mapActions({
                initState: 'Index/initState',
                getMakeList: 'Index/getMakeList',
                isShow: 'Index/isShow'
            }),
             touchStart(){
            },
            touchMove(e){
                // 获取手指的位置
                let pageY = e.touches[0].pageY;
                // 计算当前在拿一个字母
                let index = Math.floor((pageY-this.marginTop)/this.height);
                // 字母边界处理
                if (index < 0){
                    index = 0;
                }else if(index > this.letters.length-1){
                    index = this.letters.length - 1;
                }
                this.$store.state.Index.flag = true;
                this.$store.state.Index.con = this.letters[index]
                
                // 查询id为当前字母的元素
                let ele = document.getElementById(this.letters[index]);
                let top = ele.offsetTop;

                // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
                document.querySelector('.wrap').scrollTop = top;
            },
            touchEnd(){
                this.$store.state.Index.flag = false; 
            }
        },
        mounted(){
            this.initState()
            console.log(this.$store.state.Index.con)
        },
        updated() {
            // 获取每个字母的高度
            this.height = 0.4*window.innerWidth/750*100;
            // 获取字母列表距离顶部的高度
            this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2;
            lazyLoad('.wrap')
        },
    }
</script>
<style scoped lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
    .index{
        height: 100%;
    }
    .wrap{
        height: 100%;
        overflow: scroll;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
    .squire{
        position: fixed;
        top: 50%;
        right: 50%;
        transform: translateY(-50%);
        .con{
            width: 50px;
            height: 50px;
            line-height: 50px;
            color: #fff;
            font-size: 25px;
            text-align: center;
            border-radius: 50%;
            background: #ccc;
            display: block;
        }
    }

   
</style>

