var path = new Map()

function getData(request, response) {
  // response.writeHead(200)
  // response.write("hello")
  // response.end()
  throw new Error("一个来自程序运行的错误")
}
path.set("/getData", getData)

function getData2(request, response) {

}
path.set("/getData2", getData2)

module.exports.path = path
