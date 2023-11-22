
var apiAccount = new CallApiAccount();
var Accounts = [];

// Lấy dữ liệu từ api sang JS
function getListAccount() {
    var promise = apiAccount.fectchData();
    promise
        .then(function (result) {
            Accounts = result.data;
            RenderAccount(Accounts);
        })
        .catch(function (error) {
            console.log(error);
        });
}
getListAccount();

// hiển thị sản phẩm ra màn hình 
function RenderAccount(data) {
    var tableAccount = document.querySelector('#tableDanhSachAccount');
    var s = "";
    for (var i = 0; i < data.length; i++) {
        var account = data[i];
        s += `
        <tr class="h5">
        <td>${account.fullname}</td>
        <td>${account.email}</td>
        <td>${account.password}</td>
        <td>${account.password_confirmation}</td>
        <td>${account.distinguish}</td>
        <td>
            <button class="border-0 btn-danger" style="cursor: pointer;" onclick="deleteAccount(${account.id})">Delete</button>
            <button class="border-0 ml-5 p-2 " style="cursor: pointer;" onclick="editAccount(${account.id})" ><svg
                    xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg></button>
        </td>
    </tr>`;
    }

    tableAccount.innerHTML = s;
}
// Hàm chỉnh sửa
function infoEditAccount(data) {
    document.querySelector('#nameAccount').value = data.fullname;
    document.querySelector('#emailAccount').value = data.email;
    document.querySelector('#passwordAccount').value = data.password;
    document.querySelector('#password_confirmationAccount').value = data.password_confirmation;
    document.querySelector('#distinguishAccount').value = data.distinguish;
    document.querySelector('.modal-account').style.display = 'block';
    document.querySelector('.modal-account').classList.remove('fade');
    document.getElementById('header-title-account').innerHTML = "Sửa Tài Khoản";
    document.querySelector('.btnAddUpdateAccount').innerHTML = `<button id="btnAddAccount" type="button" class="btn btn-success" onclick="updateAccount(${data.id})">Cập Nhật Tài Khoản</button>`

}

// Xóa Account
function deleteAccount(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "Bạn có chắc xóa tài khoản này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var promise = apiAccount.deleteAccount(id);
            promise
                .then(function () {
                    getListAccount();
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

// Sửa Account
function editAccount(id) {
    var promise = apiAccount.getAccount(id);
    promise
        .then(function (result) {
            infoEditAccount(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
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
function getValueInput() {
    var fullname = document.querySelector('#nameAccount').value;
    var email = document.querySelector('#emailAccount').value;
    var pass = document.querySelector('#passwordAccount').value;
    var pass_confirm = document.querySelector('#password_confirmationAccount').value;
    var distinguish = document.querySelector('#distinguishAccount').value;

    var isValid = true;
    isValid &= ktRong(fullname, 'tbNameAccount', "Vui lòng không được bỏ trống");
    isValid &= ktRong(email, 'tbEmailAccount', "Vui lòng không được bỏ trống");
    isValid &= ktRong(pass, 'tbPasswordAccount', "Vui lòng không được bỏ trống");
    isValid &= ktRong(pass_confirm, 'tbPassword_confirmationAccount', "Vui lòng không được bỏ trống");
    if (!isValid) {
        return null;
    }
    var InfoValue = {
        fullname: fullname,
        email: email,
        password: pass,
        password_confirmation: pass_confirm,
        distinguish: distinguish,
    };
    return InfoValue;
}

// Thêm tài khoản
function addAccount() {
    var Info = getValueInput();
    if (Info) {
        var account = new Account(
            Info.fullname,
            Info.email,
            Info.password,
            Info.password_confirmation,
            Info.distinguish
        );
        apiAccount.addAccount(account)
            .then(function (data) {
                getListAccount();
                NotiAlert("success", "Thêm thành công", 1500);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// Update Account
function updateAccount(id) {
    var Info = getValueInput();
    if (Info) {
        var account = new Account(
            Info.fullname,
            Info.email,
            Info.password,
            Info.password_confirmation,
            Info.distinguish
        );

        var promise = apiAccount.editAccount(id, account);
        promise
            .then(function () {
                getListAccount();
                NotiAlert("success", "Thành công", 1500);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
