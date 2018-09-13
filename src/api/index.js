// 获取车辆列表
const sendRequest = (url, method = 'GET', body = {}) => {
  // 处理url,添加时间戳，保证每次请求不会被缓存
  if (/\?/.test(url)) {
    url += '&_=' + new Date();
  } else {
    url += '?_' + new Date();
  }

let params = {
    method
};
// 判断请求是否属于post请求
if (method == 'POST') {
  params.body = JSON.stringify(body);
}
  return fetch(url, params).then(res => res.json());
}
const host = /localhost:8080/ig.test(window.location.host) 
? 'http://baojia.chelun.com' : 'https://baojia.chelun.com';

export let getBrandList = () => {
  return sendRequest(`${host}/v2-car-getMasterBrandList.html?_1535698551812`);
}
/**
 * 获取车系详情
 * @param id 车型id
 * @return promise 返回一个promise
 */

export let getMakeList = (id) => {
  return sendRequest(`${host}/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}

/**
 * 获取车系图片分类列表
 * @param id 车型id
 * @return promise 返回一个promise
 */
export let detailList = (id) => {
  return sendRequest(`${host}/v2-car-getInfoAndListById.html?SerialID=${id}`);
}

export let imgs = (id) => {
  return sendRequest(`${host}/v2-car-getImageList.html?SerialID=${id}`);
}

 /**
 * 获取车系具体类型图片列表
 * @param id 车型id
 * @param imgId 图片类型id
 * @param page 当前页码
 * @param pageSize 每页列表的数量
 * @return promise 返回一个promise
 * 
 */
 export let getImgList = (id, imgId,page = 1, PageSize = 30)=>{
     let search = `SerialID=${id}&ImageID=${imgId}&Page=${page}&PageSize=${PageSize}`;
     return sendRequest(`${host}/v2-car-getCategoryImageList.html?${search}`)
 }

 // 获取城市
 export let getCityList = (provinceId)=>{
    let search = ``;
    if(provinceId){
        search += `provinceid=${provinceId}`
    }
    return sendRequest(`${host}/v1-city-alllist.html?${search}`)
}

export let getDealerList = (carId,cityId = 201) =>{
    return sendRequest(`${host}/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}

// 获取颜色
export let imgList = (id) => {
    return sendRequest(`${host}/v2-car-getModelImageYearColor.html?SerialID=${id}`);
  }



