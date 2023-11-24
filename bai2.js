function tinhTB() {
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soThu4 = document.getElementById("soThu4").value * 1;
    var soThu5 = document.getElementById("soThu5").value * 1;
    var soTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  
    var message = `<h1>Số trung bình: ${soTB}</h1>`;
    document.getElementById("result2").innerHTML = message;
  }