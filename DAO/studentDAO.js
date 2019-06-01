var dbutil = require('./dbutil')

function queryAllStudent(success) {
  var querySql = "select * from student;"
  //每次请求创建一个新的sql链接
  var connection = dbutil.createConnection()
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
  //每次请求创建一个新的sql链接
  var connection = dbutil.createConnection()
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

function queryStudentByStuNum(stuNum, success) {
  var querySql = "select * from student where stu_num = ?"
  //每次请求创建一个新的sql链接
  var connection = dbutil.createConnection()
  // 链接数据库
  connection.connect()
  // 查询数据
  connection.query(querySql, stuNum, function (error, result) {
    if (error == null) {
      success(result)
    } else {
      console.log(error);
    }
  })

  // 关闭数据库
  connection.end()
}

module.exports = {
  "queryAllStudent": queryAllStudent,
  "queryStudentByClassAndAge": queryStudentByClassAndAge,
  "queryStudentByStuNum": queryStudentByStuNum
}
