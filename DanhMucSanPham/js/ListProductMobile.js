function handleBreadcrumbLinks() {
    breadcrumblinks.forEach(function (breadcrumblink, index) {
        breadcrumblink.onclick = function (e) {
            breadcrumblinks.forEach(function (breadcrumblink, index) {
                breadcrumblink.classList.remove('active');
                document.querySelector(breadcrumblink.getAttribute('href')).style.display = 'none';
            });
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
            this.setAttribute('href', this.getAttribute('href') )
        };
    });
}
var productlinks = document.querySelectorAll('.product-link')
function handleProductLinks() {
    productlinks.forEach(function (productlink, index) {
        productlink.onclick = function (e) {
            productlinks.forEach(function (productlink, index) {
                document.querySelector(productlink.getAttribute('href')).style.display = 'none';
          
            });
            document.querySelector(this.getAttribute('href')).style.display = 'block';
            this.setAttribute('href', this.getAttribute('href') )
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
    handleProductLinks()
}

mql.addListener(function (e) {
    if (!e.matches) {
        resetBreadcrumbs();
    } else {
        handleBreadcrumbLinks();
        handleProductLinks()
    }
});

