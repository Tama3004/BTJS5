function kquabai1(){
    var diemChuan = document.getElementById('diemChuan').value*1;
    var khuVuc = document.getElementById("khuVuc").value*1;
    var doiTuong = document.getElementById("doiTuong").value*1;
    var diemMon1 = document.getElementById("diemMon1").value*1;
    var diemMon2 = document.getElementById('diemMon2').value*1;
    var diemMon3 = document.getElementById('diemMon3').value*1;
    var tongDiem = 0;
    tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    if(tongDiem < diemChuan){
        document.getElementById('kquaB1').innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem}`
    }
    else{
        document.getElementById('kquaB1').innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem}`
    }
}

function kquabai2(){
    var Ten = document.getElementById('Ten').value;
    var soKw = document.getElementById('soKw').value*1;
    var tienDien = 0;
    if(soKw > 0 && soKw < 50){
        tienDien = 500;
    }
    else if(soKw > 50 && soKw <= 100){
        tienDien = 50*500 + (soKw - 50)*650;
    }
    else if(soKw > 100 && soKw <= 150){
        tienDien = 50*500 + 50*650 + (soKw - 100) * 850;
    }
    else{
        tienDien = 50*500 + 50*650 + 50 * 850 + (soKw - 150) * 1100;
    }
    document.getElementById('kquaB2').innerHTML = `Họ và Tên: ${Ten}, Tiền điện: ${tienDien}`
}

function kquabai3(){
    var Ten2 = document.getElementById('Ten2').value;
    var thuNhap = document.getElementById('thuNhap').value*1;
    var soNguoi = document.getElementById('soNguoi').value*1;
    var thunhapCT = thuNhap - 4e6 - soNguoi * 1600000
    var tienThue = 0;
    if(thunhapCT <= 60e6){
        tienThue = thunhapCT * 0.05;
    }
    else if(thunhapCT <= 120e6){
        tienThue = thunhapCT * 0.1;
    }
    else if(thunhapCT <= 210e6){
        tienThue = thunhapCT * 0.15;
    }
    else if(thunhapCT <= 384e6){
        tienThue = thunhapCT * 0.2;
    }
    else if(thunhapCT <= 624e6){
        tienThue = thunhapCT * 0.25;
    }
    else if(thunhapCT <= 960e6){
        tienThue = thunhapCT * 0.3;
    }
    else{
        tienThue = thunhapCT * 0.35;
    }
    document.getElementById('kquaB3').innerHTML = `Họ và Tên: ${Ten2}, Tiền điện: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tienThue)}`
}

function showSelectedOption() {
    var selectElement = document.getElementById("KH").value;

    var anSoketnoi = document.getElementById("doanhnghiep-ketnoi");
    anSoketnoi.style.display = "none";

    var hienSoketnoi = document.getElementById(selectElement + "-ketnoi");

    if (hienSoketnoi) {
    hienSoketnoi.style.display = "block";
    }
}

function tinhPhidichvucoban(ketnoi) {
    var giaTien;
    if (ketnoi > "0" && ketnoi <= "10") {
    giaTien = 75;
    } else {
      var inputKetnoi = document.getElementById("soketnoi").value * 1;
      giaTien = 75 + (inputKetnoi - 10) * 5;
    }
    return giaTien;
}
function ketquaTiencap() {
    var inputKH = document.getElementById("KH").value;
    var inputKetnoi = document.getElementById("soketnoi").value * 1;
    var inputMaKH = document.getElementById("maKH").value;
    var inputKenhCC = document.getElementById("kenhCC").value * 1;
    var giaKetnoi = tinhPhidichvucoban(inputKetnoi);

    var tienCapDan = 25 + 7.5 * inputKenhCC;
    var tienCapdoanhnghiep = 15 + giaKetnoi + 50 * inputKenhCC;

    var tiencap;
    if (inputKH == "") {
    alert("Hay chon loai khach hang");
    } else if (inputKH == "nhadan") {
    tiencap = tienCapDan;
    } else {
    tiencap = tienCapdoanhnghiep;
    }
    document.getElementById("kquaB4").innerHTML = `Ma KH: ${inputMaKH} <br> Tien cap: ${new Intl.NumberFormat("de-DE",{ style: "currency", currency: "USD" }).format(tiencap)}`;
}