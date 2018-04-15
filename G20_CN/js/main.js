'use strict';

jQuery.noConflict();
jQuery(function ($) {

    /*
     * 导航栏跟随鼠标的滑块动画
     */
    // 变量
    var primaryNav = $('#primary-nav');
    var dynamicBottom = primaryNav.find('.dynamic-bottom');
    var navItems = primaryNav.find('.nav-item');
    var currentNavIndex = primaryNav.find('.current').attr('data-index');
    // 每个菜单项的宽度
    var navItemWidth = navItems.outerWidth(false);
    dynamicBottom.width(navItemWidth)//.css("margin", "0 10px");
    // 滑块移动到第index个菜单项
    var goToIndex = function(index) {
        dynamicBottom.stop().animate({
            left: navItemWidth * index + 'px'
        }, 200)
    };
    // 鼠标事件
    navItems.mouseover(function() {
        goToIndex(navItems.index($(this)));
    }).mouseout(function() {
        goToIndex(currentNavIndex);
    }).mouseout();

    /**
     * 返回顶部
     */
    // 返回顶部  
    function getScrollTop() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    }
    function setScrollTop(value) {
        if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = value;
        } else {
            document.body.scrollTop = value;
        }
    }
    // 弹性返回顶部，展现滚动的动画
    var goToTop = $('#go-to-top');
    goToTop.click(function (event) {
        var goTop = setInterval(scrollMove, 12);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    });
    // 自动隐藏放回顶部按钮
    $(window).scroll(function (event) {
        getScrollTop() > 0 ? goToTop.fadeIn('fast') : goToTop.fadeOut('fast');
    });
})