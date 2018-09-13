<template>
    <div class="cityList">
        <div class="province">
            <ul>
                <li v-for="(value,index) in provinces" :key="index" :data-id="value.CityID">
                    <p>{{value.CityName}}</p>
                    <p @click="CityList(index)">〉</p>
                </li>
            </ul>
        </div>
        <section :class="isShowCity ? 'activ city' : ''" @click="showRransform(isShowCity)">
            <div>
                <p v-for="(item,index) in cities" :key="index">
                    {{item.CityName}}
                </p>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        data() {
            return {
                img: '',
                price: '',
                num: ''
            }
        },
        computed: {
            ...mapState({
                provinces: state => state.city.provinces,
                cities: state => state.city.cities,
                isShowCity: state => state.city.isShowCity
            })
        },
        methods: {
            ...mapActions({
                CityList: 'city/CityList'
            }),
            ...mapMutations({
                showRransform : 'city/showRransform'
            })
        },
        mounted() {
            this.CityList()
        },
        updated() {
        }
    }
</script>
<style scoped>
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

    .province {
        height: 100%;
        overflow-y: scroll;
    }

    .cityList {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        transform: translate3d(0, 100%, 0);
        background-color: #fff;
        z-index: 99;
    }

    .active {
        transform: translate3d(0, 0, 0)
    }

    ul>p {
        line-height: .4rem;
        padding-left: .1rem;
        background-color: #ccc;
    }

    ul li {
        border-bottom: 1px solid #ccc;
        margin-left: .1rem;
        display: flex;
        padding: .15rem 0;
    }

    ul li p:first-child {
        padding-left: .1rem;
        width: 75%;
        font-size: .15rem;
    }

    ul li p:last-child {
        width: 25%;
        text-align: right;
        padding-right: .2rem;
    }

    .city {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        overflow-y: scroll;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .city>div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        transform: translate3d(50%, 0, 0);
        background-color: #fff;
        z-index: 99;
    }
    .city>div p{
        padding: .12rem 0 .12rem .15rem;
        border-bottom: 1px solid #ccc;
    }
</style>