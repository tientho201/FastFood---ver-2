//  Lấy thông tin đăng nhập từ localStorage
var loggedInUser = localStorage.getItem('loggedInUser') ;
var user = JSON.parse(loggedInUser)
document.querySelector('.name-login').innerText = user.fullname


// Đăng xuất

var logOut = document.querySelector('.top-header__navbar-user-item-separate') 
logOut.onclick = function(event) {
    event.preventDefault(); // Prevents the default link action

    setTimeout(function() {
        window.location.href = '../index.html'; // Redirect to the logout page
    }, 1000);
}

