
//请求轮播图数据
import {request} from './request'
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
//请求商品列表数据
export function  getHomeGoods(type,page){
    page = page+1
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

//请求商品详情数据
export function  getdetail(){
    return request({
        url:'detail'
    })
}