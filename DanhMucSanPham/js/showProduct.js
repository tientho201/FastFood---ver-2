var apiProduct = new CallApiProduct();
var ProductArray = [];
function getlistProduct() {
    var promise = apiProduct.fetchData();
    promise
        .then(function (result) {
            ProductArray = result.data;
            renderProduct(ProductArray);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getlistProduct();

function renderProduct(data) {
    var showUuDai = document.querySelector('.product-list__UuDai');
    var showMonMoi = document.querySelector('.product-list__MonMoi');
    var showCombo1Nguoi = document.querySelector('.product-list__Combo1Nguoi');
    var showComboNhom = document.querySelector('.product-list__ComboNhom');
    var showGaRanGaQuay = document.querySelector('.product-list__GaRanGaQuay');
    var showBurgerComMiY = document.querySelector('.product-list__BurgerComMiY ');
    var showThucAnNhe = document.querySelector('.product-list__ThucAnNhe');
    var showThucUong_TrangMieng = document.querySelector('.product-list__ThucUong_TrangMieng');
    var uudai = "";
    var monmoi = "";
    var combo1nguoi = "";
    var combonhom = "";
    var garangaquay = "";
    var burgercommiy = "";
    var thucannhe = "";
    var thucuongtrangmieng = "";
    for (var i = 0; i < data.length; i++) {
        var ProductTemporary = data[i];
        if (ProductTemporary.item === "UuDai") {
            uudai +=
                `  <div class="product-item" >
            <a class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "MonMoi") {
            monmoi +=
                `  <div class="product-item">
            <a class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "Combo1Nguoi") {
            combo1nguoi +=
                `  <div class="product-item">
            <a  class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "ComboNhom") {
            combonhom +=
                `  <div class="product-item" >
            <a class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "GaRanGaQuay") {
            garangaquay +=
                `  <div class="product-item">
            <a  class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "BurgerComMiY") {
            burgercommiy +=
                `  <div class="product-item">
            <a class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "ThucAnNhe") {
            thucannhe +=
                `  <div class="product-item" >
            <a  class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (ProductTemporary.item === "ThucUong_TrangMieng") {
            thucuongtrangmieng +=
                `  <div class="product-item" >
            <a  class="product-link__sanpham" onclick = "detailProduct(${ProductTemporary.id})">
                <div>
                    <div class="product-img">
                        <img src="${ProductTemporary.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${ProductTemporary.name}</h2>
                            <h2 class="priceProduct">${ProductTemporary.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${ProductTemporary.detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${ProductTemporary.id})"> Thêm </div>
        </div>`
        }
        if (window.location.hash == `#${ProductTemporary.id}`) {
            document.querySelector('.anhchitietsanpham').src = ProductTemporary.img
            document.querySelector('.titleDetail').innerHTML = ProductTemporary.name
            document.querySelector('.pnews').innerHTML = ProductTemporary.gia + "đ"
            document.querySelector('.infoProduct').innerHTML = ProductTemporary.detail
            document.querySelector('.modalProduct').classList.add('open');
            document.querySelector('#nutthem').innerHTML = `<button class="themDetail" onclick = "themDetail(${ProductTemporary.id})">Thêm</button>`
        }
    }
    showUuDai.innerHTML = uudai;
    showMonMoi.innerHTML = monmoi;
    showCombo1Nguoi.innerHTML = combo1nguoi;
    showComboNhom.innerHTML = combonhom;
    showBurgerComMiY.innerHTML = burgercommiy;
    showGaRanGaQuay.innerHTML = garangaquay;
    showThucAnNhe.innerHTML = thucannhe;
    showThucUong_TrangMieng.innerHTML = thucuongtrangmieng;
}
function detailProduct(id) {
    var promise = apiProduct.getProduct(id);
    promise
        .then(function (result) {
            document.querySelector('.anhchitietsanpham').src = result.data.img
            document.querySelector('.titleDetail').innerHTML = result.data.name
            document.querySelector('.pnews').innerHTML = result.data.gia + "đ"
            document.querySelector('.infoProduct').innerHTML = result.data.detail
            document.querySelector('.modalProduct').classList.add('open');
            document.querySelector('#nutthem').innerHTML = `<button class="themDetail" onclick = "themDetail(${result.data.id})">Thêm</button>`
        })
        .catch(function (error) {
            console.log(error);
        });
}