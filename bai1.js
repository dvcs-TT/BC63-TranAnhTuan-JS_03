const luongNgay = 100000;
document.getElementById("luongNgay").value = luongNgay;
function tinhLuong() {
  var luongNgay = document.getElementById("luongNgay").value * 1;
  var ngayLam = document.getElementById("ngayLam").value * 1;
  var luong = ngayLam * luongNgay;

  var message = `<h1>Tiền lương: ${luong.toLocaleString("vi-VN")}</h1>`;
  document.getElementById("result1").innerHTML = message;
}
