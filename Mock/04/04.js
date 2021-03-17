const axios = require('axios');

axios.get('https://cdn.ycku.com/data.json')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log('错误:' + err);
    });