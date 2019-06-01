var url = require("url")
var globalConfig = require("../config")

function loginFilter(request, response) {
  var pathname = url.parse(request.url).pathname

  if (pathname == "/login.html" || pathname == "/login" || isStaticsRequset(pathname)) {
    return true
  }
  // 查看是否有cookie
  if(request.headers.cookie) {
    var cookies = request.headers.cookie.split(";")

    for (var i = 0; i < cookies.length; i++) {
      if(cookies[i].split("=")[0].trim() == "id") {
        return true
      }
    }
  }
  response.writeHead(302, {"location": "/login.html"})
  response.end()
  return false
}

function isStaticsRequset(pathName) {
  for (var i = 0; i < globalConfig.static_file_type.length; i++) {
    var temp = globalConfig.static_file_type[i]
    if(temp == ".html") {
      continue
    }
    if(pathName.indexOf(temp) == pathName.length - temp.length) {
      return true
    }
  }
  return false
}


module.exports = loginFilter
