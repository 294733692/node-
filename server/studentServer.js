var studentDAO = require("../DAO/studentDAO")

function queryAllStudent(success) {
  studentDAO.queryAllStudent(success)
}

function queryStudentByStuNum(stuNum, success) {
  studentDAO.queryStudentByStuNum(stuNum, success)
}

module.exports = {
  "queryAllStudent": queryAllStudent,
  "queryStudentByStuNum": queryStudentByStuNum
}
