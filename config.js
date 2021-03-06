var fs = require("fs")

var conf = fs.readFileSync("./server.conf")
var configArr = conf.toString().split("\r\n")
var globalConf = {}

for (var i = 0; i < configArr.length; i++) {
  globalConf[configArr[i].split('=')[0]] = configArr[i].split('=')[1]
}
if (globalConf.static_file_type) {
  globalConf.static_file_type = globalConf.static_file_type.split("|")
} else {
  throw new Error("配置文件异常，缺少:globalConf.static_file_type")
}
module.exports = globalConf
