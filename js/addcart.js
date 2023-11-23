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



// Hàm ChangeCart không thay đổi, nó chỉ kiểm tra trạng thái của giỏ hàng
// function ChangeCart() {
//     var noCartImgElement = document.querySelector('.header__cart-no-cart--img');
//     var noCartMesElement = document.querySelector('.header__cart-list-no-cart-mes');
//     var cartItemElement = document.querySelector('.header__cart-item');

//     if (noCartImgElement && noCartMesElement && cartItemElement) {
//         if (cart.listProduct.length !== 0) {
//             noCartImgElement.style.display = "none";
//             noCartMesElement.style.display = "none";
//             cartItemElement.style.display = "flex";
//         } else {
//             noCartImgElement.style.display = "flex";
//             noCartMesElement.style.display = "block";
//             cartItemElement.style.display = "none";
//         }
//     }
// }
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
    cart.tinhTotalPrice();
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
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
    cart.tinhTotalPrice();
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);
    renderCartItem(cart);
}
function deleteItemCart(id) {
    var index = cart.listProduct.findIndex((item) => item.product.id == id);
    cart.listProduct.splice(index, 1);
    cart.tinhTotalPrice();
    cart.tinhTotalQuantity();
    setCartLocalStoregrade(cart.listProduct);

    renderCartItem(cart);
}

function setCartLocalStoregrade(data) {
    localStorage.setItem('cart', JSON.stringify(data));
}

function getCartLocalStoregrade() {
    if (localStorage.getItem('cart')) {
        cart.listProduct = JSON.parse(localStorage.getItem('cart'));
        cart.tinhTotalPrice();
        cart.tinhTotalQuantity();
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