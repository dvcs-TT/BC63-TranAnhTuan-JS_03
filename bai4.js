function tinhToan() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2
  
    var message = `<h1>Diện tích: ${dienTich}; Chu vi: ${chuVi}</h1>`;
    document.getElementById("result4").innerHTML = message;
  }