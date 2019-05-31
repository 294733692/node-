var studentServer = require("../server/studentServer")
var url = require("url")
var path = new Map()

function getData(request, response) {
  studentServer.queryAllStudent(function (result) {
    var resArr = [];
    for(var i = 0; i < result.length; i++) {
      resArr.push(result[i].name)
    }
    response.write(resArr.toString())
    response.end()
  })
}
path.set("/getData", getData)

function login(request, response) {
  // 获取路由query
  var params = url.parse(request.url, true).query
  studentServer.queryStudentByStuNum(params.stuNum, function(result) {
    var res = ""
    if (result == null || result.length == 0) {
      res = "Fail"
    } else {
      if (result[0].pwd == params.password) {
        res = "OK"
      } else {
        res = "Fail"
      }
    }
    response.write(res.toString())
    response.end()
  })
}
path.set("/login", login)

module.exports.path = path
