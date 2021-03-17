const axios = require('axios');

//所谓拦截操作，就是在Ajax获取数据之前先拦截处理一些事务的操作;
//这些操作包括:修改axios配置信息，loading，判断验证跳转等等;
//拦截处理完毕之后，再通过return返回基础处理即可;


const myAxios = axios.create({
    baseURL : 'https://cdn.liyanhui.com'
});

//添加请求拦截
myAxios.interceptors.request.use(config =>{
    console.log('loading.....');
    return config;
})

//添加响应拦截
myAxios.interceptors.response.use(response => {
    //在输出数据前，对数据进行拦截处理
    return response.data;
})

//request通用
myAxios.request({
    method : 'get',
    url : '/data.json'
}).then(res => {
    console.log(res);
})


