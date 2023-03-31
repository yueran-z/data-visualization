var express = require("express");
var app = express();
// 引用路由文件
var chartOne = require("./router/one.js");
var chartTwo = require("./router/two.js");
var chartThree = require("./router/three.js");
var chartFour = require("./router/four.js");

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
  // 千万不要网%%￥￥￥###
  // 千万不要网
  // 千万不要网
  next();
})
// 中间件中使用路由
app.use("/one", chartOne)//one/data
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)
// 请求是localhost:3000/user/路由文件中的地址
app.listen(3000)