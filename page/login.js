window.onload = function() {
  var xml = new XMLHttpRequest()
  xml.open("GET", "/getData", true)
  xml.send(null)
  xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200) {
      console.log(xml.responseText);
      console.log(typeof xml.responseText);
    }
  }
}
