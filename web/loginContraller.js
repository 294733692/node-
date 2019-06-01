var studentServer = require("../server/studentServer")
var url = require("url")
var path = new Map()

function getData(request, response) {
  studentServer.queryAllStudent(function (result) {
    var resArr = [];
    for (var i = 0; i < result.length; i++) {
      resArr.push(result[i].name)
    }
    response.write(resArr.toString())
    response.end()
  })
}

path.set("/getData", getData)

//Get 请求
function login1(request, response) {
  // 获取路由query，get请求
  var params = url.parse(request.url, true).query
  studentServer.queryStudentByStuNum(params.stuNum, function (result) {
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

//POST请求
function login(request, response) {
  // 获取路由query，get请求
  var params = url.parse(request.url, true).query

  // post 请求参数获取
  request.on("data", function (data) {
    var stuNum = data.toString().split("&")[0].split("=")[1]
    var password = data.toString().split("&")[1].split("=")[1]
    studentServer.queryStudentByStuNum(stuNum, function (result) {
      var res = ""
      if (result == null || result.length == 0) {
        res = "Fail"
        response.writeHead(302, {"location": "/error.html"})  // 重定向，from表单提交
        response.end()
      } else {
        if (result[0].pwd == password) {
          res = "OK"
          response.writeHead(302, {"location": "/main.html", "Set-Cookie": "id=" + result[0].id})  // 重定向，from表单提交
          response.end()
        } else {
          res = "Fail"
          response.writeHead(302, {"location": "/error.html"})  // 重定向，from表单提交
          response.end()
        }
      }
      // response.write(res.toString())
      // response.end()
    })
  })
}

path.set("/login", login)

module.exports.path = path

path.set("/login", login)

module.exports.path = path


