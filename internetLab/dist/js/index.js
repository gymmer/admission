jQuery.noConflict();
jQuery(function($) {

    // 导航栏
    var navigation = responsiveNav("#Hui-navbar", {
        customToggle: "#nav-toggle"
    });

    // 返回顶部
    $.Huitotop();

    // 首页轮播图
    $("#index-slider .slider").slide({
        mainCell: ".bd ul",
        titCell: ".hd li",
        prevCell: ".prev",
        nextCell: ".next",
        trigger: "click",
        effect: "leftLoop",
        // effect: "fold",
        autoPlay: true,
        delayTime: 850,
        interTime: 3000,
        pnLoop: false,
        titOnClassName:"active"
    });

    // 图片遮罩
    $('.maskWraper').Huihover();
})