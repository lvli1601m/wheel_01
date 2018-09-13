<template>
    <div class="car">
        <div class="content">
            <router-link tag="div" :to="{path:'/img', query:{id:eachData.SerialID}}">
            <div class="img">
                <img :src="eachData.CoverPhoto" data-hover="hover">
                <span data-hover="hover">{{eachData.pic_group_count}}张照片</span>
            </div>
            </router-link>
            <div class="info">
                <p>
                    {{eachData.market_attribute&&eachData.market_attribute.dealer_price}}
                </p>
                <p>指导价 {{eachData.market_attribute&&eachData.market_attribute.official_refer_price}}</p>
                <!-- <router-link tag="div" :to="{path:'/quotation'}"> -->
                <div class="action active flex-row">
                    <button data-hover='hover' @click="floorPrice">{{eachData.BottomEntranceTitle}}</button>
                </div>
                <!-- </router-link> -->
            </div>
            <li class="year">
                <span @click="changeYear(item)" :class="currentYear==item?'active':''"  v-for="(item, index) in years" :key="index">{{item}}</span>
            </li>
            <section>   
                <ul v-for="(item, index) in list" :key="index">
                    <p>{{index}}</p>
                    <li v-for="(value, key) in item" :key="key">
                        <p>{{value.market_attribute.year+'款'+value.car_name}}</p>
                        <p>{{`${value.max_power}马力${value.gear_num}挡${value.trans_type}`}}</p>
                        <p>
                            <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                            <span>{{value.market_attribute.official_refer_price}}</span>
                        </p>
                    </li>
                </ul>
            </section>
        </div>
        <div class="bottom flex-cloum flex-centerY">
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';
    export default {
        data(){
            return{
               ids : ''
            }
        },
        computed:{
            ...mapGetters({
                years: 'Details/years',
                list: 'Details/list',
            }),
             ...mapState({
                eachData: (state) => state.Details.eachData,
                currentYear: (state) => state.Details.currentYear,
             })
        },
        methods:{
            ...mapActions({
                detailList: 'Details/detailList'
            }),
            ...mapMutations({
                changeYear: 'Details/changeYear'
            }),
            floorPrice(){
                this.$router.push({
                    path: '/quotation',
                    query : {
                        id : this.ids
                    }
                })
            }
        },
        updated() {
            for(let index in this.list){
                let ind = this.list[index]
                ind.map((item,inde)=>{
                    this.ids =item.car_id
                })
            }
        },
        mounted(){
            let id =  this.$route.query.id
            this.detailList(id)
        }
    }
</script>
<style scoped lang="scss">
li{
    list-style: none;
    span{
        padding-right:.46rem;
    }
}
#app>div {
    width: 100%;
    height: 100%;
}
.car {
    width: 100%;
    height: 100%;
    background: hsl(0, 0%, 96%);
    display: flex;
    flex-direction: column;
    .content{
        height: 100%;
        flex: 1;
        overflow: auto;
        .img{
            position: relative;
            height: 3.29rem;
            overflow: hidden;
            img{
                width: 100%;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                position: absolute;
            }
            span{
                position: absolute;
                bottom: .3rem;
                right: .3rem;
                color: #fff;
                padding: 1px .1rem;
                border-radius: .2rem;
                background: rgba(0,0,0,.6);
                font-size: .24rem;
            }
        }
        .info{
            padding: .36rem .2rem .3rem;
            background: #fff;
            position: relative;
            p{
                max-width: 3.4rem;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p:first-child{
                font-size: .36rem;
                color: red;
                font-weight: 500;
                span{
                    font-size: .32rem;
                    font-weight: 400;
                }
            }
            p:nth-child(2){
                font-size: .26rem;
                color: silver;
            }
            .action{
                padding-top: .2rem;
                -webkit-box-pack: justify;
                justify-content: space-between;
                width: 50%;
                position: absolute;
                right: .1rem;
                top: .22rem;
                button{
                    background: #00afff;
                    color: #fff;
                    border-radius: .1rem;
                    font-size: .32rem;
                    height: .7rem;
                    width: 3.45rem;
                    border: none;
                    box-sizing: border-box;
                    outline: none;
                    -webkit-appearance: none;
                }
            }
            .flex-row{
                display: flex;
                -webkit-box-direction: normal;
                -webkit-box-orient: horizontal;
                flex-direction: row;
            }
        }  
    }
    .bottom {
        width: 100%;
        bottom: 0;
        z-index: 99;
        background: #3aacff;
        height: 1rem;
        color: #fff;
        text-align: center;
         p:first-child {
            font-size: .32rem;
            margin-top: .12rem;
            font-weight: 500;
        }
         p:nth-child(2) {
            font-size: .24rem;
        }
    }
}
.year{
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
}
.year .active{
    color: #3aacff;
}
ul>p{
    padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
}
li{
    padding: 0 .2rem;
    overflow: hidden;
    p:first-child{
        padding: .26rem 0 .18rem;
        font-size: .3rem;
        line-height: 1;
        color: #3d3d3d;
    }
    p:nth-child(2){
        color: #bdbdbd;
        font-size: .26rem;
    }
    p:nth-child(3){
        text-align: right;
        padding-bottom: .1rem;
        font-size: .24rem;
        color: #818181;
        span:nth-child(2) {
            font-size: .3rem;
            color: #ff2336;
            margin-left: .1rem;
        }
    }
}
</style>

