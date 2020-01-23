import axios from 'axios'
// export default function request(config,success,failure){
//     //1.创建axios的实例
//     const intance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     intance(config).then(res=>{
//         success(res)
//     }).catch(res=>{
//        failure(res)
//     })
// }

//终极封装
export default  function request(config){
    //1.创建axios的实例
    const intance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2.axios的拦截器 实例拦截器  
    //2.1请求拦截器
    intance.interceptors.request.use(config=>{
         console.log(config)
         return config    
    },err=>{
        console.log(err)
        return err
    })
    //2.2响应拦截器
    intance.interceptors.response.use(res=>{
      console.log(res)
      return res
    },err=>{
        console.log(err)
        return err
    })
    //3发送真正的网络请求
    return intance(config)
}