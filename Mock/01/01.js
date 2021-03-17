//引入 mock.js，相当于 src=mock.js
const Mock = require('mockjs');
//创建模拟数据
const data = Mock.mock({
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});
// 输出结果
console.log(data)
// 转换 JSON 格式
console.log(JSON.stringify(data, null, 4));