

var apiOrder = new CallApiOrder();
var Order = [];
function getListOrder() {
    var promise = apiOrder.fectchData();
    promise
        .then(function (result) {
            Order = result.data;
            renderOrder(Order);
            // console.log(Order)
        })
        .catch(function (error) {
            console.log(error);
        })
}
getListOrder();
function renderOrder(data) {
    var tableOrder = document.querySelector('.content__Donhang');
    var s = '';
    for (var i = 0; i < data.length; i++) {
        var tempOrder = data[i];
        if (tempOrder.email === user.email) {
            s += `<div class="billContent__Donhang">
            <div>${tempOrder.nameproduct}</div>
            <div>${tempOrder.totalAmount}${'.000'}</div>
            <div>${tempOrder.date}</div>
            <div>${tempOrder.trangthai}</div>
            </div>`
        }

    }
    tableOrder.innerHTML = s;
}

