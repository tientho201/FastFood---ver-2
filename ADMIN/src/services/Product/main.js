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
    var percentUuDai = 0 , percentMonMoi = 0 , percentCombo1Nguoi = 0 , percentComboNhom = 0 , 
    percentGaRanGaQuay = 0 , percentBurgerComMiY = 0 , percentThucAnNhe = 0 ,percentThucUongTrangMieng = 0; 
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
        percentUuDai++
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
        percentMonMoi++
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
        percentCombo1Nguoi++
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
        percentComboNhom++
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
        percentGaRanGaQuay++
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
        percentBurgerComMiY++
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
        percentThucAnNhe++;
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
        percentThucUongTrangMieng++
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

    document.querySelector('.thongkesanpham').innerHTML = `
    <div class = "col-xl-2 col-md-4">
        <div class="statisticalProduct progress" style="--i: ${(percentUuDai / data.length * 100 ).toFixed(2)} ; --clr:red">
        <h3>${(percentUuDai / data.length * 100 ).toFixed(2)} <span>%</span></h3>
        <h4>Ưu Đãi</h4>
        </div>
        <h3 class= "thongbao">${percentUuDai} sản phẩm thuộc Ưu Đãi</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentMonMoi / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentMonMoi / data.length * 100 ).toFixed(2)} <span>%</span></h3>
        <h4>Món Mới</h4>
    </div>
    <h3 class= "thongbao">${percentMonMoi} sản phẩm thuộc Món Mới</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentCombo1Nguoi / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentCombo1Nguoi / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Combo 1 Người</h4>
    </div>
    <h3 class= "thongbao">${percentCombo1Nguoi} sản phẩm thuộc Combo 1 Người</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentComboNhom / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentComboNhom / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Combo Nhóm</h4>
    </div>
    <h3 class= "thongbao">${percentComboNhom} sản phẩm thuộc Combo Nhóm</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentGaRanGaQuay / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentGaRanGaQuay / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Gà Rán Gà Quay</h4>
    </div>
    <h3 class= "thongbao">${percentGaRanGaQuay} sản phẩm thuộc Gà Rán Gà Quay</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentBurgerComMiY / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentBurgerComMiY / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Burger - Cơm - Mì Ý</h4>
    </div>
    <h3 class= "thongbao">${percentBurgerComMiY} sản phẩm thuộc Burger - Cơm - Mì Ý</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentThucAnNhe / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentThucAnNhe / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Thức Ăn Nhẹ</h4>
    </div>
    <h3 class= "thongbao">${percentThucAnNhe} sản phẩm thuộc Thức Ăn Nhẹ</h3>
    </div>
    <div class = "col-xl-2 col-md-4">
    <div class="statisticalProduct progress" style="--i:${(percentThucUongTrangMieng / data.length * 100 ).toFixed(2)}  ; --clr:red">
        <h3>${(percentThucUongTrangMieng / data.length * 100 ).toFixed(2)} <span>%</span></h3>
    <h4>Thức Uống & Tráng Miệng</h4>
    </div>
    <h3 class= "thongbao">${percentThucUongTrangMieng} sản phẩm thuộc Thức Uống & Tráng Miệng</h3>
    </div>
    `
    var progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((progress, index) => {
        var percent = progress.style.getPropertyValue('--i');
        progress.style.background = `conic-gradient(from 0turn, var(--clr) ${percent}% , #444 0)`;
    });
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
    document.querySelector('.img__product').src = data.img ; 
    document.getElementById('priceProduct').value = data.gia ; 
    document.getElementById('infoProduct').value = data.detail ; 
    document.querySelector('.modal-product').style.display = 'block';
    document.querySelector('.modal-product').classList.remove('fade');
    document.getElementById('header-title-product').innerHTML = "Sửa Tài Khoản";
    document.querySelector('.btnAddUpdateProduct').innerHTML = `<button id="btnAddProduct" type="button" class="btn btn-success" onclick="updateProduct(${data.id})">Cập Nhật Sản Phẩm</button>`
    document.querySelector('.img__product').style.height = '300px'
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
    var img = document.querySelector('.img__product').src ; 
    var price = document.getElementById('priceProduct').value ; 
    var detail = document.getElementById('infoProduct').value ; 
    var isValue = true ; 
   
    isValue &= ktRong(IDproduct , "tbIDProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(name , "tbNameProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(price , "tbPriceProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(detail , "tbInfoProduct" , "Vui lòng không được bỏ trống" )
    isValue &= ktRong(img , "tbimgProduct" , "Vui lòng không được bỏ trống" )
    
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
    console.log(img)
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
            document.querySelector('.modal-product').classList.add('fade')
            document.querySelector('.modal-product ').style.display = 'none'
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
        var promise = apiProduct.editProduct(id , product) ; 
        promise
            .then(function(){
                getlistProduct()
                NotiAlert("success", "Thành công", 1500);
                document.querySelector('.modal-product').classList.add('fade')
                document.querySelector('.modal-product ').style.display = 'none'
            })
            .catch(function(error){
                console.log(error);
            })
        }
}
