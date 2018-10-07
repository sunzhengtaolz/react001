// const http = require('http');
// const addon = require('./build/Release/addon');//调c++方法引入的
 
// const hostname = '127.0.0.1';
// const port = 8080;
 
// http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "application/json"});
//   var otherArray = ["item1", "item2"];
//   var otherObject = { item1: "item1val", item2: "item2val" };
//   var json = JSON.stringify({ 
//     anObject: otherObject, 
//     anArray: otherArray, 
//     another: addon.hello()<span style="white-space:pre"> </span>//c++文件中暴露的方法
//   });
//   res.end("success_jsonpCallback(" + json + ")");<span style="white-space:pre">	</span>//！！一定要加配置的回调方法名
//   // res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // res.end(addon.hello());
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 1337;

const data = {
    code: 200,
    message: '成功',
    data:[
        {id: 1, name: '中国', age: 12},
        {id: 2, name: '美国', age: 23},
        {id: 3, name: '俄罗斯', age: 54},
    ]
}
    
const json = JSON.stringify({data});
http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    res.setHeader("Access-Control-Allow-Origin", "*");
//     res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
    res.writeHead(200, { 'Content-Type': 'text/plain' });  
//     res.end("success_jsonpCallback(" + json + ")")//！！一定要加配置的回调方法名 
    res.end(json)
    
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});