document.querySelector('.bill').style.display = 'none';
var a = cart.listProduct;
var s = '';
cart.listProduct.map(function (value) {
    s += '<div class="spdachon"><div class="chonmua"><input type="checkbox" id="checkbox_' + value.product.id + '" onclick=tinhTongTien()></div>' +
        '<div class="thongtinsp"> <a href="" ><img class="anhsp" src="' + value.product.img + '" alt=""></a><a href="" class="tensp" onclick="themvaogiohang(this)">' + value.product.name + '</a>' +
        '</div><div class="dongia" id="dongia_' + value.product.id + '">' + value.product.gia + '</div>' +
        ' <div class="soluong"><button class="giatri" onclick="giamsl(' + value.product.id + ')">-</button>' +
        '<input type="text" value=' + value.quantity + '  id="nhapgiatri_' + value.product.id + '"><button class="giatri" onclick="tangsl(' + value.product.id + ')">+' +
        '</button></div>' +
        ' <div class="thaotac"><button value="xoa" onclick="xoasp(' + value.product.id + ')">Xóa</button></div></div> ';
});
document.querySelector('.content').innerHTML = s;

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