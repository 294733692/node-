var studentDAO = require("../DAO/studentDAO")

function queryAllStudent(success) {
  studentDAO.queryAllStudent(success)
}

module.exports = {"queryAllStudent": queryAllStudent}
