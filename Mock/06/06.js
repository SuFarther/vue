//axios 实例化和拦截
//全局属性配置，即将属性中大量重复的内容抽离出来单独设置;

//全局默认值设置，baseUrl 会自动在 url 前面添加

const axios = require('axios');

//实例化
// const myAxios = axios.create();
//设置默认值
// myAxios.defaults.baseURL = 'https://cdn.liyanhui.com';

const myAxios = axios.create({
    baseURL : 'https://cdn.liyanhui.com'
});

//request通用
myAxios.request({
    method : 'get',
    url : '/data.json'
}).then(res => {
    console.log(res.data);
})


