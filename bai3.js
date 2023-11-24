function quyDoi() {
  var tyGia = document.getElementById("tyGia").value * 1;
  var soTienUSD = document.getElementById("soTienUSD").value * 1;
  var soTienVND = tyGia * soTienUSD;

  var message = `<h1>Số tiền VND: ${soTienVND.toLocaleString("vi-VN")}</h1>`;
  document.getElementById("result3").innerHTML = message;
}
