jQuery.noConflict();
jQuery(function($) {

    // 首页轮播图
    $('#slider').carousel({
        interval: 2000,
        pause: 'hover',
        wrap: true
    })

    /*
     * 一级菜单鼠标悬停时显示二级菜单
     */
    $('ul.parent').children('li').hover(function() {
        $(this).find('ul.sub').stop().slideDown();
    }, function() {
        $(this).find('ul.sub').stop().slideUp();
    });

    /*
     * 滚动时导航栏固定在最顶部
     */
    // 变量
    var primaryNav = $('#primary-nav');
    var main = $('main');
    var primaryNavHeight = primaryNav.height();
    var primaryNavOffsetTop = primaryNav.offset().top;
    // 监听滚动事件
    $(document).scroll(function(event) {
        if (primaryNavOffsetTop < $(document).scrollTop()) {
            // 固定在顶部
            primaryNav.addClass('nav-fix-top');
            main.css('margin-top', primaryNavHeight);
        } else {
            // 随文档滚动
            primaryNav.removeClass('nav-fix-top');
            main.css('margin-top', 0);
        }
    });

    /**
     * 返回顶部
     */
    // 返回顶部  
    function getScrollTop() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    }
    function setScrollTop(value) 
    { 
        if (document.documentElement.scrollTop) 
        { 
            document.documentElement.scrollTop = value; 
        } 
        else 
        { 
            document.body.scrollTop = value; 
        } 
    }
    // 弹性返回顶部，展现滚动的动画
    var goToTop = $('#go-to-top');
    goToTop.click(function(event) {
        var goTop = setInterval(scrollMove, 12); 
        function scrollMove() 
        { 
            setScrollTop(getScrollTop() / 1.1); 
            if (getScrollTop() < 1) clearInterval(goTop); 
        } 
    });
    // 自动隐藏放回顶部按钮
    $(window).scroll(function(event) {
        getScrollTop()>0 ? goToTop.fadeIn('fast') : goToTop.fadeOut('fast');
    });
})