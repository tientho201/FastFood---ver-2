$(document).ready(function () {
    var container = $(".breadcrumb-list");
    var prevBtn = $(".breadcrumb-btn__prev");
    var nextBtn = $(".breadcrumb-btn__next");
    var activeItem = $('.breadcrumb-link.active')
    if (container[0].scrollWidth <= container.innerWidth()) {
        prevBtn.hide();
        nextBtn.hide();
    }

    container.scroll(function () {
        if (container.scrollLeft() > 0) {
            prevBtn.show();
        } else {
            prevBtn.hide();
        }

        if (container.scrollLeft() < (container[0].scrollWidth - container.innerWidth())) {
            nextBtn.show();
        } else {
            nextBtn.hide();
        }
    });

    $(".next").click(function () {
        container.animate({
            scrollLeft: container.scrollLeft() + 200
        }, 500);
    });

    $(".prev").click(function () {
        container.animate({
            scrollLeft: container.scrollLeft() - 200
        }, 500);
    });
});