const http = require('http');
const url = require('url');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@0422sunT',
    database: 'nodejsServer'
})
const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
    var data = {};
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    // console.log(query)
    res.setHeader("Access-Control-Allow-Origin", "*");
//     res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });  
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });  

    var params = parseQuery(query);
    var sqlP = pingjie(params);
    // console.log(params);
    // console.log(sqlP);

    if(pathname === '/' && isEmptyJson(params)) {
        data = data1;
        returnData(res, data);
        return;
    }else if(pathname === '/test' && isEmptyJson(params)) {
        data = data2;
        returnData(res, data);
        return;
    }else if(pathname === '/test/a' && isEmptyJson(params)){
        data = data3;
        returnData(res, data);
        return;
    }else if(pathname === '/query' && !isEmptyJson(params)) {
        console.log('select * from ad where ' + sqlP)
        connection.connect();   //打开连接
        connection.query(
            // 'select * from ad where ' + sqlP, 
            'select * from ad',
            (err, rows, fields) => {
                data = format(rows);
                returnData(res, data);
                connection.end();       //关闭连接
                return;
            } 
        )
    }else if(pathname === '/modify' && !isEmptyJson(params)) {
        connection.connect();   //打开连接
        connection.query('select * from ad where ' )
        connection.end();       //关闭连接
    }else if(pathname === '/add' && !isEmptyJson(params)) {
        // connection.connect();   //打开连接
        // connection.end();       //关闭连接
    }else if(pathname === '/delete' && !isEmptyJson(params)) {
        connection.connect();   //打开连接

        connection.end();       //关闭连接
    }

    // var json = JSON.stringify(data);
    // res.end(json)
    
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function returnData(res,data) {
    var json = JSON.stringify(data);
    res.end(json)
}
function format(data) {
    var row = [];
    for(var index in data) {
        var d = {};
        var x = data[index];
        for(var key in x) {
            d[key] = x[key];
        }
        row.push(d);
    }
    return {row};
}

function pingjie(data) {
    // console.log(data)
    var a = '';
    for(var key in data) {
        a = a + key + "=" + data[key] + ' and ';
    }
    a = a.substring(0, a.length - 5);
    return a;
}

function isEmptyJson(data) {
    var name;
    for(name in data) {
        return false;
    }
    return true;
}

function parseQuery(data) {
    let params = {};
    if(data != '' && data != null) {
        let query = data.split('&');
        query.forEach(element => {
            let property = element.split('=');
            params[property[0]] = property[1];
        });
    }
    return params;
}

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