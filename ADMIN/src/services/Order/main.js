var apiOrder = new CallApiOrder();
var Order = [];
function getListOrder() {
    var promise = apiOrder.fectchData();
    promise
        .then(function (result) {
            Order = result.data;
            renderOrder(Order);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getListOrder();
function renderOrder(data) {
    var tableOrder = document.querySelector('#tableDanhSachOrder');
    var s = '' , percentHuyDonHang = 0  , percentChapNhan = 0 , percentCho = 0 ; 
    var saveMoneyAccept = 0  , saveMoney = 0 ; 
    for (var i = 0; i < data.length; i++) {
        var tempOrder = data[i];
        if (tempOrder.trangthai == 'Hủy Đơn Hàng') {
            s += `
            <tr class="h5" style="font-size:1.4rem ;">
                <td>${tempOrder.namebuy}</td>
                <td>${tempOrder.nameproduct}</td>
                <td>${tempOrder.address}</td>
                <td>${tempOrder.phone}</td>
                <td>${tempOrder.totalAmount}.000đ</td>
                <td>${tempOrder.date}</td>
                <td>${tempOrder.trangthai}</td>
                <td class="action_${tempOrder.id}">
                    Đơn Hàng Đã Hủy
                </td>
            </tr>
            `
            percentHuyDonHang++ ; 
            saveMoney += tempOrder.totalAmount
            console.log(saveMoney)

        }else if (tempOrder.trangthai == 'Chấp Nhận') {
            s += `
            <tr class="h5" style="font-size:1.4rem ;">
                <td>${tempOrder.namebuy}</td>
                <td>${tempOrder.nameproduct}</td>
                <td>${tempOrder.address}</td>
                <td>${tempOrder.phone}</td>
                <td>${tempOrder.totalAmount}.000đ</td>
                <td>${tempOrder.date}</td>
                <td>${tempOrder.trangthai}</td>
                <td class="action_${tempOrder.id}">
                    <button class="border-0 p-2 btn-danger " style="cursor: pointer;" onclick= "ReviewOrder(${tempOrder.id})" >Xem Lại</button>
                </td>
            </tr>
            `
            percentChapNhan++;
            saveMoneyAccept += tempOrder.totalAmount
            saveMoney += tempOrder.totalAmount
            console.log(saveMoney)
        } else {
            s += `
            <tr class="h5" style="font-size:1.4rem ;">
                <td>${tempOrder.namebuy}</td>
                <td>${tempOrder.nameproduct}</td>
                <td>${tempOrder.address}</td>
                <td>${tempOrder.phone}</td>
                <td>${tempOrder.totalAmount}.000đ</td>
                <td>${tempOrder.date}</td>
                <td>${tempOrder.trangthai}</td>
                <td class="action_${tempOrder.id}">
                    <button class="border-0 p-2 btn-danger" style="cursor: pointer;" onclick = "RefuseOrder(${tempOrder.id})">Từ Chối</button>
                    <button class="border-0 p-2 btn-danger " style="cursor: pointer;" onclick= "CheckOrder(${tempOrder.id})" >Kiểm Tra</button>
                </td>
            </tr>
            `
            percentCho++;
            saveMoney += tempOrder.totalAmount
            console.log(saveMoney)
        }

    }
    document.querySelector('.thongkedonhang').innerHTML = `
    <div >
        <div class="statisticalProduct progress" style="--i: ${(percentChapNhan / data.length * 100 ).toFixed(2)} ; --clr:red">
        <h3>${(percentChapNhan / data.length * 100 ).toFixed(2)} <span>%</span></h3>
        <h4>Đơn đặt thành công</h4>
        </div>
        <h3 class= "thongbao">${percentChapNhan} đơn đặt thành công</h3>
    </div>
    <div>
    <div class="statisticalProduct progress" style="--i:${(percentHuyDonHang / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentHuyDonHang / data.length * 100 ).toFixed(2)} <span>%</span></h3>
        <h4>Đơn bị hủy</h4>
    </div>
    <h3 class= "thongbao">${percentHuyDonHang} đơn bị hủy</h3>
    </div>
    <div>
    <div class="statisticalProduct progress" style="--i:${(percentCho / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentCho / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Đơn đang chờ</h4>
    </div>
    <h3 class= "thongbao">${percentCho} đơn đang chờ xác nhận</h3>
    </div>
    <div>
    <div class="statisticalProduct progress" style="--i:${(saveMoneyAccept / saveMoney * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(saveMoneyAccept / saveMoney * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Doanh Thu</h4>
    </div>
    <h3 class= "thongbao">Tiền thu về ${saveMoneyAccept}.000đ</h3>
    </div>
    `
    tableOrder.innerHTML = s;
    var progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((progress, index) => {
        var percent = progress.style.getPropertyValue('--i');
        progress.style.background = `conic-gradient(from 0turn, var(--clr) ${percent}% , #444 0)`;
    });
}

function RefuseOrder(id) {
    var Info = {
        trangthai: "Hủy Đơn Hàng"
    }
    var promise = apiOrder.editOrder(id, Info);
    promise
        .then(function () {
            getListOrder()

            NotiAlert('error', "Từ Chối Thành Công", 1500)
        })
        .catch(function (error) {
            console.log(error);
        })
}

function NotiAlert(icon, title, timer) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: timer
    })
}
function InfoOrder(data) {
    document.getElementById('infoNameBuy').innerHTML = data.namebuy;
    document.getElementById('infoAddress').innerHTML = data.address;
    document.getElementById('infoPhone').innerHTML = data.phone;
    document.getElementById('infoNameProduct').innerHTML = data.nameproduct;
    document.getElementById('infoToTalAmount').innerHTML = data.totalAmount + ".000đ";
    document.getElementById('infoTrangThai').innerHTML = data.trangthai;
    document.getElementById('infoTime').innerHTML = data.date
    document.querySelector('.modal-order').style.display = 'block';
    document.querySelector('.modal-order').classList.remove('fade');
    document.querySelector('.btnAddUpdateOrder').innerHTML = `<button id="btnAddOrder" type="button" class="btn btn-success" onclick="confirmOrder(${data.id})">Xác Nhận Đơn Hàng</button>`
}
function CheckOrder(id) {
    var promise = apiOrder.getOrder(id);
    promise
        .then(function (result) {
            InfoOrder(result.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
function confirmOrder(id) {
    var Info = {
        trangthai: "Chấp Nhận"
    }
    var promise = apiOrder.editOrder(id, Info);
    promise
        .then(function () {
            getListOrder()
            document.querySelector('.modal-order').style.display = 'none';
            document.querySelector('.modal-order').classList.add('fade');
            NotiAlert('success', "Xác Nhận Đơn Hàng Thành Công", 1500)
        })
        .catch(function (error) {
            console.log(error);
        })
}
function ReviewInfoOrder(data) {
    document.getElementById('infoNameBuy').innerHTML = data.namebuy;
    document.getElementById('infoAddress').innerHTML = data.address;
    document.getElementById('infoPhone').innerHTML = data.phone;
    document.getElementById('infoNameProduct').innerHTML = data.nameproduct;
    document.getElementById('infoToTalAmount').innerHTML = data.totalAmount + ".000đ";
    document.getElementById('infoTrangThai').innerHTML = data.trangthai;
    document.getElementById('infoTime').innerHTML = data.date
    document.querySelector('.modal-order').style.display = 'block';
    document.querySelector('.modal-order').classList.remove('fade');
    document.querySelector('.btnAddUpdateOrder').innerHTML = ``

}
function ReviewOrder(id){
    var promise = apiOrder.getOrder(id);
    promise
        .then(function (result) {
            ReviewInfoOrder(result.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}