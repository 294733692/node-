var fs = require("fs")
var globalConfig = require('./config')

var fileName = globalConfig.log_path + globalConfig.log_name
// fs.writeFile(fileName, "asd", function() {}) // 异步写入
// fs.writeFileSync(fileName, "asd") // 同步写入

function log(data) {
  console.log(data)
  fs.appendFile(fileName, data + "\n", {flag: "a"}, function() {})
  // fs.writeFile(fileName, data + "\n", {flag: "a"}, function() {}) // 异步写入
}

module.exports = log
