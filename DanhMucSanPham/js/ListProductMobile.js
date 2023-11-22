function handleBreadcrumbLinks() {
    breadcrumblinks.forEach(function (breadcrumblink, index) {
        breadcrumblink.onclick = function (e) {
            breadcrumblinks.forEach(function (breadcrumblink, index) {
                breadcrumblink.classList.remove('active');
                document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'none';
            });
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
            this.setAttribute('herf', this.getAttribute('href') )
        };
    });
}

function resetBreadcrumbs() {
    breadcrumblinks.forEach(function (breadcrumblink) {
        document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'block';
    });
}

var mql = window.matchMedia('(max-width: 740px)');
if (mql.matches) {
    handleBreadcrumbLinks();
}

mql.addListener(function (e) {
    if (!e.matches) {
        resetBreadcrumbs();
    } else {
        handleBreadcrumbLinks();
    
    }
});
window.onload = function(){
    breadcrumblinks.forEach(function (breadcrumblink, index) {
        document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'none';
    })
    if (window.location.hash === '#UuDai' ){
        var target = document.querySelector('#UuDai');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#MonMoi' ){
        var target = document.querySelector('#MonMoi');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#Combo1Nguoi' ){
        var target = document.querySelector('#Combo1Nguoi');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#GaRanGaQuay' ){
        var target = document.querySelector('#GaRanGaQuay');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#ThucAnNhe' ){
        var target = document.querySelector('#ThucAnNhe');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#ThucUong_TrangMieng' ){
        var target = document.querySelector('#ThucUong_TrangMieng');
        if (target) {
            target.style.display = 'block';
        }
    }
    if (window.location.hash === '#BurgerComMiY' ){
        var target = document.querySelector('#BurgerComMiY');
        if (target) {
            target.style.display = 'block';
        }
    }
}

