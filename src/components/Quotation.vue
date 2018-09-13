<template>
    <div class="box">
         <header class="box_flxed">
            可向多个商家咨询最低价，商家及时回复
        </header>
         <div class="section">
            <div class="hover">
                <div class="img">
                    <img :src="details.serial.Picture" />
                </div>
                <div class="hover_dls">
                    <h1>{{details.serial.AliasName}}</h1>
                    <p>{{details.market_attribute.year}}款{{details.exhaust_str}}  {{details.serial.BrandName}}</p>
                </div>
            </div>
            <div class="from">
                <p>个人信息</p>
                <ul class="from_information">
                    <li>
                        <p>姓名</p>
                        <div>
                            <input type="text" placeholder="输入你的真实中文姓名">
                        </div>
                    </li>
                    <li>
                        <p>手机</p>
                        <div>
                            <input type="text" placeholder="输入你的真实手机号码">
                        </div>
                    </li>
                    <li>
                        <p>城市</p>
                        <div @click="showCity(true)">
                            <p>{{currentCity}}</p> 〉
                        </div>
                    </li>
                    <li>
                        <button>询最低价</button>
                    </li>
                </ul>
            </div>
            <div class="hover_list">
                <p>选择报价经销商</p>
                <ul class="hover_city">
                    <li v-for="(value,index) in list" :key="index">
                        <div class="stort">
                            <h1>{{value.dealerShortName}}</h1>
                            <p>{{value.address}}</p>
                        </div>
                        <div>
                            <p>{{value.promotePrice}}万</p>
                            <p>售{{value.saleRange}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <CitySelect :class="isShowCity ? 'active' : '' "></CitySelect>
    </div>
</template>
<script>
    import CitySelect from './common/city'
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        data() {
            return {
                img: '',
                price: '',
                num: ''
            }
        },
        components: {
            CitySelect: CitySelect
        },
        computed: {
            ...mapState({
                list: state => state.Quotations.list,
                details: state => state.Quotations.details,
                isShowCity: state => state.Quotations.isShowCity,
                currentCity: state => state.Quotations.currentCity
            })
        },
        methods: {
            ...mapActions({
                official: 'Quotations/official'
            }),
            ...mapMutations({
                officialList: 'Quotations/officialList',
                showCity : 'Quotations/showCity'
            })

        },
        mounted() {
            this.official(this.$route.query.id)
        },
        updated() {
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: .14rem;
    }

    html,
    body,
    .box {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    html {
        font-size: 625%;
    }

    li {
        text-decoration: none;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    .box {
        background-color: #eee;
    }

    .box_flxed {
        position: fixed;
        top: 0;
        height: .35rem;
        width: 100%;
        background: #79cd92;
        text-align: center;
        z-index: 99;
        font-size: .16rem;
        color: #fff;
        line-height: .35rem;
    }

    .hover {
        display: flex;
        background-color: #fff;
        padding: .2rem 0;
        margin-top: .35rem;
    }

    .img {
        width: 30%;
        text-align: center;
    }

    .img img {
        width: 95%;
    }

    .hover_dls {
        margin-left: 5%;
    }

    .hover_dls h1 {
        font-size: .2rem;
        font-weight: 400;
        margin-top: .15rem;
    }

    .hover_dls p {
        line-height: .4rem;
        font-size: .18rem;
    }

    .from>p {
        line-height: .3rem;
        padding-left: .1rem;
    }

    .from_information {
        background-color: #fff;
    }

    .from_information li {
        border-bottom: 1px solid #eee;
        display: flex;
        padding: .15rem 0;
    }

    .from_information li p {
        width: 20%;
        text-align: center;
    }

    .from_information li div {
        width: 80%;
        text-align: right;
        margin-right: .1rem;
    }

    .from_information li div input {
        width: 45%;
        outline: none;
        border: none;
    }

    .from_information li:last-child {
        display: flex;
        justify-content: center;
    }

    .from_information li:last-child button {
        width: 85%;
        padding: .1rem 0;
        background-color: #3aacff;
        border-radius: .07rem;
        outline: none;
        border: none;
        color: #fff;
        font-size: .18rem;
    }

    .hover_list>p {
        line-height: .4rem;
        font-size: .18rem;
        padding-left: .1rem;

    }

    .hover_city {
        background-color: #fff;
    }

    .hover_city li {
        border-bottom: 1px solid #ccc;
        padding: .15rem 0;
        display: flex;
    }

    .hover_city li div:first-child {
        width: 70%;
        padding-left: .2rem;
    }

    .hover_city li div:last-child {
        width: 30%;
        text-align: right;
        padding-right: .15rem;
    }

    .hover_city li div:last-child p:first-child {
        color: red;
        line-height: .2rem;
    }
</style>