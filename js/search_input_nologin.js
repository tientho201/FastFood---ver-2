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
function displayProductInfo(data, filter) {
    var uudai = "", monmoi = "", combo1nguoi = "", combonhom = "", burgercommiy = "", garangaquay = "", thucannhe = "", thucuongtrangmieng = "";
    // Tìm kiếm sản phẩm dựa trên keyword
    var foundProducts = data.filter(function (product) {
        return product.name.toLowerCase().includes(filter);
    });


    if (foundProducts.length > 0) {
        foundProducts.forEach(function (product) {
            switch (product.item) {
                case "UuDai":
                    uudai += generateProductHtml(product);
                    break;
                case "MonMoi":
                    monmoi += generateProductHtml(product);
                    break;
                case "Combo1Nguoi":
                    combo1nguoi += generateProductHtml(product);
                    break;
                case "ComboNhom":
                    combonhom += generateProductHtml(product);
                    break;
                case "GaRanGaQuay":
                    garangaquay += generateProductHtml(product);
                    break;
                case "BurgerComMiY":
                    burgercommiy += generateProductHtml(product);
                    break;
                case "ThucAnNhe":
                    thucannhe += generateProductHtml(product);
                    break;
                case "ThucUong_TrangMieng":
                    thucuongtrangmieng += generateProductHtml(product);
                    break;

            }
        })
    }
    document.querySelector('.product-list__UuDai-search').innerHTML = uudai
    document.querySelector('.product-list__MonMoi-search').innerHTML = monmoi
    document.querySelector('.product-list__Combo1Nguoi-search').innerHTML = combo1nguoi
    document.querySelector('.product-list__ComboNhom-search').innerHTML = combonhom
    document.querySelector('.product-list__GaRanGaQuay-search').innerHTML = garangaquay
    document.querySelector('.product-list__BurgerComMiY-search').innerHTML = burgercommiy
    document.querySelector('.product-list__ThucAnNhe-search').innerHTML = thucannhe
    document.querySelector('.product-list__ThucUong_TrangMieng-search').innerHTML = thucuongtrangmieng
}