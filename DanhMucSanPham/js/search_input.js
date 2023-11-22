// var NameProducts = document.querySelectorAll('.name-product'); 
// var inputSearch = document.querySelector('.header-search__input').value ; 
// const filteredProduct = inputSearch.length > 0 ?  NameProducts.filter(NameProduct => {
//   return  NameProduct.textContent.toLowerCase().includes(inputSearch)
// }) :  NameProducts ; 


var inputSearch = document.querySelector('.header-search__input');
var allProducts = document.getElementsByClassName('product-item');

// Sử dụng sự kiện 'input' để theo dõi các thay đổi trong ô input tìm kiếm
inputSearch.addEventListener('input', function () {
    var filter, product, txtValue , txtValue1 , priceProduct;
    filter = inputSearch.value.toLowerCase();

    var NameProducts = document.getElementsByClassName('name-product');
    var priceProducts = document.getElementsByClassName('priceProduct');
    // Lặp qua danh sách sản phẩm và ẩn/hiển thị tùy thuộc vào kết quả tìm kiếm
    for (var i = 0; i < NameProducts.length; i++) {
        product = NameProducts[i];
        priceProduct = priceProducts[i];
        txtValue1 = priceProduct.textContent || priceProduct.innerText;
        txtValue = product.textContent || product.innerText;
        var productItem = product.closest('.product-item'); // lấy phần tử cha gần nhất có lớp là 'product-item'
        if (filter && (txtValue.toLowerCase().indexOf(filter) > -1  || txtValue1.toLowerCase().indexOf(filter) > -1))  {
            productItem.style.display = 'block'; // hiển thị sản phẩm nếu tìm thấy kết quả
        } else {
            productItem.style.display = 'none'; // ẩn sản phẩm nếu không tìm thấy kết quả
        }
    }
    // Hiển thị tất cả sản phẩm nếu ô input rỗng
    if (!filter) {
        for (var j = 0; j < allProducts.length; j++) {
            allProducts[j].style.display = 'block';
        }
    }
});
