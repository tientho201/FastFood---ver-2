var apiAccount = new CallApiAccount() ; 
var Account = [] ; 
function getListAccount(){
    var promise = apiAccount.fectchData() ;
    promise
        .then(function(result){
            Account = result.data ; 
            renderAccount(Account)
  
        })
        .catch(function(error){
            console.log(error)
        })
}

getListAccount() ; 

function renderAccount(data){
    var tamtable = document.querySelector('.temporaryAccount'); 
    var s = "" ; 
    for(var i =  0 ; i< data.length ; i++){
        var tempAccount = data[i] ; 
        if (tempAccount.email === user.email){
            s = `
            <div class="form-group">
                    <h4>Email</h4>
                    <h4>Tên</h4>
                    <h4>Mật Khẩu</h4>
                </div>
                <div class="form-group">
                    <span>${tempAccount.email}</span>
                    <div class="passwordChange">
                        <input type="text" name="name" id="name" value="${tempAccount.fullname}">
                   <div class='form-group-containerName'>
                        <span class='form-group__changeName' onclick="changeName(${tempAccount.id})">thay đổi</span>
                    </div>
                    </div>
                    <div class="passwordChange">
                        <input type="password" name="password" id="password" value="${tempAccount.password}">
                    <div class='form-group-containerPassword'>
                        <span class='form-group__change' onclick="changePassword(${tempAccount.id})">thay đổi</span>
                    </div>
                  </div>
                </div>`
        }
    }
    tamtable.innerHTML = s 
}

function changePassword(id){
    var promise = apiAccount.getAccount(id);
    promise 
        .then(function(result){
            document.querySelector('#password').type = 'text'
            document.querySelector('#password').style.border = '1px solid #ccc'
            document.querySelector('.form-group-containerPassword').innerHTML = `<span class='form-group__change' onclick="confirmPassword(${result.data.id})">Chấp Nhận</span>`
        })
        .catch(function(error){
            console.log(error)
        })
}
function changeName(id){
    var promise = apiAccount.getAccount(id);
    promise 
        .then(function(result){
            document.querySelector('#name').style.border = '1px solid #ccc'
            document.querySelector('.form-group-containerName').innerHTML = `<span class='form-group__change' onclick="confirmName(${result.data.id})">Chấp Nhận</span>`
        })
        .catch(function(error){
            console.log(error)
        })
}
function confirmPassword(id){
    var Change = {
        password : document.querySelector('#password').value ,
        password_confirmation :  document.querySelector('#password').value 
    }
    var promise = apiAccount.editAccount(id , Change) ;    
    promise
        .then(function(){
            getListAccount();
            NotiAlert('success' , "Thay Đổi Thành Công" , 1500)
        })
}
function confirmName(id){
    var Change = {
        fullname : document.querySelector('#name').value ,
    }
    var promise = apiAccount.editAccount(id , Change) ;    
    promise
        .then(function(result){
            getListAccount();
            localStorage.setItem('loggedInUser' ,  JSON.stringify(result.data))
            NotiAlert('success' , "Thay Đổi Thành Công" , 1500)
            setTimeout(function () {
                location.reload();
            },1500);
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