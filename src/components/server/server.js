const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 1337;


http.createServer((req, res) => {
    var data = {};
    var pathname = url.parse(req.url).pathname;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { 'Content-Type': 'text/plain' });  

    if(pathname === '/') {
        data = data1;
    }else if(pathname === '/test') {
        data = data2;
    }else if(pathname === '/test/a'){
        data = data3;
    }
    var json = JSON.stringify({data});
    res.end(json)
    
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const data1 = {
    code: 200,
    message: '成功',
    data:[
        {id: 1, name: '中国', age: 12},
        {id: 2, name: '美国', age: 23},
        {id: 3, name: '俄罗斯', age: 54},
    ]
}
const data2 = {
    code: 200,
    message: '成功',
    data:[
        {id: 4, name: '中国', age: 34},
        {id: 5, name: '美国', age: 65},
        {id: 6, name: '俄罗斯', age: 54},
    ]
}
const data3 = {
    code: 200,
    message: '成功',
    data:[
        {id: 7, name: '中国', age: 342},
        {id: 8, name: '美国', age: 98},
        {id: 9, name: '俄罗斯', age: 324},
    ]
}