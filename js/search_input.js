var apiProduct = new CallApiProduct();
var Product = [];
function getListProduct() {
    var promise = apiProduct.fetchData();
    promise
        .then(function (result) {
            Product = result.data;
            RenderProduct(Product);
        })
        .catch(function (error) {
            console.log(error)
        })
}
getListProduct();
function RenderProduct(data) {
    var listProductTable = document.querySelector('.header__search-history-list');
    var inputSearch = document.querySelector('.header-search__input');
    var headerSearch = document.querySelector('.header__search-history')

    inputSearch.addEventListener("input", function (e) {
        var filter, temp, txtValue;
        filter = inputSearch.value.toLowerCase();
        var chuoi = "";

        for (var i = 0; i < data.length; i++) {
            temp = data[i];
            txtValue = temp.name;

            if (filter && txtValue.toLowerCase().indexOf(filter) > -1) {
                chuoi += `<li class="header__search-history-item">
                    <a style="cursor: pointer;" onclick="detailProduct(${temp.id})" >${temp.name}</a>
                </li>`;
                // Thêm sản phẩm vào từng danh mục tương ứng

            }
        }
        headerSearch.style.display = filter ? 'block' : 'none';
        // Hide or show search history items based on the filter
        var searchHistoryItems = document.querySelectorAll('.header__search-history-item');
        for (var j = 0; j < searchHistoryItems.length; j++) {
            var currentItem = searchHistoryItems[j];
            var currentItemText = currentItem.querySelector('a').innerText.toLowerCase();

            if (filter && currentItemText.indexOf(filter) > -1) {
                currentItem.style.display = 'block';
            } else {
                currentItem.style.display = 'none';
            }
        }

        listProductTable.innerHTML = chuoi;
    });
}


function generateProductHtml(product) {
    return `
        <div class="product-item" >
            <a class="product-link__sanpham" onclick="detailProduct(${product.id})">
                <div>
                    <div class="product-img">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="product-info">
                        <div class="product-info__title">
                            <h2 class="name-product">${product.name}</h2>
                            <h2 class="priceProduct">${product.gia}đ</h2>
                        </div>
                        <div class="product-info__detail">${product.detail}</div>
                    </div>
                </div>
            </a>
            <div class="product-buy" onclick="addCartItem(${product.id})"> Thêm </div>
        </div>`;
}

document.querySelector('.header-search__btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#DanhMucSanPham').style.display = 'block'
    document.querySelector('#trangchu').style.display = 'none'
    document.querySelector('.navigation-nav__link-home').classList.remove('active');
    document.querySelector('.navigation-nav__link--no-select').classList.add('active')
    document.querySelector('#DonHang').style.display = 'none'
    document.querySelector('#ThongTinCaNhan').style.display = 'none'
    document.querySelector('#GioHang').style.display = 'none'
    document.querySelector('.header__search-history').style.display = 'none'
    document.querySelector('#sanpham').style.display = 'none'
    document.querySelector('#sanpham-search').style.display = 'block'
    document.querySelector('#breadcrumb').style.display = 'none'
    var promise = apiProduct.fetchData();
    promise
        .then(function (result) {
            Product = result.data;
            var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
            displayProductInfo(Product, searchKeyword);
        })
        .catch(function (error) {
            console.log(error)
        })
})
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
function displayProductInfo(data, filter) {
    var uudai = "", monmoi = "", combo1nguoi = "", combonhom = "", burgercommiy = "", garangaquay = "", thucannhe = "", thucuongtrangmieng = "";
    // Tìm kiếm sản phẩm dựa trên keyword
    var foundProducts = data.filter(function (product) {
        return product.name.toLowerCase().includes(filter);
    });
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
    var arrayUuDai = [];
    var arrayMonMoi = [];
    var arrayCombo1Nguoi = [];
    var arrayComboNhom = [];
    var arrayGaRanGaQuay = [];
    var arrayBurgerComMiY = [];
    var arrayThucAnNhe = [];
    var arrayThucUongTrangMieng = [];
    var z = 0, x = 0, c = 0, v = 0, b = 0, n = 0, m = 0, a = 0;
    if (foundProducts.length > 0) {
        for (var i = 0; i < foundProducts.length; i++) {
            var ProductTemporary = foundProducts[i];
            if (ProductTemporary.item === "UuDai") {
                arrayUuDai[z] = foundProducts[i];
                z++;
            }
            if (ProductTemporary.item === "MonMoi") {
                arrayMonMoi[x] = foundProducts[i];
                x++;
            }
            if (ProductTemporary.item === "Combo1Nguoi") {
                arrayCombo1Nguoi[c] = foundProducts[i];
                c++;
            }
            if (ProductTemporary.item === "ComboNhom") {
                arrayComboNhom[v] = foundProducts[i];
                v++;
            }
            if (ProductTemporary.item === "GaRanGaQuay") {
                arrayGaRanGaQuay[b] = foundProducts[i];
                b++;
            }
            if (ProductTemporary.item === "BurgerComMiY") {
                arrayBurgerComMiY[n] = foundProducts[i];
                n++;
            }
            if (ProductTemporary.item === "ThucAnNhe") {
                arrayThucAnNhe[m] = foundProducts[i];
                m++;
            }
            if (ProductTemporary.item === "ThucUong_TrangMieng") {
                arrayThucUongTrangMieng[a] = foundProducts[i];
                a++;
            }

        }
        for (var i = 0; i < arrayUuDai.length; i++) {
            if (i >= begin1 && i <= end1) {
                uudai += generateProductHtml(arrayUuDai[i])
            }
        }
        for (var i = 0; i < arrayMonMoi.length; i++) {
            if (i >= begin2 && i <= end2) {
                monmoi += generateProductHtml(arrayMonMoi[i])
            }

        }
        for (var i = 0; i < arrayCombo1Nguoi.length; i++) {
            if (i >= begin3 && i <= end3) {
                combo1nguoi += generateProductHtml(arrayCombo1Nguoi[i])
            }

        }
        for (var i = 0; i < arrayComboNhom.length; i++) {
            if (i >= begin4 && i <= end4) {
                combonhom += generateProductHtml(arrayComboNhom[i])
            }

        }
        for (var i = 0; i < arrayBurgerComMiY.length; i++) {
            if (i >= begin5 && i <= end5) {
                burgercommiy += generateProductHtml(arrayBurgerComMiY[i])
            }
        }
        for (var i = 0; i < arrayGaRanGaQuay.length; i++) {
            if (i >= begin6 && i <= end6) {
                garangaquay += generateProductHtml(arrayGaRanGaQuay[i])
            }

        }
        for (var i = 0; i < arrayThucAnNhe.length; i++) {
            if (i >= begin7 && i <= end7) {
                thucannhe += generateProductHtml(arrayThucAnNhe[i])
            }

        }
        for (var i = 0; i < arrayThucUongTrangMieng.length; i++) {
            if (i >= begin8 && i <= end8) {
                thucuongtrangmieng += generateProductHtml(arrayThucUongTrangMieng[i])
            }

        }
    }
    document.querySelector('.product-list__UuDai-search').innerHTML = uudai
    document.querySelector('.product-list__MonMoi-search').innerHTML = monmoi
    document.querySelector('.product-list__Combo1Nguoi-search').innerHTML = combo1nguoi
    document.querySelector('.product-list__ComboNhom-search').innerHTML = combonhom
    document.querySelector('.product-list__GaRanGaQuay-search').innerHTML = garangaquay
    document.querySelector('.product-list__BurgerComMiY-search').innerHTML = burgercommiy
    document.querySelector('.product-list__ThucAnNhe-search').innerHTML = thucannhe
    document.querySelector('.product-list__ThucUong_TrangMieng-search').innerHTML = thucuongtrangmieng
    listpageUuDai_search(arrayUuDai)
    listpageMonMoi_search(arrayMonMoi)
    listpageCombo1Nguoi_search(arrayCombo1Nguoi)
    listpageComboNhom_search(arrayComboNhom)
    listpageGaRanGaQuay_search(arrayGaRanGaQuay)
    listpageBurgerComMiY_search(arrayBurgerComMiY)
    listpageThucAnNhe_search(arrayThucAnNhe)
    listpageThucUongTrangMieng_search(arrayThucUongTrangMieng)

}
function listpageUuDai_search(array) {
    var perpage = Math.ceil(array.length / limit1);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage1) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += `<input type="button" class="sotrang ${activeClass}" value="${i}" onclick="changepage1_search(${i})"></input>`

    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangUuDai-search').innerHTML = buttonsHTML;
    }
}
function listpageMonMoi_search(array) {
    var perpage = Math.ceil(array.length / limit2);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage2) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage2_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangMonMoi-search').innerHTML = buttonsHTML;
    }
}
function listpageCombo1Nguoi_search(array) {
    var perpage = Math.ceil(array.length / limit3);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage3) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage3_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangCombo1Nguoi-search').innerHTML = buttonsHTML;
    }
}
function listpageComboNhom_search(array) {
    var perpage = Math.ceil(array.length / limit4);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage4) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage4_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangComboNhom-search').innerHTML = buttonsHTML;
    }
}
function listpageBurgerComMiY_search(array) {
    var perpage = Math.ceil(array.length / limit6);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage6) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage6_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangBurgerComMiY-search').innerHTML = buttonsHTML;
    }
}
function listpageGaRanGaQuay_search(array) {
    var perpage = Math.ceil(array.length / limit5);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage5) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage5_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangGaRanGaQuay-search').innerHTML = buttonsHTML;
    }
}
function listpageThucAnNhe_search(array) {
    var perpage = Math.ceil(array.length / limit7);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage7) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage7_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangThucAnNhe-search').innerHTML = buttonsHTML;
    }
}
function listpageThucUongTrangMieng_search(array) {
    var perpage = Math.ceil(array.length / limit8);
    var buttonsHTML = '';

    for (var i = 1; i <= perpage; i++) {
        var activeClass;
        if (i === thispage8) {
            activeClass = 'active-item';

        } else {
            activeClass = '';
        }
        buttonsHTML += '<input type="button" class="sotrang ' + activeClass + '" value="' + i + '" onclick="changepage8_search(' + i + ')"></input>';
    }
    if (perpage != 1) {
        document.querySelector('.chuyentrangThucUongTrangMieng-search').innerHTML = buttonsHTML;
    }
}

function changepage1_search(i) {
    thispage1 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage2_search(i) {
    thispage2 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage3_search(i) {
    thispage3 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage4_search(i) {
    thispage4 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage5_search(i) {
    thispage5 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage6_search(i) {
    thispage6 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage7_search(i) {
    thispage7 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
function changepage8_search(i) {
    thispage8 = i;
    var searchKeyword = document.querySelector('.header-search__input').value.toLowerCase();
    displayProductInfo(Product, searchKeyword);
}
