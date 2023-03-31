var express = require("express");
var router = express.Router()
// 引用数据
let oneData = require("../mock/one.json")
router.get("/data", function (req, res) {
  // 数据返回给前台
  res.send({ msg: "第1个接口", chartOne:oneData })
})


module.exports = router