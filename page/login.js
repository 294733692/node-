window.onload = function () {
  xmlhttp = null;
  if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //编写回调函数
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log(xmlhttp.responseText)
      console.log(typeof xmlhttp.responseText)
    }
  }
  //open设置请求方式和请求路径
  xmlhttp.open("get", "/getData", true);//一个servlet，后面还可以写是否同步
  //send 发送
  xmlhttp.send();
}
