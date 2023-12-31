
// Nút đóng mở 
// Nút đóng mở thêm sản phẩm
const btnDongProduct = document.querySelector('.btnDong-product'); 
btnDongProduct.onclick = function(e){
    document.querySelector('.modal-product ').classList.add('fade')
    document.querySelector('.modal-product ').style.display = 'none'
    document.getElementById('tbIDProduct').innerHTML = ""
    document.getElementById('tbNameProduct').innerHTML = ""
    document.getElementById('tbPriceProduct').innerHTML = ""
    document.getElementById('tbInfoProduct').innerHTML = ""
}
const btnThemProduct = document.querySelector('#btnThemProduct'); 
btnThemProduct.onclick = function(e){
    document.querySelector('.modal-product ').style.display = 'block'
    document.querySelector('.modal-product ').classList.remove('fade')
    document.querySelector('#header-title-product').innerHTML = "Thêm Sản Phẩm"
    document.querySelector('.btnAddUpdateProduct').innerHTML = `<button id="btnAddProduct" type="button" class="btn btn-success" onclick="addProduct()">Thêm Sản Phẩm</button>`
    document.querySelector('.img__product').src = ""
    document.querySelector('.img__product').style.height = '0px'
    document.getElementById('resetFormProduct').reset();
}
const image_product = document.querySelector('.img__product');
const input_link_img = document.querySelector('.link__img');
input_link_img.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        image_product.src = URL.createObjectURL(file);
    }
    document.querySelector('.img__product').style.height = '300px'
})

// Nút đóng mở thêm account
const btnDongAccount = document.querySelector('.btnDong-account'); 
btnDongAccount.onclick = function(e){
    document.querySelector('.modal-account ').classList.add('fade')
    document.querySelector('.modal-account ').style.display = 'none'
    document.getElementById('tbNameAccount').innerHTML = ""
    document.getElementById('tbEmailAccount').innerHTML = ""
    document.getElementById('tbPasswordAccount').innerHTML = ""
    document.getElementById('tbPassword_confirmationAccount').innerHTML = ""
}
const btnThemAccount = document.querySelector('#btnThemAccount'); 
btnThemAccount.onclick = function(e){
    document.querySelector('.modal-account ').style.display = 'block'
    document.querySelector('.modal-account ').classList.remove('fade')
    document.querySelector('#header-title-account').innerHTML = "Thêm Tài Khoản"
    document.querySelector('.btnAddUpdateAccount').innerHTML = ` <button id="btnAddAccount" type="button" class="btn btn-success" onclick="addAccount()">Thêm Tài Khoản</button>`
    document.getElementById('resetFormAccount').reset();

}

// Nút đóng mở thêm thông báo
const btnDongNotify = document.querySelector('.btnDong-notify'); 
btnDongNotify.onclick = function(e){
    document.querySelector('.modal-notify ').classList.add('fade')
    document.querySelector('.modal-notify ').style.display = 'none'
}
const btnThemNotify = document.querySelector('#btnThemNotify'); 
btnThemNotify.onclick = function(e){
    document.querySelector('.modal-notify ').style.display = 'block'
    document.querySelector('.modal-notify ').classList.remove('fade')
    document.querySelector('#header-title-notify').innerHTML = "Thêm Thông Báo"
    document.querySelector('.btnAddUpdateNotify').innerHTML = ` <button id="btnAddNotify" type="button" class="btn btn-success" onclick="addNotify()">Thêm Thông Báo</button>`
    document.getElementById('resetFormNotify').reset();
}
// Nút đóng mở 
// Nút đóng Order
const btnDongOrder = document.querySelector('.btnDong-order'); 
btnDongOrder.onclick = function(e){
    document.querySelector('.modal-order').classList.add('fade')
    document.querySelector('.modal-order').style.display = 'none'
}
// Nút đóng Order

// Menu để mở bảng hợp lí
function open_sanpham(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__giohang').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.giohang').classList.remove('hide')
}
function open_account(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__account').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.account').classList.remove('hide')
}

function open_donhang(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__donhang').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.donhang').classList.remove('hide')
}

function open_productnotify(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__notify').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.productnotify').classList.remove('hide')
}

function open_productThongKe(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__thongke').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.productthongke').classList.remove('hide')
}