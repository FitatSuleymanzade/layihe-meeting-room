$(document).ready(function () {
    $(window).on("scroll", function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var elementPos = $("#ourpartners").offset().top;

        if (scrollPos > elementPos - windowHeight + 100) {
            $("#ourpartners").addClass("show");
            $(".advantages, .expertise").each(function (index) {
                var delay = index * 200;
                $(this).delay(delay).queue(function () {
                    $(this).addClass("show").dequeue();
                });
            });
        }
    });
});