var fs = require("fs")

var path = new Map()

function testFileUpload(request, response) {
  console.log("=======");

  request.on("data", function(data) {
    var fis = fs.createWriteStream("./file/asd.jpg")
    fis.write(data)
    fis.end()
    response.end()
  })
}

path.set("/testFileUpload", testFileUpload)

module.exports.path = path
