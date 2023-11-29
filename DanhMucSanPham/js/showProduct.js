var apiProduct = new CallApiProduct();
var ProductArray = [];
function getlistProduct() {
    var promise = apiProduct.fetchData();
    promise
        .then(function (result) {
            ProductArray = result.data;
            // document.querySelector('.navigation-nav__link--no-select').onclick = (e) => {
            // renderProduct(ProductArray)
            // }
            renderProduct(ProductArray);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getlistProduct();


var thispage1 = 1;
var limit1 = 4;
var thispage2 = 1;
var limit2 = 4;
var thispage3 = 1;
var limit3 = 4;
var thispage4 = 1;
var limit4 = 4;
var thispage5 = 1;
var limit5 = 4;
var thispage6 = 1;
var limit6 = 4;
var thispage7 = 1;
var limit7 = 4;
var thispage8 = 1;
var limit8 = 4;

function renderProduct(data) {
    var begin1 = limit1 * (thispage1 - 1);
    var end1 = limit1 * thispage1 - 1;
    var begin2 = limit2 * (thispage2 - 1);
    var end2 = limit2 * thispage2 - 1;
    var begin3 = limit3 * (thispage3 - 1);
    var end3 = limit3 * thispage3 - 1;
    var begin4 = limit4 * (thispage4 - 1);
    var end4 = limit4 * thispage4 - 1;
    var begin5 = limit5 * (thispage5 - 1);
    var end5 = limit5 * thispage5 - 1;
    var begin6 = limit6 * (thispage6 - 1);
    var end6 = limit6 * thispage6 - 1;
    var begin7 = limit7 * (thispage7 - 1);
    var end7 = limit7 * thispage7 - 1;
    var begin8 = limit8 * (thispage8 - 1);
    var end8 = limit8 * thispage8 - 1;
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
    var arrayUuDai = [];
    var arrayMonMoi = [];
    var arrayCombo1Nguoi = [];
    var arrayComboNhom = [];
    var arrayGaRanGaQuay = [];
    var arrayBurgerComMiY = [];
    var arrayThucAnNhe = [];
    var arrayThucUongTrangMieng = [];
    var z = 0  , x = 0 , c = 0 , v = 0 , b = 0 , n = 0 ,m = 0 , a = 0 ;
    for (var i = 0; i < data.length; i++) {
        var ProductTemporary = data[i];
        if (ProductTemporary.item === "UuDai") {
            arrayUuDai[z] = data[i] ; 
            z++; 
        }
        if (ProductTemporary.item === "MonMoi") {
            arrayMonMoi[x] = data[i] ; 
            x++;   
        }
        if (ProductTemporary.item === "Combo1Nguoi") {
            arrayCombo1Nguoi[c] = data[i] ; 
            c++;  
        }
        if (ProductTemporary.item === "ComboNhom") {
            arrayComboNhom[v] = data[i] ; 
            v++; 
        }
        if (ProductTemporary.item === "GaRanGaQuay") {
            arrayGaRanGaQuay[b] = data[i] ; 
            b++; 
        }
        if (ProductTemporary.item === "BurgerComMiY") {
            arrayBurgerComMiY[n] = data[i] ; 
            n++; 
        }
        if (ProductTemporary.item === "ThucAnNhe") {
            arrayThucAnNhe[m] = data[i] ; 
            m++;  
        }
        if (ProductTemporary.item === "ThucUong_TrangMieng") {
            arrayThucUongTrangMieng[a] = data[i] ; 
            a++; 
        }
    }
    for(var i = 0 ; i < arrayUuDai.length ; i++){
        if (i >= begin1 && i <= end1) {
            uudai +=
            `  <div class="product-item" >
                <a class="product-link__sanpham" onclick = "detailProduct(${arrayUuDai[i].id})">
            <div>
                <div class="product-img">
                    <img src="${arrayUuDai[i].img}" alt="">
                </div>
                <div class="product-info">
                    <div class="product-info__title">
                        <h2 class="name-product">${arrayUuDai[i].name}</h2>
                        <h2 class="priceProduct">${arrayUuDai[i].gia}đ</h2>
                    </div>
                    <div class="product-info__detail">${arrayUuDai[i].detail}</div>
                </div>
            </div>
        </a>
            <div  class="product-buy" onclick="addCartItem(${arrayUuDai[i].id})"> Thêm </div>
        </div>`
        }
    }
    for(var i = 0 ; i < arrayMonMoi.length ; i++){
        if (i >= begin2 && i <= end2) {
            monmoi +=
            `  <div class="product-item">
                <a class="product-link__sanpham" onclick = "detailProduct(${arrayMonMoi[i].id})">
            <div>
                <div class="product-img">
                    <img src="${arrayMonMoi[i].img}" alt="">
                </div>
                <div class="product-info">
                    <div class="product-info__title">
                        <h2 class="name-product">${arrayMonMoi[i].name}</h2>
                        <h2 class="priceProduct">${arrayMonMoi[i].gia}đ</h2>
                    </div>
                    <div class="product-info__detail">${arrayMonMoi[i].detail}</div>
                </div>
            </div>
        </a>
        <div  class="product-buy" onclick="addCartItem(${arrayMonMoi[i].id})"> Thêm </div>
    </div>`
        }

    }
    for(var i = 0 ; i < arrayCombo1Nguoi.length ; i++){
        if (i >= begin3 && i <= end3) {
            combo1nguoi +=
                `  <div class="product-item">
            <a  class="product-link__sanpham" onclick = "detailProduct(${arrayCombo1Nguoi[i].id})">
                <div>
                    <div class="product-img">
                        <img src="${arrayCombo1Nguoi[i].img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${arrayCombo1Nguoi[i].name}</h2>
                            <h2 class="priceProduct">${arrayCombo1Nguoi[i].gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${arrayCombo1Nguoi[i].detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${arrayCombo1Nguoi[i].id})"> Thêm </div>
        </div>`
        }

    }
    for(var i = 0 ; i < arrayComboNhom.length ; i++){
        if (i >= begin4 && i <= end4) {
            combonhom +=
                `  <div class="product-item" >
            <a class="product-link__sanpham" onclick = "detailProduct(${arrayComboNhom[i].id})">
                <div>
                    <div class="product-img">
                        <img src="${arrayComboNhom[i].img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${arrayComboNhom[i].name}</h2>
                            <h2 class="priceProduct">${arrayComboNhom[i].gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${arrayComboNhom[i].detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${arrayComboNhom[i].id})"> Thêm </div>
        </div>`
        }

    }
    for(var i = 0 ; i < arrayBurgerComMiY.length ; i++){
        if (i >= begin5 && i <= end5) {
            burgercommiy +=
            `  <div class="product-item">
                <a class="product-link__sanpham" onclick = "detailProduct(${arrayBurgerComMiY[i].id})">
            <div>
                <div class="product-img">
                    <img src="${arrayBurgerComMiY[i].img}" alt="">
                </div>
                <div class="product-info">
                    <div class="product-info__title">
                        <h2 class="name-product">${arrayBurgerComMiY[i].name}</h2>
                        <h2 class="priceProduct">${arrayBurgerComMiY[i].gia}đ</h2>
                    </div>
                    <div class="product-info__detail">${arrayBurgerComMiY[i].detail}</div>
                </div>
            </div>
        </a>
        <div  class="product-buy" onclick="addCartItem(${arrayBurgerComMiY[i].id})"> Thêm </div>
    </div>`
            
        }
    }
    for(var i = 0 ; i < arrayGaRanGaQuay.length ; i++){
        if (i >= begin6 && i <= end6) {
            garangaquay +=
                `  <div class="product-item">
            <a  class="product-link__sanpham" onclick = "detailProduct(${arrayGaRanGaQuay[i].id})">
                <div>
                    <div class="product-img">
                        <img src="${arrayGaRanGaQuay[i].img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${arrayGaRanGaQuay[i].name}</h2>
                            <h2 class="priceProduct">${arrayGaRanGaQuay[i].gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${arrayGaRanGaQuay[i].detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${arrayGaRanGaQuay[i].id})"> Thêm </div>
        </div>`
        }

    }
    for(var i = 0 ; i < arrayThucAnNhe.length ; i++){
        if (i >= begin7 && i <= end7) {
            thucannhe +=
            `  <div class="product-item" >
                <a  class="product-link__sanpham" onclick = "detailProduct(${arrayThucAnNhe[i].id})">
            <div>
                <div class="product-img">
                    <img src="${arrayThucAnNhe[i].img}" alt="">
                </div>
                <div class="product-info">
                    <div class="product-info__title">
                        <h2 class="name-product">${arrayThucAnNhe[i].name}</h2>
                        <h2 class="priceProduct">${arrayThucAnNhe[i].gia}đ</h2>
                    </div>
                    <div class="product-info__detail">${arrayThucAnNhe[i].detail}</div>
                </div>
            </div>
        </a>
        <div  class="product-buy" onclick="addCartItem(${arrayThucAnNhe[i].id})"> Thêm </div>
    </div>`
        }

    }
    for(var i = 0 ; i < arrayThucUongTrangMieng.length ; i++){
        if (i >= begin8 && i <= end8) {
            thucuongtrangmieng +=
                ` <div class="product-item" >
            <a  class="product-link__sanpham" onclick = "detailProduct(${arrayThucUongTrangMieng[i].id})">
                <div>
                    <div class="product-img">
                        <img src="${arrayThucUongTrangMieng[i].img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${arrayThucUongTrangMieng[i].name}</h2>
                            <h2 class="priceProduct">${arrayThucUongTrangMieng[i].gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${arrayThucUongTrangMieng[i].detail}</div>
                    </div>
                </div>
            </a>
            <div  class="product-buy" onclick="addCartItem(${arrayThucUongTrangMieng[i].id})"> Thêm </div>
        </div>`
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
    listpageUuDai(arrayUuDai);
    listpageMonMoi(arrayMonMoi);
    listpageCombo1Nguoi(arrayCombo1Nguoi);
    listpageComboNhom(arrayComboNhom);
    listpageBurgerComMiY(arrayBurgerComMiY);
    listpageGaRanGaQuay(arrayGaRanGaQuay);
    listpageThucUongTrangMieng(arrayThucUongTrangMieng);
    listpageThucAnNhe(arrayThucAnNhe);
}
function detailProduct(id) {
    var promise = apiProduct.getProduct(id);
    promise
        .then(function (result) {
            document.querySelector('.header-search__input').value = ""
            document.querySelector('.header__search-history').style.display = "none"
            document.querySelector('#DanhMucSanPham').style.display = 'block'
            document.querySelector('#trangchu').style.display = 'none'
            document.querySelector('.navigation-nav__link-home').classList.remove('active');
            document.querySelector('.navigation-nav__link--no-select').classList.add('active')
            document.querySelector('#DonHang').style.display = 'none'
            document.querySelector('#ThongTinCaNhan').style.display = 'none'
            document.querySelector('#GioHang').style.display = 'none'
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


function listpageUuDai(array) {
    var perpage = Math.ceil(array.length / limit1);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage1(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangUuDai').innerHTML = buttonsHTML;}
}
function listpageMonMoi(array) {
    var perpage = Math.ceil(array.length / limit2);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage2(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangMonMoi').innerHTML = buttonsHTML;}
}
function listpageCombo1Nguoi(array) {
    var perpage = Math.ceil(array.length / limit3);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage3(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangCombo1Nguoi').innerHTML = buttonsHTML;}
}
function listpageComboNhom(array) {
    var perpage = Math.ceil(array.length / limit4);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage4(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangComboNhom').innerHTML = buttonsHTML;}
}
function listpageBurgerComMiY(array) {
    var perpage = Math.ceil(array.length / limit5);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage5(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangBurgerComMiY').innerHTML = buttonsHTML;}
}
function listpageGaRanGaQuay(array) {
    var perpage = Math.ceil(array.length / limit6);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage6(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangGaRanGaQuay').innerHTML = buttonsHTML;}
}
function listpageThucUongTrangMieng(array) {
    var perpage = Math.ceil(array.length / limit8);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage8(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangThucUongTrangMieng').innerHTML = buttonsHTML;}
}
function listpageThucAnNhe(array) {
    var perpage = Math.ceil(array.length / limit7);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        buttonsHTML += '<input type="button" class="sotrang" value="' + i + '" onclick="changepage7(' + i + ')"></input>';
    }
    if(perpage != 1){
    document.querySelector('.chuyentrangThucAnNhe').innerHTML = buttonsHTML;}
}
function changepage1(i) {
    thispage1 = i;
    getlistProduct();
}
function changepage2(i) {
    thispage2 = i;
    getlistProduct();
}
function changepage3(i) {
    thispage3 = i;
    getlistProduct();
}
function changepage4(i) {
    thispage4 = i;
    getlistProduct();
}
function changepage5(i) {
    thispage5 = i;
    getlistProduct();
}
function changepage6(i) {
    thispage6 = i;
    getlistProduct();
}
function changepage7(i) {
    thispage7 = i;
    getlistProduct();
}
function changepage8(i) {
    thispage8 = i;
    getlistProduct();
}

