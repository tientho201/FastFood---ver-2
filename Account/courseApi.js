const courseApiSignIn = 'https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin'
// Mong muốn 
Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname'), // bắt buộc nhập 
        Validator.isRequired('#email'),
        Validator.isEmail('#email'), // bắt buộc nhập khi di chuyển ra ngoài báo lỗi
        Validator.isminLength('#password', 6),
        Validator.isRequired('#password_confirmation', "Trường này không được bỏ trống"),
        Validator.isConfirmed('#password_confirmation', function () {
            return document.querySelector('#form-1 #password').value;
        }, 'Mật khẩu nhập lại không chính xác'),
        // Validator.isRequired('input[name="gender"]'),
    ],
    onSubmit: function (data) {
        var userEmail = data.email
        fetch(courseApiSignIn)
            .then(response => response.json())
            .then(apiData => {
                // Xử lý dữ liệu ở đây
                const foundUser = apiData.find(value => value.email === userEmail);
                if (foundUser) {
                    document.querySelector('#form-1 .form-message_email').innerHTML = "email đã tồn tại"
                    document.querySelector('#form-1 #email').value =''
                    document.querySelector('#form-1 #password').value =''
                    document.querySelector('#form-1 #password_confirmation').value =''
                } else {
                    var option = {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data)
                    };
                    fetch(courseApiSignIn, option)
                        .then(function (response) {
                            return response.json(); // return response.json() để chuyển đổi dữ liệu phản hồi thành JSON
                        })
                        .then(function (responseData) {
                            // Xử lý dữ liệu phản hồi ở đây
                           alert("Đăng ký thành công"); // hoặc thực hiện bất kỳ hành động nào khác với dữ liệu phản hồi
                           localStorage.setItem('loggedInUser', JSON.stringify(responseData));
                            // Chuyển hướng đến trang người dùng
                            setTimeout(() => {
                                window.location = '../TrangChu/indexLogin.html';
                            }, 500);

                        })
                        
                }
            })
            .catch(error => {
                // Xử lý lỗi ở đây
                console.error('Lỗi:', error);
            });


    }
})
Validator({
    form: '#form-2',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#email'),
        Validator.isEmail('#email'), // bắt buộc nhập khi di chuyển ra ngoài báo lỗi
        Validator.isRequired('#password', "Trường này không được bỏ trống"),
        Validator.isminLength('#password', 6,
            "Mật khẩu không chính xác"),
    ],

    onSubmit: function (data) {
        var userEmail = data.email;
        var passWord = data.password;
        fetch(courseApiSignIn)
            .then(response => response.json())
            .then(apiData => {
                // Xử lý dữ liệu ở đây
                const foundUser = apiData.find(value => value.email === userEmail);
                if (foundUser) {
                    if (passWord === foundUser.password) {
                        if (foundUser.distinguish === 'Admin') {
                            // Đăng nhập với quyền admin
                            alert("Đăng nhập thành công với tài khoản admin");
                            // Lưu thông tin đăng nhập vào localStorage
                            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
                            // Chuyển hướng đến trang admin
                            setTimeout(() => {
                                window.location = '../TrangChu/indexLogin.html';
                            }, 500);
                        } else {
                            // Đăng nhập với quyền người dùng thông thường
                            alert("Đăng nhập thành công với tài khoản người dùng");
                            // Lưu thông tin đăng nhập vào localStorage
                            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
                            // Chuyển hướng đến trang người dùng
                            setTimeout(() => {
                                window.location = '../TrangChu/indexLogin.html';
                            }, 500);
                        } 
                    } else {
                        // Xử lý trường hợp mật khẩu không đúng
                        document.querySelector('.form-message_password').innerHTML = "Mật khẩu không đúng";
                        document.querySelector('#form-2 #password').value = '';
                    }
                } else {
                    // Xử lý trường hợp không tìm thấy email
                    alert("Không tìm thấy email");
                    document.querySelector('#form-2 #email').value = '';
                    document.querySelector('#form-2 #email').parentElement.classList.add('invalid');
                    document.querySelector('#form-2 #password').value = '';
                    document.querySelector('#form-2 #password').parentElement.classList.add('invalid');
                }
            })
            .catch(error => {
                // Xử lý lỗi ở đây
                console.error('Lỗi:', error);
            });
    }
    
})