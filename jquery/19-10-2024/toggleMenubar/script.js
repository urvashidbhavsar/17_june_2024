$(function () {
    $("#menubtn").click(function () {
        $(".nav").toggleClass("nav-show")
    })

    $("#showmodel").click(function () {
        $("#LoginModel").addClass("modelShow")
    })
    $("#closebtn").click(function () {
        $("#LoginModel").removeClass("modelShow")
    })

    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > 0) {
            $("header").addClass("setheader")
        } else {
            $("header").removeClass("setheader")
        }
    })
})