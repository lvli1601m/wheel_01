import {
  detailList
} from '../../api/index'

// 基本数据
let state = {
  eachData: {},
  currentYear: '全部' //当前选中的年份
}

// 派生
let getters = {
  years(state) {
    if (!state.eachData.list) {
      return [];
    }
    let arr = state.eachData.list.map(item => {
      return item.market_attribute.year;
    })
    let set = new Set(arr);
    return ['全部', ...set];
  },
  list(state) {
      if(!state.eachData.list){
          return [];
      }
    // 把排量和吸气类型相同数据做个合并
    function merge(arr) {
      let types = [];
      let obj = {};
      arr.forEach(item => {
        let type = item.exhaust_str + '/'+ item.max_power_str+''+item.inhale_type;
        if(types.indexOf(type) == -1){
            types.push(type);
            obj[type] = [item];
        }else{
            obj[type].push(item);
        }
      })
      return obj;
    }
    if (state.currentYear == '全部') {
      return merge(state.eachData.list)
    } else {
      return merge(state.eachData.list.filter(item => {
        return item.market_attribute.year == state.currentYear;
      }))
    }
  }
}

// 提交更改数据的方法，同步！
let mutations = {
    changeYear(state, payload){
        state.currentYear = payload;
    },
  initState: (state, payload) => {
    state.eachData = payload;
    console.log(payload)
    // 车辆排重
    payload.list.sort((a, b) => {
      // 先按照年份排序，降序
      if (b.market_attribute.year != a.market_attribute.year) {
        return b.market_attribute.year - a.market_attribute.year
      } else {
        // 按照排量排序，升序
        if (b.exhaust_str > a.exhaust_str) {
          return -1;
        } else if (b.exhaust_str < a.exhaust_str) {
          return 1;
        } else {
          // 按照功率排序，升序
          if (b.max_power_str > a.max_power_str) {
            return -1;
          } else if (b.max_power_str < a.max_power_str) {
            return 1;
          } else {
            // 按照指导价格排序 升序
            if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
              return -1;
            } else {
              return 1;
            }
          }
        }
      }
    })
  }
}
//像一个装饰器，包裹mutations，使之可以异步
let actions = {
  detailList: ({
    commit
  }, payload) => {
    detailList(payload).then(body => {
      if (body.code == 1) {
        commit('initState', body.data)
      } else {
        alert(body.msg);
      }
    })
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
