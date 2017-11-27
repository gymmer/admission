jQuery.noConflict();
jQuery(function($) {

    // 导航栏
    var navigation = responsiveNav("#Hui-navbar", {
        customToggle: "#nav-toggle"
    });

    // 返回顶部
    $.Huitotop();
})