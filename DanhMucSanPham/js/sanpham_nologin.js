// Xử lý cuộn mượt với khoảng cách top cố định
function smoothScroll(target, duration, topOffset) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run - topOffset);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Thuật toán để tạo hiệu ứng cuộn mượt
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Xử lý sự kiện khi nhấp vào breadcrumb
const breadcrumblinks = document.querySelectorAll('.breadcrumb-link');
breadcrumblinks.forEach((breadcrumbLink, index) => {
    breadcrumbLink.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const duration = 1000; // Thời gian cuộn mượt
            const topOffset = 130; // Khoảng cách top thêm vào

            // Xóa thuộc tính 'active' từ tất cả các breadcrumb
            breadcrumblinks.forEach((link) => {
                link.classList.remove('active');
            });

            // Thêm thuộc tính 'active' vào breadcrumb được chọn
            this.classList.add('active');

            smoothScroll(targetElement, duration, topOffset);
        }
    });
});

const footerlists = document.querySelectorAll('.footer-link'); 
footerlists.forEach((footerlist, index) => {
    footerlist.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        document.querySelector('#DanhMucSanPham').style.display = 'block'
        document.querySelector('#trangchu').style.display = 'none'
        document.querySelector('.navigation-nav__link-home').classList.remove('active');
        document.querySelector('.navigation-nav__link--no-select').classList.add('active')
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const duration = 1000; // Thời gian cuộn mượt
            const topOffset = 130; // Khoảng cách top thêm vào
            smoothScroll(targetElement, duration, topOffset);
        }
    });
});
const productLists = document.querySelectorAll('.product-link'); 
productLists.forEach((productList, index) => {
    productList.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        document.querySelector('#DanhMucSanPham').style.display = 'block'
        document.querySelector('#trangchu').style.display = 'none'
        document.querySelector('.navigation-nav__link-home').classList.remove('active');
        document.querySelector('.navigation-nav__link--no-select').classList.add('active')
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const duration = 1000; // Thời gian cuộn mượt
            const topOffset = 130; // Khoảng cách top thêm vào
            smoothScroll(targetElement, duration, topOffset);
        }
    });
});
// Xác định khi nào cuộn mượt để thêm lớp 'active' vào breadcrumb
const targetElements = [
    document.getElementById('UuDai'),
    document.getElementById('MonMoi'),
    document.getElementById('Combo1Nguoi'),
    document.getElementById('ComboNhom'),
    document.getElementById('GaRanGaQuay'),
    document.getElementById('BurgerComMiY'),
    document.getElementById('ThucAnNhe'),
    document.getElementById('ThucUong_TrangMieng'),
];

let isScrollingDown = false;
let lastScrollTop = 0;

function setActiveBreadcrumb() {
    const currentPos = window.scrollY;
    const offset = 200; // Khoảng cách top

    if (currentPos > lastScrollTop) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }
    lastScrollTop = currentPos;

    targetElements.forEach((section, index) => {
        const breadcrumblink = breadcrumblinks[index];
        if (isScrollingDown) {
            if (
                section.offsetTop - offset <= currentPos &&
                section.offsetTop + section.offsetHeight > currentPos + offset
            ) {
                breadcrumblink.classList.add('active');
            } else {
                breadcrumblink.classList.remove('active');
            }
        } else {
            if (
                section.offsetTop - offset <= currentPos + offset &&
                section.offsetTop + section.offsetHeight > currentPos + offset
            ) {
                breadcrumblink.classList.add('active');
            } else {
                breadcrumblink.classList.remove('active');
            }
        }
    });
}
function adjustScrollPosition() {
    const activeBreadcrumb = document.querySelector('.breadcrumb-link.active');
    if (activeBreadcrumb) {
        const breadcrumbContainer = document.querySelector('.breadcrumb-list');
        const containerWidth = breadcrumbContainer.offsetWidth;
        const breadcrumbWidth = activeBreadcrumb.offsetWidth;
        const breadcrumbPosition = activeBreadcrumb.offsetLeft;
        const breadcrumbEnd = breadcrumbPosition + breadcrumbWidth;

        const scrollAmount = 0; // Số lượng cuộn khi điều chỉnh

        if (breadcrumbPosition < 0) {
            breadcrumbContainer.scrollLeft += breadcrumbPosition - scrollAmount;
        } else if (breadcrumbEnd > containerWidth) {
            breadcrumbContainer.scrollLeft += breadcrumbEnd - containerWidth + scrollAmount;
        } else {
            breadcrumbContainer.scrollLeft = -scrollAmount;
        }
    }
}

window.addEventListener('scroll', () => {
    setActiveBreadcrumb();
    adjustScrollPosition();
});
