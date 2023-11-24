
var navigation_close_on = document.querySelector('.navigation-menu__close');
navigation_close_on.onclick = function () {
  document.querySelector('#navigation').style.display = 'none'
}
var on_tabmenu = document.querySelector('.tab-menu__checkbox')
on_tabmenu.onclick = function () {
  document.querySelector('#navigation').style.display = 'block'
}


// thanh menu dính trên màn hình
window.onscroll = function () {
  myFunction();
};

// 
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let toolbar = document.getElementById("navigation");
let toolbreadcrumb = document.getElementById('breadcrumb');
let toolbclink = document.querySelectorAll('.breadcrumb-link');
let distance = 0 ; // Get the initial offset of the toolbar from the top of the document

function myFunction() {
  if (window.matchMedia("(min-width: 740px)").matches) {
    if (window.pageYOffset > distance) {
      toolbar.style.position = "sticky";
      toolbar.style.animation = "menuMobileSlip 0.4s ease";
      toolbar.style.top = '0';
      toolbar.style.zIndex = '4';
      toolbreadcrumb.style.borderTop = "2px solid #ccc";
      toolbreadcrumb.style.position = "sticky";
      toolbreadcrumb.style.animation = "menuMobileSlip 0.4s ease";
      toolbreadcrumb.style.top = '58px';
      toolbreadcrumb.style.zIndex = '4';
      toolbreadcrumb.style.backgroundColor = "var(--top_header-color)";
      toolbclink.forEach(function (value, index) {
      value.style.color = "#fff";
      prev.style.color = "#fff";
      next.style.color = "#fff";
        
      });
    } else {
      toolbar.style.position = "relative";
      toolbar.style.top = distance + "px";
      toolbar.style.zIndex = '2';
      toolbreadcrumb.style.borderTop = "none";

      toolbreadcrumb.style.position = "relative";
      toolbreadcrumb.style.top = distance + "px";
      toolbreadcrumb.style.zIndex = '2';

      toolbreadcrumb.style.backgroundColor = "#fff";
      toolbclink.forEach(function (value, index) {
        value.style.color = "#20090950";
        value.style.zIndex = '2';
      });
      prev.style.color = "#000";
      next.style.color = "#000";

      }

  }
}

// Attach the myFunction to the scroll event listener
window.addEventListener("scroll", myFunction);

