var connection = require('./dbutil')

function queryAllStudent(success) {
  var querySql = "select * from student;"

  // 链接数据库
  connection.connect()
  // 查询数据
  connection.query(querySql, function (error, result) {
    if (error == null) {
      console.log(result);
      success(result)
    } else {
      console.log(error);
    }
  })

  // 关闭数据库
  connection.end()
}

function queryStudentByClassAndAge(classNum, age) {
  var querySql = "select * from student where class = ? and age = ?;"
  var queryParams = [classNum, age]
  // 链接数据库
  connection.connect()
  // 查询数据
  connection.query(querySql, queryParams, function (error, result) {
    if (error == null) {
      console.log(result);
    } else {
      console.log(error);
    }
  })

  // 关闭数据库
  connection.end()
}

module.exports = {
  "queryAllStudent": queryAllStudent,
  "queryStudentByClassAndAge": queryStudentByClassAndAge
}
