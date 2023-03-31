
// 存放路由的文件
var express=require("express");
var router=express.Router()
// 引用数据
let fourData = require("../mock/four.json")
router.get("/data", function (req, res) {
  // 数据返回给前台
  res.send({ msg: "第1个接口", chartFour: fourData })
})

// 暴露路由
module.exports=router
