var apiProduct = new CallApiProduct() ; 
var ProductArray = [] ; 

function getlistProduct(){
    var promise = apiProduct.fetchData();   
    promise
        .then(function(result){
            ProductArray = result.data ; 
            renderProduct(ProductArray) ; 
            // console.log(ProductArray)
        })
        .catch(function(error){
            console.log(error) ; 
        })
}
getlistProduct() ; 

function renderProduct(data){
    var tableUudai = document.getElementById('tableDanhSachUuDai'); 
    var tableMonMoi = document.getElementById('tableDanhSachMonMoi');
    var tableCombo1Nguoi = document.getElementById('tableDanhSachCombo1Nguoi') ; 
    var tableComboNhom = document.getElementById('tableDanhSachComboNhom'); 
    var tableGaRanGaQuay = document.getElementById('tableDanhSachGaRanGaQuay');
    var tableBurgerComMiY = document.getElementById('tableDanhSachBurgerComMiY') ; 
    var tableThucAnNhe = document.getElementById('tableDanhSachThucAnNhe') ; 
    var tableThucUong_TrangMieng = document.getElementById('tableDanhSachThucUong_TrangMieng') ; 
    var uudai  = "" ; 
    var monmoi = "" ; 
    var combo1nguoi = "" ; 
    var combonhom = "" ; 
    var garangaquay = "" ; 
    var burgercommiy = "" ; 
    var thucannhe = "" ; 
    var thucuong_trangmieng = "" ; 
    for(var i = data.length - 1 ; i >= 0 ; i--){
        var ProductTemporary = data[i] ; 
        if(ProductTemporary.item === "UuDai"){
            uudai += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "MonMoi"){
            monmoi += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "Combo1Nguoi"){
            combo1nguoi += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "ComboNhom"){
            combonhom += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "GaRanGaQuay"){
            garangaquay += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "BurgerComMiY"){
            burgercommiy += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "ThucUong_TrangMieng"){
            thucuong_trangmieng += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
        if(ProductTemporary.item === "ThucAnNhe"){
            thucannhe += `<tr style="font-size:1.4rem ;">
            <td>${ProductTemporary.IDproduct}</td>
            <td>${ProductTemporary.name}</td>
            <td>
                <img src="${ProductTemporary.img}" alt="">
            </td>
            <td>${ProductTemporary.gia}đ</td>
            <td>${ProductTemporary.detail}</td>
            <td>
                <button class="border-0 btn-danger"
                    style="cursor: pointer;" onclick = deleteProduct(${ProductTemporary.id})>Delete</button>
                <button class="border-0 ml-5 p-2 " style="cursor: pointer;"  onclick = editProduct(${ProductTemporary.id})><svg
                        xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg></button>
            </td>
        </tr>
        `
        }
   
    }
    // console.log ( uudai , monmoi , combo1nguoi , combonhom , burgercommiy , thucannhe , thucuong_trangmieng)
    tableUudai.innerHTML = uudai ; 
    tableMonMoi.innerHTML = monmoi ; 
    tableCombo1Nguoi.innerHTML = combo1nguoi ;
    tableComboNhom.innerHTML = combonhom ; 
    tableGaRanGaQuay.innerHTML = garangaquay ; 
    tableBurgerComMiY.innerHTML = burgercommiy ; 
    tableThucAnNhe.innerHTML = thucannhe ; 
    tableThucUong_TrangMieng.innerHTML = thucuong_trangmieng ; 
}

function deleteProduct(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "Bạn có chắc xóa sản phẩm này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var promise = apiProduct.deleteProduct(id);
            promise
                .then(function () {
                    getlistProduct();
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
function infoEditProduct(data){
    document.getElementById('typeModalProduct').value =  data.item ; 
    document.getElementById('idProduct').value  = data.IDproduct ; 
    document.getElementById('nameProduct').value = data.name ; 
    document.getElementById('imgProduct').value = data.img ; 
    document.getElementById('priceProduct').value = data.gia ; 
    document.getElementById('infoProduct').value = data.detail ; 
    document.querySelector('.modal-product').style.display = 'block';
    document.querySelector('.modal-product').classList.remove('fade');
    document.getElementById('header-title-product').innerHTML = "Sửa Tài Khoản";
    document.querySelector('.btnAddUpdateProduct').innerHTML = `<button id="btnAddProduct" type="button" class="btn btn-success" onclick="updateProduct(${data.id})">Cập Nhật Sản Phẩm</button>`
}
function editProduct(id){
    var promise  = apiProduct.getProduct(id) ; 
    promise 
        .then(function(result){
            infoEditProduct(result.data)
        })
        .catch(function(error){
            console.log(error) ; 
        })
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


function getValueInputProduct(){
    var item = document.getElementById('typeModalProduct').value ; 
    var IDproduct = document.getElementById('idProduct').value ; 
    var name = document.getElementById('nameProduct').value ; 
    var img = document.getElementById('imgProduct').value ; 
    var price = document.getElementById('priceProduct').value ; 
    var detail = document.getElementById('infoProduct').value ; 
    var isValue = true ; 

    isValue &= ktRong(IDproduct , "tbIDProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(name , "tbNameProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(img , "tbimgProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(price , "tbPriceProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(detail , "tbInfoProduct" , "Vui lòng không được bỏ trống" )

    if (!isValue){
        return null ; 
    }
    var InfoValueProduct = {
        IDproduct : IDproduct , 
        name : name , 
        img : img , 
        gia : price , 
        detail : detail , 
        item : item 
    }
    return InfoValueProduct;
}

function addProduct(){
    var InfoProduct = getValueInputProduct();
    if (InfoProduct){
        var product = new Product(
            InfoProduct.IDproduct , 
            InfoProduct.name , 
            InfoProduct.img , 
            InfoProduct.gia , 
            InfoProduct.detail , 
            InfoProduct.item 
        );

        apiProduct.addProduct(product)
        .then(function(data){
            getlistProduct() ; 
            NotiAlert("success", "Thêm thành công", 1500);
        })
        .catch(function(error){
            console,log(error) ; 
        })
    }
}

function updateProduct(id){
    var InfoProduct = getValueInputProduct();
    if (InfoProduct){
        var product = new Product(
            InfoProduct.IDproduct , 
            InfoProduct.name , 
            InfoProduct.img , 
            InfoProduct.gia , 
            InfoProduct.detail , 
            InfoProduct.item 
        );
        var promise = apiProduct.editProduct(id , InfoProduct) ; 
        promise
            .then(function(){
                getlistProduct()
                NotiAlert("success", "Thành công", 1500);
            })
            .catch(function(error){
                console.log(error);
            })
        }
}