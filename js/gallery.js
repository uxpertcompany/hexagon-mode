$(document).ready(function() {
    $('#go_right').click(function(event) {
        var pos = $('#ad_place').scrollLeft();
        $("#ad_place").animate({scrollLeft: pos += 520}, 800);
        $('#go_left').removeClass("active")
    });

    $('#go_left').click(function(event) {
        var pos = $('#ad_place').scrollLeft();
        $("#ad_place").animate({scrollLeft: pos -= 520}, 800);
        $('#go_right').removeClass("active")
    });

    $(function () {
        var scrollLeftPrev = 0;
        $('#ad_place').scroll(function () {
            var $elem=$('#ad_place');
            var newScrollLeft = $elem.scrollLeft(),
                width=$elem.outerWidth(),
                scrollWidth=$elem.get(0).scrollWidth;
            if (scrollWidth-newScrollLeft==width) {
                $('#go_right').addClass("active");
            }
            if (newScrollLeft === 0) {
                $('#go_left').addClass("active");
            }
            scrollLeftPrev = newScrollLeft;
        });
    });
});
