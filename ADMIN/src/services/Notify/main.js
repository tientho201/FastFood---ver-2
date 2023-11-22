var apiNotify = new CallApiNotify();
var NNotify = [];

function getListNotify() {
    var promise = apiNotify.fectchData();
    promise
        .then(function (result) {
            NNotify = result.data;
            renderNotify(NNotify);
        })
        .catch(function (error) {
            console.log(error)
        })
}
getListNotify();

function renderNotify(data) {
    var tableNotify = document.getElementById('tableDanhSachNotify');
    var s = "";
    for (var i = data.length - 1; i >= 0 ; i--) {
        var notify = data[i]
        s += `<tr class="h5">
        <td>${notify.name}</td>
        <td>
            <img src="${notify.img}" alt="" >
        </td>
        <td>${notify.detail}</td>
        <td>
            <button class="border-0 btn-danger" style="cursor: pointer;" onclick="deleteNotify(${notify.id})" >Delete</button>
            <button class="border-0 ml-5 p-2 " style="cursor: pointer;"onclick="editNotify(${notify.id})" ><svg
                    xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg></button>
        </td>
    </tr>`
    }
    tableNotify.innerHTML = s;
}

function deleteNotify(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "Bạn có chắc xóa thông báo này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var promise = apiNotify.deleteNotify(id);
            promise
                .then(function () {
                    getListNotify();
                    NotiAlert("error", "Xóa thành công", 2000);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (result.isDenied) {
            Swal.fire("Thay đổi không được lưu", "", "info");
        }
    });
}

function editNotify(id) {
    var promise = apiNotify.getNotify(id);
    promise
        .then(function (result) {
            infoEditNotify(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function infoEditNotify(data) {
    document.getElementById('nameNotify').value = data.name;
    document.getElementById('URLProduct').value = data.img;
    document.getElementById('detailProduct').value = data.detail;
    document.querySelector('.modal-notify').style.display = 'block';
    document.querySelector('.modal-notify').classList.remove('fade');
    document.getElementById('header-title-notify').innerHTML = "Sửa Tài Khoản";
    document.querySelector('.btnAddUpdateNotify').innerHTML = `<button id="btnAddNotify" type="button" class="btn btn-success" onclick="updateNotify(${data.id})">Cập Nhật Thông Báo</button>`
}
// Thông báo 
function NotiAlert(icon, title, timer) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: timer,
    });
}



function getValueInputNotify() {
    var name = document.querySelector('#nameNotify').value;
    var img = document.querySelector('#URLProduct').value;
    var detail = document.querySelector('#detailProduct').value;

    var isValid = true;
    isValid &= ktRong(name, 'tbNameNotify', "Vui lòng không được bỏ trống");
    isValid &= ktRong(img, 'tbURLProduct', "Vui lòng không được bỏ trống");
    isValid &= ktRong(detail, 'tbDetailProduct', "Vui lòng không được bỏ trống");

    if (!isValid) {
        return null;
    }
    var InfoValueNotify = {
        name: name,
        img: img,
        detail: detail,
    };
    return InfoValueNotify;
}

function addNotify() {
    var InfoNotify = getValueInputNotify();
    if (InfoNotify) {
        var notify = new Notify(
            InfoNotify.name,
            InfoNotify.img,
            InfoNotify.detail,
        );
         
        
            // Thực hiện yêu cầu API để thêm thông báo với dữ liệu hình ảnh
            apiNotify.addNotify(notify)
                .then(function (data) {
                    getListNotify();
                    NotiAlert("success", "Thêm thành công", 1500);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
}

function updateNotify(id) {
    var InfoNotify = getValueInputNotify();
    if (InfoNotify) {
        var notify = new Notify(
            InfoNotify.name,
            InfoNotify.img , 
            InfoNotify.detail,
        );
            var promise = apiNotify.editNotify(id, notify);
            promise
                .then(function () {
                    getListNotify();
                    NotiAlert("success", "Thành công", 1500);

                })
                .catch(function (error) {
                    console.log(error);
                });
    }
}