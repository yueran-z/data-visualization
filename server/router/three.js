
// 存放路由的文件
var express=require("express");
var router=express.Router()
// 引用数据
let threeData = require("../mock/three.json")
router.get("/data", function (req, res) {
  // 数据返回给前台
  res.send({ msg: "第1个接口", chartThree: threeData })
})
// 暴露路由
module.exports=router
