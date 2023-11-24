function tinhTong() {
    var conSo = document.getElementById("conSo").value * 1;
    var donVi = conSo % 10;
    var chuc = Math.floor(conSo / 10);
    var tongKySo = donVi + chuc;
  
    var message = `<h1>Tổng 2 ký số: ${tongKySo}</h1>`;
    document.getElementById("result5").innerHTML = message;
  }