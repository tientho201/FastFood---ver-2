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
            }
        }

        var headerSearch = document.querySelector('.header__search-history')
        if (!filter) {
            headerSearch.style.display = 'none'
        } else {
            headerSearch.style.display = 'block'
        }
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
