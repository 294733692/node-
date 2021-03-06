var http = require("http")
var url = require("url")
var fs = require('fs')
var globalConfig = require("./config")
var loader = require("./loader")
var filterSet = require("./filterloader")
var log = require("./log")

http.createServer(function(request, response) {
  var pathName = url.parse(request.url).pathname
  var params = url.parse(request.url, true).query
  var isStatic = isStaticsRequset(pathName)
  log(pathName)

  for(var i = 0; i < filterSet.length; i++) {
    var flag = filterSet[i](request, response)

    if(!flag) {
      return
    }
  }

  if (isStatic) {// 请求静态文件
    try {
      var data = fs.readFileSync(globalConfig["page_path"] + pathName)
      response.writeHead(200)
      response.write(data)
      response.end()
    } catch (e) {
      response.writeHead(404)
      response.write("<html><body><h1>404 Not Found</h1></body></html>")
      response.end()
    }
  } else {// 请求动态的数据
    if (loader.get(pathName) !=  null) {
      try {
        loader.get(pathName)(request, response)
      } catch (e) {
        response.writeHead(500)
        response.write("<html><body><h1>500 BadServer</h1></body></html>")
        response.end()
      }
    } else {
      response.writeHead(404)
      response.write("<html><body><h1>404 Not Found</h1></body></html>")
      response.end()
    }
  }
}).listen(globalConfig["port"])

log("服务已启动")

function isStaticsRequset(pathName) {
  for (var i = 0; i < globalConfig.static_file_type.length; i++) {
    var temp = globalConfig.static_file_type[i]
    if(pathName.indexOf(temp) == pathName.length - temp.length) {
      return true
    }
  }
  return false
}
