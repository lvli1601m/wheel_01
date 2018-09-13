<template>
    <div class="color-list">
		<div class="all-color">全部颜色</div>
		<div class="nav-list">
			<span>{{imgData}}</span>
		</div>
		<!-- <ul>
			<li v-for="(item,index) in list" :key="index" @click="getImgs(item.ColorId)"><span :style="{'background-color': item.Value}"></span>{{item.Name}}</li>
		</ul> -->
	</div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed:{
            ...mapState({
                imgData: (state) =>state.Color.imgData, 
            })
        },
        methods:{
           ...mapActions({ 
               imgList:'Color/imgList'
            })
        },
        mounted(){
            let id =  this.$route.query.id
            this.imgList(id)
            //console.log(this.$this.state.Color.imgData)
        },
         updated() {
            console.log(this.imgData)
        }
    }
</script>
<style scoped lang="scss">
.color-list {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f4f4f4;
	}
	.all-color {
		margin: .15rem 0;
	    font-size: .34rem;
	    color: #00afff;
	    background: #fff;
	    text-align: center;
	    line-height: .8rem;
	    height: .8rem;
	}
	.nav-list{
		margin-top: .15rem;
	    padding-left: .2rem;
	    font-size: .3rem;
	    line-height: .76rem;
	    height: .76rem;
	    background: #fff;
	    overflow-x: scroll;
	}
	.nav-list span{
		padding-right: .42rem;
	}
	.active{
		color: #00afff;
	}
	ul{
		margin-top: .15rem;
	    padding: 0 .2rem;
	    overflow: hidden;
	    background: #fff;
	    li{
			float: left;
		    width: 3.45rem;
		    font-size: .32rem;
		    line-height: .68rem;
		    border: 1px solid #3aacff;
		    box-sizing: border-box;
		    margin: .2rem 0;
		    border-radius: .05rem;
		    span{
		    	display: inline-block;
			    width: .4rem;
			    height: .4rem;
			    margin: 0 .2rem;
			    vertical-align: -12%;
			    background: #fe9210;
			    box-sizing: border-box;
			    border: 1px solid #818181;
		    }
		}
		&>li:nth-child(odd) {
		    margin-right: .2rem;
		}
	}

</style>

