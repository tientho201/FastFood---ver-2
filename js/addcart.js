function ListProduct() {
    this.listProduct = [];

    this.getProductByID = function (id) {
        return this.listProduct.find((product) => product.id == id);
    };
}
function Cart() {
    this.listProduct = [];
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.tinhTotalPrice = function () {
        this.totalPrice = 0;
        this.listProduct.map((item) => {
            if (item.quantity <= 0) {
                item.quantity = 0;
            }
            this.totalPrice += item.product.price * item.quantity;
        });
    };
    this.tinhTotalQuantity = function () {
        this.totalQuantity = 0;
        var newProduct = [...this.listProduct];
        newProduct.map((item) => {
            if (item.quantity <= 0) {
                var index = this.listProduct.findIndex(
                    (item2) => item2.product.id == item.product.id
                );
                this.listProduct.splice(index, 1);
                return;
            }
            this.totalQuantity += item.quantity;
        });
    };
    this.updateList = function (newA) {
        this.listProduct = newA;
    }
}

var apiProduct = new CallApiProduct();
var products = new ListProduct();
var cart = new Cart();


function getlistProduct() {
    var promise = apiProduct.fetchData()
    promise
        .then(function (result) {
            products.listProduct = result.data;

        })
}
getlistProduct();

function renderCartItem(product) {
    var noCartImgElement = document.querySelector('.header__cart-no-cart--img');
    var noCartMesElement = document.querySelector('.header__cart-list-no-cart-mes');
    var content = "";
    product.listProduct.map((item) => {
        var itemString = `
        <li class="header__cart-item">
            <img src="${item.product.img}" alt="" class="header__cart-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">${item.product.name}</h5>
                    <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">${item.product.gia}đ </span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <div>
                        <a class= "text-danger" style = "font-size: 20px" onclick = "changeQty(${item.product.id},-1)"> - </a>
                        <span class="qty" style="margin : 0 5px">${item.quantity}x</span>
                        <a class="text-success" style="font-size : 20px" onclick="changeQty(${item.product.id
            },1)"> + </a>
                    </div>
                    <span class="header__cart-item-remove" onclick="deleteItemCart(${item.product.id})">Xóa</span>
                </div>
            </div>
        </li>
        `
        content += itemString;
    })
    if (content == "") {
        noCartImgElement.style.display = "flex";
        noCartMesElement.style.display = "block";

        document.querySelector('.header__cart-list-item').innerHTML = content;
    } else {
        document.querySelector('.header__cart-list-item').innerHTML = content;
        noCartImgElement.style.display = "none";
        noCartMesElement.style.display = "none";

    }

}



function themDetail(id, qty = 1) {
    var product = products.getProductByID(id);
    var cartItem = { product, quantity: qty };
    if (!cart.listProduct.find((item) => item.product.id == id)) {
        cart.listProduct.push(cartItem);
        notiAlert("center" , "success" , "Thêm thành công" , 1500)
    } else {
        var index = cart.listProduct.findIndex((item) => item.product.id == id);
        cart.listProduct[index].quantity += qty;
        notiAlert("center" , "success" , "Thêm thành công" , 1500)
    }
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
    updateUI(cart.listProduct)
    renderCartItem(cart);
}


function addCartItem(id, qty = 1) {
    var product = products.getProductByID(id);
    var cartItem = { product, quantity: qty };
    if (!cart.listProduct.find((item) => item.product.id == id)) {
        cart.listProduct.push(cartItem);
        notiAlert( "center","success" , "Thêm thành công" , 1500)
    } else {
        var index = cart.listProduct.findIndex((item) => item.product.id == id);
        cart.listProduct[index].quantity += qty;
        notiAlert( "center","success" , "Thêm thành công" , 1500)
    }
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
    updateUI(cart.listProduct)
    renderCartItem(cart);
}
function deleteItemCart(id) {
    var index = cart.listProduct.findIndex((item) => item.product.id == id);
    cart.listProduct.splice(index, 1);
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
    updateUI(cart.listProduct)
    renderCartItem(cart);
}
function changeQty(id, n) {
    var index = cart.listProduct.findIndex((item) => item.product.id == id);
    cart.listProduct[index].quantity += n;
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
    updateUI(cart.listProduct)
    renderCartItem(cart);
}
function setCartLocalStoregrade(data) {
    localStorage.setItem('cart', JSON.stringify(data));
}

function getCartLocalStoregrade() {
    if (localStorage.getItem('cart')) {
        cart.listProduct = JSON.parse(localStorage.getItem('cart'));
        updateUI(cart.listProduct)
        renderCartItem(cart);
    }
}
getCartLocalStoregrade();

function notiAlert(position, icon, title, timer) {
    Swal.fire({
        position,
        icon,
        title,
        showConfirmButton: false,
        timer,
    });
}

document.querySelector('.bill').style.display = 'none';
var s = '';
function updateUI(a) {
    var s = '';
    a.map(function (value) {
        s += '<div class="spdachon"><div class="chonmua"><input type="checkbox" id="checkbox_' + value.product.id + '" onclick=tinhTongTien()></div>' +
        '<div class="thongtinsp"> <a href="" ><img class="anhsp" src="' + value.product.img + '" alt=""></a><a href="" class="tensp" onclick="themvaogiohang(this)">' + value.product.name + '</a>' +
        '</div><div class="dongia" id="dongia_' + value.product.id + '">' + value.product.gia + '</div>' +
        ' <div class="soluong"><button class="giatri" onclick="giamsl(' + value.product.id + ')">-</button>' +
        '<input type="text" value=' + value.quantity + '  id="nhapgiatri_' + value.product.id + '"><button class="giatri" onclick="tangsl(' + value.product.id + ')">+' +
        '</button></div>' +
        ' <div class="thaotac"><button value="xoa" onclick="xoasp(' + value.product.id + ')">Xóa</button></div></div> ';
    });
    document.querySelector('.content').innerHTML = s;
}
//Nút tăng giảm sp
function render(productid, amount) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    amountElement.value = amount;
    var productIndex = cart.listProduct.findIndex(item => item.product.id === productid);

    // Nếu sản phẩm được tìm thấy, cập nhật giá trị quantity
    if (productIndex !== -1) {
        cart.listProduct[productIndex].quantity = amount;
    }

}
function nhapgiatri(productid) {
    var pattern = /^[1-9]\d*$/;
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    var amount = amountElement.value;
   
    if(!pattern.test(amount)){
        amount='1';
    }
        
   render(productid, amount);
    tinhTongTien();
}
function tangsl(productid) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    var amount = parseInt(amountElement.value);
    amount++;
    render(productid, amount);
    tinhTongTien();
}

function giamsl(productid) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    var amount = parseInt(amountElement.value);
    if (amount > 1) {
        amount--;
    }
    render(productid, amount);
    tinhTongTien();
}

var chonAllCheckbox = document.querySelector('.chonall');

chonAllCheckbox.addEventListener('change', function () {
    var isChecked = chonAllCheckbox.checked;

    a.forEach(function (value) {
        var checkboxElement = document.getElementById('checkbox_' + value.product.id);
        if (checkboxElement) {
            checkboxElement.checked = isChecked;
        }
    });

    // Recalculate the total when the "Chọn tất cả" checkbox changes
    tinhTongTien();
});

// Function to calculate total
function tinhTongTien() {
    var tongTien = 0;

    // Lặp qua danh sách sản phẩm để kiểm tra checkbox
    a.forEach(function (value) {
        // Lấy id của checkbox
        var checkboxId = 'checkbox_' + value.product.id;

        // Kiểm tra xem checkbox có được chọn không
        var checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            // Nếu được chọn, thì thêm giá tiền của sản phẩm vào tổng
            var dongia_productid = document.getElementById('dongia_' + value.product.id).innerHTML;
            var amountElement = document.getElementById('nhapgiatri_' + value.product.id);
            var amount = parseInt(amountElement.value);
            var gia_sanpham = parseInt(dongia_productid) * amount;
            tongTien += gia_sanpham;
        }
    });

    // Hiển thị tổng số tiền
    document.querySelector('.sotien').innerHTML = (tongTien > 0 ? tongTien : -tongTien) + '.000 đ';
    return tongTien > 0 ? tongTien : -tongTien ;

}

function xoasp(productid) {
    for (var i = 0; i < a.length; i++) {
        if (productid === a[i].product.id) {
            // Kiểm tra xem checkbox có tồn tại hay không
            var checkbox = document.getElementById('checkbox_' + productid);

            // Nếu checkbox tồn tại và đã được chọn
            if (checkbox && checkbox.checked) {
                // Trừ giá trị sản phẩm được xóa khỏi tổng tiền
                var giaSanPhamXoa = a[i].product.gia;
                var soLuongSanPhamXoa = a[i].quantity;
                cart.totalPrice -= giaSanPhamXoa * soLuongSanPhamXoa;
            }

            // Xóa sản phẩm khỏi mảng
            a.splice(i, 1);
            break; // Exit the loop after removing the element
        }
    }
    // Update lại tổng tiền và hiển thị
    tinhTongTien();

    // Uncheck the checkbox associated with the deleted product
    var checkbox = document.getElementById('checkbox_' + productid);
    if (checkbox) {
        checkbox.checked = false;
    }

    // Get the parent div of the delete button
    var deleteButtonParentDiv = document.querySelector('#checkbox_' + productid).closest('.spdachon');

    // Remove the corresponding HTML element
    if (deleteButtonParentDiv) {
        deleteButtonParentDiv.parentNode.removeChild(deleteButtonParentDiv);
    }

}

function deleteall() {
    // Xóa toàn bộ mảng a
    a = [];

    // Uncheck all checkboxes
    a.forEach(function (value) {
        var checkboxElement = document.getElementById('checkbox_' + value.productid);
        if (checkboxElement) {
            checkboxElement.checked = false;
        }
    });

    // Xóa toàn bộ nội dung trong giao diện
    document.querySelector('.content').innerHTML = '';

    // Cập nhật tổng tiền
    tinhTongTien();

    var chonAllCheckbox = document.querySelector('.chonall');
    if (chonAllCheckbox) {
        chonAllCheckbox.checked = false;
    }

}


function muahang() {
    var temp = []
    document.querySelector('.giohang').style.display = 'none';
    document.querySelector('.bill').style.display = 'block';

    var selectedProductsHTML = '';
    var userInfoHTML = '';

    for (var i = 0; i < a.length; i++) {
        var checkboxId = 'checkbox_' + a[i].product.id;
        var checkbox = document.getElementById(checkboxId);

        if (checkbox && checkbox.checked) {

            var soluong = document.getElementById('nhapgiatri_' + a[i].product.id).value;
            selectedProductsHTML += `
                <tr>
                    <td><img src="${a[i].product.img}" alt="" class="anhbill"></td>
                    <td class="tenspbill">${a[i].product.name}</td>
                    <td class="soluongspbill">${soluong}</td>
                    <td class="giatienspbill">${a[i].product.gia} đ</td>
                </tr>`;
        }
    }

    userInfoHTML = `
        <tr>                   
            <th>${user.fullname}</th>
            <th class="nhapSDT" ><input type="text" name="nhapSĐT" id="nhapSĐT" class="NhapSDT" placeholder="Nhập số điện thoại"></th>
            <th class="nhapAddress" colspan="2"><input type="text" name="nhapaddress" id="nhapaddress" class="NhapAddress" placeholder="Nhập địa chỉ"></th>
            <th  style="color: #928f8f;">Chờ xác nhận</th>
        </tr>`;
    document.querySelector('.thongtinnguoimua').innerHTML = userInfoHTML;
    document.querySelector('.spchonmua').innerHTML = selectedProductsHTML;
    document.querySelector('.tienthanhtoan').innerHTML = tinhTongTien() + ".000 đ";
}


function quaylaigiohang() {
    document.querySelector('.giohang').style.display = 'block';
    document.querySelector('.bill').style.display = 'none';
}

var apiOrder = new CallApiOrder();
var Order = [];
function getListOrder() {
    var promise = apiOrder.fectchData();
    promise
        .then(function (result) {
            Order = result.data;

        })
        .catch(function (error) {
            console.log(error);
        });
}
var isSubmitting = false;
document.querySelector('.thanhtoan').addEventListener('click', function (e) {
    e.preventDefault();
       // Kiểm tra nếu đang trong quá trình submit
       if (isSubmitting) {
        return;
    }


    var today = new Date();
    var phone = document.querySelector('#nhapSĐT').value
    var address = document.querySelector('#nhapaddress').value
    var isValid = true;
    isValid &= ktRong(address, 'chuaNhapAddress', "Vui lòng không được bỏ trống");
    isValid &= kiemTraSo(phone, 'chuaNhapSDT', "Vui lòng nhập đúng định dạng" , "Vui lòng không được bỏ trống");
        var orderData = {
            namebuy: user.fullname,
            nameproduct: a.map(item =>  item.product.name + "   x" + item.quantity),
            totalAmount: tinhTongTien(),
            trangthai: "Chờ xác nhận",
            phone: phone,
            address: address,
            email : user.email,
            date : today.getDate() +'/'+ (today.getMonth() + 1) +'/' + today.getFullYear() + "  " + today.getHours() + ":" + today.getMinutes() +":" + today.getSeconds()  
        }
    
        if (phone != "" && address != "" && /^\d+$/.test(phone)) {
            var promise = apiOrder.addOrder(orderData);
            isSubmitting = true;
            promise
                .then(function (data) {
                    getListOrder();
                    cart.listProduct = [];
                    setCartLocalStoregrade(cart.listProduct);
                    NotiAlert("success", "Thêm Đơn Hàng", 1500);
                    
                    setTimeout(function () {
                        location.reload();
                    }, 2000);

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    
})

function NotiAlert(icon, title, timer) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: timer,
    });
}