const axios = require('axios');


//axios 配置和并发
//通过axios进行异步通信，使用了服务器端设置解决跨域;
//有时，我们需要在url地址配置参数进行数据筛选(这里单纯json，理解就行);
// axios.get('https://cdn.liyanhui.com/data.json',{
//    params : {
//        id : 19,
//        status : 1,
//    }
// }).then(res => {
//     console.log(res.data)
// })


axios({
    method  : 'get',
    url : 'https://cdn.liyanhui.com/data.json',
    params : {
        id : 19,
        status : 1,
    }
}).then(res => {
    console.log(res.data);
});