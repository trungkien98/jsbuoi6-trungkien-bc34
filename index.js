console.log("hello world! ");
//bai1 Tìm n nhỏ nhất sao cho 1 + 2 + ... + n < 10000
document.getElementById("btnFind").onclick = function () {
  var tong = 0;
  var n = 0;

  do {
    n++;
    tong = tong + n;
  } while (tong < 10000);
  document.getElementById("showFind").innerHTML = "n là : " + n;
};

//bai2
document.getElementById("btnSum").onclick = function () {
  var numberX = document.getElementById("x").value;
  var numberY = document.getElementById("y").value;
  var sumPower = 0;
  for (let a = 1; a <= numberY; a++) {
    sumPower = sumPower + Math.pow(numberX, a);
  }
  document.getElementById("showSum").textContent = sumPower;
};

//bai3
document.getElementById("btnGiaiThua").onclick = function () {
  var parameter = Number(document.getElementById("x!").value);
  var factorial = 1;
  for (let i = 1; i <= parameter; i++) {
    factorial *= i;
  }
  document.getElementById("showGiaiThua").textContent = factorial;
};

//bai4
document.getElementById("btnShowDiv").onclick = function () {
  var content = "";
  var soChan = "<div style=background-color:red>Số lẻ</div>";
  var soLe = "<div style=background-color:blue>Số chẵn</div>";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += soChan;
    } else {
      content += soLe;
    }
  }
  document.getElementById("showDiv").innerHTML = content;
};
